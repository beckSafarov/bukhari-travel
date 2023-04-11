import React from 'react'
import { useWindowSize } from './useWindowSize'

const useResponsiveDesign = () => {
  const {width, height} = useWindowSize() || {width: undefined, height: undefined}
  if(typeof width === 'number'){
    const isMobile = width <= 460
    const isTablet = width >= 768 && width <= 1024
    const isDesktop = width >= 1200
    const isBigScreen = width >= 1900
    return { width, isMobile, isTablet, isDesktop, isBigScreen }
  }
  return { isMobile: undefined, isTablet: undefined, isDesktop: undefined, isBigScreen: undefined }
}

export default useResponsiveDesign
