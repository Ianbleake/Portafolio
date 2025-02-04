import { routing } from "../../../i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import LocaleSelect from "./components/LocaleSelect";

export default function LanguageSelector() {
  const t = useTranslations('LanguageSelector');
  const locale = useLocale();

  return (
    <LocaleSelect defaultLocale={locale} label={t("label")} >
      {
        routing.locales.map((locale) => (
          <option key={locale} value={locale}>
            {t("locale", { locale: locale })}
          </option>
        )) 
      }
    </LocaleSelect>
  )
}

