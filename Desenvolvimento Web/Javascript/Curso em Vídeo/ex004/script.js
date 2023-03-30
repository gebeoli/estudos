var nome = prompt('Qual é o seu nome?')
document.write(`Olá, ${nome}! Seu nome tem ${nome.length} letras.<br>`)
document.write(`O seu nome em maiúsculo é ${nome.toUpperCase()}.<br>`)
document.write(`O seu nome em minúsculo é ${nome.toLocaleLowerCase()}.`)