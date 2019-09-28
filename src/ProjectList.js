import React from 'react';
import Project from './Project';


const ProjectList = ({projects}) => {
	
	const projectComponent = projects.map((record, i) => {
		if (record.active) {
			return ( 
				<Project
					images={images}
					key={i}
					id={projects[i].id}
					classes={projects[i].classes}
					thumblink={projects[i].thumblink}
					thumbsrc={projects[i].thumbsrc}
					thumbalt={projects[i].thumbalt}
					thumbtitle={projects[i].thumbtitle}
					namelink={projects[i].namelink}
					name={projects[i].name}
					lightbox={projects[i].lightbox}
					descr={projects[i].descr}
					tech={projects[i].tech}
					active={projects[i].active}
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