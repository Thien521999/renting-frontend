import React, {Component} from 'react'
import RequestItem from './requestItem'


class RequestUpgrade extends Component
{
    render(){
        return(
            <div className="mana_user">
                <div className="header-mana"><b>YÊU CẦU NÂNG CẤP TÀI KHOẢN</b></div>
                <div className="items_user">
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    <RequestItem></RequestItem>
                    
                </div>
            </div>
        );
    }
}
export default RequestUpgrade;