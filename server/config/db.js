const mongoose = require('mongoose');

const PORT = process.env.PORT || 500;

const CONNECTION_URI = "mongodb+srv://gopala_123:gopala_123@cluster0.b6n0m.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(CONNECTION_URI, { useNewUrlParser: true, useUnifiedTopology: true });

        console.log('Connected to db');
    } catch (error) {
        console.log('Following Error Occured: ' + error);
        process.exit();
    }

}

module.exports = connectDB; 