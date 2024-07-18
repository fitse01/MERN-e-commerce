import mongoose from "mongoose";

const dbConnect = async() => {
    try {
        const connected = await mongoose.connect(process.env.MONGODB_URL)
        console.log(`Mongodb connected ${ connected.connection}`)
    } catch (error) {
        console.log(`Error : ${error.message}`);
        process.exit(1)
    }
}
export default dbConnect;



// mongodb+srv://fitsumtafese01:8S8os835eSNN6JPF@nodejs-ecommerce-api.2on5gof.mongodb.net/nodeJS-ecommerce-api?retryWrites=true&w=majority&appName=nodeJS-ecommerce-api