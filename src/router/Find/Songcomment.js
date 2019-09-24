import React from "react";
import "../../assets/style/Find/songcomment/index.css"
import"../../assets/iconfont/findlogo/font2/iconfont.css"
import axios from"axios"
import {connect} from "react-redux"

 class Songcomment extends React.Component{
    render(){
        const {songcommentList}=this.props;
        return (
            <div>

                <div id = "topplay">

                    <div id = "information">
                    <span className="iconfont" onClick={()=>{
                        this.props.history.go(-1)
                    }}>&#xe502;</span>
                        <span>歌曲评论</span>
                    </div>
                </div>

                <div id = "TOP">
                    <p ><img  src={this.props.location.state.picurl}/></p>
                <p id={"name"}>{this.props.location.state.name}</p>
                <p id={"singer"}>{this.props.location.state.singer}</p>
                </div>

                <div id = "prey"></div>


                <p id={ "nicecomment"}>精彩评论</p>
                <div id = "message">
                    <ul>
                        {
                            songcommentList.map(v=>(
                                <li key={v.commentId}>
                                    <span><img src={v.user.avatarUrl}/></span>
                                    <span>{v.user.nickname}</span>
                                    <span className={"iconfont"}>{v.likedCount}&#xe618;</span>
                                    <p>{v.content}</p>
                                </li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        )
    }
    componentDidMount() {
        // console.log(this.props,"songcomment")
        this.props.getsongcommentList();
    }
}
function mapStateToProps(state) {
    return {
       songcommentList:state.songcomment.songcommentList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getsongcommentList(){
            // console.log(this)
            dispatch(async ()=>{
                const songcommentres = await axios.get("http://114.55.253.153:8080/comment/music?limit=20&id="+this.location.state.id);
                console.log(songcommentres)
                dispatch({
                    type:"GET_SONG_COMMENT_LIST",
                    payload:songcommentres.hotComments
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Songcomment);