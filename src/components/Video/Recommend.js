//推荐
import React from "react";
import '../../assets/style/Video/Recommend.css'

export default class Recommend extends React.Component{
    render() {
        return (
            <div className={'live-re'}>
                <div className={'live'}>
                    <div className={'live-one'}>
                        <div className={'live-small'}></div>
                        <p>ddd</p>
                    </div>
                    <div className={'live-one'}>
                        <div className={'live-small'}></div>
                        <p>ddd</p>
                    </div>
                    <div className={'live-one'}>
                        <div className={'live-small'}></div>
                        <p>ddd</p>
                    </div>
                </div>

                <div>
                    <div className={'bgm_card'}>
                        <figure>
                            <img />
                            <figcaption >
                                hahah
                            </figcaption>
                        </figure>
                        <div>
                            <div className={'bgm_title'}>
                                <p>
                                    <span className={'bgm_img'}>ha</span>
                                    <span className={'bgm_name'}>家哈哈是不是</span>
                                    <span className={'bgm_icon'}>
                                        <i className={'iconfont icon-dianzan'} style={{fontSize:'20px',marginRight:'15px'}}></i>
                                    <i className={'iconfont icon-pinglun2'} style={{fontSize:'20px',marginRight:'15px'}}></i>
                                    <i className={'iconfont icon-dashujukeshihuaico-'} style={{fontSize:'22px'}}></i>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}