import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Icon,
  Box,
  Text,
} from '@chakra-ui/react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { auth } from '../../config/firebase';
import logging from '../../config/logging';
import IPageProps from '../../interfaces/page';
import AuthErrors from '../../components/Errors/AuthErrors';

const SignUp: React.FunctionComponent<IPageProps> = (props) => {
  const [registering, setRegistering] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [show, setShow] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => setShow(!show);

  const signUpWithEmailAndPassword = () => {
    if (password !== confirm) {
      setError('Make sure youre passwords match');
      return;
    }
    if (error !== '') setError('');

    setRegistering(true);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        logging.info(result);
        navigate('/login');
      })
      .catch((error) => {
        logging.error(error);

        if (error.code.includes('auth/weak-password')) {
          setError('Please enter a stronger password');
        } else if (error.code.includes('auth/email-already-in')) {
          setError('Email already in use');
        } else {
          setError('Please make sure all fields are filled in correctly');
        }

        setRegistering(false);
      });
  };

  return (
    <>
      <Box px={10}>
        <Box
          as="h1"
          fontSize="31px"
          fontWeight="bold"
          textAlign="center"
          mb={8}
        >
          Join Twitter today
        </Box>
        <FormControl>
          <Input
            type="email"
            placeholder="Enter Email"
            id="email"
            mb={8}
            p="2rem 1rem"
            fontSize="20"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <InputGroup size="md">
            <Input
              p="2rem 1rem"
              type={show ? 'text' : 'password'}
              placeholder="Enter password"
              id="password"
              mb={8}
              fontSize="20"
              autoComplete="new-password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            <InputRightElement width="3rem" height="4rem">
              <Button
                h="4rem"
                size="md"
                variant="ghost"
                _hover={{ bg: 'white.100' }}
                _focus={{ bg: 'white.100' }}
                _active={{ bg: 'white.100' }}
                onClick={handleClick}
              >
                {show ? (
                  <Icon w={6} h={6} as={BsEye} />
                ) : (
                  <Icon w={6} h={6} as={BsEyeSlash} />
                )}
              </Button>
            </InputRightElement>
          </InputGroup>

          <Input
            type="password"
            placeholder="Confirm password"
            id="confirm"
            mb={8}
            p="2rem 1rem"
            fontSize="20"
            autoComplete="new-password"
            onChange={(event) => setConfirm(event.target.value)}
            value={confirm}
          />

          <Button
            color="white"
            bg="#f16000"
            mb={8}
            w="100%"
            fontSize="22"
            h="16"
            _hover={{ bg: '#fb490e' }}
            _active={{ bg: '#f13c00' }}
            disabled={registering}
            onClick={() => signUpWithEmailAndPassword()}
          >
            Sign Up
          </Button>
        </FormControl>
        <Text fontSize="lg">
          Have an account already?{' '}
          <Link style={{ color: '#f16000' }} to="/login">
            Log in
          </Link>
        </Text>
        <AuthErrors error={error} />
      </Box>
    </>
  );
};

export default SignUp;
