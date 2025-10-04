<!--
 * README Documentation - Project setup, features, and deployment guide
 * Comprehensive documentation for Sarah's portfolio website project
 -->

# Sarah - Personal Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full Stack Software Developer. Built with React, Tailwind CSS, and optimized for performance and SEO.

## 🚀 Features

- **Modern Design:** Clean, professional interface with a focus on user experience
- **Responsive:** Fully responsive design that works on all devices
- **SEO Optimized:** Meta tags, structured data, and semantic HTML for better search visibility
- **Performance Focused:** Optimized for fast loading and smooth animations
- **Accessibility:** WCAG compliant with proper focus states and semantic markup
- **PWA Ready:** Progressive Web App capabilities with manifest and service worker support

## 🛠️ Tech Stack

- **Frontend:** React 18, JavaScript ES6+
- **Styling:** Tailwind CSS, Custom CSS
- **UI Components:** Lucide React Icons
- **Animations:** Custom CSS animations with Intersection Observer
- **Form Handling:** EmailJS integration
- **Carousel:** Swiper.js
- **Development:** Create React App, PostCSS, Autoprefixer

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About.jsx       # About section
│   ├── Contact.jsx     # Contact section with form
│   ├── Footer.jsx      # Site footer
│   ├── Form.jsx        # Contact form component
│   ├── Home.jsx        # Hero/landing section
│   ├── Navbar.jsx      # Navigation component
│   ├── ProjectCard.jsx # Individual project card
│   ├── Projects.jsx    # Projects showcase
│   └── Skills.jsx      # Skills and technologies
├── data/               # Static data and assets
│   ├── projects.js     # Project data
│   └── [images]        # Project images and CV
├── assets/             # Static assets (icons, images)
├── App.js              # Main application component
├── index.js            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚦 Getting Started

### Prerequisites

- **Node.js (version 16.x recommended)** - Version 18+ may have compatibility issues with react-scripts
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/geoffreykithuku/personal-website.git
   cd personal-website
   ```

2. **Install dependencies:**

   ```bash
   npm install --legacy-peer-deps
   ```

3. **Set up environment variables:**
   Copy `.env.example` to `.env` and fill in your EmailJS credentials:

   ```bash
   cp .env.example .env
   ```

   Then edit `.env` with your values:

   ```env
   REACT_APP_SERVICE_ID=your_emailjs_service_id
   REACT_APP_TEMPLATE_ID=your_emailjs_template_id
   REACT_APP_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Start the development server:**

   ```bash
   npm start
   ```

   The application will open at [http://localhost:3000](http://localhost:3000)

### Troubleshooting

If you encounter issues with Node.js v18+, try these solutions:

**Option 1: Use Node.js v16**

```bash
# Using nvm (recommended)
nvm install 16
nvm use 16
npm install --legacy-peer-deps
npm start
```

**Option 2: Use legacy OpenSSL provider**

```bash
npm run start:legacy
```

**Option 3: Set Node options manually**

```bash
export NODE_OPTIONS="--openssl-legacy-provider"
npm start
```

## 📦 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## 🌐 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deployment Options

- **Netlify:** Connect your GitHub repository for automatic deployments
- **Vercel:** Import project and deploy with zero configuration
- **GitHub Pages:** Use `gh-pages` package for GitHub Pages deployment
- **Traditional Hosting:** Upload the `build` folder contents to your web server

### Environment Setup for Production

Make sure to set the following environment variables in your hosting platform:

- `REACT_APP_SERVICE_ID`
- `REACT_APP_TEMPLATE_ID`
- `REACT_APP_PUBLIC_KEY`

## 🎨 Customization

### Colors and Styling

The website uses a custom Tailwind CSS configuration with a professional color palette:

- **Primary:** Blue tones (#0ea5e9)
- **Secondary:** Gray tones (#64748b)
- **Accent:** Purple tones (#d946ef)
- **Success:** Green tones (#22c55e)

Modify `tailwind.config.js` to customize the color scheme.

### Content Updates

1. **Personal Information:** Update details in component files
2. **Projects:** Modify `src/data/projects.js`
3. **Skills:** Update the skills array in `src/components/Skills.jsx`
4. **Resume:** Replace the CV file in `src/data/` and update links

## 📊 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- Structured data (JSON-LD)
- Semantic HTML markup
- Optimized images with alt text
- Sitemap.xml
- Robots.txt

## 🔧 Performance Optimizations

- Lazy loading of images
- Code splitting and dynamic imports
- Optimized animations and transitions
- Compressed assets
- PWA capabilities
- Accessibility features

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**Sarah**

- Email: sarahndungu815@gmail.com
- LinkedIn: [linkedin.com/in/geoffreykithuku](https://linkedin.com/in/geoffreykithuku)
- GitHub: [github.com/geoffreykithuku](https://github.com/geoffreykithuku)
- Portfolio: [geoffreykithuku.dev](https://geoffreykithuku.dev)

---

⭐ **Star this repository if you found it helpful!**
