# Component Reference Guide

This document provides detailed information about all reusable components in the website.

## 📦 Available Components

All components are located in `src/components/` folder.

---

## 🎨 Text Components (`TextComponents.jsx`)

### ParagraphText
Standard paragraph text with consistent styling.

**Usage:**
```jsx
<ParagraphText mb={4}>
  Your paragraph text here. Use <strong>bold</strong> or <em>italic</em>.
</ParagraphText>
```

**Props:**
- `mb` - Bottom margin (number, e.g., `4`)
- Any standard text props

---

### BodyText
Body text, slightly smaller than paragraph text.

**Usage:**
```jsx
<BodyText mb={6}>
  Body text content
</BodyText>
```

---

### CardHeading
Heading text for cards.

**Usage:**
```jsx
<CardHeading fontSize={{ base: 'xl', md: '2xl' }} mb={4}>
  Card Title
</CardHeading>
```

---

### LargeText
Large, prominent text for emphasis.

**Usage:**
```jsx
<LargeText fontWeight="bold" textAlign="center">
  Important Message
</LargeText>
```

---

### SectionHeading
Section headings.

**Usage:**
```jsx
<SectionHeading>
  Section Title
</SectionHeading>
```

---

### BulletItem
Standard bullet point list item.

**Usage:**
```jsx
<List>
  <BulletItem>First item</BulletItem>
  <BulletItem>Second item</BulletItem>
</List>
```

---

### CheckmarkItem
List item with checkmark emoji (✅).

**Usage:**
```jsx
<List>
  <CheckmarkItem>Feature one</CheckmarkItem>
  <CheckmarkItem>Feature two</CheckmarkItem>
</List>
```

---

## 🎯 Layout Components

### Hero
Large banner at the top of pages with title and subtitle.

**Usage:**
```jsx
<Hero 
  title="Page Title"
  subtitle="Page Subtitle"
/>
```

**Props:**
- `title` (required) - Main heading text
- `subtitle` (required) - Subtitle text
- `backgroundImage` (optional) - Background image URL

---

### PageLayout
Container wrapper for page content with consistent padding.

**Usage:**
```jsx
<PageLayout>
  {/* Page content */}
</PageLayout>
```

---

### ContentSection
Section container with optional title and subtitle.

**Usage:**
```jsx
<ContentSection title="Section Title" subtitle="Optional Subtitle">
  {/* Section content */}
</ContentSection>
```

**Props:**
- `title` (optional) - Section title
- `subtitle` (optional) - Section subtitle
- `textAlign` (optional) - Text alignment ("left", "center", "right")
- `mb` (optional) - Bottom margin

---

### StyledCard
Styled card component for displaying information boxes.

**Usage:**
```jsx
<StyledCard hover={true}>
  <CardHeading>Card Title</CardHeading>
  <ParagraphText>Card content</ParagraphText>
</StyledCard>
```

**Props:**
- `hover` (optional) - Enable hover effect (true/false)
- `bg` (optional) - Background color (default: "white")

---

### QuoteBox
Styled box for displaying quotes or testimonials.

**Usage:**
```jsx
<QuoteBox author="Author Name">
  "Quote text goes here"
</QuoteBox>
```

**Props:**
- `author` (optional) - Author name to display below quote
- `textAlign` (optional) - Text alignment

---

### InfoBox
Information box with clean styling.

**Usage:**
```jsx
<InfoBox>
  Information text here
</InfoBox>
```

---

## 🖼️ Media Components

### Photo
Single image component with responsive sizing.

**Usage:**
```jsx
<Photo
  src="/image.jpg"
  alt="Image description"
  orientation="portrait"
/>
```

**Props:**
- `src` (required) - Image path (from public folder, start with `/`)
- `alt` (required) - Alt text for accessibility
- `orientation` (optional) - "portrait", "landscape", or "square" (default: "landscape")
- `height` (optional) - Custom height
- `maxWidth` (optional) - Maximum width
- `borderRadius` (optional) - Border radius (default: "lg")
- `shadow` (optional) - Show shadow (default: true)
- `objectPosition` (optional) - Image position (e.g., "center 40%")

---

### MediaSlider
Image slider/carousel with auto-play option.

**Usage:**
```jsx
<MediaSlider 
  images={['/img1.jpg', '/img2.jpg', '/img3.jpg']}
  autoPlay={true}
  interval={5000}
  orientation="portrait"
/>
```

**Props:**
- `images` (required) - Array of image paths
- `autoPlay` (optional) - Auto-rotate images (default: false)
- `interval` (optional) - Time between slides in milliseconds (default: 5000)
- `orientation` (optional) - "portrait" or "landscape" (default: "landscape")

---

### YouTubeEmbed
Embed a YouTube video.

**Usage:**
```jsx
<YouTubeEmbed 
  videoId="ABC123xyz"
  title="Video Title"
  maxWidth="800px"
/>
```

