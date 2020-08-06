import './post.sass';
import React from 'react';
import {Link} from 'react-router-dom';
class Post extends React.Component {
    render() {
        const data = this.props.data;
        const images = data.images;
        const slide = images.map((image,index)=>{
            if(index===0)
            {
                return <div className="carousel-item active" key={index}>
                <img src={image} className="d-block" alt="property"/>
            </div>
            }
            else
            {
                return <div className="carousel-item" key={index}>
                <img src={image} className="d-block" alt="property"/>
            </div>
            }
        })
        return(
            <div className="container d-flex pt-5 justify-content-center">
                <div className="card align-self-center">
                    <div className="row align-items-start">
                        <div className="col-md-5">
                            <div className="card-block">
                                <h4 className="card-title">Cho thuê trọ</h4>
                                <p className="card-text">{data.name}</p>
                                <br></br>
                                <Link to="/detail" className="mt-auto btn btn-primary">Read more</Link>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div id="carousel" className="card-block carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#carousel" data-slide-to="0" className="active"/>
                                    <li data-target="#carousel" data-slide-to="1"/>
                                    <li data-target="#carousel" data-slide-to="2"/>
                                </ol>

                                <div className="carousel-inner">
                                    {slide}

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
                </div>
            </div>
        )
    }
}

export default Post;