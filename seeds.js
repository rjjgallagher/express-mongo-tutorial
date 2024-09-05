const Product = require('./models/product.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!");
    })
    .catch(err => {
        console.log("OH NO, MONGO CONNECTION ERROR!!!");
        console.log(err);
    });

// const p = new Product({
//     name: "Ruby Grapefruit",
//     price: 1.99,
//     category: 'fruit'
// })
// p.save().then(p => {
//     console.log(p);
// })
// .catch(e => {
//     console.log(e);
// });

const seedProducts = [
    {
        name: 'Purple Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Delicious Melon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 6.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.00,
        category: 'dairy'
    },
    {
        name: 'Skim Milk',
        price: 2.00,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e);
    });