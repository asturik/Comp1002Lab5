// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.
// All Errors:
// FIX #1: (#themeButton → #themeBtn)
// FIX #2: ("darkmode" → "dark-mode")
// FIX #3: (messageinput → messageInput)
// FIX #4: ("change" → "input")
// FIX #5: (function() → function(event))

let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");

//FIX #1: (#themeButton → #themeBtn)
// The id in the HTML is "themeBtn", not "themeButton" (ids don't match)
let themeBtn = document.querySelector("#themeBtn");

let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button

helloBtn.addEventListener("click", function() {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle

// FIX #2: ("darkmode" → "dark-mode")
// The class in CSS is "dark-mode", not "darkmode" (classes don't match)
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// 3. Live Input

// FIX #3: (messageinput → messageInput) 
// "messageinput" is the wrong variable name. The i should be capital.
// FIX #4: ("change" → "input") - *Not nessarily a bug, but it makes more sense for a "Live Input" feature. 
// Before, the "Live Input" only displayed the message after the text area was not in use. 
// Now, with "input" as the event, the output clearly demonstrates the "live" aspect, as the 
// event doesnt need to lose focus to trigger the event listener. 
// (The output changes as the user types)
messageInput.addEventListener("input", function() {
    liveOutput.textContent = messageInput.value;
});

// 4. Welcome Form

// FIX #5: (function() → function(event))
// event not defined - error java gave. 
// I needed to add event in the function to retreive the event object and use it
// (further identifying it and allowing preventDefault() to work).
welcomeForm.addEventListener("submit", function(event) {
    event.preventDefault();
    formOutput.textContent = "Welcome, " + nameInput.value;
});