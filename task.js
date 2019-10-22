const fs = require('fs');
const chalk = require('chalk')

debugger

const addTask = (name, description) => {
    const tasks = loadAllTaks()
    const duplicatedTask = tasks.find((task) => task.name === name)
    if (!duplicatedTask) {
        const newTask = {
            name,
            description,
            status: 'BACKLOG'
        }
        tasks.push(newTask)
        saveTask(tasks)
        const sucessMessage = `Criada a taks ${name}. Gravada com sucesso`
        console.log(sucessMessage)
    } else {
        console.log(chalk.red.bold('Task duplicada'))
    }
}

const saveTask = (tasks) => {
    const taskJSon = JSON.stringify(tasks)
    fs.writeFileSync('tasks.json', taskJSon)
}

const loadAllTaks = () => {
    //ler o arquivo
    try {
        const tasksBuffer = fs.readFileSync('tasks.json')
        return JSON.parse(tasksBuffer);
    } catch (error) {
        return []
    }
}

const removeTask = (name) => {
    const tasks = loadAllTaks()
    const tastToKeep = tasks.filter((task) => task.name !== name)
    saveTask(tastToKeep);
    console.log(`Task removida. Name: ${name}`)
}

const readTask = (name) => {
    const tasks = loadAllTaks()
    const findTask = tasks.find((task) => task.name === name)
    findTask !== undefined ? console.log(findTask) : console.log(`Task não encontrada. Pesquisado: ${name}`)
}

const updateTask = (name, status) => {
    const tasks = loadAllTaks()
    tasks.find((task) => {
        task.name === name ? task.status = status : ''
    })
    saveTask(tasks);
    console.log(chalk.gray.inverse(`Task: "${name}" -> Atualizada com sucesso`))
}

module.exports = {
    addTask,
    removeTask,
    loadAllTaks,
    readTask,
    updateTask
}