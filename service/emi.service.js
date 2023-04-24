
const emiDetails = require('../model/Emi_details')
const loanDetails = require('../model/loan_details')
const loanType = require('../model/loan_interest')
const listOfLoan = require('../model/loan_interest')
const Promise = require('bluebird')

class EmiDetails{

    loanDetails(params,month){
        const data = {
            'user_id':params.userId,
            'loan_amount':params.loanAmount,
            'Total_amount':params.TotalAmount,
            'loan_type':params.loanType,
            'months':month,
            'loan_emi':params.loanEmi,
            'ROI': params.ROI,
        }
        var loanDetail = new loanDetails(data);
        return loanDetail.save(null).tap(function(model){
            const loanId = JSON.stringify(model.id)
            
            var date;
            for(let i = 1; i<=month; i++){
                var d = new Date()
                d.setMonth(d.getMonth() + i)
            if(d.getMonth() === 0){
                 date = `${5}/${d.getMonth() + 12}/${d.getFullYear() -1}  ` 
                
            }else{
                 date = `${5}/${d.getMonth()}/${d.getFullYear()}  `
                }
                const data = {
                    'loan_id':loanId,
                    'SIP':(params.loanEmi),
                    'Pay_date':date,
                }
                    var EmiDetails = new emiDetails(data);
                    EmiDetails.save(null).tap(function(model){
                    }).catch(function(err){
                        console.log("err--",err);
                        err;
                    })
                }
                return model;
            }).catch(function(err){
                console.log("err--",err);
                return err;
        })
    }
                
    getLoanDetails(params){
        return loanDetails.forge().query(function(qb){
            qb.where({'user_id':params.id})
        }).fetchAll().then(function(data){
            return data
        }).catch((error)=>{
            console.log("error",error)
            return error;
        })
    }

    
    // EmiDetails(params,year){
    //     var date;
    //     for(let i = 1; i<=year; i++){
    //         var d = new Date()
    //         d.setMonth(d.getMonth() + i)
    //         if(d.getMonth() === 0){
    //              date = `${5}/${d.getMonth() + 12}/${d.getFullYear() -1}  ` 
                
    //         }else{
    //              date = `${5}/${d.getMonth()}/${d.getFullYear()}  `
                
    //         }
    //         const data = {
    //             'user_id':params.userId,
    //             'sention_amount':params.amount,
    //             'SIP':(params.EMIAmount),
    //             'Total_amount':params.TotalAmount,
    //             'loan_categorie':params.loanCategire,
    //             'ROI':params.rate,
    //             'Pay_date':date,
        
    //         }//console.log("hjkhjk",data)
    //             var EmiDetails = new emiDetails(data);
    //             EmiDetails.save(null).tap(function(model){
                    
    //             }).catch(function(err){
    //                 console.log("err--",err);
    //                     err;
    //             })
    //     }
    // }


    TypeOfLoan(params){
        return loanType.forge().query(function(qb){
            qb.where({'loan_type':params.loanType})
        }).fetch().then(function(data){
            return data
        }).catch((error)=>{
            console.log("error",error)
            return error;
        })
    }

    //
    GetAllDetailsEmi(params){
        var data1
        return loanDetails.where({user_id:params}).fetchAll({withRelated:['emiDetails']}).then((Customer)=>{
            const data = Customer.models
            data.forEach((Element)=>{
                //console.log(Element.relations)
                data1 = JSON.parse(JSON.stringify(Element))
            })
            return data1
        })
        
    }

    InterestList(){
        return listOfLoan.forge().query(function(qb){
            qb.select('*')
        }).fetchAll().then(function(data){
            return data
        }).catch((error)=>{
            console.log("error",error)
            return error;
        })

    }

    InterestListId(id){
        console.log(id)
        return listOfLoan.forge().query(function(qb){
            qb.where({'id':id})
        }).fetch().then(function(data){
            return data
        }).catch((error)=>{
            console.log("error",error)
            return error;
        })
    }
        
}

module.exports = new EmiDetails