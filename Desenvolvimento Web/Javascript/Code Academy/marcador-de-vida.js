if (classe === 1) {
  vida -= 20;
} else if (classe === 2) {
  vida -= 30;
} else if (classe === 3) {
  vida -= 40;
} else if (classe === 4) {
  vida -= 50;
} else if (vida <= 0) {
  console.log("PERDEU");
}
console.log(vida);
