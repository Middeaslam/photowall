"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactRouterDom = require("react-router-dom");
var _reactRedux = require("react-redux");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireDefault(require("react"));
var _actions = require("../redux/actions");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Photo = function Photo(_ref) {
  var _useSelector;
  var post = _ref.post;
  var dispatch = (0, _reactRedux.useDispatch)();
  var navigate = (0, _reactRouterDom.useNavigate)();
  var comments = (_useSelector = (0, _reactRedux.useSelector)(function (state) {
    return state.comments[post.id];
  })) !== null && _useSelector !== void 0 ? _useSelector : [];
  var handleRemovePost = function handleRemovePost() {
    dispatch((0, _actions.removePosts)(post.id));
    navigate('/');
  };
  return /*#__PURE__*/_react.default.createElement("figure", {
    className: "figure"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: "/single/".concat(post.id)
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "photo",
    src: post.imageLink,
    alt: post.description
  })), /*#__PURE__*/_react.default.createElement("figcaption", null, /*#__PURE__*/_react.default.createElement("p", null, post.description)), /*#__PURE__*/_react.default.createElement("div", {
    className: "button-container"
  }, /*#__PURE__*/_react.default.createElement("button", {
    onClick: handleRemovePost
  }, "Remove"), /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    className: "button",
    to: "/single/".concat(post.id)
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "comment-count"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "speech-bubble"
  }), comments.length))));
};
Photo.propTypes = {
  post: _propTypes.default.object.isRequired
};
var _default = Photo;
exports.default = _default;