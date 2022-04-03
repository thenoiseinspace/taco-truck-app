alert("Hello! Welcome to our taco truck ordering app!"); 

let answer = prompt("Would you like to place an order? Please answer either yes or no.")

console.log(answer)

// Using the console.log method, confirm that the variable `answer` is storing/receiving the input

if (answer === 'yes'){
    alert("Great! We have two items: tacos and nachos. We offer three protein options: chicken, beef, and veggie.")
  
  } else if (answer === 'no'){
        alert("Okay, see you next time")
    
  } else {
        alert("Argh, our app can only accept yes or no answers! Please say either yes or no.")
  }
  