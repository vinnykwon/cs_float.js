# cs_float.js
Mobile-API for [CsFloat](https://play.google.com/store/apps/details?id=com.csfloat.app) an marketplace application with hundreds of thousands of skins available to buy or sell, [Website](https://csfloat.com/)

## Example
```JavaScript
async function main() {
	const { CsFloat } = require("./cs_float.js")
	const csFloat = new CsFloat()
	const exchangeRates = await csFloat.getExchangeRates()
	console.log(exchangeRates)
}

main()
```
