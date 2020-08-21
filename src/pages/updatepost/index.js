import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import InforRengting from '../../components/inforrenting';
import EditorConvertToHTML from '../../components/edittor';
import UploadImage from '../../components/uploadimage';
// import SlideImage from '../../components/slideimage';
import services from '../upload-post/services/upload_post';
import Loading from '../../components/loading';
import ListImage from '../../components/listimage';

class UpdatePost extends Component {
    callAPI=async fileupload => {
      const data = new FormData();
      data.append('file', fileupload);
      data.append('upload_preset', 'uploaddemo');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/kh-ng/image/upload',
        {
          method: 'POST',
          body: data
        }
      );
      const f = await res.json();
      return f.secure_url;
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

    render() {
      let component = (
        <div className="EditorText">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <InforRengting />
              </div>
              <div className="col-7">
                <UploadImage />
                <ListImage data={this.props.listImage} />
              </div>
              <div />
            </div>
            <div className="row">
              <div className="col-12">
                <EditorConvertToHTML edtState={this.props.EditorState} />
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
      if (this.props.user.data.role === 0) { component = <Redirect push to="/notfound" />; }
      if (this.props.upload.status === 201) {
        alert('đăng bài thành công');
      }
      if (this.props.user.status !== 200) { component = <Redirect push to="/home" />; }

      return (
        <div>
          {this.props.loading ? <Loading /> : <div />}
          {component}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  listImage: state.uploadimage.dataimage,
  EditorState: state.edtState.editorState,
  infor: state.inforRenting,
  user: state.user,
  loading: state.uploadpost.loading,
  upload: state.uploadpost,
  dataImage: state.uploadimage.data
});
export default connect(mapStateToProps)(UpdatePost);
