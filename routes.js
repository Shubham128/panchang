var path 		= require('path');
var express 	= require('express');
var router 		= express.Router();

var login 	            = require('./controllers/admin/login');
var admindashboard 	    = require('./controllers/admin/dashboard');
var master 	            = require('./controllers/admin/master');
var clfloan 	        = require('./controllers/admin/clfloanprovider');

//admin get method
router.get('/', login.login);
router.get('/login', login.login);
router.get('/logout',login.logout);
router.get('/dashboard',admindashboard.dashboard);

router.post('/loginaction',login.loginaction);


// Block Section 
router.post('/addBlocksSrv',master.AddBlocksSrv);
router.post('/updateBlockData',master.UpdateBlockData);
router.get('/blocklist',master.Blocklist);
router.get('/DraftPanchang',master.DraftPanchang);
router.get('/Panchang',master.ClfListData);
router.get('/editBlockdata',master.EditBlockdata);
router.get('/deleteBlockData',master.DeleteBlockData);
router.get('/viewblockwiseclf',master.Viewblockwiseclf);



/////////
module.exports = router;