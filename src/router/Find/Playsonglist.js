import React from "react";
import "../../assets/iconfont/findlogo/font2/iconfont.css"
import "../../assets/iconfont/findlogo/font3/iconfont.css"
import "../../assets/style/Find/playsonglist/index.css"

import axios from"axios"
import {connect} from "react-redux"
import autoplay from "swiper/src/components/autoplay/autoplay";
import {
    NavLink,
    Route,
    BrowserRouter as Router
} from "react-router-dom"

 class Playsonglist extends React.Component{
    render(){

        const {playsongList}=this.props;

        return (
            <div>
                <div id = "playsong">
                    <div id = "topplay">

                        <div id = "information">
                    <span className="iconfont" onClick={()=>{
                        this.props.history.go(-1)
                    }}>&#xe502;</span>
                            <div>
                                <p id  = "p1">{this.props.location.state.name}</p>
                                <p id = "p2">{this.props.location.state.singer}</p>
                                {/*<p>{this.props.location.state.songid}</p>*/}
                            </div>

                            <span className={"iconfont"}>&#xe642;</span>
                        </div>



                        <div id = "picture">
                            <ul>
                                <li className={"iconfont"}>&#xe618;</li>
                                <li className={"iconfont"}>&#xe694;</li>
                                <li className={"iconfont"}>&#xe614;</li>

                                <li>
                                    <NavLink to={{pathname:"/songcomment",
                                        state:{
                                            id:this.props.location.state.songid,
                                            name:this.props.location.state.name,
                                            singer:this.props.location.state.singer,
                                            picurl:this.props.location.state.picurl,
                                        }
                                    }} >
                                <li className={"iconfont"}>&#xe607;</li>
                                </NavLink>
                                </li>

                                <li className={"iconfont"}>&#xf0303;</li>
                            </ul>
                        </div>

                        <div id = "black">
                            <span id ="bkpic"><img src={this.props.location.state.picurl}/></span>
                        </div>



                    </div>

                    <div>
                        {
                           playsongList.map(v=>(
                               <audio  key={v.id}src= {v.url}controls="controls" loop="loop" autoplay="autoplay" onClick={()=>{
                                   setInterval(()=>{

                                   },1000)
                               }}>
                               </audio>
                           ))
                        }
                    </div>
                </div>


            </div>
        )
    }
     componentDidMount() {
        // console.log(this.props.match.params.id)
        //  const res = await  axios.get("http://114.55.253.153:8080/song/url?id="+this.props.match.params.id)
        //  console.log(res)
         this.props.getplaysongList()
         console.log(this.props,111111111)

    }
}

function mapStateToProps(state) {
    return {
        playsongList:state.playsonglist.playsongList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getplaysongList(){
            // console.log(this)
            dispatch(async ()=>{
                const playsonglistres = await axios.get("http://114.55.253.153:8080/song/url?id="+this.location.state.id);
                console.log(playsonglistres)
                dispatch({
                    type:"GET_PLAY_SONG_LIST",
                    payload:playsonglistres.data
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Playsonglist);