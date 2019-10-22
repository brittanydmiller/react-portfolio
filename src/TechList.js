import React from 'react';

const TechList = ({techs, css_images}) => {
  const technologies = {
    'wordpress':  { src:"wordpress.png", alt:"Wordpress", width:"35px", height:"35px"},
    'html':  { src:"html.png", alt:"Html", width:"36px", height:"50px"},
    'css':  { src:"css.png", alt:"Css", width:"36px", height:"50px"},
    'photoshop':  { src:"photoshop.png", alt:"PhotoShop", width:"36px", height:"35px"},
    'indesign':  { src:"indesign.png", alt:"InDesign", width:"36px", height:"35px"},
    'github':  { src:"github.png", alt:"Github", width:"32px", height:"32px"},
    'linkedin':  { src:"linkedin.png", alt:"LinkedIn", width:"32px", height:"32px"},
    'rails':  { src:"rails.png", alt:"Ruby on Rails", width:"39px", height:"50px"},
    'js':  { src:"js.png", alt:"JavaScript and jQuery", width:"36px", height:"50px"},
    'heroku': { src:"heroku.png", alt:"Heroku", width:"36px", height:"50px"},
    'postgresql':  { src:"postgresql.png", alt:"Postgresql", width:"51px", height:"50px"},
    'illustrator':  { src:"illustrator.png", alt:"Illustrator", width:"36px", height:"35px"},
    'gsuite':  { src:"gsuitelogo.png", alt:"GSuite", width:"", height:"30px"}
  }

  if (techs) {
    const techComponent = techs.map((technology, i) => {
      const data = technologies[technology];
      return(
        <li key={i}>
          <img
            src={css_images[data.src]}
            alt={data.alt}
            width={data.width}
            height={data.height}
          />
        </li>
      );
    })
    return(
      <ul className="technologies">
        {techComponent}
      </ul>
  	);
  } else {
    return null;
  }
}


export default TechList;
