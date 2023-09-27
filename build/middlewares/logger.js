"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _winston = _interopRequireDefault(require("winston"));
var _momentTimezone = _interopRequireDefault(require("moment-timezone"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
require('dotenv').config();
var _require = require('winston-mail'),
  Mail = _require.Mail;
var current_time = (0, _momentTimezone["default"])().tz('Asia/Kolkata').format('HH:mm');
var current_date = (0, _momentTimezone["default"])().format('DD-MM-YYYY');
// const appendTimestamp = winston.format((info, opts) => {
//   if (opts.tz) info.timestamp = moment().tz(opts.tz).format();
//   return info;
// });

var timezoned = function timezoned() {
  return new Date().toLocaleString('en-IN', {
    timeZone: process.env.Time_Zone
  });
};
var logger = _winston["default"].createLogger({
  // format: winston.format.combine(
  //   winston.format.timestamp(),
  //   winston.format.json(),
  // ),
  transports: [new _winston["default"].transports.File({
    datePattern: 'YYYY-MM-DD-HH:mm:ss',
    // zippedArchive: true,
    format: _winston["default"].format.combine(_winston["default"].format.timestamp({
      format: timezoned
    }),
    // appendTimestamp({ tz: process.env.Time_Zone }),
    _winston["default"].format.prettyPrint(), _winston["default"].format.json()),
    level: 'info',
    maxsize: 5242880,
    // 5MB
    maxFiles: 100,
    colorize: true,
    filename: './logs/all-logs.log',
    humanReadableUnhandledException: true,
    prettyPrint: true
  }), new _winston["default"].transports.Console({
    level: 'debug',
    filename: './logs/all-logs.log',
    handleExceptions: true,
    json: true,
    colorize: true,
    timestamp: true,
    humanReadableUnhandledException: true,
    prettyPrint: true
  })],
  exceptionHandlers: [new _winston["default"].transports.File({
    datePattern: 'YYYY-MM-DD-HH:mm:ss',
    // zippedArchive: true,
    format: _winston["default"].format.combine(_winston["default"].format.timestamp({
      format: timezoned
    }),
    // appendTimestamp({ tz: process.env.Time_Zone }),
    _winston["default"].format.prettyPrint(), _winston["default"].format.json()),
    filename: './logs/exceptions.log',
    timestamp: true,
    maxsize: 5242880,
    maxFiles: 100,
    json: true,
    prettyPrint: true,
    colorize: true
  })
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

  exitOnError: false
});
var _default = logger;
exports["default"] = _default;
exports = {
  stream: {
    write: function write(message) {
      logger.info(message);
    }
  }
};