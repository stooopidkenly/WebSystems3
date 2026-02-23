const add = (a, b) => {
    return a + b;
}

const multiply = (x, y) => {
    return x*y;
}

const color = (number) => {
    if(number == 1){
        return "Red";
    }
    else if(number == 2){
        return "Green";
    }
    else if(number == 3){
        return "Blue";
    }else{
        return "White";
    }
};

module.exports = {
    add,
    multiply, 
    color,
    age: 21,
    greeting: "Good Evening!",
    contact: 123456789
}
// console.log("Answer is: " + add(4,5));
// console.log("Answer is: " + multiple(5, 5));
// console.log(color(1));