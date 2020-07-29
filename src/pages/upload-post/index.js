import React, {Component} from "react"
import './upload.sass';
import InforRengting from "../../components/inforrenting";
import EditorConvertToHTML from "../../components/edittor";
import UploadImage from "../../components/uploadimage";


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
                            <EditorConvertToHTML></EditorConvertToHTML>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-4">
                            <UploadImage></UploadImage>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}
export default UploadPost;