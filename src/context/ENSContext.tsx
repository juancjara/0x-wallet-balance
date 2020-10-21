import React, { createContext, useContext } from 'react';
import ENS from 'ethereum-ens';

interface IContext {
  reverse(address: string): Promise<string>;
  resolver(address: string): Promise<string>;
}

const ENSContext = createContext<IContext>({
  reverse: () => Promise.reject(new Error('ENSProvider not yet ready.')),
  resolver: () => Promise.reject(new Error('ENSProvider not yet ready.')),
});

interface IProps {
  children: React.ReactNode;
}

const ENSProvider: React.FC<IProps> = ({ children }) => {
  const provider = (window as any).web3.currentProvider;
  const ens = new ENS(provider);
  const resolver = (name: string) => ens.resolver(name).addr();
  const reverse = async (address: string) => {
    const name = await ens.reverse(address).name();
    //https://docs.ens.domains/dapp-developer-guide/resolving-names#reverse-resolution
    //check to be sure the reverse record is correct
    if (address === (await resolver(name))) {
      return Promise.resolve(name);
    }
    return Promise.reject('No match');
  };

  return (
    <ENSContext.Provider value={{ reverse, resolver }}>
      {children}
    </ENSContext.Provider>
  );
};

const useENS = () => useContext(ENSContext);

export { ENSProvider, useENS };
