import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

/**
 * FadeInBox - Component that fades in on scroll
 * Uses framer-motion for smooth animations
 */
const MotionBox = motion(Box)

function FadeInBox({ children, delay = 0, ...props }) {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      {...props}
    >
      {children}
    </MotionBox>
  )
}

export default FadeInBox
