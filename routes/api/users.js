var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

// GET /api/users => D'afficher tous les users
router.get('/', (req, res, next) => {
  mongoose.model('User').find({}, (err, items) => {
    if(err)
    {
      res.status(500);
      return res.json(err);
    }
      

    return res.json(items);
  });
});


// POST /api/users => Créer un user
router.post('/', (req, res, next) => {
  mongoose.model('User').create(req.body, (err, item) => {
    if(err)
    {
      res.status(500);
      return res.json(err);
    }

    res.json(item);
  });
});

//POST /api/users/<id> => Mettre à jour un user
router.post('/:id', (req, res,next) => {
  mongoose.model('User').findByIdAndUpdate(req.params.id, req.body, (err, item) => {
    if(err)
    {
      res.status(500);
      return res.json(err);
    }
    
    res.json(item);
  });
});

// DELETE /api/users/<id> => Supprimer un utilisateur
router.delete('/:id', (req, res, next) => {
  mongoose.model('User').findByIdAndRemove(req.params.id, (err, item) => {
    if(err)
    {
      res.status(500);
      return res.json(err);
    }
    
    res.json({ "status" : "removed" });
  });
});


module.exports = router;
