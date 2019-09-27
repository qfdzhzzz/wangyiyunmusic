import React from 'react';
import './App.css';

// import Acount from "./views/Acount";
// import Cloud from "./views/Cloud";
// import My from "./views/My";
// import Search from "./views/Search";
// import Video from "./views/Video";
// import Find from "./views/Find";

import Home from "./views/Home"
import {
  BrowserRouter as Router,
  Route,
  NavLink,
    Switch
} from "react-router-dom";


import Recommend from "./router/Find/Recommend";
import SongList from "./router/Find/SongList";
import RankList from "./router/Find/RankList";
import RadioStation from "./router/Find/RadioStation";
import LiveShow from "./router/Find/LiveShow";

import Radioclassification from "./router/Find/Radioclassification";
import Radiorank from "./router/Find/Radiorank";
import Premiumproducts from "./router/Find/Premiumproducts";
import Musicclassroom from "./router/Find/Musicclassroom";

import Activesonglist from "./router/Find/Activesonglist";
import Playsonglist from "./router/Find/Playsonglist";
import Songcomment from "./router/Find/Songcomment";




import  MoreMvs from "./components/Video/Mvs/MoreMvs"
import MvList from "./components/Video/Mvs/MvList";
import MvSort from "./components/Video/Mvs/MvSort";
import FocusAnchor from "./components/Video/Looks/FocusAnchor";
 // import GuardRouter from "./router/GuardRouter";

class App extends React.Component {
  render() {
    return (
        <div>
          <Router>
            {/*<nav id = "nav">*/}
            {/*    <NavLink activeStyle={{color:"red"}}exact to={"/acount"}>账号</NavLink>|*/}
            {/*    <NavLink activeStyle={{color:"red"}} exact  to = {"/find"}> 发现</NavLink>|*/}
            {/*    <NavLink activeStyle={{color:"red"}}exact to={"/my"}>我的</NavLink>|*/}
            {/*    <NavLink activeStyle={{color:"red"}}exact to={"/cloud"}>云村</NavLink>|*/}
            {/*    <NavLink activeStyle={{color:"red"}}exact to={"/video"}>视频</NavLink>|*/}
            {/*    <NavLink activeStyle={{color:"red"}}exact to={"/search"}>搜索</NavLink>*/}
            {/*</nav>*/}
            {/*<Route component={Find} path={"/find"}  exact></Route>*/}
            {/*  <Route  component={Video} path={"/video"} ></Route>*/}
            {/*  <Route component={My} path={"/my"} ></Route>*/}
            {/*  <Route component={Cloud} path={"/cloud"} ></Route>*/}
            {/*  <Route component={Acount} path={"/acount"} ></Route>*/}
            {/*  <Route component={Search} path={"/search"} ></Route>*/}

<Switch>
              <Route component={Recommend} path={"/recommend"} exact></Route>
              <Route  component={SongList} path={"/songlist"} ></Route>
              <Route component={RankList} path={"/ranklist"} ></Route>
              <Route component={RadioStation} path={"/radiostation"} ></Route>
              <Route component={LiveShow} path={"/liveshow"} ></Route>

            <Route component={Radioclassification} path={"/radioclassification"} exact></Route>
            <Route  component={Radiorank} path={"/radiorank"} ></Route>
            <Route component={Premiumproducts} path={"/premiumproducts"} ></Route>
            <Route component={Musicclassroom} path={"/musicclassroom"} ></Route>

            <Route component={Activesonglist} path={"/activesonglist/:id"} ></Route>

            <Route component={Playsonglist} path={"/playsonglist"} ></Route>

            <Route component={Songcomment} path={"/songcomment/"} ></Route>


{/*我的*/}

            <Route path={"/focusanchor"}  component={FocusAnchor}/>
            <Route path={"/moremvs"}  component={MoreMvs}/>
            <Route path={"/mvlist"}  component={MvList}/>
            <Route path={"/mvsort"}  component={MvSort}/>


              <Route path={"/"} component={Home}></Route>





</Switch>
        </Router>
        </div>
    )
  }
}
export default App;
