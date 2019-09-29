import React from 'react';
import TechList from './TechList';

const Project = ({css_images, image, id, classes, thumblink, thumbsrc, thumbalt, thumbtitle, namelink, name, lightbox, descr, techs, active }) => {
  return (
    <div id={id} className={`item displayed bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 ${classes} `}>
      <div className="offset">
        <a href={thumblink} rel="noreferrer noopener lightbox">
          <img src={image} alt={thumbalt} title={thumbtitle} width="200px" height="200px" />
        </a>
        <div className="caption">
          <a href={namelink} rel="lightbox noreferrer nooopener">{name}</a>
          <p className="descrip">{descr}</p>
          <TechList techs={techs} css_images={css_images} />
        </div>
      </div>
    </div>
	);
}

export default Project;