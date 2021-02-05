const students = [
    {id:21, name: "omar Sunny"},
    {id:31 , name:"Manna"},
    {id:41 , name:"Moyuri"},
    {id:71 , name:"Dipjol"}
];
// const nameProperty =[];
// for(let i = 0; i<students.length; i++){
//     const element = students[i];
//     const result = element.name;
//     nameProperty.push(result);
// }
// console.log(nameProperty);

const names = students.map(element => element.name);
console.log(names);
const IDs = students.map(element => element.id);
console.log(IDs);
const bigger = students.filter(element => element.id>40);
console.log(bigger);
const biggerOne = students.find(element => element.id>40);
console.log(biggerOne);


