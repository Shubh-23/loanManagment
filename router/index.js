const express = require("express")
const router = express.Router()
const userData = require('../controller/user.controller')
const emiDetails = require('../controller/Emi.controller')










// route.post('/user/AddUserDetails',UserController.AddUserDetails)      //done

// // {  userId:"" }
// route.get('/getAllCategories',UserController.getUserDetails)   //done







//registration
router.post('/user/AddUserDetails',userData.AddUserDetails)             //Done

//login
router.get('/getAllCategories',userData.AllCategories)  
                         //Done
// router.post('/getAllCategories',userData.login)                           //Done

//submit All details of user
router.post('/user/SubmitAllDetails',userData.SubmitAllDetails)     //Done


router.post('/user/getLoanDetails',emiDetails.getLoanDetails)        //Done

router.post('/user/loanDetails',emiDetails.loanDetails)             //Done

router.post('/user/TypeOfLoan',emiDetails.TypeOfLoan)               //Done

//loan calculation
router.post('/user/EmiDetails',emiDetails.EmiDetails)               //Done

//get EMI Details
router.get('/user/GetAllDetailsEmi/:id',emiDetails.GetAllDetailsEmi)

//get list of type of loan
router.get('/user/InterestList',emiDetails.InterestList)            //Done

router.get('/user/InterestListId/:id',emiDetails.InterestListId)
 


module.exports = router