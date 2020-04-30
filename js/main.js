(function () {
    var options = {
        facebook: "225326547510896", // Facebook page ID
        call_to_action: "", // Call to action
        position: "left", // Position may be 'right' or 'left'
    };
    var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
    var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
    s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
    var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
})();

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

$(".sexytabs").tabs({
    show: { effect: "slide", direction: "left", duration: 200, easing: "easeOutBack" },
    hide: { effect: "slide", direction: "right", duration: 200, easing: "easeInQuad" }
});

let ubicacionPrincipal = window.pageYOffset; //0

AOS.init();

window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset; //180
    if (ubicacionPrincipal >= desplazamientoActual) { // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    } else {
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal = desplazamientoActual; //200

})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function () {
    if (semaforo) {
        document.querySelectorAll(".hamburguer")[0].style.color = "#fff";
        semaforo = false;
    } else {
        document.querySelectorAll(".hamburguer")[0].style.color = "#000";
        semaforo = true;
    }

    enlacesHeader.classList.toggle("menudos")
})
document.querySelectorAll(".menu")[0].addEventListener("click", function () {
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
    semaforo = true;
    enlacesHeader.classList.toggle("menudos")
})
document.querySelectorAll(".menu2")[0].addEventListener("click", function () {
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
    semaforo = true;
    enlacesHeader.classList.toggle("menudos")
})
document.querySelectorAll(".menu3")[0].addEventListener("click", function () {
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
    semaforo = true;
    enlacesHeader.classList.toggle("menudos")
})
document.querySelectorAll(".menu4")[0].addEventListener("click", function () {
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
    semaforo = true;
    enlacesHeader.classList.toggle("menudos")
})
document.querySelectorAll(".menu5")[0].addEventListener("click", function () {
    document.querySelectorAll(".hamburguer")[0].style.color = "#000";
    semaforo = true;
    enlacesHeader.classList.toggle("menudos")
})
