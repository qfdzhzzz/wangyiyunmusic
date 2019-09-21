import React from 'react';
// import './App.css';

import Acount from "./Acount";
import Cloud from "./Cloud";
import My from "./My";
import Search from "./Search";
import Video from "./Video";
import Find from "./Find";

import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
} from "react-router-dom";



// import GuardRouter from "./router/GuardRouter";

class Home extends React.Component {
    render() {
        return (
            <div>
                {/*<Router>*/}
                    <nav id = "nav">
                        <NavLink activeStyle={{color:"red"}}exact to={"/acount"}>账号</NavLink>|
                        <NavLink activeStyle={{color:"red"}} exact  to = {"/find"}> 发现</NavLink>|
                        <NavLink activeStyle={{color:"red"}}exact to={"/my"}>我的</NavLink>|
                        <NavLink activeStyle={{color:"red"}}exact to={"/cloud"}>云村</NavLink>|
                        <NavLink activeStyle={{color:"red"}}exact to={"/video"}>视频</NavLink>|
                        <NavLink activeStyle={{color:"red"}}exact to={"/search"}>搜索</NavLink>
                    </nav>
                    <Switch>
                    <Route component={Find} path={"/find"}  exact></Route>
                    <Route  component={Video} path={"/video"} ></Route>
                    <Route component={My} path={"/my"} ></Route>
                    <Route component={Cloud} path={"/cloud"} ></Route>
                    <Route component={Acount} path={"/acount"} ></Route>
                    <Route component={Search} path={"/search"} ></Route>
                    </Switch>
                {/*</Router>*/}
            </div>
        )
    }
}
export default Home;
