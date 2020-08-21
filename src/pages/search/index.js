import React from 'react';
// import Navigationbar from '../../components/navigationbar';
import { connect } from 'react-redux';
import Post from '../../components/post';
import getdatasearch from './services/getdatasearch';
// import { fetchReset } from '../detail/store/detailSlice';
import Loading from '../../components/loading';

class Search extends React.Component {
  // componentDidMount =() => {
  //   const { keyword } = this.props.match.params;
  //   this.props.dispatch(getdatasearch(keyword));
  // }

  // componentWillUpdate=() => {
  //   const { keyword } = this.props.match.params;
  //   this.props.dispatch(getdatasearch(keyword));
  // }

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
  data: state.search.data
});

export default connect(mapStateToProps)(Search);
