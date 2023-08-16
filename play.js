const prod = (a,b) => a*b;
console.log(prod(5,7)); 

const student={
    name: 'Yash',
    age:25,
    greet:() => {
        console.log(`i am ${this.name}`);
    }
};
student.greet();