export const getUserStorage=()=>{
const toks=JSON.parse(localStorage.getItem('userInfo')||null)
return toks?.token
}