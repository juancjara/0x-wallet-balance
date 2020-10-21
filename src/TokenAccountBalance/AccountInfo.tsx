import React, { useCallback } from 'react';
import Typography from '@material-ui/core/Typography';

import { isValidAddress, Errors } from '../utils';
import usePromise from '../hooks/usePromise';
import { useENS } from '../context/ENSContext';
import ErrorMessage from '../components/ErrorMessage';
import Section from '../components/Section';
import ENSName from './ENSName';
import ERC20Balance from './ERC20Balance';
import Loader from '../components/Loader';

interface IProps {
  account: string;
  tokenAddress: string;
}

const AccountInfo: React.FC<IProps> = ({ account, tokenAddress }) => {
  const isAddress = isValidAddress(account);
  const { resolver } = useENS();

  const fetchAddress = useCallback(() => {
    if (isAddress) {
      return Promise.resolve(account);
    } else {
      return resolver(account);
    }
  }, [account, isAddress, resolver]);

  const { value: address = '', error, isPending } = usePromise(fetchAddress, [
    account,
  ]);

  if (isPending) return <Loader />;
  if (error || !address)
    return <ErrorMessage message={Errors.ADDRESS_NOT_FOUND} />;

  return (
    <div>
      <ERC20Balance tokenAddress={tokenAddress} address={address} />
      <Section title="ENS Info">
        {isAddress ? (
          <ENSName address={address} />
        ) : (
          <Typography>Address: {address}</Typography>
        )}
      </Section>
    </div>
  );
};

export default AccountInfo;
