import React from "react";
import {
    withRouter
} from "react-router-dom"
class GuardRouter extends React.Component{
    componentWillMount(){
        if(this.props.isAuthorization){
            if(!localStorage.lalalalala){
                this.props.history.push("/acount")
            }
        }
        console.log(this.props.isAuthorization);
    }
    render(){
        return (
            <this.props.component/>
        )
    }
}
export default withRouter(GuardRouter)