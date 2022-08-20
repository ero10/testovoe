import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  directions:
    [
      {
        "code": "BTC",
        "name": "Bitcoin BTC "
      },
      {
        "code": "ETH",
        "name": "Ethereum ETH "
      },
      {
        "code": "CASHUSD",
        "name": "Наличные USD "
      },
      {
        "code": "CASHRUB",
        "name": "Наличные RUB "
      },
      {
        "code": "ACRUB",
        "name": "Альфа-банк RUB "
      },
      {
        "code": "SBERRUB",
        "name": "Сбербанк RUB "
      },
      {
        "code": "TCSBRUB",
        "name": "Тинькофф RUB "
      },
      {
        "code": "USDTTRC",
        "name": "Tether TRC20 USDT "
      },
    ],
    nowActiveCode: 'BTC',
    nowActiveSelectorForFrom: {}
}

export const directions = createSlice({
  name: 'directions',
  initialState,
  reducers: {
    setNowActiveCode: (state, action) => {
      state.nowActiveCode = action.payload;
    },
    setFromAll: (state) => {
      state.nowActiveSelectorForFrom = {}
    },
    setFromCrypto: (state) => {
      state.nowActiveSelectorForFrom = {
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
    setFromBRUB: (state) => {
      state.nowActiveSelectorForFrom = {
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
    setFromBUAH: (state) => {
      state.nowActiveSelectorForFrom = {
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
    setFromCash: (state) => {
      state.nowActiveSelectorForFrom = {
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
export const { setNowActiveCode, setFromAll, setFromCrypto, setFromBRUB, setFromBUAH, setFromCash } = directions.actions

export default directions.reducer
