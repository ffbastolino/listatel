const Colaborador = require('../model/colaborador');
const logger = require('../config/logger');


const findAll = () => new Promise((resolve, reject) => {
  Colaborador.findAll().then((colaborador) => {
    logger.debug('colaboradorService:findAll: ', colaborador);
    resolve(colaborador);
  }).catch((e) => {
    reject(e);
  });
});

const findOne = id => Colaborador.findOne({
  where: {
    id,
  },
}).then((colaborador) => {
  logger.debug('colaboradorService:findOne: ', Colaborador);
  return colaborador;
}).catch((e) => {
  logger.error('colaboradorService:findOne:error: ', e);
  throw e;
});

const deleteOne = id => Colaborador.destroy({
  where: {
    id,
  },
}).then((countRows) => {
  logger.debug('colaboradorService:deleteOne: ', countRows);
  return countRows > 0;
}).catch((e) => {
  logger.error('colaboradorService:deleteOne:error: ', e);
  throw e;
});

const validadeCreate = (colaboradorToInsert) => {
  const errors = [];
  if (!colaboradorToInsert.nome) {
    errors.push('colaborador.name.is.empty');
  }
  if (!colaboradorToInsert.email) {
    errors.push('colaborador.email.is.empty');
  }
  return errors;
};

const create = (colaboradorRequest = {}) => new Promise((resolve, reject) => {
  const colaboradorToInsert = {
    nome: colaboradorRequest.nome,
    email: colaboradorRequest.email,
  };
  const errors = validadeCreate(colaboradorToInsert);
  if (errors && errors.length) {
    return reject(new Error(errors.join(', ')));
  }
  Colaborador.create(colaboradorToInsert).then((newColaborador) => {
    resolve({ id: newColaborador.id });
  }).catch((e) => {
    reject(e);
  });
  return undefined;
});

const buildUpdateObject = (colaboradorRequest) => {
  const colaboradorToUpdate = {};
  if (colaboradorRequest.nome) {
    colaboradorToUpdate.nome = colaboradorRequest.nome;
  }
  if (colaboradorRequest.email) {
    colaboradoToUpdate.ano = colaboradorRequest.email;
  }
  return colaboradorToUpdate;
};

const updateOne = (id, colaboradorRequest) => new Promise((resolve, reject) => {
  if (!id) {
    return reject(new Error('id.empty'));
  }
  const colaboradorToUpdate = buildUpdateObject(colaboradorRequest);
  if (colaboradorToUpdate.email <= 0) {
    return reject(new Error('colaborator.email.is.empty'));
  }
  return Colaborador.update(colaboradorToUpdate, {
    where: {
      id,
    },
  }).then(() => {
    logger.debug('colaboradorService:updateOne:ok');
    resolve();
  }).catch((e) => {
    logger.debug('colaboradorService:updateOne:error: ', e);
    reject(e);
  });
});

module.exports.findAll = findAll;
module.exports.findOne = findOne;
module.exports.create = create;
module.exports.deleteOne = deleteOne;
module.exports.updateOne = updateOne;
