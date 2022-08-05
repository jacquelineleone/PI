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
      },
      dificulty: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      season: {
        type: DataTypes.ENUM('verano', 'otoño', 'invierno', 'primavera'),
        allowNull: true,
      },
    });
  };