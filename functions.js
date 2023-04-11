function greet(text) {
    console.log("welcome to our website " + text);
  }
  
  console.log("rest of the code");
  
  function signUp() {
    let name = prompt("what is your name?");
    greet(name);
  }
  ///
  ////
  /////
  // signUp();
  
  function max(nr1 = 0, nr2 = 0) {
    if (nr1 > nr2) {
      return nr1;
    } else {
      return nr2;
    }
  }
  
  let inbox = max(50, 200);
  console.log(inbox);
  