"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _profile = _interopRequireDefault(require("../controllers/profile/profile.controller"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var PriceRouter = (0, _express.Router)();
PriceRouter.post('/login', _profile["default"].login).post('/register', _profile["default"].register).get('/get', _profile["default"].get_user).post('/delete', _profile["default"].user_delete);
var _default = PriceRouter;
exports["default"] = _default;