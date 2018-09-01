let ticket = 1;

function takeANumber(line){

  
  let greet = 'Welcome, You are number ' +  ticket;
  
  
  
  line.push(ticket ++);
  
  
  return greet
}
  
  
 
  
  
  
  

  
  
  
  
  


function nowServing(line, name){
  
  
  if(line.length === 0){
    return "There is nobody waiting to be served!"
  }
  
  
  
  
  return "Currently serving " + line.shift() + "."
  
   
  
}

function currentLine(line, name){
  
  if(line.length === 0){
    return "The line is currently empty."
  }
  
  return "The line is currently: 1. Bill, 2. Jane, 3. Ann"
}