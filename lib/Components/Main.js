"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _AddPhoto = _interopRequireDefault(require("./AddPhoto"));
var _PhotoWall = _interopRequireDefault(require("./PhotoWall"));
var _react = _interopRequireDefault(require("react"));
var _Single = _interopRequireDefault(require("./Single"));
var _Title = _interopRequireDefault(require("./Title"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Main = function Main() {
  return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Routes, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    exact: true,
    path: "/",
    element: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Title.default, {
      title: "Photowall"
    }), /*#__PURE__*/_react.default.createElement(_PhotoWall.default, null))
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/AddPhoto",
    element: /*#__PURE__*/_react.default.createElement(_AddPhoto.default, null)
  }), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Route, {
    path: "/single/:id",
    element: /*#__PURE__*/_react.default.createElement(_Single.default, null)
  }));
};
var _default = Main;
exports.default = _default;