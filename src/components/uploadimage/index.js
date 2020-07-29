import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetch_addImage} from '../../pages/upload-post/store/uploadSlice'
//import SlideImage from '../slideimage'

class UploadImage extends Component
{
    addImg=(image)=>
    {
        console.log("đến chổ thêm image");
        this.props.addImage(image);
    }

    UploadImage=async e=>
    {
        console.log(this.props.images);
        const files =e.target.files;
        const data= new FormData()
        data.append('file', files[0]);
        data.append('upload_preset','uploaddemo')
        const res = await fetch(
            "https://api.cloudinary.com/v1_1/kh-ng/image/upload",
            {
                method: 'POST',
                body: data
            }
        )
        const file = await res.json();
        const linkimg=file.secure_url;
        //document.getElementById('anhupload').src=linkimg;
        //console.log(file);
        //addImg(linkimg);
        
        this.addImg(linkimg)
    }
    render(){
        
        return(
            <div>
                <input name="file" id="" className="btn btn-primary" type="file"
                    onChange={this.UploadImage}
                />
                
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        images: state.uploadimage.data
    }
}

const mapDispatchToState =dispatch=>{
    return{
        addImage:(image)=>{
            dispatch(fetch_addImage(image));
        }
    }
}
export default connect(mapStateToProps,mapDispatchToState)(UploadImage);