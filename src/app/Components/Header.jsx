import { Link } from "@/i18n/routing.ts";
import { useTranslations } from "next-intl";
import Button from "./Button";
import LanguageSelector from "./LanguageSelector";

const Navbar = () => {

  const t = useTranslations('header')
  return (
    <div className="nav-container">
      <div className="logo">
        <Link href="/">{t('title')}</Link>
      </div>
      <div className="col" >
        <Button url={'/resume'} label={t('button')} />
        <LanguageSelector/>
      </div>
    </div>
  )
}

export default Navbar;