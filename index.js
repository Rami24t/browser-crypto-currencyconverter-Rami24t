// https://api.coinbase.com/v2/currencies
// <option value="BTC">BTC</option>
// Object
// id: "AED"
// name: "United Arab Emirates Dirham"

let currenciesData = {};
const selectC = document.querySelector('#c select');
const templateOption = `<option value="BTC">BTC</option>`;

fetch('https://api.coinbase.com/v2/currencies').then(currencies => currencies.json()).then((currencies) => {
    currenciesData = currencies; console.log(currenciesData.data[0]);

    for (currency of currenciesData.data) {
        let nextOption = templateOption.replace('BTC', currency.id).replace('BTC', currency.id + ':  ' + currency.name);
        selectC.innerHTML += nextOption;
    }

});





// https://api.coinbase.com/v2/prices/:currency_pair/spot
let object1 = {};

document.body.addEventListener('change', (e) => {

    if (e.target.parentElement.parentElement.id === 'cc' && e.target.nodeName == 'SELECT') {
        fetch('https://api.coinbase.com/v2/exchange-rates?currency=' + e.target.value).then(data => data.json()).then(data => object1 = data);
        console.log(e.target.value);
    }

})

document.querySelector('button.btn').addEventListener('click', (e) => {
    document.querySelector('#c input').value = object1.currency;
    console.log(object1.data.rates[selectC.value]);
})





// {
//     "data": {
//         "currency": "BTC",
//             "rates": {
//             "AED": "70429.408284045401320068",
//                 "AFN": "1696946.848616789677699248"