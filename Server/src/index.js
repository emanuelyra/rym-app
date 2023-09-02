
const server = require('./server')
const PORT = 3001
const {conn, User} = require('./DB_connection')

// server.listen(PORT, () => {
//     console.log(`Servidor en puerto ${PORT}`)
// })

conn.sync({force: true})
.then(() => {
    server.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`)
})
})
// .then(async () => {
//     try {
//         const newUser = await User.create({
//             email: "na@mail.com",
//             password: "Hola1234"
//         })
//     } catch (error){
//         console.log(error)
//     }
// })
.catch(error => {
    console.log(error)
})

// server.listen(PORT, async () => {
//     try {
//         await conn.sync({force: true})
//         console.log(`Servidor en puerto ${PORT}`)
//     }
//     catch (error){
//         console.log("algo fallo")
//     }
// })


// ! HTTP
// const http = require('http')
// const PORT = 3001
// const getCharById = require('../Controllers/getCharById')

// http.createServer((req, res)=> {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;
//     console.log(`Recibi una request de: ${url}`)

//     if(url.includes("/rickandmorty/character")){
//         const id = Number(url.split("/").pop())
//         getCharById(res, id)
//     } else {
//         res.writeHead(404, {"Content-type": "application/json"} )
//          return res.end(JSON.stringify({error: "Route not found"}))
//     }
   
// }).listen(PORT, 'localhost', () => {
//     console.log(`Servidor corriendo en puerto: ${PORT}`)
// })



/*
​
SERVER
REQ - rickandmorty --- RES: [{}, {}]
REQ - rickandmorty/id -- RES: {}
​
CLIENT
detail: rickandmorty/5
​
​
HW de WebServer
​
if (url === "/"){
        res.writeHead(200, {"Content-type": "text/plain"})
        return res.end("Esta funcionando ok")
    } 
​
​
    // REQ.url --> www.localhost:3001/rickandmorty/character/5
   // split -> ['', "rickandmorty", "character", "5"]
   // pop -> "5"
   // Number -> 5
​
   //const id = url.split(":")[1];
​
    if (url.includes("/rickandmorty/character")){
        const id = Number(url.split("/").pop())
        const character = data.find(char => char.id === id)
        console.log(character)
​
        if (character){
            res.writeHead(200, {"Content-type": "application/json"} )
            return res.end(JSON.stringify(character))
        } else {
            res.writeHead(404, {"Content-type": "application/json"} )
            return res.end(JSON.stringify({error: "Character not found"}))
        }
    
    }
​
// if otra ruta
// if tal otra ruta
// ...
​
   
​
    res.writeHead(404, {"Content-type": "text/plain"})
    return res.end(`La direccion ${url} no existe`)
​
​
​
*/