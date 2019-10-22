const _ = require('lodash')
const chalk = require('chalk')
const yargs = require('yargs')
const task = require('./task')

// add
yargs.command({
        command: 'add',
        describe: 'Adiciona uma nova task no nosso todo list',
        builder: {
            name: {
                describe: 'Nome da task',
                demandOption: true,
                type: 'string'
            },
            description: {
                describe: 'Descrição da task',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            console.log(chalk.green(`Criando uma nova task ->  ${argv.name} - ${argv.description}`))
            task.addTask(argv.name, argv.description);
        }
    })
    // remove
    .command({
        command: 'remove',
        describe: 'Removendo uma task no nosso todo list',
        builder: {
            name: {
                describe: 'Nome da task',
                demandOption: true,
                type: 'string'
            }
        },
        handler: function(argv) {
            console.log(chalk.red('Removendo uma task'))
            task.removeTask(argv.name);

        }
    })
    // list
    .command({
        command: 'list',
        describe: 'Listando tasks no nosso todo list',
        handler: () => {
            console.log(chalk.yellow('Listando tasks'))
            console.log(task.loadAllTaks())
        }
    })
    // read
    .command({
        command: 'read',
        describe: 'Lendo uma tasks no nosso todo',
        builder: {
            name: {
                describe: 'Nome da task',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            console.log(chalk.blue('Lendo uma task no nosso todo list'))
            task.readTask(argv.name)
        }
    })
    .command({
        command: 'update',
        describe: 'Atualizando uma task no nosso todo',
        builder: {
            name: {
                describe: 'Nome da task para find',
                demandOption: true,
                type: 'string'
            },
            status: {
                describe: 'Status da task',
                demandOption: true,
                type: 'string'
            }
        },
        handler: (argv) => {
            console.log(chalk.gray('Atualizando a task'))
            task.updateTask(argv.name, argv.status)
        }
    })
    //Version
    .version('1.0.2')
    .parse()