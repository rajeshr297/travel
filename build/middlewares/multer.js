"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upload = void 0;
var _multer = _interopRequireDefault(require("multer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import path from 'path';
// import fs from 'fs';

// const file = 'uploads';

// if (!fs.existsSync(file)) {
//   fs.mkdirSync(file);
// }

// const storage = multer.diskStorage({
//   destination(req, file, cb) {
//     cb(null, path.join(__dirname, '../../uploads'));
//   },
//   filename(req, file, cb) {
//     cb(null, `${Date.now()}.${file.mimetype.split('/')[1]}`);
//   },
// });
var fileFilter = function fileFilter(req, file, cb) {
  // reject a file
  // console.log(file.mimetype.split('/')[1]);
  if (file.mimetype.split('/')[1] === 'csv') {
    cb(null, true);
  } else {
    cb(new _multer["default"].MulterError('LIMIT_UNEXPECTED_FILE'), false);
  }
};
var storage = _multer["default"].memoryStorage();
var upload = (0, _multer["default"])({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 2,
  // },
  fileFilter: fileFilter
});
exports.upload = upload;