import React, { Component } from 'react';
import { BsFillPersonCheckFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import upgrade from './services/upgrade';

class RequestItem extends Component {
  upgrade= data => {
    const userUpgrade = {
      ...data,
      role: 1
    };
    console.log(userUpgrade);
    this.props.dispatch(upgrade(userUpgrade));
    alert('Nâng cấp thành công');
  }

  render() {
    return (
      <div>

        <div className="info_item">
          <div>
            <BsFillPersonCheckFill />
            <span>
              {this.props.data.email}
            </span>
          </div>
          <button type="button" onClick={() => this.upgrade(this.props.data)} className="btn">Nâng cấp</button>
        </div>
        <hr />
      </div>
    );
  }
}
export default connect(null)(RequestItem);
