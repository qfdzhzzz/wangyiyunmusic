// import axios from "axios"
// export const getmvList = function(payload){
//     return{
//         type:"GET_MV_LIST",
//         payload
//     }
// }
// export default {
//     getmvList(offset,limit){
//         return async (dispatch)=>{
//             const mvres = await axios.get("`http://114.55.253.153:8080/top/mv?offset=${this.offset}&limit=${this.limit}`")
//             console.log(mvres,88888)
//             dispatch(getmvList(mvres.data))
//         }
//     }
// }