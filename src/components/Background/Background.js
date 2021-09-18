import { Box } from '@chakra-ui/react';
import { createContext } from 'react';

export const AppContext = createContext()

export const AppContainer = ({ db, children }) => (
  <AppContext.Provider value={db}>
    <Box bg="#E2E8F0" minH="100vh" overflow="hidden">
      <Box maxW="1600px" margin="auto" padding="2em">
        {children}
      </Box>
    </Box>
  </AppContext.Provider>
);
