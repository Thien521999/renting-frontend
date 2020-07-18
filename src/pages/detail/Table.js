import React, { Component } from 'react';
import './table.sass'
class Table extends Component {
    render() {
        let table1 = <div>
            <table className="table TableCT">
                <thead className="thead-dark">
                    <tr>
                        <th className="col">Thông tin</th>
                        <th className=""></th>
                        <th className="col"></th>
                        <th className=""></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Địa chỉ</th>
                        <td>170 - Vũ Huy Tấn - Bình Thạnh - TPHCM</td>
                        <th scope="row">Giá thuê</th>
                        <td>10.000.000đ</td>
                    </tr>
                    <tr>
                        <th scope="row">Giá nước</th>
                        <td>50.0000đ/m3</td>
                        <th scope="row">Giá điện</th>
                        <td>4000đ/KW</td>
                    </tr>
                    <tr>
                        <th scope="row">Liên hệ</th>
                        <td>0123456789</td>
                        <th scope="row">Chủ trọ</th>
                        <td>Anh kha</td>
                    </tr>
                </tbody>
            </table>
        </div>

        let table2 = <div>
            <table className="table TableCT">
                <thead className="thead-dark">
                    <tr>
                        <th className="col">Thông tin</th>
                        <th className=""></th>
                        <th className="col"></th>
                        <th className=""></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">Địa chỉ</th>
                        <td>170 - Vũ Huy Tấn - Bình Thạnh - TPHCM</td>
                        <th scope="row">Giá thuê</th>
                        <td>10.000.000đ</td>
                    </tr>
                    <tr>
                        <th scope="row">Giá nước</th>
                        <td>50.0000đ/m3</td>
                        <th scope="row">Giá điện</th>
                        <td>4000đ/KW</td>
                    </tr>
                    <tr>
                        <th scope="row">Liên hệ</th>
                        <td>0123456789</td>
                        <th scope="row">Chủ trọ</th>
                        <td>Anh kha</td>
                    </tr>
                </tbody>
            </table>
        </div>
        let table=table2;
        window.addEventListener('resize', ResizeWindow);

        function ResizeWindow(){
            let width = window.screen.width;
            console.log(width);
            if (width < 1000) {
                table = table1
            }
            else {
                table = table2

            }
        }
        
        return (
            <div>
                {table}
            </div>
        );
    }
}
export default Table;