//Busca sequencial
/* var valores = [5, 8, 10, 12, 32, 20];

function busca(num){
    for (i = 0; i < 6; i++){
        if(num == valores[i]){
            return i;
        }
    }

    return -1;
}

//usando a nossa ferramenta de busca
console.log(busca(10));
console.log(busca(50));
*/

//Busca binária
var valores = [5, 8, 10, 12, 20, 32, 45, 48, 70, 102];

function buscaBinaria(num){

    let inicio, fim;
    let meio;
    passos = 0;
    inicio = 0;
    fim = 9;

    while(inicio <= fim){

        meio = parseInt((inicio + fim) / 2);
        passos = passos + 1;

        if(num == valores[meio]) {

            console.log(`Encontrei em ${passos} passos`);
            return meio;
        } else {
            if (num > valores[meio]){
            inicio = meio + 1;
            
            } else  {
            fim = meio - 1;
            }
        }
    }
        console.log(`Não encontrei em ${passos} passos`);
        return -1;

    }

    //Usando a ferramenta de busca
    console.log(buscaBinaria(10));
    console.log(buscaBinaria(50));
    console.log(buscaBinaria(102));






