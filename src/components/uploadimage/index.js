import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_addImage, addDataImage } from './store/uploadImageSlice';
import './uploadimage.sass';
// import SlideImage from '../slideimage'

class UploadImage extends Component {
    addImg=image => {
      console.log('đến chổ thêm image');
      this.props.dispatch(fetch_addImage(image));
    }

    addDataImg=data => {
      this.props.dispatch(addDataImage(data));
    }

    UploadImage=async e => {
      console.log(this.props.images);
      const { files } = e.target;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'uploaddemo');
      const res = await fetch(
        'https://api.cloudinary.com/v1_1/kh-ng/image/upload',
        {
          method: 'POST',
          body: data
        }
      );
      const file = await res.json();
      console.log(file);
      const linkimg = file.secure_url;
      // const linkimg = URL.createObjectURL(files[0]);
      //  console.log(typeof (files[0]));
      // console.log(files[0]);
      this.addImg(linkimg);
      // this.addDataImg(files[0]);
      document.getElementById('file').value = null;
    }

    render() {
      return (
        <div className="uploadImage">
          <input
            name="file"
            id="file"
            className="btn btn-primary"
            type="file"
            onChange={this.UploadImage}
          />
        </div>
      );
    }
}
const mapStateToProps = state => ({
  images: state.uploadimage.dataimage
});

// const mapDispatchToState = dispatch => ({
//   addImage: image => {
//     dispatch(fetch_addImage(image));
//   }
// });
export default connect(mapStateToProps)(UploadImage);
