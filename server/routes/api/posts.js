const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET API
router.get('/', async (req, res) => {
    const post = await loadPostCollection();
    const preResult = (await post.find({}));
    const result = await preResult.toArray();
    res.send(result);
});

// ADD API
router.post('/', async (req, res) => {
    const posts = await loadPostCollection();
    await posts.insertOne({
        userID: req.body.userID,
        title: req.body.title,
        size: req.body.size,
        description: req.body.description,
        price: req.body.price,
    });
    res.status(201).send();
});

// DELETE API
router.delete('/:id', async (req, res) => {
    const post = await loadPostCollection();
    await post.deleteOne({_id: new mongodb.ObjectId(req.params.id) });
    res.status(200).send();
}
)


//UPDATE API
router.patch('/:id', async (req, res) => {
    try {
        const post = await loadPostCollection();
        const updatedData = req.body;
        const options = { upsert: true };

        const result = await post.updateOne(
            {_id: new mongodb.ObjectId(req.params.id) }, { $set:{
                title: req.body.title,
                size: req.body.size,
                description: req.body.description,
                price: req.body.price,
            }}, { upsert: true }
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
// LOAD database API

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://ckun439:vinglim1@cluster0.p1ax2.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db("WearableData").collection("Listings");
}

module.exports = router;
