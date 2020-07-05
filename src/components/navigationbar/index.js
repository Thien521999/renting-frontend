import React, { Component } from 'react';
import 'bootstrap'
import './navigationbar.sass'
import {Link} from 'react-router-dom'

class Navigationbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <Link className="navbar-brand" to="/">Trang chủ</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Đăng nhập</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">About</Link>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light my-2 my-sm-0 mr-5" type="submit">Search</button>
                    </form>
                    <Link to="/login"><button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Đăng nhập</button></Link>
                    <Link to="/logup"><button className="btn btn-outline-light my-2 my-sm-0 mr-2" type="submit">Đăng kí</button></Link>
                    
                </div>
            </nav>
        );
    }
}
export default Navigationbar;