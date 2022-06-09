let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')


/*
function validarNome() {
    if (nome.value.length < 3) {
    alert('Nome inválido! Digita um nome com mais de 3 letras')
    }
}


*/

function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length <3) {
        txtNome.innerHTML = 'Nome Invalido'
        txtNome.style.color = 'red'

    } else {
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.length < 3) {
        txtEmail.innerHTML = "Nome Inválido"
        txtEmail.style.color = 'red'
        } else {
            txtEmail.innerHTML = 'Nome Valido'
            txtEmail.style.color = 'green'
            
        }
    
}

function validarAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 100) {
        txtAssunto.innerHTML = 'Quantidade de caracteres inválido, necessário digitar mais de 100 caracteres'
        txtAssunto.style.color = 'purple'
    } else {
        txtAssunto.innerHTML = 'Validado!'
        txtAssunto.style.color = 'pink'
    }
}