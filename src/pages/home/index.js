import React from 'react';
import Navigationbar from '../../components/navigationbar';
import Post from '../../components/post';

class Home extends React.Component {
    render() {
        return(
            <div>
                <Navigationbar></Navigationbar>
                <Post/>
                <Post/>
                <Post/>
            </div>
            
        )
    }
}

export default Home;