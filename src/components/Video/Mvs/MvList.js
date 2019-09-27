//MV排行榜
import React from "react";
import {Tabs} from 'antd-mobile';
import '../../../assets/style/Video/MoreMvs.css';
import Nd from  "./MvLists/Nd";
import Gt from  "./MvLists/Gt";
import Om from  "./MvLists/Om";
import Hg from  "./MvLists/Hg";
import Rb from  "./MvLists/Rb"



const tabs = [
    { title:'内地' },
    { title: '港台'},
    { title: '欧美' },
    { title: '韩国' },
    { title: '日本' },
];


export default class MvList extends React.Component{
    render() {
        return (
            <div>

                <div className={'title'}>
                    <p>
                        <i className={'iconfont icon-flow'} onClick={() => {
                            this.props.history.go(-1)
                        }}/>
                        MV精选
                    </p>
                </div>

<div className={'wrap'}>
    <Tabs tabs={tabs} tabBarActiveTextColor={'red'}>
        <Nd/>
        <Gt/>
        <Om/>
        <Hg/>
        <Rb/>
    </Tabs>
</div>


            </div>
        );
    };
}