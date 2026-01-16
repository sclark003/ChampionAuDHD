import { Box, Link, SimpleGrid } from '@chakra-ui/react'
import Hero from '../components/Hero'
import PageLayout from '../components/PageLayout'
import ContentSection from '../components/ContentSection'
import YouTubeEmbed from '../components/YouTubeEmbed'
import PodcastEmbed from '../components/PodcastEmbed'
import { config } from '../config/env'
import MediaSlider from '../components/MediaSlider'
import QuoteBox from '../components/QuoteBox'
import Photo from '../components/Photo'
import { ParagraphText } from '../components/TextComponents'

/**
 * Media Page Component
 * 
 * This page displays media content including:
 * - Book information with images and text
 * - Autistica campaign video and images
 * - Podcast embed
 * - YouTube channel embed
 * 
 * TO EDIT THIS PAGE:
 * 1. Change Hero title/subtitle in the Hero component
 * 2. Update book images by editing bookImages array (images in /public folder)
 * 3. Update book text in ParagraphText components
 * 4. Update book purchase link in .env file (VITE_BOOK_PURCHASE_LINK)
 * 5. Update video IDs in .env file:
 *    - VITE_AUTISTICA_VIDEO_ID (YouTube video ID)
 *    - VITE_YOUTUBE_CHANNEL_VIDEO_ID
 * 6. Update podcast embed URL in .env file (VITE_PODCAST_EMBED_URL)
 * 7. Update YouTube channel URL in .env file (VITE_YOUTUBE_CHANNEL_URL)
 * 8. Add/remove Autistica images by updating Photo components
 */
