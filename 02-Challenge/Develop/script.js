// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule:
// 1) Open the planner, the current day is displayed at the
//    top of the calendar.
// 2) Scroll down, presented with timeblocks by business time.
// 3) Timeblocks for that day color-coded, past, present, future.
// 4) ***DONE***Click into a timeblock, can enter an event.
// 5) Click save button for that timeblock, event text saved to LS.
// 6) When I refresh the page, saved events are there.

// var
var saveBtn = $(".saveBtn");

// moment().format('MMMM Do YYYY, h:mm:ss a'); (add append to the html)
// $("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Functions

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
var workHours = [9,10,11,12,13,14,15,16,17]

var inputEl = $('.hr')

function timeBlk(){
  for (let i = 5; i < workHours.length; i++) {
   console.log(workHours[i]);


function coloredTimeBlks() {
  var hr = moment().hours();

  $(".timeBlk").each(function() {
    var hrNow = parseInt($(this).attr("id"));

console.log("timeBlk"); 

if (hrNow > hr) {
  $(this).addClass("future");
} else if (hrNow === hr) {
  $(this).addClass("present");
} else {
  $(this).addClass("past");
}

// saveBtn for time block
saveBtn.on("click", function() {

  console.log(this); //save button
  var time = $(this).siblings(".hr").text();
  var plan = $(this).siblings(".plan").val();

  // Text for that event is saved in local storage
  localStorage.setItem(time, plan);
});

// WHEN I refresh the page. THEN the saved events persist
function useIt() {

  $(".hr").each(function() {
      var hrNow = $(this).text();
      var currPlan = localStorage.getItem(hrNow);

      console.log("localStorage.getItem(hrNow)");

      if(currPlan !== null) {
          $(this).siblings(".plan").val(currPlan);
          console.log("localStorage.getItem(hrNow)");
      }
  });
}

// Call functions/
coloredTimeBlks();
useIt();

  // clickEventListener
  

   
  }
  )}}}})













// Title, subtitle, and current date at the top.

  // TODO: 1) Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //



  //
  // TODO: 2) Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //





  // TODO: 3) Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //




  // TODO: 4) Add code to display the current date in the header of the page.


// Call functions
