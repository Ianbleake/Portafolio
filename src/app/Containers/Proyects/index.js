import { useTranslations } from 'next-intl';
import Card from './components/Card';

const Projects = () => {

  const t = useTranslations('homepage.proyects');

  const items = t.raw('cards')

  return (
    <div className="projects-container">
      <h2>{t('title')}</h2>
      <div className="projects-grid">
      {Object.entries(items).map(([key, value]) => {
          return <Card key={key} title={value.name} description={value.description} link={value.url} data={value.data}/>
        })}
      </div>
    </div>
  )
}

export default Projects;