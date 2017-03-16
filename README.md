# checklist

checklist is a command line utility for verifying the scaffolding of a particular
project. This is useful if you'd like to integrate checks for a particular project
setup before open sourcing a project, sending it to a client, or anything else.

Configurations are currently stored in `~/.checklist.config.js`. checklist
currently supports checking for files and folders in a directoy, if you have
other ideas for things it should check for, please open an issue.

## Installation

```
npm install --global @captainsafia/checklist
```

## Usage
```
  Usage: checklist [options] [command]


  Commands:

    list|l                   List the current configuration for checklist
    check|c <configuration>  Check a project against a particular configuration

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

![Checklist Demo](https://cloud.githubusercontent.com/assets/1857993/24018327/733294d0-0a61-11e7-951e-a9b5fbef3ced.gif)
