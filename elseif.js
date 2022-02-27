var peso = prompt ("Digite o seu peso ");
let constante = prompt ("Escolha a constante de correção\n 20 - Emagrecimento\n 25 - Emagrecimento Brando\n 30 - Manutenção do Peso\n 35 - Ganho de peso brando\n 40 - Ganho de peso ");
let resultado = (peso*constante)

if (constante == 20) {
   alert (resultado)
}

else if (constante == 25) {
    alert (resultado)
}

else if (constante ==30) {
    alert (resultado)
}
else if (constante ==35) {
    alert (resultado)
}
else if (constante ==40) {
    alert (resultado)
}
else {
    alert ("Valor Inválido!")
};