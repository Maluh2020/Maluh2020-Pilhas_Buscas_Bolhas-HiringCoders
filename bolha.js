
var valores = [32, 27, 26, 20, 15, 12, 10, 9, 7, 4, 2, 1];

function ordena(num){

    let inicio = 0;
    let fim = 11;
    let tmp;

    for(vezes = 0; vezes < 11; vezes++) {
        for(i = inicio; i < fim - 1 - vezes; i++) {
            if(valores[i] > valores[i + 1]) {
                tmp = valores[i];
                valores[i] = valores[i + 1];
                valores[i + 1] = tmp;

            }
        }
    } 

}

ordena();
console.log("Vetor ordenado...");
console.log(valores);