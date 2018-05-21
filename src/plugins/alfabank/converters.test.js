import {normalizeIsoDate, parseApiMovementDescription, toZenmoneyAccount} from "./converters";

describe("toZenmoneyAccount", () => {
    it("maps api credit account", () => {
        expect(toZenmoneyAccount({
            "number": "98765432109876543210",
            "description": "Счёт кредитной карты",
            "amount": "15 294.21",
            "currencyCode": "RUR",
            "creditInfo": {
                "description": "Кредитная карта",
                "amountDebt": "1 705.79",
                "installmentCard": false,
                "nextPaymentAmount": "",
                "nextPaymentDate": "",
            },
        })).toEqual({
            "type": "ccard",
            "title": "Счёт кредитной карты",
            "id": "3210",
            "syncID": [
                "3210",
            ],
            "instrument": "RUR",
            "available": 15294.21,
            "creditLimit": 17000,
        });
    });

    it("maps api debit account", () => {
        expect(toZenmoneyAccount({
            "number": "01234567890123456789",
            "description": "Текущий счёт",
            "amount": "8 936.66",
            "currencyCode": "RUR",
            "actions": {
                "isAvailableForRename": true,
                "isAvailableForWithdrowal": true,
                "isMoneyBoxEdit": false,
            },
            "filters": [
                {
                    "operation": "accounts",
                    "title": "Счета",
                    "color": "#F03226",
                    "filterList": [
                        {
                            "name": "Текущий сч.. RUR ··1234",
                            "value": "01234567890123456789",
                        },
                    ],
                },
            ],
        })).toEqual({
            "type": "ccard",
            "title": "Текущий счёт",
            "id": "6789",
            "syncID": [
                "6789",
            ],
            "instrument": "RUR",
            "balance": 8936.66,
        });
    });
});

test("parseApiMovementDescription", () => {
    const descriptions = [
        "123456++++++7890    220674  /RU/Alfa Iss>SANKT-PETE                   01.02.03 01.02.03 12345.00      RUR",
        "123456++++++7890      123456\\789\\SANKT PETERBU\\Alfa Iss               01.02.03 01.02.03      1234.00  RUR MCC6011",
        "123456++++++7890    00123456\\643\\ST PETERSBURG\\st m chkalovs          01.02.03 01.02.03     12345.00  RUR",
        "123456++++++7890        0000\\USA\\4158004028\\REDASH IO                 01.02.03 01.02.03        12.34  USD MCC5734",
        "123456++++++7890        0000\\USA\\8889832664\\HELPSHIFT COM             01.02.03 01.02.03        12.34  USD",
        "123456++++++7890      123456\\RUS\\SANKT PETERBU\\WHSD NORTH             01.02.03 01.02.03        50.00  RUR MCC4784",
        "123456++++++7890    12345678\\RUS\\BORISOVO\\1 KH\\KAFE TRATTORI          01.02.03 01.02.03      1680.00  RUR MCC5812",
        "123456++++++7890    14687856\\FIN\\LAPPEENRANTA\\Dharahara Oy            01.02.03 01.02.03        35.00  EUR",
        "123456++++++7890    28127178\\THA\\SAMUTPRAKAN\\A\\CONVENNIENT G          01.02.03 01.02.03      1234.56  THB MCC7011",
        "123456++++++7890    809216  /RU/CARD2CARD ALFA_MOBILE>MOSCOW          01.02.03 01.02.03 15600.00      RUR MCC6536",
        "123456++++++7890    \\USA\\aws amazon co\\Amazon web se                  01.02.03 01.02.03          .12  USD MCC7399",
        "123456++++++7890    \\USA\\aws amazon co\\Amazon web se                  01.02.03 01.02.03          .12  USD",
        "12345678 JP SINNZIYUKUNEGISIYASUKU> 18.05.11 18.05.11 3500 JPY 123456++++++7890",
];
    const results = descriptions.map((input) => ({input, output: parseApiMovementDescription(input, -1)}));
    expect(results).toMatchSnapshot();
});

test("normalizeIsoDate normalizes isoDate for JavaScriptCore new Date(isoDate)", () => {
    expect(normalizeIsoDate("2017-12-01T12:00:00.000+0300")).toEqual("2017-12-01T12:00:00.000+03:00");
    expect(normalizeIsoDate("2017-12-01T12:00:00.000Z")).toEqual("2017-12-01T12:00:00.000Z");
    expect(normalizeIsoDate("2017-12-01T12:00:00.000-0550")).toEqual("2017-12-01T12:00:00.000-05:50");
});