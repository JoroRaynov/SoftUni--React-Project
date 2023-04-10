const { hasUser } = require('../middlewares/guards');
const { getAll, create, getById, update, deleteById, getByUserId, sixAds } = require('../services/dataService');
const { getUserData } = require('../services/userService');
const { parseError } = require('../util/parser');

const dataController = require('express').Router();
//get all ads
dataController.get('/catalog', async (req, res) => {
    let ads = [];
    if (req.query.where) {
        const userId = JSON.parse(req.query.where.split('=')[1]);
        ads = await getByUserId(userId);
    } else {
        ads = await getAll();
    }
    res.json(ads)
});

dataController.get('/catalog/six', async (req, res) => {

    const six = await sixAds();
    res.json(six);
})
//create ad
dataController.post('/catalog', hasUser(), async (req, res) => {

    const user = await getUserData(req.user._id);
    try {
        const data = Object.assign({ _ownerId: req.user._id }, req.body)
        const ad = await create(data);
        user.userAds.push(ad._id);
        user.save();
        res.json(ad);
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message })
    }
});

//details
dataController.get('/catalog/:id', async (req, res) => {
    const ad = await getById(req.params.id);
    try {
        if (ad) {
            res.json(ad);

        }
    } catch (err) {
        const message = parseError(err)
        res.status(404).json({ message });
    }
});

dataController.put('/catalog/:id', hasUser(), async (req, res, next) => {
    const ad = await getById(req.params.id);
    if (req.user._id != ad._ownerId._id) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }
    try {
        const result = await update(req.params.id, req.body)
        res.json(result);
    } catch (err) {
        const message = parseError(err)
        res.status(400).json({ message })
    }
});

dataController.delete('/catalog/:id', hasUser(), async (req, res) => {
    const ad = await getById(req.params.id);
    if (req.user._id != ad._ownerId._id) {
        return res.status(403).json({ message: 'You cannot modify this record' })
    }

    try {
        await deleteById(req.params.id);
        res.status(204).end();
    } catch (err) {
        const message = parseError(err);
        res.status(400).json({ message })
    }
})


module.exports = dataController;