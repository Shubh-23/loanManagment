const express = require("express")
const router = express.Router()
const userData = require('../controller/user.controller')
const emiDetails = require('../controller/Emi.controller')

//registration
router.post('/user/registration',userData.registration)             //Done

//login
router.post('/user/login',userData.login)                           //Done

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