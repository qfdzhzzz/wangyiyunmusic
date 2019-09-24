import React from "react";
import  "../../assets/iconfont/findlogo/font2/iconfont.css"
import "../../assets/style/Find/songlist/ranklist.css"
import {connect} from "react-redux"
import axios from "axios";
import {
    NavLink,
    Route,
    BrowserRouter as Router
} from "react-router-dom"
 class RankList extends React.Component{
    render(){
        const {rankList,getrankList}=this.props;
        return (
            <div id ="main">
                <div id = "top">
                    <span className="iconfont" onClick={()=>{
                        this.props.history.push("/find")
                    }}>&#xe502;</span>
                    <span>排行榜</span>
                </div>
                <p>官方榜</p>
                <div>
                {
                    rankList.map(v=>(
                        <NavLink to={"/activesonglist/"+v.id}>
                        <div id = "rank">
                            <img src={v.coverImgUrl}/>
                            <p>{v.name}</p>
                            <p>{v.description}</p>
                            <p id = "intro">{v.updateFrequency}</p>
                        </div>
                        </NavLink>
                    ))
                }
                </div>
            </div>
        )
    }
    componentDidMount(){
        this.props.getrankList();
    }
}

function mapStateToProps(state) {
    return {
        rankList:state.ranklist.rankList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getrankList(){
            // console.log(this)
            dispatch(async ()=>{
                const rankres = await axios.get("http://114.55.253.153:8080/toplist/detail");
                console.log(rankres)
                dispatch({
                    type:"GET_RANK_LIST",
                    payload:rankres.list
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (RankList);