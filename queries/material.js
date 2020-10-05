module.exports = {
	getAllMateriais: () => `SELECT * FROM Materiais`,
	deleteMaterial: (id) => `DELETE FROM Materiais where id = ${id}`,
	getMaterial: (nome) => `SELECT * FROM Materiais WHERE nome LIKE "%${nome}%"`,
	setMaterial: (nome, quantidade, descricao) =>
		`INSERT INTO Materiais (nome, descricao, quantidade) VALUES ("${nome}", ${
			descricao ? `"${descricao}"` : null
		}, ${quantidade})`,
};
