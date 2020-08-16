import React from 'react';
// import Navigationbar from '../../components/navigationbar';
import './home.sass';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import Post from '../../components/post';
import services from './service/sv_home';
import { fetchReset } from '../detail/store/detailSlice';
import Loading from '../../components/loading';

class Home extends React.Component {
    componentWillMount = () => {
      this.props.dispatch(services());
      this.props.dispatch(fetchReset());
    }

componentDidMount=() => {
  // this.notify();
}

    notify=() => {
      toast.success('🦄 đăng nhập thành công !', {
        position: toast.POSITION.TOP_CENTER
      });
    }

    render() {
      // this.props.ResetDetail();

      const { data } = this.props;
      const component = data.map((any, index) => <Post key={index} data={any} />);
      return (
        <div className="HomePage">
          {this.props.loading ? <Loading /> : <div />}
          {component}
        </div>

      );
    }
}
const mapStateToProps = state => ({
  data: state.home.data,
  user: state.user.status,
  loading: state.home.loading
});

export default connect(mapStateToProps)(Home);
