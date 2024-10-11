const res = document.querySelector('.res')
const res1 = document.querySelector('.res1')
const res2 = document.querySelector('.res2')
const res3 = document.querySelector('.res3')
const res4 = document.querySelector('.res4')
const res5 = document.querySelector('.res5')
const res6 = document.querySelector('.res6')
const res8 = document.querySelector('.res8')
const res11 = document.querySelector('.res11')
let bem = document.querySelector('.bem')
let ou = document.querySelector('.ou')
let mal = document.querySelector('.mal')

res.textContent = 'Olá, como você está? '

function mensagem(){

    const familia = document.createElement('p');
    familia.textContent = "Problemas na família";

    const Input = document.createElement('input')
    Input.type = 'radio' 
    Input.name = 'oi'
    Input.value = mal // Define o valor do novo input

    const financia = document.createElement('p');
    financia.textContent = "Problemas financeiros";

    const Input1= document.createElement('input')
    Input1.type = 'radio' 
    Input1.name = 'oi'
    Input1.value = mal // Define o valor do novo input

    const saude = document.createElement('p');
    saude.textContent = "Problemas de saúde";

    const Input2 = document.createElement('input')
    Input2.type = 'radio' 
    Input2.name = 'oi'
    Input2.value = mal // Define o valor do novo input

    const outros = document.createElement('p');
    outros.textContent = "Outros";

    const Input3 = document.createElement('input')
    Input3.type = 'radio' 
    Input3.name = 'oi'
    Input3.value = mal // Define o valor do novo input

    const button = document.createElement('input')
    button.type = 'button' 
    button.value = 'Reiniciar' // Define o valor do novo input

    if(bem.checked){
        res2.textContent = 'Que bom!'
    } else if(mal.checked){
        res2.textContent = 'Por que? aconteceu algo? '
        document.querySelector('.res3').appendChild(Input)
        res3.appendChild(familia);

        document.querySelector('.res4').appendChild(Input1)
        res4.appendChild(financia);

        document.querySelector('.res5').appendChild(Input2)
        res5.appendChild(saude);

        document.querySelector('.res6').appendChild(Input3)
        res6.appendChild(outros);

        document.querySelector('.res7').appendChild(button)

        button.onclick = function ultimo(){

        if(Input.checked){
            res8.textContent = 'Espero que sua familía melhore!'
             res11.textContent = 'Fim da conversa.'
        } else if(Input1.checked){
            res8.textContent = 'Espero que sua situação financeira melhore!'
             res11.textContent = 'Fim da conversa.'
        } else if(Input2.checked){
            res8.textContent = 'Espero que sua saúde melhore!'
             res11.textContent = 'Fim da conversa.'
        } else if(Input3.checked){
            res8.textContent = 'Entendo, o que você esteja passando, você vai superar!'
            res11.textContent = 'Fim da conversa.'
        } else {
            alert('Selecione algo!')
        }
    }
    } else if(ou.checked){
        res2.textContent = 'Entendo, mas eu sei que vai melhorar, confie!'
        res2.style.left = '30px'
    } else{
        alert('Selecione uma opção')
    }
}

function reiniciar(){
    location.reload()
}