import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'OpenDyslexic', sans-serif`,
    body: `'OpenDyslexic', sans-serif`,
  },
  colors: {
    brand: {
      50: '#e6f0ff',   // Very light blue
      100: '#c9d6e9',  // Light blue
      200: '#93bfec',  // Medium light blue
      300: '#74b6f0',  // Medium blue
      400: '#61b1ec',  // Blue
      500: '#4ea6e6',  // Primary blue
      600: '#1196db',  // Dark blue
      700: '#0379c1',  // Darker blue
      800: '#00254d',  // Very dark blue
      900: '#000a1a',  // Almost black blue
    },
    offWhite: {
      50: '#fafafa',   // Off-white
      100: '#f5f5f5',  // Light off-white
    }
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        transition: 'background-color 0.3s ease',
      }
    }
  },
  shadows: {
    'glow-blue': '0 0 20px rgba(78, 166, 230, 0.3)',
    'glow-blue-lg': '0 0 30px rgba(78, 166, 230, 0.4)',
  },
  components: {
    Button: {
      baseStyle: {
        transition: 'all 0.3s ease',
      }
    },
    Card: {
      baseStyle: {
        transition: 'all 0.3s ease',
      }
    }
  }
})

export default theme
