module.exports = {
	abrirSolicitacao: (material, quantidade) =>
		`INSERT INTO Solicitacoes (idMaterial, quantidade) VALUES ("${material}", ${quantidade})`,
	finalizarSolicitacao: (id) =>
		`UPDATE Solicitacoes SET entregue = 1 where id = ${id}`,
	listarSolicitacoes: () =>
		`SELECT s.id, s.quantidade, s.entregue, m.nome as nome_material FROM Solicitacoes AS s INNER JOIN Materiais AS m ON s.idMaterial = m.id`,
};
