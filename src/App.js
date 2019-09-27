import React from 'react';
import Profile from './Profile';
import ProjectList from './ProjectList';
import { projects } from './projects';
import Filters from './Filters';

const App = () => {
	return (
		<div>
			<header>
		    <div class="offset">
		      <h1><a href="index.html">Brittany D. Miller</a></h1>
		      <p class="clear" id="tagline">Sr. Software Engineer in San Francisco, CA.</p>
		    </div>
		  </header>
		  <Profile />
			<Filters />
			<ProjectList projects={projects} />
			<footer class="clear">
		    <div class="offset">
		      <p id="copyright">&copy; Copyright <span id="year">2019</span> Brittany D. Miller</p>
		    </div>
		  </footer>
		  <script type="text/javascript" src="js/main.js"></script>
		</div>
	);
}

export default App;