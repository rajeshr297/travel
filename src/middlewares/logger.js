import winston from 'winston';
import moment from 'moment-timezone';

require('dotenv').config();
const { Mail } = require('winston-mail');

const current_time = moment().tz('Asia/Kolkata').format('HH:mm');
const current_date = moment().format('DD-MM-YYYY');
// const appendTimestamp = winston.format((info, opts) => {
//   if (opts.tz) info.timestamp = moment().tz(opts.tz).format();
//   return info;
// });

const timezoned = () => new Date().toLocaleString('en-IN', {
  timeZone: process.env.Time_Zone,
});
const logger = winston.createLogger({
  // format: winston.format.combine(
  //   winston.format.timestamp(),
  //   winston.format.json(),
  // ),
  transports: [
    new winston.transports.File({
      datePattern: 'YYYY-MM-DD-HH:mm:ss',
      // zippedArchive: true,
      format: winston.format.combine(
        winston.format.timestamp({ format: timezoned }),
        // appendTimestamp({ tz: process.env.Time_Zone }),
        winston.format.prettyPrint(),
        winston.format.json(),
      ),
      level: 'info',
      maxsize: 5242880, // 5MB
      maxFiles: 100,
      colorize: true,
      filename: './logs/all-logs.log',
      humanReadableUnhandledException: true,
      prettyPrint: true,

    }),

    new winston.transports.Console({
      level: 'debug',
      filename: './logs/all-logs.log',
      handleExceptions: true,
      json: true,
      colorize: true,
      timestamp: true,
      humanReadableUnhandledException: true,
      prettyPrint: true,
    }),
  ],

  exceptionHandlers: [
    new winston.transports.File({
      datePattern: 'YYYY-MM-DD-HH:mm:ss',
      // zippedArchive: true,
      format: winston.format.combine(
        winston.format.timestamp({ format: timezoned }),
        // appendTimestamp({ tz: process.env.Time_Zone }),
        winston.format.prettyPrint(),
        winston.format.json(),
      ),
      filename: './logs/exceptions.log',
      timestamp: true,
      maxsize: 5242880,
      maxFiles: 100,
      json: true,
      prettyPrint: true,
      colorize: true,
    }),
    // new winston.transports.Mail({
    //   host: 'smtp.gmail.com',
    //   from: process.env.gmail_username,
    //   to: 'hemakumarm72@gmail.com',
    //   subject: 'uncaughtException Report',
    //   //  host: 'smtp.relaxitsjustanexample.com',
    //   username: process.env.gmail_username,
    //   password: process.env.gmail_password,
    //   ssl: true,
    //   prettyPrint: true,
    //   colorize: true,
    // }),

  ],
  exitOnError: false,
});

export default logger;

exports = {
  stream: {
    write(message) {
      logger.info(message);
    },
  },
};
