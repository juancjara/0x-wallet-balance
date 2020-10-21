import React from 'react';

import { ENSProvider } from './ENSContext';
import { Web3Provider } from './web3Context';
import { ERC20Provider } from './ERC20TokenContext';

type IProps = {
  children: React.ReactNode;
};

const Providers: React.FC<IProps> = ({ children }) => (
  <Web3Provider>
    <ERC20Provider>
      <ENSProvider>{children}</ENSProvider>
    </ERC20Provider>
  </Web3Provider>
);

export default Providers;
