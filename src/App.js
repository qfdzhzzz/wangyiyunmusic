import React from 'react';
import './App.css';

import Acount from "./views/Acount";
import Cloud from "./views/Cloud";
import My from "./views/My";
import Search from "./views/Search";
import Video from "./views/Video";
import Find from "./views/Find";

import {
  BrowserRouter as Router,
  Route,
  NavLink
} from "react-router-dom";

 import GuardRouter from "./router/GuardRouter";

class App extends React.Component {
  render() {
    return (
        <div>
          <Router>
            <nav>
                <NavLink activeStyle={{color:"red"}} to={"/acount"}>账号</NavLink>|
                <NavLink path = {"/"}activeStyle={{color:"red"}} exact to = {"/find"}>发现</NavLink>|
                <NavLink activeStyle={{color:"red"}} to={"/my"}>我的</NavLink>|
                <NavLink activeStyle={{color:"red"}} to={"/cloud"}>云村</NavLink>|
                <NavLink activeStyle={{color:"red"}} to={"/video"}>视频</NavLink>|
                <NavLink activeStyle={{color:"red"}} to={"/search"}>搜索</NavLink>
            </nav>
            <Route render={()=><GuardRouter isAuthorization={true} component={Find} />} path={"/"} exact></Route>
            <Route  component={Video} path={"/video"} ></Route>
            <Route component={My} path={"/my"} ></Route>
            <Route component={Cloud} path={"/cloud"} ></Route>
            <Route component={Acount} path={"/acount"} ></Route>
            <Route component={Search} path={"/search"} ></Route>
        </Router>
        </div>
    )
  }
}
export default App;
