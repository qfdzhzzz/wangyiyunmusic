import React from "react";
import '../../../../assets/style/Video/Nd.css'
export default class Nd extends React.Component{
    constructor() {
        super();
        this.state= {
            data:[],
        }
    }
    render() {
        return (
            <div style={{background:'#fff'}}>
                <div className={'time'}>更新时间：</div>
                { this.state.data.map(dataItem=>(
                    <div className={'nd-one'}  key={dataItem.id}>
                        <img src={dataItem.cover}/>
                        <div>
                            <h2>{dataItem.name}</h2>
                            <p>{dataItem.artistName} </p>
                        </div>
                    </div>
                ))
                }
            </div>
        );
    }


    async componentDidMount() {
        await this.$axios.get('http://114.55.253.153:8080/top/mv?area=%E5%86%85%E5%9C%B0&limit=50').then((datas) => {
            console.log(datas)
            this.setState({
                data:datas.data,
            });
        });
    }
}