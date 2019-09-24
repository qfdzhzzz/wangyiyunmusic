

//需要引入的reducer模块
import banner from"./banner"
import song from "./song"
import newdish from"./newdish"
import wangyimv from"./wangyimv"
import recommend from"./recommend"
import pop from"./pop"
import ranklist from "./ranklist"
import radiotype from"./radiotype"
import pay from"./pay"
import radiotoday from "./radiotoday"
import djprogram from"./djprogram"
import activesonglist from"./activesonglist"
import playsonglist from"./playsonglist"
import mvurl from"./mvurl"
import songcomment from"./songcomment"

import {
    combineReducers
} from "redux";
export default combineReducers({
    //写入reducer模块 下面内容根据情况写入
    banner,
    song,
    newdish,
    wangyimv,
    recommend,
    pop,
    ranklist,
    radiotype,
    pay,
    radiotoday,
    djprogram,
    activesonglist,
    playsonglist,
    mvurl,
    songcomment
})