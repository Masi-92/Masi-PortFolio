import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HeaderStyle from '../styles/Home.module.css'
import {faSquareGithub} from "@fortawesome/free-brands-svg-icons";
import {faAngellist} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const HeaderSocials = () => {
  return (
    <div  className={HeaderStyle.header__socials}>
    
  <Link to ='#'>   <FontAwesomeIcon icon={faLinkedin}/> </Link>
  <Link to = '#'>   <FontAwesomeIcon icon={faSquareGithub}/> </Link>
  <Link to = '#' >   <FontAwesomeIcon icon={faAngellist}/> </Link>
   
    
    </div>
  )
}

export default HeaderSocials