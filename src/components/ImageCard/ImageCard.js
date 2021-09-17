import { Box, Image } from '@chakra-ui/react'
import { DescriptionModal } from './DescriptionModal'
import { LikeButton } from './LikeButton'

export const ImageCard = ({ image }) => {
  return (
    <Box
      bg='white'
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      <Image src={image.url} alt={image.title} />
      <Box p='3'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {image.title}
        </Box>
        <Box>{image.date}</Box>
        <LikeButton />
        <DescriptionModal title={image.title} description={image.explanation} />
      </Box>
    </Box>
  )
}
