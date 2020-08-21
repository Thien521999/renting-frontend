import React, { Component } from 'react';
import 'bootstrap';
import './navigationbar.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeKey } from '../../pages/search/store/searchSlice';
import getdatasearch from '../../pages/search/services/getdatasearch';
import { fetch_exit, fetch_displayMenu } from '../../pages/sign_in/store/signInSlice';
import Menu from './Menu';

class Navigationbar extends Component {
    changekey=e => {
      const keyword = e.target.value;
      // console.log(keyword);
      this.props.changeKey(keyword);
    }

    search=keyword => {
      this.props.search(keyword);
    }

    logout = () => {
      this.props.exit();
    }

    clickMenu=() => {
      this.props.setDisPlayMenu();
    }

    render() {
      const isNotLogin = (
        <span>
          <Link to="/login"><button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Đăng nhập</button></Link>
          <Link to="/logup"><button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Đăng kí</button></Link>
        </span>
      );
      const islogin = (
        <span>
          <span>
            <Link to="/change_password"><button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Đổi mật khẩu</button></Link>
            <Link to="/" className="btn btn-outline-light my-2 my-sm-0 mr-2" onClick={this.logout}>Đăng xuất</Link>
            <button className="btn btn-outline-light my-2 my-sm-0 mr-2 btn_user" onClick={this.clickMenu} />
          </span>
        </span>
      );
      const { user } = this.props;
      // console.log(user);
      let compo;
      switch (user.status) {
        case 200:
          compo = islogin;
          break;

          // chưa sửa lỗi
        case 404:
          compo = isNotLogin;
          break;
        default:
          compo = isNotLogin;
          break;
      }
      const { displayMenu } = this.props.user;
      let menu;
      if (displayMenu) {
        menu = (
          <div id="menu">
            <Menu />
          </div>
        );
      } else {
        menu = <div />;
      }
      return (
        <div id="Navigation">
          <nav className="navbar navbar-expand-lg navbar-dark bg-primary navigation">
            <Link className="navbar-brand" to="/">TRANG CHỦ</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="#">
                    CHUNG CƯ
                    {' '}
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">NHÀ TRỌ</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#">NHÀ RIÊNG</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/user">THÔNG TIN</Link>
                </li>
              </ul>
              <div className="form-inline">
                <input className="form-control mr-sm-2" onChange={this.changekey} type="search" placeholder="Search" aria-label="Search" />
                <Link className="btn btn-outline-light my-2 my-sm-0 mr-5" type="submit" onClick={() => this.search(this.props.keyword)} to={`/search/keyword=${this.props.keyword}`}>Search</Link>
              </div>
              {compo}

            </div>
          </nav>
          {menu}

        </div>
      );
    }
}

const mapStateToProps = state => ({
  user: state.user,
  keyword: state.search.keyword
});

const mapDispatchToProps = dispatch => ({
  exit: () => {
    dispatch(fetch_exit());
  },
  setDisPlayMenu: () => {
    dispatch(fetch_displayMenu());
  },
  changeKey: key => {
    dispatch(changeKey(key));
  },
  search: keyword => {
    dispatch(getdatasearch(keyword));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigationbar);
