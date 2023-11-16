const excerciseData = require("../seed-data/excercise-data");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex("excercises").del();
	await knex("excercises").insert(excerciseData);
};
