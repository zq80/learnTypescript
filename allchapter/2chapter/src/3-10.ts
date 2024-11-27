class DateUtil{
    static dateUtil=new DateUtil()
    private constructor(){
        console.log("new yi ge")
    }
    formatDate(){}
     
}

// let dateUtil=new DateUtil();
const dateUtil1=DateUtil.dateUtil
const dateUtil2=DateUtil.dateUtil
console.log(dateUtil1===dateUtil2)
dateUtil1.formatDate();


//静态方法