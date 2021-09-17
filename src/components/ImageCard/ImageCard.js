import { Box, Image } from '@chakra-ui/react'
import { DescriptionModal } from './DescriptionModal'
import { LikeButton } from './LikeButton'

export const ImageCard = (props) => {
  return (
    <Box
      bg='white'
      maxW='sm'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
    >
      <Image src={props.image.url} alt={props.image.title} />
      <Box p='3'>
        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          isTruncated
        >
          {props.image.title}
        </Box>
        <Box>{props.image.date}</Box>
        <LikeButton />
        <DescriptionModal
          title={props.image.title}
          description={props.image.explanation}
        />
      </Box>
    </Box>
  )
}
