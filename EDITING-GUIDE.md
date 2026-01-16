# Website Editing Guide for Non-Technical Users

This guide will help you edit the website content without needing to know how to code. Everything is organized into simple components that you can easily update.

## 📁 Important Files and Folders

### Where to Edit Content
- **Page Content**: `src/pages/` folder
  - `Home.jsx` - Home page
  - `Coaching.jsx` - Coaching services page
  - `Consultancy.jsx` - Consultancy services page
  - `Contact.jsx` - Contact page
  - `EnquiryForm.jsx` - Booking form page
  - `Media.jsx` - Media and publications page

### Where to Add Images
- **Images**: `public/` folder
  - Add all images here (JPG, PNG, etc.)
  - Reference them in code as `/image-name.jpg`

### Configuration
- **Settings**: `.env` file (in project root)
  - Email addresses
  - Social media links
  - Video IDs
  - Other configurable values

---

## 🎨 Common Components You'll Use

### Text Components
These are pre-styled text components you can use:

- **`<ParagraphText>`** - Regular paragraph text
- **`<BodyText>`** - Body text (slightly smaller)
- **`<CardHeading>`** - Heading for cards
- **`<LargeText>`** - Large, prominent text
- **`<SectionHeading>`** - Section headings

**Example:**
```jsx
<ParagraphText>
  This is a paragraph. You can make text <strong>bold</strong> or <em>italic</em>.
</ParagraphText>
```

### Layout Components

#### Hero Banner
The big banner at the top of each page:
```jsx
<Hero 
  title="Your Page Title"
  subtitle="Your subtitle text"
/>
```

#### Content Section
A section with title and content:
```jsx
<ContentSection title="Section Title" subtitle="Optional subtitle">
  {/* Your content here */}
</ContentSection>
```

#### Styled Card
A card box for displaying information:
```jsx
<StyledCard hover={true}>
  <CardHeading>Card Title</CardHeading>
  <ParagraphText>Card content goes here</ParagraphText>
</StyledCard>
```

#### Quote Box
For displaying quotes or testimonials:
```jsx
<QuoteBox author="Optional Author Name">
  "Your quote text goes here"
</QuoteBox>
```

### Media Components

#### Photo
Display a single image:
```jsx
<Photo
  src="/your-image.jpg"
  alt="Description of image"
  orientation="portrait"  // or "landscape" or "square"
/>
```

#### Media Slider
A rotating image slider:
```jsx
<MediaSlider 
  images={['/image1.jpg', '/image2.jpg', '/image3.jpg']}
  autoPlay={true}
  interval={5000}
  orientation="portrait"
/>
```

#### YouTube Embed
Embed a YouTube video:
```jsx
<YouTubeEmbed 
  videoId="YOUR_VIDEO_ID"
  title="Video Title"
  maxWidth="800px"
/>
```

---

## 📝 How to Edit Each Page

### Home Page (`src/pages/Home.jsx`)

**What you can edit:**
1. **Hero Banner** (lines ~24-27)
   - Change `title` and `subtitle` text

2. **About Me Text** (lines ~35-40)
   - Edit the text inside `<ParagraphText>` components
   - Use `<strong>` for bold text

3. **About Me Images** (lines ~14-20)
   - Update the `aboutMeImages` array with your image filenames
   - Images must be in the `public/` folder

4. **Feature List** (lines ~74-89)
   - Edit the `features` array
   - Each feature has a `description` property

5. **Services Grid** (lines ~94-109)
   - Edit the `values` array
   - Each service has a `description` property

---

### Coaching Page (`src/pages/Coaching.jsx`)

**What you can edit:**
1. **Hero Banner** (lines ~31-34)
   - Change title and subtitle

2. **What I Do Section** (lines ~41-50)
   - Edit text in `<ParagraphText>`
   - Update bullet points in the `<List>` component

3. **Images** (lines ~64-95)
   - Change image paths: `/coaching-image1.jpg` and `/coaching-image2.png`
   - Images must be in `public/` folder

4. **Why Work With Me** (lines ~100-114)
   - Edit text content
   - Update checkmark list items

5. **Information Cards** (lines ~127-153)
   - Edit content in each `<StyledCard>`
   - Update pricing information

6. **Client Quote** (lines ~158-162)
   - Update quote text in `<QuoteBox>`

7. **YouTube Video** (lines ~117-125)
   - Video ID is set in `.env` file as `VITE_YOUTUBE_VIDEO_ID`

---

### Consultancy Page (`src/pages/Consultancy.jsx`)

