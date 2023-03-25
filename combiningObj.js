const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};



//const combineObjects = ({a,b},{c,d})=>({a:a,b:b,c:c,d:d})
const  combineObjects = ({a,b},{c,d})=>({a,b,c,d});

console.log(combineObjects(obj1,obj2));