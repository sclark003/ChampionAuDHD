import React from 'react'
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('Error caught by boundary:', error, errorInfo)
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <Box
          minH="100vh"
          bg="offWhite.50"
          display="flex"
          alignItems="center"
          justifyContent="center"
          p={8}
        >
          <Box
            maxW="600px"
            bg="white"
            p={8}
            borderRadius="lg"
            boxShadow="xl"
            textAlign="center"
          >
            <VStack spacing={6}>
              <Heading as="h1" size="xl" color="brand.700">
                Oops! Something went wrong
              </Heading>
              <Text fontSize="lg" color="brand.600">
                We're sorry, but something unexpected happened. Please try refreshing the page or return to the home page.
              </Text>
              {process.env.NODE_ENV === 'development' && this.state.error && (
                <Box
                  mt={4}
                  p={4}
                  bg="red.50"
                  borderRadius="md"
                  textAlign="left"
                  maxH="300px"
                  overflow="auto"
                >
                  <Text fontSize="sm" color="red.700" fontWeight="bold" mb={2}>
                    Error Details (Development Only):
                  </Text>
                  <Text fontSize="xs" color="red.600" fontFamily="mono">
                    {this.state.error.toString()}
                    {this.state.errorInfo && (
                      <details style={{ marginTop: '10px' }}>
                        <summary style={{ cursor: 'pointer' }}>Stack Trace</summary>
                        <pre style={{ marginTop: '10px', whiteSpace: 'pre-wrap' }}>
                          {this.state.errorInfo.componentStack}
                        </pre>
                      </details>
                    )}
                  </Text>
                </Box>
              )}
              <VStack spacing={3} mt={4}>
                <Button
                  as={Link}
                  to="/"
                  bgGradient="linear(to-r, brand.700, brand.500)"
                  color="white"
                  size="lg"
                  _hover={{
                    transform: 'translateY(-2px)',
                    boxShadow: 'lg',
                    bgGradient: 'linear(to-r, brand.600, brand.400)'
                  }}
                >
                  Go to Home Page
                </Button>
                <Button
                  onClick={this.handleReset}
                  variant="outline"
                  colorScheme="brand"
                  size="md"
                >
                  Try Again
                </Button>
              </VStack>
            </VStack>
          </Box>
        </Box>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
