import React, { Component } from 'react';
import './detail.sass';
import { connect } from 'react-redux';
import Table from './Table';
import services from './services/sv-detail';

class Detail extends Component {
  componentDidUpdate = () => {
    const a = document.getElementById('hahaha');
    a.innerHTML = this.props.detail.data.description;
  }

  componentWillMount=() => {
    const { id } = this.props.match.params;
    this.props.dispatch(services(id));
  }

  render() {
    console.log(this.props.detail);
    const { status } = this.props.detail;
    let component;
    let slide = <div>Không có dữ liệu</div>;
    if (status === 200) {
      const infor = this.props.detail.data;
      const { images } = infor;

      slide = images.map((any, index) => {
        let compo;
        if (index === 0) {
          compo = (
            <div className="carousel-item active" key={index}>
              <img src={any} className="d-block" alt="property" />
            </div>
          );
        } else {
          compo = (
            <div className="carousel-item" key={index}>
              <img src={any} className="d-block" alt="property" />
            </div>
          );
        }
        return compo;
      });

      component = (
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

          <div className="container">
            <div className="row">
              <div className="col-1" />
              <div className="col-10">
                <Table data={infor} />
              </div>
            </div>
            <div className="row">
              <div className="col-1"> </div>
              <div className="col-10 ml-2">
                <div id="hahaha"> </div>
              </div>
            </div>
          </div>

        </div>
      );
    } else {
      component = <div>loading</div>;
    }
    return (
      <div>
        {component}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  detail: state.detail,
});

export default connect(mapStateToProps)(Detail);
