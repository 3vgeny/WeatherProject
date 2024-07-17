import { AppDispatch, RootState } from '@/store/store'
import { useSelector } from 'react-redux'
import { TypedUseSelectorHook } from 'react-redux'
import { useDispatch } from 'react-redux'

export const useCustomDispatch = () => useDispatch<AppDispatch>()
export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector
