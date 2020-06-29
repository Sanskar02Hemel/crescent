const express = require("express");
      router = express.Router();

const bagsController = require('../controllers/bag');
const zippersController = require('../controllers/zipper');
const poufsController = require('../controllers/pouf');
const hangingsController = require('../controllers/hanging');
const storagesController = require('../controllers/storage');

router.get('/bags', bagsController.getBags);

router.get('/zippers', zippersController.getZippers);

router.get('/poufs', poufsController.getPoufs);

router.get('/hangings', hangingsController.getHangings);

router.get('/storages', storagesController.getStorages);


module.exports = router;