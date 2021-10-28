const mainController = {
    getReactApp: (_,res) => {
        
        res.sendFile(__dirname + "../../front/public/index.html")
    }

}

module.exports = mainController;