import React from 'react';
// import Navigationbar from '../../components/navigationbar';
import './home.sass';
import { connect } from 'react-redux';
import Post from '../../components/post';
import services from './service/sv_home';
import { fetchReset } from '../detail/store/detailSlice';

class Home extends React.Component {
    componentWillMount = () => {
      this.props.dispatch(services());
      this.props.dispatch(fetchReset());
    }

    render() {
      // this.props.ResetDetail();
      const { data } = this.props;
      const component = data.map((any, index) => <Post key={index} data={any} />);
      return (
        <div className="HomePage">
          {component}
        </div>

      );
    }
}
const mapStateToProps = state => ({
  data: state.home.data
});

export default connect(mapStateToProps)(Home);
