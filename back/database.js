const {Pool} = require("pg");
const connectionString = "postgres://mynpmpolymcoce:6d5f46b912d1d43d1c742288f7b7e9356ef8de9751509bf321225bc325adb883@ec2-63-33-239-176.eu-west-1.compute.amazonaws.com:5432/dco89gt5kehkng"
const pool = new Pool({
    connectionString,
    ssl:{
        rejectUnauthorized: false
    }
});

pool.connect();

module.exports = pool;