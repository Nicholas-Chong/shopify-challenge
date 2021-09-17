import styled from 'styled-components'
import { Box } from '@chakra-ui/layout'
import { IconContext } from 'react-icons'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useState } from 'react'

export const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
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
