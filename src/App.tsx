import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import TokenAccountBalance from './TokenAccountBalance';
import { TextField } from '@material-ui/core';

const App: React.FC = () => {
  const [tokenAddress, setTokenAddress] = useState(
    '0xc778417e063141139fce010982780140aa0cd5ab'
  );
  const [accountAddress, setAccountAddress] = useState('');
  return (
    <div>
      <Typography variant="h4" color="primary">
        ERC20 Token balance
      </Typography>
      <Typography>Callback input content: {accountAddress}</Typography>
      <Box my={2}>
        <TextField
          fullWidth
          label="Token address"
          value={tokenAddress}
          onChange={e => setTokenAddress(e.target.value)}
        />
      </Box>
      <TokenAccountBalance
        tokenAddress={tokenAddress}
        onChange={setAccountAddress}
      />
    </div>
  );
};

export default App;
