import mongoose  from "mongoose"
async function connect() {
    await mongoose.connect('mongodb://127.0.0.1:27017/express-shop', {})
    console.log("Connect database successfully")
}
export default { connect : connect}