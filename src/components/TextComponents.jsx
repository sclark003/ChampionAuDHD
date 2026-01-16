import { Text, Heading, List, ListItem } from '@chakra-ui/react'

// Body text - main paragraph text
export function BodyText({ children, mb = 4, ...props }) {
  return (
    <Text fontSize={{ base: 'md', md: 'lg' }} color="brand.600" lineHeight="tall" mb={mb} {...props}>
      {children}
    </Text>
  )
}

// Regular paragraph text
export function ParagraphText({ children, mb = 4, ...props }) {
  return (
    <Text color="brand.600" mb={mb} {...props}>
      {children}
    </Text>
  )
}

// Card heading - for headings inside cards
export function CardHeading({ children, ...props }) {
  return (
    <Text as="h3" fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold" mb={3} color="brand.700" {...props}>
      {children}
    </Text>
  )
}

// Card body text - text inside cards
export function CardText({ children, ...props }) {
  return (
    <Text color="brand.600" {...props}>
      {children}
    </Text>
  )
}

// Section heading - for h2 headings in sections
export function SectionHeading({ children, ...props }) {
  return (
    <Text as="h2" fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={4} color="brand.700" {...props}>
      {children}
    </Text>
  )
}

// Bold label text
export function LabelText({ children, ...props }) {
  return (
    <Text fontWeight="bold" color="brand.700" {...props}>
      {children}
    </Text>
  )
}

// Info text - for contact info, etc.
export function InfoText({ children, ...props }) {
  return (
    <Text color="brand.600" {...props}>
      {children}
    </Text>
  )
}

// Large text - for emphasized or larger paragraph text
export function LargeText({ children, mb = 4, ...props }) {
  return (
    <Text fontSize={{ base: 'lg', md: 'xl' }} color="brand.600" lineHeight="tall" mb={mb} {...props}>
      {children}
    </Text>
  )
}

// Bullet list - styled list with bullet points
export function BulletList({ items = [], spacing = 3, ...props }) {
  return (
    <List spacing={spacing} styleType="disc" {...props}>
      {items.map((item, index) => (
        <ListItem key={index} color="brand.600" pl={4} ml={4}>
          {item}
        </ListItem>
      ))}
    </List>
  )
}

// Bullet list item - for individual list items (regular bullet points)
export function BulletItem({ children, ...props }) {
  return (
    <ListItem 
      color="brand.600" 
      pl={2}
      listStyleType="disc"
      listStylePosition="outside"
      ml={4}
      {...props}
    >
      {children}
    </ListItem>
  )
}

// Checkmark list item - for list items with checkmark emoji
export function CheckmarkItem({ children, ...props }) {
  return (
    <ListItem 
      color="brand.600" 
      pl={2}
      ml={2}
      listStyleType="none"
      {...props}
    >
      <Text as="span" mr={2}>✅</Text>
      {children}
    </ListItem>
  )
}
