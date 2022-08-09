const { Router } = require('express');
const { Op } = require('sequelize')
const { Activity, Country } = require('../db')

const router = Router();

router.get('/countries', async (req, res) => {
  const name = req.query.name;
  const countries = await Country.findAll({ include: {model: Activity} })
  try {
    if(name) {
      let countriesName = await countries.filter( c => c.name.toLowerCase().includes(name.toLocaleLowerCase()) )
      countriesName.length ? 
      res.status(200).json(countriesName) :
      res.status(404).json({ msg: 'No hay coincidencias' })
    }
    else{
      res.status(200).json(countries)
    } 
  } catch (error) {
    console.log(error)
  }
})

router.get('/countries/:id', async (req, res) => {
  const { id } = req.params;
  if(!id) res.send({ msg: 'Missing ID' })
  try {
    const pais = await Country.findByPk(id, {include: {model: Activity}});
    res.send(pais);
  } catch (error) {
    console.log(error)
  }
})

router.get('/activitiesInfo', async (req, res) => {
  const db = await Activity.findAll()
  res.json(db)
})


router.post('/activities', async (req, res) => {
  const { name, difficulty, duration, season, idCountry } = req.body;
  try {
    const newActivity = await Activity.create({ name, difficulty, duration, season, idCountry });
    newActivity.addCountry(idCountry);
    res.json(newActivity)
  } catch (error) {
      console.log(error);
  }
})

module.exports = router;

