'use strict';
const bcrypt = require('bcrypt')

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.bulkInsert('users', [
      {
        name: 'Henki',
        profession: 'Backend developer',
        role: 'admin',
        email: 'henki@mail.com',
        password: await bcrypt.hash('admin123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Wisnu',
        profession: 'Frontend Developer',
        role: 'student',
        email: 'wisnu@mail.com',
        password: await bcrypt.hash('admin123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Subakti',
        profession: 'Fullstack Developer',
        role: 'student',
        email: 'subakti@mail.com',
        password: await bcrypt.hash('admin123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
