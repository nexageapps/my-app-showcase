# NexageApps Showcase Website

A modern, responsive React website showcasing NexageApps' mobile applications portfolio. Built with React 19 and featuring smooth animations, intuitive navigation, and a clean, professional design.

## 🚀 Featured Apps

### QR Scan Pro
Your pocket-sized QR code powerhouse with lightning-fast scanning, AI recognition, and custom QR code creation. Completely ad-free and works offline.

### Lucky Coin Flip
Let fate decide in style with stunning 3D animations and realistic physics. Perfect for making decisions with zero ads and buttery smooth performance.

## ✨ Features

- **Responsive Design** - Looks great on all devices from mobile to desktop
- **Smooth Animations** - Engaging user experience with CSS animations
- **Modern UI/UX** - Clean, intuitive interface with accessibility in mind
- **Fast Performance** - Optimized React components for quick load times
- **SEO Friendly** - Semantic HTML and proper meta tags
- **Sticky Navigation** - Quick access to all sections while scrolling
- **Interactive Components** - App cards, image galleries, and feature lists
- **Legal Pages** - Privacy Policy, Terms of Service, Cookie Policy, FAQ, and Help Center

## 🛠️ Tech Stack

- **React 19.2.0** - Latest React with improved performance
- **React Router DOM 7.9.5** - Client-side routing for multi-page experience
- **CSS Modules** - Scoped styling for components
- **React Testing Library** - Comprehensive testing setup
- **Create React App** - Zero-config build setup

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd my-app-showcase

# Install dependencies
npm install
```

## 🚀 Getting Started

```bash
# Start development server
npm start
```

Opens the app at [http://localhost:3000](http://localhost:3000) with hot reload enabled.

```bash
# Run tests
npm test
```

Launches the test runner in interactive watch mode.

```bash
# Build for production
npm run build
```

Creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
my-app-showcase/
├── public/
│   ├── images/           # App screenshots and icons
│   ├── index.html        # HTML template
│   └── manifest.json     # PWA manifest
├── src/
│   ├── components/       # Reusable React components
│   │   ├── AppCard/      # Individual app showcase card
│   │   ├── FeatureList/  # Feature list component
│   │   ├── Header/       # Site header
│   │   └── ImageGallery/ # Image carousel
│   ├── data/
│   │   └── apps.js       # App data configuration
│   ├── pages/            # Route pages
│   │   ├── FAQ.js
│   │   ├── HelpCenter.js
│   │   ├── LearnAI.js
│   │   ├── PrivacyPolicy.js
│   │   ├── TermsOfService.js
│   │   └── CookiePolicy.js
│   ├── App.js            # Main app component
│   ├── App.css           # Global styles
│   └── index.js          # App entry point
└── package.json          # Dependencies and scripts
```

## 🎨 Components

### AppCard
Displays detailed information about each app including features, screenshots, and download links.

### FeatureList
Renders a formatted list of app features with icons and descriptions.

### Header
Site header with branding and navigation.

### ImageGallery
Interactive image carousel for app screenshots with navigation controls.

## 📝 Adding New Apps

Edit `src/data/apps.js` to add or modify apps:

```javascript
{
  id: 'app-id',
  name: 'App Name',
  icon: '/images/app-icon.svg',
  tagline: 'Catchy tagline',
  description: 'Detailed description',
  features: [
    '✨ Feature 1',
    '🚀 Feature 2'
  ],
  images: [
    '/images/screenshot-1.svg',
    '/images/screenshot-2.svg'
  ],
  appStoreUrl: 'https://apps.apple.com/...',
  playStoreUrl: 'https://play.google.com/...'
}
```

## 🎯 Key Sections

- **Hero** - Eye-catching introduction with value propositions
- **Apps Overview** - Quick visual grid of all apps
- **Stats** - Key metrics and achievements
- **App Details** - In-depth showcase of each app
- **About** - Company information and mission
- **Contact** - Multiple ways to get in touch
- **Footer** - Links, social media, and additional resources

## 🧪 Testing

The project includes testing setup with:
- Jest for unit testing
- React Testing Library for component testing
- User event simulation

Run tests with:
```bash
npm test
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration

### Environment Variables
Create a `.env` file for environment-specific configuration:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_ANALYTICS_ID=your_analytics_id
```

### Build Optimization
The production build includes:
- Minified JavaScript and CSS
- Optimized images
- Code splitting
- Tree shaking

## 📄 License

This project is private and proprietary to NexageApps.

## 📧 Contact

- **Email**: nexageapps@gmail.com
- **Twitter**: [@nexageapps](https://twitter.com/nexageapps)
- **GitHub**: [@nexageapps](https://github.com/nexageapps)
- **Instagram**: [@nexageapps](https://instagram.com/nexageapps)

## 🤝 Contributing

This is a private project. For bug reports or feature requests, please contact the development team at nexageapps@gmail.com.

---

Made with ❤️ by NexageApps - Next Generation Mobile Applications
