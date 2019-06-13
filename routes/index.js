const express = require('express');
// const ldap = require('ldapjs');

const app = express();
const colaboratorRoutes = require('./colaborator');

app.use('/colaborator', colaboratorRoutes);


module.exports = app;
