import initState from "../../state/songcomment"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_SONG_COMMENT_LIST"){
        console.log("SONGCOMMENT",payload);
        state.songcommentList=payload
    }
    //console.log(77777,state)
    return state;
}