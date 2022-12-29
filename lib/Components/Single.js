"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _Comments = _interopRequireDefault(require("./Comments"));
var _Photo = _interopRequireDefault(require("./Photo"));
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Single = function Single() {
  var _useParams = (0, _reactRouterDom.useParams)(),
    id = _useParams.id;
  var posts = (0, _reactRedux.useSelector)(function (state) {
    return state.posts;
  });
  var post = posts.find(function (post) {
    return post.id === id;
  });
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "single-photo"
  }, /*#__PURE__*/_react.default.createElement(_Photo.default, {
    post: post
  }), /*#__PURE__*/_react.default.createElement(_Comments.default, {
    id: id
  }));
};
var _default = Single;
exports.default = _default;