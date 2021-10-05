module.exports = (sequelize, Sequelize) => {
  const dbModel = sequelize.define("hotels", {
    title: {
      type: Sequelize.STRING,
    },
    price: {
      type: Sequelize.INTEGER,
    },
    location: {
      type: Sequelize.STRING,
    },
    bed: {
      type: Sequelize.INTEGER,
    },
    available: {
      type: Sequelize.BOOLEAN,
    },
  });

  return dbModel;
};
