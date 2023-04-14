const { model, Schema, Types: {ObjectId} } = require('mongoose');

const adSchema = new Schema({
    title: { type: 'string', required: true, minlength: [3, 'Title must be at least 3 characters long']},
    category: { type: 'string', required: true, minlength: [3, 'Title must be at least 3 characters long']},
    imageUrl: { type:'string',required: true, 
    validate: { 
        validator: (value) => value.startsWith('http'), 
        message: 'Not valid URL'
    }},
    price: { type: 'number', requirsed: true, min: [1, 'Price must be positive number']},
    description: {type: 'string', required: true, minLength: [10, 'Description must be at least 10 characters long']},
    _ownerId: {type: ObjectId, ref: 'User'},
    location: {type: 'string', required: false},
    contact: {type: 'string', required: false}
});


const AdModel = model('Ad', adSchema);


module.exports = AdModel;