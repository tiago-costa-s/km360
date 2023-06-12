// Seletores
const litersF = document.querySelector("#liters");
const kmTrav = document.querySelector("#km-traveled");
const gasolineP = document.querySelector("#gasoline-price");
const alcoholP = document.querySelector("#alcohol-price");

const btnAverage = document.querySelector("#btn-average");
const btnBestPrice = document.querySelector("#btn-best-price");

const btnResets = document.querySelectorAll(".btn-reset");
const btnResetAverage = document.querySelector("#btn-reset-average");
const btnResetBestPrice = document.querySelector("#btn-reset-best-price");

const optionsSelect = document.querySelector("#control-select-fuel select");

// Funções
function insertColorSelectOpitions() {
    optionsSelect.className = "";
    if (optionsSelect.value === "gasoline") {
        optionsSelect.classList.add("gasoline-text-colors");
    }
    else if (optionsSelect.value === "alcohol") {
        optionsSelect.classList.add("alcohol-text-colors");
    }
    else if (optionsSelect.value === "diesel") {
        optionsSelect.classList.add("diesel-text-colors");
    } else {
        optionsSelect.classList.add("noneClass");
    }
}

function selectTypeFuel() {
    const select = optionsSelect.value;
    if (select === "gasoline") {
        return `Gasolina`;
    } else if (select === "alcohol") {
        return `Álcool`;
    } else if (select === "diesel") {
        return `Diesel`;
    }
}

// Calcula Média
function calcAverage() {
    btnResetAverage.style.display = "block";

    const litersFuel = +litersF.value.replace(",", ".");
    const kmTraveled = +kmTrav.value.replace(",", ".");
    const average = kmTraveled / litersFuel;
    return average;
}

// Calcula o melhor preço
function calcBestPrice() {
    btnResetBestPrice.style.display = "block";

    const gasolinePrice = +gasolineP.value.replace(",", ".");
    const alcoholPrice = +alcoholP.value.replace(",", ".");
    const bestPriceValue = ((alcoholPrice / gasolinePrice) * 100).toFixed(1);
    if (bestPriceValue <= 70) {
        return `Álcool`;
    } else {
        return `Gasolina`;
    }
}

// const boxResultsResult = document.querySelectorAll(".box-results");
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");

let existingResult1;
let existingResult2;

let headerResults;
let pResult;
let pValueResults;
let spanValueResults;
let pFuelResults;
let pTipeResults;
let spanTypeFuel;

function createResult() {
    let divResults = document.createElement("div");
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
    pTipeResults = document.createElement("p");
    pTipeResults.classList.add("tipe-results");
    divBodyResults.appendChild(pTipeResults);

    pValueResults = document.createElement("p");
    pValueResults.classList.add("value-results");
    divBodyResults.appendChild(pValueResults);

    spanValueResults = document.createElement("span");
    pValueResults.appendChild(spanValueResults);

    pFuelResults = document.createElement("p");
    pFuelResults.classList.add("fuel-results");
    divBodyResults.appendChild(pFuelResults);

    let pTypeFuel = document.createElement("p");
    pTypeFuel.classList.add("type-fuel");
    divBodyResults.appendChild(pTypeFuel);

    spanTypeFuel = document.createElement("span");
    pTypeFuel.appendChild(spanTypeFuel);

    if (this === btnAverage) {
        if (!litersF.value || !kmTrav.value || !optionsSelect.value) return;

        existingResult1 = document.querySelector("#result1");
        if (existingResult1 != null) {
            existingResult1.remove();
        }

        divResults.id = "result1";

        pTipeResults.textContent = `Média de`;
        spanValueResults.textContent = `${calcAverage().toFixed(1)}`;
        pFuelResults.textContent = `Km/Litro de `;
        spanTypeFuel.textContent = `${selectTypeFuel()}`;
        box1.appendChild(divResults);

        insertColorResult1();

    } else if (this === btnBestPrice) {
        if (!gasolineP.value || !alcoholP.value) return;

        existingResult2 = document.querySelector("#result2");
        if (existingResult2 != null) {
            existingResult2.remove();
        }

        divResults.id = "result2";

        if (calcBestPrice() == "Álcool") {
            pTipeResults.textContent = `O`;
        } else if (calcBestPrice() == "Gasolina") {
            pTipeResults.textContent = `Á`;
        }

        spanValueResults.textContent = `${calcBestPrice()}`;
        pFuelResults.textContent = `está com o melhor preço. `;
        box2.appendChild(divResults);

        insertColorResult2();
    }
}

