class People{
   name:string;
   age:number;
   addr:string;
   par1:string="dddd"
   par2?:string
   par3!:string
   static count:number
   constructor(_name:string,_age:number,_addr:string){
        this.name=_name
        this.age=_age
        this.addr=_addr
   }
   doEat(){

   }
}
let p=new People("zq",22,"sz");
p.doEat()
People.count=1


export{}