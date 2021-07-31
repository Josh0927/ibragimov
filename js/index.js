let i = 0;
function menuFunction(){
    if (i == 0) {
        document.querySelector(".menu").classList.add("active-1");
        document.querySelector(".menubutton").innerHTML = "&times;";
        i = i + 1;
    } else {
        document.querySelector(".menu").classList.remove("active-1");
        document.querySelector(".menubutton").innerHTML = "&equals;";
        i = 0;
    }
}