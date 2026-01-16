import { Box, Heading, Text, Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function CTASection({ title, description, buttonText, buttonLink, ...props }) {
  return (
    <Box
      bg="offWhite.50"
      p={{ base: 6, md: 8 }}
      borderRadius="lg"
      boxShadow="md"
      textAlign="center"
      {...props}
    >
      <Heading as="h2" size={{ base: 'lg', md: 'xl' }} mb={4} color="brand.700">
        {title}
      </Heading>
      {description && (
        <Text fontSize={{ base: 'md', md: 'lg' }} color="brand.400" mb={6}>
          {description}
        </Text>
      )}
      {buttonText && buttonLink && (
        <Button
          as={RouterLink}
          to={buttonLink}
          bgGradient="linear(to-r, brand.700, brand.500)"
          color="white"
          size={{ base: 'md', md: 'lg' }}
          minH={{ base: '44px', md: '48px' }}
          _hover={{ 
            transform: 'translateY(-2px)', 
            boxShadow: 'lg', 
            bgGradient: 'linear(to-r, brand.600, brand.400)' 
          }}
        >
          {buttonText}
        </Button>
      )}
    </Box>
  )
}

export default CTASection
