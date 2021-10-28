const mainController = {
    getReactApp: (_,res) => {
        
        res.sendFile("/home/student/Bureau/html/formation/apotheose/projet-03-kid-oz-anges/front/public/index.html")
    }

}

module.exports = mainController;