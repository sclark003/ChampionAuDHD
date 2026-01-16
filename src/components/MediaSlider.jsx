import { useState, useEffect } from 'react'
import { Box, IconButton, Image, Flex, Circle } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

function MediaSlider({ 
  images = [], 
  autoPlay = true, 
  interval = 5000,
  orientation = 'landscape', // 'landscape' or 'portrait'
  ...props 
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Set dimensions based on orientation
  const dimensions = {
    landscape: {
      height: { base: '250px', md: '400px' },
      maxWidth: '100%',
    },
    portrait: {
      height: { base: '400px', md: '600px' },
      maxWidth: { base: '100%', md: '400px' },
      mx: 'auto', // Center the portrait slider
    }
  }
  
  const currentDimensions = dimensions[orientation] || dimensions.landscape

  useEffect(() => {
    if (!autoPlay || images.length <= 1) return

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, interval)

    return () => clearInterval(timer)
  }, [autoPlay, interval, images.length])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % images.length
    )
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  if (!images || images.length === 0) {
    return null
  }

  return (
    <Box position="relative" width="100%" {...props}>
      {/* Image Container */}
      <Box
        position="relative"
        width="100%"
        height={currentDimensions.height}
        maxWidth={currentDimensions.maxWidth}
        mx={currentDimensions.mx}
        overflow="hidden"
        borderRadius="lg"
        bg="gray.100"
      >
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            objectFit="cover"
            opacity={index === currentIndex ? 1 : 0}
            transition="opacity 0.5s ease-in-out"
            zIndex={index === currentIndex ? 1 : 0}
          />
        ))}

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <IconButton
              aria-label="Previous slide"
              icon={<ChevronLeftIcon />}
              position="absolute"
              left={{ base: 2, md: 4 }}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              bg="blackAlpha.600"
              color="white"
              _hover={{ bg: 'blackAlpha.800' }}
              onClick={goToPrevious}
              borderRadius="full"
              size={{ base: 'sm', md: 'md' }}
              minW={{ base: '36px', md: '40px' }}
              minH={{ base: '36px', md: '40px' }}
            />
            <IconButton
              aria-label="Next slide"
              icon={<ChevronRightIcon />}
              position="absolute"
              right={{ base: 2, md: 4 }}
              top="50%"
              transform="translateY(-50%)"
              zIndex={2}
              bg="blackAlpha.600"
              color="white"
              _hover={{ bg: 'blackAlpha.800' }}
              onClick={goToNext}
              borderRadius="full"
              size={{ base: 'sm', md: 'md' }}
              minW={{ base: '36px', md: '40px' }}
              minH={{ base: '36px', md: '40px' }}
            />
          </>
        )}
      </Box>

      {/* Dots Indicator */}
      {images.length > 1 && (
        <Flex justify="center" mt={4} gap={2}>
          {images.map((_, index) => (
            <Circle
              key={index}
              size="12px"
              bg={index === currentIndex ? 'brand.500' : 'gray.300'}
              cursor="pointer"
              onClick={() => goToSlide(index)}
              transition="background-color 0.3s"
              _hover={{ bg: index === currentIndex ? 'brand.600' : 'gray.400' }}
            />
          ))}
        </Flex>
      )}
    </Box>
  )
}

export default MediaSlider
