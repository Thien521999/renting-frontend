import React, {Component} from 'react'


class UploadImage extends Component
{
    UploadImage=async e=>
    {
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
        document.getElementById('anhupload').src=linkimg;
        //console.log(file);
    }
    render(){
        return(
            <div>
                <input name="file" id="" class="btn btn-primary" type="file"
                    onChange={this.UploadImage}
                />
                <img id="anhupload" alt=""/>
            </div>
        );
    }
}
export default UploadImage;