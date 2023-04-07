var idade = 70;
console.log(`Você tem ${idade} anos.`)
if (idade >= 18 && idade < 71) {
    console.log('Seu voto é obrigatório');
} else if (idade >= 16 && idade < 18 || idade > 70 ) {
    console.log('Seu voto é opcional');
} else {
    console.log('Você não vota');
}
