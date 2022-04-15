import { Dispatch } from "redux";
import { CREATE_WALLET, UPDATE_WALLET, Wallet } from "./type";
import * as Random from 'expo-random';

export function createWallet({ name, balance }: Wallet) {
  return async (dispatch: Dispatch) => {
    const id = Random.getRandomBytes(64);
    const createdAt = new Date();
    dispatch({ type: CREATE_WALLET, payload: { id, name, balance, createdAt } });
  };
}

export function updateWallet({ id, name, balance }: Wallet) {
  return async (dispatch: Dispatch) => {
    const updatedAt = new Date();
    dispatch({ type: UPDATE_WALLET, payload: { id, name, balance, updatedAt } });
  };
}
