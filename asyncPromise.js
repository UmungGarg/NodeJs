console.log('a');

console.log('b');

setTimeout(() => {
    console.log('c');
    fetchData().then(text => {
        console.log(text);
    });
 }, 3000)

const fetchData = async () => {
    return await new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('d');
            fetchData2().then(text2 => {
                console.log(text2);
            });
        }, 0);
    });
}
    
const fetchData2 = async () => {
    return await new Promise((resolve,reject) => {
        resolve('e');``
    })
}
