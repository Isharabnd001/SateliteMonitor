var express = require('express');
var router = express.Router();


import {

  LocationController,ConsController

} from '../controllers';


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

if(ConsController) {

  router.post('/cons',  ConsController.addCons);
  router.get('/cons',  ConsController.getCons);

}

if(LocationController) {

  router.post('/locations',  LocationController.recordLocation);
  router.get('/locations',  LocationController.monitorLocations);  
}



module.exports = router;


