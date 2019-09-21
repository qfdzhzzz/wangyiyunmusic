// import axios from "axios"
// export const getradiotodayList = function(payload){
//     return{
//         type:"GET_RADIO_TODAY_LIST",
//         payload
//     }
// }
// export default {
//     getradiotodayList(){
//         return async (dispatch)=>{
//             const radiotodayres = await axios.get("http://114.55.253.153:8080/dj/today/perfered")
//             console.log(radiotodayres,"radiotoday")
//             dispatch(getradiotodayList(radiotodayres.data))
//         }
//     }
// }