//关注的主播
//是否开播部分引用了bgm的样式
import React from "react";
import "../../../assets/style/Video/FocusAnchor.css"
export default class FocusAnchor extends React.Component{
    render() {
        return (
            <div>

                <div className={'titlea'}>
                    <p>
                        <i className={'iconfont icon-flow'} onClick={() => {
                            this.props.history.go(-1)
                        }}/>
                        关注
                    </p>
                </div>


            <div style={{marginTop:'50px'}}>
                <div className={'bgm_title'}>
                    <p  style={{background:'#fff',paddingLeft:'15px',fontWeight:'666'}}>暂未开播</p>
                    <p style={{background:'#fff',borderBottom:'1px solid #ccc'}}>
                        <span className={'look_img'}>ha</span>
                        <span className={'bgm_name'}>野区歌神</span>
                    </p>

                    <p style={{background:'#fff',borderBottom:'1px solid #ccc'}}>
                        <span className={'look_img'}>ha</span>
                        <span className={'bgm_name'}>解忧邵帅</span>
                    </p>
                </div>


                <div className={'bgm_title'}>
                    <p  style={{background:'#fff',paddingLeft:'15px',fontWeight:'666'}}>更多推荐</p>
                    <div></div>
                </div>

            </div>

            </div>
        );
    }
}