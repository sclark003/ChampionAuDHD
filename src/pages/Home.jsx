import { Grid, Box } from '@chakra-ui/react'
import Hero from '../components/Hero'
import PageLayout from '../components/PageLayout'
import ContentSection from '../components/ContentSection'
import MediaSlider from '../components/MediaSlider'
import FeatureList from '../components/FeatureList'
import TextGrid from '../components/TextGrid'
import { ParagraphText } from '../components/TextComponents'

/**
 * Home Page Component
 * 
 * This is the main landing page of the website. It includes:
 * - Hero banner with title and subtitle
 * - About Me section with text and photo slider
 * - Feature list with background image
 * - Services grid (What I Offer)
 * 
 * TO EDIT THIS PAGE:
 * 1. Change the Hero title/subtitle by editing the Hero component props
 * 2. Update the About Me text by editing the ParagraphText components
 * 3. Change images by updating the aboutMeImages array (images must be in /public folder)
 * 4. Update features by editing the features array in FeatureList
 * 5. Update services by editing the values array in TextGrid
 */
function Home() {
  // Array of image paths for the About Me photo slider
  // Add your images to the /public folder and update these paths
  const aboutMeImages = [
    '/home1.jpg',
    '/home2.jpg',
    '/home3.jpg',
    '/home4.jpg',
    '/home5.jpg'
  ]

  return (
    <>
      <Hero 
        title="Welcome to ChampionAuDHD"
        subtitle="Championing neurodivergence"
      />

      <PageLayout>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={{ base: 4, lg: 6 }} alignItems="start" mb={6}>
          <ContentSection 
            title="About Me"
            subtitle="Coaching for Neurodivergent Minds, by a Neurodivergent Mind"
          >
            <ParagraphText>
            Hi, I'm Rachel, the founder of <strong>ChampionAuDHD</strong> — a safe space created to celebrate, nurture and most importantly, <strong>Champion YOU</strong> as a neurodivergent individual. Whether you're neurodivergent yourself, or you want to learn more and better support others, you're in the right place :) 
            </ParagraphText>
            <ParagraphText>
            I'm not just your (neuro)typical coach. I'm an autistic ADHDer, as well as dyslexic, with a purpose to encourage you to be your authentic self, and create a life that works for you, adapting the environment without changing yourself for the world. Equipped with my own lived experience, I know what it's like to feel stuck, broken, misunderstood, or like your brain cannot keep up with the world's expectations. But I also know the power of celebrating your strengths, finding your voice after being silenced by the system, writing new chapters without rewriting your own story. I thought I was broken, but in reality it was growing up in a world not designed for me. That's why, I created <strong>ChampionAudhd</strong>. 
            </ParagraphText>
          </ContentSection>
          
          <Box>
            <MediaSlider 
              images={aboutMeImages}
              autoPlay={true}
              interval={5000}
              orientation="portrait"
            />
          </Box>
        </Grid>

        <ContentSection
          position="relative"
          bgImage="url('/bg-image.jpg')"
          bgSize="cover"
          bgPosition="center"
          bgRepeat="no-repeat"
          p={{ base: 8, md: 12 }}
          bg="transparent"
        >
          {/* Overlay for better text readability */}
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg="blackAlpha.600"
            zIndex={1}
          />
          {/* Content with overlay */}
          <Box position="relative" zIndex={2}>
            <FeatureList
              color="white"
              headingColor="white"
              titleColor="white"
              features={[
                {
                  description: "My coaching business was created to empower and inspire neurodivergent minds, built by a neurodivergent mind. Not only am I a 2x qualified coach, but I know how it feels to grow up as a neurodivergent young person RIGHT NOW."
                },
                {
                  description: "Empowered by lived experience as an AuDHDer and my own struggles of navigating a world not built for us, and the challenges that come with that, I want to champion YOU to be your authentic self, celebrate who you are and support you to create a life that works for you."
                },
                {
                  description: "We don't need to change who we are, we need to adapt the environment and have the right support so we can grow and flourish. 🌻"
                }
              ]}
            />
          </Box>
        </ContentSection>

        <Box mb={12} mt={16} pt={12} borderTop="1px solid" borderColor="brand.200">
          <TextGrid title="What I Offer:"
            values={[
              {
                description: "Autism, ADHD and Audhd 1:1 virtual coaching sessions (30 and 50 minutes available to suit your needs ) for the individual."
              },
              {
                description: "Autism, ADHD and Audhd 1:1 virtual coaching sessions (30 and 50 minutes available to suit your needs) for the individual."
              },
              {
                description: "Neurodiversity training for your workforce, tailored to your business (45- 120 minutes)."
              },
              {
                description: "Webinars on neurodiversity related topics ( Evening slots available, TBC)."
              }
            ]}
          />
        </Box>
      </PageLayout>
    </>
  )
}

export default Home
