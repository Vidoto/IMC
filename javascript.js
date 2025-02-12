const resultado = document.querySelector("#resultado");
const peso = document.querySelector("#peso");
const altura = document.querySelector("#altura");
const classification = document.querySelector("#info");

const calcIMC = () => {
  if (altura.value != "" && peso.value != "") {
    const imc = (peso.value / (altura.value * altura.value)).toFixed(2);
    let classification = "";

    if (imc < 18.5) {
      classification = "abaixo do peso";
    } else if (imc < 25) {
      classification = "Peso Normal";
    } else if (imc < 30) {
      classification = "Acima do peso";
    } else if (imc < 35) {
      classification = "Obesidade Grau I";
    } else if (imc < 41) {
      classification = "Obesidade Grau II";
    } else {
      classification = "Obesidade Grau III";
    }

    resultado.innerHTML = `${imc}`;
    info.innerHTML = `${classification}`;
  } else {
    resultado.innerHTML = "Preencha os campos abaixo";
  }
};
