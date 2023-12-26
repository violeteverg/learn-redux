// ==== ver learning ====
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
      state.isLoading = false;
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
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;

export function deposit(amount, currency) {
  if (currency === "USD") return { type: "account/deposit", payload: amount };

  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });

    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;

    dispatch({ type: "account/deposit", payload: converted });
  };
}

export default accountSlice.reducer;

// export function deposit(amount, currency) {
//   if (currency === "USD") return { type: "account/deposit", payload: amount };

//   return async function (dispatch, getState) {
//     dispatch({ type: "account/convertingCurrency" });

//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;

//     dispatch({ type: "account/deposit", payload: converted });
//   };
// }

// ===== ver strugling ======

// import { createAsyncThunk, createSlice, createAction } from "@reduxjs/toolkit";

// const initialState = {
//   loan: 0,
//   balance: 0,
//   loanPurpose: "",
//   isLoading: false,
//   currency: "USD",
// };

// export const convertCurrency = async (amount, currency) => {
//   try {
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;
//     return converted;
//   } catch (error) {
//     console.error("Error converting currency:", error);
//     throw error;
//   }
// };

// export const deposito = createAsyncThunk(
//   "account/deposit",
//   async (amount, currency, { dispatch }) => {
//     dispatch(convertingCurrency());

//     try {
//       let convertedAmount = amount;
//       if (currency !== "USD") {
//         convertedAmount = await convertCurrency(amount, currency);
//       }

//       return convertedAmount;
//     } catch (error) {
//       console.error("Error depositing:", error);
//       throw error;
//     }
//   }
// );

// export const updateBalanceAfterConversion = createAction(
//   "account/updateBalanceAfterConversion",
//   (convertedAmount) => {
//     return {
//       payload: convertedAmount,
//     };
//   }
// );

// const accountSlice = createSlice({
//   name: "account",
//   initialState,
//   reducers: {
//     deposit(state, action) {
//       state.balance += action.payload;
//       state.isLoading = false;
//     },
//     withdraw(state, action) {
//       state.balance -= action.payload;
//     },
//     requestLoan: {
//       prepare(amount, purpose) {
//         return {
//           payload: { amount, purpose },
//         };
//       },
//       reducer(state, action) {
//         if (state.loan > 0) return;

//         state.loan = action.payload.amount;
//         state.loanPurpose = action.payload.purpose;
//         state.balance += action.payload.amount;
//       },
//     },
//     payloan(state) {
//       state.balance -= state.loan;
//       state.loan = 0;
//       state.loanPurpose = "";
//     },
//     convertingCurrency(state) {
//       state.isLoading = true;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(deposito.fulfilled, (state, action) => {
//       state.balance += action.payload;
//       state.isLoading = false;
//     });

//     builder.addCase(updateBalanceAfterConversion, (state, action) => {
//       state.balance += action.payload;
//       state.isLoading = false;
//     });
//   },
// });

// export const { deposit, withdraw, payloan, requestLoan, convertingCurrency } =
//   accountSlice.actions;

// export default accountSlice.reducer;
