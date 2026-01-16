import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box, Heading, Text } from '@chakra-ui/react'

/**
 * FAQ component for displaying expandable questions and answers
 * 
 * @param {string} title - FAQ section title (optional)
 * @param {Array} items - Array of { question: string, answer: string } objects
 * @param {object} ...props - Any other Chakra UI Box props
 */
function FAQ({ title, items = [], ...props }) {
  if (!items || items.length === 0) return null

  return (
    <Box {...props}>
      {title && (
        <Heading 
          as="h2" 
          size={{ base: 'lg', md: 'xl' }} 
          mb={6} 
          color="brand.700"
          fontWeight="bold"
        >
          {title}
        </Heading>
      )}
      <Accordion allowToggle borderColor="brand.100">
        {items.map((item, index) => (
          <AccordionItem key={index} borderTop={index === 0 ? '1px solid' : 'none'} borderColor="brand.100">
            <AccordionButton 
              py={6}
              _hover={{ bg: 'brand.50' }}
              _expanded={{ bg: 'brand.50', borderBottom: '1px solid', borderColor: 'brand.100' }}
            >
              <Box 
                flex="1" 
                textAlign="left" 
                fontWeight="semibold" 
                color="brand.700"
                fontSize={{ base: 'md', md: 'lg' }}
              >
                {item.question}
              </Box>
              <AccordionIcon color="brand.500" />
            </AccordionButton>
            <AccordionPanel 
              pb={6} 
              px={6}
              bg="white"
              fontSize={{ base: 'md', md: 'lg' }}
              color="brand.700"
              lineHeight="1.7"
            >
              {typeof item.answer === 'string' ? (
                <Text>{item.answer}</Text>
              ) : (
                item.answer
              )}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  )
}

export default FAQ
