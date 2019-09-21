import React from "react";
// import "../../../assets/style/Find/songlist/pop.css"

import {connect} from "react-redux"
import axios from "axios";


class Pop extends React.Component{
    render(){
        const {popList,getpopList}=this.props;
        return (
            <div id = "main">
                <ul>
                    {
                        popList.map(v=>(
                            <li >
                                <img src={v.coverImgUrl}/>
                                <span>{v.name}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
    componentDidMount() {
        this.props.getpopList();
    }
}


function mapStateToProps(state) {
    return {
        popList:state.pop.popList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getpopList(){
            // console.log(this)
            dispatch(async ()=>{
                const popres = await axios.get("http://114.55.253.153:8080/top/playlist/pop");
                console.log(popres)
                dispatch({
                    type:"GET_POP_LIST",
                    payload:popres.playlists
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Pop);