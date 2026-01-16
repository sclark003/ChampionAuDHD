import { Box, AspectRatio } from '@chakra-ui/react'

function YouTubeEmbed({ videoId, title = "YouTube video player", maxWidth = "100%" }) {
  // Extract video ID from full URL if provided
  const getVideoId = (idOrUrl) => {
    if (!idOrUrl) return ''
    // If it's already just an ID, return it
    if (idOrUrl.length === 11 && !idOrUrl.includes('/')) {
      return idOrUrl
    }
    // Extract from various YouTube URL formats
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/,
      /youtube\.com\/.*[?&]v=([^&\n?#]+)/
    ]
    for (const pattern of patterns) {
      const match = idOrUrl.match(pattern)
      if (match) return match[1]
    }
    return idOrUrl
  }

  const embedId = getVideoId(videoId)

  if (!embedId) {
    return null
  }

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="brand.50"
      p={2}
      maxW={maxWidth}
      mx="auto"
    >
      <AspectRatio ratio={16 / 9} maxW="100%">
        <Box
          as="iframe"
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
          borderRadius="md"
        />
      </AspectRatio>
    </Box>
  )
}

export default YouTubeEmbed
