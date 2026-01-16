import { Box } from '@chakra-ui/react'

function PodcastEmbed({ embedUrl, title = "Podcast player", height = "352px" }) {
  if (!embedUrl) {
    return null
  }

  return (
    <Box
      borderRadius="lg"
      overflow="hidden"
      boxShadow="md"
      bg="brand.50"
      p={4}
      mb={4}
    >
      <Box
        as="iframe"
        src={embedUrl}
        title={title}
        width="100%"
        height={height}
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        borderRadius="12px"
      />
    </Box>
  )
}

export default PodcastEmbed
