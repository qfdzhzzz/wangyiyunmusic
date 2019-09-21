// import axios from "axios"
// export const getsongList = function(payload){
//     return{
//         type:"GET_SONG_LIST",
//         payload
//     }
// }
// export default {
//     getsongList(limit){
//         return async (dispatch)=>{
//             const songres = await axios.get("http://114.55.253.153:8080/personalized?limit=6")
//             console.log(songres,11111)
//             dispatch(getsongList(songres.result))
//         }
//     }
// }