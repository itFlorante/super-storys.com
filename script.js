var showmore = document.querySelector(".more");
var more = document.querySelector(".showmore");
var darkBtn = document.getElementById("dark-btn");
var menubar = document.querySelector("menu-bar");
var settingsMenu = document.querySelector(".settings-menu");


function linkmynote(){
    showmore.classList.toggle("morelinks");
}
 function openttt(){
   settingsMenu.classList.toggle("openlinhg");
 }
 let inputFile = document.getElementById("inputFile");
 let profilepic = document.getElementById("profilepic");

 inputFile.onchange = function(){
    profilepic.src = URL.createObjectURL(inputFile.files[0]);
   
}
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("Mode") == "light") {
        localStorage.setItem("Mode", "dark");
    } else {
        localStorage.setItem("Mode", "light");
    }

}


if (localStorage.getItem("Mode") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    
} else if (localStorage.getItem("Mode") == "dark") {
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");


} else {
    localStorage.setItem("Mode", "light");

}



