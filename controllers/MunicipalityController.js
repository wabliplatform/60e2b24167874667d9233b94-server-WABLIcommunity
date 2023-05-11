/**
 * The MunicipalityController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic reoutes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/MunicipalityService');
const createmunicipality = async (request, response) => {
  await Controller.handleRequest(request, response, service.createmunicipality);
};

const deletemunicipality = async (request, response) => {
  await Controller.handleRequest(request, response, service.deletemunicipality);
};

const getAllmunicipality = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllmunicipality);
};

const getByParamsmunicipality = async (request, response) => {
  await Controller.handleRequest(request, response, service.getByParamsmunicipality);
};

const getmunicipality = async (request, response) => {
  await Controller.handleRequest(request, response, service.getmunicipality);
};

const updatemunicipality = async (request, response) => {
  await Controller.handleRequest(request, response, service.updatemunicipality);
};


module.exports = {
  createmunicipality,
  deletemunicipality,
  getAllmunicipality,
  getByParamsmunicipality,
  getmunicipality,
  updatemunicipality,
};
