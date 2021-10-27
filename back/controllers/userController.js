const activityDataMapper = require("../datamappers/activityDataMapper");
const userDataMapper = require("../datamappers/userDataMapper");
const adminDataMapper = require("../datamappers/adminDataMapper");
const {hashSync, compare} = require("bcrypt");
const { validate } = require('email-validator');

const userController = {
    signin: async (req, res)=>{
        try {
            console.log("Je passe par le controller")
            const errors = [];
            const {nickname, firstname, lastname, email, password, passwordConfirm, gender} = req.body;
            // const result  = await userDataMapper.getUsers();
            // const users = result.rows;
            // const userFound = users.find(user => user.email === email.toLowerCase());
            console.log(req.body)
            if(password !== passwordConfirm) errors.push("Les deux mots de passe ne sont pas identiques.");
            if(!nickname || !firstname || !lastname || !email || !password || !passwordConfirm || !gender) errors.push("Veuillez renseigner tous les champs.");
            if(!validate(email)) errors.push("L'adresse mail renseignée n'est pas correcte.");
            // if(userFound) errors.push("L'adresse mail est déjà utilisée.");
            delete passwordConfirm;
            console.log("Jarrive a la requete")
            if(errors.length > 0) {
                return res.status(500).json({errors});
            }
            const newUser = await userDataMapper.insertUser(nickname, firstname, lastname, email.toLowerCase(), hashSync(password, 8), gender);
            console.log(newUser)
            console.log("L'utilisateur a bien ete ajouté en base") 
        } catch (error) {
            res.status(500)
        }  
    },
/* 
    login: async (req, res)=>{
        
    } */


};

module.exports = userController;