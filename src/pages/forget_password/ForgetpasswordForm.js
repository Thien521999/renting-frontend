import React, { Component } from 'react';
class ForgetpasswordForm extends Component {
    render() {
        return (
            <div className="card text-left">
                <form className="signinForm">
                    <div className="container">
                        <div className="row mt-4">
                            
                            <div className="col-12" align="center">Quên mật khẩu</div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-12">
                                <div>Username</div>
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                            </div>
                        </div>
                        
                        <div className="row mt-4 mb-4">
                            
                            <div className="col-6">
                                <button name="" id="" className="btn btn-primary" type="submit">Reset</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}
export default ForgetpasswordForm;