function Media() {
  // Array of book cover images for the slider
  // Add images to /public folder and update these paths
  const bookImages = [
    '/book-cover.png',
    '/book1.JPEG',
    '/book2.JPG',
  ]

  return (
    <>
      <Hero 
        title="Media & Publications"
        subtitle="Books, Videos, Podcasts & More"
      />

      <PageLayout>
        {/* Book Section */}
          <ContentSection title="How to Save Your Own Life" subtitle="A guide to recovering from your eating disorder as an autistic person">
            {/* Quote Section - Full Width */}
            <Box mb={10}>
              <QuoteBox>
                "There are a thousand books about eating disorders, taking everything from gender to age into account. But they have a habit of assuming that you're neurotypical, and that your brain works in a very specific way. Not exactly helpful if yours doesn't!"
              </QuoteBox>
            </Box>

            {/* Creative Layout: Image floats left, text wraps around */}
            <Box position="relative">
              {/* Book Images - Floating on left */}
              <Box
                float={{ base: 'none', lg: 'left' }}
                mr={{ base: 0, lg: 8 }}
                mb={{ base: 6, lg: 4 }}
                width={{ base: '100%', lg: '380px' }}
                maxWidth={{ base: '100%', lg: '380px' }}
                position={{ base: 'relative', lg: 'relative' }}
                zIndex={1}
                transform={{ base: 'none', lg: 'rotate(-2deg)' }}
                transition="transform 0.3s ease"
                _hover={{
                  transform: { base: 'none', lg: 'rotate(0deg) scale(1.02)' }
                }}
              >
                <MediaSlider 
                  images={bookImages}
                  autoPlay={true}
                  interval={5000}
                  orientation="portrait"
                />
              </Box>

              {/* Text Content - Wraps around image */}
              <Box
                overflow="hidden"
                position="relative"
              >
                <ParagraphText mb={4}>
                  When I was 15, I didn't want to be alive. I needed to escape for good. I saw no future, and certainly no future I would ever be happy in.
                </ParagraphText>
                <ParagraphText mb={4}>
                  I was dying from an eating disorder. An eating disorder I thought impossible to recover from.
                </ParagraphText>
                <ParagraphText mb={4}>
                  I grew up believing I was inherently broken. But really it was growing up in a world not designed for me.
                </ParagraphText>
                <ParagraphText mb={4}>
                  So when I was diagnosed with AN, I felt locked and imprisoned by the chains of mental illness - no way to break free. No guide nor literature existed on autism and eating disorders away from clinical research, in a way that was accessible to me.
                </ParagraphText>
                <ParagraphText mb={4}>
                  So when looking for self-help books that understood me, what I found were all designed for neurotypical brains.
                </ParagraphText>
                <ParagraphText mb={4}>
                  So I wrote it.
                </ParagraphText>
                <ParagraphText mb={4}>
                  My book is not how to save someone's life. Nor the clinical presentation of an eating disorder and what that means diagnostically. But how to save your OWN life, on your terms. What that looks like for you. So you can save your own life, and continue saving it.
                </ParagraphText>
                <ParagraphText mb={4}>
                  This book is not only for autistic people, but everyone who wants a greater insight. Clinicians, parents, carers, teachers, colleagues, students, friends and anyone who wants to seek to understand better. To be equipped with knowledge and understanding to better support those struggling with an eating disorder. Not just eating disorders, too. This book is a source of hope and comfort, and above all, has a happy ending.
                </ParagraphText>
                <ParagraphText mb={6}>
                  Publishing 21st April 2026 🥹
                </ParagraphText>
              </Box>

              {/* Clear float and Purchase Link */}
              <Box clear="both" pt={6}>
                {config.bookPurchaseLink && (
                  <Box textAlign={{ base: 'center', lg: 'left' }}>
                    <Link
                      href={config.bookPurchaseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      color="brand.600"
                      fontWeight="bold"
                      fontSize={{ base: 'md', md: 'lg' }}
                      _hover={{ color: 'brand.700', textDecoration: 'underline' }}
                    >
                      Pre Order Now →
                    </Link>
                  </Box>
                )}
              </Box>
            </Box>
          </ContentSection>

        {/* Autistica Campaign Video */}
        {config.autisticaVideoId && (
          <ContentSection title="Autistica Campaign- OUR WORLD, 2030 " subtitle="Raising Awareness Through Storytelling">
            <Box mb={6}>
              <ParagraphText mb={6}>
                I'm proud to be part of Autistica's National award winning Autism campaign, short film, OUR WORLD, 2030, to raise awareness and understanding of neurodivergence.
              </ParagraphText>
              <ParagraphText mb={6}>Judge's gold award, category overall winner:  Smiley charity film awards </ParagraphText>
              
              {/* Autistica Images */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
                <Photo
                  src="/autistica1.jpg"
                  alt="Autistica Campaign Image 1"
                  orientation="landscape"
                  borderRadius="lg"
                />
                <Photo
                  src="/autistica2.jpg"
                  alt="Autistica Campaign Image 2"
                  orientation="landscape"
                  borderRadius="lg"
                />
              </SimpleGrid>

              <Box maxW="800px" mx="auto">
                <YouTubeEmbed 
                  videoId={config.autisticaVideoId}
                  title="Autistica Campaign Video"
                  maxWidth="100%"
                />
              </Box>
            </Box>
          </ContentSection>
        )}

        {/* Podcasts Section */}
        {(config.podcastEmbedUrl || config.podcastLink) && (
          <ContentSection title="Rachel's Radio" subtitle="Talking all things eating disorders, mental health and navigating life as autistic teen">
            <Box mb={6}>
              {config.podcastEmbedUrl && (
                <Box maxW="800px" mx="auto" mb={6}>
                  <PodcastEmbed 
                    embedUrl={config.podcastEmbedUrl}
                    title="Rachel's Radio Podcast"
                  />
                </Box>
              )}
            </Box>
          </ContentSection>
        )}

        {/* YouTube Channel Section */}
        {config.youtubeChannelVideoId && (
          <ContentSection title="YouTube Channel" subtitle="Sharing all things advocacy, awareness and living not just surviving ✨">
            <Box mb={6}>
              <Box maxW="800px" mx="auto" mb={6}>
                <YouTubeEmbed 
                  videoId={config.youtubeChannelVideoId}
                  title="Rachel's YouTube Channel"
                  maxWidth="100%"
                />
              </Box>
              {config.youtubeChannelUrl && (
                <QuoteBox textAlign="center">
                  <Link
                    href={config.youtubeChannelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    color="brand.600"
                    fontWeight="bold"
                    fontSize={{ base: 'lg', md: 'xl' }}
                    _hover={{ color: 'brand.700', textDecoration: 'underline' }}
                  >
                    Visit YouTube Channel →
                  </Link>
                </QuoteBox>
              )}
            </Box>
          </ContentSection>
        )}
      </PageLayout>
    </>
  )
}

export default Media
