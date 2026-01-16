import {
  List,
  Box,
  Grid,
  SimpleGrid
} from '@chakra-ui/react'
import Hero from '../components/Hero'
import PageLayout from '../components/PageLayout'
import ContentSection from '../components/ContentSection'
import PrimaryButton from '../components/PrimaryButton'
import YouTubeEmbed from '../components/YouTubeEmbed'
import Photo from '../components/Photo'
import StyledCard from '../components/StyledCard'
import QuoteBox from '../components/QuoteBox'
import { config } from '../config/env'
import { ParagraphText, BodyText, CardHeading, BulletItem, CheckmarkItem, LargeText, BulletList } from '../components/TextComponents'

/**
 * Coaching Page Component
 * 
 * This page displays information about coaching services. It includes:
 * - Hero banner
 * - What I Do section with images
 * - Why Work With Me section
 * - Coaching information cards (My why, Qualifications, Pricing)
 * - Client endorsement quote
 * - Call-to-action button
 * 
 * TO EDIT THIS PAGE:
 * 1. Change Hero title/subtitle in the Hero component
 * 2. Update text content in ParagraphText, BodyText, and CardHeading components
 * 3. Change images by updating src paths in Photo components (images in /public folder)
 * 4. Update pricing in the Pricing StyledCard
 * 5. Update client quote in QuoteBox component
 * 6. YouTube video ID is set in .env file (VITE_YOUTUBE_VIDEO_ID)
 */
