// day display
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// defined the global variables
var taskNine = document.querySelector("#task-9");
var taskTen = document.querySelector("#task-10");
var taskEleven = document.querySelector("#task-11");
var taskTwelve = document.querySelector("#task-12");
var taskOne = document.querySelector("#task-13");
var taskTwo = document.querySelector("#task-14");
var taskThree = document.querySelector("#task-15");
var taskFour = document.querySelector("#task-16");
var taskFive = document.querySelector("#task-17");
var submissionFormNine = document.querySelector("#nine");
var submissionFormTen = document.querySelector("#ten");
var submissionFormEleven = document.querySelector("#eleven");
var submissionFormTwelve = document.querySelector("#twelve");
var submissionFormThirteen = document.querySelector("#thirteen");
var submissionFormFourteen = document.querySelector("#fourteen");
var submissionFormFifteen = document.querySelector("#fifteen");
var submissionFormSixteen = document.querySelector("#sixteen");
var submissionFormSeventeen = document.querySelector("#seventeen");
var taskNineAgain, taskTenAgain, taskElevenAgain, taskJuuniji, taskThirteen, taskFourteen, taskFifteen, taskSixteen, taskSeventeen;

// when save button is clicked, the form is saved
submissionFormNine.addEventListener("click", function(event){
    event.preventDefault();
    taskNineAgain = taskNine.value.trim();
    localStorage.setItem("task-9", taskNineAgain);
})

submissionFormTen.addEventListener("click", function(event){
    event.preventDefault();
    taskTenAgain = taskTen.value.trim();
    localStorage.setItem("task-10", taskTenAgain);
})

submissionFormEleven.addEventListener("click", function(event){
    event.preventDefault();
    taskElevenAgain = taskEleven.value.trim();
    localStorage.setItem("task-11", taskElevenAgain);
})

submissionFormTwelve.addEventListener("click", function(event){
    event.preventDefault();
    taskJuuniji = taskTwelve.value.trim();
    localStorage.setItem("task-12", taskJuuniji);
})

submissionFormThirteen.addEventListener("click", function(event){
    event.preventDefault();
    taskThirteen = taskOne.value.trim();
    localStorage.setItem("task-13", taskThirteen);
})

submissionFormFourteen.addEventListener("click", function(event){
    event.preventDefault();
    taskFourteen = taskTwo.value.trim();
    localStorage.setItem("task-14", taskFourteen);
})

submissionFormFifteen.addEventListener("click", function(event){
    event.preventDefault();
    taskFifteen = taskThree.value.trim();
    localStorage.setItem("task-15", taskFifteen);
})

submissionFormSixteen.addEventListener("click", function(event){
    event.preventDefault();
    taskSixteen = taskFour.value.trim();
    localStorage.setItem("task-16", taskSixteen);
})

submissionFormSeventeen.addEventListener("click", function(event){
    event.preventDefault();
    taskSeventeen = taskFive.value.trim();
    localStorage.setItem("task-17", taskSeventeen);
})

// displays the task after refresh
document.getElementById("task-9").value = localStorage.getItem("task-9");
document.getElementById("task-10").value = localStorage.getItem("task-10");
document.getElementById("task-11").value = localStorage.getItem("task-11");
document.getElementById("task-12").value = localStorage.getItem("task-12");
document.getElementById("task-13").value = localStorage.getItem("task-13");
document.getElementById("task-14").value = localStorage.getItem("task-14");
document.getElementById("task-15").value = localStorage.getItem("task-15");
document.getElementById("task-16").value = localStorage.getItem("task-16");
document.getElementById("task-17").value = localStorage.getItem("task-17");

// changes the classes of the inputs depending on the time
setInterval(function(){
    var elements = document.querySelectorAll("input")
    elements.forEach(element => {
        var id = element.getAttribute("id");
        var number = id.split("-")[1];
        if(moment().hour() == number){
            element.classList.add("present");
        }else if(moment().hour() < number){
            element.classList.add("future");
        }else{
            element.classList.add("past");
        }
    });
},1000)