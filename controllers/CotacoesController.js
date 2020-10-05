const { query } = require('../database/connections');
const {
	inserirCotacao,
	aprovarCotacao,
	cotacaoPorSolicitacao,
} = require('../queries/cotacao');

function IncluirCotacao(req, res) {
	const {
		valor,
		idFornecedor,
		idSolicitacao,
		valorPorUnidade,
		prazoEntrega,
		prazoPagamento,
	} = req.body;

	query(
		inserirCotacao(
			valor,
			idFornecedor,
			idSolicitacao,
			valorPorUnidade,
			prazoEntrega,
			prazoPagamento
		),
		(error) => {
			if (error) {
				res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
			}

			res.status(200).send('Cotação enviada para analise');
		}
	);
}

function AprovarCotacao(req, res) {
	const { idCotacao } = req.body;
	query(aprovarCotacao(idCotacao), (error) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).send('Cotacao aprovada');
	});
}

function CotacaoPorSolicitacao(req, res) {
	const { solicitacao } = req.params;
	query(cotacaoPorSolicitacao(solicitacao), (error, result) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		if (result.length < 3) {
			res.status(200).send('Aguardando fornecedores...');
		}

		res.status(200).json(result);
	});
}

module.exports = {
	IncluirCotacao,
	AprovarCotacao,
	CotacaoPorSolicitacao,
};
