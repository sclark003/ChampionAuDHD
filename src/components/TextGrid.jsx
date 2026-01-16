import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react'

/**
 * TextGrid component - displays text in a clean grid
 * 
 * @param {string} title - Section title (optional)
 * @param {Array} values - Array of { title: string, description: string } objects
 * @param {object} ...props - Any other Chakra UI Box props
 */
function TextGrid({ title, values = [], ...props }) {
  if (!values || values.length === 0) return null

  return (
    <Box {...props}>
      {title && (
        <Heading 
          as="h2" 
          size={{ base: 'lg', md: 'xl' }} 
          mb={8} 
          color="brand.700"
          fontWeight="bold"
          textAlign={{ base: 'left', md: 'center' }}
        >
          {title}
        </Heading>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 8, md: 10 }}>
        {values.map((value, index) => (
          <Box key={index} textAlign={{ base: 'left', md: 'center' }}>
            <Heading
              as="h3"
              fontSize={{ base: 'lg', md: 'xl' }}
              fontWeight="bold"
              mb={3}
              color="brand.700"
            >
             🌟
            </Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color="brand.600"
              lineHeight="1.7"
            >
              {value.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default TextGrid
