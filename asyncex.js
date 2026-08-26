//asynchronous file system operations

function register() {
    setTimeout(()=>{
         console.log("register here");
    },5000);
   
}

function login() {
    setTimeout(()=>{
console.log("login here");
},3000);
}
   

function getData() {
    setTimeout(()=>{
 console.log("fetch data");
    },2000);
    
}

function displayData() {
    setTimeout(()=>{
 console.log("display data");
    },4000);
}
    

register();
login();
getData();
displayData();
console.log("Call Another Application");