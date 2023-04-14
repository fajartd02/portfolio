import { Box, Button, ButtonGroup, Flex, Heading, Spacer } from '@chakra-ui/react'
import React from 'react'

function Header() {
  return (
    <Flex p={8}>
        <Box>
            <Heading size='md'>fajarhamka.</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap='2'>
            <Button colorScheme='teal'>About Me</Button>
            <Button colorScheme='teal'>Skills</Button>
            <Button colorScheme='teal'>Experiences</Button>
            <Button colorScheme='teal'>Portfolio</Button>
        </ButtonGroup>
    </Flex>
  )
}

// export default Header