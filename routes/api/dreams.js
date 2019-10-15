//Routes are here

//bring in express router
const express = require('express');
//create router variable
const router = express.Router();
//bring in Dream model file
const Dream = require('../../models/Dream');
const auth = require('../../middleware/auth');

//get dreams:
router.get('/',(req, res) => {
    Dream.find()
    .sort({date: -1})
    .then(dreams => res.json(dreams))
})

//create a dream
router.post('/', auth, (req, res) => {
    const newDream = new Dream({
        name: req.body.name
    });
    newDream.save().then(dream => res.json(dream))
});

//delete a specific dream 
router.delete('/:id', auth, (req,res) => {
    Dream.findById(req.params.id)
    .then(dream => dream.remove().then(()=> res.json({success:true})))
    .catch(err => res.status(404).json({success:false}));
});

//edit a specific dream
router.put('/edit/:id', function updateDream(req, res) {
    Dream.findById(req.params.id, function updateDream(err, dream) {
        if (!dream)
            res.status(404).send('data is not found');
        else
            dream.name = req.body.name;
         
            dream.save().then(dream => {
                res.json(dream);
            })
            .catch(err => {
                res.status(400).send('Update not possible');
            });
    });
});


//export the module
module.exports = router;