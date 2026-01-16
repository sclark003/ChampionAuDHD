import { Button } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

function PrimaryButton({ children, to, ...props }) {
  const buttonProps = {
    bgGradient: 'linear(to-r, brand.700, brand.500)',
    color: 'white',
    _hover: { 
      transform: 'translateY(-2px)', 
      boxShadow: 'lg', 
      bgGradient: 'linear(to-r, brand.600, brand.400)' 
    },
    ...props
  }

  if (to) {
    return (
      <Button as={RouterLink} to={to} {...buttonProps}>
        {children}
      </Button>
    )
  }

  return (
    <Button {...buttonProps}>
      {children}
    </Button>
  )
}

export default PrimaryButton
