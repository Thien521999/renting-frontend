import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cardpost.sass';

class CardPost extends Component {
  render() {
    const { data } = this.props;
    const { id } = data;
    // console.log(data);
    return (
      <div className="card cardpost">
        <div className="imgpost">
          <img src={data.images[0]} className="card-img-top imgcardpost" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
          <div className="btn-userpost">
            <Link type="button" to={{ pathname: '/update_post', query: id }} className="btn btn-outline-success">Cập nhật</Link>
            <Link type="button" to={`/detail/id=${id}`} className="btn btn-outline-warning">Chi tiết</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default CardPost;
