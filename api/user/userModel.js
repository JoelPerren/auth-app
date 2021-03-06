import { Sequelize } from 'sequelize';

class User extends Sequelize.Model {
    static init(database) {
        return super.init({
            id: {
              type: Sequelize.DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            firstName: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
            },
            lastName: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
            },
            email: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
            },
            password: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
            }
          }, {
              sequelize: database,
              tableName: 'user',
              underscored: true
          });
    }
}

export { User }