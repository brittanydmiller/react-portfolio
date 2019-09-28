import React from 'react';
// import britt from './images/britt_scarf_filt_200.jpg';
import github from './css/github.png';
import linkedin from './css/linkedin.png';


const Profile = (images) => {
	return(
	  <div id="about-me">
	    <div className="offset clear">
	      <img id="portrait" src={images['britt_scarf_filt_200.jpg']} alt="Brittany Miller portrait" width="200px" height="200px" />
	      <h2>About</h2>
	      <p>Why am I passionate about technology? It provides a constant supply of interesting new problems to solve and stories to tell. It's the opportunity to stand with one foot in the creative and one in the technical -- a chance to work with the most inspiring people.</p>
	      <p>Before I discovered my love for development, I worked in many different aspects of small business, doing purchasing, admin, inside sales, marketing, graphics, copy editing, documentation, and events. My experience has brought me into many industries, including professional audio/video, theater, travel, music, health care software, and higher education software.</p>
	      <p>This is where I feature my work that has a visual component. Be sure to <a href="https://github.com/brittanydmiller">check my github account</a> for my more code-focused work.</p>
	      <ul id="social">
	        <li><a id="github" target="_blank" rel="noopener noreferrer" href="https://github.com/brittanydmiller"><img src={github} alt="Github" width="32px" height="32px" /></a></li>
	        <li><a id="linkedin" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/brittanydmiller"><img src={linkedin} alt="LinkedIn" width="32px" height="32px" /></a></li>
	        <li id="artsResume" className="resume"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vTzz7r_ER6L0aRjeEE9QH5gBT0KfbQ5krtzzaBqLr4R-IevsRzdmtkQUi6rnxgkozEg6GFG7vTEd6Or/pub">Arts Resume</a></li>
	        <li id="techResume" className="resume"><a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/e/2PACX-1vTd-gf8auHGV57Hxv2KEYsZRBhFtLG4fSWz7GvEYe9uP649QpAvtFcHuwTewRL8ZTAK9KWevbhPMBr3/pub">Tech Resume</a></li>
	      </ul>
	    </div>
	  </div>
	);
}

export default Profile;