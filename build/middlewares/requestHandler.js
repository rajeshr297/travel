"use strict";

module.exports = {
  handleResponse: function handleResponse(_ref) {
    var res = _ref.res,
      _ref$statusCode = _ref.statusCode,
      statusCode = _ref$statusCode === void 0 ? 200 : _ref$statusCode,
      _ref$msg = _ref.msg,
      msg = _ref$msg === void 0 ? 'Success' : _ref$msg,
      _ref$data = _ref.data,
      data = _ref$data === void 0 ? {} : _ref$data,
      _ref$result = _ref.result,
      result = _ref$result === void 0 ? 1 : _ref$result;
    res.status(statusCode).send({
      result: result,
      msg: msg,
      data: data
    });
  },
  validationResponse: function validationResponse(_ref2) {
    var res = _ref2.res,
      _ref2$statusCode = _ref2.statusCode,
      statusCode = _ref2$statusCode === void 0 ? 412 : _ref2$statusCode,
      _ref2$message = _ref2.message,
      message = _ref2$message === void 0 ? 'validation failed' : _ref2$message,
      _ref2$result = _ref2.result,
      result = _ref2$result === void 0 ? 0 : _ref2$result,
      _ref2$validation = _ref2.validation,
      validation = _ref2$validation === void 0 ? '' : _ref2$validation;
    res.status(statusCode).send({
      result: result,
      data: {
        message: message
      },
      validation: validation
    });
  },
  ratelimitResponse: function ratelimitResponse(_ref3) {
    var res = _ref3.res,
      _ref3$statusCode = _ref3.statusCode,
      statusCode = _ref3$statusCode === void 0 ? 429 : _ref3$statusCode,
      _ref3$msg = _ref3.msg,
      msg = _ref3$msg === void 0 ? 'Success' : _ref3$msg,
      _ref3$data = _ref3.data,
      data = _ref3$data === void 0 ? {} : _ref3$data,
      _ref3$result = _ref3.result,
      result = _ref3$result === void 0 ? 1 : _ref3$result;
    res.status(statusCode).send({
      result: result,
      msg: msg,
      data: data
    });
  },
  handleError: function handleError(_ref4) {
    var res = _ref4.res,
      _ref4$statusCode = _ref4.statusCode,
      statusCode = _ref4$statusCode === void 0 ? 500 : _ref4$statusCode,
      _ref4$err = _ref4.err,
      err = _ref4$err === void 0 ? 'error' : _ref4$err,
      _ref4$data = _ref4.data,
      data = _ref4$data === void 0 ? {} : _ref4$data,
      _ref4$result = _ref4.result,
      result = _ref4$result === void 0 ? 0 : _ref4$result;
    res.status(statusCode).send({
      result: result,
      //  err_msg,
      msg: err instanceof Error ? err.message : err.msg || err,
      data: data
    });
  },
  handleHeaderResponse: function handleHeaderResponse(_ref5) {
    var res = _ref5.res,
      headerName = _ref5.headerName,
      headerData = _ref5.headerData,
      _ref5$statusCode = _ref5.statusCode,
      statusCode = _ref5$statusCode === void 0 ? 200 : _ref5$statusCode,
      _ref5$data = _ref5.data,
      data = _ref5$data === void 0 ? {} : _ref5$data;
    res.setHeader(headerName, headerData);
    res.header(headerName, headerData).status(statusCode).send(data);
  },
  unAuthorized: function unAuthorized(res) {
    res.status(401).send({
      msg: "Unauthorized! you're not authorized for this route!"
    });
  }
};