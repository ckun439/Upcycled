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

// UPDATE API ((FIX THIS))
router.put("/:id", async (req, res) => {
    const posts = await loadPostCollection();
    let title= req.body.title;
    let size= req.body.size; 
    let description= req.body.description;
    let price= req.body.price;
    await posts.updateOne({_id: new mongodb.ObjectId(req.params._id)});
    res.status(201).send();
});

// LOAD database API

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://ckun439:vinglim1@cluster0.p1ax2.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db("WearableData").collection("Listings");
}

module.exports = router;
