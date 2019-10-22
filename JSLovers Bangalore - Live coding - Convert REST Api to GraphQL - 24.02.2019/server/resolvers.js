module.exports = {
    Query: {
        match: async (_, args, { dataSources }) => {
            try{
                const user = await dataSources.RandomUserAPI.getUser(args.gender)
                const match = await dataSources.LoveCalcAPI.getPercentage(args.name, user.name);
                user.percentage = match.percentage;
                user.result = match.result;
                return user
            }catch(e) {
                return e;
            }
        }
    }
}