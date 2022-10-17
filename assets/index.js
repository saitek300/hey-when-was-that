// current date
var today = moment().format("MMM Do, YYYY");
$("#currentDay").text(today);

// text area selector
var textArea = document.querySelector("textarea");


//save button
var saveBtn = document.querySelector('#save');

//Change textarea background color based on time
var checkTime = function () {

    //Get Current time
    var currentTime = moment().format('H');

    //get all elements with class "textarea"
    var timeBlockElements = $(".textarea");

    //loop through textarea classes
    for (var i = 0 ; i < timeBlockElements.length ; i++) {

        //Get element i's ID as a string
        var elementID = timeBlockElements[i].id;

        //get element by ID
        var manipID = document.getElementById(timeBlockElements[i].id)

        //remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".present .past .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(manipID).addClass("past");
        } else if (elementID > currentTime) {
            $(manipID).addClass("future");
        } else {
            $(manipID).addClass("present");
        }
    }
}

// checkTime every 5 minutes
setInterval(checkTime(), (1000 * 60) * 5);

// render message in text area
renderLastResgistered();

function renderLastResgistered(){
var text = localStorage.getItem("#09");
textArea.textContent = text;
}

function displayMessage(type, message) {
    textArea.textContent = message;
    textArea.setAttribute("class", type);
  }    

//save button listener
saveBtn.addEventListener('click',function(event){
    event.preventDefault();
    var textArea = document.querySelector("textarea").value;
    
    localStorage.setItem("#09", textArea);
    renderLastResgistered();
});