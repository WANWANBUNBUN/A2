let contrastControl = document.querySelector(".contrast");
let cssControl = document.querySelector("#mode");

let highContrast = false;
let mode = document.querySelector("#mode")

contrastControl.addEventListener('click', function () {

    if (contrastControl.innerHTML === "High Contrast") {
        contrastControl.innerHTML = "Normal Mode";
        mode.style.backgroundColor = "black";
        mode.style.color = "white";
        highContrast = true;

    } else {
        contrastControl.innerHTML = "High Contrast"
        highContrast = false;
        mode.style.backgroundColor = "white";
        mode.style.color = "black";
    }
});

document.addEventListener('keydown', function (_KeyboardEvent) { 
    if (_KeyboardEvent.code == 'KeyA' && _KeyboardEvent.ctrlKey) {
        
            contrastControl.innerHTML = "Normal Mode";
            mode.style.backgroundColor = "black";
            mode.style.color = "white";
            highContrast = true;
    
        } else {
            contrastControl.innerHTML = "High Contrast"
            highContrast = false;
            mode.style.backgroundColor = "white";
            mode.style.color = "black";

    }
});
