import * as React from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { theme } from './theme';

export const AppThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => <ChakraProvider theme={theme}>{children}</ChakraProvider>;
