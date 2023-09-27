"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var MaintainerSchema = new _mongoose.Schema({
  user_id: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  total_record: {
    type: Number
  },
  total_created: {
    type: Number
  },
  total_updated: {
    type: Number
  },
  status: {
    type: String,
    "default": 'Pending',
    "enum": ['Pending', 'InProgress', 'Success', 'Failed']
  },
  type_bulkinsert: {
    type: String
  },
  created_date: {
    type: String
  },
  created_time: {
    type: String
  }
}, {
  timestamps: true
});
var _default = (0, _mongoose.model)('maintainerinsertbulk', MaintainerSchema);
exports["default"] = _default;