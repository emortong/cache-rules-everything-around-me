const express = require('express');
const sleep = require('../services/sleep');
const creamCache = require('../middleware/cache')
const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    return sleep(5000)
      .then(_ => res.render('api/index', (err, html) => {
        creamCache.cacheMiss(req.originalUrl, html)
        res.send(html);
      }));
  });

module.exports = router;
