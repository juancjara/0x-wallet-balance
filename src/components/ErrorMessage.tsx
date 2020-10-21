import React from 'react';
import Typography from '@material-ui/core/Typography';
import ErrorIcon from '@material-ui/icons/Error';
import Box from '@material-ui/core/Box';

interface IProps {
  message: string;
}

const ErrorMessage: React.FC<IProps> = ({ message }) => {
  return (
    <Box display="flex" alignItems="center" px={1}>
      <Typography color="error">{message}</Typography>
      <ErrorIcon color="error" />
    </Box>
  );
};

export default ErrorMessage;
