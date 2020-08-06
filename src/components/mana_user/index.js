import React, {Component} from 'react'
import './mana_user.sass'
import UserItem from './UserItem'

class ManageUser extends Component
{
    render(){
        return(
            <div className="mana_user">
                <div className="header-mana"><b>QUẢN LÝ NGƯỜI DÙNG</b></div>
                <div className="items_user">
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                <UserItem></UserItem>
                </div>
            </div>
        );
    }
}
export default ManageUser;