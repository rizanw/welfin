export interface Wallet {
  id: string;
  name: string;
  balance: number;
  createdAt: Date | undefined;
  updatedAt: Date | undefined;
}

export interface Wallets extends Array<Wallet> {}

export const CREATE_WALLET = "wallet/create";
export const UPDATE_WALLET = "wallet/update";

interface CreateWallet {
  type: typeof CREATE_WALLET;
  payload: Wallet;
}

interface UpdateWallet {
  type: typeof UPDATE_WALLET;
  payload: Wallet;
}

export type WalletActionState = CreateWallet | UpdateWallet;
