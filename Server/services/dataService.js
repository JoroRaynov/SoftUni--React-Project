const AdModel = require("../models/adModel");


async function getAll() {
    return AdModel.find({});
}

async function getById(id) {
    return AdModel.findById(id).populate('_ownerId');
}


async function sixAds() {
    return AdModel.find().limit(-6);
}

async function create(data) {
   
    return AdModel.create(data);
}

async function getByUserId(userId){
    return AdModel.find({_ownerId: userId}).populate('_ownerId');
}



async function update(id, data) {
    const existing = await AdModel.findById(id);

    existing.title = data.title;
    existing.category = data.category;
    existing.price = data.price;
    existing.imageUrl = data.imageUrl;
    existing.description = data.description;
    existing.location = data.location;
    existing.contact = data.contact;

    return existing.save();
}

async function deleteById(id) {
    return AdModel.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    getByUserId,
    sixAds
}