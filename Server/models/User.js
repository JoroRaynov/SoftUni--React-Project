const {Schema, model, Types: {ObjectId}} = require('mongoose');


const userSchema = new Schema ({
    email: {type: String, required: true, minLength: [8, 'Username must be at least 8 characters long'],unique: true},
    hashedPassword: {type: String, required: true},
    tel: {type: Number, default: ''},
    userAds: {type: [ObjectId], ref: 'AdModel'}
});



userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
});

const User = model('User', userSchema);

module.exports = User;