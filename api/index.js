//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { Country } = require('./src/db');

//carga de datos a la db


const createDb = async () => {

  const api = await axios.get('https://restcountries.com/v3/all')
  const countriesInfo = api.data.map(c => {
    const info = {
      name: c.name.common,
      id: c.cca3,
      image: c.flags[0],
      continent: c.continents[0],
      capital: c.capital ? c.capital[0] : 'No have Capital',
      subregion: c.subregion ? c.subregion : 'No have Subregion',
      area: c.area,
      population: c.population,
    }
    Country.findOrCreate({where: info})
  })
}

createDb();

//buscar explicacion tecnica del conn.sync
conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});
