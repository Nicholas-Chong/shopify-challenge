import React, { useEffect, useState, createContext } from 'react'
import {
  Heading,
  ChakraProvider,
  SimpleGrid,
  theme,
  Box,
} from '@chakra-ui/react'
import { AppContainer } from './components/Background'
import { ImageCard } from './components/ImageCard'
import { LoadingSpinner } from './components/LoadingSpinner'
import { openDb } from './utilities/index-db'
import { ShowLikedSwitch } from './components/ShowLikedSwitch'
import { loadInAnimation } from './utilities/animation'
import { LoadMoreButton } from './components/LoadMoreButton'

export const AppContext = createContext()

function App() {
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [imagesData, setImagesData] = useState([])
  const [indexDb, setIndexDb] = useState(null)
  const [showOnlyLiked, setShowOnlyLiked] = useState(false)
  const [startDate, setStartDate] = useState(new Date())

  // Initial Load (Only runs once)
  useEffect(() => {
    openDb().then((result) => setIndexDb(result))

    startDate.setMonth(startDate.getMonth() - 3)
    setStartDate(startDate)
    const startDateStr = startDate.toLocaleDateString('fr-CA')

    fetch(
      `https://api.nasa.gov/planetary/apod?start_date=${startDateStr}&api_key=fusMDa3hRjdVjwuaweS6gsIjVDcmN7cmjsaj7nnX`
    )
      .then((response) => response.json())
      .then((data) => {
        setImagesData(data)
        setImagesLoaded(true)
        loadInAnimation('.images')
      })
    // eslint-disable-next-line
  }, [])

  // Runs each time showOnlyLiked is toggled
  useEffect(() => {
    loadInAnimation('.images')
  }, [showOnlyLiked])

  return (
    <ChakraProvider theme={theme}>
      <AppContext.Provider
        value={{
          db: indexDb,
          showOnlyLiked: showOnlyLiked,
          setShowOnlyLiked: setShowOnlyLiked,
          imagesData: imagesData,
          setImagesData: setImagesData,
          startDate,
          setStartDate,
        }}
      >
        <AppContainer>
          <Heading mb={4}>ShopiSpace</Heading>
          {!imagesLoaded && <LoadingSpinner />}
          {imagesLoaded && (
            <Box className='images' mb='8em'>
              <SimpleGrid columns={[1, 2, 3, 4]} spacing={10}>
                {imagesData.map((element) => {
                  if (element.media_type === 'image')
                    return <ImageCard image={element} />
                  else return null
                })}
              </SimpleGrid>
              <LoadMoreButton />
            </Box>
          )}
          <ShowLikedSwitch />
        </AppContainer>
      </AppContext.Provider>
    </ChakraProvider>
  )
}

export default App
