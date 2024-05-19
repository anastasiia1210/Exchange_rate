const axios = require('axios');

async function getExchangeRates() {
    try {
        const response = await axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        const exchangeRate = response.data.find(rate => rate.cc === 'USD').rate;
        console.log(exchangeRate);
        return exchangeRate;
    } catch (error) {
        console.error('Error fetching exchange rates:', error);
        throw error;
    }
}

module.exports = {
    getExchangeRates,
};
