import { useTranslations } from "next-intl"
import Button from "../../Button"
import LanguageSelector from '../../LanguageSelector'

export default function Navigation () {
  
  const t = useTranslations('header')
  const menu = t.raw('navigation')

  return(
    <nav className="col" >
      {
        Object.entries(menu).map(([key, value]) => {
          return <Button key={key} url={value.route} label={value.label} />
        })
      }
      <LanguageSelector/>
    </nav>
  )
}