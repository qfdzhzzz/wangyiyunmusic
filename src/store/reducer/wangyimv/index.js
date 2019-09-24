import initState from "../../state/wangyimv"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_MV_LIST"){
        console.log(5555,payload);
        state.mvList=[];
        state.mvList=[...payload];
         // state.limit+=10;
        state.offset++;
    }
    //console.log(5555,state)
    return state;
}