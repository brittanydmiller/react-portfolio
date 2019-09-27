import React from 'react';

const Filters = () => {
	return (
	  <section id="filter-div">
	    <div class="offset">
	      <h3>Filter projects by skill</h3>
	      <hr />
	      <ul id="filter">
	        <li><button href="#" class="current">Show All</button></li>
	        <li><button href="#">Arts</button></li>
	        <li><button href="#">Games & Puzzles</button></li>
	        <li><button href="#">Graphics & Layout</button></li>
	        <li><button href="#">Tech</button></li>
	      </ul>
	    </div>
	  </section>
	);
}

export default Filters;