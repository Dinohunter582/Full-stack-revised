/*variables used in index.html document*/
var box = document.getElementById("box")
var clickme = document.getElementById('clickme');

/*What the button is suppose to do*/
function show() {  
    var button = this;
    box.style.backgroundColor = "#FFDF00";
    button.setAttribute("diabled", "true");
    setTimeout(clean, 2000, button);
}
/*removes the attributes when you click the button again*/
function clean (button) {
    var box = document.getElementById("box");
    box.style.backgroundColor = "transparent";
    button.removeAttribute("diabled");
}
/* activtes the color change for the box when button is pushed */
clickme.onclick = show;
