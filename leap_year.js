
function checkLeapYear(year){
    return year%4===0 && year %100 !==0 ||  year%400===0;
}
console.log(checkLeapYear(2004))
console.log(checkLeapYear(2008))
console.log(checkLeapYear(2005))