import { ThemeProvider } from './Components/Theme/Theme';
import { GlobalStyles } from './Components/Theme/GlobalTheme';
import HeroSection from './Components/Hero/HeroSection';
import AboutMe from './Components/About/About';
import Projects from './Components/Projects/Projects';
import ContactSection from './Components/Contact/ContactSection';

function App() {
  return (
    <ThemeProvider>
      <GlobalStyles />
      <div className="min-h-screen">
        <HeroSection />
        <AboutMe />
        <Projects />
        <ContactSection />
      </div>
    </ThemeProvider>
  );
}

export default App;