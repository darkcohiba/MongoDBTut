const mongo = require('./mongo')

const connectToMongoDB = async () => {
    await mongo().then((mongoose) => {
        try{
            console.log('Connecting to MongoDB')

        } finally {
            mongoose.connection.close()
        }
    })
}

connectToMongoDB()