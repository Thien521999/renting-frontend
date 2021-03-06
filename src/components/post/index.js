import './post.sass';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BsFillLightningFill, BsFillDropletFill } from 'react-icons/bs';
import { FaBtc, FaLinkedinIn } from 'react-icons/fa';

import services from './service/sv_post';

class Post extends React.Component {
  Detail = id => {
    const { dispatch } = this.props;
    dispatch(services(id));
  }

  render() {
    const { data } = this.props;
    const { images } = data;

    const slide = images.map((image, index) => {
      if (index === 0) {
        return (
          <div className="carousel-item active" key={index}>
            <img src={image} className="d-block" alt="property" />
          </div>
        );
      }

      return (
        <div className="carousel-item" key={index}>
          <img src={image} className="d-block" alt="property" />
        </div>
      );
    });

    const compo = (
      <div className="container d-flex pt-5 justify-content-center">
        <div className="card align-self-center">
          <div className="row align-items-start">
            <div className="col-md-5">
              <div className="card-block">
                <h4 className="card-title"><b>{data.name}</b></h4>
                <div className="card-text card-description" id={data.id}>
                  <div className="mt-2">
                    <FaLinkedinIn />
                    {':   '}
                    {data.address}
                  </div>
                  <div className="mt-2">
                    <FaBtc />
                    {':   '}
                    {data.price}
                    vnđ
                  </div>
                  <div className="mt-2">
                    <BsFillLightningFill />
                    {':   '}
                    {data.electric}
                    vnđ
                  </div>
                  <div className="mt-2">
                    <BsFillDropletFill />
                    {':   '}
                    {data.water}
                    vnđ
                  </div>
                </div>
                <br />
                <Link to={`/detail/id=${data.id}`} className="mt-auto btn">Read more</Link>
              </div>
            </div>

            <div className="col-md-7">
              <div id="carousel" className="card-block carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#carousel" data-slide-to="0" className="active" />
                  <li data-target="#carousel" data-slide-to="1" />
                  <li data-target="#carousel" data-slide-to="2" />
                </ol>

                <div className="carousel-inner">
                  {slide}

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
    );

    return (
      <div>
        {compo}
      </div>
    );
  }
}
const mapStateToProp = state => ({
  check: state.detail.status
});
export default connect(mapStateToProp, null)(Post);
