document.getElementById("outer").addEventListener("click", function() {
    console.log("Outer div clicked");
}, true); // capturing phase

document.getElementById("inner").addEventListener("click", function() {
    console.log("Inner div clicked");
});

document.getElementById("button").addEventListener("click", function() {
    console.log("Button clicked");
});
