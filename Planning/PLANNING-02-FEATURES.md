# ✨ PLANNING-02-FEATURES
## React.js Portfolio - Core Features & Components

**Tanggal Buat:** 2026-06-22  
**Status:** 📋 Planning Phase  
**Target Selesai:** 2026-06-28

---

## 📌 OVERVIEW

Phase ini fokus pada implementasi core features dan components yang akan membuat portfolio terlihat profesional dan menarik.

**Key Features:**
- Dynamic data management system
- Responsive sections
- Theme switching
- Smooth animations
- Admin-ready data structure

---

## 🎯 OBJECTIVES

- [ ] Implement Hero section with animations
- [ ] Create reusable card components
- [ ] Build all main sections (About, Companies, Products, etc)
- [ ] Setup dynamic data system
- [ ] Implement theme toggle with persistence
- [ ] Add smooth scroll behaviors
- [ ] Create search/filter functionality
- [ ] Setup contact form

---

## 🏗️ CORE COMPONENTS

### 1. Common Components

#### Header Component
```jsx
// src/components/common/Header.jsx
- Logo/Brand name
- Current role/title
- Links to social media
- Version/Last updated info
```

#### Navigation Component
```jsx
// src/components/common/Navigation.jsx
- Sticky navbar
- Responsive hamburger menu
- Active section indicator
- Smooth scroll to sections
- Mobile-optimized
```

#### Footer Component
```jsx
// src/components/common/Footer.jsx
- Contact links
- Social media icons
- Copyright info
- Quick links
- Newsletter signup (optional)
```

#### ThemeToggle Component
```jsx
// src/components/common/ThemeToggle.jsx
- Dark/Light mode toggle
- Icon changes based on theme
- Smooth transition
- localStorage persistence
- System preference detection
```

---

### 2. Section Components

#### Hero Section
```jsx
// src/components/sections/Hero.jsx
Props: {
  title: "Nik Mohd Shafik Izwan",
  subtitle: "Technology Leader & AI Innovator",
  cta: "View My Work",
  backgroundImage: "url"
}

Features:
- Animated title
- Background animation/gradient
- CTA buttons
- Scroll down indicator
- Responsive text sizing
```

#### About Section
```jsx
// src/components/sections/About.jsx
Props: {
  bio: "string",
  highlights: [],
  certifications: [],
  years_experience: number
}

Features:
- Profile image
- Bio text with formatting
- Key highlights
- Certifications/Badges
- Stats display
```

#### Companies Section
```jsx
// src/components/sections/Companies.jsx
Props: {
  companies: [{
    id: number,
    name: string,
    role: string,
    description: string,
    logo: url,
    achievements: [],
    website: url
  }]
}

Features:
- Company cards with logos
- Company details modal
- Growth metrics
- Links to company sites
- Filter by type (CEO, Founder, etc)
```

#### Products Section
```jsx
// src/components/sections/Products.jsx
Props: {
  products: [{
    id: number,
    name: string,
    description: string,
    image: url,
    status: "Active|Beta|Planned",
    category: string,
    technologies: [],
    link: url,
    metrics: {}
  }]
}

Features:
- Product cards with images
- Category filtering
- Status badges
- View/Demo buttons
- User reviews (future)
```

#### Clients Section
```jsx
// src/components/sections/Clients.jsx
Props: {
  clients: [{
    id: number,
    name: string,
    logo: url,
    industry: string,
    project: string,
    testimonial: string,
    rating: number
  }]
}

Features:
- Client logos grid
- Testimonials carousel
- Industry categories
- Rating display
- Success metrics
```

#### Skills Section
```jsx
// src/components/sections/Skills.jsx
Props: {
  skills: [{
    id: number,
    category: string,
    items: [{
      name: string,
      level: "Beginner|Intermediate|Advanced|Expert",
      years: number,
      projects: number
    }]
  }]
}

Features:
- Skills categorized
- Proficiency levels
- Years of experience
- Related projects count
- Skill search
- Visual progress bars
```

