const Clothing = require('../models/clothing')

const createClothing = async (req, res) => {
  try {
    const clothing = await new Clothing(req.body)
    await clothing.save()
    return res.status(201).json({
      clothing
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllClothing = async (req, res) => {
  try {
    const clothing = await Clothing.find()
    return res.status(200).json({ clothing })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getClothingById = async (req, res) => {
  try {
    const { id } = req.params
    const clothing = await Clothing.findById(id)
    if (clothing) {
      return res.status(200).json({ clothing })
    }
    return res
      .status(404)
      .send('Clothing with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateClothing = async (req, res) => {
  try {
    const clothing = await Clothing.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(clothing)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteClothing = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Clothing.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Clothing item deleted')
    }
    throw new Error('Clothing item not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createClothing,
  getAllClothing,
  getClothingById,
  updateClothing,
  deleteClothing
}
