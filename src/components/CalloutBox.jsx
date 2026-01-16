import { Box, Heading, Text, Link } from '@chakra-ui/react'

/**
 * CalloutBox component - for highlighting important information or links
 * Inspired by "Looking for funding?" sections
 * 
 * @param {string} title - Callout title
 * @param {string} description - Callout description
 * @param {string} linkText - Link text (optional)
 * @param {string} linkUrl - Link URL (optional)
 * @param {object} ...props - Any other Chakra UI Box props
 */
function CalloutBox({ title, description, linkText, linkUrl, ...props }) {
  return (
    <Box
      bg="brand.50"
      p={{ base: 6, md: 8 }}
      borderRadius="none"
      borderLeft="4px solid"
      borderColor="brand.500"
      {...props}
    >
      {title && (
        <Heading
          as="h3"
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="bold"
          mb={3}
          color="brand.700"
        >
          {title}
        </Heading>
      )}
      {description && (
        <Text
          fontSize={{ base: 'md', md: 'lg' }}
          color="brand.600"
          lineHeight="1.7"
          mb={linkText && linkUrl ? 4 : 0}
        >
          {description}
        </Text>
      )}
      {linkText && linkUrl && (
        <Link
          href={linkUrl}
          color="brand.600"
          fontWeight="semibold"
          fontSize={{ base: 'md', md: 'lg' }}
          textDecoration="underline"
          _hover={{ color: 'brand.700' }}
        >
          {linkText}
        </Link>
      )}
    </Box>
  )
}

export default CalloutBox
