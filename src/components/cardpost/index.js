import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cardpost.sass';

class CardPost extends Component {
  render() {
    return (
      <div className="card cardpost">
        <div className="imgpost">
          <img src="https://i.pinimg.com/236x/57/6d/09/576d09ba76fb5e62cafeb79c0151bc42.jpg" className="card-img-top imgcardpost" alt="" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Link to="#" className="btn btn-primary">Go somewhere</Link>
        </div>
      </div>
    );
  }
}
export default CardPost;