#### Experience Section
```jsx
// src/components/sections/Experience.jsx
Props: {
  experiences: [{
    id: number,
    company: string,
    position: string,
    duration: "YYYY-MM to YYYY-MM",
    description: string,
    achievements: [],
    technologies: [],
    type: "Full-time|Contract|Part-time"
  }]
}

Features:
- Timeline view
- Details accordion
- Achievements list
- Tech stack display
- Date range display
- Company links
```

#### Contact Section
```jsx
// src/components/sections/Contact.jsx
Features:
- Contact form
- Form validation
- Success/Error messages
- Social media links
- Email/Phone display
- Newsletter signup (optional)
- Maps integration (optional)
```

#### Testimonials Section (NEW)
```jsx
// src/components/sections/Testimonials.jsx
Props: {
  testimonials: [{
    id: number,
    author: string,
    position: string,
    company: string,
    image: url,
    text: string,
    rating: number,
    date: string
  }]
}

Features:
- Carousel/Slider
- Star ratings
- Author info
- Rotating display
- Navigation controls
- Mobile optimized
```

---

### 3. Card Components

#### ProductCard
```jsx
// src/components/cards/ProductCard.jsx
Props: {
  product: {
    id, name, image, description,
    category, status, link, metrics
  },
  onClick: function,
  showMetrics: boolean
}
```

#### CompanyCard
```jsx
// src/components/cards/CompanyCard.jsx
Props: {
  company: {
    id, name, logo, role, description,
    achievements, website
  },
  variant: "full|compact"
}
```

#### ClientCard
```jsx
// src/components/cards/ClientCard.jsx
Props: {
  client: {
    id, name, logo, testimonial, rating
  }
}
```

#### SkillCard
```jsx
// src/components/cards/SkillCard.jsx
Props: {
  skill: {
    name, level, years, projects
  },
  showMetrics: boolean
}
```

#### ExperienceCard
```jsx
// src/components/cards/ExperienceCard.jsx
Props: {
  experience: {
    id, company, position, duration,
    description, achievements, technologies
  },
  expanded: boolean,
  onToggle: function
}
```

---

## 💾 DATA STRUCTURE

### companies.js
```javascript
export const companiesData = [
  {
    id: 1,
    name: "Company Name",
    role: "CEO/Founder/CTO",
    founded: "2020",
    description: "Company description",
    logo: "url",
    website: "url",
    achievements: [
      { title: string, value: string }
    ],
    team_size: number,
    status: "Active|Exit|Planned"
  }
];
```

### products.js
```javascript
export const productsData = [
  {
    id: 1,
    name: "Product Name",
    description: "Short description",
    long_description: "Detailed description",
    image: "url",
    category: "string",
    status: "Active|Beta|Planned",
    link: "url",
    github: "url",
    technologies: ["React", "Node.js"],
    metrics: {
      users: number,
      revenue: string,
      rating: number
    },
    highlights: []
  }
];
```

### clients.js
```javascript
export const clientsData = [
  {
    id: 1,
    name: "Client Name",
    logo: "url",
    industry: "string",
    project: "Project Name",
    testimonial: "Client feedback",
    author: "Client Name",
    position: "Position",
    rating: 5,
    results: {
      metric1: value,
      metric2: value
    }
  }
];
```

### skills.js
```javascript
export const skillsData = [
  {
    category: "Frontend",
    items: [
      {
        name: "React",
        level: "Expert",
        years: 5,
        projects: 15,
        endorsements: 50
      }
    ]
  }
];
```

### experience.js
```javascript
export const experienceData = [
  {
    id: 1,
    company: "Company Name",
    position: "Position",
    type: "Full-time",
    start_date: "2020-01",
    end_date: "2023-06",
    duration: "3 years 5 months",
    description: "Detailed description",
    achievements: [
      "Achievement 1",
      "Achievement 2"
    ],
    technologies: ["React", "Node.js"]
  }
];
```

### testimonials.js
```javascript
export const testimonialsData = [
  {
    id: 1,
    author: "Name",
    position: "Position",
    company: "Company",
    image: "url",
    text: "Testimonial text",
    rating: 5,
    date: "2024-06-22",
    url: "linkedin/reference"
  }
];
```

