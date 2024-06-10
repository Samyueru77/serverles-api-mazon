const mongoose = require('mongoose');
const recipeSchema = require('../schema/recipeSchema'); 


if (!(recipeSchema instanceof mongoose.Schema)) {
    throw new Error('recipeSchema is not a valid Mongoose schema');
}

const RecipeModel = mongoose.model('Recipe', recipeSchema);

module.exports = RecipeModel;