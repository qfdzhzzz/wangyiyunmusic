import React from "react";
// import Cloud from "./Cloud";
// import GuardRouter from "../router/GuardRouter";
// import Find from "./Find";
// import My from "./My";
// import Acount from "./Acount";
// import Search from "./Search";

import {Tabs} from 'antd-mobile';
import '../assets/style/Video/index.css'
import Look from "../components/Video/Look";
import Scene from "../components/Video/Scene";
import Cover from "../components/Video/Cover";
import Recommend from "../components/Video/Recommend";
import Mv from "../components/Video/Mv";
import Bgm from "../components/Video/Bgm";

const tabs = [
    { title: '推荐'},
    { title: 'LOOK直播'},
    { title: '现场' },
    { title: '翻唱' },
    { title: '听BGM' },
    { title: 'MV' },
    { title: '舞蹈' },
    { title: 'ACG音乐' },
    { title: '生活' },
    { title: '最佳饭制' },

];

//导航
export default class Video extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            actionIndex:Number(sessionStorage.getItem('index')?sessionStorage.getItem('index'):0),
        }
    };
    render() {
        return (
            <div>
                <Tabs
                    tabs={tabs}
                    renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}
                    tabBarActiveTextColor={'red'}
                    initialPage={this.state.actionIndex}
                    onTabClick={(tab, index) => { this.tabOnclick(index) }}
                >
                    <Recommend></Recommend>
                    <Look></Look>
                    <Scene/>
                    <Cover/>
                    <Bgm/>
                    <Mv/>
                </Tabs>
            </div>
        );
    };
    // async componentDidMount() {
    //     const {data} = await this.$axios.get('http://114.55.253.153:8080/program/recommend');
    //     console.log(data);
    //     // data.forEach((item) => {
    //     //     tabs.push(item);
    //     // });
    //     // console.log(tabs)
    // }
    tabOnclick(index) {
        sessionStorage.setItem('index',index);
    }
    componentDidMount() {
    }
}