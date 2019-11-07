import React, {Component} from 'react';
import Profile from './Profile';
import ProjectList from './ProjectList';
import { projects } from './projects';
import Filters from './Filters';


function importAll(r) {
  let assets = {};
  r.keys().forEach((record, i) => { assets[record.replace('./', '')] = r(record); });
  return assets;
}

const images = importAll(require.context('./images/', false, /\.(png|jpe?g|svg|gif)$/));
const css_images = importAll(require.context('./css/', false, /\.(png|jpe?g|svg|gif)$/));
const currentYear = new Date().getFullYear();

class App extends Component {
	constructor() {
		super();
		this.state = {
			filter: 'all',
			filterButtonsHidden: false,
			isDesktop: true
		}

		this.updateSize = this.updateSize.bind(this);
	}

	componentDidMount = () => {
    this.updateSize();
    window.addEventListener("resize", this.updateSize);
  }

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateSize);
  }

  updateSize = () => {
    this.setState({ isDesktop: window.innerWidth > 961 });
  }

	toggleFilterButtons = () => {
		this.setState({ filterButtonsHidden: !this.state.filterButtonsHidden });
	}

	onFilterClick = (event) => {
		this.setState({ filter: event.target.id });
	}

	render() {
		const isDesktop = this.state.isDesktop;
		const isHidden = this.state.filterButtonsHidden;

		return (
			<div>
				<header>
			    <div className="offset">
			      <h1><a href="index.html">Brittany D. Miller</a></h1>
			      <p className="clear" id="tagline">Sr. Software Engineer in San Francisco, CA.</p>
			    </div>
			  </header>
			  <Profile images={images} css_images={css_images} />
				<Filters toggleButtons={this.toggleFilterButtons} filterClick={this.onFilterClick} isDesktop={isDesktop} isHidden={isHidden} filter={this.state.filter}/>
				<ProjectList projects={projects} images={images} css_images={css_images} filter={this.state.filter} />
				<footer className="clear">
			    <div className="offset">
			      <p id="copyright">&copy; Copyright <span id="year">{currentYear}</span> Brittany D. Miller</p>
			    </div>
			  </footer>
			  <script type="text/javascript" src="js/main.js"></script>
			</div>
		);
	}
}

export default App;