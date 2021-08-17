//----Promises----

//"I Promise a Result!"

//"Producing code" is code that can take some time

//"Consuming code" is code that must wait for the result

//A Promise is a JavaScript object that links producing code and consuming code

let str = "This is a string!!!";
console.log(str);

const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        str += " This is another string.";
        console.log(str);
        resolve(str);
    }, 10000);
});
p.then((data) => {
    return data += " And another string.";
}).then((data) => {
    setTimeout(() => {data += " The end;"; console.log(data)}, 5000)
});
