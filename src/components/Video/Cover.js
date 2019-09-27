//翻唱
import React from "react";
export default class Scene extends React.Component {
    constructor() {
        super();
        this.state= {
            data : [],
        }
    }
    render() {
        return (
            <div className={'MvWrap'}>
                <div>
                    {
                        this.state.data.map(dataItem=>(
                            <div className={'bgm_card'} key={dataItem.id}>
                                <figure>
                                    <img src={dataItem.cover}/>
                                    <figcaption >
                                        {dataItem.briefDesc}
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
                        ))
                    }
                </div>
            </div>
        );
    };


    async componentDidMount() {
        await this.$axios.get('http://114.55.253.153:8080/mv/first').then((datas) => {
            // console.log(datas)
            this.setState({
                data:datas.data,
            });
        });
    }
}
