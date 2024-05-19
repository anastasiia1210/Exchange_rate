const exchangeRateService = require('../services/exchangeRate');

async function getExchangeRate(req, res) {
    try {
        const rate = await exchangeRateService.getExchangeRates();
        res.json({ rate: rate });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch exchange rate' });
    }
}

module.exports = {
    getExchangeRate,
};
