let str: string | undefined='1177'
console.log("str:",str)

function fn(data?:string){
 console.log("data",data)
//  if(data) data.toString()
    console.log(data?.toString())   
}
fn()

let obj={username:"zhangz",age:23}
const username='username'
let u=obj[username]

function f1(str:string){
    console.log(str)
}

function info(name:string,age:number,...rest1:any){
    console.log("name:",name," age:",age," rest:",rest1)
    return rest1
}

info("wangwu",23,"abcv",123,45)

export{}
