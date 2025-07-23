# Dr. Nyaho Nyaho-Tamakloe Landing Page

A modern, immersive landing page showcasing the life and achievements of Dr. Nyaho Nyaho-Tamakloe, a distinguished Ghanaian statesman, medical doctor, football administrator, and founding member of the New Patriotic Party.

## 🌟 Features

- **Immersive Hero Section**: Animated introduction with gradient backgrounds and floating elements
- **Interactive Timeline**: Scroll-based timeline telling Dr. Nyaho's life story from 1942 to present
- **Book Showcase**: Dedicated section for his autobiography "Never Say Die!: The Autobiography of a Ghanaian Statesman"
- **Social Media Integration**: Links to various social platforms and contact information
- **Contact Form**: Interactive form for inquiries and messages
- **Responsive Design**: Fully responsive across all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Modern UI**: Clean, professional design with Tailwind CSS

## 🚀 Technologies Used

- **React 18** with TypeScript
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **React Intersection Observer** for scroll animations

## 📱 Sections

1. **Hero Section**: Introduction with animated elements
2. **Timeline**: Interactive life story with categorized events
3. **Book Section**: Autobiography showcase with testimonials
4. **Social Media**: Platform links and contact form
5. **Footer**: Additional links and information

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd nyaho-landing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Hero.tsx              # Hero section with animations
│   ├── Timeline.tsx          # Life story timeline
│   ├── BookSection.tsx       # Autobiography showcase
│   ├── SocialMedia.tsx       # Social links and contact form
│   ├── Navigation.tsx        # Navigation bar
│   └── Footer.tsx            # Footer with links
├── App.tsx                   # Main app component
├── App.css                   # Custom styles
└── index.css                 # Tailwind CSS and global styles
```

## 🎨 Customization

### Colors
The project uses a modern color palette with:
- Primary: Blue gradients (#667eea to #764ba2)
- Secondary: Purple accents
- Background: Gray tones
- Text: Dark grays for readability

### Content Updates
To update content:
1. **Timeline**: Modify `timelineData` array in `Timeline.tsx`
2. **Social Links**: Update `socialLinks` array in `SocialMedia.tsx`
3. **Book Details**: Edit content in `BookSection.tsx`
4. **Contact Info**: Update contact details in multiple components

### Styling
- Uses Tailwind CSS utility classes
- Custom CSS in `index.css` for specific components
- Responsive breakpoints: mobile-first approach

## 📊 Performance

- Optimized images with lazy loading
- Smooth scroll animations
- Efficient React components with proper memoization
- Minimal bundle size with tree shaking

## 🔧 Development

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App

### Code Style

- TypeScript for type safety
- Functional components with hooks
- Consistent naming conventions
- Proper component organization

## 🌍 Deployment

The app can be deployed to various platforms:

1. **Netlify**: Drag and drop the `build` folder
2. **Vercel**: Connect GitHub repository
3. **GitHub Pages**: Use `gh-pages` package
4. **AWS S3**: Upload build files to S3 bucket

## 📞 Contact

For questions or support regarding this landing page:

- **Email**: contact@nyahotamakloe.com
- **Location**: Accra, Ghana

## 📄 License

This project is created for Dr. Nyaho Nyaho-Tamakloe. All rights reserved.

---

**Made with ❤️ in Ghana**
