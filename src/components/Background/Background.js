import { Box } from '@chakra-ui/react';

export const AppContainer = props => (
  <Box bg="#E2E8F0" minH="100vh" overflow="hidden">
    <Box maxW="1600px" margin="auto" padding="2em">
      {props.children}
    </Box>
  </Box>
);
