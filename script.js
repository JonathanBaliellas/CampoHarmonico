const notas = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]
const campoMaior = ["","m","m","","","m","°"]
const campoMenor = ["m","°","","m","m","",""]
const cmbTom = document.querySelector("select#cmb_tom")
const tabLinha = document.querySelector('tr#tab_linha')
const optMaior = document.querySelector('input#opt_maior')
let td = []

function iniciarTabela(){
    notas.forEach(nota => {
        const opcao = document.createElement('option')
        const textoOpcao = document.createTextNode(nota)
        opcao.appendChild(textoOpcao)
        opcao.setAttribute('value',notas.indexOf(nota))
        cmbTom.appendChild(opcao)
    });
    
    for(let i = 0; i < 7; i++){
        td.push(document.createElement('td'))
        tabLinha.appendChild(td[i])
    }
    
    atualizarCampoHarmonico()
}

function atualizarCampoHarmonico(){
    let indiceNota = Number.parseInt(cmbTom.value)
    let intervalo = 0
    
    if(optMaior.checked == true){//Campo Harmônico Maior
        for(let i = 0; i < 7; i++){
            if(intervalo + indiceNota > 11) indiceNota -= 12
            td[i].innerHTML = notas[indiceNota + intervalo] + campoMaior[i]
            if(intervalo == 4) intervalo++
            else intervalo += 2
        }
    }else{//Campo Harmônico Menor
        for(let i = 0; i < 7; i++){
            if(intervalo + indiceNota > 11) indiceNota -= 12
            td[i].innerHTML = notas[indiceNota + intervalo] + campoMenor[i]
            if(intervalo == 2 || intervalo == 7) intervalo++
            else intervalo += 2
        }
    }
    
}

