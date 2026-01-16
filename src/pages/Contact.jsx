import { useState } from 'react'
import {
  Box,
  Grid,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useToast,
  VStack,
  Link,
  HStack
} from '@chakra-ui/react'
import { FaInstagram } from 'react-icons/fa'
import Hero from '../components/Hero'
import PageLayout from '../components/PageLayout'
import ContentSection from '../components/ContentSection'
import PrimaryButton from '../components/PrimaryButton'
import { SectionHeading, BodyText, LabelText } from '../components/TextComponents'
import { config } from '../config/env'

/**
 * Contact Page Component
 * 
 * This page displays contact information and a contact form. It includes:
 * - Hero banner
 * - Contact information (email, Instagram links)
 * - Contact form that sends emails via backend
 * 
 * TO EDIT THIS PAGE:
 * 1. Change Hero title/subtitle in the Hero component
 * 2. Update contact email in .env file (VITE_CONTACT_EMAIL)
 * 3. Update Instagram links in .env file (VITE_INSTAGRAM_URL_RACHEL, VITE_INSTAGRAM_URL_CHAMPIONAUDHD)
 * 4. Update form labels/placeholders if needed
 * 5. Email sending is handled automatically - no changes needed
 */
function Contact() {
  // Form state - stores user input
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  /**
   * Handles input changes in the form
   * Updates formData state when user types
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Handles form submission
   * Sends email via backend API and shows success/error messages
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Send email via backend API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          to: config.contactEmail,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Show more detailed error message from server
        const errorMsg = data.details ? `${data.error}: ${data.details}` : data.error || 'Failed to send email'
        throw new Error(errorMsg)
      }

      toast({
        title: 'Message Sent!',
        description: 'Thank you for your message! We will get back to you soon.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Email sending failed:', error)
      toast({
        title: 'Error Sending Message',
        description: error.message || 'There was an error sending your message. Please try again or contact us directly at ' + config.contactEmail,
        status: 'error',
        duration: 7000,
        isClosable: true,
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Hero 
        title="Contact Me"
        subtitle="Get in touch today"
      />

      <PageLayout>
        <ContentSection>
          <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 6, lg: 8 }}>
            <Box>
              <SectionHeading>Let's Connect</SectionHeading>
              <BodyText mb={6}>
                I'd love to hear from you. Whether you have a question about my services, 
                want to schedule a consultation, or just want to say hello, feel free to reach out.
              </BodyText>

              <Box mb={6} textAlign="center">
                <PrimaryButton to="/book" size={{ base: 'md', md: 'lg' }}>
                  Book a Free Discovery Call
                </PrimaryButton>
              </Box>

              <HStack align="stretch" mt={4} spacing={{ base: 6, md: 12 }} direction={{ base: 'column', md: 'row' }}>
                <Box mb={5}>
                    <LabelText mb={3}>Email us at:</LabelText>
                    <Link href={`mailto:${config.contactEmail}`} color="brand.600" fontWeight="medium" _hover={{ color: 'brand.700', textDecoration: 'underline' }}>{config.contactEmail}</Link>.
                  </Box>
                {(config.instagramUrl1 || config.instagramUrl2) && (
                  <Box>
                    <LabelText mb={3}>Follow us on Instagram:</LabelText>
                    <VStack align="stretch" spacing={3}>
                      {config.instagramUrl1 && (
                        <Link 
                          href={config.instagramUrl1} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          isExternal
                          _hover={{ textDecoration: 'none' }}
                        >
                          <HStack spacing={3} _hover={{ color: 'brand.700' }} transition="color 0.2s">
                            <Box color="brand.600" fontSize="24px">
                              <FaInstagram />
                            </Box>
                            <BodyText mb={0} color="brand.600" fontWeight="medium" fontSize="15px">
                              Rachel's Instagram
                            </BodyText>
                          </HStack>
                        </Link>
                      )}
                      {config.instagramUrl2 && (
                        <Link 
                          href={config.instagramUrl2} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          isExternal
                          _hover={{ textDecoration: 'none' }}
                        >
                          <HStack spacing={3} _hover={{ color: 'brand.700' }} transition="color 0.2s">
                            <Box color="brand.600" fontSize="24px">
                              <FaInstagram />
                            </Box>
                            <BodyText mb={0} color="brand.600" fontWeight="medium" fontSize="15px">
                              ChampionAuDHD Instagram
                            </BodyText>
                          </HStack>
                        </Link>
                      )}
                    </VStack>
                  </Box>
                )}
              </HStack>
            </Box>

            <Box as="form" onSubmit={handleSubmit} bg="brand.50" p={6} borderRadius="lg">
              <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    bg="white"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    bg="white"
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    bg="white"
                  />
                </FormControl>
                <PrimaryButton type="submit" w="full" size="lg" isLoading={isSubmitting} loadingText="Sending...">
                  Send Message
                </PrimaryButton>
              </VStack>
            </Box>
          </Grid>
        </ContentSection>
      </PageLayout>
    </>
  )
}

export default Contact
