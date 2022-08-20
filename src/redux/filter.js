import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter:
  [
    {
        "from": {
            "code": "BTC",
            "name": "Bitcoin BTC "
        },
        "to": [
            {
                "code": "CASHRUB",
                "name": " Наличные RUB"
            },
            {
                "code": "CASHUSD",
                "name": " Наличные USD"
            },
            {
                "code": "SBERRUB",
                "name": " Сбербанк RUB"
            },
            {
                "code": "ACRUB",
                "name": " Альфа-банк RUB"
            },
            {
                "code": "TCSBRUB",
                "name": " Тинькофф RUB"
            },
{
                "code": "USDTTRC",
                "name": " Tether TRC-20 USDTTRC"
            }
        ]
    },
    {
        "from": {
            "code": "ETH",
            "name": "Ethereum ETH "
        },
        "to": [
            {
                "code": "CASHUSD",
                "name": " Наличные USD"
            },
            {
                "code": "CASHRUB",
                "name": " Наличные RUB"
            },
            {
                "code": "SBERRUB",
                "name": " Сбербанк RUB"
            },
            {
                "code": "ACRUB",
                "name": " Альфа-банк RUB"
            },
            {
                "code": "TCSBRUB",
                "name": " Тинькофф RUB"
            },
        ]
    },
    {
        "from": {
            "code": "CASHUSD",
            "name": "Наличные USD "
        },
        "to": [
            {
                "code": "BTC",
                "name": " Bitcoin BTC"
            },
            {
                "code": "ETH",
                "name": " Ethereum ETH"
            },
            {
                "code": "USDTTRC",
                "name": " Tether TRC20 USDT"
            }
        ]
    },
    {
        "from": {
            "code": "CASHRUB",
            "name": "Наличные RUB "
        },
        "to": [
            {
                "code": "BTC",
                "name": " Bitcoin BTC"
            },
            {
                "code": "ETH",
                "name": " Ethereum ETH"
            },
            {
                "code": "USDTTRC",
                "name": " Tether TRC20 USDT"
            }
        ]
    },
    {
        "from": {
            "code": "ACRUB",
            "name": "Альфа-банк RUB "
        },
        "to": [
            {
                "code": "BTC",
                "name": " Bitcoin BTC"
            },
            {
                "code": "ETH",
                "name": " Ethereum ETH"
            },
            {
                "code": "USDTTRC",
                "name": " Tether TRC20 USDT"
            }
        ]
    },
    {
        "from": {
            "code": "SBERRUB",
            "name": "Сбербанк RUB "
        },
        "to": [
            {
                "code": "BTC",
                "name": " Bitcoin BTC"
            },
            {
                "code": "ETH",
                "name": " Ethereum ETH"
            },
            {
                "code": "USDTTRC",
                "name": " Tether TRC20 USDT"
            },
            {
                "code": "PMUSD",
                "name": " PerfectMoney USD"
            },
            {
                "code": "TRX",
                "name": " TRON TRX"
            },
            {
                "code": "P24UAH",
                "name": " Приват24 UAH"
            },
            {
                "code": "MONOBUAH",
                "name": " Монобанк UAH"
            },
            {
                "code": "CARDUAH",
                "name": " Visa/Mastercard UAH"
            }
        ]
    },
    {
        "from": {
            "code": "TCSBRUB",
            "name": "Тинькофф RUB "
        },
        "to": [
            {
                "code": "BTC",
                "name": " Bitcoin BTC"
            },
            {
                "code": "ETH",
                "name": " Ethereum ETH"
            },
            {
                "code": "USDTTRC",
                "name": " Tether TRC20 USDT"
            },
            {
                "code": "PMUSD",
                "name": " PerfectMoney USD"
            },
            {
                "code": "TRX",
                "name": " TRON TRX"
            },
            {
                "code": "P24UAH",
                "name": " Приват24 UAH"
            },
            {
                "code": "MONOBUAH",
                "name": " Монобанк UAH"
            }
        ]
    },
    {
        "from": {
            "code": "USDTTRC",
            "name": "Tether TRC20 USDT "
        },
        "to": [
            {
                "code": "ACRUB",
                "name": " Альфа RUB"
            },
            {
                "code": "TCSBRUB",
                "name": " Тинькофф RUB"
            },
            {
                "code": "SBERRUB",
                "name": " Сбербанк RUB"
            },
            {
                "code": "CARDRUB",
                "name": " Visa/Mastercard RUB"
            },
            {
                "code": "QWRUB",
                "name": " Qiwi RUB"
            },
            {
                "code": "CASHRUB",
                "name": " Наличные RUB"
            },
            {
                "code": "CASHUSD",
                "name": " Наличные USD"
            },
            {
                "code": "CARDUAH",
                "name": " Visa/Mastercard UAH"
            },
            {
                "code": "MONOBUAH",
                "name": " Монобанк UAH"
            },
            {
                "code": "WIREUAH",
                "name": " Любой банк UAH"
            },
            {
                "code": "OSDBUAH",
                "name": " Ощадбанк UAH"
            },
            {
                "code": "P24UAH",
                "name": " Приват24 UAH"
            },
            {
                "code": "BTC",
                "name": " Bitcoin BTC"
            },
            {
                "code": "CASHAED",
                "name": " Наличные AED"
            },
            {
                "code": "CNTRUB",
                "name": " Qiwi Contact RUB"
            }
        ]
    }
    ],
  nowActiveSelectorForTo: {}
}

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setToAll: (state) => {
      state.nowActiveSelectorForTo = {}
    },
    setToCrypto: (state) => {
      state.nowActiveSelectorForTo = {
        'CASHUSD': 1,
        'CASHRUB': 1,
        'ACRUB': 1,
        'SBERRUB': 1,
        'TCSBRUB': 1,
        'CARDRUB': 1,
        'MONOBUAH': 1,
        'WIREUAH': 1,
        'OSDBUAH': 1,
        'P24UAH': 1,
        'CASHAED': 1,
        'CNTRUB': 1,
      }
    },
    setToBRUB: (state) => {
      state.nowActiveSelectorForTo = {
        'CASHUSD': 1,
        'CASHRUB': 1,        
        'CARDRUB': 1,
        'MONOBUAH': 1,
        'WIREUAH': 1,
        'OSDBUAH': 1,
        'P24UAH': 1,
        'CASHAED': 1,
        'BTC': 1,
        'ETH': 1,
        'USDTTRC': 1,
      }
    },
    setToBUAH: (state) => {
      state.nowActiveSelectorForTo = {
        'CASHUSD': 1,
        'CASHRUB': 1,
        'ACRUB': 1,
        'SBERRUB': 1,
        'TCSBRUB': 1,
        'CARDRUB': 1,
        'QWRUB': 1,
        'CASHAED': 1,
        'CNTRUB': 1,
        'BTC': 1,
        'ETH': 1,
        'USDTTRC': 1,
      }
    },
    setToCash: (state) => {
      state.nowActiveSelectorForTo = {
        'ACRUB': 1,
        'SBERRUB': 1,
        'TCSBRUB': 1,
        'CARDRUB': 1,
        'QWRUB': 1,
        'CARDUAH': 1,
        'MONOBUAH': 1,
        'WIREUAH': 1,
        'OSDBUAH': 1,
        'P24UAH': 1,
        'CNTRUB': 1,
        'BTC': 1,
        'ETH': 1,
        'USDTTRC': 1,
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const {setToAll, setToCrypto, setToBRUB, setToBUAH, setToCash } = filter.actions

export default filter.reducer
