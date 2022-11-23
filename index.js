// code your solution here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun("watch ball"));
function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`
}
console.log(mondayWork("go to the field"));
function wrapAdjective(visual = "*"){
    return function(adjective = "special"){
        return `You are ${visual}${adjective}${visual}!`;
    };
}
console.log(wrapAdjective("||")("a dedicated programmer"));


