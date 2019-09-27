//MV精品
import React from "react";
import '../../../assets/style/Video/MoreMvs.css'
import "../../../assets/iconfont/videologo/iconfont/iconfont.css"

export default class MoreMvs extends React.Component{
    constructor() {
        super();
        this.state= {
            data:[],
            nddata:[],
            gtdata:[],
            omdata:[]
        }
    }
    render() {
        return (
            <div style={{background:'#fff'}}>
              <div className={'title'}>
                  <p>
                      <i className = {"iconfont"} onClick={() => {
                          this.props.history.go(-1)
                      }}>&#xe612;
                      </i>
                      MV精选
                  </p>
              </div>

                <div className={'wrap'}>
                <h4>网易出品</h4>
                <div className={'more'} >
                    {
                     this.state.data.map(dataItem=>(
                            <div className={'more-one'} key={dataItem.id}>
                                <img src={dataItem.cover}/>
                                <p>{dataItem.name}</p>
                            </div>
                     ))
                    }
                </div>


                <h4>内地</h4>
                <div className={'more-nd'} >
                    {
                        this.state.nddata.map(nddataItem=>(
                            <div className={'more-one'} key={nddataItem.id}>
                                <img src={nddataItem.cover}/>
                                <p>{nddataItem.name}</p>
                                <h6>{nddataItem.artistName}</h6>
                            </div>
                        ))
                    }
                </div>

                <h4>港台</h4>
                <div className={'more-nd'} >
                    {
                        this.state.gtdata.map(gtdataItem=>(
                            <div className={'more-one'} key={gtdataItem.id}>
                                <img src={gtdataItem.cover}/>
                                <p>{gtdataItem.name}</p>
                                <h6>{gtdataItem.artistName}</h6>
                            </div>
                        ))
                    }
                </div>


                <h4>欧美</h4>
                <div className={'more-nd'} >
                    {
                        this.state.omdata.map(omdataItem=>(
                            <div className={'more-one'} key={omdataItem.id}>
                                <img src={omdataItem.cover}/>
                                <p>{omdataItem.name}</p>
                                <h6>{omdataItem.artistName}</h6>
                            </div>
                        ))
                    }
                </div>
                </div>
            </div>
        );
    };





    async fn1() {
        await this.$axios.get('http://114.55.253.153:8080/mv/exclusive/rcmd?limit=2').then((datas) => {
          console.log(datas)
            this.setState({
                data:datas.data,
            });
        });
    }
    async fn2() {
        await this.$axios.get('http://114.55.253.153:8080/top/mv?area=%E5%86%85%E5%9C%B0&limit=4').then((datas) => {
            console.log(datas)
            this.setState({
                nddata:datas.data,
            });
        });
    }

    async fn3() {
        await this.$axios.get('http://114.55.253.153:8080/mv/all?area=%E6%B8%AF%E5%8F%B0&limit=4').then((datas) => {
            console.log(datas)
            this.setState({
                gtdata:datas.data,
            });
        });
    }
    async fn4() {
        await this.$axios.get('http://114.55.253.153:8080/mv/all?area=%E6%AC%A7%E7%BE%8E&limit=4').then((datas) => {
            console.log(datas)
            this.setState({
                omdata:datas.data,
            });
        });

    }



    componentDidMount() {
        this.fn1();
        this.fn2();
        this.fn3();
        this.fn4()
        // console.log(this.props)
    }
}