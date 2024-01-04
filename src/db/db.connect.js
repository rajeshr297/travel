import mongoose from 'mongoose';
import config from '../../config/config';
import logger from '../middlewares/logger';

const setupConnection = async (dbconnection) => {
  try {
    mongoose.Promise = global.Promise;

    // setup connection
    await mongoose.connection.close();

    mongoose.set('strictQuery', false);

    await mongoose.connect(config.db.str, config.db.options);
    await mongoose.connection.on('disconnected', () => {
      // display the connnection with database is get disconnected
      logger.debug('🔴  Mongoose connection database is disconnected');
    });
    // connectin of database is opened
    const word = dbconnection || 'Mongoose connection open to Nokia Trolley DB';
    logger.info(`💹 ${word}`);
  } catch (err) {
    console.error({
      message: '🔴 Database is not available',
      error: err,
    });
    logger.debug('🔴  Mongoose connection database is not available');
  }
};

export { setupConnection };
