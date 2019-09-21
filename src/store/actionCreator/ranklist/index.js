// import axios from "axios"
// export const getrankList = function(payload){
//     return{
//         type:"GET_RANK_LIST",
//         payload
//     }
// }
// export default {
//     getrankList(){
//         return async (dispatch)=>{
//             const rankres = await axios.get("http://114.55.253.153:8080/toplist/detail")
//             console.log(rankres,"rank")
//             dispatch(getrankList(rankres.list))
//         }
//     }
// }