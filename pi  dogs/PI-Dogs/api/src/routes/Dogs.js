const {Router, query} = require ('express');
const {getAllDogsAndName, getById, createNewRace} = require ('../controllers/DogsControl')


const router = Router ();

//GET
//router.get ('/',getAllDogsAndName//todos por query
router.get("/:id", async (req, res) => {
    const { id } = req.params
    try {
        let dogs = await getById(id)
        if(dogs?.name) {
            res.status(200).json(dogs)
        } else {
            res.status(404).json({"error": "No se encontro un dog con ese id"})
        }
    } catch {
        res.status(500).json({"error": "Fallo de conexion con la api"})
    }
})
//POST
router.post ('/create', createNewRace)

module.exports = router;