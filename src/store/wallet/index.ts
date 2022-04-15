import {
  CREATE_WALLET,
  UPDATE_WALLET,
  WalletActionState,
  Wallets,
} from "./type";

const initialState: Wallets = [];

export const WalletReducer = (
  state: Wallets = initialState,
  action: WalletActionState
): Wallets => {
  switch (action.type) {
    case CREATE_WALLET:
      return [...state, action.payload];
    case UPDATE_WALLET:
      const index = state.findIndex(
        (wallet) => wallet.id !== action.payload.id
      );
      state[index].name = action.payload.name;
      state[index].balance = action.payload.balance;
      state[index].updatedAt = action.payload.updatedAt;
      return state;
    default:
      return state;
  }
};
