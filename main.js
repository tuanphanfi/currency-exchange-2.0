let inputAmount = document.getElementById("amountInput");
let result = document.getElementById("result")

let fromCurrency = document.getElementById("fromCurrency")
let toCurrency = document.getElementById("toCurrency")

const currencyRatio = {
    vnd: {
        usd: 0.000043,
        krw: 0.051,
        eur: 0.000039,
        vnd: 1
    },
    usd: {
        usd: 1,
        krw: 1193.27,
        eur: 0.9,
        vnd: 23235.5
    },
    krw: {
        usd: 0.00084,
        krw: 1,
        eur: 0.00075,
        vnd: 19.47
    },
    eur: {
        usd: 1.13,
        krw: 1349.62,
        eur: 1,
        vnd: 26151.27
    }

};

function getConversionRate(from, to) {
    return currencyRatio[from][to];
}

function convert() {
    let conversionRate = getConversionRate(fromCurrency.value.toLowerCase(), toCurrency.value.toLowerCase())
    console.log(conversionRate, inputAmount.value);
    let total = inputAmount.value * conversionRate;
    // if (fromCurrency.value === 'USD' && toCurrency.value === 'VND') {
    //     total = (inputAmount.value * exchangeRateUsdToVnd);
    // } else if (fromCurrency.value === 'EURO' && toCurrency.value === 'VND') {
    //     total = (inputAmount.value * exchangeRateEuroToVnd);
    // } else if (fromCurrency.value === 'KRW' && toCurrency.value === 'VND') {
    //     total = (inputAmount.value * exchangeRateKRWToVnd);
    // } else if (fromCurrency.value === 'VND' && toCurrency.value === 'USD') {
    //     total = (inputAmount.value / exchangeRateUsdToVnd);
    // } else if (fromCurrency.value === 'VND' && toCurrency.value === 'EURO') {
    //     total = (inputAmount.value / exchangeRateEuroToVnd);
    // } else if (fromCurrency.value === 'VND' && toCurrency.value === 'KRW') {
    //     total = (inputAmount.value / exchangeRateKRWToVnd);
    // } else if (fromCurrency.value === toCurrency.value) {
    //     total = (inputAmount.value);
    // }    

    let output = formatCurrency(toCurrency.value.toLowerCase(), `  ${total}`);

    console.log(output)
    result.innerHTML = output;
    console.log(result)
}


function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
        currency: type,
        style: "currency"
    });
    return formatter.format(value);
}

const test = () => {
    console.log("test")
}
test()

let amountArea = document.getElementById("amountInput")
amountArea.addEventListener("input", convert)