import { useTranslations } from "next-intl";
import Image from "next/image";

export default function About (){

  const t = useTranslations('homepage.about')
  return (
    <div className="about-container">
      <h2>{t('title')}</h2>
      <div className="flex-about">
      <p className="about-text">{t.rich("description", { br: () => <br></br>, })}</p>
        <div className="about-img">
          {/* <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/> */}
        </div>
      </div>
    </div>
  )
}