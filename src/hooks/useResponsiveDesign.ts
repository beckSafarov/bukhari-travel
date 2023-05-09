import { useWindowSize } from './useWindowSize'

const useResponsiveDesign = () => {
  const { width } = useWindowSize() || {
    width: undefined,
    height: undefined,
  };
  if(typeof width === 'number'){
    const isMobile = width <= 460 && width < 768
    const isTablet = width >= 768 && width < 1024
    const isLaptop = width >= 1024 && width < 1440
    const isDesktop = width >= 1440 && width < 1536
    const isBigScreen = width >= 1536
    return { width, isMobile, isTablet, isLaptop, isDesktop, isBigScreen }
  }
  return { isMobile: undefined, isTablet: undefined, isDesktop: undefined, isBigScreen: undefined }
}

export default useResponsiveDesign
