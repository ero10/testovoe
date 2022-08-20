import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
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
}

export const directions = createSlice({
  name: 'directions',
  initialState,
  reducers: {
    setNowActiveCode: (state, action) => {
      state.nowActiveCode = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setNowActiveCode } = directions.actions

export default directions.reducer
