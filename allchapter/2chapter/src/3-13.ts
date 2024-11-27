class People{
    name:string;
    age:number;
    addr:string;
    static count:number=0
    constructor(_name:string,_age:number,_addr:string){
         this.name=_name
         this.age=_age
         this.addr=_addr
         People.count++
    }
    doEat(who:string,where:string){ console.log(`who:${who},where:${where}`)}
    doStep(){}
 }
//  let p=new People("zq",22,"sz");
 
 
//  let p2=new People("z2",33,"dsfs")
//  let p3=new People("z3",33,"dsfs")
 
//  console.log("peo:",People.count)
class StringUtil{
    static trimSpace(str:string){
        return str.replace(/\s+/g,"")
    }
}
 
 const dataProp= Object.getOwnPropertyDescriptor(People.prototype,"doEat")

 const targetMethod=dataProp!.value

dataProp!.value=function(...args:any[]){
    args=args.map(arg=>{
        if(typeof arg==="string") return StringUtil.trimSpace(arg)
        return arg
    })
    console.log("前置拦截")
    targetMethod.apply(this,args)
    console.log("后置拦截")
}

//  dataProp?.value('zq','sz')

Object.defineProperty(People.prototype,"doEat",dataProp!)
let p=new People("zq",22,"sz");
p.doEat("z z "," s s ")

 
 export{}