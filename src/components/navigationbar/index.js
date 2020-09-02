import React, { Component } from 'react';
import 'bootstrap';
import './navigationbar.sass';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { changeKey } from '../../pages/search/store/searchSlice';
import getdatasearch from '../../pages/search/services/getdatasearch';
import { fetch_exit, fetch_displayMenu } from '../../pages/sign_in/store/signInSlice';

class Navigationbar extends Component {
  changekey = e => {
    const keyword = e.target.value;
    // console.log(keyword);
    this.props.changeKey(keyword);
  }

  search = keyword => {
    this.props.search(keyword);
  }

  logout = () => {
    this.props.exit();
  }

  clickMenu = () => {
    this.props.setDisPlayMenu();
  }

  render() {
    const isNotLogin = (
      <span>
        <Link to="/login"><button className="btn my-2 my-sm-0 mr-2" type="submit">Đăng nhập</button></Link>
        <Link to="/logup"><button className="btn my-2 my-sm-0 mr-2" type="submit">Đăng kí</button></Link>
      </span>
    );
    const islogin = (
      <span>
        <span>
          <Link to="/change_password"><button className="btn my-2 my-sm-0 mr-2" type="submit">Đổi mật khẩu</button></Link>
          <Link to="/" className="btn my-2 my-sm-0 mr-2" onClick={this.logout}>Đăng xuất</Link>
        </span>
      </span>
    );
    const { user } = this.props;

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

    return (
      <div id="Navigation">
        <nav className="navbar navbar-expand-lg navigation">
          <Link className="navbar-brand" to="/">TRANG CHỦ</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"><BsFillGrid3X3GapFill /></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/user">THÔNG TIN NGƯỜI DÙNG</Link>
              </li>
            </ul>
            <div className="form-inline">
              <input className="form-control mr-sm-2" onChange={this.changekey} type="search" placeholder="Search" aria-label="Search" />
              <Link className="btn my-2 my-sm-0 mr-5" type="submit" onClick={() => this.search(this.props.keyword)} to={{ pathname: `/search?keyword=${this.props.keyword}`, query: this.props.keyword }}>Search</Link>
            </div>
            {compo}
            {/* <Redirect push to="/user" /> */}
          </div>
        </nav>

      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  keyword: state.search.keyword,
  search: state.search.data
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
