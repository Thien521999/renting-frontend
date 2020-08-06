import React from 'react';
// import Navigationbar from '../../components/navigationbar';
import { connect } from 'react-redux';
import Post from '../../components/post';
import services from './service/sv_home';

class Home extends React.Component {
    componentWillMount = () => {
      this.props.dispatch(services());
    }

    render() {
      const { data } = this.props;
      const component = data.map((any, index) => <Post key={index} data={any} />);
      return (
        <div>
          {component}
        </div>

      );
    }
}
const mapStateToProps = state => ({
  data: state.home.data
});
export default connect(mapStateToProps)(Home);
