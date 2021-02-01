const currencySelect = document.getElementById('currency-one');
const currencySelectTwo = document.getElementById('currency-two');
const currencyAmount = document.getElementById('amount-one');
const currencyAmountTwo = document.getElementById('amount-two');

const swapCurrency = document.getElementById('swap');
const rateElement = document.getElementById('rate');


function calculate () {
    const currencyOne = currencySelect.value;
    const currencyTwo = currencySelectTwo.value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${currencyOne}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currencyTwo];
        
        rateElement.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;

        currencyAmountTwo.value = (currencyAmount.value * rate).toFixed(2);
    });
}




//Event Listeners
currencySelect.addEventListener('change', calculate);
currencySelectTwo.addEventListener('change', calculate);
currencyAmount.addEventListener('input', calculate);
currencyAmountTwo.addEventListener('input', calculate);

swapCurrency.addEventListener('click', () => {
    const temp = currencySelect.value;
    currencySelect.value = currencySelectTwo.value;
    currencySelectTwo.value = temp;
    calculate();
})

calculate();