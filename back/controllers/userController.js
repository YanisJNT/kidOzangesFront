const activityDataMapper = require("../datamappers/activityDataMapper");
const userDataMapper = require("../datamappers/userDataMapper");
const adminDataMapper = require("../datamappers/adminDataMapper");
const {hashSync,compare} = require("bcrypt"); // module for crypted password
const { validate } = require('email-validator'); 
const schema = require("../schemas/passwordSchema");// password validator module require

const userController = {
    signup: async (req, res)=>{
        try {
            console.log("je rentre dans le controller")
            console.log(req.body)
            const errors = [];
            const {nickname, firstname, lastname, email, password, passwordConfirm, gender} = req.body;
            // const result  = await userDataMapper.getUsers();
            // const users = result.rows;
            // const userFound = users.find(user => user.email === email.toLowerCase());
            
            const validatePassword = schema.validate(password);
            // we push errors if user write invalid informations
            // verifying if password contains 1 uppercase letter, 1 lowercase letter, 1 digit, no spaces and greater than 8 characters
            if(!validatePassword) errors.push("Le mot de passe doit contenir 8 caractères minimum, 1 majuscule, 1 minuscule, 1 chiffre");
            // We compare the 2 passwords, if differents we push an error
            if(password !== passwordConfirm) errors.push("Les deux mots de passe ne sont pas identiques.");
            // all the fields are required
            if(!nickname || !firstname || !lastname || !email || !password || !passwordConfirm || !gender) errors.push("Veuillez renseigner tous les champs.");
            // verifying if email is in good format
            if(!validate(email)) errors.push("L'adresse mail renseignée n'est pas correcte.");
            // if(userFound) errors.push("L'adresse mail est déjà utilisée.");

            // if the errors array isn't empty we push all errors
            if(errors.length > 0) {
                
                return res.status(500).json({errors});
            } 
            // inserting the user in database with an encrypted password
            const newUser = await userDataMapper.insertUser(nickname, firstname, lastname, email.toLowerCase(), hashSync(password, 8), gender);
            // we send newUser's informations
            res.status(200).json({user: newUser.rows[0]})
        } catch (error) {
            console.log(error)
            res.status(500).json({error})
        }  
    },

    login: async (req, res)=>{
        try{
            const result  = await userDataMapper.getUserByEmail(req.body.email.toLowerCase());
            
            const user = result.rows[0];
            // if there's no match user in database we return an error  
            if(!user){
                return res.status(400).json({error: 'Utilisateur inconnu'})
            }
            // Users in data base have crypted passwords so we have ton compare them to be sure that the crypted password correspond to the user password in the login form
            const checkingPassword = await compare(req.body.password, user.password)
            // if compared password's good, we send user infos to the front application
            if(checkingPassword){
                res.json({user});
            }else{
                res.json({error: 'Mot de passe invalide.'})
            }
        }catch(error){
            res.status(500).json({error});
        }
    }
};

module.exports = userController;