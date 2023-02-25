
const suppliedQtd = document.querySelector("#suppliedQtd");
const kilometerDriven = document.querySelector("#kilometerDriven");
const gasValue = document.querySelector("#gasoline");
const alcValue = document.querySelector("#alcohol");
const distValue = document.querySelector("#distanceToGO");
const avValue = document.querySelector("#average-value");

// Variaveis dos campos que retornam o resultado das funções "imprint".
const betterValue = document.querySelector("#betterPrice-value");
const costFuelValue = document.querySelector("#costToFuel");
const gasolineCostValue = document.querySelector("#gasolineCost");
const alcoholCostValue = document.querySelector("#alcoholCost");

const btnCalculate = document.querySelector("#btn-calculate");

//Recebe os valores dos inputs e realiza o tratamento de strings e numeros com virgula.
btnCalculate.addEventListener("click", () => {

    // Recebe o valor abastecido.
    let supplied = suppliedQtd.value;
    supplied = supplied.replace(",", ".");
    supplied = parseFloat(supplied);
    // Recebe o valor do distancia.
    let kmTraveled = kilometerDriven.value;
    kmTraveled = kmTraveled.replace(",", ".");
    kmTraveled = parseFloat(kmTraveled);
    // Recebe o valor do gasolina.
    let gasolineValue = gasValue.value;
    gasolineValue = gasolineValue.replace(",", ".");
    gasolineValue = parseFloat(gasolineValue);
    // Recebe o valor do alcool.
    let alcoholValue = alcValue.value;
    alcoholValue = alcoholValue.replace(",", ".");
    alcoholValue = parseFloat(alcoholValue);
    // Recebe o valor da distancia a percorrer.
    let distanceValue = distValue.value;
    distanceValue = distanceValue.replace(",", ".");
    distanceValue = parseFloat(distanceValue);

    // Calcula o consumo medio.
    function averageConsumption() {
        const consumer = (kmTraveled / supplied);
        return consumer;
    }
    averageConsumption();

    // Calcula quantos litros para chegar a distancia x.
    function toFuel() {
        const distanceToGO = (distanceValue / averageConsumption());
        return distanceToGO;
    }

    // Calcula o valor total da gasolina.
    function totalValueGasolineValue() {
        const totalValueGasoline = (toFuel() * gasolineValue);
        return totalValueGasoline;
    }
    totalValueGasolineValue();

    // calcula o valor total do alcool.
    function totalValueAlcoholValue() {
        const totalValueAlcohol = (toFuel() * alcoholValue);
        return totalValueAlcohol;
    }
    totalValueAlcoholValue();

    // Verifica qual dos combustiveis esta mais em conta.
    function checkBetterPrice() {
        let checkBetterPrice = (alcoholValue / gasolineValue) * 100;
        return checkBetterPrice;
    }
    checkBetterPrice();
    
    // Imprime mensagem sobre qual e o melhor combustivel.
    function imprintMensageBestPrice() {
        if (checkBetterPrice() < 70) {
            return `O alcool está com o melhor preço.`;
        } else {
            return `A gasolina está com o melhor preço.`;
        }
    }
    imprintMensageBestPrice();

    // Imprime o valor medio na tela.
    function imprintAverageValue() {
        if (isNaN(averageConsumption())) {
            avValue.innerText = ``;
        } else {
            avValue.innerText = `Consumo Medio: ${averageConsumption().toFixed(2)} km/litro.`;
        }
    }
    imprintAverageValue();

    // Imprime e verifica se valor da função checkBetterPrice e um NaN.
    function imprintCheckBetterPrice() {
        if (isNaN(checkBetterPrice())) {
            betterValue.innerText = ``;
        } else {
            betterValue.innerText = `${imprintMensageBestPrice()} ${checkBetterPrice().toFixed(0)}`;
        }
    }
    imprintCheckBetterPrice();

    // imprime o quanto de combustivel voce vai gastar. ("toFuel").
    function imprintTofuel() {
        if (isNaN(toFuel())) {
            return costFuelValue.innerText = ``;
        } else {
            return costFuelValue.innerText = `${toFuel().toFixed(1)} Litros de combustivel.`;
        }
    }
    imprintTofuel();

    // imprime o total valor a ser gasto com gasoline ou alcool.
    function imprintCoastFuel() {
        if (isNaN(totalValueGasolineValue()) && isNaN(totalValueAlcoholValue())) {
            gasolineCostValue.innerText = ``;
            alcoholCostValue.innerText = ``;
        }
        else if (isNaN(totalValueGasolineValue()) == false && isNaN(totalValueAlcoholValue()) == true) {
            gasolineCostValue.innerText = `R$${totalValueGasolineValue().toFixed(2)} de Gasolina. A`;
            alcoholCostValue.innerText = ``;
        }
        else if (isNaN(totalValueGasolineValue()) == true && isNaN(totalValueAlcoholValue()) == false) {
            alcoholCostValue.innerText = `R$${totalValueAlcoholValue().toFixed(2)} de Alcool B`;
        }
        else {
            gasolineCostValue.innerText = `R$${totalValueGasolineValue().toFixed(2)} de Gasolina.`;
            alcoholCostValue.innerText = `R$${totalValueAlcoholValue().toFixed(2)} de Alcool.`;
        }
    }
    imprintCoastFuel();


    // Testando valores recibidos do usuario atráves dos inputs.
    console.log("TESTE INPUTS");
    console.log("Abastecida: " + supplied + " litros");
    console.log("km Rodado: " + kmTraveled);
    console.log("Valor gasolina: R$" + gasolineValue);
    console.log("Valor Alcool R$" + alcoholValue);
    console.log("Distancia a percorrer: " + distanceValue + "km");
    console.log("");
    // Testando o retorno das funções
    console.log("Testando funções");
    console.log(averageConsumption().toFixed(2) + " km/Litro");
    console.log("Total Gasolina: R$" + totalValueGasolineValue().toFixed(2));
    console.log("Total Alcool: R$" + totalValueAlcoholValue().toFixed(2));
    console.log("Melhor combustivel: " + checkBetterPrice() + "%");

    console.log(`Voce precisará abasteçer ${toFuel().toFixed(2)} litros de combustivel para chegar ao seu destino. `);
    console.log(`Voce Gastrá R$ ${totalValueGasolineValue().toFixed(2)} de gasolina ou R$ ${totalValueAlcoholValue()} de alcool.`);
});
