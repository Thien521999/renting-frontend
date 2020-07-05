import React from 'react';
import Navigationbar from '../../components/navigationbar';
import Post from '../../components/post';
import Footer from '../../components/footer';

class Home extends React.Component {
    render() {
        return(
            <div>
                
                <Navigationbar></Navigationbar>
                <Post/>
                <Post/>
                <Post/>
                <Footer></Footer>
            </div>
            
        )
    }
}

export default Home;