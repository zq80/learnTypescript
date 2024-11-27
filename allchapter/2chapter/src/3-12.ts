class People{
    name:string;
    private _age!:number;
    addr:string;
    static count:number=0
    constructor(_name:string,_addr:string){
         this.name=_name
         this.addr=_addr
         People.count++
    }
    doEat(){
 
    }
    set age(val:number){
        if(val>10 && val<100){
            this._age=val
        }else{
            throw new Error("err")
        }
        
    }
    get age(){
        return this._age
    }
 }

 let p=new People("wanwu","beijing")
 p.age=200
 


export{}