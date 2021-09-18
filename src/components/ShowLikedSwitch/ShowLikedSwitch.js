import { Box, Switch } from '@chakra-ui/react'
import { useState } from 'react'

export const ShowLikedSwitch = ({ onChange }) => {
  const [isChecked, setIsChecked] = useState(false)

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
              onChange(!isChecked)
              setIsChecked(!isChecked)
            }}
          />
        </Box>
      </center>
    </Box>
  )
}
