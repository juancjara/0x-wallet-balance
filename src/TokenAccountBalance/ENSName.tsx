import React from 'react';
import Typography from '@material-ui/core/Typography';

import { useENS } from '../context/ENSContext';
import usePromise from '../hooks/usePromise';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import { Errors } from '../utils';

interface IProps {
  address: string;
}

const ENSName: React.FC<IProps> = ({ address }) => {
  const { reverse } = useENS();
  const { value: name, error, isPending } = usePromise(() => reverse(address), [
    address,
  ]);
  if (isPending) return <Loader />;
  if (error) return <ErrorMessage message={Errors.ENS_NAME_NOT_FOUND} />;
  return <Typography>Name: {name}</Typography>;
};

export default ENSName;
