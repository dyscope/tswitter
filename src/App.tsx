import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { Layout } from './components';
import routes from './config/routes';

export interface IApplicationProps {}

const App: React.FunctionComponent<IApplicationProps> = (props) => {
  return (
    <ChakraProvider>
      <Layout>
        <Routes>
          {routes.map((route, index) => {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  route.protected ? (
                    <Navigate to="/login" />
                  ) : (
                    <route.component />
                  )
                }
              />
            );
          })}
        </Routes>
      </Layout>
    </ChakraProvider>
  );
};

export default App;