function Coaching() {

  return (
    <>
      <Hero 
        title="Coaching Services"
        subtitle="Encouraging you to be your authentic self"
      />

      <PageLayout>
        <Box mb={12} position="relative">
          <Grid templateColumns={{ base: '1fr', lg: '1.5fr 1fr' }} gap={{ base: 6, lg: 8 }} alignItems="start">
            {/* Text content */}
            <Box>
              <ContentSection title="What I Do" mb={0}>
                <ParagraphText>
                At <strong>ChampionAuDHD</strong>, I coach neurodivergent individuals and parents, carers, teachers, colleagues and anyone who wants to learn more and how to become a neurodivergent Champion. Remember, this is your journey, and I'm here to encourage and be there for you every step of the way. Together we can:
                <List spacing={3} mb={3} mt={3}>
                         <BulletItem>Celebrate you and understand yourself better</BulletItem>
                         <BulletItem>Create strategies that actually work for your brain and life goal</BulletItem>
                         <BulletItem>Feel seen, heard, and empowered — not judged and never "fixed", as there is nothing broken. This is <em>your</em> safe space!</BulletItem>
                       </List>
                </ParagraphText>
              </ContentSection>
            </Box>

            {/* Images section - positioned creatively */}
            <Box position="relative" minH={{ base: '400px', md: '600px' }}>
              {/* First image positioned top-right */}
              <Box
                position={{ base: 'relative', lg: 'absolute' }}
                top={{ base: 'auto', lg: 0 }}
                right={{ base: 'auto', lg: 0 }}
                mb={{ base: 4, lg: 0 }}
                zIndex={2}
              >
                <Photo
                  src="/coaching-image1.jpg"
                  alt="Coaching image 1"
                  orientation="landscape"
                  height={{ base: '250px', md: '300px' }}
                  shadow="xl"
                  borderRadius="lg"
                  transform={{ base: 'none', md: 'rotate(3deg)' }}
                  transition="transform 0.3s ease"
                  _hover={{ transform: { base: 'none', md: 'rotate(0deg) scale(1.05)' } }}
                />
              </Box>
              
              {/* Second image positioned bottom-left with overlap */}
              <Box
                position={{ base: 'relative', lg: 'absolute' }}
                bottom={{ base: 'auto', lg: 0 }}
                left={{ base: 'auto', lg: '-40px' }}
                mt={{ base: 4, lg: 0 }}
                zIndex={1}
              >
                <Photo
                  src="/coaching-image2.png"
                  alt="Coaching image 2"
                  orientation="landscape"
                  height={{ base: '250px', md: '350px' }}
                  shadow="xl"
                  borderRadius="lg"
                  transform={{ base: 'none', md: 'rotate(-3deg)' }}
                  transition="transform 0.3s ease"
                  _hover={{ transform: { base: 'none', md: 'rotate(0deg) scale(1.05)' } }}
                />
              </Box>
            </Box>
          </Grid>
        </Box>

        <ContentSection title="Why Work With Me?">
          <ParagraphText>
          At ChampionAuDHD, I coach neurodivergent individuals and parents, carers, teachers, coualleges and anyone who wants to learn more and how to become a neurodivergent Champion. Remember, this is your journey, and I'm here to encourage and be there for you every step of the way. Together we can:
          <List spacing={3} mb={3} mt={3}>
                   <CheckmarkItem>I'm relatable — I'm a young person who gets what it's like to grow up neurodivergent right now.</CheckmarkItem>
                   <CheckmarkItem>I bring lived experience — <em>because there's no</em> textbook on what it's like to be neurodivergent. I've experience darkeness, and now I'm flourishing, and I want to give you hope.</CheckmarkItem>
                   <CheckmarkItem>I'm accredited and want to make a difference — I completed the world's first ever AuDHD coaching course and became the youngest ever to complete the ADHD coaching certification with ADHDWorks.</CheckmarkItem>
                 </List>
          </ParagraphText>
          <br />
          <LargeText fontWeight="bold" textAlign="center">You're Not "Broken"</LargeText>
          <BodyText textAlign="center">
          You're a Champion in your own story  — and I'm here to help you believe it too.
          </BodyText>
        </ContentSection>

        <ContentSection title="ChampionAudhd Coaching information" textAlign="center">
          {config.youtubeVideoId && (
            <Box mb={6}>
              <YouTubeEmbed 
                videoId={config.youtubeVideoId} 
                title="Your Journey Video"
                maxWidth="800px"
              />
            </Box>
          )}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 8, md: 12 }}>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} fontStyle="italic" mb={4}>My why…</CardHeading>
              <ParagraphText mb={0} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
              As an <strong>Autistic ADHDer</strong> myself, for so long I felt like I was broken, voiceless, and like i didn't belong. But since finding out I was neurodivergent, <strong>everything changed for me</strong>. Now I've found my voice, I want to use it as a force for good, and empower others on their own journey: <strong>harnessing strengths, overcoming challenges and championing neurodivergence</strong> <u>never</u> condemning it - and so ChampionAudhd was born.
              </ParagraphText>
            </StyledCard>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} fontStyle="italic" mb={4}>Why Autism and Adhd specialised coaching?</CardHeading>
              <ParagraphText mb={0} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
              For me, getting my autism diagnosis in 2022 was a <strong>catalyst for change</strong> in my own recovery from anorexia, because at last I could nourish my neurodivergent self, adapt and create a life I love and celebrate my authentic self. I then later found out I am also an ADHDer! Now, I want to support you on your journey too - whatever that looks like for YOU. This is <strong>personalised coaching</strong>, it is your journey, your goals, and I will help give you the tools so you can build your future and flourish.
              </ParagraphText>
            </StyledCard>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} fontStyle="italic" mb={4}>My relevant qualifications</CardHeading>
              <ParagraphText mb={0} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
              I am accredited by ADHDWorks as a fully qualified ADHD coach and Advanced AuDHD coach and work with charities such as Mind, YoungMinds and Autistica, as well as the NHS as a neurodivergent advocate, trainer, speaker, creator and lived experience advisor and sharing my unmasking journey online. 
              </ParagraphText>
            </StyledCard>
            <StyledCard hover={true}>
              <CardHeading fontSize={{ base: 'xl', md: '2xl' }} fontStyle="italic" mb={4}>Pricing</CardHeading>
              <ParagraphText mb={0} fontSize={{ base: 'md', md: 'lg' }} lineHeight="1.7">
              My colleagues in this proffession currently charge £80-£300 per hour. To make it more accessible, but still cover my time and costs, I currently charge:
              <BulletList items={['£40 for 30 minutes, ', '£60 for 50 minutes.']} spacing={1} mb={3} mt={3} ml={{ base: 4, md: 100 }} mr={{ base: 0, md: 100 }}/>
              There is a discount on overall price of sessions if a block of 6 sessions or 12 sessions is paid for upfront.
              </ParagraphText>
            </StyledCard>
          </SimpleGrid>
        </ContentSection>

        <ContentSection>
          <Box maxW="900px" mx="auto">
            <QuoteBox author="Client Endorsement">
              "Thank you so much for another awesome session! I honestly find coaching so helpful in getting to understand the authentic neurodivergent me, guiding me to think about things that may help me flourish but which I have not previously given much (if any) thought too.  

<br /><br></br>Being coached by someone of the same neurotype who is willing to share their own lived experience is empowering and validating, especially for those of us who have discovered their neurodivergence later in life. AuDHD coaching really is a worthwhile investment in self-care and gaining a deeper understanding of oneself"
            </QuoteBox>
          </Box>
        </ContentSection>

        <ContentSection title="💬Ready to work together?" textAlign="center">
          <PrimaryButton to="/book" size="lg">
            Book a Free Discovery Call
          </PrimaryButton>
        </ContentSection>

      </PageLayout>
    </>
  )
}



export default Coaching
