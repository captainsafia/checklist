'use strict';

const path = require('path');

const expect = require('chai').expect;
const validateConfiguration = require('../src/validate-configuration');

describe('validateConfiguration', function() {
  it('validates a directory for files and folders', function() {
    const configuration = {
      files: ['README.md', 'CONTRIBUTING.md'],
      folders: ['tests/']
    };
    expect(function() {
      validateConfiguration(configuration, path.join(__dirname, '..'));
    }).to.not.throw(Error);
  });
  it('validates a directory for only files', function() {
    const configuration = {
      files: ['README.md', 'CONTRIBUTING.md'],
    };
    expect(function() {
      validateConfiguration(configuration, path.join(__dirname, '..'));
    }).to.not.throw(Error);
  });
  it('validates a directory for only folders', function() {
    const configuration = {
      folders: ['tests']
    };
    expect(function() {
      validateConfiguration(configuration, path.join(__dirname, '..'));
    }).to.not.throw(Error);
  });
});
