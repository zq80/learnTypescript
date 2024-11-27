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

 
 const dataProp= Object.getOwnPropertyDescriptor(People.prototype,"doEat")

 const targetMethod=dataProp!.value

dataProp!.value=function(...args:any[]){
    console.log("前置拦截")
    targetMethod.apply(this,args)
    console.log("后置拦截")
}

 dataProp?.value('zq','sz')
 
 export{}