# Design Document

## Overview

The app showcase website will be built as a modern, single-page React application using functional components and hooks. The design emphasizes visual hierarchy, smooth animations, and responsive layouts to create an engaging user experience. The architecture follows a component-based approach with a data-driven model that allows easy scaling as more apps are added.

## Architecture

### Technology Stack

- **React 19.2.0**: Core framework using functional components and hooks
- **CSS3**: Modern CSS with Flexbox/Grid for layouts, CSS custom properties for theming
- **CSS Modules or Styled Components**: Component-scoped styling to prevent conflicts
- **No external UI libraries**: Keep bundle size minimal and maintain full design control

### Application Structure

```
src/
├── components/
│   ├── AppCard/
│   │   ├── AppCard.js
│   │   └── AppCard.module.css
│   ├── ImageGallery/
│   │   ├── ImageGallery.js
│   │   └── ImageGallery.module.css
│   ├── FeatureList/
│   │   ├── FeatureList.js
│   │   └── FeatureList.module.css
│   └── Header/
│       ├── Header.js
│       └── Header.module.css
├── data/
│   └── apps.js
├── App.js
├── App.css
└── index.js
```

## Components and Interfaces

### 1. App Component (Root)

**Purpose**: Main container that orchestrates the showcase layout

**Props**: None (reads from data file)

**State**: None required for initial implementation

**Responsibilities**:
- Import app data from data source
- Render Header component
- Map through apps array and render AppCard for each
- Apply responsive grid layout

**Layout Strategy**:
- CSS Grid with responsive columns:
  - Mobile (< 768px): 1 column
  - Tablet (768px - 1024px): 2 columns
  - Desktop (> 1024px): 2-3 columns
- Gap between cards: 2rem
- Max-width container: 1400px, centered

### 2. Header Component

**Purpose**: Display website title and optional tagline

**Props**: 
```javascript
{
  title: string,
  subtitle: string (optional)
}
```

**Styling**:
- Centered text alignment
- Large, bold title (2.5rem - 3rem)
- Gradient or accent color for visual interest
- Padding: 3rem top, 2rem bottom

### 3. AppCard Component

**Purpose**: Display all information for a single app

**Props**:
```javascript
{
  app: {
    id: string,
    name: string,
    tagline: string (optional),
    features: string[],
    images: string[] (0-3 items)
  }
}
```

**Structure**:
```
┌─────────────────────────────┐
│  [Image Gallery]            │
│                             │
├─────────────────────────────┤
│  App Name                   │
│  Tagline (if present)       │
├─────────────────────────────┤
│  • Feature 1                │
│  • Feature 2                │
│  • Feature 3                │
│  ...                        │
└─────────────────────────────┘
```

**Styling**:
- Card background: White or light gray
- Border-radius: 12-16px
- Box-shadow: Subtle elevation (0 2px 8px rgba(0,0,0,0.1))
- Padding: 1.5rem
- Hover effect: Lift with increased shadow
- Transition: transform 0.3s, box-shadow 0.3s

### 4. ImageGallery Component

**Purpose**: Display up to 3 app images with placeholders

**Props**:
```javascript
{
  images: string[], // Array of image URLs (0-3)
  appName: string   // For alt text
}
```

**Layout Strategy**:
- 1 image: Single large image (100% width)
- 2 images: Side-by-side grid (50% each)
- 3 images: Primary image on left (60%), two stacked on right (40%)

**Image Handling**:
- Aspect ratio: 16:9 or 9:16 (detect and adapt)
- Object-fit: cover to maintain aspect ratio
- Placeholder: Gradient background with app icon or generic image icon
- Border-radius: 8px
- Gap between images: 0.5rem

