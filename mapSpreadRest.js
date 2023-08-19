const obj1 = {'key1': 1}
const obj2 = { ...obj1}
if(obj2 === obj1){
console.log('same objects')
}
else{
console.log('different objects')
}

const obej1 = {'key1': 1 , 'key2' : 2}
const obej2 = { ...obej1, key1: 1000}
console.log(obej1)
console.log(obej2)

