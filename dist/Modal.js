"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Modal;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function Modal(_ref) {
  var isOpen = _ref.isOpen,
    onClose = _ref.onClose,
    children = _ref.children;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative bg-white rounded-lg shadow-lg max-w-md w-full p-6"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClose,
    className: "absolute top-1 right-3 text-gray-500 hover:text-black text-lg",
    "aria-label": "Close modal"
  }, "\xD7"), children));
}