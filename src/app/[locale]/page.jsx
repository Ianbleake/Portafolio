import {useTranslations} from 'next-intl';

import Hero from '../Components/Hero';
import About from '../Components/About';
import Skills from '../Components/Skills';
import Projects from '../Components/Proyects';
import Contact from '../Components/Contact';
 
export default function HomePage() {
  const t = useTranslations('HomePage');
  return (
    <div>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}