import React, { useEffect, useState } from 'react'
import { Heading, ChakraProvider, SimpleGrid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { AppContainer } from './components/Background'
import { ImageCard } from './components/ImageCard'
import { LoadingSpinner } from './components/LoadingSpinner'
import { openDb } from './utilities/index-db'

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imagesData, setImagesData] = useState([])
  const [indexDb, setIndexDb] = useState(null)

  useEffect(() => {
    const runAsyncFunctions = async () => {
      const db = await openDb()
      setIndexDb(db)

      let tmp = null

      let startDate = new Date()
      startDate.setMonth(startDate.getMonth() - 3)
      startDate = startDate.toLocaleDateString('fr-CA')

      await fetch(
        `https://api.nasa.gov/planetary/apod?start_date=${startDate}&api_key=fusMDa3hRjdVjwuaweS6gsIjVDcmN7cmjsaj7nnX`
      )
        .then((response) => response.json())
        .then((data) => (tmp = data))

      setImagesData(tmp)
      setImagesLoaded(true)
    }

    runAsyncFunctions()
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AppContainer db={indexDb}>
        <Heading mb={4}>ShopiSpace</Heading>
        {!imagesLoaded && <LoadingSpinner />}
        {imagesLoaded && (
          <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
            {imagesData.map((element) => {
              if (element.media_type === 'image')
                return <ImageCard image={element} />
              else return null
            })}
          </SimpleGrid>
        )}
      </AppContainer>
    </ChakraProvider>
  )
}

export default App
