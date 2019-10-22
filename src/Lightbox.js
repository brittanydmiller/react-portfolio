import React, { Component } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

export default class LightboxListener extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    const images = this.props.gallery_images;
    const link = this.props.link;
    const thumb = this.props.thumb;
    const alt = this.props.alt;
    const title = this.props.title;

    return (
      <div>
        <div onClick= { !!images ? (e) => 
          {
            e.preventDefault(); 
            this.setState({ isOpen: true })
          }
          : false
        }>
          <a href={link} rel={`noreferrer noopener ${ !!images ? 'lightbox' : ''}`} >
            <img src={thumb} alt={alt} title={title} width="200px" height="200px" />
          </a>
        </div>
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
    );
  }
}