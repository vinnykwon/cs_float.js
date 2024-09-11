class CsFloat {
	constructor() {
		this.api = "https://csfloat.com/api/v1"
		this.headers = {
			"User-Agent": "Mozilla/5.0 (Linux; Android 9; SM-N9860 Build/PQ3A.190705.08211809; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/124.0.6367.82 Mobile Safari/537.36"
		}
	}

	async getLocation() {
		const response = await fetch(
			`${this.api}/meta/location`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getExchangeRates() {
		const response = await fetch(
			`${this.api}/meta/exchange-rates`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getSchema() {
		const response = await fetch(
			`${this.api}/schema`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getFloatCount() {
		const response = await fetch(
			`${this.api}/floatdb/count`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}

	async getListings(limit = 10, minRefQty = 20) {
		const response = await fetch(
			`${this.api}/listings?limit=${limit}&min_ref_qty=${minRefQty}`, {
				method: "GET",
				headers: this.headers
			})
		return response.json()
	}
}

module.exports = {CsFloat}
