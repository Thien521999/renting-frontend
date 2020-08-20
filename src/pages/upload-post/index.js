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

class UploadPost extends Component {
    callAPI=async fileupload => {
      const data = new FormData();
      // const url = new URL(fileupload);
      // const file = url.toJSON();
      // console.log(file);
      // const file = new File(fileupload);
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
      // const images = [];
      // const dataimage = this.props.listImage;
      // for (let i = 0; i < dataimage.length; i++) {
      //   const img = this.callAPI(dataimage[i]);
      //   // console.log(file);
      //   images.push(img);
      // }
      const editor = this.props.EditorState;
      const infor = this.props.infor.data;
      // console.log(images)
      // console.log(images)
      if (images === undefined || editor === undefined || infor === undefined) {
        alert('nhập đầy đủ thông tin');
      } else {
        this.props.dispatch(services(infor.name, editor, infor.price, infor.address, infor.area, infor.water, infor.electric, this.props.user.data.id, images));
      }
      // const informationRoom = {
      //   name: infor.name,
      //   description: editor,
      //   price: infor.price,
      //   address: infor.address,
      //   area: infor.area,
      //   water: infor.water,
      //   electric: infor.electric,
      //   owner: this.props.iduser,
      //   images
      // };
      // console.log(informationRoom);
    }

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
        // const { id } = this.props.upload.data;
        alert('đăng bài thành công');
        // component = <Redirect push to={`/detail/id=${id}`} />;
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
export default connect(mapStateToProps)(UploadPost);
