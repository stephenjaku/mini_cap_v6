const express = require('express');
const router = express.Router();

router.get('/patient-name', (req, res) => {
  res.render('patient-name');
});

module.exports = router;
