const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET 
router.get('/', async (req, res) => {
    const post = await loadPostCollection();
    const preResult = (await post.find({}));
    const result = await preResult.toArray();
    res.send(result);
});

// ADD 

// DELETE

// UPDATE

// LOAD database

async function loadPostCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://ckun439:vinglim1@cluster0.p1ax2.mongodb.net/?retryWrites=true&w=majority', {
        useNewUrlParser: true
    });
    return client.db("WearableData").collection("Listings");
}

module.exports = router;