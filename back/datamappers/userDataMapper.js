const pool = require("../database");

const userDataMapper = {

    // finding all datas from all users.
    getAllUsers: async() => {
        try {
            const query = "SELECT id, nickname, fistname, lastname, email, password, gender FROM \"user\";";
            return await pool.query(query);
        } catch (error) {
            
        }
    },

    //inserting a new user in DB. 
    insertUser: async(nickname, firstname, lastname, email, password, gender) => {
        
        const query = {
            text: "INSERT INTO \"user\" (nickname, firstname, lastname, email, password, gender) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, nickname, firstname, lastname, email, password, gender;",
            values: [nickname, firstname, lastname, email, password, gender]
            
        };
        try {
            return await pool.query(query);
           
        } catch(err) {
            console.error(error)
        }
    }
};

module.exports = userDataMapper;