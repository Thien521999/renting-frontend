import React, { Component } from 'react';
import './userItem.sass';
import { BsFillPersonCheckFill } from 'react-icons/bs';

class UserItem extends Component {
  render() {
    return (
      <div>

        <div className="info_item">
          <div>
            <BsFillPersonCheckFill />
            <span>{this.props.data.email}</span>
          </div>
          <button type="button" className="btn btn-outline-success">chi tiết</button>

        </div>
        <hr />
      </div>
    );
  }
}
export default UserItem;
