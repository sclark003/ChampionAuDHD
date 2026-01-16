import { SimpleGrid, Box, Text, Link, Grid } from '@chakra-ui/react'
import Hero from '../components/Hero'
import PageLayout from '../components/PageLayout'
import ContentSection from '../components/ContentSection'
import CTASection from '../components/CTASection'
import Photo from '../components/Photo'
import StyledCard from '../components/StyledCard'
import QuoteBox from '../components/QuoteBox'
import InfoBox from '../components/InfoBox'
import FAQ from '../components/FAQ'
import { config } from '../config/env'
import { BodyText, CardHeading, CardText, ParagraphText } from '../components/TextComponents'

/**
 * Consultancy Page Component
 * 
 * This page displays information about consultancy services. It includes:
 * - Hero banner
 * - My Story section with photo
 * - Services provided (Training, Webinars)
 * - NHS Lived Experience section
 * - Peace Pathway subsection
 * - Why Choose Me cards
 * - FAQ section
 * - Call-to-action section
 * 
 * TO EDIT THIS PAGE:
 * 1. Change Hero title/subtitle in the Hero component
 * 2. Update My Story text in ParagraphText components
 * 3. Change photo by updating src in Photo component (image in /public folder)
 * 4. Update service descriptions in StyledCard components
 * 5. Update FAQ items in the FAQ component (items array)
 * 6. Update Peace Pathway link in .env file (VITE_PEACE_PATHWAY_URL)
 */
