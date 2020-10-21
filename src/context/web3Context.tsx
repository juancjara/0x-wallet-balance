import React, { createContext, useContext } from 'react';
import { Web3Wrapper } from '@0x/web3-wrapper';

interface IContext {
  web3: Web3Wrapper;
  provider: any;
}

const Web3Context = createContext<IContext>({
  web3: {} as Web3Wrapper,
  provider: {},
});

interface IProps {
  children: React.ReactNode;
}

const Web3Provider: React.FC<IProps> = ({ children }) => {
  const provider = (window as any).web3.currentProvider;
  const web3: Web3Wrapper = new Web3Wrapper(provider);

  return (
    <Web3Context.Provider value={{ web3, provider }}>
      {children}
    </Web3Context.Provider>
  );
};

const useWeb3 = () => useContext(Web3Context);

export { Web3Provider, useWeb3 };
