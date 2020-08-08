import React, { Component } from 'react';
import './detail.sass';
import { connect } from 'react-redux';
import Table from './Table';

// import Comment from'./../../components/comment'

// import './sign_in.sass'
// import SigninForm from './SigninForm';
// import './navigationbar.sass'
// import {Link} from 'react-router-dom'
/*
<div>
                <div className="container d-flex pt-5 justify-content-center">
                    <div className="card align-self-center">
                        <div className="row align-items-start">
                            <div className="col-md-7">
                                <div id="carousel" className="card-block carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel" data-slide-to="0" className="active" />
                                        <li data-target="#carousel" data-slide-to="1" />
                                        <li data-target="#carousel" data-slide-to="2" />
                                    </ol>

                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img src="https://www.livingspaces.com/globalassets/images/inspiration/boho_livingroom_250750_1.jpg" className="d-block" alt="property" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="https://www.livingspaces.com/globalassets/images/blog/2018/12/1214_budget_living_room_square.jpg" className="d-block" alt="property" />
                                        </div>

                                        <div className="carousel-item">
                                            <img src="https://www.livingspaces.com/globalassets/images/inspiration/boho_livingroom_250750_1.jpg" className="d-block" alt="property" />
                                        </div>

                                        <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                                        </a>

                                        <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-5">
                                <div className="card-block lineCart">
                                    <div>
                                        <b>Phòng trọ Bình Thạnh</b>
                                    </div>
                                    <table className="tableCart">

                                        <tr className="lineCart">
                                            <td><b>Địa chỉ</b></td>
                                            <td>10 Vũ Huy Tấn Bình Thạnh TPHCM</td>

                                        </tr>
                                        <tr className="lineCart">
                                            <td><b>Giá thuê</b></td>
                                            <td>7.000.000đ/thang</td>
                                        </tr>
                                        <tr className="lineCart">
                                            <td><b>Diện tích</b></td>
                                            <td>40m2</td>
                                        </tr>
                                        <tr className="lineCart">
                                            <td><b>Điện</b></td>
                                            <td>3500đ/KW</td>
                                        </tr>
                                        <tr className="lineCart">
                                            <td><b>Nước</b></td>
                                            <td>50.000đ/ng</td>
                                        </tr>
                                        <tr className="lineCart">
                                            <td><b>Liên hệ</b></td>
                                            <td>0123456789</td>
                                        </tr>
                                        <tr className="lineCart">
                                            <td><b>Chủ</b></td>
                                            <td>Trần Nhựt Kha</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

                <div className="container d-flex pt-5 justify-content-center">

                    <div className="card align-self-center pl-3 pt-3 pb-4">

                        CHO THUÊ CĂN HỘ MINI CAO CẤP FULL NỘI THẤT GIÁ CHỈ TỪ 3,5 TRIỆU.
                        <br></br>
                        - Căn hộ mới xây, sạch sẽ, thoáng mát, tiện nghi, rất tiện lợi di chuyển đi Q7, Q4, Q2, Q1, Bình Thạnh, siêu thị coopmart, chợ Phú Thuận, gần nhiều bệnh viện, trường học, làng đại học<br></br>
                        - Khu vực an ninh, camera 24/24.<br></br>
                        - Có thang máy 24/24.<br></br>
                        - Có Wifi, cáp tivi đầy đủ.<br></br>
                        - Có hầm giữ xe rộng rãi, có thuê người giữ xe riêng.<br></br>
                        - Có người dọn dẹp hàng tuần, trải nghiệm cảm giác như ở khu chung cư tiện lợi, yên tĩnh học tập và làm việc.<br></br>
                        - Phòng rộng 18m2-25m2…<br></br>
                        - Giờ giấc tự do.<br></br>
                        - Trong phòng sử dụng điện âm tường, full đèn led siêu tiết kiệm điện, bếp riêng, bồn rửa chén, toilet có quạt thông gió chống mùi. Sử dụng thiết bị nhà vệ sinh cao cấp. Toilet và bếp khép kín trong phòng.<br></br>
                        - Sử dụng cửa sắt và cửa nhôm cao cấp, kính cường lực an toàn sang trọng.<br></br>
                        - Phòng đã được trang bị máy lạnh, tủ lạnh, giường, nệm. Có nhiều lựa chọn cho bạn. Hoặc trang bị nội thất theo yêu cầu.<br></br>
                        - Giá 3.500.000₫ - 3.700.000₫ - 3.900.000₫/1 phòng (tuỳ diện tích phòng)<br></br>
                        Đặt Cọc 1 tháng, trả trước 1 tháng. Khi đi báo trước 1 tháng được hoàn trả đủ cọc.
                        Làm hợp đồng 1 năm được giảm 100k/1 tháng tiền phòng.
                        Làm hợp đồng 2 năm được giảm 200k/1 tháng tiền phòng.
                        Đóng tiền phòng 12 tháng được tặng tháng 13
                        Đóng tiền phòng 24 tháng được tặng 03 tháng tiếp theo
                    </div>
                </div>

            </div>
*/
class Detail extends Component {
  componentDidMount = () => {
    this.Description();
  }

  Description=() => {
    const a = document.getElementById('hahaha');
    a.innerHTML = this.props.infor.description;
  }

  render() {
    const { infor } = this.props;
    // const images = [];
    const { images } = infor;
    // this.ditmeno();
    const { status } = this.props;
    let slide = <div>Không có dữ liệu</div>;
    if (status === 200) {
      slide = images.map((any, index) => {
        let compo;
        if (index === 0) {
          compo = (
            <div className="carousel-item active" key={index}>
              <img src={any} className="d-block" alt="property" />
            </div>
          );
        } else {
          compo = (
            <div className="carousel-item" key={index}>
              <img src={any} className="d-block" alt="property" />
            </div>
          );
        }
        return compo;
      });
    }
    return (
      <div>
        <div className="container d-flex pt-5 justify-content-center">
          <div className="card align-self-center">
            <div className="row align-items-start">
              <div className="col-md-12">
                <div id="carousel" className="card-block carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active" />
                    <li data-target="#carousel" data-slide-to="1" />
                    <li data-target="#carousel" data-slide-to="2" />
                  </ol>

                  <div className="carousel-inner">
                    {slide}

                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true" />
                    </a>

                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="container">
          <div className="row">
            <div className="col-1" />
            <div className="col-10">
              <Table data={infor} />
            </div>
          </div>
          <div className="row">
            <div className="col-1"> </div>
            <div className="col-10 ml-2">
              <div id="hahaha"> </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
const mapStateToProps = state => ({
  infor: state.detail.data,
  status: state.detail.status
});

export default connect(mapStateToProps)(Detail);
