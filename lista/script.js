const campo = document.getElementById('campo');
const enviar = document.getElementById('enviar');
const lista = document.getElementById('lista');

enviar.addEventListener('click', ()=>{

    let elemento = campo.value;
    if (elemento != "") {

        addToList(elemento);
        salvarNoLocalStorage(elemento);

    };
    campo.value = '';

});

function addToList(elemento){

    let novoElemento = document.createElement('li');
    novoElemento.textContent = elemento;
    let excluir = document.createElement('button');
    excluir.textContent = 'excluir';
    excluir.addEventListener('click', ()=>{

        novoElemento.remove();

    });
    novoElemento.appendChild(excluir);
    lista.appendChild(novoElemento);

};

function salvarNoLocalStorage(elemento) {
    
    const elementos = obterTodosOsElementos();
    elementos.push(elemento);
    localStorage.setItem('elementos', JSON.stringify(elementos));

};

function obterTodosOsElementos() {

    const elementos = localStorage.getItem('elementos');
    return elementos ? JSON.parse(elementos) : [];

};
// quando damos um refresh na página, a lista some. teríamos que usar dom.contentLoaded
