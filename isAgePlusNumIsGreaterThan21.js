const person = {
    name: "Jostein",
    age: 18
}

//Without destructuring object
//const isGreaterThan21 = (personObj,num)=>personObj.age+num>21;

//With destructuring of object
const isGreaterThan21 = ({name, age},num)=>age+num>21;
console.log(isGreaterThan21(person,4));