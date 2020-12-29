import { Sequelize } from 'sequelize';
import { User } from '../user/userModel.js';

class Token extends Sequelize.Model {
    static init(database) {
        return super.init({
            id: {
              type: Sequelize.DataTypes.INTEGER,
              primaryKey: true,
              autoIncrement: true
            },
            userRef: {
              type: Sequelize.DataTypes.INTEGER,
              allowNull: false,
              references: {
                  model: User,
                  key: 'id'
              }
            },
            token: {
              type: Sequelize.DataTypes.STRING,
              allowNull: false
            },
            expiresAt: {
              type: Sequelize.DataTypes.DATE,
              allowNull: false
            }
          }, {
              sequelize: database,
              tableName: 'token',
              underscored: true
          });
    }
}

export { Token }