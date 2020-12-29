import { Sequelize } from 'sequelize';
import { Token } from '../api/auth/tokenModel.js';
import { User } from '../api/user/userModel.js';

const connectToDatabase = () => {
  const herculesDB = new Sequelize(process.env.POSTGRES_URI, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    },
  });

  verifyConnection(herculesDB);
  registerModels(herculesDB);

  return herculesDB;
}

const verifyConnection = async (database) => {
  try {
    await database.authenticate();
    console.log('Connection to HerculesDB has been established successfully');
  } catch (error) {
    console.error('Unable to establish connection to HerculesDB:', error);
  }
}

const registerModels = async (database) => {
  try {
    User.init(database);
    Token.init(database);

    User.hasMany(Token);
    Token.belongsTo(User);
    
    await database.sync();
    console.log('Database models synced successfully');
  } catch (error) {
    console.error('Unable to sync database models:', error);
  }
}

export { connectToDatabase };
