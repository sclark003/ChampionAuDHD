import { Card, CardBody, Box } from '@chakra-ui/react'

/**
 * Styled Card component with minimalist, clean styling
 * Inspired by modern, typography-focused designs
 * 
 * @param {boolean} hover - Whether to show hover effect (default: false)
 * @param {string} bg - Background color (default: 'white')
 * @param {ReactNode} children - Card content
 * @param {object} ...props - Any other Chakra UI Card props
 */
function StyledCard({
  hover = false,
  bg = 'white',
  children,
  ...props
}) {
  const hoverProps = hover ? {
    _hover: {
      transform: 'translateY(-2px)',
      transition: 'transform 0.2s ease'
    }
  } : {}

  return (
    <Card
      h="100%"
      boxShadow="none"
      bg={bg}
      borderRadius="none"
      border="none"
      transition="transform 0.2s ease"
      {...hoverProps}
      {...props}
    >
      <CardBody p={{ base: 8, md: 10 }}>
        {children}
      </CardBody>
    </Card>
  )
}

export default StyledCard
