const router = require("express").Router();
const knex = require("knex")(require("../knexfile"));

const getAllExcercises = async (_req, res) => {
	try {
		const excercises = await knex("excercises").select("*");
		return res.status(200).send(excercises);
		console.log(excercises);
	} catch (error) {
		console.error(error);
	}
};

const getExcercise = async (req, res) => {
	try {
		const excercise = await knex("excercises").where({ id: req.params.id });
		// return res.status(200).send(excercises);
		console.log(excercise);
	} catch (error) {
		console.error(error);
	}
};

module.exports = {
	getAllExcercises,
	getExcercise,
};
