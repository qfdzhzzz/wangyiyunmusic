//Mv
import React from "react";
// import React,{Component} from "react";

import { Grid } from 'antd-mobile';
import '../../assets/style/Video/Mv.css'
import {
    Link,
    Route,
    NavLink,
    BrowserRouter as Router,
    withRouter
} from "react-router-dom"


 class Mv extends React.Component{
    constructor() {
        super();
        this.state= {
            data : [],
            mvdata:[]
        }
    }
    render() {
        return (
            <div className={'MvWrap'}>

                    <div className={'MvSelected'}>
                        <h3>MV精选</h3>
                        <NavLink to={"/moremvs"}> <input type="button" value={'更多MV'} /></NavLink>
                        {/*<input type="button" value={'更多MV'}  onClick={()=>{*/}
                            {/*this.props.history.push("/MoreMvs")*/}
                        {/*}} />*/}

                    </div>

                    <div className={'table'}>
                        <Grid data={this.state.data}
                              hasLine={false}
                              columnNum={2}
                              square={false}
                              renderItem={dataItem => (
                                  <div className={'picture'}>
                                      <img src={dataItem.icon} alt="" />
                                      <br/>
                                      <div className={'linetext'}>
                                          <p>{dataItem.text}</p>
                                          <p>{dataItem.name}</p>
                                      </div>
                                  </div>
                              )}
                        />
                    </div>



                    <div className={'List'} onClick={()=>{
                        this.props.history.push({
                            pathname:"/MvList",
                            index:sessionStorage.getItem('index'),
                        })
                    }}>
                        <div className={'left'}>
                            <h3>排行榜 <i className={'iconfont icon-xiayibu'}/></h3>
                            <p style={{fontSize:'12px'}}>更新时间：</p>
                            </div>
                            <img src={require('../../assets/img/Video/mv_bg.jpg')} />
                    </div>



                    <div className={'MvSelected'}>
                        <h3>更多精彩MV</h3>
                        <input type={'button'} value={'MV分类'} onClick={()=>{
                            this.props.history.push("/MvSort")
                        }} />
                    </div>




                <div>
                    {
                        this.state.mvdata.map(mvdataItem=>(
                            <div className={'bgm_card'} key={mvdataItem.id}>
                                <figure>
                                    <img src={mvdataItem.cover}/>
                                    <figcaption >
                                        {mvdataItem.name}
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


                {/*{*/}
                    {/*this.state.mvdata.map(mvdataItem=>(*/}
                        {/*<div className={'mv-card'} key={mvdataItem.id}>*/}
                            {/*<figure>*/}
                                {/*<img src={mvdataItem.cover}/>*/}
                                {/*<figcaption>*/}
                                    {/*{mvdataItem.name}*/}
                                {/*</figcaption>*/}
                            {/*</figure>*/}
                            {/*<div className={'mv-commen'}>*/}
                                {/*<div className={'head'}></div>*/}
                                {/*<div className={'netname'}>家哈哈是不是</div>*/}
                                {/*<div  style={{float:'right',marginRight:'10px',marginTop:'15px'}}>*/}
                                    {/*<i className={'iconfont icon-dianzan'} style={{fontSize:'20px',marginRight:'15px'}} />*/}
                                    {/*<i className={'iconfont icon-pinglun2'} style={{fontSize:'20px',marginRight:'15px'}}/>*/}
                                    {/*<i className={'iconfont icon-dashujukeshihuaico-'} style={{fontSize:'22px'}}/>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*))*/}
                {/*}*/}






            </div>
        );
    };



    async fn1() {
        await this.$axios.get('http://114.55.253.153:8080/personalized/mv').then((datas) => {
            this.setState({
                data: Array.from(datas.result).map((item) => ({
                    icon: item.picUrl,
                    text: item.name,
                    name:item.artistName,
                })),
            });
        });
    }

    async fn2() {
        await this.$axios.get('http://114.55.253.153:8080/mv/all').then((datas) => {
            this.setState({
                mvdata:datas.data,
            });

        });

    }

    componentDidMount() {
        this.fn1();
        this.fn2();
        console.log(this.props)
    }
}
export default withRouter(Mv)
