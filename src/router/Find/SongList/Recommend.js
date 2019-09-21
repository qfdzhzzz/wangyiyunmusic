import React from "react";
import "../../../assets/style/Find/songlist/recommend.css"

import {connect} from "react-redux"
import axios from "axios";

import { Carousel, WingBlank } from 'antd-mobile';


class Recommend extends React.Component{

    // renderContent = tab =>
    //     (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
    //         <p>Content of {tab.title}</p>
    //     </div>);

    state = {
        data: ['1', '2', '3','4','5','6','7','8'],
        imgHeight: 150,
       recommendList:[],
        bannerList:[]
    }
    render(){
        const {recommendList,getrecommendList,bannerList,
            getbannerList,}=this.props;

        return (
            <div id = "main">
                <div id = "activeNav">
                    <WingBlank >
                        <Carousel
                            autoplay={true}
                            infinite
                            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            //afterChange={index => console.log('slide to', index)}
                        >
                            {bannerList.map(v => (
                                <img
                                    key={v}
                                    src={v.pic}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top',border:'10px'}}
                                    onLoad={() => {
                                        // fire window resize event to change height
                                        window.dispatchEvent(new Event('resize'));
                                        this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                // </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </div>

                <ul>
                    {
                        recommendList.map(v=>(
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
        this.props.getrecommendList();
        this.props.getbannerList();
        setTimeout(() => {
            this.setState({
                data: ['f-hchKAjNhYOXkjNwZyFfw==/109951164370202059', '-E4c8AK6evlKUxLPSnpcuQ==/109951164370202737', '6S7CEnMJ7uimxIDTX82FDA==/109951164368381216','QpJx1cS3bc2j1PP_l8W3xA==/109951164370069830','vSPuggEIyo2no29_I2Fm8w==/109951164368695918', 'nDv_R41HG0H9KZXR25d29A==/109951164368447735','MafZhzTAP_s58UvUeKMzog==/109951164366929874','hUezTHAA1NW48B34iy4hyw==/109951164368389839'],
            });
        }, 100);


    }
}


function mapStateToProps(state) {
    return {
        recommendList:state.recommend.recommendList,
        bannerList:state.banner.bannerList,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getrecommendList(){
            // console.log(this)
            dispatch(async ()=>{
                const recommendres = await axios.get("http://114.55.253.153:8080/top/playlist/highquality/limit=50");
                console.log(recommendres)
                dispatch({
                    type:"GET_RECOMMEND_LIST",
                    payload:recommendres.playlists
                })
            })
        },
        getbannerList(){
            dispatch(async ()=>{

                const res = await axios.get("http://114.55.253.153:8080/banner?type=1");
                console.log(res.banners)
                dispatch({
                    type:"GET_BANNER_LIST",
                    payload:res.banners
                })
            })

        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Recommend);