function Consultancy() {
  return (
    <>
      <Hero 
        title="Consultancy Services"
        subtitle="Expert guidance for your organisation"
      />

      <PageLayout>
        <ContentSection title="My Story">
          <Grid templateColumns={{ base: '1fr', lg: '1.5fr 1fr' }} gap={{ base: 4, lg: 8 }} alignItems="start">
            <Box>
              <ParagraphText>
                Not too long ago, I was voiceless and silenced by a system that was not designed for me. Now I've found my voice, I want to use it, to encourage others to champion their own story. Never changing you as an individual, but adapting the environment so you can grow and flourish. 
                From barely surviving to thriving, I know what it's like to feel broken and hopeless. But there is hope, and here's why..
              </ParagraphText>
              <ParagraphText>
                Finding out I was autistic (and later dyslexic and ADHD) was the catalyst for change in my recovery from anorexia. I began to unmask, adapt my life and learn more about myself but most of all - I felt free… 
              </ParagraphText>
              <Box my={6}>
                <QuoteBox>
                  "I am autistic, I am free"
                </QuoteBox>
              </Box>
              <ParagraphText>
                I broke free from the chains of living a life not designed for me, and began to create a life for me, that works for me. There was nothing wrong with me, I realised. I want to champion YOU so you can create a life you love and most importantly: feel truly happy in.
              </ParagraphText>
            </Box>
            <Box textAlign={{ base: 'center', lg: 'right' }}>
              <Photo
                src="/my-story.jpg"
                alt="My Story"
                orientation="portrait"
                height={{ base: '300px', md: '400px', lg: '450px' }}
                objectPosition="center 40%"
                maxWidth="100%"
              />
            </Box>
          </Grid>
        </ContentSection>

        <ContentSection title="My Expertise" subtitle="Bridging Lived Experience with Professional Expertise">
          <BodyText>
            I provide neurodiversity consultancy services to help organisations create more inclusive 
            and supportive environments. With lived experience as an Autistic ADHDer and dyslexic, 
            combined with professional expertise, I bring a unique perspective to neurodiversity training 
            and awareness programmes.
          </BodyText>
        </ContentSection>

        <ContentSection title="Services I Provide">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} mb={4}>Neurodiversity Training for Your Workforce</CardHeading>
              <CardText mb={3} fontWeight="medium" color="brand.600" fontSize={{ base: 'sm', md: 'md' }}>
                Tailored sessions (45-120 minutes)
              </CardText>
              <CardText fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                Customised neurodiversity training sessions designed specifically for your business. 
                These sessions help your team understand neurodivergence, create more inclusive workplaces, 
                and support neurodivergent employees effectively.
              </CardText>
            </StyledCard>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} mb={4}>Webinars on Neurodiversity Topics</CardHeading>
              <CardText mb={3} fontWeight="medium" color="brand.600" fontSize={{ base: 'sm', md: 'md' }}>
                Engaging educational sessions
              </CardText>
              <CardText fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                Interactive webinars on neurodiversity-related topics. These sessions provide valuable 
                insights and education on understanding, supporting, and championing neurodivergent 
                individuals in various contexts.
              </CardText>
            </StyledCard>
          </SimpleGrid>
        </ContentSection>

        <ContentSection title="NHS Lived Experience Expertise" subtitle="Informing Healthcare Through Authentic Experience">
          <ParagraphText mb={8}>
            I work with the NHS as a lived experience expert, bringing my personal journey as an 
            Autistic ADHDer to help inform and improve services. My role includes:
          </ParagraphText>
          <Box bg="white" border="1px solid" borderColor="brand.100" borderRadius="none">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
              <InfoBox>
                Providing lived experience perspective to inform service development
              </InfoBox>
              <InfoBox borderLeft="1px solid" borderLeftColor="brand.100">
                Training healthcare professionals on neurodivergent experiences
              </InfoBox>
              <InfoBox borderTop="1px solid" borderTopColor="brand.100">
                Advocating for better support and understanding of neurodivergent individuals
              </InfoBox>
              <InfoBox borderLeft="1px solid" borderLeftColor="brand.100" borderTop="1px solid" borderTopColor="brand.100">
                Contributing to policy and practice improvements
              </InfoBox>
            </SimpleGrid>
          </Box>

          <Box mt={10} pt={8} borderTop="2px solid" borderColor="brand.200">
            <Text
              as="h3"
              fontSize="xl"
              fontWeight="bold"
              mb={4}
              color="brand.700"
            >
              NHS Peace Pathway: <i>AUTISM AND EATING DISORDERS</i>
            </Text>
            <Text
              fontSize="md"
              color="brand.600"
              mb={6}
              fontStyle="italic"
            >
              Sharing Personal Stories
            </Text>
            <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 4, lg: 8 }} alignItems="center">
              <Box>
                <ParagraphText mb={4}>
                  NHS Peace Pathway text.
                </ParagraphText>
                <Box my={4}>
                  <QuoteBox>
                    "Receiving my autism diagnosis allowed me to reconnect with the world in a way I find meaningful but more importantly connect with myself so I could shape and build a future I truly wanted."
                  </QuoteBox>
                </Box>
                <Box mb={4}>
                    <Link 
                      href={config.peacePathwayUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="brand.600" 
                      fontWeight="medium"
                      fontSize="md"
                      _hover={{ color: 'brand.700', textDecoration: 'underline' }}
                    >
                      Learn more about NHS Peace Pathway
                    </Link>
                  </Box>
              </Box>
              <Box textAlign="center">
                <Photo
                  src="/peace-pathway.png"
                  alt="NHS Peace Pathway"
                  orientation="square"
                  maxWidth="100%"
                />
              </Box>
            </Grid>
          </Box>
        </ContentSection>

        <ContentSection title="Why Choose Me">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }} mt={4}>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} mb={3}>Lived Experience</CardHeading>
              <CardText fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                As an Autistic ADHDer and dyslexic, I bring authentic, first-hand understanding 
                of neurodivergent experiences to every training session.
              </CardText>
            </StyledCard>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} mb={3}>Professional Expertise</CardHeading>
              <CardText fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                Accredited qualifications combined with professional experience in neurodiversity 
                training and consultancy.
              </CardText>
            </StyledCard>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} mb={3}>NHS Experience</CardHeading>
              <CardText fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                Proven track record working with the NHS as a lived experience expert, trainer, 
                and advocate.
              </CardText>
            </StyledCard>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} mb={3}>Tailored Approach</CardHeading>
              <CardText fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
                Customised training sessions designed specifically for your organisation's unique 
                needs and context.
              </CardText>
            </StyledCard>
          </SimpleGrid>
        </ContentSection>

        <ContentSection title="Got Questions?">
          <FAQ
            items={[
              {
                question: "Who is this consultancy for?",
                answer: "This consultancy is for organisations, businesses, healthcare providers, and educational institutions that want to create more inclusive, supportive environments for neurodivergent individuals. Whether you're looking to train your workforce, develop better policies, or understand neurodiversity better, these services are designed for you."
              },
              {
                question: "What types of training do you offer?",
                answer: "I offer neurodiversity training for workforces (45-120 minutes, tailored to your business), webinars on neurodiversity-related topics (evening slots available), and specialised training for healthcare professionals. All sessions are customised to meet your organisation's specific needs and context."
              },
              {
                question: "How are the sessions delivered?",
                answer: "Training sessions can be delivered virtually or in-person, depending on your preference and location. Webinars are typically virtual and can accommodate larger audiences. All sessions are interactive and designed to be engaging and educational."
              },
              {
                question: "What makes your approach different?",
                answer: "My approach combines lived experience as an Autistic ADHDer and dyslexic with professional expertise and proven NHS experience. I bring an authentic, first-hand understanding of neurodivergent experiences to every session, ensuring that training is both practical and deeply informed by real-world insights."
              },
              {
                question: "How do I get started?",
                answer: "Simply reach out through the contact page to discuss your organisation's needs. We can schedule a consultation to determine the best approach for your team, whether that's workforce training, webinars, or specialised healthcare training. I'll work with you to create a tailored programme that fits your context."
              }
            ]}
          />
        </ContentSection>

        <CTASection
          title="Let's Work Together"
          description="Contact me to discuss how I can help your organisation thrive."
          buttonText="Get in Touch"
          buttonLink="/contact"
        />
      </PageLayout>
    </>
  )
}

export default Consultancy
