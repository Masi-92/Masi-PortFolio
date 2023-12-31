import portStyle from "../styles/Portfolio.module.css";
import IMG1 from "../Images/easyliefer.png";
import IMG2 from "../Images/alpaca.png";
import Layout from "../Layout/Layout";
//import Navigation from './Navigation'
//import { Link } from "react-router-dom";

function Portfolio() {
  const Projects = [
    {
      id: 1,
      title: "EasyLiefer",
      Imag: IMG1,
      description:
        "Heute bestellen, morgen bekommen Easy liefre ist eine Online-Getränkeliefreservise,dass auf Online Bestellung basiert wurde. Easy Liefre: liefert Ihnen aus verschieden Länder und Kontinenten von A bis Z... weniger Minuten Aussuchen, Bestellen mit dem Handy oder PC und in den nächsten Tag servieren.",
      technologies: "css / scss",
      github: "https://github.com/Masi-92/Easy-lifer-Porjct",
      link: "https://masi-92.github.io/Easy-lifer-Porjct/",
    },
    {
      id: 2,
      title: "Alpaca",
      Imag: IMG2,
      description: " Alpacas (vicugña pacos) are members of the Camelid Family and are a domesticated species of the South American camelid.",
      technologies: "css / scss",
      github: "https://github.com/Masi-92/alpaca-project",
      link: "https://masi-92.github.io/alpaca-project/",
    },
  ];

  return (
    <Layout>
      <section className={portStyle.container}>
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className={`${portStyle.portfolio__container} `}>
          {Projects.map((pro) => (
            <article className={portStyle.portfolio__item} key={pro.id}>
              <div className={portStyle.portfolio__item_image}>
                <img src={pro.Imag} alt={pro.title} />
              </div>

              <div className={portStyle.portfolio__item_content}>
                <h3>{pro.title}</h3>
                <p>{pro.description}</p>
                <p>{pro.technologies}</p>
              </div>
              <div className={portStyle.portfolio__item_cta}>
                <a
                  href={pro.github}
                  target="_blank"
                  className={`${portStyle.button} `}
                  rel="noreferrer"
                >
                  GitHub
                </a>

                <a
                  href={pro.link}
                  target="_blank"
                  className={`${portStyle.button} `}
                  rel="noreferrer"
                >
                  Visit Website
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Portfolio;
