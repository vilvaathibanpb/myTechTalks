const IpResolver = {
    Query: {
        ips: async (parent, args, { dataSources }) => {
            return await dataSources.IpHistoryAPI.getIpHistory()
        },
    },
    Mutation: {
        addIp: async (parent, {ip}, { dataSources}) => {
            console.log(ip)
            return await dataSources.IpHistoryAPI.saveIp(ip);
        }
    }
}
module.exports = IpResolver