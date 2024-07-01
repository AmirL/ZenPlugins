import { convertTransaction } from '../../../converters'

describe('payment', () => {
  it('FX payment', () => {
    expect(convertTransaction({
      CurrencyCode: 'USD',
      ID: -1,
      TransactionID: '10152214197777#2#81#320042687777',
      ProcessedDate: '2024-01-09T00:00:00',
      CurrentBalance: null,
      CurrencyCodeNumeric: 840,
      ChequeCardNumber: '405477******6126',
      fwStatus: 1,
      ClientDescription: 'Dinarsko knjigovodstvo',
      ToDate: '2024-01-25T00:00:00',
      CreditAmount: 0.0,
      TransactionBeneficiary: 'CLESS TICKET ATM MILANO ITA MILANO',
      fwNamespace: 'SagaBG.SeP.RetailOutput',
      IBANNumber: 'RS35265057000005597777',
      ClientAddress: 'SECRET STREET 1',
      SocialIdentityNumber: '0803991667777',
      DebitAmount: 0.02,
      PreviousBalance: null,
      Reference: '320042687777',
      AccountNumber: '265057000005597777',
      SalesAgreementNumber: null,
      FromDate: '2023-12-18T00:00:00',
      Description: 'CLESS TICKET ATM MILANO ITA MILANO',
      ClientLocality: '11172 BEOGRAD-NOVI BEOGRAD',
      Note: '777777',
      ValueDate: '2024-01-09T00:00:00',
      ComplaintNumber: '10152214197777000002',
      TransactionType: 'POS',
      BeneficiaryAccount: null,
      ProductCodeCore: 541,
      AmountTotal: null,
      ClientName: 'LUCKY MAN',
      fwType: 'aoRetailAccountTurnoverPreview',
      Details: {
        mpay_merchant_code: null,
        CommissionCurrencyCode: null,
        p2p_Message: null,
        e_UserName: null,
        tn_Description: null,
        fwType: 'aoFullTransactionDetails',
        p2p_ExpiryDate: null,
        dev_cred_bank_address_locality: null,
        e_DebtorName: null,
        s_Note_st: 'CLESS TICKET ATM MILANO ITA MILANO',
        m_Date: null,
        DebtorAddress: null,
        c_CurrencyCode_tx: 'EUR',
        c_CalculationDate: '2024-01-09T00:00:00',
        dev_cred_address_locality: null,
        DebtorLocality: null,
        dev_Charge: null,
        Reference: null,
        c_CardNumber: '405477******7777',
        m_CommissionAmount: null,
        s_ValueDate: '2024-01-09T00:00:00',
        m_DebtorCurrencyCodeNumeric: null,
        dev_CreditorAddressCountry: null,
        UserAccount: null,
        p2p_DebtorGroup: null,
        m_DebtorAmount: null,
        p2p_CurrencyCodeNumeric: null,
        CommissionAmount: null,
        m_UserCurrencyCode: null,
        p2p_PaymentCode: null,
        e_DebtorAlias: null,
        mpay_payment_type: null,
        p2p_CurrencyCode: null,
        p2p_RealizationDate: null,
        m_BankLocality: null,
        UserAddress: null,
        CurrencyCodeNumeric: null,
        m_UserID: null,
        Model: null,
        s_ProcessedDate: '2024-01-09T00:00:00',
        fwNamespace: 'SagaBG.SeP.RetailOutput',
        Alias: null,
        Priority: null,
        s_CurrencyCodeNumeric: 840,
        c_DomesticAmount: 2.375078,
        e_DebtorAccount: null,
        s_OrderNumber: '10152214197777',
        m_JobDescription: null,
        m_AmountTotal: null,
        m_UserAmount: null,
        CurrencyCode: null,
        ReceiveDate: null,
        m_DebtorName: null,
        ValueDate: null,
        e_UserAlias: null,
        c_TerminalID: '93287777',
        s_StatementID: null,
        e_Channel: null,
        DebtorAccount: null,
        e_ID: null,
        e_UserLocality: null,
        dev_SpecAmount: null,
        p2p_CreateDate: null,
        ID: -1,
        m_DebtorCurrencyCode: null,
        m_CommissionPercentage: null,
        dev_cred_address_postal_code: null,
        DebtorName: null,
        m_DebtorGroup: null,
        dev_SpecCurrency: null,
        fwStatus: 1,
        m_ExchangeNumber: null,
        dev_cred_bank_address_postal: null,
        m_UserAlias: null,
        e_DebtorLocality: null,
        m_PayDeskNumber: null,
        dev_cred_address_line: null,
        dev_SpecPurposeCode: null,
        c_DebtorDetails: 'CLESS TICKET ATM MILANO ITA MILANO',
        PaymentAmount: null,
        p2p_Amount: null,
        CommissionCurrencyCodeNumeric: null,
        m_JobType: null,
        OrderNumber_pp: null,
        dev_BulkId: null,
        ReceiverReference: null,
        iBankingCreditorTypeFRN: null,
        m_DebtorAlias: null,
        m_CommissionCurrencyCodeNumeric: null,
        UserLocality: null,
        c_AuthorizationID: '777777',
        s_CurrencyCode: 'USD',
        m_Course: null,
        dev_PersonalNumber: null,
        dev_SpecInvoiceYear: null,
        tn_ValueDate: null,
        m_Basics: null,
        e_UserAccount: null,
        mpay_sales_point_code: null,
        s_AccountPurpose: 'A vista računi fizičkih lica u stranoj valuti',
        c_Reference: 3200426877777,
        dev_cred_bank_address_line: null,
        PaymentCode: null,
        s_Alias: null,
        PaymentStatusName: null,
        dev_cred_bank_address_country: null,
        dev_SpecPaymentDescription: null,
        s_PaymentBasis: 102,
        End2endID: null,
        s_Group: '265057000005597777',
        m_TransactionID: null,
        p2p_Alias: null,
        m_DebtorID: null,
        iBankingProcessedDateCoreFRN: null,
        c_Date_tx: '2024-01-07T00:00:00',
        PaymentPurpose: null,
        c_Alias: null,
        s_ConfirmationDate: '2024-01-10T08:24:28',
        dev_creditor_bank: null,
        m_UserGroup: null,
        m_UserName: null,
        dev_SpecialMark: null,
        UserName: null,
        m_CommissionCurrencyCode: null,
        dev_CreditorBankSwiftCode: null,
        m_ExchangeName: null,
        dev_SwiftMessage: null,
        PaymentState: null,
        s_Amount: 0.02,
        dev_Status: null,
        p2p_Status: null,
        m_Operator: null,
        m_UserCurrencyCodeNumeric: null,
        p2p_IssueDate: null,
        dev_AuthorizationType: null,
        dev_ComissionAccount: null,
        m_OrderNumber: null,
        m_UserType: null,
        c_Amount_tx: 0.02,
        dev_SpecInvoiceNumber: null,
        m_ExchangeOfficeLocality: null
      }
    })).toEqual({
      comment: null,
      date: new Date('2024-01-07T00:00:00'),
      hold: false,
      merchant: {
        fullTitle: 'CLESS TICKET ATM MILANO ITA MILANO',
        location: null,
        mcc: null
      },
      movements: [
        {
          account: {
            id: '265057000005597777USD'
          },
          fee: 0,
          id: '10152214197777#2#81#320042687777',
          invoice: {
            instrument: 'EUR',
            sum: -0.02
          },
          sum: -0.02
        }
      ]
    })
  })

  it('PmtDom payment', () => {
    expect(convertTransaction({
      CurrencyCode: 'RSD',
      ID: -1,
      TransactionID: '1045241019565199#3#9#5045241019564267',
      ProcessedDate: '2024-04-10T00:00:00',
      CurrentBalance: 236915.97,
      CurrencyCodeNumeric: 941,
      ChequeCardNumber: null,
      fwStatus: 1,
      ClientDescription: 'Dinarsko knjigovodstvo',
      ToDate: '2024-04-10T00:00:00',
      CreditAmount: 0,
      TransactionBeneficiary: 'Marko Markovic',
      fwNamespace: 'SagaBG.SeP.RetailOutput',
      IBANNumber: 'RS35265000000638688553',
      ClientAddress: '<string[18]>',
      SocialIdentityNumber: '<string[13]>',
      DebitAmount: 1500,
      PreviousBalance: 80256.98,
      Reference: '<string[16]>',
      AccountNumber: '265000000638688553',
      SalesAgreementNumber: null,
      FromDate: '2024-03-27T00:00:00',
      Description: 'Transakcije po nalogu gradjana',
      ClientLocality: '11197 BEOGRAD-NOVI BEOGRAD',
      Note: '<string[65]>',
      ValueDate: '2024-04-10T11:57:58',
      ComplaintNumber: '1045241019565199000002',
      TransactionType: 'PmtDom',
      BeneficiaryAccount: '160510010295205085',
      ProductCodeCore: 33,
      AmountTotal: 236915.97,
      ClientName: '<string[12]>',
      fwType: 'aoRetailAccountTurnoverPreview',
      Details: {
        mpay_merchant_code: null,
        CommissionCurrencyCode: 'RSD',
        p2p_Message: null,
        e_UserName: 'Marko Janjic',
        tn_Description: null,
        fwType: 'aoFullTransactionDetails',
        p2p_ExpiryDate: null,
        dev_cred_bank_address_locality: null,
        e_DebtorName: 'BOJAN BOJANOVIC, JURIJA GAGARINA 126 , BEOGRAD-NOVI BEOGRAD',
        s_Note_st: '<string[65]>',
        m_Date: null,
        DebtorAddress: null,
        c_CurrencyCode_tx: null,
        c_CalculationDate: null,
        dev_cred_address_locality: null,
        DebtorLocality: null,
        dev_Charge: null,
        Reference: null,
        c_CardNumber: null,
        m_CommissionAmount: null,
        s_ValueDate: '2024-04-10T00:00:00',
        m_DebtorCurrencyCodeNumeric: null,
        dev_CreditorAddressCountry: null,
        UserAccount: '<string[18]>',
        p2p_DebtorGroup: null,
        m_DebtorAmount: null,
        p2p_CurrencyCodeNumeric: null,
        CommissionAmount: 0,
        m_UserCurrencyCode: null,
        p2p_PaymentCode: null,
        e_DebtorAlias: null,
        mpay_payment_type: null,
        p2p_CurrencyCode: null,
        p2p_RealizationDate: null,
        m_BankLocality: null,
        UserAddress: null,
        CurrencyCodeNumeric: 941,
        m_UserID: null,
        Model: null,
        s_ProcessedDate: '2024-04-10T00:00:00',
        fwNamespace: 'SagaBG.SeP.RetailOutput',
        Alias: null,
        Priority: 1,
        s_CurrencyCodeNumeric: 941,
        c_DomesticAmount: null,
        e_DebtorAccount: '265000000638688553',
        s_OrderNumber: '1045241019565199',
        m_JobDescription: null,
        m_AmountTotal: null,
        m_UserAmount: null,
        CurrencyCode: 'RSD',
        ReceiveDate: '2024-04-10T11:57:53',
        m_DebtorName: null,
        ValueDate: '2024-04-10T00:00:00',
        e_UserAlias: null,
        c_TerminalID: null,
        s_StatementID: null,
        e_Channel: '1',
        DebtorAccount: '<string[18]>',
        e_ID: '1164380412',
        e_UserLocality: null,
        dev_SpecAmount: null,
        p2p_CreateDate: null,
        ID: -1,
        m_DebtorCurrencyCode: null,
        m_CommissionPercentage: null,
        dev_cred_address_postal_code: null,
        DebtorName: 'BOJAN BOJANOVIC, JURIJA GAGARINA 126 , BEOGRAD-NOVI BEOGRAD',
        m_DebtorGroup: null,
        dev_SpecCurrency: null,
        fwStatus: 1,
        m_ExchangeNumber: null,
        dev_cred_bank_address_postal: null,
        m_UserAlias: null,
        e_DebtorLocality: null,
        m_PayDeskNumber: null,
        dev_cred_address_line: null,
        dev_SpecPurposeCode: null,
        c_DebtorDetails: null,
        PaymentAmount: 1500,
        p2p_Amount: null,
        CommissionCurrencyCodeNumeric: 941,
        m_JobType: null,
        OrderNumber_pp: '<number>',
        dev_BulkId: null,
        ReceiverReference: null,
        iBankingCreditorTypeFRN: null,
        m_DebtorAlias: null,
        m_CommissionCurrencyCodeNumeric: null,
        UserLocality: null,
        c_AuthorizationID: null,
        s_CurrencyCode: 'RSD',
        m_Course: null,
        dev_PersonalNumber: null,
        dev_SpecInvoiceYear: null,
        tn_ValueDate: null,
        m_Basics: null,
        e_UserAccount: '160510010295205085',
        mpay_sales_point_code: null,
        s_AccountPurpose: 'Transakcioni račun za redovno poslovanje FL',
        c_Reference: null,
        dev_cred_bank_address_line: null,
        PaymentCode: 289,
        s_Alias: null,
        PaymentStatusName: 'Nalog odobrenja izvršen u eksternom platnom prometu',
        dev_cred_bank_address_country: null,
        dev_SpecPaymentDescription: null,
        s_PaymentBasis: 289,
        End2endID: null,
        s_Group: '265000000638688553',
        m_TransactionID: null,
        p2p_Alias: null,
        m_DebtorID: null,
        iBankingProcessedDateCoreFRN: null,
        c_Date_tx: null,
        PaymentPurpose: 'Transakcije po nalogu gradjana',
        c_Alias: null,
        s_ConfirmationDate: '2024-04-10T11:57:58',
        dev_creditor_bank: null,
        m_UserGroup: null,
        m_UserName: null,
        dev_SpecialMark: null,
        UserName: '<string[12]>',
        m_CommissionCurrencyCode: null,
        dev_CreditorBankSwiftCode: null,
        m_ExchangeName: null,
        dev_SwiftMessage: null,
        PaymentState: 20,
        s_Amount: 1500,
        dev_Status: null,
        p2p_Status: null,
        m_Operator: null,
        m_UserCurrencyCodeNumeric: null,
        p2p_IssueDate: null,
        dev_AuthorizationType: null,
        dev_ComissionAccount: null,
        m_OrderNumber: null,
        m_UserType: null,
        c_Amount_tx: null,
        dev_SpecInvoiceNumber: null,
        m_ExchangeOfficeLocality: null
      }
    })).toEqual({
      date: new Date('2024-04-10T00:00:00'),
      hold: false,
      merchant: {
        fullTitle: 'Marko Markovic',
        location: null,
        mcc: null
      },
      movements: [
        {
          account: { id: '265000000638688553RSD' },
          fee: 0,
          id: '1045241019565199#3#9#5045241019564267',
          invoice: null,
          sum: -1500
        }
      ],
      comment: 'Transakcije po nalogu gradjana'
    })
  })
})