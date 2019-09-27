//BGM
import React from "react";
import '../../assets/style/Video/Bgm.css'
export default class Bgm extends React.Component{
    constructor() {
        super();
        this.state= {
            data : [],
            mvUrl:'',
        }
    }
    render() {
        return (
            <div className={'MvWrap'}>
                <div>
                    {
                        this.state.data.map((dataItem,index)=>(
                            <div className={'bgm_card'} key={dataItem.id}>
                                <figure>
                                    {/*<img src={dataItem.cover}/>*/}
                                    <span className={'mask'} onClick={() => {
                                        this.getMvUrl(dataItem.id,index);
                                        console.log(index)
                                    }}></span>
                                        <video src={this.state.mvUrl} poster={dataItem.cover} controls={true}></video>
                                    <figcaption >
                                        {dataItem.name}
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




    async fn1() {
        await this.$axios.get('http://114.55.253.153:8080/mv/first').then((datas) => {
            // console.log(datas)
            this.setState({
                data:datas.data,
            });

        });
    }
    async getMvUrl(id,index) {
         await this.$axios.get('http://114.55.253.153:8080/mv/url?id='+id).then((data) => {
             var mask = document.getElementsByClassName('mask')[index];
            this.setState({
                mvUrl:data.data.url,
            });
        })
    }
    //
    // async fn2() {
    //     await this.$axios.get('http://114.55.253.153:8080/playlist/subscribers?id=544215255&limit=30').then((datas) => {
    //         this.setState({
    //             txdata:datas.data,
    //         });
    //
    //     });
    //
    // }
    //

    componentDidMount() {
        this.fn1();
    //     this.fn2();
    //     console.log(this.props)
    }



}
