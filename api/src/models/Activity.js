const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('activity', {
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      id: {
        type: DataTypes.UUID,
        allowNull: true,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      difficulty: {
        type: DataTypes.ENUM(['1', '2', '3', '4', '5']),
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM('Verano', 'Otoño', 'Invierno', 'Primavera'),
        allowNull: true,
      },
    });
  };