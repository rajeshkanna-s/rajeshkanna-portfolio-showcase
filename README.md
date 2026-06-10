<div align="center">

# Rajeshkanna S — Portfolio & Freelance Showcase

### Software Engineer | Full Stack Developer | AI Engineer | Freelancer

[![Live Site](https://img.shields.io/badge/Live-rajeshkanna.in-0066FF?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.rajeshkanna.in)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/rajeshkanna-s)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/rajeshkanna-s)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/918667454755)

<br/>

> *"I help founders, professionals, and small businesses create stunning online portfolios & websites that bring more clients, more trust, and more visibility."*

**8+ Years Experience** &bull; **30+ Websites Delivered** &bull; **100% Client Satisfaction**

---

</div>

## About This Project

A modern, production-grade portfolio website built from the ground up to showcase my professional journey as a software engineer, freelance web developer, and AI enthusiast. This isn't a template — every section, animation, and interaction was thoughtfully crafted to deliver a premium user experience across all devices.

The site serves dual purpose: a **professional portfolio** for job interviews and recruiter outreach, and a **freelance services platform** for client acquisition — complete with live project previews, a working contact form, and direct WhatsApp integration.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | React 18 &bull; TypeScript &bull; Vite |
| **Styling** | Tailwind CSS &bull; CSS Animations &bull; Glassmorphism |
| **UI Components** | shadcn/ui &bull; Radix UI Primitives &bull; Lucide Icons |
| **Forms & Validation** | React Hook Form &bull; Zod Schema Validation |
| **Email Integration** | EmailJS (server-less email delivery) |
| **State & Routing** | React Router DOM &bull; TanStack React Query |
| **Theming** | next-themes (Dark/Light mode) |
| **Carousel** | Embla Carousel React |
| **Build & Tooling** | Vite &bull; SWC &bull; ESLint &bull; PostCSS &bull; Autoprefixer |

---

## Key Features

### Dynamic Hero Section
- Typewriter animation cycling through 6 professional roles with natural typing speed variations
- Floating animated spheres with staggered CSS keyframes
- Direct CTA buttons — WhatsApp and Portfolio quick links
- Social media quick-access bar (LinkedIn, GitHub, Email, Phone)

### Comprehensive Services Showcase
- **9 freelance services** presented in color-coded gradient cards
- **8-step transparent process** — from initial discussion to post-delivery support
- **8 value propositions** explaining why clients choose me (fast delivery, affordable pricing, mobile-first, SEO-optimized)

### Live Freelance Portfolio
- **30+ real client projects** organized into 3 categories:
  - Business Portfolios (restaurants, law firms, clinics, gyms, real estate)
  - Professional Portfolios (designers, developers, consultants, photographers)
  - Business Tools (expense trackers, billing systems)
- Each project links to its live deployed site

### Featured Products & Tools
- **6 flagship platforms** — Zezha, HealthyPlates, ZezhaTools, ZezhaTalent, ReportsIQ, ZezhaSchool
- **4 utility tools** — ParkingMate, TAX Calculator, Invoice Generator, Resume Builder
- Embedded live preview iframes with lazy loading

### Skills & AI Proficiency
- **80+ technical skills** across 5 categories (Backend, Frontend, Databases & Cloud, Tools, Foundations)
- **20+ AI tools** — development AI (ChatGPT, Claude, GitHub Copilot, Cursor) and creative AI (Midjourney, DALL-E, Runway, ElevenLabs)
- Visual skill icons loaded from Simple Icons CDN

### Professional Credentials
- **17 certificates** displayed in an auto-rotating carousel with keyboard navigation and mouse-pause
- **2 professional experience** entries with technology breakdowns
- **5 core strengths** — Clean API Design, Production Debugging, Performance Optimization, Stakeholder Collaboration, Team Mentorship
- **Education** — BE in Computer Science & Engineering

### Working Contact System
- **EmailJS-powered contact form** with real-time Zod validation
- **WhatsApp floating button** with pulse animation and pre-filled message
- **Multiple contact channels** — WhatsApp, Email, Phone, Resume download
- Availability status indicator

### UX & Performance
- **Dark/Light theme** toggle with persistent preference
- **Fully responsive** — mobile-first design with sm/md/lg breakpoints
- **Smooth scroll navigation** with sticky header
- **Lazy-loaded images and iframes** for fast initial paint
- **Accessible** — ARIA labels, semantic HTML, keyboard support
- **SEO optimized** — OpenGraph and Twitter Card meta tags

---

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx          # Sticky header with smooth scroll nav
│   ├── Hero.tsx                # Animated hero with typewriter effect
│   ├── About.tsx               # Profile, highlights, and stats
│   ├── Services.tsx            # 9 service offerings grid
│   ├── HowIWork.tsx            # 8-step process visualization
│   ├── WhyChooseMe.tsx         # 8 value propositions
│   ├── FreelancePortfolio.tsx  # 30+ client projects showcase
│   ├── Experience.tsx          # Professional timeline
│   ├── Skills.tsx              # 80+ skills across 5 categories
│   ├── TopStrengths.tsx        # 5 core competencies
│   ├── Education.tsx           # Academic background
│   ├── Achievements.tsx        # 17-certificate carousel
│   ├── Projects.tsx            # Featured products with live previews
│   ├── Testimonials.tsx        # Client testimonials
│   ├── Contact.tsx             # EmailJS contact form + info
│   ├── WhatsAppButton.tsx      # Floating CTA with pulse animation
│   ├── Footer.tsx              # Navigation links & copyright
│   ├── ThemeProvider.tsx       # Dark/light theme context
│   └── ui/                     # 40+ shadcn/ui base components
├── pages/
│   ├── Index.tsx               # Main page (all 16 sections)
│   ├── ServicesPage.tsx        # Dedicated services page
│   └── NotFound.tsx            # 404 page
├── hooks/
│   ├── use-mobile.tsx          # Responsive breakpoint hook
│   └── use-toast.ts            # Toast notification hook
└── lib/
    └── utils.ts                # Tailwind merge utilities
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/rajeshkanna-s/rajeshkanna-portfolio-showcase.git

# Navigate to the project
cd rajeshkanna-portfolio-showcase

# Install dependencies
npm install

# Start the development server
npm run dev
```

The app runs at **http://localhost:8080**

### Build for Production

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## Sections at a Glance

| # | Section | Description |
|---|---|---|
| 1 | **Hero** | Animated intro with typewriter roles, floating elements, social links |
| 2 | **About** | Professional summary with 6 highlight cards and key stats |
| 3 | **Services** | 9 freelance offerings with gradient cards |
| 4 | **How I Work** | 8-step transparent process from discussion to support |
| 5 | **Why Choose Me** | 8 competitive advantages with detailed benefits |
| 6 | **Freelance Portfolio** | 30+ live client websites across 3 categories |
| 7 | **Experience** | Professional roles at Kuwy Technology & Barclays |
| 8 | **Skills** | 80+ technologies across Backend, Frontend, DB, Cloud, Tools |
| 9 | **AI Tools** | 20+ AI tools — development, creative, and platforms |
| 10 | **Top Strengths** | 5 core engineering competencies |
| 11 | **Education** | BE in Computer Science — PERI Institute of Technology |
| 12 | **Certificates** | 17 professional certificates in auto-rotating carousel |
| 13 | **Featured Projects** | 6 flagship products + 4 utility tools with live previews |
| 14 | **Testimonials** | Client reviews with 5-star ratings |
| 15 | **Contact** | EmailJS form, WhatsApp, email, phone, resume download |
| 16 | **Footer** | Quick navigation, copyright, back-to-top |

---

## Performance & Best Practices

- **Lazy Loading** — Images and iframe embeds load on viewport entry
- **Code Splitting** — Vite handles route-based chunking
- **SWC Compiler** — Faster builds than Babel via @vitejs/plugin-react-swc
- **Optimized Assets** — Skill icons from CDN, no bundled image bloat
- **Semantic HTML** — Proper heading hierarchy, landmarks, and ARIA labels
- **Mobile-First CSS** — Tailwind responsive utilities from small to large

---

## Connect With Me

<div align="center">

| Channel | Link |
|---|---|
| **Portfolio** | [rajeshkanna.in](https://www.rajeshkanna.in) |
| **LinkedIn** | [linkedin.com/in/rajeshkanna-s](https://linkedin.com/in/rajeshkanna-s) |
| **GitHub** | [github.com/rajeshkanna-s](https://github.com/rajeshkanna-s) |
| **Email** | rajeshkannaprogrammer@gmail.com |
| **WhatsApp** | [+91 8667454755](https://wa.me/918667454755) |

</div>

---

<div align="center">

**Built with React, TypeScript, Tailwind CSS, and a lot of passion.**

If this project helped or inspired you, consider giving it a star!

</div>
