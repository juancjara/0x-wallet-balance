import React, { useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { isValidAccount, Errors } from '../utils';

type IProps = {
  onChange: any;
};

const DEBOUNCE_TIME = 200;

const UserInput: React.FC<IProps> = ({ onChange }) => {
  const [text, setText] = useState('');
  const [debouncedCallback] = useDebouncedCallback(value => {
    onChange(value);
  }, DEBOUNCE_TIME);

  const onTextChange = (e: any) => {
    const value = e.target.value;
    setText(value);
    debouncedCallback(value);
  };

  const hasError = text && !isValidAccount(text);

  return (
    <FormControl error={!!hasError} fullWidth>
      <InputLabel htmlFor="account-input">Owner address or ENS name</InputLabel>
      <Input
        id="account-input"
        value={text}
        onChange={onTextChange}
        aria-describedby="account-error-text"
      />
      {hasError && (
        <FormHelperText id="account-error-text">
          {Errors.INVALID_INPUT}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default UserInput;
