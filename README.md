# 🍽️ Restaurant Management System - Landing Page

<div align="center">

![Restaurant Management System](https://img.shields.io/badge/Restaurant-Management%20System-teal?style=for-the-badge&logo=utensils)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

**A modern, responsive landing page for the Restaurant Management System**

[Features](#-features) • [Getting Started](#-getting-started) • [Tech Stack](#-tech-stack) • [Deployment](#-deployment)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Environment Variables](#-environment-variables)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [SEO & Analytics](#-seo--analytics)
- [License](#-license)
- [Support](#-support)

---

## 🎯 Overview

The Restaurant Management System Landing Page is a modern, responsive web application built with Next.js 16 and React 19. It serves as the marketing and information website for the **Restaurant Management System** desktop application - a free, open-source POS system for restaurants.

> **Note**: While the Restaurant Management System desktop application is open-source and free to use, **this landing page repository is proprietary and closed-source**.

### Key Highlights

- ✨ **Modern Design**: Beautiful, responsive UI with dark mode support
- 🚀 **Performance Optimized**: Built with Next.js for optimal performance
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- 🎨 **Smooth Animations**: Enhanced UX with Framer Motion
- 🔍 **SEO Optimized**: Complete SEO implementation with sitemap and robots.txt
- 📊 **Analytics Ready**: Integrated Microsoft Clarity for user analytics

---

## ✨ Features

### 🎨 User Interface
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Dark Mode**: Full dark/light theme support with smooth transitions
- **Smooth Scrolling**: Elegant scroll animations and anchor link navigation
- **Custom Scrollbar**: Beautiful gradient scrollbar design
- **Interactive Components**: Hover effects, animations, and transitions

### 📄 Pages & Sections
- **Landing Page**: Comprehensive homepage with all product information
- **Contact Page**: Functional contact form with email integration
- **Terms & Privacy**: Legal pages with AGPL compliance information
- **Download Section**: Platform-specific download options (Windows, Linux, macOS, iOS, Android)
- **Features Showcase**: Detailed feature descriptions
- **Testimonials**: User testimonials and reviews
- **FAQ Section**: Expandable FAQ accordion
- **Roadmap**: Product development roadmap
- **Support Channels**: Multiple support options

### 🔧 Technical Features
- **Server-Side Rendering**: Optimized SSR with Next.js
- **Type Safety**: Full TypeScript implementation
- **Email Integration**: Contact form with SMTP support
- **SEO Optimization**: Complete meta tags, Open Graph, and Twitter Cards
- **Sitemap Generation**: Automatic XML sitemap
- **Robots.txt**: Search engine crawler configuration

---

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 16.0.1](https://nextjs.org/)** - React framework with SSR
- **[React 19.2.0](https://react.dev/)** - UI library
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework

### Key Libraries
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Icon library
- **[Nodemailer](https://nodemailer.com/)** - Email sending
- **Microsoft Clarity** - User analytics

### Development Tools
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **PostCSS** - CSS processing

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or higher
- **npm**, **yarn**, **pnpm**, or **bun**
- **Git** (optional, for cloning)

### Installation

1. **Clone the repository** (or download the source code)

```bash
git clone <repository-url>
cd restaurant-management-system-frontend
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# Microsoft Clarity Analytics
NEXT_PUBLIC_MICROSOFT_CLARITY_ID=your-clarity-id

# SMTP Configuration (for contact form)
SMTP_SERVER=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USERNAME=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_RECIPIENT=support@yourdomain.com
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

---

## 🔐 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_SITE_URL` | Your website's base URL | `https://restaurant-management-system.roboticela.com` |
| `NEXT_PUBLIC_MICROSOFT_CLARITY_ID` | Microsoft Clarity project ID | `abc123def456` |

### Optional Variables (Contact Form)

| Variable | Description | Default |
|----------|-------------|---------|
| `SMTP_SERVER` | SMTP server hostname | `smtp.gmail.com` |
| `SMTP_PORT` | SMTP server port | `587` |
| `SMTP_SECURE` | Use TLS/SSL | `false` |
| `SMTP_USERNAME` | SMTP username | - |
| `SMTP_PASSWORD` | SMTP password/app password | - |
| `SMTP_RECIPIENT` | Email recipient address | `SMTP_USERNAME` |

> **Note**: For Gmail, you'll need to use an [App Password](https://support.google.com/accounts/answer/185833) instead of your regular password.

---

## 📁 Project Structure

```
restaurant-management-system-frontend/
├── app/
│   ├── api/
│   │   └── contact/
│   │       ├── route.ts              # Contact form API endpoint
│   │       └── support_email.html    # Email template
│   ├── components/
│   │   ├── About.tsx                 # About section
│   │   ├── Comparison.tsx            # Feature comparison
│   │   ├── DownloadCard.tsx          # Download card component
│   │   ├── Downloads.tsx             # Downloads section
│   │   ├── FAQ.tsx                   # FAQ accordion
│   │   ├── FeatureCard.tsx           # Feature card component
│   │   ├── Features.tsx              # Features section
│   │   ├── Footer.tsx                # Footer component
│   │   ├── Hero.tsx                  # Hero section
│   │   ├── Navbar.tsx                # Navigation bar
│   │   ├── OnlineVersion.tsx         # Online version section
│   │   ├── Roadmap.tsx               # Roadmap section
│   │   ├── ScrollPopup.tsx           # Scroll-triggered popup
│   │   ├── Stats.tsx                 # Statistics section
│   │   ├── Support.tsx               # Support section
│   │   ├── SystemRequirements.tsx    # System requirements
│   │   ├── TechnologyStack.tsx       # Tech stack showcase
│   │   ├── Testimonials.tsx          # Testimonials section
│   │   ├── ThemeContext.tsx          # Theme context provider
│   │   ├── ThemeToggle.tsx           # Theme toggle button
│   │   ├── UseCases.tsx              # Use cases section
│   │   └── WhyChoose.tsx             # Why choose us section
│   ├── contact/
│   │   ├── layout.tsx                # Contact page metadata
│   │   └── page.tsx                  # Contact page
│   ├── privacy/
│   │   ├── layout.tsx                # Privacy page metadata
│   │   └── page.tsx                  # Privacy policy page
│   ├── terms/
│   │   ├── layout.tsx                # Terms page metadata
│   │   └── page.tsx                  # Terms of use page
│   ├── globals.css                   # Global styles
│   ├── layout.tsx                    # Root layout
│   ├── page.tsx                      # Homepage
│   ├── robots.ts                     # Robots.txt generator
│   └── sitemap.ts                    # Sitemap generator
├── public/                           # Static assets
├── .env.local                        # Environment variables (not in git)
├── package.json                      # Dependencies
├── tsconfig.json                     # TypeScript config
└── README.md                         # This file
```

---

## 💻 Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linter
npm run lint
```

### Code Style

- **TypeScript**: Strict mode enabled
- **ESLint**: Next.js recommended rules
- **Formatting**: Consistent code style throughout

### Component Guidelines

- All components are located in `app/components/`
- Use TypeScript for type safety
- Follow React best practices
- Use Framer Motion for animations
- Implement responsive design with Tailwind CSS

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

### Deployment Options

#### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically

#### Other Platforms

- **Netlify**: Connect your repository and deploy
- **AWS Amplify**: Configure build settings and deploy
- **Docker**: Build and deploy containerized application
- **Traditional Hosting**: Build and upload the `.next` folder

### Environment Variables

Make sure to set all required environment variables in your deployment platform's dashboard.

---

## 🔍 SEO & Analytics

### SEO Features

- ✅ Complete meta tags (title, description, keywords)
- ✅ Open Graph tags for social sharing
- ✅ Twitter Card metadata
- ✅ Canonical URLs
- ✅ Automatic sitemap generation (`/sitemap.xml`)
- ✅ Robots.txt configuration (`/robots.txt`)
- ✅ Structured data ready

### Analytics

- **Microsoft Clarity**: Integrated for user behavior analytics
  - Set `NEXT_PUBLIC_MICROSOFT_CLARITY_ID` in environment variables
  - Automatically loads when ID is provided

### Social Media

- Open Graph image: Add `/public/og-image.png` (1200x630px)
- Twitter Card: Configured for large image cards

---

## 📄 License

### This Landing Page Repository

**Copyright © 2024 Roboticela. All rights reserved.**

This landing page repository is **proprietary software** and closed-source. The source code is not available for public use, modification, or distribution.

### The Restaurant Management System Application

The **Restaurant Management System** desktop application (the product this landing page promotes) is:

- ✅ **Free to use**
- ✅ **Open source** (licensed under AGPL-3.0)
- ✅ **Available on GitHub**: [Restaurant-Management-System](https://github.com/Roboticela/Restaurant-Management-System)

> **Important**: This landing page and the desktop application are separate projects with different licenses. The desktop application is open-source, while this landing page repository is proprietary.

---

## 🤝 Contributing

This landing page repository is **closed-source** and not accepting contributions.

### The Desktop Application

If you're interested in contributing to the **Restaurant Management System** desktop application (which is open-source), please visit:

- **GitHub Repository**: [Restaurant-Management-System](https://github.com/Roboticela/Restaurant-Management-System)
- **Issues**: Report bugs or request features
- **Pull Requests**: Submit contributions

---

## 🆘 Support

### Get Help

- 📧 **Email**: contact@roboticela.com
- 💬 **Contact Form**: [Contact Us](/contact)
- 📖 **Documentation**: Check the [Terms of Use](/terms) and [Privacy Policy](/privacy)

### Resources

- **Download**: [Download Section](/downloads)
- **Features**: [Features Overview](/features)
- **FAQ**: [Frequently Asked Questions](/faq)
- **Support**: [Support Channels](/support)
- **Desktop App**: [GitHub Repository](https://github.com/Roboticela/Restaurant-Management-System)

---

## 📊 Project Status

- ✅ **Development**: Active
- ✅ **Production**: Ready
- ✅ **Maintenance**: Ongoing

---

<div align="center">

**Made with ❤️ by [Roboticela](https://roboticela.com)**

[Website](https://restaurant-management-system.roboticela.com) • [Contact](/contact) • [Privacy](/privacy) • [Terms](/terms)

**Desktop Application**: [GitHub](https://github.com/Roboticela/Restaurant-Management-System)

</div>
