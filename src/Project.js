import React from 'react';


const Project = ({images, id, classes, thumblink, thumbsrc, thumbalt, thumbtitle, namelink, name, lightbox, descr, tech, active }) => {
	return (
    <div id={id} className={`item displayed bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 ${classes} `}>
      <div className="offset">
        <a href={thumblink} rel="noreferrer noopener lightbox">
          <img src={`./images/${thumbsrc}`} alt={thumbalt} title={thumbtitle} width="200px" height="200px" />
        </a>
        <div className="caption">
          <a href={namelink} rel="lightbox noreferrer nooopener">{name}</a>
          <p className="descrip">{descr}</p>
          <ul className="technologies">{tech}
          </ul>
        </div>
      </div>
    </div>
	);
}

export default Project;