import { NavLink } from "react-router-dom";
import NavStyle from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone,faHouse,faBook,faUser,faPenToSquare} from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const items = [
    { name: "", to: "/", icon:faHouse, id: "1" },
    { name: "", to: "/aboutMe",icon:faUser , id: "2" },
    { name: "", to: "/Experience",icon: faBook, id: "3" },
    { name: "", to: "/Portfolio",icon: faPenToSquare, id: "4" },
    { name: "", to: "/ContactME",icon: faPhone, id: "5" },
  ];

  return (
    <nav className={NavStyle.Nav_container}>
      <ul className={NavStyle.Nav_ulParent}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.to}
                style={({ isActive }) => ({
                  color: isActive ? "lightblue" : "gray",
                  borderBottom: isActive ? "2px solid gray" : "none",
                })}
              >
                <FontAwesomeIcon icon={item.icon} />
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
