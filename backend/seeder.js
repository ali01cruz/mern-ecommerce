import users from './src/data/users.js';
import products from './src/data/products.js';
import User from './src/models/userModel.js';
import Product from './src/models/productModel.js';
import Order from './src/models/orderModel.js';
import connectDB from './src/config/db.js';

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);
        const adminUser = createdUsers[0]._id;
        const sampleProducts = products.map((product) => {
            return {...product, user: adminUser};
        });

        await Product.insertMany(sampleProducts);
        console.log("Data imported!" .green.inverse);
        process.exit();

    } catch (error) {
        console.log(`Error mostrar : ${error}`.red.inverse);
        process.exit(1);
    }

};

const destroyData = async()=> {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data destroyed!" .green.inverse);
        process.exit();

    } catch (error) {
        console.log(`${error}`.red.inverse);
        process.exit(1);
    }
}

if(process.argv[2] === '-d'){
    destroyData();
}else{
    importData();
}

export default importData;