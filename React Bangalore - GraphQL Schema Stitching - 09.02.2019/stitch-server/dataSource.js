const { RESTDataSource } = require('apollo-datasource-rest')

class IpHistoryAPI extends RESTDataSource {
    constructor() {
        super()
        this.baseURL = 'http://localhost:4002/'
    }

    async getIpHistory() {
        const ipAddressHistory = await this.get('getHistory')
        return ipAddressHistory
    }

    async saveIp(ip) {
        console.log(ip)
        const ipAddressHistory = await this.get('saveIp?ip='+ip)
        return ipAddressHistory
    }
}

module.exports = IpHistoryAPI
