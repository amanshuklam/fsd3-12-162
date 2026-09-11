import{EventEmitter} from 'node:events'

const login=(name)=>{
    console.log(`${name} logged in`);
};

const start=()=>{
    console.log("The system has started");
};
const working=(name)=>{
    console.log(`${name} add items to cart`);
};
const checkout=(name)=>{
console.log(`${name} logged out`);
};
// const shut=()=>{
//     console.log("System shutting down");
// }

const task=new EventEmitter();
task.once("greet",start);
task.on("greet",login);
task.on("greet",working);
task.on("greet",checkout);
task.once("exit",(name)=>{
    console.log("System shutting down by"+ name);
});
task.emit("greet","Ankit Jukaria");
task.emit("greet","Mayank Jukaria");
task.off("greet",working);
task.emit("greet","amit")
task.emit("exit","Manager");

// login("Ankit Jukaria");
// start();