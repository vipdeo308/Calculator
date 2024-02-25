// Initialize the Variables 
let currentDisplay = "0"; // The Current Display
let resultDisplay = false; // Whether the Result is Displayed

// Function to Update the Calculator Display
function updateDisplay() 
{
    const displayElement = document.getElementById("display");
    displayElement.innerText = currentDisplay;
}

// Function to Append a Value to the Current Display
function appendToDisplay(value) 
{
    if(currentDisplay==="0"||resultDisplay) 
    {
      currentDisplay = value;
    } 
    else 
    {
      currentDisplay += value;
    }
  
    // Reset the result display flag to false  
    resultDisplay = false;
  
    // Update the calculator display
    updateDisplay();
  }

//Function to Calculate and Display the Result
function calculateResult() 
{
    try {
      // Use the eval() Function to Evaluate the Expression
      const result = eval(currentDisplay);
  
      // Append the Result to the Current Display
      currentDisplay += "\n=" + result.toString();
  
      // Update the Calculator Display with the Result
      updateDisplay();
    } catch (error) {
      // If there is an Error in the Expression
      currentDisplay += "\nError";
  
      // Update the Calculator Display
      updateDisplay();
    }
  
    // Set the Result Display Flag to true
    resultDisplay = true;
  }

function clearDisplay() 
{
    currentDisplay = "0"; // Reset the Current Display to "0"
    resultDisplay = false; // Reset the Result Display Flag to false
  
    // Update the Calculator Display    
    updateDisplay();
}

// Function to Clear the Last Element from the Current Display
function clearLastElement() 
{
    // Remove the Last Character from the Current Display
    currentDisplay = currentDisplay.slice(0, -1);
  
    // If the Current Display Becomes Empty, Set it Back to "0"
    if (currentDisplay === "") 
        currentDisplay = "0";
  
    // Update the Calculator Display to Reflect the Changes
    updateDisplay();
}

