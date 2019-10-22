module.exports = {
    Query: {
        party: (_, __) => 
            ([
                {   
                    id: 1,
                    name: "BJP",
                    candidate: "NARENDRA MODI",
                    flag: "https://4.imimg.com/data4/XN/OH/MY-4668508/bjp-flag-250x250.jpg",
                    pic: "https://static-news.moneycontrol.com/static-mcnews/2019/03/680547-modi-boy-770x433-770x433.jpg",
                },
                {
                    id: 2,
                    name: "Congress",
                    candidate: "RAHUL GANDHI",
                    flag: "https://5.imimg.com/data5/RQ/QK/MY-30984272/congress-party-political-flag-500x500.jpg",
                    pic: "https://pbs.twimg.com/profile_images/974851878860312582/O-Zn2b72_400x400.jpg",
                }
            ])
    }
};