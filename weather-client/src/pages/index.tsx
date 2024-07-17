import SelectWeather from '@/components/SelectWeather/SelectWeather'
import DateSelection from '@/components/dateSelection/DateSelection'
import Header from '@/components/header/Header'
import { useCustomDispatch, useCustomSelector } from '@/hooks/store'
import { selectCurrentWeatherData } from '@/store/selectors'
import { fetchCurrentWeather } from '@/store/thunks/fetchCurrentWeather'
import { Container, Flex } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Home() {
  const dispatch = useCustomDispatch()

  const { weather } = useCustomSelector(selectCurrentWeatherData)

  useEffect(() => {
    dispatch(fetchCurrentWeather('44.34', '10.99'))
  }, [])

  return (
    <>
      <Container maxW="1200px" margin="0 auto">
        <Header />
        <SelectWeather weather={weather} />
        <DateSelection />
      </Container>
    </>
  )
}
