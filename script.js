const botao = document.querySelector("buttun")

const form = document.querySelector(".formulario-fale-conosco")
const background = document.querySelector(".mascara-formulario")


function showForm(){
    form.style.left = "2%"
    form.style.transform = "traslatX(-150%)"
    background.style.visibility = "visible"
    form.style.Zindex = "2"
}

function esconderForm() {
    form.style.left = "-335px"
    form.style.transform = "translateX(-160)"
    background.style.visibility = "hidden"
}
