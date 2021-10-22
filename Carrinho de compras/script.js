var valores = []
var valorcompra = 0
var custo = document.getElementById('custo')
var produtos = [9899.90, 17689.90, 1256.89, 4896]
var remo1 = 0
var remo2 = 0
var remo3 = 0
var remo4 = 0
var cx1 = document.getElementById('cx1')
var cx1valor = document.getElementById('cx1valor')
var cx2 = document.getElementById('cx2')
var cx2valor = document.getElementById('cx2valor')
var cx3 = document.getElementById('cx3')
var cx3valor = document.getElementById('cx3valor')
var cx4 = document.getElementById('cx4')
var cx4valor = document.getElementById('cx4valor')
var janela
var janelaitens
var exi = 0




function nalista(v, l) {
    switch (v) {
        case 1:
            if (l.indexOf(v) != -1 && remo1 == 1) {
                return true
            }
            break
        case 2:
            if (l.indexOf(v) != -1 && remo2 == 1) {
                return true
            }
            break
        case 3:
            if (l.indexOf(v) != -1 && remo3 == 1) {
                return true
            }
            break
        case 4:
            if (l.indexOf(v) != -1 && remo4 == 1) {
                return true
            }
            break
    }
}

function foralista(v) {
   switch (v) {
       case 1:
           if (remo1 == 0) {
               return true
           }
           break
        case 2:
            if (remo2 == 0) {
                return true
            }
            break
        case 3:
            if (remo3 == 0) {
                return true
            }
            break
        case 4:
            if (remo4 == 0) {
                return true
            }
            break
   }
}

function addpro() {
    var itemnumtxt = document.getElementById('itemnumtxt')
    var itemnum = Number(itemnumtxt.value) 

    if (itemnumtxt.value.length == 0) {
        alert('Selecione um produto!')
    } else if (itemnum < 1 || itemnum > 4 || nalista(itemnum, valores)) {
        alert('Item inválido ou já selecionado.')
    } else {
        valores.push(itemnum)
        itemnumtxt.value = ''
        itemnumtxt.focus()

        switch (itemnum) {
            case 1:
                custo.innerHTML = `R$ ${(9899.90 + valorcompra).toFixed(2).toString().replace('.', ',')}`
                valorcompra = valorcompra + 9899.90
                remo1 = 1
                cx1.style.backgroundColor='#2c2828'
                cx1.style.color='white'
                cx1valor.style.color='#632be9'
                break
            case 2:
                custo.innerHTML = `R$ ${(17689.90 + valorcompra).toFixed(2).toString().replace('.', ',')}`
                valorcompra = valorcompra + 17689.90
                remo2 = 1
                cx2.style.backgroundColor='#2c2828'
                cx2.style.color='white'
                cx2valor.style.color='#632be9'
                break
            case 3:
                custo.innerHTML = `R$ ${(1256.89 + valorcompra).toFixed(2).toString().replace('.', ',')}`
                valorcompra = valorcompra + 1256.89
                remo3 = 1
                cx3.style.backgroundColor='#2c2828'
                cx3.style.color='white'
                cx3valor.style.color='#632be9'
                break
            case 4:
                custo.innerHTML = `R$ ${(4896 + valorcompra).toFixed(2).toString().replace('.', ',')}`
                valorcompra = valorcompra + 4896
                remo4 = 1
                cx4.style.backgroundColor='#2c2828'
                cx4.style.color='white'
                cx4valor.style.color='#632be9'
                break
        }
    }
}

function remopro() {
    var itemnumtxt = document.getElementById('itemnumtxt')
    var itemnum = Number(itemnumtxt.value)

    if (itemnumtxt.value.length == 0) {
        alert('Selecione um produto!')
    } else if (itemnum < 1 || itemnum > 4 || foralista(itemnum) ) {   // [ERRO]  REMOVENDO DUAS VEZES
        alert('Produto inexistente ou não adicionado.')
    } else {
        itemnumtxt.value = ''
        itemnumtxt.focus()

        switch (itemnum) {
            case 1:
                custo.innerHTML = `R$ ${(valorcompra - 9899.90).toFixed(2).toString().replace('.', ',')}`
                valorcompra = valorcompra - 9899.90
                remo1 = 0
                cx1.style.backgroundColor='white'
                cx1.style.color='black'
                cx1valor.style.color='#FF6500'
                break
            case 2:
                custo.innerHTML = `R$ ${(valorcompra - 17689.90).toFixed(2).toString().replace('.', ',')}`
                valorcompra = valorcompra - 17689.90
                remo2 = 0
                cx2.style.backgroundColor='white'
                cx2.style.color='black'
                cx2valor.style.color='#FF6500'
                break
            case 3:
                custo.innerHTML = `R$ ${(valorcompra - 1256.89).toFixed(2).toString().replace('.', ',')}`
                valorcompra = valorcompra - 1256.89
                remo3 = 0
                cx3.style.backgroundColor='white'
                cx3.style.color='black'
                cx3valor.style.color='#FF6500'
                break
            case 4:
                custo.innerHTML = `R$ ${(valorcompra - 4896).toFixed(2).toString().replace('.', ',')}`
                valorcompra = valorcompra - 4896
                remo4 = 0
                cx4.style.backgroundColor='white'
                cx4.style.color='black'
                cx4valor.style.color='#FF6500'
                break
        }
    }
}

function finalizar() {
    if (valorcompra == 0) {
        alert('Selecione algum produto!')
    } else {
       var nota = confirm(`Deseja realizar uma compra no valor de R$ ${valorcompra.toFixed(2)}?`)

       if (nota == true) {
           alert('Sua compra foi realizada com sucesso.\nVolte Sempre!')
       } else {
           alert('Você será sempre bem-vindo!')
       }

       cx1.style.backgroundColor='white'
       cx1.style.color='black'
       cx1valor.style.color='#FF6500'

       cx2.style.backgroundColor='white'
       cx2.style.color='black'
       cx2valor.style.color='#FF6500'

       cx3.style.backgroundColor='white'
       cx3.style.color='black'
       cx3valor.style.color='#FF6500'

       cx4.style.backgroundColor='white'
       cx4.style.color='black'
       cx4valor.style.color='#FF6500'

       valores = []
       custo.innerHTML = 'R$ 00,00'
       valorcompra = 0
    }
}

// Exibir janela de itens

function exibir(){
    if (exi == 0){
        janelaitens.style.display = "block"
        exi = 1
    } else if(exi = 1) {
        janelaitens.style.display = "none"
        exi = 0
    }
}

function addevento() {
    janela = document.querySelector(".janela").addEventListener("click", exibir)
    janelaitens = document.querySelector(".janelaitens")
}

window.addEventListener("load", addevento)