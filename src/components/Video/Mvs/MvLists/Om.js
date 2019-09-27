import React from "react";
export default class Om extends React.Component{
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
        await this.$axios.get('http://114.55.253.153:8080/top/mv?area=%E6%AC%A7%E7%BE%8E&limit=50').then((datas) => {
            console.log(datas)
            this.setState({
                data:datas.data,
            });
        });
    }
}