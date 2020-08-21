import React from 'react';
// import Navigationbar from '../../components/navigationbar';
import { connect } from 'react-redux';
import Post from '../../components/post';
import getdatasearch from './services/getdatasearch';
// import { fetchReset } from '../detail/store/detailSlice';
import Loading from '../../components/loading';

class Search extends React.Component {
  componentDidMount =() => {
    const keyword = this.props.location.query;
    console.log(keyword);
    this.props.dispatch(getdatasearch(keyword));
  }

  // componentWillUpdate=() => {
  //   const { keyword } = this.props.match.params;
  //   this.props.dispatch(getdatasearch(keyword));
  // }

  render() {
    // this.props.ResetDetail();
    const { data } = this.props;
    let component;
    if (data.length > 0) {
      component = data.map((any, index) => <Post key={index} data={any} />);
    } else {
      component = <div className="notfound">không tìm thấy kết quả nào</div>;
    }

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
