import React from "react";
import"../../assets/iconfont/findlogo/font2/iconfont.css"
import "../../assets/style/Find/radiostation/radiostation.css"


import { Tabs, WhiteSpace } from 'antd-mobile';

import{
    BrowserRouter as Router,
    NavLink,
    Route
}from "react-router-dom"

import {connect} from "react-redux"
import axios from "axios";



import { Carousel, WingBlank } from 'antd-mobile';
 class RadioStation extends React.Component{
    state = {
        data: ['1', '2', '3','4','5','6','7','8'],
        imgHeight: 150,
        bannerList:[],
    }
    render(){

        const {
            bannerList,
            radiotodayList,
            djprogramList,
            payList
        }=this.props;

        return (
            <div id = "main">
                <div id = "top">
                    <span className="iconfont" onClick={()=>{
                        this.props.history.push("/find")
                    }}>&#xe502;</span>
                    <span>电台</span>
                </div>

                <div id = "activeNav">
                    <WingBlank >
                        <Carousel
                            autoplay={true}
                            infinite
                            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            //afterChange={index => console.log('slide to', index)}
                        >
                            {bannerList.map(v => (
                                <img
                                    key={v}
                                    src={v.pic}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top',border:'10px'}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                // </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>

                <div id = "navtwo">
                    <NavLink activeStyle={{color:"red"}}exact to={"/radioclassification"}><span className= "iconfont">&#xe76f;</span>电台分类</NavLink>
                    <NavLink activeStyle={{color:"red"}} exact  to = {"/radiorank"}>  <span className = "iconfont">&#xe616;</span>电台排行</NavLink>
                    <NavLink activeStyle={{color:"red"}}exact to={"/premiumproducts"}> <span className = "iconfont"> &#xe60e;</span>付费精品</NavLink>
                    <NavLink activeStyle={{color:"red"}}exact to={"/musicclassroom"}> <span className = "iconfont">&#xe6f4;</span>音乐课堂</NavLink>
                    {/*<Route component={Recommend} path={"/find/recommend"} exact></Route>*/}
                    {/*<Route  component={SongList} path={"/find/songlist"} ></Route>*/}
                    {/*<Route component={RankList} path={"/find/ranklist"} ></Route>*/}
                    {/*<Route component={RadioStation} path={"/find/radiostation"} ></Route>*/}
                    {/*<Route component={LiveShow} path={"/find/liveshow"} ></Route>*/}
                </div>


                <div id = "listen">
                    <span>听听&gt;</span>
                    <ul>
                        {
                            djprogramList.map(v=>(
                                <li>
                                    <img src = {v.picUrl}/>
                                    <span>{v.name}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>



                <div id = "radiorecommend">
                    <div>
                        <span>电台推荐</span>
                        <span><i className={"iconfont"}>&#xe60f;</i>换一换</span>
                    </div>
                    <ul>
                        {
                            radiotodayList.map(v=>(
                                <li>
                                    <img src = {v.picUrl}/>
                                    <span>{v.rcmdText}</span>
                                    <p>{v.name}</p>
                                </li>
                            ))
                        }

                    </ul>
                </div>

                <div id = "prefer">
                    <div id = "adv">
                        <span>精品推荐</span>
                        <span>你指的拥有的优质内容</span>
                        <span onClick = {()=>{
                            this.props.history.push("/premiumproducts")
                        }}>全部精品</span>
                    </div>
                    <div id = "pay">
                        <ul>
                            {
                                payList.map(v=>(
                                    <li>
                                        <img src = {v.picUrl}/>
                                        <p>{v. rcmdText}</p>
                                        <p>￥{v.originalPrice/100}</p>
                                        <p id = "name">{v.name}</p>
                                        <p id="pro">付费精品</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

            </div>
        )
    }

    componentDidMount() {
        this.props.getbannerList();
        this.props.getradiotodayList();
        this.props.getdjprogramList();
        this.props.getpayList();

        setTimeout(() => {
            this.setState({
                data: ['f-hchKAjNhYOXkjNwZyFfw==/109951164370202059', '-E4c8AK6evlKUxLPSnpcuQ==/109951164370202737', '6S7CEnMJ7uimxIDTX82FDA==/109951164368381216','QpJx1cS3bc2j1PP_l8W3xA==/109951164370069830','vSPuggEIyo2no29_I2Fm8w==/109951164368695918', 'nDv_R41HG0H9KZXR25d29A==/109951164368447735','MafZhzTAP_s58UvUeKMzog==/109951164366929874','hUezTHAA1NW48B34iy4hyw==/109951164368389839'],
            });
        }, 100);
    }
}

function mapStateToProps(state) {
    return {
        bannerList:state.banner.bannerList,
        radiotodayList:state.radiotoday.radiotodayList,
        djprogramList:state.djprogram.djprogramList,
        payList:state.pay.payList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getbannerList(){
            dispatch(async ()=>{
                const res = await axios.get("http://114.55.253.153:8080/banner?type=1");
                // console.log(res.banners)
                dispatch({
                    type:"GET_BANNER_LIST",
                    payload:res.banners
                })
            })

        },
        getradiotodayList(){
            dispatch(async ()=>{
                const radiotodayres = await axios.get("http://114.55.253.153:8080/dj/today/perfered");
                // console.log(radiotodayres)
                dispatch({
                    type:"GET_RADIO_TODAY_LIST",
                    payload:radiotodayres.data
                })
            })

        },
        getdjprogramList(){
            dispatch(async ()=>{
                const djprogramres = await axios.get("http://114.55.253.153:8080/personalized/djprogram");
                // console.log(radiotodayres)
                dispatch({
                    type:"GET_DJ_PROGRAM_LIST",
                    payload:djprogramres.result
                })
            })

        },
        getpayList(){
            // console.log(this)
            dispatch(async ()=>{
                const payres = await axios.get("http://114.55.253.153:8080/dj/paygift?limit=3");
                console.log(payres)
                dispatch({
                    type:"GET_PAY_LIST",
                    payload:payres.data.list
                })
            })
        }


    }
}
export default connect(mapStateToProps,mapDispatchToProps) (RadioStation);

