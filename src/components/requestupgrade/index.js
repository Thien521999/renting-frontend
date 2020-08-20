import React, { Component } from 'react';
import RequestItem from './requestItem';

class RequestUpgrade extends Component {
  render() {
    const datas = this.props.data;
    const component = datas.map((data, index) => <RequestItem data={data} key={index} />);
    return (
      <div className="mana_user">
        <div className="header-mana"><b>YÊU CẦU NÂNG CẤP TÀI KHOẢN</b></div>
        <div className="items_user">
          {component}
        </div>
      </div>
    );
  }
}
export default RequestUpgrade;
