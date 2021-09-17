import React from 'react'
import { Heading, ChakraProvider, SimpleGrid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { AppContainer } from './components/Background'
import { ImageCard } from './components/ImageCard'
import { demo } from './demo'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AppContainer>
        <Heading mb={4}>ShopiSpace</Heading>
        <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
          {demo.map(element => {
            if (element.media_type === "image")
              return <ImageCard image={element} />
            else
              return null
            })
          }
        </SimpleGrid>
      </AppContainer>
    </ChakraProvider>
  )
}

export default App
