let tenis = document.querySelector('.tenis')
let cor1Modelo = document.querySelector('.cor-1')
let cor2Modelo = document.querySelector('.cor-2')
let precoModelo = document.querySelector('.preco')
let nomeModelo = document.querySelector('.nome')

function modeloTenis(modelo1, modelo2, nome, preco, cor1, cor2) {
    tenis.src = "img/" + modelo1 + ".png"

    nomeModelo.innerHTML = nome
    precoModelo.innerHTML = "$" + preco

    cor1Modelo.addEventListener('click' , function() {
        tenis.src = "img/" + modelo1 + ".png"
    })

    cor2Modelo.addEventListener('click' , function() {
        tenis.src = "img/" + modelo2 + ".png"
    })

    cor1Modelo.style.backgroundColor = cor1
    cor2Modelo.style.backgroundColor = cor2
}

function telaPagamento() {
    let pagamento = document.querySelector('.area-pagamento')

    if (pagamento.classList.contains('ativo')) {
        pagamento.classList.remove('ativo')
    }else {
        pagamento.classList.add('ativo')
    }
}
