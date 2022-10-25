const router= require('express').Router();
//import modular routers
const apiRouter= require('./apiRoutes');
const htmlRouter = require('./htmlRoutes');

//import diagnostic route
const app = express();

router.use('/api', apiRouter);
router.use('/html', htmlRouter);

//initialize
module.exports=router;