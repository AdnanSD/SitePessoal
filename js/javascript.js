


function clicar (){
const $html=document.querySelector('html');
$html.classList.toggle('dark-mode')

let img=document.getElementById("icone")
if(img.src.includes("icons8-noite-com-estrelas-48.png")){
    img.src="imagens/sol.png";
}else{
    img.src="imagens/icons8-noite-com-estrelas-48.png";
}

}