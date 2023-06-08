
const litersInput = document.querySelector("#liters")
const kmTraveledInput = document.querySelector("#km-traveled");

const selectFuel = document.querySelector("#select-fuel");
const optionsFuel = document.querySelector("#control-select-fuel select")

const btnMedia = document.querySelector("#btn-media");
const btnReset = document.querySelector("#btn-reset");

const averagePriceCalculator = document.querySelector("#average-price-calculator");
const avarageResult = document.querySelector("#avarage-result");
const boxResults = document.querySelectorAll(".box-results");

// insere cor no select
function insertColorSelctedFuel() {
    optionsFuel.className = "";
    if (selectFuel.value == "gasoline") {
        selectFuel.classList.add("select-gasoline");
    } else if (selectFuel.value == "alcohol") {
        selectFuel.classList.add("select-alcohol");
    } else if (selectFuel.value == "diesel") {
        selectFuel.classList.add("select-diesel");
    } else {
        selectFuel.classList.add("grey");
    }
}

// Seleciona o tipo do resultado
function selectTypeResult() {

}

// Exibe o btn-reset
function displayBtnReset() {
    btnReset.style.display = "block";
}

// Oculta o btn-reset
function hideBtnReset() {
    btnReset.style.display = "none";
    divResults.innerHTML = "";
    divResults.className = "";
    divResults.style.display = "none";
}

// Limpa os inputs/ select
function clearInputs() {
    optionsFuel.value = "";
    optionsFuel.className = "";
    kmTraveledInput.value = "";
    litersInput.value = "";
}

boxResults.forEach((event) => {
    event.addEventListener();
    if () { }
});

// Cria o resultado
function createElementResult() {
    if (divResults) {
        divResults.remove();
    }
    // Cria o resultado  
    divResults = document.createElement("div");
    divResults.classList.add("results");
    // Cria o header-results
    headerResults = document.createElement("div");
    headerResults.classList.add("header-results");
    divResults.appendChild(headerResults);

    pResult = document.createElement("p");
    headerResults.appendChild(pResult);
    pResult.textContent = `Resultado`;

    // Cria o body-results
    const divBodyResults = document.createElement("div");
    divBodyResults.classList.add("body-results");
    divResults.appendChild(divBodyResults);

    // Cria o elemento tipe-results dentro do body-results
    const pTipeResults = document.createElement("p");
    pTipeResults.classList.add("tipe-results");
    divBodyResults.appendChild(pTipeResults);

    spanTipeResults = document.createElement("span");
    spanTipeResults.textContent = `Media`;
    pTipeResults.appendChild(spanTipeResults);

    pValueResults = document.createElement("p");
    pValueResults.classList.add("value-results");
    pValueResults.textContent = `de`;
    divBodyResults.appendChild(pValueResults);

    spanValueResults = document.createElement("span");
    spanValueResults.textContent = `18.5`;
    pValueResults.appendChild(spanValueResults);

    pFuelResults = document.createElement("p");
    pFuelResults.classList.add("fuel-results");
    pFuelResults.textContent = `Km/Litros de`;
    divBodyResults.appendChild(pFuelResults);

    spanFuelResults = document.createElement("span");
    spanFuelResults.textContent = `Gasolina`;
    pFuelResults.appendChild(spanFuelResults);

    boxResults.appendChild(divResults);
    // averagePriceCalculator.insertAdjacentElement("afterend", divResults);
}

let divResults;
let headerResults;
let pResult;
let spanTipeResults;
let pValueResults;
let spanValueResults;
let pFuelResults;
let spanFuelResults;

// Inserir cor ao resultado
function insertColorResult() {
    if (selectFuel.value == "gasoline") {
        divResults.style.border = "1px solid #c1fcc436";
        divResults.style.backgroundColor = "#c1fcc41f";
        headerResults.style.borderBottom = "1px solid #c1fcc436";
        pResult.style.color = "#c1fcc48e";
        spanTipeResults.style.color = "#c1fcc45e";
        pValueResults.style.color = "#c1fcc45e";

        spanValueResults.style.color = "#c1fcc4ab";
        pFuelResults.style.color = "#c1fcc45e";
        spanFuelResults.style.color = "#c1fcc4ab";
    } else if (selectFuel.value == "alcohol") {
        divResults.style.border = "1px solid #8bb9fe41";
        divResults.style.backgroundColor = "#8bb9fe17";
        headerResults.style.borderBottom = "1px solid #8bb9fe41";
        pResult.style.color = "#7291be";
        spanTipeResults.style.color = "#7291be";
        pValueResults.style.color = "#7291be";
        spanValueResults.style.color = "#91b7f1";
        pFuelResults.style.color = "#7291be";
        spanFuelResults.style.color = "#91b7f1";

    } else if (selectFuel.value == "diesel") {
        divResults.style.border = "1px solid #f7ba4844";
        divResults.style.backgroundColor = "#f7b94817";
        headerResults.style.borderBottom = "1px solid #f7ba4844";
        pResult.style.color = "#f7ba488f";
        spanTipeResults.style.color = "#f7ba488f";
        pValueResults.style.color = "#f7ba488f";
        spanValueResults.style.color = "#f7ba48e1";
        pFuelResults.style.color = "#f7ba488f";
        spanFuelResults.style.color = "#f7ba48e1";
    } else {
    }
}

// Calcula o consumo medio
function averageConsumption() {
    const liters = litersInput.value;
    const kmTraveled = kmTraveledInput.value;
    const average = (kmTraveled / liters).toFixed(1);
    console.log(average);
}

// Eventos
selectFuel.addEventListener("click", () => {
    insertColorSelctedFuel();
});

let btnId;
btnMedia.addEventListener("click", () => {
    if (!litersInput.value || !kmTraveledInput.value || !selectFuel.value) return;
    btnId = `1`;
    averageConsumption();
    createElementResult();
    insertColorResult();
    displayBtnReset();
});

btnReset.addEventListener("click", () => {
    clearInputs();
    hideBtnReset();
});

const header = document.querySelector("#header");

window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > 200) {
        header.style.backgroundColor = "#56448842"
    } else if (window.pageXOffset < 100) {
        header.style.backgroundColor = "#564488";
    }
});