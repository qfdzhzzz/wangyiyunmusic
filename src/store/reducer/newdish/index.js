import initState from "../../state/newdish"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_NEW_DISH_LIST"){
        console.log(4444,payload);
        state.newdishList=payload
    }
    console.log(4444,state)
    return state;
}