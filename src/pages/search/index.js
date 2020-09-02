import React from 'react';
// import Navigationbar from '../../components/navigationbar';
import { connect } from 'react-redux';
import Post from '../../components/post';
import getdatasearch from './services/getdatasearch';
// import { fetchReset } from '../detail/store/detailSlice';
import Loading from '../../components/loading';

class Search extends React.Component {
  componentWillMount = () => {
    let keyword = this.props.location.query;
    if (keyword) {
      console.log(keyword);
    } else {
      keyword = localStorage.getItem('keyword');
    }
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
    if (this.props.loading) {
      component = <Loading />;
    } else if (data.length > 0) {
      component = data.map((any, index) => <Post key={index} data={any} />);
    } else {
      component = <div className="notfound">không tìm thấy kết quả nào</div>;
    }

    return (
      <div className="HomePage">
        {component}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  data: state.search.data,
  loading: state.search.loading
});

export default connect(mapStateToProps)(Search);
