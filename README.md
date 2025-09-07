# 🚀 Modern Futuristic Portfolio

A cutting-edge, responsive portfolio website built with the latest web technologies, featuring 3D elements, smooth animations, and a futuristic design aesthetic.

## ✨ Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Stunning Visuals**: Tailwind CSS with custom animations
- **3D Elements**: Three.js integration for immersive experiences
- **Smooth Animations**: Framer Motion for fluid transitions
- **Fully Responsive**: Mobile-first design approach
- **Performance Optimized**: Fast loading and smooth interactions
- **Accessible**: WCAG compliant design
- **Glass Morphism**: Modern UI design with glass effects

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: Three.js, React Three Fiber
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint, Prettier

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Personal-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx      # Navigation component
│   │   ├── Hero.tsx        # Hero section with 3D stars
│   │   ├── About.tsx       # About section
│   │   ├── Skills.tsx      # Skills showcase
│   │   ├── Projects.tsx    # Projects portfolio
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer component
│   └── ui/                 # Reusable UI components
├── assets/                 # Static assets
├── App.tsx                 # Main app component
├── main.tsx               # Application entry point
└── index.css              # Global styles and Tailwind
```

## 🎨 Customization

### 1. Personal Information
Update the following files with your information:
- `src/components/sections/Hero.tsx` - Name, title, description
- `src/components/sections/About.tsx` - About me content
- `src/components/sections/Contact.tsx` - Contact information
- `src/components/sections/Footer.tsx` - Footer details

### 2. Skills & Technologies
Edit `src/components/sections/Skills.tsx`:
- Update skill categories and proficiency levels
- Modify technology stack list

### 3. Projects
Modify `src/components/sections/Projects.tsx`:
- Replace sample projects with your work
- Update project images, descriptions, and links
- Adjust project categories

### 4. Styling & Colors
Customize the theme in `tailwind.config.js`:
```js
theme: {
  extend: {
    colors: {
      primary: { /* Your primary colors */ },
      accent: { /* Your accent colors */ },
      // ... more customization
    }
  }
}
```

### 5. 3D Elements
Modify the 3D star field in `src/components/sections/Hero.tsx`:
- Adjust star count and size
- Change colors and animations
- Add more 3D elements

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🎯 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with code splitting
- **Images**: Lazy loading and optimization
- **Animations**: Hardware accelerated

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/repository-name"`
3. Deploy: `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for 3D capabilities
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide React](https://lucide.dev/) for icons

## 📧 Contact

Your Name - [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/yourusername/Personal-Portfolio](https://github.com/yourusername/Personal-Portfolio)

---

⭐ **Don't forget to star this repository if you found it helpful!**

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
