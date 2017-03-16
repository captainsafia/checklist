#! /usr/bin/env node
'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

const userConfig = path.join(os.homedir(), '.checklist.config.js');
const defaultConfig = path.join(__dirname, '/default-configuration.js');

if (!fs.existsSync(userConfig))
  fs.createReadStream(defaultConfig).pipe(fs.createWriteStream(userConfig, { flags: 'a' }));
