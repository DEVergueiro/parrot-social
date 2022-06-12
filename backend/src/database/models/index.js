const User = require('./user')
const Post = require("./post")


Post.belongsTo(User,{
    foreignKey:"User_id",
})


module.exports={User, Post}
