module.exports = {
  MongoURI: `mongodb://${process.env.USERNAME}:${process.env.DBPASSWORD}@fantasy-baseball-shard-00-00-jtaa4.mongodb.net:27017,fantasy-baseball-shard-00-01-jtaa4.mongodb.net:27017,fantasy-baseball-shard-00-02-jtaa4.mongodb.net:27017/test?ssl=true&replicaSet=Fantasy-Baseball-shard-0&authSource=admin&retryWrites=true`
}