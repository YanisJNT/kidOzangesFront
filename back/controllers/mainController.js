const mainController = {
    getReactApp: (_,res) => {
        res.sendFile("../../front/public/index.html")
    }

}

module.exports = mainController;