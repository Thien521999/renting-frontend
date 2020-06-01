import React from 'react';
import Post from '../../components/post';

class Home extends React.Component {
    render() {
        return(
            <div className="container d-flex justify-content-center" style={{width: 100 + "vw", height: 100 + "vh"}}>
                <Post />

            </div>
        )
    }
}

export default Home;