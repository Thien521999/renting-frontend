import React, {Component} from "react"
import './upload.sass';
import InforRengting from "../../components/inforrenting";
import EditorConvertToHTML from "../../components/edittor";
import UploadImage from "../../components/uploadimage";
import {connect} from 'react-redux'
import SlideImage from "../../components/slideimage";


class UploadPost extends Component
{
   uploadPost=()=>{
        const images = this.props.listImage;
        const editor = this.props.EditorState;
        const infor = this.props.infor;
        console.log(images);
        console.log(editor);
        console.log(infor)
   }
    render()
    {
        return(
            <div className="EditorText">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                             <InforRengting ></InforRengting>
                        </div>
                        <div className="col-7">
                            <UploadImage></UploadImage>
                            <SlideImage Images={this.props.listImage}></SlideImage>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                            <EditorConvertToHTML edtState={this.props.EditorState}></EditorConvertToHTML>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4">
                        <button onClick={this.uploadPost} name="" id="" className="btn btn-primary" type="button" value="">Đăng bài</button>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        listImage: state.uploadimage.dataimage,
        EditorState: state.edtState.editorState,
        infor: state.inforRenting
    }
}
export default connect(mapStateToProps)(UploadPost);