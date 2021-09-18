import { Box, Switch } from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { AppContext } from '../../App'

export const ShowLikedSwitch = () => {
  const [isChecked, setIsChecked] = useState(false)
  const { setShowOnlyLiked } = useContext(AppContext)

  return (
    <Box position='fixed' width='100vw' bottom='0' right='0' padding='2em'>
      <center>
        <Box
          width='17em'
          background='yellow'
          padding='1em'
          display='flex'
          alignItems='center'
          justifyContent='space-between'
          bg='#E2E8F0'
          borderRadius='lg'
        >
          <p>Show only liked images</p>
          <Switch
            size='md'
            isChecked={isChecked}
            onChange={() => {
              setShowOnlyLiked(!isChecked)
              setIsChecked(!isChecked)
            }}
          />
        </Box>
      </center>
    </Box>
  )
}