---

## 🔧 CUSTOM HOOKS

### useTheme
```javascript
// src/hooks/useTheme.js
const { theme, toggleTheme } = useTheme();
- Manages dark/light theme
- Persists to localStorage
- Applies to document
```

### useData
```javascript
// src/hooks/useData.js
const { companies, products, skills } = useData();
- Fetches all data
- Caches results
- Handles loading states
```

### useScroll
```javascript
// src/hooks/useScroll.js
const { scrollY, isScrolling } = useScroll();
- Tracks scroll position
- Useful for animations
```

### useMediaQuery
```javascript
// src/hooks/useMediaQuery.js
const isMobile = useMediaQuery('(max-width: 768px)');
- Responsive queries
- Reusable
```

---

## 🎨 ANIMATIONS & INTERACTIONS

### Scroll Animations
```css
- Fade in on scroll
- Slide in animations
- Number counting animations
- Progress bar animations
```

### Hover Effects
```css
- Card elevation on hover
- Button state changes
- Icon animations
- Color transitions
```

### Page Transitions
```css
- Smooth section scrolling
- Page fade transitions
- Modal animations
- Loading states
```

---

## 📊 WEB FEATURES CHECKLIST

### Phase 1: Basic Sections ✅
- [ ] Hero section with animations
  - Status: DONE / IN PROGRESS / PLANNED
  - Date: 2026-06-23
- [ ] Navigation with smooth scroll
  - Status: DONE / IN PROGRESS / PLANNED
  - Date: 2026-06-23
- [ ] About section
  - Status: DONE / IN PROGRESS / PLANNED
  - Date: 2026-06-24
- [ ] Companies section with cards
  - Status: DONE / IN PROGRESS / PLANNED
  - Date: 2026-06-24
- [ ] Products section with filtering
  - Status: DONE / IN PROGRESS / PLANNED
  - Date: 2026-06-24

### Phase 2: Content Sections 🔄
- [ ] Clients section with testimonials
  - Target: 2026-06-25
- [ ] Skills section with levels
  - Target: 2026-06-25
- [ ] Experience section with timeline
  - Target: 2026-06-26
- [ ] Testimonials carousel
  - Target: 2026-06-26
- [ ] Contact form implementation
  - Target: 2026-06-27

### Phase 3: Features 📅
- [ ] Search functionality
  - Target: 2026-06-27
- [ ] Filter systems
  - Target: 2026-06-27
- [ ] Dark/Light theme toggle
  - Target: 2026-06-28
- [ ] Responsive design tweaks
  - Target: 2026-06-28
- [ ] Performance optimizations
  - Target: 2026-06-28

---

## 🧪 TESTING REQUIREMENTS

### Component Testing
- [ ] All components render without errors
- [ ] Props validation
- [ ] Responsive breakpoints
- [ ] Dark/Light mode compatibility
- [ ] Accessibility compliance

### User Testing
- [ ] Mobile usability
- [ ] Touch interactions
- [ ] Form submissions
- [ ] Navigation flow
- [ ] Performance on slow networks

---

## 📈 PERFORMANCE TARGETS

- Lighthouse Score: > 80
- First Contentful Paint: < 2s
- Time to Interactive: < 3s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## 📝 NOTES

1. **Data Management Strategy**
   - Keep data in separate JS files
   - Easy to update without code changes
   - Future: Database integration
   - Admin interface for updates

2. **Component Reusability**
   - All cards should accept data as props
   - No hardcoded content
   - Flexible styling with CSS modules/classes
   - Support multiple variants

3. **Responsive Design**
   - Mobile-first approach
   - Test on real devices
   - Touch-friendly interactions
   - Optimized images

4. **Accessibility**
   - ARIA labels on interactive elements
   - Keyboard navigation
   - Color contrast compliance
   - Form labels and validation

---

**Status:** 📋 Planning  
**Last Updated:** 2026-06-22  
**Next Phase:** PLANNING-03-CEO-PORTFOLIO
