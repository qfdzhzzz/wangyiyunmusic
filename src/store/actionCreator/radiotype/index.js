// import axios from "axios"
// export const getradiotypeList = function(payload){
//     return{
//         type:"GET_RADIO_TYPE_LIST",
//         payload
//     }
// }
// export default {
//     getradiotypeList(){
//         return async (dispatch)=>{
//             const radiotyperes = await axios.get("http://114.55.253.153:8080/dj/catelist")
//             console.log(radiotyperes,"radiotype")
//             dispatch(getradiotypeList(radiotyperes.categories))
//         }
//     }
// }