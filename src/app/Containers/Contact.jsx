import { useTranslations } from 'next-intl'
import Button from '../Components/Button'

export default function Contact (){
  const t = useTranslations('homepage.contact')
  return (
    <div className="contact-container">
      <h2>{t('title')}</h2>
      <p>{t('description')}</p>

      <Button url={'/contacto'} label={t('button')} />
    </div>
  )
}