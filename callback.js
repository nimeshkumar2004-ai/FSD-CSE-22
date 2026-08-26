//for maintaining sequence order of task.

function register(cb) {
    setTimeout(()=>{
         console.log("register here")
         cb();
    },5000);
   
}

function login(cb) {
    setTimeout(()=>{
console.log("login here")
cb();
},3000);
}
   

function getData(cb) {
    setTimeout(()=>{
 console.log("fetch data")
 cb();
    },2000);
    
}

function displayData() {
    setTimeout(()=>{
 console.log("display data");
    },4000);
}
   

//callback Hell Problem.
register(
    ()=>{
        login(
            ()=>{
                getData(
                    ()=>{
                        displayData();
                    }
                )
            }
        );
    }
);

console.log("Call Another Application");