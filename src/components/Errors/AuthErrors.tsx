import React from 'react';
import { Text } from '@chakra-ui/react';

export interface IAuthErrorsProps {
  error: string;
}

const AuthErrors: React.FC<IAuthErrorsProps> = (props) => {
  const { error } = props;

  if (error === '') return null;

  return (
    <Text color="red" fontSize={22} mt={4}>
      {error}
    </Text>
  );
};
export default AuthErrors;
