import LanguageSelector from "../LanguageSelector";
import Logo from "../Logo";
import Social from './components/Social'
import Copy from './components/Copy'

const Footer = () => {
  return (
      <footer className="footer-container">
        <div className="fcol">
          <Logo/>
          <Copy/>
        </div>
        <div className="fcol" > 
          <Social/>
        </div>
        <div className="fcol" >
          <LanguageSelector/>
        </div>
      </footer>
  )
}

export default Footer;