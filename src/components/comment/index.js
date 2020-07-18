import React, { Component } from 'react';
//import 'bootstrap'
//import './navigationbar.sass'
//import {Link} from 'react-router-dom'
import './comment.sass'

class Comment extends Component {
    render() {
        return (
            <div className="container d-flex pt-5 justify-content-center t">
                <div className="card align-self-center pl-3 pt-3 pr-3">
                    <div class="input-group mb-3 mr-3">
                        <input type="text" class="form-control" placeholder="viết comment..." aria-label="viết comment..." aria-describedby="basic-addon2" />
                        <div class="input-group-append">
                            <button class="input-group-text btn btn-danger" type="button">Gửi</button>
                        </div>
                    </div>
                    <div>
                        mô tả đúng 
                    </div>
                </div>
            </div>
        );
    }
}
export default Comment;