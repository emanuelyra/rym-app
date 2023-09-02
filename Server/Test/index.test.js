const app = require("../src/server");
const session = require("supertest");
const agent = session(app);

describe("Test de Rutas", () => {
  describe("Voy a testear GET BY ID", () => {
    it("responde con status 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });

    //! Asi no
    it("responde con status 500 si fallo", async () => {
      try {
        await agent.get("/rickandmorty/character/a").expect(200);
      } catch (error) {
        console.log("Error");
        //   throw Error(error)
      }
    });

    it("responde con status 200 a promesas", () => {
      return agent
        .get("/rickandmorty/character/1")
        .expect(200)
        .then((response) => {
          // console.log(response)
          expect(response.status).toBe(200);
        });
    });

    it("responde con status 500 si fallo", () => {
      return agent
        .get("/rickandmorty/character/a")
        .expect(500)
        .then((response) => {
          // console.log(response)
          expect(response.status).toBe(500);
        });
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const { body } = await agent.get("/rickandmorty/character/1");
      //console.log(body)
      expect(body).toHaveProperty(
        'id'&&
        'name'&&
        'species'
        // "age"
      );
    });
  });


describe("GET /rickandmorty/login", () => {
//{email: 'na@mail.com', password: 'hola1234'}

    it("credenciales correctas", async () => {
// const response = await agent.get("/rickandmorty/login?email=na@mail.com&password=hola1234")
const response = await agent
      .get("/rickandmorty/login")
      .query({ email: "na@mail.com", password: "hola1234" });

// console.log(body)

expect(response.body).toEqual({access: true})
expect(response.body.access).toBe(true)
// ! ojo con este : expect(body.access).toBeTruthy()

    })

})

describe("POST /rickandmorty/fav", () => {
const character1 = {id:1, name: "Rick"}
const character2 = {id:2, name: "Morty"}

it("Genera un nuevo favorito", async () => {

    const response = await agent.post("/rickandmorty/fav").send(character1)

    expect(response.body).toBeInstanceOf(Array)
    expect(response.body).toContainEqual(character1)
})

it("Devuelve todos los favoritos", async () => {
    const response = await agent.post("/rickandmorty/fav").send(character2)
    expect(response.body).toContainEqual(character1)
    expect(response.body).toContainEqual(character2)
})

})

describe("DELETE", () => {
    const character1 = {id:1, name: "Rick"}
    const character2 = {id:2, name: "Morty"}

    beforeEach(async () => {
        await agent.post("/rickandmorty/fav").send(character1)
        await agent.post("/rickandmorty/fav").send(character2)
    })

    it("que devuelva todo el arreglo sin modificar si el id es invalido", async () => {
        const {body} = await agent.delete("/rickandmorty/fav/5")
        expect(body).toContainEqual(character1)
        expect(body).toContainEqual(character2)
    })

    it("que devuelva el array sin el personaje eliminado", async () => {
        const {body} = await agent.delete("/rickandmorty/fav/1")
        expect(body).not.toContainEqual(character1)
        expect(body).toContainEqual(character2)
    })
})

});

/*


it -->  unitarios
describe --> agrupan test unitarios segun tematica

describe("Descripcion del grupo de it", () => {
    it
    it
    it
})

it("Decripcion de este test", () => {
    expect(que es lo que espero).toBe(sea esto)
})

it("Test ruta get", async () => {
    await agent.get(...)
    expect(response.status).toBe(200)
})

*/
