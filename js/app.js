
var mysql = require('mysql');

var conexion = mysql.createConnection({
    host:'localhost',
    database:'ferreteria',
    user:'root',
    password:'Staticroof+4',
    port:3306

});

    conexion.connect(function(error){

        if(error){
            throw error;
        }else{
            console.log('Conexion exitosa');
        }
    });

    

    conexion.end();
