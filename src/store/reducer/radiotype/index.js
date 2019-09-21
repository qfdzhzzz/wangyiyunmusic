import initState from "../../state/radiotype"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_RADIO_TYPE_LIST"){
        console.log("radiotype",payload);
        state.radiotypeList=payload
    }
    console.log("radiotype",state)
    return state;
}