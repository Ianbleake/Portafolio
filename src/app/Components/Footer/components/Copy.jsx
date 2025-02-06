import { useTranslations } from "next-intl"

export default function Copy(){
  const t = useTranslations('footer')
  return(
    <p> © {new Date().getFullYear()} {t('copy')} </p>
  )
}