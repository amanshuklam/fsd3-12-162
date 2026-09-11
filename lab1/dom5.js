import { EventEmitter } from "events";

class DomClass extends EventEmitter {
  addEventListener(eventName, callback) {
    this.on(eventName, callback);
  }
  removeEventListener(eventName, callback) {
    this.off(eventName, callback);
  }
  dispatchEvent(eventName, eventData = {}) {
    const event = {
      type: eventName,
      timestamp: new Date(),
      ...eventData,
    };
    this.emit(eventName, event);
  }
}

const button = new DomClass();

const handleClick = (event) => {
  console.log(`Button click type: ${event.type} at ${event.timestamp}`);
};

// Add listener
button.addEventListener("click", handleClick);

// Dispatch event
button.dispatchEvent("click", {
  target: "submitBtn",
});

// Remove listener
button.removeEventListener("click", handleClick);

// Dispatch again (this won’t trigger anything since listener is removed)
button.dispatchEvent("click", {
  target: "resetBtn",
});
