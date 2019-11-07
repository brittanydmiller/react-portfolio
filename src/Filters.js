import React from 'react';

const Filters = ({toggleButtons, filterClick, isDesktop, isHidden, filter}) => {
  return (
    <section id="filter-div">
      <div className="offset">
        <h3 onClick={ toggleButtons } >Filter projects by skill</h3>
        <hr />
        {(isDesktop || !isHidden) && <ul id="filter">
          <li><button onClick={ filterClick } id= "all" className={ filter==="all" ? "current" : ""}>Show All</button></li>
          <li><button onClick={ filterClick } id='tech' className={ filter==="tech" ? "current" : ""}>Tech</button></li>
          <li><button onClick={ filterClick } id='graphics-and-layout' className={ filter==="graphics-and-layout" ? "current" : ""}>Graphics & Layout</button></li>
          <li><button onClick={ filterClick } id='games-and-puzzles' className={ filter==="games-and-puzzles" ? "current" : ""}>Games & Puzzles</button></li>
          <li><button onClick={ filterClick } id="arts" className={ filter==="arts" ? "current" : ""}>Arts</button></li>
        </ul>}
      </div>
    </section>
  );
}

export default Filters;
