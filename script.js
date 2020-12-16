var date = moment().format("MMM Do, YYYY");
var display = $("#currentDay");
display.text(date)
console.log(date);
console.log(display);
 
var currentTime = moment().format('LT');
console.log(currentTime);

function hourColor(){
    $("textarea").each(function(){
      var currentTime = $(this).attr("id");   
      var currentHour = parseInt(currentTime);
    //establish time of day
    if (currentHour < currentTime) {
        $(this).addClass("past");
        } else if (currentHour == currentTime) {
            $(this).addClass("present");
        }else if (currentHour > currentTime) {
            $(this).addClass("future");
        }
})
$(".saveBtn").click(function(){
    var hourInputs=$(this).siblings(".event").val;
    var inputsRow=$(this).siblings(".event").attr("id");
    localStorage.setItem(inputsLocation,scheduleInputs);
    });

}
