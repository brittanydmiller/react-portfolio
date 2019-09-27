import React from 'react';


const Project = ({id, classes, thumblink, thumbsrc, thumbalt, thumbtitle, namelink, name, lightbox, descr, tech, active }) => {
  // if ({active}) {
  	return (
      <div id={id} className={`item displayed bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 ${classes} `}>
        <div className="offset">
          <a href={thumblink} rel="lightbox">
            <img src={thumbsrc} alt={thumbalt} title={thumbtitle} width="200px" height="200px" />
          </a>
          <div className="caption">
            <a href={namelink} rel="lightbox">{name}</a>
            <p className="descrip">{descr}</p>
            <ul className="technologies">{tech}
            </ul>
          </div>
        </div>
      </div>
  	);
  // }
  // return null;
}

export default Project;