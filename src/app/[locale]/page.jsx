import {useTranslations} from 'next-intl';

import Hero from '../Containers/Hero';
import About from '../Containers/About';
import Skills from '../Containers/Skills';
import Projects from '../Containers/Proyects';
import Contact from '../Containers/Contact';
 
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