import React, { Component } from 'react';
import ImageItems from '../imageitems';
import './listimage.sass';

class ListImage extends Component {
  render() {
    const datas = this.props.data;
    const component = datas.map((data, index) => <ImageItems link={data} id={index} key={index} />);
    return (
      <div className="ul-listImage">
        {component}
      </div>
    );
  }
}
export default ListImage;
