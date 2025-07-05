# AI Research Scientist Portfolio

A sophisticated portfolio website for Niraj Chaudhari, featuring a cosmic theme with animated starfield, floating equations, and professional showcase of AI research experience.

## 🚀 Features

- **Cosmic Theme**: Dark space aesthetic with gold accents and professional typography
- **Animated Background**: Dynamic starfield with twinkling stars and shooting comets
- **Floating Equations**: Mathematical formulas floating in the background
- **Interactive Timeline**: Professional journey with role descriptions and achievements
- **Research Showcase**: Current work on diffusion models and protein design
- **Publications**: Academic papers and research contributions
- **Responsive Design**: Mobile-first approach with smooth animations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: shadcn/ui built on Radix UI primitives
- **Styling**: Tailwind CSS with custom cosmic theme
- **Animations**: Framer Motion for smooth transitions
- **Backend**: Express.js + TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Deployment**: Optimized for GitHub Pages, Vercel, Netlify

## 📦 Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd ai-portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Environment Setup**:
   ```bash
   # Create .env file
   echo "DATABASE_URL=your_postgresql_url" > .env
   ```

4. **Start development server**:
   ```bash
   npm run dev
   ```

5. **Build for production**:
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Route pages
│   │   ├── hooks/          # Custom hooks
│   │   └── lib/            # Utilities
├── server/                 # Backend Express server
├── shared/                 # Shared schemas and types
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Update Profile Information
- Edit `client/src/components/hero-section.tsx` for personal details
- Modify `client/src/components/journey-timeline.tsx` for experience
- Update `client/src/components/research-section.tsx` for current research

### Styling
- Colors: `client/src/index.css` (CSS variables)
- Theme: `tailwind.config.ts`
- Animations: Individual component files

### Content
- Social links: Update URLs in component files
- Resume: Replace link in hero and connect sections
- Projects: Modify project data objects

## 🌟 Key Components

- **Starfield**: Animated background with stars and comets
- **FloatingEquations**: Mathematical formulas with motion effects
- **Navigation**: Smooth scroll navigation with mobile support
- **HeroSection**: Professional introduction with social links
- **JourneyTimeline**: Interactive career progression
- **ResearchSection**: Current research focus areas
- **ProjectsSection**: Publications and featured projects
- **SkillsSection**: Technical skills and achievements
- **ConnectSection**: Professional opportunities and contact

## 🚀 Deployment

### GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Vercel/Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

## 📧 Contact

Built for Niraj Chaudhari - AI Research Scientist
- Email: n.c.chaudhari10@gmail.com
- LinkedIn: [Niraj Chaudhari](https://www.linkedin.com/in/niraj-chaudhari-76934a173/)
- GitHub: [ncchaudhari10](https://github.com/ncchaudhari10/)

## 📄 License

This project is open source and available under the MIT License.