**Props:**
- `videoId` (required) - YouTube video ID (not full URL)
- `title` (required) - Video title for accessibility
- `maxWidth` (optional) - Maximum width (default: "100%")

**How to get Video ID:**
- From URL: `https://www.youtube.com/watch?v=ABC123xyz`
- Video ID is: `ABC123xyz`

---

### PodcastEmbed
Embed a podcast (Spotify).

**Usage:**
```jsx
<PodcastEmbed 
  embedUrl="https://open.spotify.com/embed/episode/..."
  title="Podcast Title"
/>
```

**Props:**
- `embedUrl` (required) - Full Spotify embed URL
- `title` (required) - Podcast title

---

## 🔘 Interactive Components

### PrimaryButton
Styled primary button with gradient background.

**Usage:**
```jsx
<PrimaryButton to="/contact" size="lg">
  Click Me
</PrimaryButton>
```

**Props:**
- `to` (optional) - Link destination (for navigation)
- `size` (optional) - Button size ("sm", "md", "lg")
- `isLoading` (optional) - Show loading state (true/false)
- `loadingText` (optional) - Text to show while loading
- `type` (optional) - Button type ("button", "submit")

---

### CTASection
Call-to-action section with title, description, and button.

**Usage:**
```jsx
<CTASection
  title="Let's Work Together"
  description="Contact me to get started"
  buttonText="Get in Touch"
  buttonLink="/contact"
/>
```

**Props:**
- `title` (required) - Section title
- `description` (required) - Description text
- `buttonText` (required) - Button label
- `buttonLink` (required) - Button destination

---

## 📋 List Components

### FeatureList
Display features in a responsive grid.

**Usage:**
```jsx
<FeatureList
  title="Features"
  features={[
    { description: "Feature one description" },
    { description: "Feature two description" }
  ]}
  color="white"
  headingColor="white"
  titleColor="white"
/>
```

**Props:**
- `title` (optional) - Section title
- `features` (required) - Array of feature objects with `description`
- `color` (optional) - Text color
- `headingColor` (optional) - Heading color
- `titleColor` (optional) - Title color

---

### TextGrid
Display text items in a responsive grid.

**Usage:**
```jsx
<TextGrid
  title="Services"
  values={[
    { description: "Service one" },
    { description: "Service two" }
  ]}
  columns={{ base: 1, md: 2, lg: 4 }}
/>
```

**Props:**
- `title` (optional) - Section title
- `values` (required) - Array of value objects with `description`
- `columns` (optional) - Responsive column configuration

---

### FAQ
FAQ accordion component.

**Usage:**
```jsx
<FAQ
  items={[
    {
      question: "What is this?",
      answer: "This is the answer."
    },
    {
      question: "How does it work?",
      answer: "It works like this."
    }
  ]}
/>
```

**Props:**
- `items` (required) - Array of FAQ items with `question` and `answer`

---

## 🎨 Styling Tips

### Responsive Sizing
Many components support responsive props:
```jsx
fontSize={{ base: 'md', md: 'lg' }}  // Small on mobile, large on desktop
spacing={{ base: 4, md: 8 }}         // Less spacing on mobile
```

### Colors
Use brand colors:
- `brand.50` - Lightest blue
- `brand.100` - Light blue
- `brand.200` - Medium light blue
- `brand.500` - Medium blue
- `brand.600` - Medium dark blue
- `brand.700` - Dark blue
- `brand.800` - Darkest blue
- `white` - White
- `black` - Black

### Spacing
Use Chakra UI spacing scale (multiples of 4px):
- `2` = 8px
- `4` = 16px
- `6` = 24px
- `8` = 32px
- `10` = 40px
- `12` = 48px

---

## 🔗 Navigation

### Internal Links
Use `PrimaryButton` with `to` prop:
```jsx
<PrimaryButton to="/contact">Contact</PrimaryButton>
```

### External Links
Use Chakra UI `Link`:
```jsx
<Link href="https://example.com" target="_blank" rel="noopener noreferrer">
  External Link
</Link>
```

---

## 📝 Best Practices

1. **Always provide alt text** for images (accessibility)
2. **Use semantic HTML** - components handle this automatically
3. **Test responsive design** - check mobile and desktop views
4. **Keep text concise** - components are optimized for readability
5. **Use consistent spacing** - follow the spacing scale
6. **Check image sizes** - optimize images before adding to public folder

---

## 🆘 Troubleshooting

### Image not showing?
- Check image is in `public/` folder
- Verify path starts with `/` (e.g., `/image.jpg`)
- Check file extension matches (case-sensitive)

### Component not working?
- Check all required props are provided
- Verify component is imported correctly
- Check browser console for errors

### Styling looks wrong?
- Check responsive props are correct
- Verify color values are valid
- Check spacing values

---

**For more detailed editing instructions, see `EDITING-GUIDE.md`**