**What you can edit:**
1. **Hero Banner** (lines ~17-20)
   - Change title and subtitle

2. **My Story Section** (lines ~23-53)
   - Edit text in `<ParagraphText>` components
   - Update photo: change `src="/my-story.jpg"` (line ~44)

3. **Services Cards** (lines ~64-88)
   - Edit service descriptions in `<StyledCard>` components

4. **NHS Section** (lines ~91-165)
   - Update text content
   - Update Peace Pathway link in `.env` file (`VITE_PEACE_PATHWAY_URL`)
   - Change Peace Pathway image: `src="/peace-pathway.png"` (line ~157)

5. **Why Choose Me Cards** (lines ~167-198)
   - Edit content in each `<StyledCard>`

6. **FAQ Section** (lines ~200-225)
   - Update the `items` array
   - Each item has `question` and `answer` properties

---

### Contact Page (`src/pages/Contact.jsx`)

**What you can edit:**
1. **Hero Banner** (lines ~93-96)
   - Change title and subtitle

2. **Contact Information** (lines ~102-162)
   - Email address: Set in `.env` file as `VITE_CONTACT_EMAIL`
   - Instagram links: Set in `.env` file as:
     - `VITE_INSTAGRAM_URL_RACHEL`
     - `VITE_INSTAGRAM_URL_CHAMPIONAUDHD`

3. **Form Labels** (lines ~167-196)
   - Update form field labels if needed
   - Form functionality is automatic - no changes needed

---

### Enquiry Form Page (`src/pages/EnquiryForm.jsx`)

**What you can edit:**
1. **Hero Banner** (lines ~137-140)
   - Change title and subtitle

2. **Form Fields** (lines ~151-301)
   - Update field labels
   - Add/remove age options (lines ~188-192)
   - Update session length options (lines ~206-207)
   - Update availability checkboxes (lines ~231-258)
   - Update time options (lines ~284-287)
   - Update bottom message (lines ~306-308)

**Note:** Form automatically sends emails - no changes needed to email functionality.

---

### Media Page (`src/pages/Media.jsx`)

**What you can edit:**
1. **Hero Banner** (lines ~23-26)
   - Change title and subtitle

2. **Book Section** (lines ~30-116)
   - Update book images: Edit `bookImages` array (lines ~15-19)
   - Edit book text in `<ParagraphText>` components (lines ~68-94)
   - Update purchase link in `.env` file (`VITE_BOOK_PURCHASE_LINK`)

3. **Autistica Section** (lines ~119-152)
   - Update text content
   - Change images: `src="/autistica1.jpg"` and `src="/autistica2.jpg"` (lines ~130, 136)
   - Video ID in `.env` file (`VITE_AUTISTICA_VIDEO_ID`)

4. **Podcast Section** (lines ~155-168)
   - Embed URL in `.env` file (`VITE_PODCAST_EMBED_URL`)

5. **YouTube Section** (lines ~171-198)
   - Video ID in `.env` file (`VITE_YOUTUBE_CHANNEL_VIDEO_ID`)
   - Channel URL in `.env` file (`VITE_YOUTUBE_CHANNEL_URL`)

---

## ⚙️ Environment Variables (.env file)

The `.env` file contains all configurable settings. Here's what each variable does:

### Email Settings
- `VITE_CONTACT_EMAIL` - Email address where contact form messages are sent

### Social Media
- `VITE_INSTAGRAM_URL_RACHEL` - Link to Rachel's Instagram
- `VITE_INSTAGRAM_URL_CHAMPIONAUDHD` - Link to ChampionAuDHD Instagram

### Videos
- `VITE_YOUTUBE_VIDEO_ID` - YouTube video ID for Coaching page
- `VITE_AUTISTICA_VIDEO_ID` - YouTube video ID for Autistica campaign
- `VITE_YOUTUBE_CHANNEL_VIDEO_ID` - YouTube video ID for Media page
- `VITE_YOUTUBE_CHANNEL_URL` - Full YouTube channel URL

### Links
- `VITE_PEACE_PATHWAY_URL` - NHS Peace Pathway link
- `VITE_BOOK_PURCHASE_LINK` - Book purchase/pre-order link

### Podcast
- `VITE_PODCAST_EMBED_URL` - Spotify podcast embed URL
- `VITE_PODCAST_LINK` - Podcast link (if different from embed)

**How to get a YouTube Video ID:**
- URL: `https://www.youtube.com/watch?v=ABC123xyz`
- Video ID: `ABC123xyz` (the part after `v=`)

---

