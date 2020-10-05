const { query } = require('../database/connections');
const {
	abrirSolicitacao,
	finalizarSolicitacao,
	listarSolicitacoes,
} = require('../queries/solicitacoes');

function ListarSolicitacoes(req, res) {
	query(listarSolicitacoes(), (error, result) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).json(result);
	});
}

function AbrirSolicitacao(req, res) {
	const { idMaterial, quantidade } = req.body;
	query(abrirSolicitacao(idMaterial, quantidade), (error) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).send('Solicitacao executada com sucesso');
	});
}

function FinalizarSolicitacao(req, res) {
	const { id } = req.body;
	query(finalizarSolicitacao(id), (error) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).send('Solicitacao finalizada com sucesso');
	});
}

module.exports = {
	AbrirSolicitacao,
	FinalizarSolicitacao,
	ListarSolicitacoes,
};
