/*  
Lennart Lindenberg 
937292 
Medieningenieur 
*/


var elements = document.getElementsByClassName("text");
const darkButton = document.getElementById("dark");
const lightButton = document.getElementById("light");
const normalButton = document.getElementById("schriftNormal");
const großButton = document.getElementById("schriftGroß");
const body = document.body;
const theme = localStorage.getItem("theme");

if(theme){
    body.classList.add(theme);
};
darkButton.onclick = () => {
    body.classList.replace("light","dark");
    localStorage.setItem("theme", "dark");
};

lightButton.onclick = () => {
 body.classList.replace("dark","light");
 localStorage.setItem("theme", "light");
};




normalButton.onclick = () => {
    for (var i=0; i<elements.length; i++) {
        elements[i].style.fontSize = 'x-large';
    }
    localStorage.setItem("font", "x-large");
}


großButton.onclick = () => {
    for (var i=0; i<elements.length; i++) {
        elements[i].style.fontSize = 'xx-large';
    }
    localStorage.setItem("font", "xx-large");
}







