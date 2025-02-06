'use client'

import Image from "next/image";
import { useTranslations } from "use-intl";
import TwitterIcon from "../Components/TwitterIcon";
import GithubIcon from "../Components/GithubIcon";
import LinkdinIcon from "../Components/LinkdinIcon";

export default function Hero (){

  const t =useTranslations('homepage.hero')

  return (
    <div className="hero-container">
      {/* <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" /> */}
      <div className="hero-text">
        <h1>{t('title')}</h1>
        <p>{t('description')}</p>
        <div className="social-icons">
          <TwitterIcon style={'big'} />
          <GithubIcon style={'big'} />
          <LinkdinIcon style={'big'} />
        </div>
      </div>
    </div>
  )
}