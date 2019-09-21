// import axios from "axios"
// export const getnewdishList = function(payload){
//     return{
//         type:"GET_NEW_DISH_LIST",
//         payload
//     }
// }
// export default {
//     getnewdishList(limit){
//         return async (dispatch)=>{
//             const newdishres = await axios.get("http://114.55.253.153:8080/top/album?offset=0&limit=3")
//             console.log(newdishres,44444)
//             dispatch(getnewdishList(newdishres.result))
//         }
//     }
// }