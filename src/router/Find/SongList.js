import React from "react";

import Recommend from "./SongList/Recommend"
import Official from "./SongList/Official";
import Boutique from "./SongList/Boutique";
import Chinese from "./SongList/Chinese";
import Pop from "./SongList/Pop";
import Acg from "./SongList/Acg";
import Softmusic from "./SongList/Softmusic";
import Rock from "./SongList/Rock";

import  "../../assets/iconfont/findlogo/font2/iconfont.css"
import "../../assets/style/Find/songlist/songlist.css"

import { Tabs, WhiteSpace } from 'antd-mobile';

import{
    BrowserRouter as Router,
    NavLink,
    Route
}from "react-router-dom"


export default class SongList extends React.Component{
    render(){
        return (
            <div>
                <div id = "top">
                    <span className="iconfont" onClick={()=>{
                        this.props.history.push("/find")
                    }}>&#xe502;</span>

                    <span>歌单广场</span>
                </div>

                {/*<Router>*/}
                    <nav id = "songrecommend">
                        <NavLink activeStyle = {{color:"red"}}to = {"/songlist"} exact>推荐</NavLink>
                        <NavLink activeStyle = {{color:"red"}} to = {"/songlist/official"} >官方</NavLink>
                        <NavLink  activeStyle = {{color:"red"}}to = {"/songlist/boutique"} >精品</NavLink>
                        <NavLink  activeStyle = {{color:"red"}}to = {"/songlist/chinese"} >华语</NavLink>
                        <NavLink  activeStyle = {{color:"red"}}to = {"/songlist/pop"} >流行</NavLink>
                        <NavLink  activeStyle = {{color:"red"}}to = {"/songlist/acg"} >ACG</NavLink>
                        <NavLink  activeStyle = {{color:"red"}}to = {"/songlist/softmusic"} >轻音乐</NavLink>
                        <NavLink  activeStyle = {{color:"red"}}to = {"/songlist/rock"} >摇滚</NavLink>

                    </nav>

                    <Route component={Recommend} path={"/songlist"} exact></Route>
                    <Route component={Official} path={"/songlist/official"}></Route>
                     <Route component={Boutique} path={"/songlist/boutique"}></Route>
                      <Route component={Chinese} path={"/songlist/chinese"}></Route>
                       <Route component={Pop} path={"/songlist/pop"}></Route>
                  <Route component={Acg} path={"/songlist/acg"}></Route>
                <Route component={Softmusic} path={"/songlist/softmusic"}></Route>
                  <Route component={Rock} path={"/songlist/rock"}></Route>
                {/*</Router>*/}



                {/*const tabs = [*/}
                {/*{ title: 'First Tab' },*/}
                {/*{ title: 'Second Tab' },*/}
                {/*{ title: 'Third Tab' },*/}
                {/*];*/}

                {/*const TabExample = () => (*/}
                {/*<div>*/}
                {/*    <WhiteSpace />*/}
                {/*    <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={false}>*/}
                {/*        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>*/}
                {/*            Content of first tab*/}
                {/*        </div>*/}
                {/*        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>*/}
                {/*            Content of second tab*/}
                {/*        </div>*/}
                {/*        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>*/}
                {/*            Content of third tab*/}
                {/*        </div>*/}
                {/*    </Tabs>*/}
                {/*    <WhiteSpace />*/}
                {/*</div>*/}
                {/*);*/}
            </div>
        )
    }
}
