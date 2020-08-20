import React, { Component } from 'react';
import './imageitems.sass';
import { BsFillXCircleFill } from 'react-icons/bs';
import { connect } from 'react-redux';
import { deleteByIndex } from '../uploadimage/store/uploadImageSlice';

class ImageItems extends Component {
  ondelete=id => {
    console.log('xóa');
    console.log(id);
    this.props.dispatch(deleteByIndex(id));
  }

  render() {
    return (
      <div className="imageitems">
        <BsFillXCircleFill onClick={() => this.ondelete(this.props.id)} />
        <img src={this.props.link} alt="" />
      </div>
    );
  }
}
export default connect(null)(ImageItems);