**Placeholder Design**:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
display: flex;
align-items: center;
justify-content: center;
color: white;
font-size: 3rem;
```

### 5. FeatureList Component

**Purpose**: Display app features in a clean, scannable format

**Props**:
```javascript
{
  features: string[]
}
```

**Styling**:
- Custom bullet points (checkmarks or app-themed icons)
- Line-height: 1.8 for readability
- Font-size: 0.95rem
- Color: Slightly muted (not pure black)
- Spacing between items: 0.5rem

## Data Models

### App Data Structure

```javascript
// src/data/apps.js
export const apps = [
  {
    id: 'qr-scan-pro',
    name: 'QR Scan Pro',
    tagline: 'Professional QR Code Scanner',
    features: [
      'Ad free scan',
      'High tech embedded Machine Language',
      'Image supported scan',
      'Super fast loading & storing',
      'Interactive & user friendly dashboard',
      'Advanced search on database',
      'Categorized search with favourites',
      'Share the code to anyone',
      'Have your own QR code',
      'Scan your image to save data',
      'Customized QR generator',
      'Easy to convert Image to text'
    ],
    images: [
      '/images/qr-scan-1.png',
      '/images/qr-scan-2.png',
      '/images/qr-scan-3.png'
    ]
  },
  {
    id: 'lucky-coin-flip',
    name: 'Lucky Coin Flip',
    tagline: 'Experience the most elegant coin flip ever',
    features: [
      'First release of Lucky Flipper 🎉',
      'Realistic animation',
      'Sleek design',
      'Smooth performance',
      'Simple, ad-free design',
      'Realistic flip physics',
      'Works offline',
      'Flip your luck anytime, anywhere!'
    ],
    images: [
      '/images/coin-flip-1.png',
      '/images/coin-flip-2.png',
      '/images/coin-flip-3.png'
    ]
  }
];
```

## Design System

### Color Palette

**Primary Colors**:
- Primary: #667eea (Purple-blue)
- Secondary: #764ba2 (Deep purple)
- Accent: #f093fb (Pink)

**Neutral Colors**:
- Background: #f8f9fa
- Card Background: #ffffff
- Text Primary: #2d3748
- Text Secondary: #718096
- Border: #e2e8f0

### Typography

**Font Family**: 
- Primary: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif

**Font Sizes**:
- Hero/Title: 3rem (48px)
- App Name: 1.75rem (28px)
- Tagline: 1.125rem (18px)
- Body/Features: 1rem (16px)
- Small: 0.875rem (14px)

**Font Weights**:
- Bold: 700 (headings)
- Semi-bold: 600 (app names)
- Regular: 400 (body text)

### Spacing Scale

Using 8px base unit:
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)

### Animations

**Card Entrance**:
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Stagger Delay**: Each card delayed by 100ms (0s, 0.1s, 0.2s, etc.)

**Hover Effects**:
- Card lift: translateY(-8px)
- Shadow increase: 0 8px 24px rgba(0,0,0,0.15)
- Transition duration: 0.3s ease

**Reduced Motion**:
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## Responsive Breakpoints

```css
/* Mobile First Approach */

/* Small devices (phones) */
@media (min-width: 640px) { }

/* Medium devices (tablets) */
@media (min-width: 768px) {
  /* 2 column grid */
}

/* Large devices (desktops) */
@media (min-width: 1024px) {
  /* 2-3 column grid */
}

/* Extra large devices */
@media (min-width: 1280px) {
  /* 3 column grid */
}
```

## Error Handling

### Missing Images

**Strategy**: Use placeholder with gradient background

**Implementation**:
- Check if image URL exists in images array
- If missing or fails to load, render placeholder div
- Placeholder includes generic icon (camera or image symbol)

### Empty Features Array

**Strategy**: Display message or hide section

**Implementation**:
- Check if features array has length > 0
- If empty, don't render FeatureList component
- Maintain card layout integrity

### No Apps Data

**Strategy**: Display friendly message

**Implementation**:
```javascript
if (!apps || apps.length === 0) {
  return <div className="empty-state">No apps to showcase yet.</div>
}
```

## Testing Strategy

### Component Testing

**AppCard Component**:
- Renders app name correctly
- Displays all features from array
- Handles missing images gracefully
- Applies correct styling classes

**ImageGallery Component**:
- Renders correct number of images
- Shows placeholders when images array is empty
- Applies correct layout based on image count
- Handles image load errors

**FeatureList Component**:
- Renders all features from array
- Applies correct list styling
- Handles empty array

### Responsive Testing

**Manual Testing**:
- Test on Chrome DevTools device emulator
- Verify breakpoints: 375px, 768px, 1024px, 1440px
- Check touch targets on mobile (minimum 44x44px)

### Accessibility Testing

**Requirements**:
- All images have alt text
- Color contrast ratio meets WCAG AA (4.5:1 for text)
- Keyboard navigation works for any interactive elements
- Semantic HTML (proper heading hierarchy)
- Respects prefers-reduced-motion

### Performance Testing

**Metrics**:
- Initial load time < 3 seconds
- First Contentful Paint < 1.5 seconds
- Lighthouse score > 90

**Optimization**:
- Lazy load images below the fold
- Optimize image sizes (WebP format, appropriate dimensions)
- Minimize CSS bundle size

## Future Enhancements

**Phase 2 Considerations** (not in current scope):
- Filter/search functionality for apps
- Category tags for apps
- Modal view for expanded app details
- Dark mode toggle
- Animation on scroll (AOS library)
- App download links/buttons
- Analytics integration
