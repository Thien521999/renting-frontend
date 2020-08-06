import React from 'react';
//import Navigationbar from '../../components/navigationbar';
import Post from '../../components/post';
import { connect } from 'react-redux';
import services from './service/sv_home'

class Home extends React.Component {
    
    componentWillMount=()=>{
        this.props.dispatch(services());
    }
    render() {
        const datas = this.props.data;
        let component = datas.map((data,index)=>{
            return <Post key={index} data={data}></Post>
        })
        return(
            <div>
                {component}
            </div>
            
        )
    }
}
const mapStateToProps=state=>{
    return {
        data: state.home.data
    }
}
export default connect(mapStateToProps)(Home);