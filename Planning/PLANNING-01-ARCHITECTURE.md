# 🏗️ PLANNING-01-ARCHITECTURE
## React.js Portfolio - Struktur & Arsitektur Project

**Tanggal Buat:** 2026-06-22  
**Status:** 📋 Planning Phase  
**Target Selesai:** 2026-06-25

---

## 📌 OVERVIEW

Phase ini fokus pada:
1. Setup project React.js
2. Struktur folder yang clean
3. Konfigurasi build tools
4. Setup styling system
5. Version control setup

---

## 🎯 OBJECTIVES

- [ ] Initialize React project dengan Vite (faster than CRA)
- [ ] Setup folder structure yang scalable
- [ ] Configure ESLint & Prettier
- [ ] Setup CSS/SASS system
- [ ] Configure .env files
- [ ] Setup Git workflow
- [ ] Create base components
- [ ] Setup deployment configuration

---

## 📁 FOLDER STRUCTURE DETAIL

```
nik-shafik-portfolio/
├── public/
│   ├── favicon.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── common/              # Reusable UI Components
│   │   │   ├── Header.jsx
│   │   │   ├── Navigation.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ThemeToggle.jsx
│   │   │   └── Loader.jsx
│   │   ├── sections/            # Page sections
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Companies.jsx
│   │   │   ├── Products.jsx
│   │   │   ├── Clients.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Testimonials.jsx
│   │   ├── cards/               # Reusable card components
│   │   │   ├── ProductCard.jsx
│   │   │   ├── CompanyCard.jsx
│   │   │   ├── ClientCard.jsx
│   │   │   ├── SkillCard.jsx
│   │   │   └── ExperienceCard.jsx
│   │   └── admin/               # Admin components
│   │       ├── DataManager.jsx
│   │       └── Dashboard.jsx
│   ├── pages/                   # Page components
│   │   ├── Home.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Admin.jsx
│   │   └── NotFound.jsx
│   ├── data/                    # Data files (JSON equivalent)
│   │   ├── companies.js
│   │   ├── products.js
│   │   ├── clients.js
│   │   ├── skills.js
│   │   ├── experience.js
│   │   └── testimonials.js
│   ├── hooks/                   # Custom hooks
│   │   ├── useTheme.js
│   │   ├── useData.js
│   │   ├── useScroll.js
│   │   └── useMediaQuery.js
│   ├── context/                 # Context API files
│   │   └── ThemeContext.jsx
│   ├── utils/                   # Utility functions
│   │   ├── constants.js
│   │   ├── formatters.js
│   │   └── helpers.js
│   ├── styles/                  # Global styles
│   │   ├── global.css
│   │   ├── variables.css
│   │   ├── animations.css
│   │   └── responsive.css
│   ├── assets/                  # Images, icons
│   │   ├── images/
│   │   ├── icons/
│   │   └── logos/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .github/
│   └── workflows/               # CI/CD (future)
├── .env.example                 # Environment variables template
├── .env                         # Local environment (gitignore)
├── .env.production              # Production environment
├── .eslintrc.json              # ESLint config
├── .prettierrc                  # Prettier config
├── vite.config.js              # Vite configuration
├── package.json
├── package-lock.json
├── index.html
└── README.md
```

---

## ⚙️ TECHNOLOGY STACK

### Frontend Framework
- **React 18+** - Latest React with Hooks
- **Vite** - Lightning fast build tool
- **React Router v6** - Client-side routing

### Styling
- **CSS3** - Modern CSS with variables
- **Bootstrap 5.3** - UI framework (optional, for quick components)
- **CSS Animations** - Smooth transitions

### State Management
- **React Context API** - Theme, user preferences
- **Custom Hooks** - Data fetching & logic
- **localStorage** - Persist user preferences

### Dev Tools
- **ESLint** - Code quality
- **Prettier** - Code formatting
- **Vite** - Build & dev server

### Future Integration
- Firebase/MongoDB - Database
- Vercel/Netlify - Deployment
- Stripe - Payment processing

---

## 🎨 DESIGN SYSTEM

### Color Palette
```css
:root {
  /* Primary Colors */
  --primary: #0066ff;
  --primary-dark: #0052cc;
  --primary-light: #3385ff;
  
  /* Secondary */
  --secondary: #6c757d;
  --success: #28a745;
  --warning: #ffc107;
  --danger: #dc3545;
  --info: #17a2b8;
  
  /* Neutral */
  --white: #ffffff;
  --light: #f8f9fa;
  --gray: #e9ecef;
  --dark: #212529;
  --black: #000000;
  
  /* Gradients */
  --gradient-primary: linear-gradient(135deg, #0066ff, #3385ff);
  --gradient-dark: linear-gradient(135deg, #1a1a1a, #333333);
}
```

