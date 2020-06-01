import React, { Component } from 'react';


class ForgetpasswordForm extends Component {
    render() {
        return (
            <form>
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-3"></div>
                        <div className="col-6" align="center">Quên mật khẩu</div>
                    </div>
                    <div className="row mt-2">

                        <div className="col-12">
                            <div>Email</div>
                            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    
                    <div className="row mt-4 mb-4">
                        <div className="col-6">
                            <button name="" id="" class="btn btn-primary" type="submit">Reset</button>
                        </div>
                        
                    </div>
                </div>
            </form>
        );
    }
}
export default ForgetpasswordForm;