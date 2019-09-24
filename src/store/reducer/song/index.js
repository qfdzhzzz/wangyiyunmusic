import initState from "../../state/song"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_SONG_LIST"){
        //console.log(1111111,payload);
        state.songList=payload
    }
    //console.log(22222222,state)
    return state;
}