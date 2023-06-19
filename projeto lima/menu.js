var conteudo_header = document.getElementById("conteudo-header")
var controle = false

function switch_menu(){
    controle = !controle
    if(controle){
        conteudo_header.style.marginLeft = "0vw";
    }
    else{
        conteudo_header.style.marginLeft = "-150vw"
    }
}

