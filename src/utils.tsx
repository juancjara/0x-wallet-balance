import { Web3Wrapper } from '@0x/web3-wrapper';

export const isValidENSName = (name: string | null) =>
  name && new RegExp(/(.*\.eth$)|(.*\.addr\.reverse$)|(.*\.test$)/).test(name);

export const isValidAddress = (address: string | null) =>
  address && Web3Wrapper.isAddress(address);

export const isValidAccount = (account: string | null) =>
  isValidENSName(account) || isValidAddress(account);

export const Errors = {
  INVALID_INPUT: 'Invalid owner address or ENS name',
  INVALID_TOKEN_ADDRESS: 'Please provider a valid token address',
  ENS_NAME_NOT_FOUND: 'ENS Name not found',
  BALANCE_ERROR: 'Balance could not be retreived',
  ADDRESS_NOT_FOUND: 'Address not found. Could not resolve the ENS name',
};
