AOS.init({
    duration: 2000,
    easing: "ease-out-cubic"
});
 
var fotos = [
    "imagens/imagem (1).jpg",
    "imagens/imagem (2).jpg",
    "imagens/imagem (7).jpg",
    "imagens/imagem (8).jpg"
];
 
var atual = 0;
 
function mostrar() {
    document.getElementById("foto").src = fotos[atual];
}
 
function avancar() {
    atual = atual + 1;
    if (atual == fotos.length) {
        atual = 0;
    }
    mostrar();
}
 
function voltar() {
    atual = atual - 1;
    if (atual < 0) {
        atual = fotos.length - 1;
    }
    mostrar();
}