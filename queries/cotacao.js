module.exports = {
	inserirCotacao: (
		valor,
		idFornecedor,
		idSolicitacao,
		valorPorUnidade,
		prazoEntrega,
		prazoPagamento
	) =>
		`INSERT INTO Cotacoes (valor, id_fornecedor, id_solicitacao, valor_por_unidade, prazo_entrega, prazo_pagamento) VALUES (${valor}, "${idFornecedor}", "${idSolicitacao}", ${valorPorUnidade}, ${prazoEntrega}, ${prazoPagamento})`,
	aprovarCotacao: (idCotacao) =>
		`UPDATE Cotacoes SET aprovada = 1 where id = ${idCotacao}`,
	cotacaoPorSolicitacao: (idSolicitacao) =>
		`SELECT c.id, c.aprovada, c.valor, f.nome, c.valor_por_unidade, c.prazo_entrega, c.prazo_pagamento from Cotacoes AS c INNER JOIN Fornecedores AS f ON
		 c.id_fornecedor = f.id where c.id_solicitacao = ${idSolicitacao}`,
};
