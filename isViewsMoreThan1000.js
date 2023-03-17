const blog = {
    title: "How to learn javascript",
    author: "John Doe",
    views: 2400
}

//Without restructuring of object
//const getViews = (blogObj)=>blogObj.views>1000;

//With restructuring of object
const getViews = ({title, author, views})=>views>1000;
console.log(getViews(blog));