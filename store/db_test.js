//Arreglo para almacenar data de prueba
const db = {
    'user':[{
        id:'1',
        name: 'Jose'
    }],
};
//La funciones reciben los siguientes parametros, tabla:la tabla donde vienen los datos
//id: el identificador del registro, data:la informacion concreta
async function list(tabla){
    return db[tabla];
}

async function get(tabla, id){
    let col = await list(tabla);
    return col.filter(item => item.id === id)[0] || null;
}
function upsert(tabla){
    db[collection].push(data);
}
function remove(tabla, id){
    return true;
}

module.exports = {
    list,
    get,
    upsert,
    remove
}