import { Box, Heading, Text } from '@chakra-ui/react'

function ContentSection({ title, subtitle, children, mb = 6, titleSize = "xl", ...props }) {
  return (
    <Box 
      bg="white" 
      p={{ base: 8, md: 12 }} 
      borderRadius="none" 
      boxShadow="none"
      mb={mb}
      borderTop="1px solid"
      borderColor="brand.100"
      {...props}
    >
      {title && (
        <>
          <Heading 
            as="h2" 
            size={titleSize === "xl" ? { base: "lg", md: "xl" } : titleSize} 
            mb={subtitle ? 3 : { base: 4, md: 6 }} 
            color="brand.700"
            fontSize={{ base: 'xl', md: titleSize === "xl" ? "2xl" : undefined }}
            fontWeight="bold"
          >
            {title}
          </Heading>
          {subtitle && (
            <Text 
              fontSize={{ base: 'md', md: 'lg' }} 
              color="brand.600" 
              mb={6}
              fontWeight="medium"
              fontStyle="italic"
            >
              {subtitle}
            </Text>
          )}
        </>
      )}
      {children}
    </Box>
  )
}

export default ContentSection
