let nerd = 0;
let atleta = 0;
let E = 0;

for (let botao of botoesApertados) {
  if (botao[1] === "1") {
    nerd = nerd + 1;
  } else if (botao[1] === "2") {
    atleta = atleta + 1;
  } else if (botao === "E") {
    E = E + 1;
  }
}
if (nerd > atleta && nerd > E) {
  console.log("NERD");
} else if (atleta > nerd && atleta > E) {
  console.log("ATLETA");
} else if (nerd === atleta) {
  console.log("DIVERSIFICADO");
}
