var date = moment().format("MMM Do, YYYY");
var display = $("#currentDay");
display.text(date);
console.log(date);
console.log(display);
var button = $('.saveBtn');
 
function currentTime() {
    var current = moment().format('LT');
    var time = $('.timeOfDay');

    time.each(function () {
        var hour  = parseINT($(this).attr('id'));

        if (hour === current) {
            $(this).children('text-box').attr('class', 'present text-box');
        } else if (current > hour) {
            $(this).children('text-box').attr('class', 'past text-box');
        } else {
            $(this).children('text-box').attr('class', 'future text-box');
        }
    });

$("./saveBtn").click(function(){
    var text =$(this).siblings(".text-box").val;
    var inputsText=$(this).siblings(".text.box").attr("id");
    localStorage.setItem(inputsLocation,scheduleInputs);
    });
}
