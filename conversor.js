document.addEventListener("DOMContentLoaded", function() {
  const amountInput = document.getElementById("amount");
  const fromCurrencySelect = document.getElementById("from");
  const toCurrencySelect = document.getElementById("to");
  const convertButton = document.getElementById("convertBtn");
  const resultElement = document.getElementById("result");
  const amount = amountInput.value;
const fromCurrency = fromCurrencySelect.value;
const toCurrency = toCurrencySelect.value;



  convertButton.addEventListener("click", convertCurrency);

  function convertCurrency() {
    const amount = amountInput.value;
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    const url = `https://api.apilayer.com/exchangerates_data/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`;
    const requestOptions = {
      method: 'GET',
      headers: new Headers({
        'apikey': 'OkCfG5qZskDKbo1zV0Wx4xnV25jf4KMs'
      }),
      redirect: 'follow'
    };

    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => {
        const data = JSON.parse(result);
        const convertedAmount = data.result;
        resultElement.innerText = `${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`;
      })
      .catch(error => console.log('error', error));
  }
});
