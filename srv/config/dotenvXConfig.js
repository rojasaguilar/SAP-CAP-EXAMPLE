const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    HOST: process.env.HOST || 'NO ENCONTRE VARIABE DE ENTORNO',
    PORT: process.env.PORT || 'NO ENCONTRE PORT',
    API_URL: process.env.API_URL || '/api/v1',
    CONNECTION_STRING: process.env.CONNECTION_STRING || 'SIN Cadena de CONEXION A LA BD MONGO', 
}