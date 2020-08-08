
$(document).ready(function() { // This makes sure the jQuery library is ready to use....better just to put script at end of body section in HTML
  $("h1").css("color", "red"); // Select the H1, change the CSS COLOR to RED
});


console.log($("h1").css("font-size")); // One property = GET method
$("h1").css("font-size", "5rem"); // Two properties = SET method


// Manipulating Styles
$("h1").addClass("big-title margin-50"); // Adding ftom CSS to h1 class. To add multple classes, add space in same quotation
$("h1").remove("big-title"); // Remove CSS from h1 class
$("h1").hasClass("margin-50"); // Checks if class exists in element


// Manipulating Text
$("h1").text("Bye"); // Changes text in h1 to Bye
$("button").html("<em>Hey</em>"); // Adding HTML code


// Manipulating Attribues
$("img").attr("src"); // Get Attribute
$("a").attr("href", "https://www.yahoo.com"); // Set Attribute


// Adding Event Listeners
$("h1").click(function () {
  $("h1").css("color", "purple");
});

$("button").click(function () {
  $("h1").css("color", "green");
});

$(document).keypress(function(event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
  $("h1").css("color", "purple");
});


// Adding and Removing Elements
$("h1").before("<button>New</button>"); // Adding button before H1

    // before() adds element before the opening tag
    // after() adds element after the closing tag
    // prepend() adds element after the opening tag and before the content
    // append() adds element after the content and before the closing tag

$("button").remove(); // Removes all buttons


// Website Animations
$("button").on("click", function() {
  $("h1").slideUp().slideDown().animate({opacity: 0.5}); // Chaining methods together in order
});
    // .toggle() // Makes appear and disappear with button click
    // .fadeOut() // Make dissapear with a fading effect
    // .sldeUp() // Makes element open and close
    // .animate({opacity: 0.5}) // Allows you to custom make CSS effects with NUMERIC values
