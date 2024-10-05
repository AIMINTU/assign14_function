const arrays =[7,4,24,12,54,74];

function make_avg(Dhaka){
    let values=[];
    for(const vai_N of Dhaka){
       // console.log(vai_N)
        values.push(vai_N)
    }
    //console.log(values)
    let sum=0
    let newvalues= values.length;
    console.log(newvalues)

    for(const item of values){
        sum=sum+item
    }
    let result=sum/newvalues;
    return result
    //console.log(sum)
}

const result1=make_avg(arrays)
console.log(result1)
//make_avg(arrays)