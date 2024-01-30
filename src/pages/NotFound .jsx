import { Link } from "react-router-dom"
import IMG from "../Images/CodePen-404-Page.gif"
import style from "../styles/404.module.css"

const NotFound = () => {
  return (
    <div className={style.container}>
  
 
    
    <img src={IMG} alt="" />
    <Link to="/"><button className={style.button }>Go to home Page</button></Link>
    </div>
  )
}

export default NotFound