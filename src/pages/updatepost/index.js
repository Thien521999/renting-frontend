import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
// import InforRengting from '../../components/inforrenting';
// import EditorConvertToHTML from '../../components/edittor';
import UploadImage from '../../components/uploadimage';
// import SlideImage from '../../components/slideimage';
import updatepost from './services/updatepost';
import Loading from '../../components/loading';
import ListImage from '../../components/listimage';
import getPost from './services/getPost';
import InforUpdate from '../../components/inforupdate';
import Editor from '../../components/edittor';
import { setEditor } from './store/updatepostSlice';

class UpdatePost extends Component {
  componentDidMount = () => {
    const { location } = this.props;
    const id = location.query;
    const { dispatch } = this.props;
    dispatch(getPost(id));
  }

    uploadPost = () => {
      const { data } = this.props;
      const images = this.props.dataimages;
      const editor = data.description;
      const id = this.props.location.query;

      const name = document.getElementById('namepost').value;
      const address = document.getElementById('addresspost').value;
      const price = document.getElementById('pricepost').value;
      const area = document.getElementById('areapost').value;
      const water = document.getElementById('waterpost').value;
      const electric = document.getElementById('electricpost').value;

      const informationRoom = {
        id,
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
        this.props.dispatch(updatepost(informationRoom));
      }
    }

    setEditorData = data => {
      const { dispatch } = this.props;
      dispatch(setEditor(data));
    }

    render() {
      // console.log(this.props.dataimages);
      const { data } = this.props;
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
                  <ListImage data={this.props.dataimages} />
                </div>
                <div />
              </div>
              <div className="row">
                <div className="col-12">
                  <Editor isUpdate="true" setEditorData={this.setEditorData} data={data.description} />
                </div>
              </div>
              <div className="row mt-5">
                <div className="col-4">
                  <button onClick={this.uploadPost} name="" id="btnPost" className="btn btn-primary" type="button" value="">Update</button>
                </div>
              </div>
              <div />
            </div>
          </div>
        );
      }
      if (this.props.user.data.role === 0) { component = <Redirect push to="/notfound" />; }
      return (
        <div>
          {component}
        </div>
      );
    }
}
const mapStateToProps = state => ({
  user: state.user,
  data: state.updatePost.data,
  loading: state.updatePost.loading,
  dataimages: state.uploadimage.dataimage
});
export default connect(mapStateToProps)(UpdatePost);
