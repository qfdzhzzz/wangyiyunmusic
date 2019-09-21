import React from "react";


import {connect} from "react-redux"
import axios from "axios";


class Radioclassification extends React.Component{
    render(){
        const {radiotypeList,getradiotypeList}=this.props;
        return (
            <div id = "main">
                <div id = "top">
                    <span className="iconfont" onClick={()=>{
                        this.props.history.push("/radiostation")
                    }}>&#xe502;</span>
                    <span>电台分类</span>
                </div>

                <div>
                    <h3>热门分类</h3>
                    <div id = "radio">
                        <ul>
                            {
                                radiotypeList.map(v=>(
                                    <li>
                                        <span><img src = {v.picIPadUrl}/></span>
                                        <span>{v.name}</span>
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
        this.props.getradiotypeList();
    }
}

function mapStateToProps(state) {
    return {
        radiotypeList:state.radiotype.radiotypeList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getradiotypeList(){
            // console.log(this)
            dispatch(async ()=>{
                const radiotyperes = await axios.get("http://114.55.253.153:8080/dj/catelist");
                console.log(radiotyperes)
                dispatch({
                    type:"GET_RADIO_TYPE_LIST",
                    payload:radiotyperes.categories
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Radioclassification);
