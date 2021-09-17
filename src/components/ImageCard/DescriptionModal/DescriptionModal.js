import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Image,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { ImageContext } from '../ImageCard'

export const DescriptionModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { title, url, explanation } = useContext(ImageContext)

  return (
    <>
      <Box as='button' fontSize='small' onClick={onOpen} display='block'>
        Show Description
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size='xl'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={url} alt={title} mb={3}/>
            <p>{explanation}</p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='green' mr={3} onClick={onClose} alt='close'>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
