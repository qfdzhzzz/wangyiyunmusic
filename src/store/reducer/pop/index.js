import initState from "../../state/pop"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_POP_LIST"){
        //console.log("pop",payload);
        state.popList=payload
    }
    // console.log("pop",state)
    return state;
}