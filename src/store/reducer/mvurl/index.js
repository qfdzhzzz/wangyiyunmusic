import initState from "../../state/mvurl"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_MV_URL_LIST"){
        console.log("mvurllist99999999999999999",payload);
        state.mvurlList=payload
    }
    // console.log("djprogram",state)
    return state;
}