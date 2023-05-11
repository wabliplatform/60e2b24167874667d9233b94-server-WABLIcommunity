/* eslint-disable no-unused-vars */
const Service = require('./Service');
const { Municipality } = require('../models/Municipality');

/**
* Creates the data
*
* municipality Municipality data to be created
* returns municipality
* */
const createmunicipality = ({ municipality }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await new Municipality(municipality).save();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete the element
*
* municipalityId String the Id parameter
* no response value expected for this operation
* */
const deletemunicipality = ({ municipalityId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Municipality.findOneAndDelete({ _id:municipalityId }).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data
*
* returns Object
* */
const getAllmunicipality = () => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Municipality.find().exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all the data based on user query
*
* attribute String the attribute based on which the search is performed
* value String the value parameter based on which the search is performed
* returns Object
* */
const getByParamsmunicipality = ({ attribute, value }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {}
      query = await Municipality.find({ [attribute]: value }).exec();
      // this is a test
      resolve(Service.successResponse(query));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the element
*
* municipalityId String the Id parameter
* returns municipality
* */
const getmunicipality = ({ municipalityId }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Municipality.findById(municipalityId)
      .exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Updates the element
*
* municipalityId String the Id parameter
* municipality Municipality data to be updated (optional)
* returns municipality
* */
const updatemunicipality = ({ municipalityId, municipality }) => new Promise(
  async (resolve, reject) => {
    try {
      let query = {};
      query = await Municipality.findOneAndUpdate({ _id:municipalityId },municipality).exec();
      resolve(Service.successResponse({ query,}));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createmunicipality,
  deletemunicipality,
  getAllmunicipality,
  getByParamsmunicipality,
  getmunicipality,
  updatemunicipality,
};
