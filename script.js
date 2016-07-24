// window.onload = function() {
//     if (window.jQuery) {  
//         // jQuery is loaded  
//         alert("Yahtzee!");
//     } else {
//         // jQuery is not loaded
//         alert("No dice.");
//     }
// }


$(document).ready(function() {
    $('#hidden').hide();

    $('button').click(function() {
      $('#hidden').hide();
      $('#hidden').show();
    });

});


