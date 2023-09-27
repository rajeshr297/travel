"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _logger = _interopRequireDefault(require("../../middlewares/logger"));
var _requestHandler = require("../../middlewares/requestHandler");
var _maintainer = _interopRequireDefault(require("../../services/maintainer/maintainer.service"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var MaintainerController = /*#__PURE__*/function () {
  function MaintainerController() {
    _classCallCheck(this, MaintainerController);
  }
  _createClass(MaintainerController, [{
    key: "add_maintainers",
    value: function () {
      var _add_maintainers = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
        var _req$body, maintenance_period, type_of_trolley, trolley_no, wheels, grounding_chain, fasteners_and_aluminium_profile, rack_sides, stopper_rod, name_tag, next_due_period, actual_product_use, date_of_maintenance, shift_of_maintenance, remarks, result;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _req$body = req.body, maintenance_period = _req$body.maintenance_period, type_of_trolley = _req$body.type_of_trolley, trolley_no = _req$body.trolley_no, wheels = _req$body.wheels, grounding_chain = _req$body.grounding_chain, fasteners_and_aluminium_profile = _req$body.fasteners_and_aluminium_profile, rack_sides = _req$body.rack_sides, stopper_rod = _req$body.stopper_rod, name_tag = _req$body.name_tag, next_due_period = _req$body.next_due_period, actual_product_use = _req$body.actual_product_use, date_of_maintenance = _req$body.date_of_maintenance, shift_of_maintenance = _req$body.shift_of_maintenance, remarks = _req$body.remarks;
              _context.next = 4;
              return _maintainer["default"].add_maitainer(maintenance_period, type_of_trolley, trolley_no, wheels, grounding_chain, fasteners_and_aluminium_profile, rack_sides, stopper_rod, name_tag, next_due_period, actual_product_use, date_of_maintenance, shift_of_maintenance, remarks);
            case 4:
              result = _context.sent;
              return _context.abrupt("return", (0, _requestHandler.handleResponse)({
                res: res,
                statusCode: result.status,
                data: result
              }));
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              _logger["default"].info("Error from controller maintainer add -> ".concat(_context.t0));
              return _context.abrupt("return", (0, _requestHandler.handleError)({
                res: res,
                error: _context.t0,
                data: {
                  message: _context.t0.message
                }
              }));
            case 12:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[0, 8]]);
      }));
      function add_maintainers(_x, _x2) {
        return _add_maintainers.apply(this, arguments);
      }
      return add_maintainers;
    }()
  }, {
    key: "update_maintainer",
    value: function () {
      var _update_maintainer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
        var _req$body2, trolley_id, department_code, trolley_no, haip_no, rfid, part_code, part_code_description, loading_quantity, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _req$body2 = req.body, trolley_id = _req$body2.trolley_id, department_code = _req$body2.department_code, trolley_no = _req$body2.trolley_no, haip_no = _req$body2.haip_no, rfid = _req$body2.rfid, part_code = _req$body2.part_code, part_code_description = _req$body2.part_code_description, loading_quantity = _req$body2.loading_quantity;
              _context2.next = 4;
              return _maintainer["default"].trolleyupdate(trolley_id, department_code, trolley_no, haip_no, rfid, part_code, part_code_description, loading_quantity);
            case 4:
              result = _context2.sent;
              return _context2.abrupt("return", (0, _requestHandler.handleResponse)({
                res: res,
                statusCode: result.status,
                data: result
              }));
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              _logger["default"].info("Error from controller trolley add -> ".concat(_context2.t0));
              return _context2.abrupt("return", (0, _requestHandler.handleError)({
                res: res,
                error: _context2.t0,
                data: {
                  message: _context2.t0.message
                }
              }));
            case 12:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[0, 8]]);
      }));
      function update_maintainer(_x3, _x4) {
        return _update_maintainer.apply(this, arguments);
      }
      return update_maintainer;
    }()
  }, {
    key: "deletemaintainer",
    value: function () {
      var _deletemaintainer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
        var trolley_id, result;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              trolley_id = req.body.trolley_id;
              _context3.next = 4;
              return _maintainer["default"].trolleydelete(trolley_id);
            case 4:
              result = _context3.sent;
              return _context3.abrupt("return", (0, _requestHandler.handleResponse)({
                res: res,
                statusCode: result.status,
                data: result
              }));
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              _logger["default"].info("Error from controller trolley delete -> ".concat(_context3.t0));
              return _context3.abrupt("return", (0, _requestHandler.handleError)({
                res: res,
                error: _context3.t0,
                data: {
                  message: _context3.t0.message
                }
              }));
            case 12:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[0, 8]]);
      }));
      function deletemaintainer(_x5, _x6) {
        return _deletemaintainer.apply(this, arguments);
      }
      return deletemaintainer;
    }()
  }, {
    key: "getmaintainer",
    value: function () {
      var _getmaintainer = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
        var result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return _maintainer["default"].get_maitainer();
            case 3:
              result = _context4.sent;
              return _context4.abrupt("return", (0, _requestHandler.handleResponse)({
                res: res,
                statusCode: result.status,
                data: result
              }));
            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              _logger["default"].info("Error from controller get trolleys-> ".concat(_context4.t0));
              return _context4.abrupt("return", (0, _requestHandler.handleError)({
                res: res,
                error: _context4.t0,
                data: {
                  message: _context4.t0.message
                }
              }));
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[0, 7]]);
      }));
      function getmaintainer(_x7, _x8) {
        return _getmaintainer.apply(this, arguments);
      }
      return getmaintainer;
    }()
  }, {
    key: "getcount",
    value: function () {
      var _getcount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
        var result;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _maintainer["default"].counntdetail();
            case 3:
              result = _context5.sent;
              return _context5.abrupt("return", (0, _requestHandler.handleResponse)({
                res: res,
                statusCode: result.status,
                data: result
              }));
            case 7:
              _context5.prev = 7;
              _context5.t0 = _context5["catch"](0);
              _logger["default"].info("Error from controller get trolleys-> ".concat(_context5.t0));
              return _context5.abrupt("return", (0, _requestHandler.handleError)({
                res: res,
                error: _context5.t0,
                data: {
                  message: _context5.t0.message
                }
              }));
            case 11:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 7]]);
      }));
      function getcount(_x9, _x10) {
        return _getcount.apply(this, arguments);
      }
      return getcount;
    }()
  }, {
    key: "product_count",
    value: function () {
      var _product_count = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
        var result;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return _maintainer["default"].barchartloader();
            case 3:
              result = _context6.sent;
              return _context6.abrupt("return", (0, _requestHandler.handleResponse)({
                res: res,
                statusCode: result.status,
                data: result
              }));
            case 7:
              _context6.prev = 7;
              _context6.t0 = _context6["catch"](0);
              _logger["default"].info("Error from controller product_count trolleys-> ".concat(_context6.t0));
              return _context6.abrupt("return", (0, _requestHandler.handleError)({
                res: res,
                error: _context6.t0,
                data: {
                  message: _context6.t0.message
                }
              }));
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[0, 7]]);
      }));
      function product_count(_x11, _x12) {
        return _product_count.apply(this, arguments);
      }
      return product_count;
    }()
  }, {
    key: "maintainer_inserts",
    value: function () {
      var _maintainer_inserts = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
        var user_id, csvfile, result;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              user_id = req.body.user_id;
              csvfile = req.file;
              _context7.next = 5;
              return _maintainer["default"].maintainer_insert(user_id, csvfile);
            case 5:
              result = _context7.sent;
              return _context7.abrupt("return", (0, _requestHandler.handleResponse)({
                res: res,
                statusCode: result.status,
                data: result
              }));
            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](0);
              _logger["default"].info("Error from controller maintainer_insert -> ".concat(_context7.t0));
              return _context7.abrupt("return", (0, _requestHandler.handleError)({
                res: res,
                error: _context7.t0,
                data: {
                  message: _context7.t0.message
                }
              }));
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[0, 9]]);
      }));
      function maintainer_inserts(_x13, _x14) {
        return _maintainer_inserts.apply(this, arguments);
      }
      return maintainer_inserts;
    }()
  }]);
  return MaintainerController;
}();
var _default = new MaintainerController();
exports["default"] = _default;