### Typography
```css
/* Fonts */
--font-primary: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
--font-mono: 'Courier New', Courier, monospace;

/* Sizes */
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-base: 1rem;
--text-lg: 1.125rem;
--text-xl: 1.25rem;
--text-2xl: 1.5rem;
--text-3xl: 1.875rem;
--text-4xl: 2.25rem;
```

### Spacing Scale
```css
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
--spacing-3xl: 4rem;
```

---

## 🔧 CONFIGURATION FILES

### package.json
```json
{
  "name": "nik-shafik-portfolio",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "format": "prettier --write src"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.14.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.0.0",
    "vite": "^4.4.0",
    "eslint": "^8.45.0",
    "prettier": "^3.0.0"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
```

---

## 📊 WEB FEATURES CHECKLIST

### Setup Phase ✅
- [ ] React project initialized with Vite
- [ ] Folder structure created
- [ ] ESLint configured
- [ ] Prettier configured
- [ ] CSS variables setup
- [ ] Base components created
- [ ] Git repository initialized
- [ ] README updated with instructions
- [ ] Environment files configured
- [ ] Build tools tested

### Components Foundation 🔄
- [ ] Header component
- [ ] Navigation component
- [ ] Footer component
- [ ] ThemeToggle component
- [ ] Card components (Product, Company, etc)
- [ ] Common UI components
- [ ] Layout wrapper

### Styling System 📅
- [ ] Global CSS variables
- [ ] Responsive breakpoints
- [ ] Animation library
- [ ] Dark/Light theme styles
- [ ] Mobile-first styles
- [ ] Accessibility styles

---

## 📋 TASKS

### Week 1: Setup & Infrastructure
- [ ] Init React project (Vite)
  - Target: 2026-06-22
  - Assigned to: Main Developer
- [ ] Create folder structure
  - Target: 2026-06-22
  - Assigned to: Main Developer
- [ ] Configure build tools
  - Target: 2026-06-23
  - Assigned to: Main Developer
- [ ] Setup styling system
  - Target: 2026-06-23
  - Assigned to: Main Developer
- [ ] Create base layout components
  - Target: 2026-06-24
  - Assigned to: Main Developer
- [ ] Setup routing structure
  - Target: 2026-06-24
  - Assigned to: Main Developer
- [ ] Test build & deploy process
  - Target: 2026-06-25
  - Assigned to: Main Developer

---

## 🔗 DEPENDENCIES

### Direct Dependencies
- React 18.2.0+
- React DOM 18.2.0+
- React Router DOM 6.14.0+

### Dev Dependencies
- Vite 4.4.0+
- Vitejs/Plugin-React 4.0.0+
- ESLint 8.45.0+
- Prettier 3.0.0+

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🚀 DEPLOYMENT CONSIDERATIONS

### Hosting Options
1. **Vercel** - Recommended (free tier, auto-deploy)
2. **Netlify** - Alternative (good free tier)
3. **GitHub Pages** - Simple static hosting
4. **AWS/Azure** - Enterprise option

### Build Optimization
- Minification enabled
- Code splitting for routes
- Image optimization
- Lazy loading components
- Tree shaking for unused code

### Environment Management
```
.env.development     -> Local development
.env.production      -> Production build
.env.example         -> Template
```

---

## ✅ ACCEPTANCE CRITERIA

- [x] All folder structure created
- [x] Vite configured and running
- [x] Build process works
- [x] Base components created
- [x] Styling system in place
- [x] Dev environment ready
- [x] Documentation updated
- [x] All configs in place

---

## 📝 NOTES & CONSIDERATIONS

1. **Vite vs Create React App**
   - Vite is 10x faster
   - Better HMR (Hot Module Replacement)
   - Native ESM support
   - Smaller bundle size

2. **Component Strategy**
   - Use functional components with hooks
   - Keep components small and focused
   - Props drilling handled by Context API
   - Custom hooks for logic extraction

3. **Data Management**
   - Start with JSON files
   - Migrate to database when needed
   - Admin interface for future updates
   - Version control for data changes

4. **Performance**
   - Lazy load components
   - Code split by routes
   - Image optimization
   - Caching strategy

5. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Color contrast
   - Semantic HTML

---

**Status:** 📋 Planning  
**Last Updated:** 2026-06-22  
**Next Phase:** PLANNING-02-FEATURES
