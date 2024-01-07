const userData = require('../model/user.model')
const categoriesDetails = require('../model/user_details.model')

class usersData{


    async hashPassword(password) {
        return new Promise((resolve, reject) => {
        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
            reject(err);
            } else {
            resolve(hash);
            }
        });
        });
    }

    async AddUserDetails(params) {
        try {
          // Hash the password using async/await
          const hashedPassword = await this.hashPassword(params.password);
      
          // Update the params object with the hashed password
          params.password = hashedPassword;
      
          console.log("params", params);
      
          const data = {
            "id": params.id,
            "name": params.name,
            "email": params.email,
            "phone": params.phone,
            "role_id": params.role_id,
            "password": params.password,
            "remember_token": params.remember_token
          };
          const UserData = new UserTable(data);
      
          // Save the user data to the database using async/await
          const savedUserData = await userData.save();
      
          console.log('User object with hashed password:', savedUserData);
      
          return savedUserData;
        } catch (error) {
          console.error('Error:', error);
          throw error; // Rethrow the error or handle it accordingly
        }
      }
    

      AllCategories(params) {
        return categoriesDetails.forge().query((qb) => {
            // qb.where({ "id": params.userId })
        }).fetchAll().then((data) => {
            console.log(data);
            return data

        }).catch((err) => {
            return err
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