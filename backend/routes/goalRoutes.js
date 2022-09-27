const express=require('express')
const router=express.Router();
const {getGoals,updateGoals,deleteGoals,postGoals}=require('../controllers/goalControllers.js')

router.route('/').get(getGoals).post(postGoals)
router.route('/:id').delete(deleteGoals).patch(updateGoals)

module.exports=router