//MV分类
import React from "react";
import '../../../assets/style/Video/MvSort.css'

export default class MvSort extends React.Component{
    constructor() {
        super();
        this.state= {
            alldata:[]
        }
    }

    render() {
        return (
            <div>
                <div className={'title'}>
                    <p>
                        <i className={'iconfont icon-flow'} onClick={() => {
                            this.props.history.go(-1)
                        }}/>
                        MV分类
                    </p>
                    <div className={'choice'}>
                        <div style={{marginLeft:"15px"}}>
                            <p>1.</p>
                            <p>2.</p>
                            <p>3</p>
                        </div>

                        <p style={{float:'right', marginRight:'15px'}}>
                            <i className={'iconfont icon-shaixuanxuanzhong'} style={{fontSize:'12px'}}/>
                            筛选
                        </p>
                    </div>
                </div>


                <div className={'wraps'}>
                <div className={'more-nd'} >
                    {
                     this.state.alldata.map(alldataItem=>(
                        <div className={'more-one'}  key={alldataItem.id}>
                            <img src={alldataItem.cover}/>
                            <p>{alldataItem.name}</p>
                            <h6>{alldataItem.artistName}</h6>
                        </div>
                     ))
                    }

                </div>
                </div>
         </div>
        );
    };




    async fn1() {
        await this.$axios.get('http://114.55.253.153:8080/mv/all').then((datas) => {
            console.log(datas)
            this.setState({
                alldata:datas.data,
            });
        });
    }



    componentDidMount() {
        this.fn1();
        // console.log(this.props)
    }

}