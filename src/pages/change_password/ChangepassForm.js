import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class ChangepassForm extends Component {
    render() {
        return (
            <div class="card text-left">
            <form>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-4"></div>
                        <div className="col-4">Đăng Nhập</div>
                    </div>
                    <div className="row mt-2">

                        <div className="col-12">
                            <div>Username</div>
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div>

                    </div>
                    <div></div>
                    <div className="row mt-4">

                        <div className="col-12">
                            <div>Password</div>
                            <input type="password" class="form-control" id="inputEmail3" placeholder="password" />
                        </div>
                    </div>

                    <div className="row mt-4">

                        <div className="col-12">
                            <div>Retype password</div>
                            <input type="password" class="form-control" id="inputEmail3" placeholder="password" />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 mt-2 mb-2">
                            <Link to="/forget_password">Bạn quên mật khẩu?</Link>
                        </div>
                    </div>
                    <div className="row mt-4 mb-4">
                        <div className="col-6">
                            <button name="" id="" class="btn btn-primary" type="submit">Đổi mật khẩu</button>
                        </div>
                        
                    </div>
                </div>
            </form>
            </div>
        );
    }
}
export default ChangepassForm;