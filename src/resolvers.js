const fetch = require("node-fetch");
const userProfile = require('../FirebaseFunctions/userProfile');

const resolvers = {
  Query: {
    users: async () => {
      const data = await fetch("https://graphql-test-app.firebaseio.com/users.json");
      const dataJson = await data.json(); 
      const keys = Object.keys(dataJson);
      const mapsKeys = keys.map(function(item) {
        const userData = dataJson[item];
        const graphqlUser = userProfile(userData);
        return graphqlUser;
      });
      return mapsKeys;
    }
  }
};

module.exports = resolvers;