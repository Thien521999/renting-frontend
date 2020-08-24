import React, { Component } from 'react';
import './detail.sass';
import { connect } from 'react-redux';
import { BsFillStarFill } from 'react-icons/bs';
import Table from './Table';
import services from './services/sv-detail';
import votepost from './services/votepost';

class Detail extends Component {
  componentDidUpdate = () => {
    const a = document.getElementById('hahaha');
    a.innerHTML = this.props.detail.data.description;
  }

  // componentDidMount=()=>{
  //   if()
  // }

  componentWillMount=() => {
    const { id } = this.props.match.params;
    this.props.dispatch(services(id));
  }

  vote=() => {
    let id;
    if (this.props.user.data) {
      id = this.props.user.data.id;
    }
    if (id === undefined) {
      alert('bạn chưa đăng nhập hệ thống');
    } else {
      let data;
      data = this.props.detail.data;
      const votes = [];
      data.vote.map(vote => votes.push(vote));
      // let votee=votes
      console.log(votes);
      const index = votes.indexOf(id);
      if (index !== -1) {
        votes.splice(index, 1);
        console.log(votes);
      } else {
        console.log(votes);
        votes.push(id);
      }
      const dataupdate = {
        ...data,
        vote: votes,
      };
      this.props.dispatch(votepost(dataupdate));
    }
  }

  render() {
    console.log(this.props.detail);
    const { status } = this.props.detail;
    let component;
    let slide = <div>Không có dữ liệu</div>;

    if (status === 200) {
      let id = -1;
      if (this.props.user.status === 200) {
        id = this.props.user.data.id;
      }
      const { vote } = this.props.detail.data;
      console.log(vote);
      let voted;
      if (vote.indexOf(id) !== -1) {
        voted = true;
      } else {
        voted = false;
      }
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

          <div className="point-evaluate">
            {voted ? <BsFillStarFill onClick={this.vote} id="start-voted" /> : <BsFillStarFill onClick={this.vote} id="start-notvote" />}
            {' '}
            <span className="point">{infor.vote.length}</span>
          </div>
        </div>
      );
    } else {
      component = <div>loading</div>;
    }
    return (
      <div className="detailPage">
        {component}

      </div>
    );
  }
}
const mapStateToProps = state => ({
  detail: state.detail,
  user: state.user
});

export default connect(mapStateToProps)(Detail);
