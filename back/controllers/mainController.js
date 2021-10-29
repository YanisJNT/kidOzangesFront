const path = require("path")

const mainController = {
    getReactApp: (_,res) => {
        
        res.sendFile((path.resolve(__dirname, "../../front/build", "index.html")))
    }

}
console.log(__dirname)
module.exports = mainController;