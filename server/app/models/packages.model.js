// for type of value
// https://sequelize.org/docs/v6/core-concepts/model-basics/

// doc validation, query, etc, validation = allowNull
// https://sequelize.org/docs/v6/category/core-concepts/

module.exports = (connex, Sequelize) => {
  const Packages = connex.define(
    'packages',
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      url_img: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: true,
    }
  );

  return Packages;
};
