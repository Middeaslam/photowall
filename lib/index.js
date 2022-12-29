"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;
require("./styles/stylesheet.css");
var _redux = require("redux");
var _reducer = require("./redux/reducer");
var _reactRouterDom = require("react-router-dom");
var _Main = _interopRequireDefault(require("./Components/Main"));
var _reactRedux = require("react-redux");
var _react = _interopRequireDefault(require("react"));
var _client = _interopRequireDefault(require("react-dom/client"));
var _extension = require("@redux-devtools/extension");
var _reportWebVitals = _interopRequireDefault(require("./reportWebVitals"));
var _reduxThunk = _interopRequireDefault(require("redux-thunk"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var composeEnhancers = (0, _extension.composeWithDevTools)({
  trace: true,
  traceLimit: 25
});
var rootReducer = (0, _redux.combineReducers)({
  posts: _reducer.postReducer,
  comments: _reducer.commentReducer
});
var store = (0, _redux.createStore)(rootReducer, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk.default)));
var root = _client.default.createRoot(document.getElementById('root'));
var App = function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.StrictMode, null, /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: store
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react.default.createElement(_Main.default, null))));
};

// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <BrowserRouter>
//         <Main />
//       </BrowserRouter>
//     </Provider>
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
exports.App = App;
(0, _reportWebVitals.default)();