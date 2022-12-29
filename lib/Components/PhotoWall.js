"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _Photo = _interopRequireDefault(require("./Photo"));
var _react = _interopRequireDefault(require("react"));
var _reactRedux = require("react-redux");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PhotoWall = function PhotoWall() {
  var posts = (0, _reactRedux.useSelector)(function (state) {
    return state.posts;
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/AddPhoto",
    className: "addIcon"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "photoGrid"
  }, posts.sort(function (x, y) {
    return y.id - x.id;
  }).map(function (post) {
    return /*#__PURE__*/_react.default.createElement(_Photo.default, {
      key: post.id,
      post: post
    });
  })));
};
var _default = PhotoWall;
exports.default = _default;