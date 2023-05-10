function hi() {
    console.log("hello!");
}
function validate() {
    hi();
    var x = document.forms["myForm"]["user"].value;
    var y = document.forms["myForm"]["pass"].value;

    if (x == "" && y == "") {
        hi();
        document.getElementById("centerContianer").style.background = "#ff5252";
        document.getElementById("centerContianer").style.boxShadow = "20px 20px 60px #850000, -20px -20px 60px #ff5252"; 
    }
    else {
        console.log("HAIIII");
        window.location.href="homepage.html"; 
    }
}