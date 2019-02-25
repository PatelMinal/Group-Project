const express = require('express');

const router = express.Router();

//get list of names from data base
router.get('/potter', (req, res) => res.send({ type: 'GET' }));

router.post('/potter', function (req, res) {
    console.log(req.body);
     res.send({ 
         type: 'POST',
         name: req.body.name 
        });
});
module.exports = router;
