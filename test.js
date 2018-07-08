// this is a simple function which can be called just once

function once(fn) {
  isExecuted = false;
  return () => {
    if (!isExecuted){
      fn();
      isExecuted = true;
    }
  }
}

const f = () => console.log('Hello world');
const myFn = once(f);


myFn();
myFn();
myFn();
myFn();
myFn();
