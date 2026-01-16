import { Box, Container } from '@chakra-ui/react'

function PageLayout({ children }) {
  return (
    <Box>
      <Container maxW="container.xl" px={{ base: 4, md: 6, lg: 8 }}>
        {children}
      </Container>
    </Box>
  )
}

export default PageLayout
