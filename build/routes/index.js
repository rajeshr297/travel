"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _multer = _interopRequireDefault(require("multer"));
var _path = _interopRequireDefault(require("path"));
var _requestHandler = require("../middlewares/requestHandler");
var _profile = _interopRequireDefault(require("./profile.router"));
var _trolley = _interopRequireDefault(require("./trolley.router"));
var _maintainer = _interopRequireDefault(require("./maintainer.router"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var initializeRoutes = function initializeRoutes(app) {
  app.use('/api/trolley', _trolley["default"]).use('/api/user', _profile["default"]).use('/api/maintainer', _maintainer["default"]).use(function (req, res, next) {
    if (req.originalUrl && req.originalUrl.split('/').pop() === 'favicon.ico') {
      return res.sendStatus(204);
    }
    next();
  }).get('/', function (req, res) {
    res.sendFile(_path["default"].join(__dirname, '../public/Home.html'));
  }).get('/404', function (req, res) {
    res.sendFile(_path["default"].join(__dirname, '../public/404.html'));
  }).use(function (error, req, res, next) {
    // multerfunction
    if (error instanceof _multer["default"].MulterError) {
      if (error.code === 'LIMIT_FILE_SIZE') {
        return (0, _requestHandler.handleResponse)({
          res: res,
          statusCode: 404,
          data: {
            message: 'File is large, upload 2MB below',
            status: 404
          }
        });
      }
    }
    if (error.code === 'LIMIT_UNEXPECTED_FILE') {
      return (0, _requestHandler.handleResponse)({
        res: res,
        statusCode: 404,
        data: {
          message: 'File must be an image JPEG and PNG',
          status: 404
        }
      });
    }
  });
};
var _default = {
  initializeRoutes: initializeRoutes
};
exports["default"] = _default;