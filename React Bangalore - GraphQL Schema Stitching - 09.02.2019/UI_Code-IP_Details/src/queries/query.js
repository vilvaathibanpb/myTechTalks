import gql from "graphql-tag";

export const stitchedQuery = gql`
query($ipaddress: String!) {
  getLocation(ip: $ipaddress) {
    country {
      iso_code
    }
    country_details{
      name
      emoji
      currency
      phone
      native
      languages {
        name
      }
    }
  }
  ips
}
`
export const getIps = gql`
  {
    ips
  }
`

export const saveIps = gql`
mutation addIp(
  $ipaddress: String
){
  addIp(ip: $ipaddress)
 }
`