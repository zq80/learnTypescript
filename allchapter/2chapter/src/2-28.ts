class People{
   name:string;
   age:number;
   addr:string;
   par1:string="dddd"
   par2?:string
   par3!:string
   static count:number=0
   constructor(_name:string,_age:number,_addr:string){
        this.name=_name
        this.age=_age
        this.addr=_addr
        People.count++
   }
   doEat(){

   }
}
let p=new People("zq",22,"sz");
p.doEat()

let p2=new People("z2",33,"dsfs")
let p3=new People("z3",33,"dsfs")

console.log("peo:",People.count)

export{}