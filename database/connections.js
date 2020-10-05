const mysql = require('mysql');

const connectionObj = {
	host: 'mysql669.umbler.com',
	port: 41890,
	user: 'admin_provafy',
	password: '1q2w3e4r',
	database: 'provafy',
};

const connection = mysql.createConnection(connectionObj);

const query = async (sql, callBack) => await connection.query(sql, callBack);

module.exports = {
	connection,
	query,
};
