import { Box, Text } from '@chakra-ui/react'

/**
 * QuoteBox component for displaying quotes, testimonials, or highlighted text
 * 
 * @param {ReactNode} children - Quote text content
 * @param {string} author - Author/attribution text (optional)
 * @param {string} borderSize - Left border size (default: '6px')
 * @param {string} borderColor - Border color (default: 'brand.500')
 * @param {string} bg - Background color (default: 'brand.50')
 * @param {object} ...props - Any other Chakra UI Box props
 */
function QuoteBox({
  children,
  author,
  ...props
}) {
  return (
    <Box
      bg="white"
      p={{ base: 8, md: 12 }}
      borderTop="1px solid"
      borderBottom="1px solid"
      borderColor="brand.100"
      textAlign="center"
      {...props}
    >
      <Text
        fontSize={{ base: 'xl', md: '2xl' }}
        fontStyle="italic"
        color="brand.800"
        mb={author ? 6 : 0}
        lineHeight="1.6"
        fontWeight="light"
        letterSpacing="0.01em"
        maxW="800px"
        mx="auto"
      >
        "{children}"
      </Text>
      {author && (
        <Text
          fontSize={{ base: 'sm', md: 'md' }}
          color="brand.600"
          fontWeight="normal"
          letterSpacing="0.05em"
          textTransform="uppercase"
          mt={4}
        >
          — {author}
        </Text>
      )}
    </Box>
  )
}

export default QuoteBox
