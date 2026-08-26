//for making a function asynchronous..we use promise.

function register(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("register here");
            reject("Registration failed");
        }, 5000);
    });
}
function login(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("login here");
            resolve();
        },3000);
    });
}
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("fetch data");
            resolve();
        }, 2000);
    });
}
function displayData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("display data");
            resolve();
        }, 4000);
    });
}
// register().
//      then(login)
//      .then(getData)
//      .then(displayData)
//      .catch((err) => {
//          console.log("Error:", err);
//      });

async function test(){
    try{
        await register();
        await login();
        await getData();
        dispalyData();

    }
    catch(err){
        console.log("Error,err")
    }
}
test();
console.log("call another Application");