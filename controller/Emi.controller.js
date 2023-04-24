const EmiDetailService = require('../service/emi.service')
const Promise = require('bluebird')

class EmiDetails{

    loanDetails(req,res){
        const params = req.body
        const month = (req.body.year) * 12

        return EmiDetailService.loanDetails(params,month).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }

    getLoanDetails(req,res){
        const params = req.body
        return EmiDetailService.getLoanDetails(params).then((data)=>{
            if((data)){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }

    EmiDetails(req,res){
        const params = req.body
        const year = (req.body.year) * 12
        
        return Promise.resolve(EmiDetailService.EmiDetails(params,year)).then((data)=>{
            const data1 = "data1"
            if((data1)){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data1})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }
        
    TypeOfLoan(req,res){
        const params = req.body
        return EmiDetailService.TypeOfLoan(params).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }

    GetAllDetailsEmi(req,res){
        const params = req.params.id
        console.log(params)
        return EmiDetailService.GetAllDetailsEmi(params).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }

    InterestList(req,res){
        
        return EmiDetailService.InterestList().then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }

    InterestListId(req,res){
        const params = req.params.id
        console.log("params",params)

        return EmiDetailService.InterestListId(params).then((data)=>{
            if((data) != null){
                return res.json({"ErrorCode":200,"message":"Your successfully working","Data":data})
            }else{
                return res.json({"ErrorCode":500,"message":"something went's wroung","Data":{}})
            }
        })
    }

}

module.exports = new EmiDetails

