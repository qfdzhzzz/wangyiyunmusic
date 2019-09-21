import React from "react";


import {connect} from "react-redux"
import axios from "axios";
import"../../assets/style/Find/radiostation/premiumproducts.css"

class Premiumproducts extends React.Component{
    render(){
        const {payList,getpayList}=this.props;
        return (
            <div id = "main">
                <div id = "top">
                    <span className="iconfont" onClick={()=>{
                        this.props.history.push("/radiostation")
                    }}>&#xe502;</span>
                    <span>付费精品</span>
                </div>

                <div>
                    <div id = "pay">
                        <ul>
                            {
                                payList.map(v=>(
                                    <li>
                                        <span><img src = {v.picUrl}/></span>
                                        <p id = "first">{v.name}</p>
                                        <p id = "second">{v.rcmdText}</p>
                                        <p id = "third">￥{v.originalPrice/100}</p>
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
        this.props.getpayList();
    }
}

function mapStateToProps(state) {
    return {
        payList:state.pay.payList
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getpayList(){
            // console.log(this)
            dispatch(async ()=>{
                const payres = await axios.get("http://114.55.253.153:8080/dj/paygift");
                console.log(payres)
                dispatch({
                    type:"GET_PAY_LIST",
                    payload:payres.data.list
                })
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Premiumproducts);
