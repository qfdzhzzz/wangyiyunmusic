import initState from "../../state/recommend"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_RECOMMEND_LIST"){
        console.log(77777,payload);
        state.recommendList=payload
    }
    console.log(77777,state)
    return state;
}