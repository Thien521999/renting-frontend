import React from 'react';
import Navigationbar from '../../components/navigationbar';
<<<<<<< HEAD
=======
import Post from '../../components/post';
>>>>>>> 8b3fb374171395f83de9a26dee0ed8f45d293ac5

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