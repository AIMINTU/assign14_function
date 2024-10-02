function make_avg(array){
    let average=0;
    for(const i=0;i<array.length;i++){
        let total_number=array[i]
        average=average+total_number;
    }
    
    return average;
}
const result=[2,4,65,8,4,7,54,2,4,2478]
console.log(make_avg(result))
