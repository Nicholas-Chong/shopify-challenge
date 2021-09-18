import React, { useEffect, useState } from 'react'
import { Heading, ChakraProvider, SimpleGrid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { AppContainer } from './components/Background'
import { ImageCard } from './components/ImageCard'
import { LoadingSpinner } from './components/LoadingSpinner'
import { openDb } from './utilities/index-db'
import { ShowLikedSwitch } from './components/ShowLikedSwitch'

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imagesData, setImagesData] = useState([])
  const [indexDb, setIndexDb] = useState(null)
  const [showOnlyLiked, setShowOnlyLiked] = useState(false)

  useEffect(() => {
    openDb().then((result) => setIndexDb(result))

    let startDate = new Date()
    startDate.setMonth(startDate.getMonth() - 3)
    startDate = startDate.toLocaleDateString('fr-CA')

    fetch(
      `https://api.nasa.gov/planetary/apod?start_date=${startDate}&api_key=fusMDa3hRjdVjwuaweS6gsIjVDcmN7cmjsaj7nnX`
    )
      .then((response) => response.json())
      .then((data) => {
        setImagesData(data)
        setImagesLoaded(true)
      })
  }, [])

  return (
    <ChakraProvider theme={theme}>
      <AppContainer value={{db: indexDb, showOnlyLiked: showOnlyLiked}}>
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
        <ShowLikedSwitch onChange={setShowOnlyLiked}/>
      </AppContainer>
    </ChakraProvider>
  )
}

export default App
