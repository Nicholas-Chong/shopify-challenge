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
      <p>This is some fun text...</p>
    </center>
  </Box>
)
