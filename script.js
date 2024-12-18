document.getElementById('exchange-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    // Static exchange rates for demonstration purposes
    const exchangeRates = {
        USD: { EUR: 0.85, GBP: 0.75, JPY: 110.00, AUD: 1.35, CAD: 1.25, CHF: 0.92, CNY: 6.45, SEK: 8.50, NZD: 1.40 },
        EUR: { USD: 1.18, GBP: 0.88, JPY: 129.00, AUD: 1.59, CAD: 1.47, CHF: 1.08, CNY: 7.60, SEK: 10.00, NZD: 1.65 },
        GBP: { USD: 1.33, EUR: 1.14, JPY: 146.00, AUD: 1.80, CAD: 1.60, CHF: 1.45, CNY: 8.60, SEK: 11.30, NZD: 1.75 },
        JPY: { USD: 0.0091, EUR: 0.0078, GBP: 0.0068, AUD: 0.012, CAD: 0.011, CHF: 0.0084, CNY: 0.056, SEK: 0.080, NZD: 0.0095 },
        AUD: { USD: 0.74, EUR: 0.63, GBP: 0.56, JPY: 82.00, CAD: 0.93, CHF: 0.68, CNY: 4.80, SEK: 6.00, NZD: 1.05 },
        CAD: { USD: 0.80, EUR: 0.68, GBP: 0.62, JPY: 87.00, AUD: 1.07, CHF: 0.73, CNY: 5.00, SEK: 6.50, NZD: 1.10 },
        CHF: { USD: 1.09, EUR: 0.93, GBP: 0.69, JPY: 130.00, AUD: 1.47, CAD: 1.37, CNY: 7.10, SEK: 9.20, NZD: 1.50 },
        CNY: { USD: 0.15, EUR: 0.13, GBP: 0.12, JPY: 17.70, AUD: 0.21, CAD: 0.20, CHF: 0.14, SEK: 1.30, NZD: 0.23 },
        SEK: { USD: 0.12, EUR: 0.10, GBP: 0.088, JPY: 13.00, AUD: 0.17, CAD: 0.15, CHF: 0.11, CNY: 0.77, NZD: 0.15 },
        NZD: { USD: 0.71, EUR: 0.61, GBP: 0.57, JPY: 83.00, AUD: 0.95, CAD: 0.91, CHF: 0.67, CNY: 4.60, SEK: 6.70 }
    };

    if (fromCurrency === toCurrency) {
        document.getElementById('result').innerText = `Converted Amount: ${amount} ${toCurrency}`;
    } else {
        const convertedAmount = (amount * exchangeRates[fromCurrency][toCurrency]).toFixed(2);
        document.getElementById('result').innerText = `Converted Amount: ${convertedAmount} ${toCurrency}`;
    }
});