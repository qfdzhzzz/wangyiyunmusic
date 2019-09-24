import React from "react";

import axios from"axios"
import {connect} from "react-redux"
import "../../assets/style/Find/activesonglist/activesonglist.css"
import "../../assets/iconfont/findlogo/font2/iconfont.css"
import"../../assets/iconfont/findlogo/font3/iconfont.css"

import {
    NavLink,
    Route,
    BrowserRouter as Router
} from "react-router-dom"



 class Activesonglist extends React.Component{
    render(){
        const {activesongList,tracksList} = this.props
        return (
            <div id = "activesonglist" style={{
                background: "url("+activesongList.background+") 0 0 / 100%  400px  no-repeat rgba(255,255,255,.8)",
            }}>


                <div id = "main">
                    <div id = "top">
                    <span className="iconfont" onClick={()=>{
                        this.props.history.go(-1)
                    }}>&#xe502;</span>
                        <span>动态歌单</span>
                    </div>
                </div>
                <div id = "information">
                    <p>{activesongList.name}</p>
                    <p>{activesongList.description}</p>
                </div>


                <div id = "pic">
                    <ul>
                        <li>
                            <span className={"iconfont"}>&#xe607;</span>
                            <p>{parseInt(activesongList.playcount/10000)}</p>
                        </li>
                        <li>
                            <span className={"iconfont"}>&#xe642;</span>
                            <p>{activesongList.sharecount}</p>
                        </li>
                        <li>
                            <span className={"iconfont"}>&#xe694;</span>
                            <p>下载</p>
                        </li>
                        <li>
                            <span className={"iconfont"}>&#xe65f;</span>
                            <p>多选</p>
                        </li>
                    </ul>
                </div>

                <div id = "white">
                    <span className={"iconfont"}>&#xe604;</span>
                    <span>播放全部(共{tracksList.length}首)</span>
                    <span>+收藏({activesongList.count})</span>
                    <ul>
                    {
                        tracksList.map((v,i)=>(
                            <NavLink to={{pathname:"/playsonglist",
                                state:{
                                    id:v.ar[0].id,
                                    name:v.name,
                                    singer:v.ar[0].name,
                                    picurl:v.al.picUrl,
                                    songid:v.id
                            }

                            }} key={v.id}>
                           <li >
                               <h4>
                                   {i+1} {v.name}
                                   <p>{v.ar[0].name}-{v.name}</p>
                               </h4>
                               <span className={"iconfont"}>&#xe665;</span>
                               <span id = "icon"className={"iconfont"}>&#xf0303;</span>
                           </li>
                            </NavLink>
                        ))
                    }
                    </ul>
            </div>
            </div>
        )
    }
     componentDidMount() {
        this.props.getactivesongList();
        // console.log(this.props.match.params.id)
        // const res = await  axios.get("http://114.55.253.153:8080/playlist/detail?id="+this.props.match.params.id)
        // console.log(res)
    }
}
function mapStateToProps(state) {
    return {
        activesongList:state.activesonglist.activesongList,
        tracksList:state.activesonglist.tracksList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getactivesongList(){
            // console.log(this)
            dispatch(async ()=>{
                const activesonglistres = await axios.get("http://114.55.253.153:8080/playlist/detail?id="+this.match.params.id);
                console.log(activesonglistres)
                dispatch({
                    type:"GET_ACTIVE_SONG_LIST",
                    payload:activesonglistres.playlist
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Activesonglist);
