const { ApolloServer } = require('apollo-server');
const { mergeSchemas } = require('graphql-tools');
const IpHistoryAPI = require('./dataSource')
const createRemoteExecutableSchemas = require('./utils/createRemoteExecutableSchemas');

const dataSources = () => ({
    IpHistoryAPI: new IpHistoryAPI(),
})

const createNewSchema = async () => {
    const schemas = await createRemoteExecutableSchemas();
    return mergeSchemas({
        schemas,
        resolvers: {
            locdata: {
                country_details(locdata, args, context, info) {
                    const obj = {
                        schema: schemas[0],
                        operation: 'query',
                        fieldName: 'country',
                        args: {
                            code: locdata.country.iso_code
                        },
                        context,
                        info,
                    }
                    return info.mergeInfo.delegateToSchema(obj);
                }

            }
        }
    });
};

const runServer = async () => {
    const schema = await createNewSchema();
    const server = new ApolloServer({ schema, dataSources });
    server.listen().then(({ url }) => {
        console.log(`Running at ${url}`);
    });
}

try {
    runServer();
} catch (err) {
    console.error(err);
}