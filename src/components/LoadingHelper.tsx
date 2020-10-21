import React from 'react';

import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

interface IProps {
  isPending: boolean;
  error: any;
  errorMessage: string;
  children: any;
}

const LoadingHelper: React.FC<IProps> = ({
  isPending,
  error,
  errorMessage,
  children,
}) => {
  if (isPending) return <Loader />;
  if (error) return <ErrorMessage message={errorMessage} />;
  return children;
};

export default LoadingHelper;
