import React, { useState } from 'react';

import AccountInfo from './AccountInfo';
import UserInput from './UserInput';
import { isValidAccount, isValidAddress, Errors } from '../utils';
import ErrorMessage from '../components/ErrorMessage';

interface IProps {
  tokenAddress: string;
  onChange(account: string): any;
}

const Account: React.FC<IProps> = ({ tokenAddress, onChange }) => {
  const [account, setAccount] = useState('');
  if (!isValidAddress(tokenAddress)) {
    return <ErrorMessage message={Errors.INVALID_TOKEN_ADDRESS} />;
  }
  return (
    <div>
      <UserInput
        onChange={(account: string) => {
          setAccount(account);
          onChange(account);
        }}
      />
      {isValidAccount(account) && (
        <AccountInfo account={account} tokenAddress={tokenAddress} />
      )}
    </div>
  );
};

export default Account;
