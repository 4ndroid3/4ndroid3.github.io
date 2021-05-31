// Señalizacion Navbar **************************
var el1 = document.getElementById("elementos");
var el2 = document.getElementById("elementos2");
var el3 = document.getElementById("elementos3");
var el4 = document.getElementById("elementos4");

el1.addEventListener('mouseover', function (event) {
    event.target.style.color = "#191716ff";
})
el1.addEventListener('mouseout', function (event) {
    event.target.style.color = "#a7a2a9ff";
})

el2.addEventListener('mouseover', function (event) {
    event.target.style.color = "#191716ff";
})
el2.addEventListener('mouseout', function (event) {
    event.target.style.color = "#a7a2a9ff";
})

el3.addEventListener('mouseover', function (event) {
    event.target.style.color = "#191716ff";
})
el3.addEventListener('mouseout', function (event) {
    event.target.style.color = "#a7a2a9ff";
})

el4.addEventListener('mouseover', function (event) {
    event.target.style.color = "#191716ff";
})
el4.addEventListener('mouseout', function (event) {
    event.target.style.color = "#a7a2a9ff";
})

// *************************************************

// Ocultar Imagenes ***********************************

function myFunction1() {
    var x = document.getElementById("projecto1");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function myFunction2() {
    var x = document.getElementById("projecto2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction3() {
    var x = document.getElementById("projecto3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function myFunction4() {
    var x = document.getElementById("projecto4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
