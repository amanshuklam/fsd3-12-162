# Event Loop

 JS is synchronous and single threaded by default

 ## There can be async behaviour
 - with BrowserAPI - setTimeout, setInterval, setImmediate, nextTick
 - with promises
 - with event handlers

 # Promise
 - A function not executed immediately but it must be executed after a while it has some status during the execution.
 - At final it may resolve(success) or reject(unsuccessful).

 # Callback
 - that pass as an argument or the parameter to another function.

=>Modern javascript is divided into two categories-
 
1. common js(.cjs)-supports OOPS->require 
- priority(nextTick,Promise,setImmediate/setTimeout)
2. ModuleJS(.mjs)- follow modular approach, supports functional program->import
- priority(Promise,nextTick,setImmediate/setTimeout)