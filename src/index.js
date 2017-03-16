#! /usr/bin/env node
'use strict';

const colors = require('colors');
const os = require('os');
const path = require('path');

const program = require('commander');
const _version_ = require('../package.json').version;

const validateConfiguration = require('./validate-configuration');

const configPath = path.join(os.homedir(), '.checklist.config.js');
const config = require(configPath);

program
  .version(_version_);

program
  .command('list').alias('l')
  .description('List the current configuration for checklist')
  .action(function() {
    console.log('You have the following configurations set up for checklist.');
    for (var type in config) {
      console.log(colors.blue.bold(type));
      for (var property in config[type]) {
        console.log(' ' + property);
        for (var value in config[type][property]) {
          console.log('  - ' + config[type][property][value]);
        }
      }
    }
  });

program
  .command('check <configuration>').alias('c')
  .description('Check a project against a particular configuration')
  .action(function(type) {
    const configuration = config[type];
    return validateConfiguration(configuration, process.cwd());
  });

program.parse(process.argv);
