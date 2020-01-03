const fs = require('fs');

let listadoPorHacer = [];

//funcion para guardar info en JSON ------------------------------------------
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/data.json',data,(err)=>{
        if (err) throw new Error('No se pudo grabar',err);
    });
}
//fin func-------------------------------------------------------------------

//-------------------------funcion de lectura de json----------------------
const cargarDB = () =>{
    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }
    
    
}
//--------------------------------------------------------------------------

//funcion que crea una nueva tarea ------------------------------------
const crear = (descripcion) =>{
    
    cargarDB();

    let porHacer = {
        descripcion,
        completado:false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}
//fin func crear-----------------------------------------------------

// Func mostrar listado

const getListado = () =>{
    cargarDB();
    return listadoPorHacer;
}
//-------------------------------------------------------------

// func actualizar listado

const actualizar =(descripcion,completado = true) =>{
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    }else{
        return false;
    }
}
//-------------------------------------------------------------

//func borrar

const borrar = (descripcion) =>{
    cargarDB();

    let nuevolistado = listadoPorHacer.filter(tarea =>{
        return tarea.descripcion !== descripcion
    });

    if (nuevolistado.length === listadoPorHacer.length) {
        return false;
    }else{
        listadoPorHacer = nuevolistado;
        guardarDB();
        return true;
    }

    

}

//EXPORTACION DE FUNCIONES
module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}