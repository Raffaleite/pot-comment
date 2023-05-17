

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const bcrypt = require('bcryptjs') 
    const salt = bcrypt.genSaltSync(10);
    return queryInterface.bulkInsert('users', [{
      login: 'Rafael',
      senha: bcrypt.hashSync('1234', salt),
      dataNascimento: new Date(2003, 10, 06),
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('users', null, {});
  }
};
