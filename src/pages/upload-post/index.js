import React, { Component } from 'react';
import './upload.sass';
import { connect } from 'react-redux';
import InforRengting from '../../components/inforrenting';
import EditorConvertToHTML from '../../components/edittor';
import UploadImage from '../../components/uploadimage';
import SlideImage from '../../components/slideimage';
import services from './services/upload_post';

class UploadPost extends Component {
    uploadPost = () => {
      const images = this.props.listImage;
      const editor = this.props.EditorState;
      const infor = this.props.infor.data;
      const informationRoom = {
        name: infor.name,
        description: editor,
        price: infor.price,
        address: infor.address,
        area: infor.area,
        water: infor.water,
        electric: infor.electric,
        owner: this.props.iduser,
        images
      };
      console.log(informationRoom);
      this.props.dispatch(services(infor.name, editor, infor.price, infor.address, infor.area, infor.water, infor.electric, this.props.iduser, images));
    }

    render() {
      return (
        <div className="EditorText">
          <div className="container">
            <div className="row">
              <div className="col-5">
                <InforRengting />
              </div>
              <div className="col-7">
                <UploadImage />
                <SlideImage Images={this.props.listImage} />
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
                <button onClick={this.uploadPost} name="" id="" className="btn btn-primary" type="button" value="">Đăng bài</button>
              </div>
            </div>
            <div />
          </div>
        </div>
      );
    }
}
const mapStateToProps = state => ({
  listImage: state.uploadimage.dataimage,
  EditorState: state.edtState.editorState,
  infor: state.inforRenting,
  iduser: state.user.data.id,
});
export default connect(mapStateToProps)(UploadPost);
