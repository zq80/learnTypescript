class DateUtil{
    static dateUtil:DateUtil
    static getInstance(){
        if(!this.dateUtil){
            this.dateUtil=new DateUtil()
        }
        return this.dateUtil
    }
    private constructor(){
        console.log("new yi ge")
    }
    formatDate(){console.log("formate date")}
     
}
console.log("abc")
// const d1= DateUtil.getInstance()
// const d2= DateUtil.getInstance()
// console.log(d1===d2)
// d1.formatDate()
export{}
//单例模式