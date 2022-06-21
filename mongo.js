const mongoose = require('mongoose')
const mongoPath ='mongodb+srv://tutorial:7Vrm4WAOa4lELjAg@sandbox.lkv3pnk.mongodb.net/test-db?retryWrites=true&w=majority'

//7Vrm4WAOa4lELjAg

module.exports = async () => {
    await mongoose.connect(mongoPath, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    return mongoose
}