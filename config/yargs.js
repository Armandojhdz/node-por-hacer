const argv = require('yargs')
    
.command('crear', 'crear un elemnto por hacer', {
        descripcion:{
            demand:true,
            alias:'d',
            desc:'descripcion de la tarea por hacer'
        }
    })
    
.command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion:{
            demand:true,
            alias:'d',
            desc:'descripcion de la tarea por hacer'
        },
        completado:{
            default:true,
            alias:'c',
            desc:'Marca como completado o pendiente la tarea'
        }

    })
    .command('borrar','borrar una tarea por hacer',{
        descripcion:{
            demand:true,
            alias:'d',
            desc:'descripcion de la tarea por hacer'
        }
    })
    .help()
    .argv;


module.exports = {
    argv
}