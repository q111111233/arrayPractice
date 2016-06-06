$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var color = $("input#color").val();
    var food = $("input#food").val();
    var music= $("input#music").val();
    var book = $("input#book").val();

    var arr=[color, food, music, book];
    var newArray=[arr[1],arr[0],arr[2]]
    newArray.push(arr[3]);
    $(".myArray").text(arr);
    $(".myArray2").text(newArray);

    event.preventDefault();
  });
});
