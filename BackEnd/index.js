const express = require('express')
const server = express();

server.get('/curso/:id', (req,res) => {
    const nome = req.query.nome || 'Desconhecido'

    return res.json({Curso: `Aprendendo ${nome}`})
})

server.listen(3000)