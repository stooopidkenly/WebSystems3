const studentLevel = (year) => {
    if(year == 1){
        return "Freshman";
    }
    else if(year == 2){
        return "Sophomore";
    }
    else if(year == 3){
        return "Junior";
    }else if(year == 4){
        return "Senior";
    }else{
        return "Year Level Not Valid";
    }
};

const isPassing = (unitsCompleted) => {
    if(unitsCompleted >= 30){
        return true;
    }else{
        return false;
    }
}

const averageGrade = (a, b, c, d, e) => {
    return (a + b + c + d + e) / 5;
}

module.exports = {
    studentLevel,
    isPassing,
    averageGrade,
    school: "Camarines Sur Polytechnic Colleges"
}
//console.log(averageGrade(10, 10, 10, 10, 9));
// console.log(isPassing(30));
//console.log(studentLevel(1));