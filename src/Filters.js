import React from 'react';

const Filters = ({filterClick}) => {
  return (
    <section id="filter-div">
      <div className="offset">
        <h3>Filter projects by skill</h3>
        <hr />
        <ul id="filter">
          <li><button onClick={ filterClick } id= "all" className="current">Show All</button></li>
          <li><button onClick={ filterClick } id='tech'>Tech</button></li>
          <li><button onClick={ filterClick } id='graphics-and-layout' >Graphics & Layout</button></li>
          <li><button onClick={ filterClick } id='games-and-puzzles'>Games & Puzzles</button></li>
          <li><button onClick={ filterClick } id="arts">Arts</button></li>
        </ul>
      </div>
    </section>
  );
}

export default Filters;
