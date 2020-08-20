import React, { Component } from 'react';
import './mana_user.sass';
import UserItem from './UserItem';

class ManageUser extends Component {
  render() {
    const datausers = this.props.data;
    const component = datausers.map((data, index) => <UserItem data={data} key={index} />);
    return (
      <div className="mana_user">
        <div className="header-mana"><b>QUẢN LÝ NGƯỜI DÙNG</b></div>
        <div className="items_user">
          {component}
        </div>
      </div>
    );
  }
}
export default ManageUser;
