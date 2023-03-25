const person1 = { name: 'John', age: 25, occupation: 'Software Engineer' }
const person2 = { name: 'Jane', age: 45, occupation: 'Data Analyst' }

// const personInfo = (personObj)=>`${personObj.name} is ${personObj.age} years old`

const personInfo = ({name,age,occupation})=>`${name} is ${age} years old`

console.log(personInfo(person2));