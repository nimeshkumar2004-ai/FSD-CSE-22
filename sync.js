//synchronous file system operations

function register() {
    waitfordelay(1000);
    console.log("register here");
}

function login() {
     waitfordelay(2000);
    console.log("login here");
}

function getData() {
     waitfordelay(4000);
    console.log("fetch data");
}

function displayData() {
     waitfordelay(6000);
    console.log("display data");
}

function waitfordelay(delay){
    const mt=Date.now()+delay;
    while(Date.now()<mt){
        
    }
}

register();
login();
getData();
displayData();
console.log("Call Another Application");