const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      //   useNewUrlParser: true,
      //   useUnifiedTopology: true,
    });
    console.log(`Database Connected ${conn.connection.host}`.bgMagenta);
  } catch (error) {
    console.log(`Error in DB Connection ${error.message}`);
    process.exit();
  }
};

module.exports = connectDB;
