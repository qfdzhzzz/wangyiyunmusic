import initState from "../../state/djprogram"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_DJ_PROGRAM_LIST"){
        console.log("djprogram",payload);
        state.djprogramList=payload
    }
    console.log("djprogram",state)
    return state;
}