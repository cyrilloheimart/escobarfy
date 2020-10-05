module.exports = {
	getAllFornecedores: () => `SELECT * FROM Fornecedores`,
	getFornecedor: (nome) =>
		`SELECT * FROM Fornecedores WHERE nome LIKE "%${nome}%" OR fantasia LIKE "%${nome}%"`,
	setFornecedor: (nome, cnpj, fantasia) =>
		`INSERT INTO Fornecedores (nome, cnpj, fantasia) VALUES ("${nome}", "${cnpj}", "${fantasia}")`,
	setProdutoFornecedor: (idFornecedor, idMaterial) =>
		`INSERT INTO Fornecedor_has_material (idFornecedor, idMaterial) VALUES ("${idFornecedor}", "${idMaterial}")`,
	getFornecedorProduto: (produto) =>
		`SELECT f.nome, fm.idFornecedor from Fornecedor_has_material AS fm INNER JOIN Fornecedores AS f ON fm.idFornecedor = f.id WHERE idMaterial = ${produto}`,
};
