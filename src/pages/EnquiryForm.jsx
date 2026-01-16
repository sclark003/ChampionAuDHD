import { useState } from 'react'
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  useToast,
  VStack,
  Checkbox,
  CheckboxGroup,
  Stack
} from '@chakra-ui/react'
import Hero from '../components/Hero'
import PageLayout from '../components/PageLayout'
import ContentSection from '../components/ContentSection'
import PrimaryButton from '../components/PrimaryButton'
import { BodyText, ParagraphText } from '../components/TextComponents'
import { config } from '../config/env'

/**
 * Enquiry Form Page Component (Booking Form)
 * 
 * This is a hidden booking form page accessible via /book route. It includes:
 * - Hero banner
 * - Comprehensive booking form with multiple fields
 * - Form sends booking enquiries via email
 * 
 * TO EDIT THIS PAGE:
 * 1. Change Hero title/subtitle in the Hero component
 * 2. Update form field labels and placeholders
 * 3. Add/remove age options in the Select dropdown
 * 4. Update session length options
 * 5. Update availability checkboxes
 * 6. Update the message at the bottom of the form
 * 7. Email sending is handled automatically - no changes needed
 */
function EnquiryForm() {
  // Form state - stores all booking form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    sessionLength: '',
    introCall: '',
    availableDays: [],
    customDayInput: '',
    preferredTime: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const toast = useToast()

  /**
   * Handles input changes in the form
   * Updates formData state when user types or selects options
   */
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  /**
   * Handles form submission
   * Formats all form data into an email and sends via backend API
   * Shows success/error messages to user
   */
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Format the form data into a readable email message
      const availableDaysText = formData.availableDays.length > 0
        ? formData.availableDays
            .map(day => {
              if (day === 'other') {
                return `Other: ${formData.customDayInput || 'Not specified'}`
              }
              return day.charAt(0).toUpperCase() + day.slice(1)
            })
            .join(', ')
        : 'Not specified'

      const emailMessage = `
New Booking Enquiry from ${formData.name}

Contact Details:
- Name: ${formData.name}
- Email: ${formData.email}
${formData.age ? `- Age: ${formData.age}` : ''}

Session Preferences:
- Session Length: ${formData.sessionLength ? `${formData.sessionLength} minutes` : 'Not specified'}
- Intro Call: ${formData.introCall || 'Not specified'}
- Preferred Time: ${formData.preferredTime || 'Not specified'}

Availability:
- Available Days: ${availableDaysText}

${formData.message ? `Additional Notes:\n${formData.message}` : ''}
      `.trim()

      // Send email via backend API endpoint
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: emailMessage,
          to: config.contactEmail,
          subject: `New Booking Enquiry from ${formData.name}`,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        // Show more detailed error message from server
        const errorMsg = data.details ? `${data.error}: ${data.details}` : data.error || 'Failed to send email'
        throw new Error(errorMsg)
      }

      toast({
        title: 'Booking Request Submitted!',
        description: 'Thank you for your booking request! I will be in touch soon to confirm your appointment.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      })
      setFormData({
        name: '',
        email: '',
        age: '',
        sessionLength: '',
        introCall: '',
        availableDays: [],
        customDayInput: '',
        preferredTime: '',
        message: ''
      })
    } catch (error) {
      console.error('Email sending failed:', error)
      toast({
        title: 'Error Submitting Request',
        description: error.message || 'There was an error submitting your booking request. Please try again or contact us directly at ' + config.contactEmail,
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
        title="Book a Free Discovery Call"
        subtitle="Let's start your journey"
      />

      <PageLayout>
        <ContentSection>
          <Box maxW="600px" mx="auto">
            <BodyText mb={{ base: 4, md: 6 }} textAlign="center" fontSize={{ base: 'sm', md: 'md' }}>
            To register your interest please complete this form and I will be in touch!
            </BodyText>

              <Box as="form" onSubmit={handleSubmit} bg="brand.50" p={{ base: 4, md: 8 }} borderRadius="lg">
                <VStack spacing={4}>
                <FormControl isRequired>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Full Name</FormLabel>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    bg="white"
                    placeholder="Your name"
                    size={{ base: 'md', md: 'lg' }}
                    minH={{ base: '44px', md: '48px' }}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Email</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    bg="white"
                    placeholder="your.email@example.com"
                    size={{ base: 'md', md: 'lg' }}
                    minH={{ base: '44px', md: '48px' }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>What is your age?</FormLabel>
                  <Select
                    name="age"
                    value={formData.age || ''}
                    onChange={handleChange}
                    bg="white"
                    placeholder="Select your age range"
                    size={{ base: 'md', md: 'lg' }}
                    minH={{ base: '44px', md: '48px' }}
                  >
                    <option value="13-17 (you will need parent / guardian's consent)">13-17</option>
                    <option value="18-24">18-24</option>
                    <option value="25-40">25-40</option>
                    <option value="41-65">41-65</option>
                    <option value="66+">66+</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Which session length are you interested in?</FormLabel>
                  <Select
                    name="sessionLength"
                    value={formData.sessionLength}
                    onChange={handleChange}
                    bg="white"
                    placeholder="Select your preferred session length"
                    size={{ base: 'md', md: 'lg' }}
                    minH={{ base: '44px', md: '48px' }}
                  >
                    <option value="30">30 mins</option>
                    <option value="50">50 mins</option>
                  </Select>
                </FormControl>
                <FormControl isRequired>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Would you like a free intro call, for 15 minutes on Google Meet, to ask any more questions?</FormLabel>
                  <Select
                    name="introCall"
                    value={formData.introCall}
                    onChange={handleChange}
                    bg="white"
                    size={{ base: 'md', md: 'lg' }}
                    minH={{ base: '44px', md: '48px' }}
                  >
                    <option value="yes">Yes please, I'd like to find out more!</option>
                    <option value="proceed">Proceed straight to coaching - I'm excited to get started!</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }} mb={3}>In the next week, what days are you available (UK time) for your intro call / coaching session?</FormLabel>
                  <CheckboxGroup
                    value={formData.availableDays}
                    onChange={(values) => setFormData({ ...formData, availableDays: values })}
                  >
                    <Stack spacing={2} direction="column">
                      <Checkbox value="monday" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        Monday
                      </Checkbox>
                      <Checkbox value="tuesday" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        Tuesday
                      </Checkbox>
                      <Checkbox value="wednesday" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        Wednesday
                      </Checkbox>
                      <Checkbox value="thursday" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        Thursday
                      </Checkbox>
                      <Checkbox value="friday" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        Friday
                      </Checkbox>
                      <Checkbox value="saturday" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        Saturday
                      </Checkbox>
                      <Checkbox value="sunday" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        Sunday
                      </Checkbox>
                      <Checkbox value="none" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        I'm not free this week, so I'll let you know a time via email
                      </Checkbox>
                      <Checkbox value="other" bg="white" p={{ base: 1.5, md: 2 }} borderRadius="md" minH={{ base: '44px', md: 'auto' }}>
                        Other:
                      </Checkbox>
                    </Stack>
                  </CheckboxGroup>
                  {formData.availableDays.includes('other') && (
                    <Input
                      mt={2}
                      name="customDayInput"
                      value={formData.customDayInput}
                      onChange={handleChange}
                      placeholder="Please specify your availability..."
                      bg="white"
                      size={{ base: 'md', md: 'lg' }}
                      minH={{ base: '44px', md: '48px' }}
                    />
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Preferred Time (Optional)</FormLabel>
                  <Select
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    bg="white"
                    placeholder="Select a time"
                    size={{ base: 'md', md: 'lg' }}
                    minH={{ base: '44px', md: '48px' }}
                  >
                    <option value="">Select a time</option>
                    <option value="morning">Morning (9am - 12pm)</option>
                    <option value="afternoon">Afternoon (12pm - 5pm)</option>
                    <option value="evening">Evening (5pm - 8pm)</option>
                  </Select>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize={{ base: 'sm', md: 'md' }}>Additional Notes (Optional)</FormLabel>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={{ base: 4, md: 4 }}
                    bg="white"
                    placeholder="Tell us a bit about what you'd like to discuss..."
                    minH={{ base: '100px', md: '120px' }}
                  />
                </FormControl>
                <PrimaryButton type="submit" w="full" size="lg" isLoading={isSubmitting} loadingText="Submitting...">
                  Request Booking
                </PrimaryButton>
                
                <ParagraphText textAlign="center">
                Pursuing something new can be daunting, so I'm so proud of you for reaching out! When we proceed to coaching, I will send a form asking your accessibility requirements, goals, communication needs and interests so I can meet YOUR needs along your coaching journey! Thank you for filling in this form, I look forward to meeting with you. 
                </ParagraphText>
              </VStack>
            </Box>
          </Box>
        </ContentSection>
      </PageLayout>
    </>
  )
}

export default EnquiryForm
