import React, {Component} from 'react'
import './userItem.sass'
import { BsFillPersonCheckFill } from "react-icons/bs";
class UserItem extends Component
{
    render(){
        return (
            <div>
                
                <div className="info_item">
                    <div>
                        <BsFillPersonCheckFill></BsFillPersonCheckFill>
                        <span> trannhutkha123456@gmail.com</span>
                    </div>
                    <div>
                        <b>Số bài đăng: </b>
                        <span>100</span>
                    </div>
                    <button type="button" class="btn btn-outline-success">chi tiết</button>
                </div>
                <hr></hr>
            </div>
        );
    }
}
export default UserItem;