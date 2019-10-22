import React from 'react';
import TechList from './TechList';
import LightboxListener from './Lightbox';


const Project = ({css_images, thumb, gallery_images, id, classes, thumblink, thumbalt, thumbtitle, namelink, name, lightbox, descr, techs, active }) => {

  return (
    <div id={id} className={`item displayed bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 ${classes} `}>
      <div className="offset">
        <LightboxListener thumb={thumb} gallery_images={gallery_images} link={thumblink} alt={thumbalt} title={thumbtitle} />
        <div className="caption">
          <a href={!!namelink ? namelink : false } rel="noreferrer nooopener">{name}</a>
          <p className="descrip">{descr}</p>
          <TechList techs={techs} css_images={css_images} />
        </div>
      </div>
    </div>
	);
}

export default Project;