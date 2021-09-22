import { Button, Spinner, Box } from '@chakra-ui/react'
import { AppContext } from '../../App'
import { useContext, useState } from 'react'
import { loadInAnimation } from '../../utilities/animation'

export const LoadMoreButton = () => {
  const { imagesData, setImagesData, startDate, setStartDate } =
    useContext(AppContext)

  const [isLoading, setIsLoading] = useState(false)

  const getNewImages = () => {
    if (isLoading) return

    setIsLoading(true)

    const endDateStr = new Date(
      startDate.getFullYear(),
      startDate.getMonth(),
      startDate.getDate() - 1
    ).toLocaleDateString('fr-CA')

    startDate.setMonth(startDate.getMonth() - 3)
    setStartDate(startDate)
    const startDateStr = startDate.toLocaleDateString('fr-CA')

    fetch(
      `https://api.nasa.gov/planetary/apod?start_date=${startDateStr}&end_date=${endDateStr}&api_key=fusMDa3hRjdVjwuaweS6gsIjVDcmN7cmjsaj7nnX`
    )
      .then((response) => response.json())
      .then((data) => {
        setImagesData(imagesData.concat(data))
        setIsLoading(false)
        loadInAnimation('.images')
        console.log(imagesData, startDateStr, endDateStr)
      })
  }

  return (
    <Box mt='4em'>
      <center>
        <Button margin='auto' colorScheme='green' onClick={getNewImages}>
          {!isLoading ? 'Load More' : <Spinner />}
        </Button>
      </center>
    </Box>
  )
}
