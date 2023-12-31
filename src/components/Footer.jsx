
import { Link } from "react-router-dom";
import footerStyle from "../styles/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub ,faFacebook,faSquareInstagram  } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  let getYear = () => {
    let currentYear = new Date().getFullYear();
    return currentYear;
  }

  return (
  <footer className={footerStyle.footer_section} >

<Link to='/' className={footerStyle.footer__logo}>Masoud Izad</Link>

<ul className={footerStyle.permalinks}>
  
  <li><Link to='/' >Home</Link></li>
  <li><Link  to='/aboutMe'>About</Link></li>
  <li><Link to='/Experience'>Skills</Link></li>
  <li><Link to='/Portfolio'>Portfolio</Link></li>
  <li><Link to='/contactMe'>Contact</Link></li>

</ul>
<div className={footerStyle.footer__socials}>
<Link to = 'https://github.com/Masi-92'> <FontAwesomeIcon  icon={faGithub}/></Link>
<Link to="#"><FontAwesomeIcon icon={faFacebook}/></Link>
<Link to="#"><FontAwesomeIcon icon={faSquareInstagram}/></Link>


</div>
<div className={footerStyle.Date__Year}>
        <small> ET {getYear()}. All rights reserved.</small>
      </div>
  </footer>
  );
};

export default Footer;
