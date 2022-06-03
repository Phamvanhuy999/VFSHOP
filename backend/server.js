import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import seedRouter from './routes/seedRoute.js';
import productRouter from './routes/productRoute.js';
import userRouter from './routes/userRouter.js';
import orderRouter from './routes/orderRoutes.js';
dotenv.config();

//ket noi mongdb compass
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/VFSHOP_2', { useNewUrlParser: true, useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
//Bắt sự kiện error
db.on('error', function (err) {
    if (err) console.log(err)
});
//Bắt sự kiện open
db.once('open', function () {
    console.log("Kết nối thành công !");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get('/api/keys/paypal', (req, res) => {
    res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
  });
app.use('/api/seed', seedRouter);
app.use('/api/products', productRouter);
app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message })
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`);
})