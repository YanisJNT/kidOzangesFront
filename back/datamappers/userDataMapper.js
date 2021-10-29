const pool = require("../database");

const userDataMapper = {

    // finding all datas from all users.
    getAllUsers: async() => {
        try {
            const query = "SELECT id, nickname, firstname, lastname, email, password, gender FROM \"user\";";
            return await pool.query(query);
        } catch (error) {
<<<<<<< HEAD
            console.log(error);
=======
            throw new Error(error)
        }
    },

    getUserByEmail: async(email) => {
        try {
            const query = {
                text: "SELECT id, nickname, firstname, lastname, email, password, gender FROM \"user\" WHERE email=$1;",
                values: [email]
            }
            return pool.query(query)
        } catch (error) {
            throw new Error(error)
>>>>>>> c6d5e35494ca026cd81e79751f280c3dd4d08027
        }
    },


    //TODO créer une recherche par l'email pour le login
    getUserByEmail: async(email) => {
         const query = {
             text: "SELECT id, nickname, firstname, lastname, email, password, gender FROM \"user\" WHERE email=$1;",
             values: [email]
         };
        try{

        return await pool.query(query);
        }catch(error){
            console.log(error);
        }
    }, 


    //insert a new user in DB. 
    insertUser: async(nickname, firstname, lastname, email, password, gender) => {
        
        const query = {
            text: "INSERT INTO \"user\" (nickname, firstname, lastname, email, password, gender) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, nickname, firstname, lastname, email, password, gender;",
            values: [nickname, firstname, lastname, email, password, gender]
            
        };
        try {
            return await pool.query(query);
           
        } catch(error) {
            console.error(error)
        }
    },

    //show user profile
    showUserProfile: async(userId)=>{
        const query = {
            text: "SELECT id, nickname, firstname, lastname, email, gender FROM \"user\" WHERE id=$1;",
            values: [userId]
        };
             try {
                 return await pool.query(query);

             } catch (error) {
                 console.error(error)
             }
    },

    //modify an existing user. 
    
    //delete an existing user.
    deleteUser: async(id) => {
        const query = {
            text: "DELETE * FROM \"user\" WHERE id=$1",
            values:[id]
        }
        try{
            return await pool.query(query)
        }catch(error) {
            console.error(error)
        }
    }
};

module.exports = userDataMapper;