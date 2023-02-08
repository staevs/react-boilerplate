import { Box } from '@chakra-ui/react';

export const AppErrorFallback = ({
  componentStack,
  error
}: {
  error: Error;
  componentStack: string | null;
}) => (
  <Box
    maxWidth="100%"
    padding="20px"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <h2>{error.message || 'Application error'}</h2>
    <p>
      {import.meta.env.DEV && componentStack
        ? componentStack
        : 'Oops, something went wrong. Please, contact developers'}
    </p>
  </Box>
);
