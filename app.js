const _ = require('lodash')
const chalk = require('chalk')
const yargs = require('yargs')
    // Alterando versão do yargs
yargs.version('1.0.1')

// add
yargs.command({
        command: 'add',
        describe: 'Adiciona uma nova task no nosso todo list',
        handler: function() {
            console.log(chalk.green('Criando uma nova task'))
        }
    })
    // remove
    .command({
        command: 'remove',
        describe: 'Removendo uma task no nosso todo list',
        handler: function() {
            console.log(chalk.red('Removendo uma task'))
        }
    })
    // list
    .command({
        command: 'list',
        describe: 'Listando tasks no nosso todo list',
        handler: function() {
            console.log(chalk.yellow('Listando tasks'))
        }
    })
    // read
    .command({
        command: 'read',
        describe: 'Lendo uma tasks no nosso todo list',
        handler: function() {
            console.log(chalk.blue('Lendo uma tasks no nosso todo list'))
        }
    })


console.log(yargs.argv)