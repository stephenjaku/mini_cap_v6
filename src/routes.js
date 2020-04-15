const express = require('express');
const router = express.Router();

router.get('/patient-name', (req, res) => {
  res.render('patient-name', {
    data: {},
    errors: {}
  });
});

router.post('/patient-name', (req, res) => {
  res.render('patient-name', {
    /*replaced message, email with first_name, last_name*/
    data: req.body, // { first_name, last_name }
    errors: {
      first_name: {
        msg: 'First name invalid, please enter again'
      },
      last_name: {
        msg: 'Last name invalid, please enter again'
      }
    }
  });
});

module.exports = router;
