import { Box, SimpleGrid, Heading, Text } from '@chakra-ui/react'

/**
 * FeatureList component - displays features in a clean list format
 * Inspired by "We make ADHD work for everyone, through:" section
 * 
 * @param {string} title - Section title
 * @param {Array} features - Array of { heading: string, description: string } objects
 * @param {string} color - Text color for descriptions (default: "brand.600")
 * @param {string} headingColor - Text color for feature headings (default: "brand.700")
 * @param {string} titleColor - Text color for section title (default: "brand.700")
 * @param {object} ...props - Any other Chakra UI Box props
 */
function FeatureList({ 
  title, 
  features = [], 
  color = "brand.600",
  headingColor = "brand.700",
  titleColor = "brand.700",
  ...props 
}) {
  if (!features || features.length === 0) return null

  return (
    <Box {...props}>
      {title && (
        <Heading 
          as="h2" 
          size={{ base: 'lg', md: 'xl' }} 
          mb={8} 
          color={titleColor}
          fontWeight="bold"
          textAlign={{ base: 'left', md: 'center' }}
        >
          {title}
        </Heading>
      )}
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 8, md: 10 }}>
        {features.map((feature, index) => (
          <Box key={index}>
            {feature.heading && (
              <Heading
                as="h3"
                fontSize={{ base: 'xl', md: '2xl' }}
                fontWeight="bold"
                mb={3}
                color={headingColor}
                lineHeight="1.3"
              >
                {feature.heading}
              </Heading>
            )}
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              color={color}
              lineHeight="1.7"
            >
              {feature.description}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default FeatureList
