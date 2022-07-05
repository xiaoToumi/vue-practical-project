//用户名匹配
export function nameRule(rule,value,callback){
    //请输入4-10位的昵称
    let reg = /(^[a-zA-Z0-9]{4,10}$)/   //正则表达式
    if(value === ''){
      callback(new Error('请输入用户名'))
    }else if(!reg.test(value)){
      callback(new Error('请输入4-10位用户名'))
    }else{
      callback()
    }
}

//密码匹配
export function passRule(rule,value,callback){
    //请输入6-12位的包含大小写、字母、数字及特殊符号的密码
    let pass = /^\S*(?=\S{6,12})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/  //正则表达式
    if(value === ''){
      callback(new Error('请输入密码'))
    }else if(!pass.test(value)){
      callback(new Error('请输入6-12位的包含大小写、字母、数字及特殊符号的密码'))
    }else{
      callback()
    }
}
