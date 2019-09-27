import React from "react";
import { Tabs} from 'antd-mobile';
import {
    withRouter
} from "react-router-dom"

import '../../assets/style/Video/Look.css'
import Popular from './Looks/Popular'

const tabs = [
    { title:'热门' },
    { title: '附近'},
    { title: '颜值' },
    { title: '好声音' },
    { title: '情感' },
    { title: '二次元' },
    { title: '音乐人' },
    { title: '萌新' },
];



 class Look extends React.Component{
    render() {
        return (
            <div style={{width:'100%',backgroundColor: '#fff' }}>
                <div className={'anchor'}>
                    <div className={'star'}>
                        <p>明星榜</p>
                        <span className={'look_img'}>ha</span>
                        <span className={'look_img'}>ha</span>
                        <span className={'look_img'}>ha</span>
                    </div>

                    <div className={'follow'} onClick={()=>{
                        this.props.history.push("/FocusAnchor")
                    }}>
                        <p>我的关注</p>
                        <p style={{color:'#ccc'}}>暂无关注主播开播</p>
                    </div>
                </div>
<br/>
                <div className={'childnav'}>
                    <Tabs tabs={tabs} tabBarActiveTextColor={'pink'}>
                         <Popular/>
                    </Tabs>
                </div>

            </div>
        );
    };
}

export default withRouter(Look)