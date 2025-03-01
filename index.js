// Code your solutions in this file
function writeCards(names, event) {
    // Create an empty array to store the messages
    let messages = [];
    
    // Loop through the array of names
    for (let i = 0; i < names.length; i++) {
      // Create a message for each name and add it to the messages array
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
      messages.push(message);
    }
    
    // Return the array of messages
    return messages;
  }
  
  // Example usage:
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  
  