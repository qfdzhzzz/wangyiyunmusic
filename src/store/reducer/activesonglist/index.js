import initState from "../../state/activesonglist"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_ACTIVE_SONG_LIST"){
        console.log("activesonglist",payload);

        state.tracks = payload.tracks;
        console.log("tracks",state.tracks);

        state.info = {
            name:payload.name,
            description:payload.description,
            background:payload.coverImgUrl,
            count:payload.subscribedCount,
            playcount:payload.playCount,
            sharecount:payload.shareCount
        }
        state.activesongList=state.info;
        state.tracksList=state.tracks


        // state.activesongList=payload.tracks
        // state.info ={
        //     s:payload.info
        // }
    }
    console.log("activesonglist",state)
    return state;
}