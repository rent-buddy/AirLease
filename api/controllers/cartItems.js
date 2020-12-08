const express = require('express');
const router = express.Router();
const db = require('../models');
const { CartItem, Item, User } = db;
const passport = require('../middlewares/authentication');

router.get('/', (req, res) => {
  CartItem.findAll({
    where: {
      userId: req.user.id,
    },
    include: [Item],
  }).then((cartItem) => {
    if (!cartItem) {
      return res.sendStatus(404);
    }

    res.json(cartItem);
  });
});

// router.post('/', passport.isAuthenticated(), (req, res) => {
router.post('/', (req, res) => {
  let itemId = req.body.itemId;
  let quantity = req.body.quantity;
  let userId = req.user.id;
  if (userId !== null) {
    CartItem.create({ userId, itemId, quantity })
      .then((cartItem) => {
        res.status(201).json(cartItem);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  }
});

// router.post('/', (req, res) => {
//   let { userId, itemId, quantity } = req.body;
//   CartItem.create({ userId, itemId, quantity })
//     .then((cartItem) => {
//       res.status(201).json(cartItem);
//     })
//     .catch((err) => {
//       res.status(400).json(err);
//     });
// });

router.put('/:id', (req, res) => {
  const { id } = req.params;
  CartItem.findByPk(id).then((cartItem) => {
    if (!cartItem) {
      return res.sendStatus(404);
    }

    cartItem.quantity = req.body.quantity;
    console.log(cartItem);
    cartItem
      .save()
      .then((item) => {
        res.json(item);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  CartItem.findByPk(id).then((cartItem) => {
    if (!cartItem) {
      return res.sendStatus(404);
    }

    cartItem.destroy();
    res.sendStatus(204);
  });
});

module.exports = router;
