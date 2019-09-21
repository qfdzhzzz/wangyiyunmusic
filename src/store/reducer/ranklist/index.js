import initState from "../../state/ranklist"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_RANK_LIST"){
        console.log("ranklist",payload);
        state.rankList=payload
    }
    console.log("ranklist",state)
    return state;
}