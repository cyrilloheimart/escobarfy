module.exports = {
	getUser: (login, senha) =>
		`SELECT id FROM Usuarios WHERE login = '${login}' and senha = '${senha}'`,
	setUser: (login, senha) =>
		`INSERT INTO Usuarios (login, senha) VALUES ("${login}", "${senha}")`,
	someUser: (login) => `SELECT COUNT(*) FROM Usuarios WHERE login = '${login}'`,
	deleteUser: (login, senha) =>
		`delete FROM Usuarios WHERE login = '${login}' and senha = '${senha}'`,
};
