import { Link } from '@/i18n/routing.ts'
import { useTranslations } from 'next-intl'

export default function Logo () {
  const t = useTranslations('header')
  return(
    <div className="logo">
      <Link href="/">{t('title')}</Link>
    </div>
  )
}