import { Spinner, Box } from '@chakra-ui/react'

export const LoadingSpinner = () => (
  <Box
    position='fixed'
    height='100vh'
    width='100vw'
    top='0'
    right='0'
    display='flex'
    alignItems='center'
    justifyContent='center'
  >
    <center>
      <Spinner/>
      <p>Fun fact: I've been learning React for ~2 years!</p>
    </center>
  </Box>
)
