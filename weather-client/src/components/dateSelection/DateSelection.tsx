import { Button, Flex } from '@chakra-ui/react'
import React from 'react'
import CartDay from './CartDay'
import { useCustomSelector } from '@/hooks/store'

const DateSelection = () => {
  return (
    <Flex flexDirection="column">
      <Flex gap="15px" mb="7px">
        <Button
          borderRadius="5px"
          width="144px"
          height="35px"
          bg="white"
          color="black"
          fontFamily="Montserrat"
          fontWeight="400"
          fontSize="18px"
          boxShadow="2px 5px 25px -3px rgba(180, 180, 180, 0.25)"
          _focus={{
            bg: '#4793FF',
            color: 'white',
          }}
        >
          На неделю
        </Button>
        <Button
          borderRadius="5px"
          width="144px"
          height="35px"
          bg="white"
          color="black"
          fontFamily="Montserrat"
          fontWeight="400"
          fontSize="18px"
          boxShadow="2px 5px 25px -3px rgba(180, 180, 180, 0.25)"
          _focus={{
            bg: '#4793FF',
            color: 'white',
          }}
        >
          На месяц
        </Button>
        <Button
          borderRadius="5px"
          width="144px"
          height="35px"
          bg="white"
          color="black"
          fontFamily="Montserrat"
          fontWeight="400"
          fontSize="18px"
          boxShadow="2px 5px 25px -3px rgba(180, 180, 180, 0.25)"
          _focus={{
            bg: '#4793FF',
            color: 'white',
          }}
        >
          На 10 дней
        </Button>
      </Flex>
      <Flex p="20px 19px" gap="20px">
        <CartDay />
      </Flex>
    </Flex>
  )
}

export default DateSelection
