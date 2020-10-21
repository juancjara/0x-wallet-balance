import React, { createContext, useContext } from 'react';
import { ContractWrappers, ERC20TokenWrapper } from '0x.js';

import { useWeb3 } from './web3Context';

interface IContext {
  erc20Token: ERC20TokenWrapper;
}

const ERC20Context = createContext<IContext>({
  erc20Token: {} as ERC20TokenWrapper,
});

interface IProps {
  children: React.ReactNode;
}

const DEFAULT_NETWORK = 1;

const ERC20Provider: React.FC<IProps> = ({ children }) => {
  const { web3, provider } = useWeb3();
  const contractWrapper: ContractWrappers = new ContractWrappers(provider, {
    networkId: +provider.networkVersion || DEFAULT_NETWORK,
  });
  web3.abiDecoder.addABI(contractWrapper.erc20Token.abi);
  return (
    <ERC20Context.Provider value={{ erc20Token: contractWrapper.erc20Token }}>
      {children}
    </ERC20Context.Provider>
  );
};

const useERC20 = () => useContext(ERC20Context);

export { ERC20Provider, useERC20 };
