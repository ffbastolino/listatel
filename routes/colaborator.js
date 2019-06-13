const express = require('express');
const logger = require('../config/logger');
const axios = require('axios');
const router = express.Router();


const db = [{
  "id":2,
  "nome": "Guilherme Benjamin Carlos Eduardo Almada",
  "email": "guilhermebenjamin@editorazap.com.br",
  },
  {
    "id":2,
  "nome": "Sônia Márcia Cavalcanti",
  "email": "ssoniamarciacavalcanti@icloud.com",
  },
  {
    "id":3,
  "nome": "Henrique Benedito João da Silva",
  "email": "hhenriquebenedito@decorsul.com",
 },
 ];


const {
  findAll, create, findOne, deleteOne, updateOne,
} = require('../services/colaboradorService');

/*  router.get('/', (req, res) => {
  findAll().then((colaborator) => {
    res.send(colaborator);
  }).catch((e) => {
    logger.error('colaborator-routes: ', e);
    res.sendStatus(500);
  });
}); */ 

/*    router.get('/', (req, res) => {
  res.send(db);
}); */

  router.get('/', (req, res) => {
  if (!db) {
    res.sendStatus(404);
  } else {
    res.send( db.find(e => e.nome.includes(req.query.nome)) || {error: 'nome não existe'});
    // db.map(e => e.nome)
  }
}); 

/* router.get('/', (req,res)=>{
  if(!db){
    res.sendStatus(404);
  }
  else{
    res.send(req.query.name)
  }
}); */

/* router.get('/:nome', (req, res) => {
  findOne(req.params.nome).then((colaborator) => {
    if (!colaborator) {
      res.sendStatus(404);
    } else {
      res.send(colaborator);
    }
  }).catch((e) => {
    logger.error('colaborator-routes: ', e);
    res.status(500).send({
      error: e.message,
    });
  });
}); */

/* router.delete('/:id', (req, res) => {
  deleteOne(req.params.id).then(() => {
    res.sendStatus(200);
  }).catch((e) => {
    logger.error('colaborator-routes: ', e);
    res.sendStatus(500);
  });
}); */

/* router.post('/', (req, res) => {
  create(req.body).then((colaborator) => {
    res.send(colaborator);
  }).catch((e) => {
    logger.error('colaborator-routes: ', e.message);
    res.status(500).send({
      error: e.message,
    });
  });
}); */


/* router.post('/',(req,res) =>{
  then((colaborator) =>{
   res.send(colaborator)
   db.push(colaborator)
  }).catch((e) => {
    logger.error('colaborator-routes: ', e.message);
    res.status(500).send({
      error: e.message,
    });
  });
}) */

router.post('/',(req,res) =>{
    let colaborador = req.body;
    db.push(colaborador);
    res.sendStatus(200);
});
/* router.post('/', (req, res) => {
  if (!db) {
    res.sendStatus(404);
  } else {
    res.send( db.find(e => e.nome.includes(req.query.nome)) || {error: 'nome não existe'});
    // db.map(e => e.nome)
  }
}) */; 

router.put('/:id', (req, res) => {
  updateOne(req.params.id, req.body).then(() => {
    res.sendStatus(200);
  }).catch((e) => {
    logger.error('colaborator-routes: ', e.message);
    res.status(500).send({
      error: e.message,
    });
  });
});


module.exports = router;