const fastify = require('fastify')({
    logger: true
})



// bring in routes here :
const routes = require('./routes');



// db:
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost//fastify')
    .then(() => console.log("MONGO is ready!!"))
    .catch(error => console.log(error))

// routes:
fastify.get('/', async (request, reply) => {
    return { visitor: "Hello devs!! try fastify , this is faster than express" }
})


routes.forEach((route, index) => {
    fastify.route(route)
})


const address = 8000;
// starting server
const start = async () => {
    try {
        fastify.listen({ port: 8000 })
        fastify.log.info(`Server is running at http://localhost:${address}`)
    } catch (error) {
        fastify.log.error("Error occured", error)
    }
}


start();
