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
        validate: {
          notNull: { msg: 'Le nom est obligatoire.' },
          notEmpty: { msg: 'Le nom ne peut pas être vide.' },
        },
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
        validate: {
          notNull: { msg: 'La description est obligatoire.' },
          notEmpty: { msg: 'La description ne peut pas être vide.' },
        },
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        validate: {
          notNull: { msg: 'Le prix est obligatoire.' },
          isDecimal: { msg: 'Le prix doit être un nombre décimal.' },
        },
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'La catégorie est obligatoire.' },
          notEmpty: { msg: 'La catégorie ne peut pas être vide.' },
        },
      },
      url_img: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
          isUrl: {
            msg: "L'URL de l’image doit être une URL valide.",
          },
        },
      },
    },
    {
      timestamps: true,
    }
  );

  return Packages;
};
