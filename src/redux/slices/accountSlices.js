import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loan: "",
  balance: "",
  loanPurpose: "",
  isLoading: false,
};

const accountSlices = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      (state.balance += action.payload), (state.isLoading = false);
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },
      reducer(state, action) {
        if (state.loan > 0) return;

        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance += action.payload.amount;
      },
    },
    payloan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json;
    const consverted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: consverted });
  };
}
