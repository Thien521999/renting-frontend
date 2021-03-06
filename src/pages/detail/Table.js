import React, { Component } from 'react';
import './table.sass';

class Table extends Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    const table2 = (
      <table className="table TableCT">
        <thead className="thead-dark">
          <tr>
            <th className="col">Thông tin</th>
            <th> </th>
            <th className="col"> </th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Địa chỉ</th>
            <td>{data.address}</td>
            <th scope="row">Giá thuê</th>
            <td>{data.price}</td>
          </tr>
          <tr>
            <th scope="row">Giá nước</th>
            <td>{data.water}</td>
            <th scope="row">Giá điện</th>
            <td>{data.electric}</td>
          </tr>

        </tbody>
      </table>
    );
    const table = table2;

    return (
      <div>
        {table}
      </div>
    );
  }
}
export default Table;
