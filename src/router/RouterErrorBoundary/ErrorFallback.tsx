import { Box } from '@chakra-ui/react';

export const ErrorFallback = ({ error }: { error: Error }) => (
  <Box
    maxWidth="100%"
    padding="20px"
    gap="20px"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
  >
    <h2>{error.message || 'Application error'}</h2>
    <p>
      {import.meta.env.DEV && error.stack
        ? error.stack
        : 'Oops, something went wrong. Please, contact developers'}
    </p>
  </Box>
);
