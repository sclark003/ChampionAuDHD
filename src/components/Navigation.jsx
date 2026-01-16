import { Link as RouterLink, useLocation } from 'react-router-dom'
import { Box, Flex, Link, HStack, Heading } from '@chakra-ui/react'

function Navigation() {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/coaching', label: 'Coaching' },
    { path: '/consultancy', label: 'Consultancy' },
    { path: '/Media', label: 'Media' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <Box
      as="nav"
      position="fixed"
      top={0}
      left={0}
      right={0}
      bg="offWhite.50"
      boxShadow="md"
      zIndex={1000}
      backdropFilter="blur(10px)"
      transition="all 0.3s ease"
      borderBottom="1px solid"
      borderColor="brand.100"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        py={{ base: 3, md: 4 }}
        justify="space-between"
        align="center"
        direction={{ base: 'column', md: 'row' }}
        gap={{ base: 3, md: 0 }}
      >
        <Link
          as={RouterLink}
          to="/"
          _hover={{ textDecoration: 'none' }}
        >
          <Heading
            size={{ base: 'md', md: 'lg' }}
            color="brand.700"
            _hover={{ color: 'brand.600' }}
            textAlign={{ base: 'center', md: 'left' }}
          >
            ChampionAuDHD
          </Heading>
        </Link>
        <HStack 
          spacing={{ base: 2, md: 4 }} 
          mt={{ base: 2, md: 0 }}
          flexWrap="wrap"
          justify={{ base: 'center', md: 'flex-end' }}
        >
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              as={RouterLink}
              to={path}
              px={{ base: 3, md: 4 }}
              py={{ base: 2, md: 2 }}
              borderRadius="md"
              fontWeight="medium"
              fontSize={{ base: 'sm', md: 'md' }}
              color={isActive(path) ? 'brand.700' : 'brand.600'}
              bg={isActive(path) ? 'brand.50' : 'transparent'}
              minH="44px"
              display="flex"
              alignItems="center"
              transition="all 0.2s ease"
              _hover={{
                color: 'brand.700',
                bg: 'brand.50',
                transform: 'translateY(-2px)'
              }}
            >
              {label}
            </Link>
          ))}
        </HStack>
      </Flex>
    </Box>
  )
}

export default Navigation
