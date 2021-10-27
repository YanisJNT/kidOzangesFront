const pool = require("../database");

const userDataMapper = {
    getAllUsers: async() => {
        try {
            const query = "SELECT id, nickname, fistname, lastname, email, password, gender FROM \"user\";";
            return await pool.query(query);
        } catch (error) {
            
        }
    },
    insertUser: async(nickname, firstname, lastname, email, password, gender) => {
        try {
            
            console.log("Jarrive dans le datamapper")
            const query = {
                text: "INSERT INTO \"user\" (nickname, firstname, lastname, email, password, gender) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;",
                values: [nickname, firstname, lastname, email, password, gender]
                
            }
            console.log("Je renvoie la requete")
            return await pool.query(query.text, query.values);
        } catch(err) {
            throw new Error({error: err})
        }
    }
};

module.exports = userDataMapper;