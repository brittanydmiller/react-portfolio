import React from 'react';
import Project from './Project';


const ProjectList = ({projects, images, css_images}) => {
	const projectComponent = projects.map((record, i) => {
		if (record.active) {
			return ( 
				<Project
					image={images[record.thumbsrc]}
          css_images={css_images}
					key={i}
					id={record.id}
					classes={record.classes}
					thumblink={record.thumblink}
					thumbsrc={record.thumbsrc}
					thumbalt={record.thumbalt}
					thumbtitle={record.thumbtitle}
					namelink={record.namelink}
					name={record.name}
					lightbox={record.lightbox}
					descr={record.descr}
					techs={record.techs}
					active={record.active}
				/>
			);
		}
		return null;
	})
	return (
	  <section id="portfolio">
	    <div className="container clear">
				{projectComponent}
			</div>
		</section>
	);
}

export default ProjectList;