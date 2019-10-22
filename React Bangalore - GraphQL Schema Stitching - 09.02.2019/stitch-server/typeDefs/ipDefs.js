const ipDefs = `
type Mutation {
    addIp(ip: String!): [String]
}
  type Query{
      ips: [String]
  }
`
module.exports = ipDefs;