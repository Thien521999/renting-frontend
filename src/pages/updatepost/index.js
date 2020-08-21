import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import InforRengting from '../../components/inforrenting';
// import EditorConvertToHTML from '../../components/edittor';
import UploadImage from '../../components/uploadimage';
// import SlideImage from '../../components/slideimage';
import services from '../upload-post/services/upload_post';
import Loading from '../../components/loading';
import ListImage from '../../components/listimage';
import getPost from './services/getPost';
import InforUpdate from '../../components/inforupdate';
import { fetch_editorChange } from '../../components/edittor/store/edtSlice';
import EditorUpdate from '../../components/editorupdate';

class UpdatePost extends Component {
  componentWillMount=() => {
    console.log('willmount');
    const { id } = this.props.match.params;
    this.props.dispatch(getPost(id));
  }

    uploadPost = () => {
      const images = this.props.listImage;
      const editor = this.props.EditorState;
      const infor = this.props.infor.data;
      if (images === undefined || editor === undefined || infor === undefined) {
        alert('nhập đầy đủ thông tin');
      } else {
        this.props.dispatch(services(infor.name, editor, infor.price, infor.address, infor.area, infor.water, infor.electric, this.props.user.data.id, images));
      }
    }

    componentDidUpdate=() => {
      // console.log('có gọi hàm này');
      console.log(this.props.data);
      this.props.dispatch(fetch_editorChange(this.props.data.description));
    }

    render() {
      console.log(this.props.loading);
      let component;
      if (this.props.loading) {
        component = <Loading />;
      } else {
        // console.log(this.props.data);
        component = (
          <div className="EditorText">
            <div className="container">
              <div className="row">
                <div className="col-5">
                  <InforUpdate data={this.props.data} />
                </div>
                <div className="col-7">
                  <UploadImage />
                  <ListImage data={this.props.data.images} />
                </div>
                <div />
              </div>
              <div className="row">
                <div className="col-12">
                  <EditorUpdate edtState={this.props.EditorState} />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-4">
                  <button onClick={this.uploadPost} name="" id="btnPost" className="btn btn-primary" type="button" value="">Đăng bài</button>
                </div>
              </div>
              <div />
            </div>
          </div>
        );
        // console.log(this.props.data.description);
      }
      if (this.props.user.data.role === 0) { component = <Redirect push to="/notfound" />; }
      // if (this.props.upload.status === 201) {
      //   alert('đăng bài thành công');
      // }
      // if (this.props.user.status !== 200) { component = <Redirect push to="/home" />; }

      return (
        <div>
          {component}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  // listImage: state.update.dataimage,
  // EditorState: state.edtState.editorState,
  // infor: state.inforRenting,
  user: state.user,
  // loading: state.uploadpost.loading,
  // upload: state.uploadpost,
  // dataImage: state.uploadimage.data
  data: state.updatePost.data,
  loading: state.updatePost.loading,
  EditorState: state.edtState.editorState,
});
export default connect(mapStateToProps)(UpdatePost);
