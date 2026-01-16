import { Image, Box } from '@chakra-ui/react'

/**
 * Reusable Photo component for displaying images with consistent styling
 * @param {string} src - Image source path (from public folder)
 * @param {string} alt - Alt text for accessibility
 * @param {string} orientation - 'portrait', 'landscape', or 'square'
 * @param {object} maxWidth - Maximum width (responsive object or value)
 * @param {object|string} height - Height (responsive object or value)
 * @param {string} borderRadius - Border radius (default: 'lg')
 * @param {string} objectFit - Object fit property (default: 'cover')
 * @param {string} objectPosition - Object position (default: 'center')
 * @param {boolean} shadow - Whether to show box shadow (default: true)
 * @param {object} ...props - Any other Chakra UI Image props
 */
function Photo({
  src,
  alt,
  orientation = 'landscape',
  maxWidth,
  height,
  borderRadius = 'lg',
  objectFit = 'cover',
  objectPosition = 'center',
  shadow = true,
  ...props
}) {
  // Default dimensions based on orientation
  const defaultDimensions = {
    portrait: {
      maxWidth: { base: '100%', md: '400px' },
      height: { base: '400px', md: '600px' },
    },
    landscape: {
      maxWidth: '100%',
      height: { base: '250px', md: '400px' },
    },
    square: {
      maxWidth: { base: '100%', md: '400px' },
      height: { base: '300px', md: '400px' },
    }
  }

  const dimensions = defaultDimensions[orientation] || defaultDimensions.landscape

  return (
    <Box
      position="relative"
      width="100%"
      maxWidth={maxWidth || dimensions.maxWidth}
      height={height || dimensions.height}
      borderRadius={borderRadius}
      overflow="hidden"
      boxShadow={shadow ? 'md' : 'none'}
      mx="auto"
      {...props}
    >
      <Image
        src={src}
        alt={alt}
        width="100%"
        height="100%"
        objectFit={objectFit}
        objectPosition={objectPosition}
        borderRadius={borderRadius}
      />
    </Box>
  )
}

export default Photo
