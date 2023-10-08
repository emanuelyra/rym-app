const axios = require('axios');
const { Temperament } = require('../db');

const getAllTemperaments = async (req, res, next) => {
  try {
    const pedidoApiAll = await axios('https://api.thedogapi.com/v1/breeds');
    const dataApiAll = await pedidoApiAll.data;

    let infoApiTemp = dataApiAll?.map((el) => {
      if (!el.temperament) return undefined;

      // A todos los demás los spliteo por ", " para añadirlos a un array en la constante aux
      const aux = el.temperament.split(', ');
      return aux;
    });

    const ordenSinUnd = infoApiTemp.flat().filter(Boolean).sort();
    const stringUnicos = [...new Set(ordenSinUnd)];

    // Cambiado de map a forEach para evitar la creación de un nuevo array
    stringUnicos.forEach(async (dog) => {
      // Usar findOrCreate y await para esperar a que se resuelva la promesa
      await Temperament.findOrCreate({
        where: { name: dog },
      });
    });

    // Usar findAll fuera del bucle forEach para obtener todos los temperamentos después de la creación
    const busquedaDb = await Temperament.findAll();

    res.send(busquedaDb);
  } catch (error) {
    console.error('Error en getAllTemperaments:', error);
    res.status(500).send('Error interno del servidor');
  }
};

module.exports = {
  getAllTemperaments,
};

// const axios = require ('axios');
// const {Temperament} = require ('../db')



// const getAllTemperaments = async (req, res, netx) => {
//   try {
//     const pedidoApiAll = await axios (`https://api.thedogapi.com/v1/breeds`);
//     const dataApiAll = await pedidoApiAll.data;

//     let infoApiTemp = dataApiAll?.map (el => {
//             if(!el.temperament) return el.temperament = undefined;
//         // A todos los demas los spliteo por ", " para añadirlos a un array en la constante aux
//             const aux = el.temperament.split(", "); 
//             return aux;
//         });
//     const ordenSinUnd = infoApiTemp.flat().filter(Boolean).sort();
//     const stringUnicos = [...new Set(ordenSinUnd)];    
    

//     stringUnicos.map(dog => Temperament.findOrCreate ({
//         where : {name: dog}
//     }));

//     const busquedaDb = await Temperament.findAll();

//     res.send (busquedaDb);    
       
//   } catch (error) {
//       console.log ('no funciona getAllTemperaments')
//   }
    
// };



// module.exports =  {
//     getAllTemperaments
// }