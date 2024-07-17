import { Weather } from '@/store/types/types'
import { Box, Flex, Image, Table, TableContainer, Tbody, Td, Text, Tr } from '@chakra-ui/react'
import React from 'react'

interface Props {
  weather: Weather
}

const SelectWeather = ({ weather }: Props) => {
  const descriptionWeather = [
    {
      icon: '/TempratureIcon.svg',
      title: 'Температура',
      text: '20° - ощущается как 17°',
    },
    {
      icon: '/DavlenieIcon.svg',
      title: 'Давление ',
      text: '765 мм ртутного столба - нормальное',
    },
    {
      icon: '/OcadkiIcon.svg',
      title: 'Осадки',
      text: 'Без осадков',
    },
    {
      icon: '/WindIcon.svg',
      title: 'Ветер',
      text: '3 м/с юго-запад - легкий ветер',
    },
  ]

  return (
    <Flex justifyContent="space-between" mb="50px">
      <Flex flexDirection="column" gap="31px" p="20px 20px 20px 18px" boxShadow="2px 5px 25px -3px rgba(180, 180, 180, 0.25)">
        <Flex alignItems="center" gap="67px">
          <Flex flexDirection="column">
            <Text fontFamily="Montserrat" fontWeight="500" fontSize="96px" color="#4793FF" lineHeight="117.02px">
              {Math.floor(weather.main.temp)}&#176;
            </Text>
            <Text fontFamily="Montserrat" fontWeight="400" fontSize="40px" lineHeight="48.76px">
              Сегодня
            </Text>
          </Flex>
          <Image src="/sunIcon.png" w="119px" h="119px" />
        </Flex>
        <Box>
          <Text fontFamily="Montserrat" fontWeight="400" fontSize="25px" color="#939CB0">
            Время: 21:54
          </Text>
          <Text fontFamily="Montserrat" fontWeight="400" fontSize="25px" color="#939CB0">
            Город: Санкт-Петербург
          </Text>
        </Box>
      </Flex>
      <Flex position="relative" w="750px" padding="42px 32px" p="20px 20px 20px 18px" boxShadow="2px 5px 25px -3px rgba(180, 180, 180, 0.25)">
        <TableContainer zIndex="1">
          <Table height="100%">
            <Tbody>
              {descriptionWeather.map((el, ind) => (
                <Tr key={el.title + ind}>
                  <Td paddingRight="20px">
                    <Box borderRadius="50%" boxShadow="1px 4px 10px -1px rgba(71, 147, 255, 0.2)" p="8px">
                      <Image src={el.icon} w="20px" h="20px" alt={el.title} />
                    </Box>
                  </Td>
                  <Td fontFamily="Montserrat" fontWeight="400" fontSize="14px" lineHeight="17.07px" color="#939CB0" paddingRight="20px">
                    {el.title}
                  </Td>
                  <Td fontFamily="Montserrat" fontWeight="400" fontSize="14px" lineHeight="17.07px" paddingRight="20px">
                    {el.text}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
        <Image src="/CloudIcon.png" alt="cloud" w="460px" h="202px" position="absolute" top="0" right="0" />
      </Flex>
    </Flex>
  )
}

export default SelectWeather
