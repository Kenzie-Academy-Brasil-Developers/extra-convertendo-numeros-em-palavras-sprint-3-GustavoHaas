function numbersToWords() {

    const unitarios = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
    const unitarios2 = ['um', 'dois', 'tres', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove'];
    const dezenas = ['onze', 'doze', 'treze', 'quatoze', 'quinze', 'dezesseis', 'dezessete', 'dezoito', 'desenove'];
    const segDezenas = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa', 'cem'];
    const segDezenas2 = ['vinte', 'trinta', 'quarenta', 'cinquenta', 'sessenta', 'setenta', 'oitenta', 'noventa'];
    const centenas = ['duzentos', 'trezentos', 'quatrocentos', 'quinhentos', 'seiscentos', 'setessentos', 'oitocentos', 'novecentos', 'mil'];
    const words = [];
    const arrDez1 = [];
    const arrDez2 = [];

    for (let i = 0; i < unitarios.length; i++) {
        words.push(unitarios[i]);
    }

    for (let i = 0; i < dezenas.length; i++) {
        words.push(dezenas[i]);
    }

    for (let i = 0; i < segDezenas.length; i++){
        if (segDezenas[i] === 'cem'){
            words.push(segDezenas[i])
        }else {
            words.push(segDezenas[i])
            for (let j = 0; j < unitarios2.length; j++) {
                words.push(segDezenas[i] + ' e ' + unitarios2[j])
            }
        }
    }

        for (let i = 0; i < unitarios.length; i++) {
            words.push('cento e ' + unitarios[i])
        }

        for (let i = 0; i < dezenas.length; i++) {
            words.push('cento e ' + dezenas[i])
        }

        for (let j = 0; j < segDezenas2.length; j++) {
            words.push('cento e ' + segDezenas2[j])
            for (let k = 0; k < unitarios2.length; k++) {
                words.push('cento e ' + segDezenas2[j] + ' e ' + unitarios2[k])
            }
        }

    for (let l = 0; l < centenas.length; l++){
        if (centenas[l] === 'mil'){
            words.push(centenas[l])
        }else{
            words.push(centenas[l])
            for (let i = 0; i < unitarios.length; i++) {
                words.push(centenas[l] + ' e ' + unitarios[i])
            }

            for (let i = 0; i < dezenas.length; i++) {
                words.push(centenas[l] + ' e ' + dezenas[i])
            }

            for (let j = 0; j < segDezenas2.length; j++) {
                words.push(centenas[l] + ' e ' + segDezenas2[j])
                for (let k = 0; k < unitarios2.length; k++) {
                    words.push(centenas[l] + ' e ' + segDezenas2[j] + ' e ' + unitarios2[k])
                }
            }
        }
    }

    console.log(words);

    const divToAppend = document.getElementById('array');
    const divToAdd = document.createElement('p');

    divToAdd.innerText = words;

    divToAppend.appendChild(divToAdd);
}