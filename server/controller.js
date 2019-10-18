module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db')
        db.get_all().then(houses => {
            res.status(200).send(houses)
        })
        .catch(err => console.log(err, 'you messed up the get all server endpoint'))
    },
    
    addNew: (req, res) => {
        const{name, address, city, state, zipcode} = req.body
        const db = req.app.get('db')
        db.add_new(name, address, city, state, zipcode)
        .then(res.sendStatus(200))
        .catch(err => console.log(err))
    },
    
    deleteOne: (req, res) => {
        const {id} = req.params
        const db = req.app.get('db')
        db.delete_one(id)
        .then(res.sendStatus(200))

    }
}