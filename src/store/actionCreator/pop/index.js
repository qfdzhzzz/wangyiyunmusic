// import axios from "axios"
// export const getpopList = function(payload){
//     return{
//         type:"GET_POP_LIST",
//         payload
//     }
// }
// export default {
//     getpopList(){
//         return async (dispatch)=>{
//             const popres = await axios.get("http://114.55.253.153:8080/top/playlist/pop")
//             console.log(popres,"pop")
//             dispatch(getpopList(popres.playlists))
//         }
//     }
// }