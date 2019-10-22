const { RESTDataSource } = require('apollo-datasource-rest');
const key = require('../config');

class LoveCalcAPI extends RESTDataSource {
    constructor() {
      super();
      this.baseURL = 'https://love-calculator.p.rapidapi.com/';
    }
    willSendRequest(request) {
        request.headers.set('X-RapidAPI-Key', key)
      }
    async getPercentage(fname, sname) {
        return await this.get(`getPercentage?fname=${fname}&sname=${sname}`)
    }
  }

  module.exports = LoveCalcAPI;