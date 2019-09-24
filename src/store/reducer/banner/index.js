import initState from"../../state/banner"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_BANNER_LIST"){
        state.bannerList=payload
    }
    // console.log(3333333,state)
    return state;
}