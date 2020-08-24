import React, { Component } from 'react';
// import 'bootstrap'
// import './navigationbar.sass'
// import {Link} from 'react-router-dom'
import './footer.sass';

class Footer extends Component {
  render() {
    return (
      <footer className="page-footer font-small blue pt-4">

        <div className="footer-copyright text-center py-3 endfooter">
          Trần Nhựt Kha | Nguyễn Đăng Hưng
        </div>

      </footer>
    );
  }
}
export default Footer;
