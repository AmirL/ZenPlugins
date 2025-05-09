import _ from 'lodash'
import { parsePdf as commonParsePdf } from '../../common/pdfUtils'
import { TemporaryError } from '../../errors'
import { openWebViewAndInterceptRequest } from '../../common/network'

export function parseTransactions (text) {
  const transactionListRegex = /Комиссия\s+No\s+карточки\/счета\s+(?:Выписка\s+по\s+счету:\s+KZ\d+[^\S\r\n]*\d*)?([\s\S]+?)(?:(?:Дата\s+проведения)|(?:Место\s+печати))/g
  const transactionListText = [...text.matchAll(transactionListRegex)].map(match => match[1].trim()).join('\n')
  const transactionRegex = /(\d{2}\.\d{2}\.\d{4})\s+(\d{2}\.\d{2}\.\d{4})\s+([\s\S]+?)\s+(-?)\s*([\d\s]+,\d{2})\s+([A-Z]{0,3})\s*(-?)\s*([\d\s]+,\d{2})\s+(-?)\s*([\d\s]+,\d{2})\s+(-?)\s*([\d\s]+,\d{2})\s*([KZ\d*]+)?/g
  return [...transactionListText.matchAll(transactionRegex)].map(match => {
    return {
      date: match[1],
      description: match[3].replace(/[\n\r]+/g, ' '),
      amount: match[4] + match[5],
      currency: match[6],
      income: match[7] + match[8],
      expense: match[9] + match[10],
      fee: match[11] + match[12],
      accountNumber: match[13] || null
    }
  })
}

export function parseAccounts (text) {
  try {
    return parseCardAccount(text)
  } catch (e) {
    return parseMulticurrencyAccount(text)
  }
}

function parseMulticurrencyAccount (statement) {
  const accountRegex = /Номер счета (\w+): (KZ\d{18})/g
  const balanceRegex = /Исходящий остаток: ([\d,.\s]+(?:\w+;[\d,.\s]+)*)/
  const availableRegex = /Доступная сумма с учетом кредитного лимита(?:.|\n)*в валюте: ((?:[\d,.\s]+\s*[A-Z]{3};){3})/
  const statementDateRegex = /Дата формирования выписки: (\d{2}.\d{2}.\d{4})/

  const accounts = []
  let match

  const statementDateMatch = statementDateRegex.exec(statement)
  const statementDate = statementDateMatch ? statementDateMatch[1] : ''

  function parseValues (text) {
    return (text || '').split(';').map(part => part.trim()).reduce((values, str) => {
      const parts = str.split(/\s+/)
      values[parts[parts.length - 1]] = parts.slice(0, parts.length - 1).join(' ')
      return values
    }, {})
  }

  const balanceMatch = balanceRegex.exec(statement)
  const availableMatch = availableRegex.exec(statement)

  const balances = parseValues(balanceMatch ? balanceMatch[1] : '')
  const availableAmounts = parseValues(availableMatch ? availableMatch[1] : '')

  while ((match = accountRegex.exec(statement)) !== null) {
    const currency = match[1]
    const accountNumber = match[2]

    accounts.push({
      accountNumber,
      available: availableAmounts[currency] || '0.00',
      balance: balances[currency] || '0.00',
      currency,
      statementDate
    })
  }

  return accounts
}

export function parseCardAccount (text) {
  const balanceMatch = text.match(/Исходящий\s+остаток:\s+(-?)\s*([\d\s]+,\d{2})/)
  const availableMatch = text.match(/Доступная\s+сумма\s+с\s+учетом\s+кредитного\s+лимита\s+на\s+дату\s+формирования\s+выписки:\s+(-?)\s*([\d\s]+,\d{2})/)
  return [
    {
      currency: text.match(/Валюта\s+счета:\s+([A-Z]{3})/)[1],
      accountNumber: text.match(/Номер\s+счета:\s+([A-Z\d]+)/)[1],
      cardNumber: text.match(/Номер\s+карточки:\s+([\d*]+)/)?.[1],
      balance: balanceMatch[1] + balanceMatch[2],
      available: availableMatch[1] + availableMatch[2],
      statementDate: text.match(/Дата\s+формирования\s+выписки:\s+(\d{2}\.\d{2}\.\d{4})/)[1]
    }
  ]
}

export async function parsePdf () {
  await showHowTo()
  const pdfs = await ZenMoney.pickDocuments(['application/pdf'], true)
  if (!pdfs || !pdfs.length) {
    throw new TemporaryError('Выберите один или несколько файлов в формате .pdf')
  }
  for (const {
    size,
    type
  } of pdfs) {
    if (type !== 'application/pdf') {
      throw new TemporaryError('Выписка должна быть в расширении .pdf')
    } else if (size >= 1000 * 1000) {
      throw new TemporaryError('Максимальный размер файла - 1 мб')
    }
  }
  return _.flatten(await Promise.all(pdfs.map(async pdf => {
    const { text } = await commonParsePdf(pdf)
    if (!/АО\s+"Народный\s+Банк\s+Казахстана"/.test(text)) {
      throw new TemporaryError('Похоже, это не выписка Halyk Bank')
    }
    const accounts = parseAccounts(text)
    const accountByNumber = _.keyBy(accounts, account => account.accountNumber)
    const accountByCurrency = _.keyBy(accounts, account => account.currency)
    const transactions = parseTransactions(text)
    const transactionsByAccountNumber = _.groupBy(transactions, transaction => {
      const account = accountByNumber[transaction.accountNumber] || accountByCurrency[transaction.currency]
      return account
        ? account.accountNumber
        : transaction.accountNumber
    })
    return accounts.map(account => ({
      ...account,
      transactions: transactionsByAccountNumber[account.accountNumber] || []
    }))
  })))
}

async function showHowTo () {
  if (ZenMoney.getData('showHowTo') === false) {
    return
  }
  try {
    await openWebViewAndInterceptRequest({
      url: 'https://api.zenmoney.app/plugins/halyk/how-to/',
      intercept: (request) => {
        return request.url.includes('plugins/halyk/callback/')
      }
    })
    ZenMoney.setData('showHowTo', false)
    ZenMoney.saveData()
  } catch (e) {
    // nothing
  }
}
