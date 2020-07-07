module.exports = (sequelize, Sequelize) => {
  return sequelize.define('tutorial', {
    id: {
      primaryKey: true,
      allowNull: false,
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
    },
    title: {
      type: Sequelize.STRING,
    },
    description: {
      type: Sequelize.STRING,
    },
    published: {
      type: Sequelize.BOOLEAN,
    },
  });
};
