import { Weather } from '@/store/types/types'
import { Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

const CartDay = () => {
  return (
    <Flex flexDirection="column" borderRadius="10px" minW="149px" bg="rgba(71, 147, 255, 0.2)" padding="11px 11px 13px">
      <Text fontFamily="Montserrat" fontSize="18px" fontWeight="600">
        Сегодня
      </Text>
      <Text fontFamily="Montserrat" fontSize="14px" fontWeight="400" color="#939CB0" mb="12px">
        28 авг
      </Text>
      <Image
        src="/small_rain_sun.svg"
        alt="small_rain_sun"
        width={48}
        height={48}
        style={{
          marginBottom: '13px',
        }}
      />
      <Text fontFamily="Montserrat" fontSize="18px" fontWeight="600" lineHeight="21.94px">
        +18&#176;
      </Text>
      <Text fontFamily="Montserrat" fontSize="14px" fontWeight="400" color="#939CB0">
        +15&#176;
      </Text>
      <Text fontFamily="Montserrat" fontSize="14px" fontWeight="400" color="#939CB0">
        Облачно
      </Text>
    </Flex>
  )
}

export default CartDay
