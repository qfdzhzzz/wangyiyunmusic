import initState from "../../state/playsonglist"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_PLAY_SONG_LIST"){
        console.log("playsonglist",payload);
        state.playsongList=payload
    }
    console.log("playsonglist",state)
    return state;
}