// Document object model
import { EventEmitter } from "events";
const button =new EventEmitter();
button.on("click",()=>{
    console.log("Button clicked");
});
 button.emit("click");//register

// event emitter ka kam hai kisi event ko generate karna
// aur hamara kam hai use register karna