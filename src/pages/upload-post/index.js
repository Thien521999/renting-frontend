import React, { Component } from 'react';
import './upload.sass';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import InforRengting from '../../components/inforrenting';
import EditorConvertToHTML from '../../components/edittor';
import UploadImage from '../../components/uploadimage';
// import SlideImage from '../../components/slideimage';
import services from './services/upload_post';
import Loading from '../../components/loading';
import ListImage from '../../components/listimage';
import { setEditor } from './store/uploadSlice';
import { fetchReset } from '../../components/uploadimage/store/uploadImageSlice';

class UploadPost extends Component {
  componentWillMount = () => {
    this.props.dispatch(fetchReset());
  }

    callAPI = async fileUpload => {
      const data = new FormData();
      data.append('file', fileUpload);
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
      const name = document.getElementById('namepost').value;
      const address = document.getElementById('addresspost').value;
      const price = document.getElementById('pricepost').value;
      const area = document.getElementById('areapost').value;
      const water = document.getElementById('waterpost').value;
      const electric = document.getElementById('electricpost').value;
      // console.log(name);
      const { editor } = this.props.upload;
      // const infor = this.props.infor.data;
      // console.log(images)
      // console.log(images)
      const informationRoom = {
        name,
        description: editor,
        price,
        address,
        area,
        water,
        electric,
        owner: this.props.user.data.id,
        images,
        vote: []
      };
      if (name === '' || address === '' || editor === '' || price === '' || area === '' || water === '' || electric === '' || images.length === 0) {
        console.log(informationRoom);
        alert('nhập đầy đủ thông tin');
      } else {
        console.log(informationRoom);
        this.props.dispatch(services(informationRoom));
      }
    }

    setEditorData = data => {
      const { dispatch } = this.props;
      dispatch(setEditor(data));
    }

    // componentDidUpdate=() => {
    //   if (this.props.status !== 200) {
    //     alert('lỗi đăng bài');
    //   } else {
    //     alert('đăng bài thành công');
    //   }
    // }

    render() {
      // console.log(this.props.infor.data);
      let component = (
        <div className="EditorText">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <InforRengting />
              </div>
              <div className="col-7">
                <UploadImage />
                {/* <SlideImage Images={this.props.listImage} /> */}
                <ListImage data={this.props.listImage} />
              </div>
              <div />
            </div>
            <div className="row">
              <div className="col-12">
                <EditorConvertToHTML setEditorData={this.setEditorData} />
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
      if (this.props.user.data.role === 0 || this.props.user.data.role === 3) { component = <Redirect push to="/notfound" />; }
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
  user: state.user,
  loading: state.uploadpost.loading,
  upload: state.uploadpost,
  dataImage: state.uploadimage.data,
  status: state.uploadpost.status
});
export default connect(mapStateToProps)(UploadPost);
