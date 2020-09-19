//jshint esversion:6
// Used in app.js to get current date

exports.getDate = function () {

    const today = new Date();

    // 'Styling' to be added to our today variable
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("en-US", options);

}


exports.getDay = function () {
    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);

}