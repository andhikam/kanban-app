'use strict';
module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable('Tasks', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
				required: true,
			},
			description: {
				type: Sequelize.STRING,
				required: true,
			},
			category: {
				type: Sequelize.STRING,
			},
			UserId: {
				type: Sequelize.INTEGER,
				references: {
					model: {
						tableName: 'Users',
						key: 'id',
					},
				},
			},
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
		});
	},
	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable('Tasks');
	},
};