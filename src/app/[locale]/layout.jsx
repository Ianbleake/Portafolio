import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import Footer from '../Components/Footer';
import Header from '../Components/Header'
import '@/app/Styles/globals.css'
import '@/app/Styles/components.css'
import {getTranslations} from 'next-intl/server';
 

export async function generateMetadata({params}) {
  const {locale} = await params
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('title')
  };
}
 
export default async function LocaleLayout({ children, params}) {

  const { locale } = await params
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
 
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Header/>
            {children}
          <Footer/>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}