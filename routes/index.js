const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/clothing', controllers.createClothing)

router.get('/clothing', controllers.getAllClothing)

router.get('/clothing/:id', controllers.getClothingById)
router.put('/clothing/:id', controllers.updateClothing)
router.delete('/clothing/:id', controllers.deleteClothing)

router.post('/clothing/:id/review', controllers.createReview)

router.delete('/review/:id', controllers.deleteReview)
module.exports = router
