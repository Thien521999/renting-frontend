import React, { Component } from 'react';
import './sign_in.sass'
import SinginForm from './SigninForm';
//import './navigationbar.sass'
//import {Link} from 'react-router-dom'

class Sing_in extends Component {
    render() {
        return (
            <div class="container mt-5">
                <div class="row">
                    <div class="col-4">
                    </div>
                    <div class="col-4">
                        <div class="card text-left">
                            <SinginForm/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Sing_in;