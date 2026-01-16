import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { AnimatePresence, motion } from 'framer-motion'
import theme from './theme'
import ErrorBoundary from './components/ErrorBoundary'
import ScrollToTop from './components/ScrollToTop'
import BackToTop from './components/BackToTop'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Coaching from './pages/Coaching'
import Consultancy from './pages/Consultancy'
import Media from './pages/Media'
import EnquiryForm from './pages/EnquiryForm'

const MotionBox = motion(Box)

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <MotionBox
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/coaching" element={<Coaching />} />
          <Route path="/consultancy" element={<Consultancy />} />
          <Route path="/Media" element={<Media />} />
          <Route path="/book" element={<EnquiryForm />} />
        </Routes>
      </MotionBox>
    </AnimatePresence>
  )
}

function AppContent() {
  return (
    <Box minH="100vh" bg="offWhite.50">
      <Navigation />
      <Box as="main" pt={{ base: '100px', md: '80px' }} pb={{ base: 4, md: 8 }} px={{ base: 0, md: 0 }}>
        <ErrorBoundary>
          <AnimatedRoutes />
        </ErrorBoundary>
      </Box>
      <BackToTop />
    </Box>
  )
}

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ErrorBoundary>
        <Router>
          <ScrollToTop />
          <AppContent />
        </Router>
      </ErrorBoundary>
    </ChakraProvider>
  )
}

export default App
