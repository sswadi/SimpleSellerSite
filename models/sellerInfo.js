const mongoose = require('mongoose');

// Define the schema for the sellers
const sellerSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    businessName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    storeInfo: storeSchema,
    categories: [categorySchema],
    inventory: [inventorySchema],
    url: {
        type: String,
        required: true,
        unique: true
    }
});


// Define the schema for the store information
const storeSchema = new mongoose.Schema({
    address: String,
    gst: String,
    logo: String,
    storeTimings: String,
});

// Define the schema for the categories
const categorySchema = new mongoose.Schema({
    name: String,
    subcategories: [{
        name: String,
    }],
});

// Define the schema for the inventory items
const inventorySchema = new mongoose.Schema({
    category: String,
    subcategory: String,
    productName: String,
    MRP: Number,
    SP: Number,
    quantity: Number,
    images: [String],
});



const Seller = mongoose.model('Seller', sellerSchema);

module.exports = Seller;