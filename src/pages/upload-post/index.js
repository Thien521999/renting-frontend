import React, {Component} from "react"
import './upload.sass';
import InforRengting from "../../components/inforrenting";
import EditorConvertToHTML from "../../components/edittor";
import UploadImage from "../../components/uploadimage";
import {connect} from 'react-redux'
import SlideImage from "../../components/slideimage";


class UploadPost extends Component
{
    render()
    {
        return(
            <div className="EditorText">
                <div className="container">
                    <div className="row">
                        <div className="col-5">
                             <InforRengting></InforRengting>
                        </div>
                        <div className="col-7">
                            <UploadImage></UploadImage>
                            <SlideImage></SlideImage>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="row">
                    <div className="col-12">
                            <EditorConvertToHTML></EditorConvertToHTML>
                        </div>
                    </div>
                    <div className="row mt-5">
                        
                    </div>

                </div>
            </div>
        );
    }
}
export default connect()(UploadPost);