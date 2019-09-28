import React from 'react';
import Profile from './Profile';
import ProjectList from './ProjectList';
import { projects } from './projects';
import Filters from './Filters';

function importAll(r) {
  let images = {};
  r.keys().forEach((record, i) => { images[record.replace('./', '')] = r(record); });
  return images;
}

const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg|gif)$/));

const App = () => {
	return (
		<div>
			<header>
		    <div className="offset">
		      <h1><a href="index.html">Brittany D. Miller</a></h1>
		      <p className="clear" id="tagline">Sr. Software Engineer in San Francisco, CA.</p>
		    </div>
		  </header>
		  <Profile images={images} />
			<Filters />
			<ProjectList projects={projects} images={images} />
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