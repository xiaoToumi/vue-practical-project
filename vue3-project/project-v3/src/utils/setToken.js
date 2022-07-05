//存储
export function setToken(tokenKey,token){
    return localStorage.setItem(tokenKey,token)
}
//读取
export function getToken(tokenKey){
    return localStorage.getItem(tokenKey)
}
//移除
export function removeToken(tokenKey){
    return localStorage.removeItem(tokenKey)
}