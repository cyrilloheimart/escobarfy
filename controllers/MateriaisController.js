const { query } = require('../database/connections');
const {
	setMaterial,
	getMaterial,
	getAllMateriais,
	deleteMaterial,
} = require('../queries/material');

function IncluirMaterial(req, res) {
	const { nome, quantidade, descricao } = req.body;
	query(setMaterial(nome, quantidade, descricao), (error) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).send('Material incluido com sucesso');
	});
}

function ExcluirMaterial(req, res) {
	const { id } = req.params;
	query(deleteMaterial(id), (error) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).send('Material excluido com sucesso');
	});
}

function ListarMateriais(req, res) {
	query(getAllMateriais(), (error, result) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).json(result);
	});
}

function buscarMaterial(req, res) {
	query(getMaterial(req.params.nome), (error, result) => {
		if (error) {
			res.status(500).json({ message: 'Ocorreu um erro inesperado.', error });
		}

		res.status(200).json(result);
	});
}

module.exports = {
	IncluirMaterial,
	ExcluirMaterial,
	ListarMateriais,
	buscarMaterial,
};
