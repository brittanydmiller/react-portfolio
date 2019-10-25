import React, {Component} from 'react';
import TechList from './TechList';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      photoIndex: 0
    }
    this.openLightbox = this.openLightbox.bind(this);
  }

  openLightbox(event) {
    event.preventDefault();
    this.setState({ isOpen: true });
  }

  render(){
    const { photoIndex, isOpen } = this.state;
    const images = this.props.gallery_images
    
    return (
      <div id={this.props.id} className={`item bg-lightest-blue dib br3 pa3 ma2 grow bw2 shadow-5 ${this.props.classes}`}>
        <div className="offset">
          <div>
            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </div>
          <a href={this.props.namelink} target="_blank" rel='noreferrer noopener' onClick= { !!images ? (e) => { this.openLightbox(e) } : undefined }>
            <img src={this.props.thumb} alt={this.props.thumbalt} title={this.props.thumbtitle} width="200px" height="200px"  />
          </a>
          <div className="caption">
            <a href={!!this.props.namelink ? this.props.namelink : undefined } target="_blank" rel="noreferrer noopener" onClick= { !!images ? (e) => { this.openLightbox(e) } : undefined }>
              {this.props.name}
            </a>
            <p className="descrip">{this.props.descr}</p>
            <TechList techs={this.props.techs} css_images={this.props.css_images} />
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
