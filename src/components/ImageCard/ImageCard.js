import { Box, Image } from '@chakra-ui/react'
import { createContext, useContext, useState, useEffect } from 'react'
import { DescriptionModal } from './DescriptionModal'
import { LikeButton } from './LikeButton'
import { AppContext } from '../../App'
import { searchForImage } from '../../utilities/index-db'

export const ImageContext = createContext()

export const ImageCard = ({ image }) => {
  const [indexDb] = useState(useContext(AppContext).db)
  const showOnlyLiked = useContext(AppContext).showOnlyLiked
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    searchForImage(indexDb, image.title).then((result) => {
      if (result) setIsLiked(true)
    })
  })

  return (
    <ImageContext.Provider value={image}>
      <Box
        bg='white'
        maxW='sm'
        borderWidth='1px'
        borderRadius='lg'
        overflow='hidden'
        display={showOnlyLiked ? (isLiked ? 'block' : 'none') : 'block'}
        boxShadow='0 3px 10px rgb(0 0 0 / 0.2)'
      >
        <Image src={image.url} alt={image.title} />
        <Box p='3'>
          <Box mt='1' fontWeight='semibold' as='h4' lineHeight='tight'>
            {image.title}
          </Box>
          <Box>{image.date}</Box>
          <LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
          <DescriptionModal />
        </Box>
      </Box>
    </ImageContext.Provider>
  )
}
