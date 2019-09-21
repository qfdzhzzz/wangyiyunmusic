import initState from "../../state/radiotoday"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_RADIO_TODAY_LIST"){
        console.log("radiotoday",payload);
        state.radiotodayList=payload
    }
    console.log("radiotoday",state)
    return state;
}