"use strict";

var _ = require('lodash');
var envFile = process.env.NODE_ENV ? "process.env.NODE_ENV" + ".js" : "local.js";
var allConfig = require('./envs/all');
var envConfig = require('./envs/' + envFile);

module.exports = _.extend(allConfig, envConfig);