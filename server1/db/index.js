const mysql = require('mysql');

// exports.base = (sql, data, callback) => {
// 	const connection = mysql.createConnection({
// 		host: 'localhost',
// 		user: 'root',
// 		password: 'admin123',
// 		database: 'myblog' 
// 	});
// 	connection.connect();

// 	connection.query(sql, data, function(error, results, fields) {
// 		if (error) throw error;
// 		callback(results);
// 		console.log('数据库连接成功');
// 	})
// 	connection.end();
// }
const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'admin123',
  database: 'myblog',
})

module.exports = db 
