"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _trolley = _interopRequireDefault(require("../controllers/trolley/trolley.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var TrolleyRouter = (0, _express.Router)();
TrolleyRouter.post('/addtrolley', _trolley["default"].add_trollerys).get('/gettrolley', _trolley["default"].gettrolleys).put('/updatetrolley', _trolley["default"].update_trollerys).post('/deletetrolley', _trolley["default"].deletetrolley).get('/getcount', _trolley["default"].getcount).get('/getproductcount', _trolley["default"].product_count);
var _default = TrolleyRouter;
exports["default"] = _default;