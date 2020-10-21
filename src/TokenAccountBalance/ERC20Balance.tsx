import React from 'react';
import AccountIcon from '@material-ui/icons/AccountBalanceWallet';
import { fromWei } from 'web3-utils';

import Section from '../components/Section';
import { useERC20 } from '../context/ERC20TokenContext';
import { Errors } from '../utils';
import LoadingHelper from '../components/LoadingHelper';
import { Box, Typography } from '@material-ui/core';
import useDelayInterval from '../hooks/useDelayInterval';

interface IProps {
  address: string;
  tokenAddress: string;
}

const CHECK_ACCOUNT_INTERVAL_MS = 2000;

const ERC20Balance: React.FC<IProps> = ({ tokenAddress, address }) => {
  const { erc20Token } = useERC20();

  const { value, error, isPending } = useDelayInterval(
    () => erc20Token.getBalanceAsync(tokenAddress, address),
    CHECK_ACCOUNT_INTERVAL_MS,
    [tokenAddress, address]
  );

  return (
    <Section title="Balance">
      <LoadingHelper
        isPending={isPending}
        error={error}
        errorMessage={Errors.BALANCE_ERROR}
      >
        <Box display="flex" alignItems="center">
          <AccountIcon />
          <Typography>
            {fromWei(value ? '' + value : '0', 'ether')} Ether
          </Typography>
        </Box>
      </LoadingHelper>
    </Section>
  );
};

export default ERC20Balance;
