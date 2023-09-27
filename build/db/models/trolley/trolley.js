"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var TrolleySchema = new _mongoose.Schema({
  department_code: {
    type: String
  },
  trolley_no: {
    type: String
  },
  haip_no: {
    type: String
  },
  rfid: {
    type: String
  },
  part_code: {
    type: String
  },
  part_code_description: {
    type: String
  },
  loading_quantity: {
    type: String
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('trolley', TrolleySchema);
exports["default"] = _default;