import React, { Component } from 'react';

import './slide.sass';

class SlideImage extends Component {
  render() {
    const images = this.props.Images;
    let compo;
    const { length } = images;
    const imageslide = images.map((image, index) => {
      if (index === length - 1) {
        compo = (
          <div className="carousel-item active" key={index}>
            <img src={image} className="d-block imgsilde" alt="property" />
          </div>
        );
      } else {
        compo = (
          <div className="carousel-item" key={index}>
            <img src={image} className="d-block imgsilde" alt="property" />
          </div>
        );
      }
      return (
        compo
      );
    });
    return (
      <div>
        <div className="container d-flex pt-5 justify-content-center">
          <div className="card align-self-center">
            <div className="row align-items-start">
              <div className="col-md-12">
                <div id="carousel" className="card-block carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active" />
                    <li data-target="#carousel" data-slide-to="1" />
                    <li data-target="#carousel" data-slide-to="2" />
                  </ol>
                  <div className="carousel-inner">

                    {imageslide}

                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                    </a>
                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SlideImage;
