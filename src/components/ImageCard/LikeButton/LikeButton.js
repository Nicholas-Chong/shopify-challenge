import { Box } from '@chakra-ui/layout'
import { IconContext } from 'react-icons'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useContext, useEffect, useState } from 'react'
import { ImageContext } from '../ImageCard'
import { AppContext } from '../../../App'
import {
  addLikedImage,
  deleteLikedImage,
  searchForImage,
} from '../../../utilities/index-db'

export const LikeButton = ({isLiked, setIsLiked}) => {
  const [image] = useState(useContext(ImageContext))
  const [indexDb] = useState(useContext(AppContext).db)

  useEffect(() => {
    searchForImage(indexDb, image.title).then((result) => {
      if (result) setIsLiked(true)
    })
  })

  const handleClick = () => {
    if (isLiked) deleteLikedImage(indexDb, image)
    else addLikedImage(indexDb, image)

    setIsLiked(!isLiked)
  }

  return (
    <Box
      as='button'
      display='inline-block'
      onClick={handleClick}
      alt={isLiked ? 'Unlike' : 'Like'}
      title={isLiked ? 'Unlike' : 'Like'}
    >
      <IconContext.Provider
        value={{ style: { fontSize: '30px', color: 'red' } }}
      >
        {isLiked ? <AiFillHeart /> : <AiOutlineHeart />}
      </IconContext.Provider>
    </Box>
  )
}
