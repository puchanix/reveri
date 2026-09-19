// Local pricing for /pricing. Returns the price table for the visitor's country (from Vercel's geo header).
// USD is the default; add rows as regional prices are confirmed in RevenueCat / Stripe.
const TABLE = {
  // country: { currency, symbol, yearly, yearly_mo, monthly, vat, countryName }
  // GB: { currency: 'GBP', symbol: '£', yearly: '79.99', yearly_mo: '6.67', monthly: '19.99', vat: true, countryName: 'the UK' },
};
export default function handler(req, res) {
  const c = (req.headers['x-vercel-ip-country'] || 'US').toUpperCase();
  res.setHeader('cache-control', 'private, max-age=3600');
  res.status(200).json(Object.assign({ country: c, currency: 'USD' }, TABLE[c] || {}));
}
