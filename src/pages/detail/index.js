import React, { Component } from 'react';
import Navigationbar from '../../components/navigationbar';

//import './sign_in.sass'
//import SigninForm from './SigninForm';
//import './navigationbar.sass'
//import {Link} from 'react-router-dom'

class Detail extends Component {
    render() {
        return (
            
            <div>
                <Navigationbar></Navigationbar>
                <div className="col-md-7">
                            <div id="carousel" className="card-block carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel" data-slide-to="0" className="active"/>
                                    <li data-target="#carousel" data-slide-to="1"/>
                                    <li data-target="#carousel" data-slide-to="2"/>
                                </ol>

                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src="https://www.livingspaces.com/globalassets/images/inspiration/boho_livingroom_250750_1.jpg" className="d-block" alt="property"/>
                                    </div>

                                    <div className="carousel-item">
                                        <img src="https://www.livingspaces.com/globalassets/images/blog/2018/12/1214_budget_living_room_square.jpg" className="d-block" alt="property"/>
                                    </div>

                                    <div className="carousel-item">
                                        <img src="https://www.livingspaces.com/globalassets/images/inspiration/boho_livingroom_250750_1.jpg" className="d-block" alt="property"/>
                                    </div>

                                    <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"/>
                                    </a>

                                    <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"/>
                                    </a>
                                </div>
                            </div>
                        </div>
            </div>
        );
    }
}
export default Detail;