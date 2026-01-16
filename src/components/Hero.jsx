import { Box, Container, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const DEFAULT_HERO_IMAGE = '/hero-image.jpg'

const MotionBox = motion(Box)
const MotionHeading = motion(Heading)
const MotionText = motion(Text)

function Hero({ title, subtitle, backgroundImage = DEFAULT_HERO_IMAGE }) {
  return (
    <Box
      position="relative"
      py={{ base: 16, md: 32 }}
      minH={{ base: '300px', md: '500px' }}
      textAlign="center"
      borderRadius="lg"
      mb={{ base: 4, md: 8 }}
      overflow="hidden"
      bgImage={`url(${backgroundImage})`}
      bgSize="cover"
      bgPosition="center 35%"
      bgRepeat="no-repeat"
      transition="background-position 0.3s ease"
      _hover={{
        bgPosition: 'center 38%'
      }}
    >
      {/* Overlay for better text readability */}
      <Box
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg="blackAlpha.500"
        zIndex={1}
        transition="background-color 0.3s ease"
      />
      
      <Container maxW="container.lg" position="relative" zIndex={2} px={{ base: 4, md: 6 }}>
        <MotionHeading 
          as="h1" 
          fontSize={{ base: '3xl', md: '5xl', lg: '6xl' }}
          mb={{ base: 2, md: 4 }} 
          color="white" 
          textShadow="2px 2px 4px rgba(0,0,0,0.5)"
          lineHeight={{ base: '1.1', md: '1.2' }}
          fontWeight="bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {title}
        </MotionHeading>
        {subtitle && (
          <MotionText 
            fontSize={{ base: 'md', md: 'xl' }} 
            opacity={0.95} 
            color="white" 
            textShadow="1px 1px 2px rgba(0,0,0,0.5)"
            px={{ base: 2, md: 0 }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 0.95, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {subtitle}
          </MotionText>
        )}
      </Container>
    </Box>
  )
}

export default Hero
