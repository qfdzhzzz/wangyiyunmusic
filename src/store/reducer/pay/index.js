import initState from "../../state/pay"

export default function(state = initState,{type,payload}){
    state = JSON.parse(JSON.stringify(state));
    if(type ==="GET_PAY_LIST"){
        console.log("pay",payload);
        state.payList=payload
    }
    console.log("pay",state)
    return state;
}