## 🖼️ Adding Images

### Step 1: Add Image to Public Folder
1. Save your image (JPG, PNG, etc.)
2. Copy it to the `public/` folder
3. Note the filename (e.g., `my-photo.jpg`)

### Step 2: Use Image in Code
Reference it as `/my-photo.jpg` (with a leading slash)

**Example:**
```jsx
<Photo
  src="/my-photo.jpg"
  alt="Description of the photo"
  orientation="portrait"
/>
```

### Image Orientations
- `portrait` - Tall images (height > width)
- `landscape` - Wide images (width > height)
- `square` - Equal width and height

---

## ✏️ Text Formatting

### Making Text Bold
```jsx
<ParagraphText>
  This is <strong>bold text</strong>
</ParagraphText>
```

### Making Text Italic
```jsx
<ParagraphText>
  This is <em>italic text</em>
</ParagraphText>
```

### Making Text Underlined
```jsx
<ParagraphText>
  This is <u>underlined text</u>
</ParagraphText>
```

### Combining Formats
```jsx
<ParagraphText>
  This is <strong><em>bold and italic</em></strong>
</ParagraphText>
```

---

## 🔧 Common Tasks

### Changing a Page Title
Find the `<Hero>` component at the top of the page and change the `title` prop:
```jsx
<Hero 
  title="Your New Title"
  subtitle="Your subtitle"
/>
```

### Adding a New Paragraph
Add a new `<ParagraphText>` component:
```jsx
<ParagraphText>
  Your new paragraph text goes here.
</ParagraphText>
```

### Adding a New Image
1. Add image to `public/` folder
2. Add a `<Photo>` component:
```jsx
<Photo
  src="/your-new-image.jpg"
  alt="Description"
  orientation="landscape"
/>
```

### Updating a Link
Find the link and update the `href`:
```jsx
<Link href="https://new-link.com" target="_blank" rel="noopener noreferrer">
  Link Text
</Link>
```

---

## 🚨 Important Notes

### Before Making Changes
1. **Always save your work** - Use Ctrl+S (or Cmd+S on Mac)
2. **Check the browser** - Changes appear automatically in development mode
3. **Test on mobile** - The website is responsive, check how it looks on phones

### Common Mistakes to Avoid
1. **Don't delete closing tags** - Every `<Component>` needs a `</Component>`
2. **Don't forget quotes** - Text in props needs quotes: `title="My Title"`
3. **Image paths** - Always start with `/` for images in public folder
4. **Don't change function names** - Functions like `handleSubmit` are needed for forms

### If Something Breaks
1. Check the browser console for error messages
2. Make sure all quotes are closed
3. Make sure all tags are properly closed
4. Check that image paths are correct

---

## 📚 Component Reference

### Hero
```jsx
<Hero 
  title="Page Title"
  subtitle="Page Subtitle"
/>
```

### ContentSection
```jsx
<ContentSection title="Section Title" subtitle="Optional Subtitle">
  {/* Content goes here */}
</ContentSection>
```

### ParagraphText
```jsx
<ParagraphText mb={4}>
  Your paragraph text here
</ParagraphText>
```

### StyledCard
```jsx
<StyledCard hover={true}>
  <CardHeading>Card Title</CardHeading>
  <ParagraphText>Card content</ParagraphText>
</StyledCard>
```

### QuoteBox
```jsx
<QuoteBox author="Author Name">
  "Quote text here"
</QuoteBox>
```

### Photo
```jsx
<Photo
  src="/image.jpg"
  alt="Image description"
  orientation="portrait"
/>
```

### MediaSlider
```jsx
<MediaSlider 
  images={['/img1.jpg', '/img2.jpg']}
  autoPlay={true}
  interval={5000}
  orientation="portrait"
/>
```

### PrimaryButton
```jsx
<PrimaryButton to="/contact" size="lg">
  Button Text
</PrimaryButton>
```

---

## 🆘 Need Help?

If you're stuck:
1. Check the comments in the code files - they explain what each section does
2. Look at similar sections in other pages for examples
3. Make small changes and test frequently
4. Save often and check the browser to see your changes

Remember: You can always undo changes if something doesn't work!

---

## 📝 Quick Checklist for Editing

- [ ] Made a backup or saved current version
- [ ] Found the right file to edit
- [ ] Located the section to change
- [ ] Made the edit carefully
- [ ] Saved the file
- [ ] Checked in browser
- [ ] Tested on mobile view
- [ ] Verified images load correctly
- [ ] Checked links work

---

**Happy Editing!** 🎉
