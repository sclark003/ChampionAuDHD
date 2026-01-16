import { useState, useEffect } from 'react'
import { IconButton, Box } from '@chakra-ui/react'
import { ArrowUpIcon } from '@chakra-ui/icons'

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Box
      position="fixed"
      bottom={{ base: 6, md: 8 }}
      right={{ base: 4, md: 8 }}
      zIndex={999}
    >
      <IconButton
        aria-label="Back to top"
        icon={<ArrowUpIcon />}
        onClick={scrollToTop}
        size="lg"
        colorScheme="brand"
        bgGradient="linear(to-r, brand.700, brand.500)"
        color="white"
        borderRadius="full"
        boxShadow="lg"
        _hover={{
          bgGradient: 'linear(to-r, brand.600, brand.400)',
          transform: 'translateY(-3px)',
          boxShadow: 'xl'
        }}
        transition="all 0.3s ease"
        animation="fadeIn 0.3s ease"
      />
    </Box>
  )
}

export default BackToTop
