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
} from '@chakra-ui/react'

export const DescriptionModal = ({ title, description }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box as='button' fontSize='small' onClick={onOpen} display='block'>
        Show Description
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <p>{description}</p>
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
