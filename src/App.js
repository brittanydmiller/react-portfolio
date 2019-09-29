import React from 'react';
import Profile from './Profile';
import ProjectList from './ProjectList';
import { projects } from './projects';
import Filters from './Filters';

const App = ({images, css_images}) => {
	return (
		<div>
			<header>
		    <div className="offset">
		      <h1><a href="index.html">Brittany D. Miller</a></h1>
		      <p className="clear" id="tagline">Sr. Software Engineer in San Francisco, CA.</p>
		    </div>
		  </header>
		  <Profile images={images} css_images={css_images} />
			<Filters />
			<ProjectList projects={projects} images={images} css_images={css_images} />
			<footer className="clear">
		    <div className="offset">
		      <p id="copyright">&copy; Copyright <span id="year">2019</span> Brittany D. Miller</p>
		    </div>
		  </footer>
		  <script type="text/javascript" src="js/main.js"></script>
		</div>
	);
}

export default App;