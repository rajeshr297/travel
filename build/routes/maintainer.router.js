"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _maintainer = _interopRequireDefault(require("../controllers/maintainer/maintainer.controller"));
var _multer = require("../middlewares/multer");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TrolleyRouter = (0, _express.Router)();
TrolleyRouter.post('/addmaintainer', _maintainer["default"].add_maintainers).get('/getmaintainer', _maintainer["default"].getmaintainer).put('/updatemaintainer', _maintainer["default"].update_maintainer).post('/deletemaintainer', _maintainer["default"].deletemaintainer).get('/getcount', _maintainer["default"].getcount).get('/getproductcount', _maintainer["default"].product_count).post('/maintainerinsert', _multer.upload.single('csv'), _maintainer["default"].maintainer_inserts);
var _default = TrolleyRouter;
exports["default"] = _default;