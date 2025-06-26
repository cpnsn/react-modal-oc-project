import React from "react";
export default function Modal(_ref) {
  var {
    isOpen,
    onClose,
    children
  } = _ref;
  if (!isOpen) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative bg-white rounded-lg shadow-lg max-w-md w-full p-6"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    className: "absolute top-1 right-3 text-gray-500 hover:text-black text-lg",
    "aria-label": "Close modal"
  }, "\xD7"), children));
}