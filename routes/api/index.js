const router=require('express').Router();
const userRoutes=require('./user-routes');
const thoughtRoutes=require('./thoughts-routes');

router.use('/user', userRoutes);
router.use('/thoughts',thoughtRoutes);

module.exports=router;