import { Box, Text } from '@chakra-ui/react'

/**
 * InfoBox component for displaying information items in a minimalist style
 * Used for lists, features, roles, etc.
 * 
 * @param {ReactNode} children - Info content
 * @param {object} ...props - Any other Chakra UI Box props
 */
function InfoBox({
  children,
  ...props
}) {
  return (
    <Box
      py={5}
      px={6}
      bg="white"
      {...props}
    >
      <Text
        color="brand.700"
        fontSize={{ base: 'md', md: 'lg' }}
        fontWeight="normal"
        lineHeight="1.7"
        letterSpacing="0.01em"
      >
        {children}
      </Text>
    </Box>
  )
}

export default InfoBox
