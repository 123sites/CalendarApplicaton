// Acceptance Criteria
// GIVEN I am using a daily planner to create a schedule:
// 1) Open the planner, the current day is displayed at the
//    top of the calendar.
// 2) Scroll down, presented with timeblocks by business time.
// 3) Timeblocks for that day color-coded, past, present, future.
// 4) Click into a timeblock, can enter an event.
// 5) Click save button for that timeblock, event text saved to LS.
// 6) When I refresh the page, saved events are there.

// var
var saveBtn = $(".saveBtn");

$("#currentDay").text(moment().format('dddd MMMM Do YYYY'));

// Functions
$(function () {
  var workHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  var inputEl = $(".hr");
});

function timeBlk() {
  for (let i = 5; i < workHours.length; i++) {
    console.log(workHours[i]);
  }
}

function coloredTimeBlks() {
  var hr = moment().hours();
  $(".timeBlk").each(function () {
    var hrNow = parseInt($(this).attr("id").split("-")[1]);
    // console.log($(this).attr("id").split("-"))
    // console.log($(this).attr("id").split("-")[1])
    // console.log(hrNow, hr);
    if (hrNow > hr) {
      $(this).addClass("future");
    } else if (hrNow === hr) {
      $(this).addClass("present");
    } else {
      $(this).addClass("past");
    }
  });
}

// saveBtn for time block
saveBtn.on("click", function () {
  // console.log(this); //save button
  var time = $(this).siblings(".hr").text();
  var description = $(this).siblings(".description").val();
  // Text for that event is saved in local storage.
  localStorage.setItem(time, description);
});

// When refreshed, page saves. Saved events are still there.
function useIt() {
  $(".hr").each(function () {
    var hrNow = $(this).text();
    var currDescript = localStorage.getItem(hrNow);
    // console.log("localStorage.getItem(hrNow)");
    if (currDescript !== null) {
      $(this).siblings(".description").val(currDescript);
      // console.log("localStorage.getItem(hrNow)");
    }
  });
}

// Call functions/
coloredTimeBlks();
useIt();

