import React, { Component } from 'react';
import './notify.sass';

class Notify extends Component {
  render() {
    return (
      <div role="alert" aria-live="assertive" aria-atomic="true" id="commtoast" className="toast" data-autohide="false">
        <div className="toast-header">
          <svg
            className=" rounded mr-2"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
          >
            <rect fill="#007aff" width="100%" height="100%" />

          </svg>
          <strong className="mr-auto">{this.props.title}</strong>
          <small>11 mins ago</small>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">
          {this.props.mess}
        </div>
      </div>
    );
  }
}
export default Notify;
