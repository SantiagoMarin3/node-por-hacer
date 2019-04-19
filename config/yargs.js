const descripcion = {
    alias: 'b',
    demand: true
};

const completado = {
    alias: 'c',
    default: true
};

const argv = require('yargs')
    .command('actualizar', 'Actualiza el estado completo de una tarea', {
        descripcion,
        completado
    })
    .command('crear', 'Crea un elemento por hacer', {
        descripcion
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}