import { i18n, useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import JugsieBottlesLogo from "../../public/Logos/logo";

const Footer = () => {
  const { locale } = useRouter();
  useEffect(() => {
    i18n.addResourceBundle(locale, 'common')
  }, [])
  const { t } = useTranslation('common')
  const iconStyling = { fontSize: '1.5rem' }

  return (
    <footer className="bg-white p-10 footer text-base-content">
      <div>
        <JugsieBottlesLogo />
        <p className="font-extrabold font-mono self-center">
          Jugsie Bottles
        </p>
        <span
          className="font-normal font-mono tracking-tight">Quenching your thirst since 2020</span>
      </div>
      <div>
        <span className="footer-title">{ t('company') }</span>
        <Link href='/contact'>
          <a className="link link-hover">{ t('contact') }</a>
        </Link>
      </div>
      <div>
        <span className="footer-title">{ t('legal') }</span>
        <Link href='/docs/terms-and-conditions'>
          <a className="link link-hover">{ t('toc') }</a>
        </Link>
        <Link href='/docs/privacy-policy'>
          <a className="link link-hover">{ t('privacy-policy') }</a>
        </Link>
      </div>
      <div className="flex flex-col">
        <span className="footer-title">{ t('social') }</span>
        <div className="flex flex-row space-x-6">
          <Link href="https://www.instagram.com/jugsiebottles/">
            <a><FaInstagram style={ iconStyling } /></a>
          </Link>
          <Link href="https://www.facebook.com/jugsiebottles/">
            <a><FaFacebook style={ iconStyling } /></a>
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer;