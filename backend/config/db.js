const mongoose = require("mongoose");
const DB_URL = process.env.MONGO_URI || "mongodb+srv://yash:Yash5211@cluster0.hhy0x.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(DB_URL, {
      useUnifiedtopology: true,
    });
    console.log(`Connected successfully ${conn.connection.host}`);
  } catch (error) {
    console.error(`ERROR : ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
