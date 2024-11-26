type DataFlow=string | number | boolean | object

function dataFlowAnalysisWithNever(dataFlow:DataFlow){
    if (typeof dataFlow==="string"){
        console.log("字符串类型",dataFlow.length)
    }else if(typeof dataFlow==="number"){
        console.log(dataFlow.toFixed(2))
    }else{
        let data=dataFlow
    }
}