// Aplica cores no resultado
function insertColorResult1() {
    existingResult1 = document.querySelector("#result1");

    if (optionsSelect.value === "gasoline") {
        existingResult1.classList.add("gasoline-colors-result");
        headerResults.classList.add("gasoline-colors-header");
        pResult.classList.add("gasoline-span-colors");
        pTipeResults.classList.add("gasoline-text-colors");

        spanValueResults.classList.add("gasoline-span-colors");
        pFuelResults.classList.add("gasoline-text-colors");
        spanTypeFuel.classList.add("gasoline-span-colors");
    }

    else if (optionsSelect.value === "alcohol") {
        existingResult1.classList.add("alcohol-colors-result");
        headerResults.classList.add("alcohol-colors-header");
        pResult.classList.add("alcohol-span-colors");
        pTipeResults.classList.add("alcohol-text-colors");

        spanValueResults.classList.add("alcohol-span-colors");
        pFuelResults.classList.add("alcohol-text-colors");
        spanTypeFuel.classList.add("alcohol-span-colors");
    }

    else if (optionsSelect.value === "diesel") {
        existingResult1.classList.add("diesel-colors-result");
        headerResults.classList.add("diesel-colors-header");
        pResult.classList.add("diesel-span-colors");
        pTipeResults.classList.add("diesel-text-colors");

        spanValueResults.classList.add("diesel-span-colors");
        pFuelResults.classList.add("diesel-text-colors");
        spanTypeFuel.classList.add("diesel-span-colors");
    }
}

function insertColorResult2() {
    existingResult2 = document.querySelector("#result2");

    if (calcBestPrice() == "Álcool") {
        existingResult2.classList.add("gasoline-colors-result");
        headerResults.classList.add("gasoline-colors-header");
        pResult.classList.add("gasoline-span-colors");
        pTipeResults.classList.add("gasoline-text-colors");

        spanValueResults.classList.add("gasoline-span-colors");
        pFuelResults.classList.add("gasoline-text-colors");
        spanTypeFuel.classList.add("gasoline-span-colors");
    }

    else if (calcBestPrice() == "Gasolina") {
        existingResult2.classList.add("alcohol-colors-result");
        headerResults.classList.add("alcohol-colors-header");
        pResult.classList.add("alcohol-span-colors");
        pTipeResults.classList.add("alcohol-text-colors");

        spanValueResults.classList.add("alcohol-span-colors");
        pFuelResults.classList.add("alcohol-text-colors");
        spanTypeFuel.classList.add("alcohol-span-colors");
    }
}

function resetInputsAverage() {
    if (litersF.value == "" && kmTrav.value == "") {
        btnResetAverage.style.display = "none";
    }
    litersF.value = "";
    kmTrav.value = "";
    box1.innerHTML = "";
}

function resetInputsBestPrice() {
    if (gasolineP.value == "" && alcoholP.value == "") {
        btnResetBestPrice.style.display = "none";
    }
    gasolineP.value = "";
    alcoholP.value = "";
    box2.innerHTML = "";
}

// Eventos
optionsSelect.addEventListener("input", insertColorSelectOpitions);
btnAverage.addEventListener("click", createResult);
btnBestPrice.addEventListener("click", createResult);

btnResets.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        console.log("Teste");
        if (e.target.id === "btn-reset-average") {
            resetInputsAverage();
        }

        if (e.target.id === "btn-reset-best-price") {
            resetInputsBestPrice();
        }
    });
});