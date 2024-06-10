const mongoose = require('mongoose');
const { Schema } = mongoose;

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    cuisine: {
        type: String,
        required: true,
    },
    ingredients: {
        type: [String],
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
});


recipeSchema.pre('save', function (next) {
    this.ingredients = this.ingredients.map(ingredient => ingredient.toLowerCase());
    next();
});

module.exports =recipeSchema;