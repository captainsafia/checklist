'use strict';

const colors = require('colors');
const fs = require('fs');
const path = require('path');

function logOK(text) {
  return console.log(colors.green('✓', text));
}

function logNotOK(text) {
  return console.log(colors.red('✗', text));
}

function validateConfiguration(configuration, directory) {
  const files = configuration['files'] || [];
  const folders = configuration['folders'] || [];

  files.forEach(function(file) {
    if (fs.existsSync(path.join(directory, file)))
      logOK(file);
    else
      logNotOK(file);
  });

  folders.forEach(function(folder) {
    if (fs.existsSync(path.join(directory, folder)))
      logOK(folder);
    else
      logNotOK(folder);
  });
}

module.exports = validateConfiguration;
