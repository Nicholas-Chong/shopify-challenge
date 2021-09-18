import React, { useEffect, useState, createContext } from 'react'
import { Heading, ChakraProvider, SimpleGrid, theme } from '@chakra-ui/react'
import { ColorModeSwitcher } from './ColorModeSwitcher'
import { AppContainer } from './components/Background'
import { ImageCard } from './components/ImageCard'
import { LoadingSpinner } from './components/LoadingSpinner'
import { openDb } from './utilities/index-db'
import { ShowLikedSwitch } from './components/ShowLikedSwitch'

export const AppContext = createContext()

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
      <AppContext.Provider
        value={{
          db: indexDb,
          showOnlyLiked: showOnlyLiked,
          setShowOnlyLiked: setShowOnlyLiked,
        }}
      >
        <AppContainer>
          <Heading mb={4}>ShopiSpace</Heading>
          {showOnlyLiked && <p>show only liked</p>}
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
          <ShowLikedSwitch />
        </AppContainer>
      </AppContext.Provider>
    </ChakraProvider>
  )
}

export default App
