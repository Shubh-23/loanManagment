const userData = require('../model/user.model')
const userDetails = require('../model/user_details.model')

class usersData{
    registration(params){
        const data = {
            'name':params.name,
            'email':params.email,
            'password':params.password
        }
        var user = new userData(data);
        return user.save(null).tap(function(model){
            return model;
        }).catch(function(err){
            console.log("err--",err);
            return err;
        })
    }
    

    login(params){
     
        return userData.forge().query(function(qb){
            qb.where({'email':params.email})
            qb.andWhere({'password':params.password})
        }).fetch().then(function(data){
            return data
        }).catch((error)=>{
            return 
        })
    }
   
    SubmitAllDetails(params,userId){
        const data = {
            'user_id':userId,
            'occupation':params.occupation,
            'income':params.Income,
            'pan':params.pan,
            'adharcard':params.AdharCard,
            'address':params.address
        }
        var userDetail = new userDetails(data);
        return userDetail.save(null).tap(function(model){
            return model;
        }).catch(function(err){
            console.log("err--",err);
            return err;
        })
    }
    
    
}

module.exports = new usersData