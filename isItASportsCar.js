const car = {
    make: "Tata",
    model: "Nano",
    horsepower: 450
}

// without destructuring of object
// const isSportsCar = (carObj)=>carObj.horsepower>=300;

// with destructuring of object
const isSportsCar = ({make, model, horsepower})=>horsepower>=300;
console.log(isSportsCar(car));