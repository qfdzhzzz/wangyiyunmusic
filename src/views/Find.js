import React from "react";
import "../assets/style/Find/index.css"
import {
    NavLink,
    Route,
    BrowserRouter as Router
} from "react-router-dom"

// import { Tabs, WhiteSpace } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
//
// import LiveShow from "../router/Find/LiveShow";
// import RadioStation from "../router/Find/RadioStation";
// import RankList from "../router/Find/RankList";
// import Recommend from "../router/Find/Recommend";
// import SongList from "../router/Find/SongList";

import {connect} from "react-redux"
import axios from "axios"

import  "../assets/iconfont/findlogo/font1/iconfont.css"
import "../assets/iconfont/findlogo/font2/iconfont.css"



 class Find extends React.Component{

    renderContent = tab =>
        (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
            <p>Content of {tab.title}</p>
        </div>);

    state = {
        data: ['1', '2', '3','4','5','6','7','8'],
        imgHeight: 150,
        bannerList:[],
        songList:[],
        newdishList:[],
        mvList:[]
    }

    componentDidMount() {
        // simulate img loading
        setTimeout(() => {
            this.setState({

                data: ['f-hchKAjNhYOXkjNwZyFfw==/109951164370202059', '-E4c8AK6evlKUxLPSnpcuQ==/109951164370202737', '6S7CEnMJ7uimxIDTX82FDA==/109951164368381216','QpJx1cS3bc2j1PP_l8W3xA==/109951164370069830','vSPuggEIyo2no29_I2Fm8w==/109951164368695918', 'nDv_R41HG0H9KZXR25d29A==/109951164368447735','MafZhzTAP_s58UvUeKMzog==/109951164366929874','hUezTHAA1NW48B34iy4hyw==/109951164368389839'],

            });
        }, 100);

        this.props.getbannerList();
        this.props.getsongList();
        this.props.getnewdishList();
        this.props.getmvList();
        // this.props.getmvurlList();
    }


    render(){

        const {
            bannerList,
            // getbannerList,
            songList,
            // getsongList,
            newdishList,
            // getnewdishList,
            mvList,
            getmvList,
            mvurlList,
        } = this.props;
        // console.log(this.props)
        return (
            <div>
                <div id = "swiper">
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


                    )
                )}
                    </Carousel>
                    </WingBlank>
                    {/*<input type="button" onClick={getbannerList.bind(this.props)}  value={"加载更多"}/>*/}

                </div>


                {/*<Router>*/}
                <div id = "navtwo">
                    <NavLink activeStyle={{color:"red"}}exact to={"/recommend"}><span className= "iconfont">&#xe645;</span>每日推荐</NavLink>
                    <NavLink activeStyle={{color:"red"}} exact  to = {"/songlist"}>  <span className = "iconfont">&#xe504;</span>歌单</NavLink>
                    <NavLink activeStyle={{color:"red"}}exact to={"/ranklist"}> <span className = "iconfont"> &#xe63a;</span>排行榜</NavLink>
                    <NavLink activeStyle={{color:"red"}}exact to={"/radiostation"}> <span className = "iconfont">&#xe6f4;</span>电台</NavLink>
                    <NavLink activeStyle={{color:"red"}}exact to={"/liveshow"}> <span className = "iconfont"> &#xe614;</span>直播</NavLink>

                    {/*<Route component={Recommend} path={"/find/recommend"} exact></Route>*/}
                    {/*<Route  component={SongList} path={"/find/songlist"} ></Route>*/}
                    {/*<Route component={RankList} path={"/find/ranklist"} ></Route>*/}
                    {/*<Route component={RadioStation} path={"/find/radiostation"} ></Route>*/}
                    {/*<Route component={LiveShow} path={"/find/liveshow"} ></Route>*/}
                </div>
            {/*</Router>*/}


                    <div id="songlist">
                        <div>
                            <span>推荐歌单</span>
                            {/*<input type="button" onClick={getsongList.bind(this.props)}  value={"加载更多"}/>*/}
                            <input type="button"  onClick={()=>{
                                this.props.history.push("./songlist")
                            }} value={"歌单广场"}/>
                        </div>
                        <div id="songphoto">
                            <ul>
                                {
                                    songList.map(v=>(
                                        <NavLink to={"/activesonglist/"+v.id} key={v.id}>
                                        <li >
                                            <img src={v.picUrl}/>
                                            <span>{v.name}</span>
                                        </li>
                                        </NavLink>
                                    ))
                                }
                            </ul>
                        </div>

                    </div>



                <div id = "newsong">
                        <span>新碟</span>
                        <span>新歌</span>
                        <input type = "button" value = {"更多新碟"}/>
                    <div>
                        <ul>{
                            newdishList.map((v,i)=>(
                                <NavLink to={"/activesonglist/"+v.id} key={v.id}>
                                <li >
                                    <img src={v.blurPicUrl}/>
                                    <span>{v.name}</span>
                                    <span>{v.subType}</span>
                                </li>
                                </NavLink>
                            ))
                        }
                        </ul>
                    </div>
                </div>


                <div id = "choose">
                    <span>云村精选</span>
                    <span className = "iconfont" onClick={getmvList.bind(this.props)}> &#xe60f;获取新内容</span>
                    {
                        mvList.map(v=>(
                            <div key={v.id}>
                                <i className={"iconfont"} onClick={()=>{
                                    this.props.getmvurlList(v.id);
                                }}>&#xe604;</i>

                                <video controls={"controls"} poster={v.cover} src={mvurlList.url}>

                                </video>

                                <span>{v.name}</span>
                                <div id = "comment">
                                    <span className = "iconfont" >&#xe618;12</span>
                                    <span className = "iconfont">&#xe607;{v.playCount}</span>
                                </div>
                            </div>
                        ))
                    }
                    {/*<input type = "button"    onClick = {getmvList.bind(this.props)} value = {"加载更多"}/>*/}
                </div>


                {/*<div id = "listen">*/}
                {/*    <span>听听 &gt;</span>*/}
                {/*    <div>*/}
                {/*        <ul>*/}
                {/*            <li></li>*/}
                {/*            <li></li>*/}
                {/*            <li></li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}




            </div>



        )
    }
}


function mapStateToProps(state) {
    return {
        bannerList:state.banner.bannerList,
        songList: state.song.songList,
        newdishList: state.newdish.newdishList,
        offset:state.wangyimv.offset,
        limit:state.wangyimv.limit,
        mvList:state.wangyimv.mvList,
        mvurlList:state.mvurl.mvurlList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getbannerList(){
            dispatch(async ()=>{
                const res = await axios.get("http://114.55.253.153:8080/banner?type=1");
                console.log(res.banners)
                dispatch({
                    type:"GET_BANNER_LIST",
                     payload:res.banners
                })
            })

        },
        getsongList(){
            dispatch(async ()=>{
                const songres = await axios.get("http://114.55.253.153:8080/personalized?limit=6");
                // console.log(songres,11111)
                dispatch({
                    type:"GET_SONG_LIST",
                    payload:songres.result
                })
            })

        },
        getnewdishList(){
            dispatch(async ()=>{
                const newdishres = await axios.get("http://114.55.253.153:8080/top/album?offset=0&limit=3");
                 console.log(newdishres,44444)
                dispatch({
                    type:"GET_NEW_DISH_LIST",
                    payload:newdishres.albums
                })
            })

        },
        getmvList(){
            console.log(this)
            dispatch(async ()=>{
                const mvres = await axios.get(`http://114.55.253.153:8080/top/mv?offset=${this.offset}&limit=${this.limit}`);
                dispatch({
                    type:"GET_MV_LIST",
                    payload:mvres.data
                })
            })
        },
        getmvurlList(id){
            console.log(this)
            dispatch(async ()=>{
                const mvurlres = await axios.get("http://114.55.253.153:8080/mv/url?id="+id);
                dispatch({
                    type:"GET_MV_URL_LIST",
                    payload:mvurlres.data
                })
            })
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Find);
