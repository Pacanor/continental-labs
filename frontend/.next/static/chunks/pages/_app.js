(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/_app"],{

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/next/node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _regeneratorRuntime = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var _asyncToGenerator = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/asyncToGenerator.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
exports.NextWebVitalsMetric = _utils.NextWebVitalsMetric;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(_ref) {
    var Component, ctx, pageProps;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            Component = _ref.Component, ctx = _ref.ctx;
            _context.next = 3;
            return (0, _utils.loadGetInitialProps)(Component, ctx);

          case 3:
            pageProps = _context.sent;
            return _context.abrupt("return", {
              pageProps: pageProps
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _appGetInitialProps.apply(this, arguments);
}

var App = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(App, _react$default$Compon);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      return /*#__PURE__*/_react["default"].createElement(Component, pageProps);
    }
  }]);

  return App;
}(_react["default"].Component);

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/pages/_error.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/pages/_error.js ***!
  \************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

var _inherits = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js"));

var statusCodes = {
  400: 'Bad Request',
  404: 'This page could not be found',
  405: 'Method Not Allowed',
  500: 'Internal Server Error'
};

function _getInitialProps(_ref) {
  var res = _ref.res,
      err = _ref.err;
  var statusCode = res && res.statusCode ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode: statusCode
  };
}
/**
* `Error` component used for handling errors.
*/


var Error = /*#__PURE__*/function (_react$default$Compon) {
  _inherits(Error, _react$default$Compon);

  var _super = _createSuper(Error);

  function Error() {
    _classCallCheck(this, Error);

    return _super.apply(this, arguments);
  }

  _createClass(Error, [{
    key: "render",
    value: function render() {
      var statusCode = this.props.statusCode;
      var title = this.props.title || statusCodes[statusCode] || 'An unexpected error has occurred';
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.error
      }, /*#__PURE__*/_react["default"].createElement(_head["default"], null, /*#__PURE__*/_react["default"].createElement("title", null, statusCode ? "".concat(statusCode, ": ").concat(title) : 'Application error: a client-side exception has occurred')), /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("style", {
        dangerouslySetInnerHTML: {
          __html: 'body { margin: 0 }'
        }
      }), statusCode ? /*#__PURE__*/_react["default"].createElement("h1", {
        style: styles.h1
      }, statusCode) : null, /*#__PURE__*/_react["default"].createElement("div", {
        style: styles.desc
      }, /*#__PURE__*/_react["default"].createElement("h2", {
        style: styles.h2
      }, this.props.title || statusCode ? title : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, "Application error: a client-side exception has occurred (", /*#__PURE__*/_react["default"].createElement("a", {
        href: "https://nextjs.org/docs/messages/client-side-exception-occurred"
      }, "developer guidance"), ")"), "."))));
    }
  }]);

  return Error;
}(_react["default"].Component);

exports.default = Error;
Error.displayName = 'ErrorPage';
Error.getInitialProps = _getInitialProps;
Error.origGetInitialProps = _getInitialProps;
var styles = {
  error: {
    color: '#000',
    background: '#fff',
    fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
    height: '100vh',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  desc: {
    display: 'inline-block',
    textAlign: 'left',
    lineHeight: '49px',
    height: '49px',
    verticalAlign: 'middle'
  },
  h1: {
    display: 'inline-block',
    borderRight: '1px solid rgba(0, 0, 0,.3)',
    margin: 0,
    marginRight: '20px',
    padding: '10px 23px 10px 0',
    fontSize: '24px',
    fontWeight: 500,
    verticalAlign: 'top'
  },
  h2: {
    fontSize: '14px',
    fontWeight: 'normal',
    lineHeight: 'inherit',
    margin: 0,
    padding: 0
  }
};

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/error */ "./node_modules/next/error.js");
/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-seo */ "./node_modules/next-seo/lib/next-seo.module.js");
/* harmony import */ var utils_media__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/media */ "./utils/media.js");
/* harmony import */ var utils_api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/api */ "./utils/api.js");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_11__);
/* module decorator */ module = __webpack_require__.hmd(module);






var _jsxFileName = "C:\\Development\\ContinentalDiagnostics\\strapi\\continental-labs\\frontend\\pages\\_app.js",
    _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }










var MyApp = function MyApp(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;
  // Extract the data we need
  var global = pageProps.global;

  if (global == null) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_6___default()), {
      statusCode: 404
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 12
    }, _this);
  }

  var _global$attributes = global.attributes,
      metadata = _global$attributes.metadata,
      favicon = _global$attributes.favicon,
      metaTitleSuffix = _global$attributes.metaTitleSuffix;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(favicon.data.attributes.url)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(next_seo__WEBPACK_IMPORTED_MODULE_8__.DefaultSeo, {
      titleTemplate: "%s | ".concat(metaTitleSuffix),
      title: "Page",
      description: metadata.metaDescription,
      openGraph: {
        images: Object.values(metadata.shareImage.data.attributes.formats).map(function (image) {
          return {
            url: (0,utils_media__WEBPACK_IMPORTED_MODULE_9__.getStrapiMedia)(image.url),
            width: image.width,
            height: image.height
          };
        })
      },
      twitter: {
        cardType: metadata.twitterCardType,
        handle: metadata.twitterUsername
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
}; // getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So [[...slug]] pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949


_c = MyApp;

MyApp.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(appContext) {
    var appProps, globalLocale;
    return C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("appContext: ", appContext); // Calls page's `getInitialProps` and fills `appProps.pageProps`

            _context.next = 3;
            return next_app__WEBPACK_IMPORTED_MODULE_4___default().getInitialProps(appContext);

          case 3:
            appProps = _context.sent;
            _context.next = 6;
            return (0,utils_api__WEBPACK_IMPORTED_MODULE_10__.getGlobalData)(appContext.router.locale);

          case 6:
            globalLocale = _context.sent;
            return _context.abrupt("return", _objectSpread(_objectSpread({}, appProps), {}, {
              pageProps: {
                global: globalLocale
              }
            }));

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

var _c;

$RefreshReg$(_c, "MyApp");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/api.js":
/*!**********************!*\
  !*** ./utils/api.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiURL": function() { return /* binding */ getStrapiURL; },
/* harmony export */   "fetchAPI": function() { return /* binding */ fetchAPI; },
/* harmony export */   "getPageData": function() { return /* binding */ getPageData; },
/* harmony export */   "getGlobalData": function() { return /* binding */ getGlobalData; }
/* harmony export */ });
/* harmony import */ var C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! qs */ "./node_modules/qs/lib/index.js");
/* harmony import */ var qs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function getStrapiURL(path) {
  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(path);
}
/**
 * Helper to make GET requests to Strapi API endpoints
 * @param {string} path Path of the API route
 * @param {Object} urlParamsObject URL params object, will be stringified
 * @param {RequestInit} options Options passed to fetch
 * @returns Parsed API call response
 */

function fetchAPI(_x) {
  return _fetchAPI.apply(this, arguments);
}
/**
 *
 * @param {Object} options
 * @param {string} options.slug The page's slug
 * @param {string} options.locale The current locale specified in router.locale
 * @param {boolean} options.preview router isPreview value
 */

function _fetchAPI() {
  _fetchAPI = (0,C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(path) {
    var urlParamsObject,
        options,
        mergedOptions,
        queryString,
        requestUrl,
        response,
        data,
        _args = arguments;
    return C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            urlParamsObject = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            options = _args.length > 2 && _args[2] !== undefined ? _args[2] : {};
            // Merge default and user options
            mergedOptions = _objectSpread({
              headers: {
                "Content-Type": "application/json"
              }
            }, options); // Build request URL

            queryString = qs__WEBPACK_IMPORTED_MODULE_3___default().stringify(urlParamsObject);
            requestUrl = "".concat(getStrapiURL("/api".concat(path).concat(queryString ? "?".concat(queryString) : ""))); // Trigger API call

            _context.next = 7;
            return fetch(requestUrl, mergedOptions);

          case 7:
            response = _context.sent;

            if (response.ok) {
              _context.next = 11;
              break;
            }

            console.error(response.statusText);
            throw new Error("An error occured please try again");

          case 11:
            _context.next = 13;
            return response.json();

          case 13:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchAPI.apply(this, arguments);
}

function getPageData(_x2) {
  return _getPageData.apply(this, arguments);
} // Get site data from Strapi (metadata, navbar, footer...)

function _getPageData() {
  _getPageData = (0,C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(_ref) {
    var _pagesData$data;

    var slug, locale, preview, gqlEndpoint, pagesRes, pagesData;
    return C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            slug = _ref.slug, locale = _ref.locale, preview = _ref.preview;
            // Find the pages that match this slug
            gqlEndpoint = getStrapiURL("/graphql");
            _context2.next = 4;
            return fetch(gqlEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n        fragment FileParts on UploadFileEntityResponse {\n          data {\n            id\n            attributes {\n              alternativeText\n              width\n              height\n              mime\n              url\n              formats\n            }\n          }\n        }\n        query GetPages(\n          $slug: String!\n          $publicationState: PublicationState!\n          $locale: I18NLocaleCode!\n        ) {        \n          pages(\n            filters: { slug: { eq: $slug } }\n            publicationState: $publicationState\n            locale: $locale\n          ) {\n            data {\n              id\n              attributes {\n                locale\n                localizations {\n                  data {\n                    id\n                    attributes {\n                      locale\n                    }\n                  }\n                }\n                slug\n                metadata {\n                  metaTitle\n                  metaDescription\n                  shareImage {\n                    ...FileParts\n                  }\n                  twitterCardType\n                  twitterUsername\n                }\n                contentSections {\n                  __typename\n                  ... on ComponentSectionsBottomActions {\n                    id\n                    title\n                    buttons {\n                      id\n                      newTab\n                      text\n                      type\n                      url\n                    }\n                  }\n                  ... on ComponentSectionsHero {\n                    id\n                    buttons {\n                      id\n                      newTab\n                      text\n                      type\n                      url\n                    }\n                    title\n                    description\n                    label\n                    picture {\n                      ...FileParts\n                    }\n                  }\n                  ... on ComponentSectionsFeatureColumnsGroup {\n                    id\n                    features {\n                      id\n                      description\n                      icon {\n                        ...FileParts\n                      }\n                      title\n                    }\n                  }\n                  ... on ComponentSectionsFeatureRowsGroup {\n                    id\n                    features {\n                      id\n                      description\n                      link {\n                        id\n                        newTab\n                        text\n                        url\n                      }\n                      media {\n                        ...FileParts\n                      }\n                      title\n                    }\n                  }\n                  ... on ComponentSectionsTestimonialsGroup {\n                    id\n                    description\n                    link {\n                      id\n                      newTab\n                      text\n                      url\n                    }\n                    logos {\n                      id\n                      title\n                      logo {\n                        ...FileParts\n                      }\n                    }\n                    testimonials {\n                      id\n                      logo {\n                        ...FileParts\n                      }\n                      picture {\n                        ...FileParts\n                      }\n                      text\n                      authorName\n                      authorTitle\n                      link\n                    }\n                    title\n                  }\n                  ... on ComponentSectionsLargeVideo {\n                    id\n                    description\n                    title\n                    poster {\n                      ...FileParts\n                    }\n                    video {\n                      ...FileParts\n                    }\n                  }\n                  ... on ComponentSectionsRichText {\n                    id\n                    content\n                  }\n                  ... on ComponentSectionsPricing {\n                    id\n                    title\n                    plans {\n                      description\n                      features {\n                        id\n                        name\n                      }\n                      id\n                      isRecommended\n                      name\n                      price\n                      pricePeriod\n                    }\n                  }\n                  ... on ComponentSectionsLeadForm {\n                    id\n                    emailPlaceholder\n                    location\n                    submitButton {\n                      id\n                      text\n                      type\n                    }\n                    title\n                  }\n                }\n              }\n            }\n          }\n        }      \n      ",
                variables: {
                  slug: slug,
                  publicationState: preview ? "PREVIEW" : "LIVE",
                  locale: locale
                }
              })
            });

          case 4:
            pagesRes = _context2.sent;
            _context2.next = 7;
            return pagesRes.json();

          case 7:
            pagesData = _context2.sent;

            if (!(((_pagesData$data = pagesData.data) === null || _pagesData$data === void 0 ? void 0 : _pagesData$data.pages) == null || pagesData.data.pages.length === 0)) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", null);

          case 10:
            return _context2.abrupt("return", pagesData.data.pages.data[0]);

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getPageData.apply(this, arguments);
}

function getGlobalData(_x3) {
  return _getGlobalData.apply(this, arguments);
}

function _getGlobalData() {
  _getGlobalData = (0,C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3(locale) {
    var gqlEndpoint, globalRes, global;
    return C_Development_ContinentalDiagnostics_strapi_continental_labs_frontend_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            gqlEndpoint = getStrapiURL("/graphql");
            _context3.next = 3;
            return fetch(gqlEndpoint, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({
                query: "\n        fragment FileParts on UploadFileEntityResponse {\n          data {\n            id\n            attributes {\n              alternativeText\n              width\n              height\n              mime\n              url\n              formats\n            }\n          }\n        }\n        query GetGlobal($locale: I18NLocaleCode!) {\n          global(locale: $locale) {\n            data {\n              id\n              attributes {\n                favicon {\n                  ...FileParts\n                }\n                metadata {\n                  metaTitle\n                  metaDescription\n                  shareImage {\n                    ...FileParts\n                  }\n                  twitterCardType\n                  twitterUsername\n                }\n                metaTitleSuffix\n                notificationBanner {\n                  type\n                  text\n                }\n                navbar {\n                  logo {\n                    ...FileParts\n                  }\n                  links {\n                    id\n                    url\n                    newTab\n                    text\n                  }\n                  button {\n                    id\n                    url\n                    newTab\n                    text\n                    type\n                  }\n                }\n                footer {\n                  logo {\n                    ...FileParts\n                  }\n                  smallText\n                  columns {\n                    id\n                    title\n                    links {\n                      id\n                      url\n                      newTab\n                      text\n                    }\n                  }\n                }\n              }\n            }\n          }\n        }      \n      ",
                variables: {
                  locale: locale
                }
              })
            });

          case 3:
            globalRes = _context3.sent;
            _context3.next = 6;
            return globalRes.json();

          case 6:
            global = _context3.sent;
            return _context3.abrupt("return", global.data.global);

          case 8:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getGlobalData.apply(this, arguments);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./utils/media.js":
/*!************************!*\
  !*** ./utils/media.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStrapiMedia": function() { return /* binding */ getStrapiMedia; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
/* provided dependency */ var process = __webpack_require__(/*! process */ "./node_modules/process/browser.js");
function getStrapiMedia(url) {
  if (url == null) {
    return null;
  } // Return the full URL if the media is hosted on an external provider


  if (url.startsWith("http") || url.startsWith("//")) {
    return url;
  } // Otherwise prepend the URL path with the Strapi URL


  return "".concat(process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337").concat(url);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/call-bind/callBound.js":
/*!*********************************************!*\
  !*** ./node_modules/call-bind/callBound.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var callBind = __webpack_require__(/*! ./ */ "./node_modules/call-bind/index.js");

var $indexOf = callBind(GetIntrinsic('String.prototype.indexOf'));

module.exports = function callBoundIntrinsic(name, allowMissing) {
	var intrinsic = GetIntrinsic(name, !!allowMissing);
	if (typeof intrinsic === 'function' && $indexOf(name, '.prototype.') > -1) {
		return callBind(intrinsic);
	}
	return intrinsic;
};


/***/ }),

/***/ "./node_modules/call-bind/index.js":
/*!*****************************************!*\
  !*** ./node_modules/call-bind/index.js ***!
  \*****************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");

var $apply = GetIntrinsic('%Function.prototype.apply%');
var $call = GetIntrinsic('%Function.prototype.call%');
var $reflectApply = GetIntrinsic('%Reflect.apply%', true) || bind.call($call, $apply);

var $gOPD = GetIntrinsic('%Object.getOwnPropertyDescriptor%', true);
var $defineProperty = GetIntrinsic('%Object.defineProperty%', true);
var $max = GetIntrinsic('%Math.max%');

if ($defineProperty) {
	try {
		$defineProperty({}, 'a', { value: 1 });
	} catch (e) {
		// IE 8 has a broken defineProperty
		$defineProperty = null;
	}
}

module.exports = function callBind(originalFunction) {
	var func = $reflectApply(bind, $call, arguments);
	if ($gOPD && $defineProperty) {
		var desc = $gOPD(func, 'length');
		if (desc.configurable) {
			// original length, plus the receiver, minus any additional arguments (after the receiver)
			$defineProperty(
				func,
				'length',
				{ value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
			);
		}
	}
	return func;
};

var applyBind = function applyBind() {
	return $reflectApply(bind, $apply, arguments);
};

if ($defineProperty) {
	$defineProperty(module.exports, 'apply', { value: applyBind });
} else {
	module.exports.apply = applyBind;
}


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/***/ (function(module) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/get-intrinsic/index.js":
/*!*********************************************!*\
  !*** ./node_modules/get-intrinsic/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var undefined;

var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;

// eslint-disable-next-line consistent-return
var getEvalledConstructor = function (expressionSyntax) {
	try {
		return $Function('"use strict"; return (' + expressionSyntax + ').constructor;')();
	} catch (e) {}
};

var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
	try {
		$gOPD({}, '');
	} catch (e) {
		$gOPD = null; // this is IE 8, which has a broken gOPD
	}
}

var throwTypeError = function () {
	throw new $TypeError();
};
var ThrowTypeError = $gOPD
	? (function () {
		try {
			// eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
			arguments.callee; // IE 8 does not throw here
			return throwTypeError;
		} catch (calleeThrows) {
			try {
				// IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
				return $gOPD(arguments, 'callee').get;
			} catch (gOPDthrows) {
				return throwTypeError;
			}
		}
	}())
	: throwTypeError;

var hasSymbols = __webpack_require__(/*! has-symbols */ "./node_modules/has-symbols/index.js")();

var getProto = Object.getPrototypeOf || function (x) { return x.__proto__; }; // eslint-disable-line no-proto

var needsEval = {};

var TypedArray = typeof Uint8Array === 'undefined' ? undefined : getProto(Uint8Array);

var INTRINSICS = {
	'%AggregateError%': typeof AggregateError === 'undefined' ? undefined : AggregateError,
	'%Array%': Array,
	'%ArrayBuffer%': typeof ArrayBuffer === 'undefined' ? undefined : ArrayBuffer,
	'%ArrayIteratorPrototype%': hasSymbols ? getProto([][Symbol.iterator]()) : undefined,
	'%AsyncFromSyncIteratorPrototype%': undefined,
	'%AsyncFunction%': needsEval,
	'%AsyncGenerator%': needsEval,
	'%AsyncGeneratorFunction%': needsEval,
	'%AsyncIteratorPrototype%': needsEval,
	'%Atomics%': typeof Atomics === 'undefined' ? undefined : Atomics,
	'%BigInt%': typeof BigInt === 'undefined' ? undefined : BigInt,
	'%Boolean%': Boolean,
	'%DataView%': typeof DataView === 'undefined' ? undefined : DataView,
	'%Date%': Date,
	'%decodeURI%': decodeURI,
	'%decodeURIComponent%': decodeURIComponent,
	'%encodeURI%': encodeURI,
	'%encodeURIComponent%': encodeURIComponent,
	'%Error%': Error,
	'%eval%': eval, // eslint-disable-line no-eval
	'%EvalError%': EvalError,
	'%Float32Array%': typeof Float32Array === 'undefined' ? undefined : Float32Array,
	'%Float64Array%': typeof Float64Array === 'undefined' ? undefined : Float64Array,
	'%FinalizationRegistry%': typeof FinalizationRegistry === 'undefined' ? undefined : FinalizationRegistry,
	'%Function%': $Function,
	'%GeneratorFunction%': needsEval,
	'%Int8Array%': typeof Int8Array === 'undefined' ? undefined : Int8Array,
	'%Int16Array%': typeof Int16Array === 'undefined' ? undefined : Int16Array,
	'%Int32Array%': typeof Int32Array === 'undefined' ? undefined : Int32Array,
	'%isFinite%': isFinite,
	'%isNaN%': isNaN,
	'%IteratorPrototype%': hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined,
	'%JSON%': typeof JSON === 'object' ? JSON : undefined,
	'%Map%': typeof Map === 'undefined' ? undefined : Map,
	'%MapIteratorPrototype%': typeof Map === 'undefined' || !hasSymbols ? undefined : getProto(new Map()[Symbol.iterator]()),
	'%Math%': Math,
	'%Number%': Number,
	'%Object%': Object,
	'%parseFloat%': parseFloat,
	'%parseInt%': parseInt,
	'%Promise%': typeof Promise === 'undefined' ? undefined : Promise,
	'%Proxy%': typeof Proxy === 'undefined' ? undefined : Proxy,
	'%RangeError%': RangeError,
	'%ReferenceError%': ReferenceError,
	'%Reflect%': typeof Reflect === 'undefined' ? undefined : Reflect,
	'%RegExp%': RegExp,
	'%Set%': typeof Set === 'undefined' ? undefined : Set,
	'%SetIteratorPrototype%': typeof Set === 'undefined' || !hasSymbols ? undefined : getProto(new Set()[Symbol.iterator]()),
	'%SharedArrayBuffer%': typeof SharedArrayBuffer === 'undefined' ? undefined : SharedArrayBuffer,
	'%String%': String,
	'%StringIteratorPrototype%': hasSymbols ? getProto(''[Symbol.iterator]()) : undefined,
	'%Symbol%': hasSymbols ? Symbol : undefined,
	'%SyntaxError%': $SyntaxError,
	'%ThrowTypeError%': ThrowTypeError,
	'%TypedArray%': TypedArray,
	'%TypeError%': $TypeError,
	'%Uint8Array%': typeof Uint8Array === 'undefined' ? undefined : Uint8Array,
	'%Uint8ClampedArray%': typeof Uint8ClampedArray === 'undefined' ? undefined : Uint8ClampedArray,
	'%Uint16Array%': typeof Uint16Array === 'undefined' ? undefined : Uint16Array,
	'%Uint32Array%': typeof Uint32Array === 'undefined' ? undefined : Uint32Array,
	'%URIError%': URIError,
	'%WeakMap%': typeof WeakMap === 'undefined' ? undefined : WeakMap,
	'%WeakRef%': typeof WeakRef === 'undefined' ? undefined : WeakRef,
	'%WeakSet%': typeof WeakSet === 'undefined' ? undefined : WeakSet
};

var doEval = function doEval(name) {
	var value;
	if (name === '%AsyncFunction%') {
		value = getEvalledConstructor('async function () {}');
	} else if (name === '%GeneratorFunction%') {
		value = getEvalledConstructor('function* () {}');
	} else if (name === '%AsyncGeneratorFunction%') {
		value = getEvalledConstructor('async function* () {}');
	} else if (name === '%AsyncGenerator%') {
		var fn = doEval('%AsyncGeneratorFunction%');
		if (fn) {
			value = fn.prototype;
		}
	} else if (name === '%AsyncIteratorPrototype%') {
		var gen = doEval('%AsyncGenerator%');
		if (gen) {
			value = getProto(gen.prototype);
		}
	}

	INTRINSICS[name] = value;

	return value;
};

var LEGACY_ALIASES = {
	'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
	'%ArrayPrototype%': ['Array', 'prototype'],
	'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
	'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
	'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
	'%ArrayProto_values%': ['Array', 'prototype', 'values'],
	'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
	'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
	'%AsyncGeneratorPrototype%': ['AsyncGeneratorFunction', 'prototype', 'prototype'],
	'%BooleanPrototype%': ['Boolean', 'prototype'],
	'%DataViewPrototype%': ['DataView', 'prototype'],
	'%DatePrototype%': ['Date', 'prototype'],
	'%ErrorPrototype%': ['Error', 'prototype'],
	'%EvalErrorPrototype%': ['EvalError', 'prototype'],
	'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
	'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
	'%FunctionPrototype%': ['Function', 'prototype'],
	'%Generator%': ['GeneratorFunction', 'prototype'],
	'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
	'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
	'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
	'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
	'%JSONParse%': ['JSON', 'parse'],
	'%JSONStringify%': ['JSON', 'stringify'],
	'%MapPrototype%': ['Map', 'prototype'],
	'%NumberPrototype%': ['Number', 'prototype'],
	'%ObjectPrototype%': ['Object', 'prototype'],
	'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
	'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
	'%PromisePrototype%': ['Promise', 'prototype'],
	'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
	'%Promise_all%': ['Promise', 'all'],
	'%Promise_reject%': ['Promise', 'reject'],
	'%Promise_resolve%': ['Promise', 'resolve'],
	'%RangeErrorPrototype%': ['RangeError', 'prototype'],
	'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
	'%RegExpPrototype%': ['RegExp', 'prototype'],
	'%SetPrototype%': ['Set', 'prototype'],
	'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
	'%StringPrototype%': ['String', 'prototype'],
	'%SymbolPrototype%': ['Symbol', 'prototype'],
	'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
	'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
	'%TypeErrorPrototype%': ['TypeError', 'prototype'],
	'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
	'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
	'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
	'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
	'%URIErrorPrototype%': ['URIError', 'prototype'],
	'%WeakMapPrototype%': ['WeakMap', 'prototype'],
	'%WeakSetPrototype%': ['WeakSet', 'prototype']
};

var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var hasOwn = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);

/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */
var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */
var stringToPath = function stringToPath(string) {
	var first = $strSlice(string, 0, 1);
	var last = $strSlice(string, -1);
	if (first === '%' && last !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected closing `%`');
	} else if (last === '%' && first !== '%') {
		throw new $SyntaxError('invalid intrinsic syntax, expected opening `%`');
	}
	var result = [];
	$replace(string, rePropName, function (match, number, quote, subString) {
		result[result.length] = quote ? $replace(subString, reEscapeChar, '$1') : number || match;
	});
	return result;
};
/* end adaptation */

var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
	var intrinsicName = name;
	var alias;
	if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
		alias = LEGACY_ALIASES[intrinsicName];
		intrinsicName = '%' + alias[0] + '%';
	}

	if (hasOwn(INTRINSICS, intrinsicName)) {
		var value = INTRINSICS[intrinsicName];
		if (value === needsEval) {
			value = doEval(intrinsicName);
		}
		if (typeof value === 'undefined' && !allowMissing) {
			throw new $TypeError('intrinsic ' + name + ' exists, but is not available. Please file an issue!');
		}

		return {
			alias: alias,
			name: intrinsicName,
			value: value
		};
	}

	throw new $SyntaxError('intrinsic ' + name + ' does not exist!');
};

module.exports = function GetIntrinsic(name, allowMissing) {
	if (typeof name !== 'string' || name.length === 0) {
		throw new $TypeError('intrinsic name must be a non-empty string');
	}
	if (arguments.length > 1 && typeof allowMissing !== 'boolean') {
		throw new $TypeError('"allowMissing" argument must be a boolean');
	}

	var parts = stringToPath(name);
	var intrinsicBaseName = parts.length > 0 ? parts[0] : '';

	var intrinsic = getBaseIntrinsic('%' + intrinsicBaseName + '%', allowMissing);
	var intrinsicRealName = intrinsic.name;
	var value = intrinsic.value;
	var skipFurtherCaching = false;

	var alias = intrinsic.alias;
	if (alias) {
		intrinsicBaseName = alias[0];
		$spliceApply(parts, $concat([0, 1], alias));
	}

	for (var i = 1, isOwn = true; i < parts.length; i += 1) {
		var part = parts[i];
		var first = $strSlice(part, 0, 1);
		var last = $strSlice(part, -1);
		if (
			(
				(first === '"' || first === "'" || first === '`')
				|| (last === '"' || last === "'" || last === '`')
			)
			&& first !== last
		) {
			throw new $SyntaxError('property names with quotes must have matching quotes');
		}
		if (part === 'constructor' || !isOwn) {
			skipFurtherCaching = true;
		}

		intrinsicBaseName += '.' + part;
		intrinsicRealName = '%' + intrinsicBaseName + '%';

		if (hasOwn(INTRINSICS, intrinsicRealName)) {
			value = INTRINSICS[intrinsicRealName];
		} else if (value != null) {
			if (!(part in value)) {
				if (!allowMissing) {
					throw new $TypeError('base intrinsic for ' + name + ' exists, but the property is not available.');
				}
				return void undefined;
			}
			if ($gOPD && (i + 1) >= parts.length) {
				var desc = $gOPD(value, part);
				isOwn = !!desc;

				// By convention, when a data property is converted to an accessor
				// property to emulate a data property that does not suffer from
				// the override mistake, that accessor's getter is marked with
				// an `originalValue` property. Here, when we detect this, we
				// uphold the illusion by pretending to see that original data
				// property, i.e., returning the value rather than the getter
				// itself.
				if (isOwn && 'get' in desc && !('originalValue' in desc.get)) {
					value = desc.get;
				} else {
					value = value[part];
				}
			} else {
				isOwn = hasOwn(value, part);
				value = value[part];
			}

			if (isOwn && !skipFurtherCaching) {
				INTRINSICS[intrinsicRealName] = value;
			}
		}
	}
	return value;
};


/***/ }),

/***/ "./node_modules/has-symbols/index.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/index.js ***!
  \*******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var origSymbol = typeof Symbol !== 'undefined' && Symbol;
var hasSymbolSham = __webpack_require__(/*! ./shams */ "./node_modules/has-symbols/shams.js");

module.exports = function hasNativeSymbols() {
	if (typeof origSymbol !== 'function') { return false; }
	if (typeof Symbol !== 'function') { return false; }
	if (typeof origSymbol('foo') !== 'symbol') { return false; }
	if (typeof Symbol('bar') !== 'symbol') { return false; }

	return hasSymbolSham();
};


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/***/ (function(module) {

"use strict";


/* eslint complexity: [2, 18], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next-seo/lib/next-seo.module.js":
/*!******************************************************!*\
  !*** ./node_modules/next-seo/lib/next-seo.module.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArticleJsonLd": function() { return /* binding */ ArticleJsonLd; },
/* harmony export */   "BlogJsonLd": function() { return /* binding */ BlogJsonLd; },
/* harmony export */   "BreadcrumbJsonLd": function() { return /* binding */ BreadCrumbJsonLd; },
/* harmony export */   "CorporateContactJsonLd": function() { return /* binding */ CorporateContactJsonLd; },
/* harmony export */   "CourseJsonLd": function() { return /* binding */ CourseJsonLd; },
/* harmony export */   "DatasetJsonLd": function() { return /* binding */ DatasetJsonLd; },
/* harmony export */   "DefaultSeo": function() { return /* binding */ _default; },
/* harmony export */   "EventJsonLd": function() { return /* binding */ EventJsonLd; },
/* harmony export */   "FAQPageJsonLd": function() { return /* binding */ FAQPageJsonLd; },
/* harmony export */   "JobPostingJsonLd": function() { return /* binding */ JobPostingJsonLd; },
/* harmony export */   "LocalBusinessJsonLd": function() { return /* binding */ LocalBusinessJsonLd; },
/* harmony export */   "LogoJsonLd": function() { return /* binding */ LogoJsonLd; },
/* harmony export */   "NewsArticleJsonLd": function() { return /* binding */ NewsArticleJsonLd; },
/* harmony export */   "NextSeo": function() { return /* binding */ _default$1; },
/* harmony export */   "ProductJsonLd": function() { return /* binding */ ProductJsonLd; },
/* harmony export */   "RecipeJsonLd": function() { return /* binding */ RecipeJsonLd; },
/* harmony export */   "SocialProfileJsonLd": function() { return /* binding */ SocialProfileJsonLd; }
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var defaults = {
  templateTitle: '',
  noindex: false,
  nofollow: false,
  defaultOpenGraphImageWidth: 0,
  defaultOpenGraphImageHeight: 0,
  defaultOpenGraphVideoWidth: 0,
  defaultOpenGraphVideoHeight: 0
};

var buildTags = function buildTags(config) {
  var tagsToRender = [];

  if (config.titleTemplate) {
    defaults.templateTitle = config.titleTemplate;
  }

  var updatedTitle = '';

  if (config.title) {
    updatedTitle = config.title;

    if (defaults.templateTitle) {
      updatedTitle = defaults.templateTitle.replace(/%s/g, function () {
        return updatedTitle;
      });
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("title", {
      key: "title"
    }, updatedTitle));
  }

  var noindex = config.noindex || defaults.noindex || config.dangerouslySetAllPagesToNoIndex;
  var nofollow = config.nofollow || defaults.nofollow || config.dangerouslySetAllPagesToNoFollow;

  if (noindex || nofollow) {
    if (config.dangerouslySetAllPagesToNoIndex) {
      defaults.noindex = true;
    }

    if (config.dangerouslySetAllPagesToNoFollow) {
      defaults.nofollow = true;
    }

    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow')
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: (noindex ? 'noindex' : 'index') + "," + (nofollow ? 'nofollow' : 'follow')
    }));
  } else {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "robots",
      name: "robots",
      content: "index,follow"
    }));
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "googlebot",
      name: "googlebot",
      content: "index,follow"
    }));
  }

  if (config.description) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
      key: "description",
      name: "description",
      content: config.description
    }));
  }

  if (config.mobileAlternate) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      rel: "alternate",
      key: "mobileAlternate",
      media: config.mobileAlternate.media,
      href: config.mobileAlternate.href
    }));
  }

  if (config.languageAlternates && config.languageAlternates.length > 0) {
    config.languageAlternates.forEach(function (languageAlternate) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
        rel: "alternate",
        key: "languageAlternate-" + languageAlternate.hrefLang,
        hrefLang: languageAlternate.hrefLang,
        href: languageAlternate.href
      }));
    });
  }

  if (config.twitter) {
    if (config.twitter.cardType) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:card",
        name: "twitter:card",
        content: config.twitter.cardType
      }));
    }

    if (config.twitter.site) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:site",
        name: "twitter:site",
        content: config.twitter.site
      }));
    }

    if (config.twitter.handle) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "twitter:creator",
        name: "twitter:creator",
        content: config.twitter.handle
      }));
    }
  }

  if (config.facebook) {
    if (config.facebook.appId) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "fb:app_id",
        property: "fb:app_id",
        content: config.facebook.appId
      }));
    }
  }

  if (config.openGraph) {
    if (config.openGraph.url || config.canonical) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:url",
        property: "og:url",
        content: config.openGraph.url || config.canonical
      }));
    }

    if (config.openGraph.type) {
      var type = config.openGraph.type.toLowerCase();
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:type",
        property: "og:type",
        content: type
      }));

      if (type === 'profile' && config.openGraph.profile) {
        if (config.openGraph.profile.firstName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:first_name",
            property: "profile:first_name",
            content: config.openGraph.profile.firstName
          }));
        }

        if (config.openGraph.profile.lastName) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:last_name",
            property: "profile:last_name",
            content: config.openGraph.profile.lastName
          }));
        }

        if (config.openGraph.profile.username) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:username",
            property: "profile:username",
            content: config.openGraph.profile.username
          }));
        }

        if (config.openGraph.profile.gender) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "profile:gender",
            property: "profile:gender",
            content: config.openGraph.profile.gender
          }));
        }
      } else if (type === 'book' && config.openGraph.book) {
        if (config.openGraph.book.authors && config.openGraph.book.authors.length) {
          config.openGraph.book.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "book:author:0" + index,
              property: "book:author",
              content: author
            }));
          });
        }

        if (config.openGraph.book.isbn) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "book:isbn",
            property: "book:isbn",
            content: config.openGraph.book.isbn
          }));
        }

        if (config.openGraph.book.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "book:release_date",
            property: "book:release_date",
            content: config.openGraph.book.releaseDate
          }));
        }

        if (config.openGraph.book.tags && config.openGraph.book.tags.length) {
          config.openGraph.book.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "book:tag:0" + index,
              property: "book:tag",
              content: tag
            }));
          });
        }
      } else if (type === 'article' && config.openGraph.article) {
        if (config.openGraph.article.publishedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:published_time",
            property: "article:published_time",
            content: config.openGraph.article.publishedTime
          }));
        }

        if (config.openGraph.article.modifiedTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:modified_time",
            property: "article:modified_time",
            content: config.openGraph.article.modifiedTime
          }));
        }

        if (config.openGraph.article.expirationTime) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:expiration_time",
            property: "article:expiration_time",
            content: config.openGraph.article.expirationTime
          }));
        }

        if (config.openGraph.article.authors && config.openGraph.article.authors.length) {
          config.openGraph.article.authors.forEach(function (author, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "article:author:0" + index,
              property: "article:author",
              content: author
            }));
          });
        }

        if (config.openGraph.article.section) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "article:section",
            property: "article:section",
            content: config.openGraph.article.section
          }));
        }

        if (config.openGraph.article.tags && config.openGraph.article.tags.length) {
          config.openGraph.article.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "article:tag:0" + index,
              property: "article:tag",
              content: tag
            }));
          });
        }
      } else if ((type === 'video.movie' || type === 'video.episode' || type === 'video.tv_show' || type === 'video.other') && config.openGraph.video) {
        if (config.openGraph.video.actors && config.openGraph.video.actors.length) {
          config.openGraph.video.actors.forEach(function (actor, index) {
            if (actor.profile) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
                key: "video:actor:0" + index,
                property: "video:actor",
                content: actor.profile
              }));
            }

            if (actor.role) {
              tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
                key: "video:actor:role:0" + index,
                property: "video:actor:role",
                content: actor.role
              }));
            }
          });
        }

        if (config.openGraph.video.directors && config.openGraph.video.directors.length) {
          config.openGraph.video.directors.forEach(function (director, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:director:0" + index,
              property: "video:director",
              content: director
            }));
          });
        }

        if (config.openGraph.video.writers && config.openGraph.video.writers.length) {
          config.openGraph.video.writers.forEach(function (writer, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:writer:0" + index,
              property: "video:writer",
              content: writer
            }));
          });
        }

        if (config.openGraph.video.duration) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:duration",
            property: "video:duration",
            content: config.openGraph.video.duration.toString()
          }));
        }

        if (config.openGraph.video.releaseDate) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:release_date",
            property: "video:release_date",
            content: config.openGraph.video.releaseDate
          }));
        }

        if (config.openGraph.video.tags && config.openGraph.video.tags.length) {
          config.openGraph.video.tags.forEach(function (tag, index) {
            tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
              key: "video:tag:0" + index,
              property: "video:tag",
              content: tag
            }));
          });
        }

        if (config.openGraph.video.series) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "video:series",
            property: "video:series",
            content: config.openGraph.video.series
          }));
        }
      }
    }

    if (config.openGraph.title || config.title) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:title",
        property: "og:title",
        content: config.openGraph.title || updatedTitle
      }));
    }

    if (config.openGraph.description || config.description) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:description",
        property: "og:description",
        content: config.openGraph.description || config.description
      }));
    } // images


    if (config.defaultOpenGraphImageWidth) {
      defaults.defaultOpenGraphImageWidth = config.defaultOpenGraphImageWidth;
    }

    if (config.defaultOpenGraphImageHeight) {
      defaults.defaultOpenGraphImageHeight = config.defaultOpenGraphImageHeight;
    }

    if (config.openGraph.images && config.openGraph.images.length) {
      config.openGraph.images.forEach(function (image, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
          key: "og:image:0" + index,
          property: "og:image",
          content: image.url
        }));

        if (image.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:alt0" + index,
            property: "og:image:alt",
            content: image.alt
          }));
        }

        if (image.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:width0" + index,
            property: "og:image:width",
            content: image.width.toString()
          }));
        } else if (defaults.defaultOpenGraphImageWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:width0" + index,
            property: "og:image:width",
            content: defaults.defaultOpenGraphImageWidth.toString()
          }));
        }

        if (image.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:height" + index,
            property: "og:image:height",
            content: image.height.toString()
          }));
        } else if (defaults.defaultOpenGraphImageHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:image:height" + index,
            property: "og:image:height",
            content: defaults.defaultOpenGraphImageHeight.toString()
          }));
        }
      });
    } // videos


    if (config.defaultOpenGraphVideoWidth) {
      defaults.defaultOpenGraphVideoWidth = config.defaultOpenGraphVideoWidth;
    }

    if (config.defaultOpenGraphVideoHeight) {
      defaults.defaultOpenGraphVideoHeight = config.defaultOpenGraphVideoHeight;
    }

    if (config.openGraph.videos && config.openGraph.videos.length) {
      config.openGraph.videos.forEach(function (video, index) {
        tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
          key: "og:video:0" + index,
          property: "og:video",
          content: video.url
        }));

        if (video.alt) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:alt0" + index,
            property: "og:video:alt",
            content: video.alt
          }));
        }

        if (video.width) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:width0" + index,
            property: "og:video:width",
            content: video.width.toString()
          }));
        } else if (defaults.defaultOpenGraphVideoWidth) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:width0" + index,
            property: "og:video:width",
            content: defaults.defaultOpenGraphVideoWidth.toString()
          }));
        }

        if (video.height) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:height" + index,
            property: "og:video:height",
            content: video.height.toString()
          }));
        } else if (defaults.defaultOpenGraphVideoHeight) {
          tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
            key: "og:video:height" + index,
            property: "og:video:height",
            content: defaults.defaultOpenGraphVideoHeight.toString()
          }));
        }
      });
    }

    if (config.openGraph.locale) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:locale",
        property: "og:locale",
        content: config.openGraph.locale
      }));
    }

    if (config.openGraph.site_name) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", {
        key: "og:site_name",
        property: "og:site_name",
        content: config.openGraph.site_name
      }));
    }
  }

  if (config.canonical) {
    tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("link", {
      rel: "canonical",
      href: config.canonical,
      key: "canonical"
    }));
  }

  if (config.additionalMetaTags && config.additionalMetaTags.length > 0) {
    config.additionalMetaTags.forEach(function (tag) {
      tagsToRender.push(react__WEBPACK_IMPORTED_MODULE_1___default().createElement("meta", Object.assign({
        key: tag.name ? tag.name : tag.property
      }, tag)));
    });
  }

  return tagsToRender;
};

var _default = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        titleTemplate = _this$props.titleTemplate,
        _this$props$dangerous = _this$props.dangerouslySetAllPagesToNoIndex,
        dangerouslySetAllPagesToNoIndex = _this$props$dangerous === void 0 ? false : _this$props$dangerous,
        _this$props$dangerous2 = _this$props.dangerouslySetAllPagesToNoFollow,
        dangerouslySetAllPagesToNoFollow = _this$props$dangerous2 === void 0 ? false : _this$props$dangerous2,
        description = _this$props.description,
        canonical = _this$props.canonical,
        facebook = _this$props.facebook,
        openGraph = _this$props.openGraph,
        additionalMetaTags = _this$props.additionalMetaTags,
        twitter = _this$props.twitter,
        defaultOpenGraphImageWidth = _this$props.defaultOpenGraphImageWidth,
        defaultOpenGraphImageHeight = _this$props.defaultOpenGraphImageHeight,
        defaultOpenGraphVideoWidth = _this$props.defaultOpenGraphVideoWidth,
        defaultOpenGraphVideoHeight = _this$props.defaultOpenGraphVideoHeight,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, buildTags({
      title: title,
      titleTemplate: titleTemplate,
      dangerouslySetAllPagesToNoIndex: dangerouslySetAllPagesToNoIndex,
      dangerouslySetAllPagesToNoFollow: dangerouslySetAllPagesToNoFollow,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      defaultOpenGraphImageWidth: defaultOpenGraphImageWidth,
      defaultOpenGraphImageHeight: defaultOpenGraphImageHeight,
      defaultOpenGraphVideoWidth: defaultOpenGraphVideoWidth,
      defaultOpenGraphVideoHeight: defaultOpenGraphVideoHeight,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var _default$1 = /*#__PURE__*/function (_Component) {
  _inheritsLoose(_default, _Component);

  function _default() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = _default.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        title = _this$props.title,
        _this$props$noindex = _this$props.noindex,
        noindex = _this$props$noindex === void 0 ? false : _this$props$noindex,
        nofollow = _this$props.nofollow,
        description = _this$props.description,
        canonical = _this$props.canonical,
        openGraph = _this$props.openGraph,
        facebook = _this$props.facebook,
        twitter = _this$props.twitter,
        additionalMetaTags = _this$props.additionalMetaTags,
        titleTemplate = _this$props.titleTemplate,
        mobileAlternate = _this$props.mobileAlternate,
        languageAlternates = _this$props.languageAlternates;
    return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, buildTags({
      title: title,
      noindex: noindex,
      nofollow: nofollow,
      description: description,
      canonical: canonical,
      facebook: facebook,
      openGraph: openGraph,
      additionalMetaTags: additionalMetaTags,
      twitter: twitter,
      titleTemplate: titleTemplate,
      mobileAlternate: mobileAlternate,
      languageAlternates: languageAlternates
    }));
  };

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1__.Component);

var markup = function markup(jsonld) {
  return {
    __html: jsonld
  };
};

var ArticleJsonLd = function ArticleJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Article\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-article"
  }));
};

var BreadCrumbJsonLd = function BreadCrumbJsonLd(_ref) {
  var _ref$itemListElements = _ref.itemListElements,
      itemListElements = _ref$itemListElements === void 0 ? [] : _ref$itemListElements;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"BreadcrumbList\",\n    \"itemListElement\": [\n      " + itemListElements.map(function (itemListElement) {
    return "{\n        \"@type\": \"ListItem\",\n        \"position\": " + itemListElement.position + ",\n        \"item\": {\n          \"@id\": \"" + itemListElement.item + "\",\n          \"name\": \"" + itemListElement.name + "\"\n        }\n      }";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-breadcrumb"
  }));
};

var buildQuestions = function buildQuestions(mainEntity) {
  return "\n  " + mainEntity.map(function (question) {
    return "{\n      \"@type\": \"Question\",\n      \"name\": \"" + question.questionName + "\",\n      \"acceptedAnswer\": {\n        \"@type\": \"Answer\",\n        \"text\": \"" + question.acceptedAnswerText + "\"\n      }\n  }";
  });
};

var FAQPageJsonLd = function FAQPageJsonLd(_ref) {
  var _ref$mainEntity = _ref.mainEntity,
      mainEntity = _ref$mainEntity === void 0 ? [] : _ref$mainEntity;
  var jslonld = "{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"FAQPage\",\n    \"mainEntity\": [" + buildQuestions(mainEntity) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-faq-page"
  }));
};

var buildBaseSalary = function buildBaseSalary(baseSalary) {
  return "\n  \"baseSalary\": {\n    \"@type\": \"MonetaryAmount\",\n    " + (baseSalary.currency ? "\"currency\": \"" + baseSalary.currency + "\"," : '') + "\n    \"value\": {\n      \"@type\": \"QuantitativeValue\",\n      " + (baseSalary.value ? "\"value\": \"" + baseSalary.value + "\"," : '') + "\n      " + (baseSalary.unitText ? "\"unitText\": \"" + baseSalary.unitText + "\"" : '') + "\n    }\n  },\n";
};

var JobPostingJsonLd = function JobPostingJsonLd(_ref) {
  var baseSalary = _ref.baseSalary,
      datePosted = _ref.datePosted,
      description = _ref.description,
      employmentType = _ref.employmentType,
      hiringOrganization = _ref.hiringOrganization,
      jobLocation = _ref.jobLocation,
      applicantLocationRequirements = _ref.applicantLocationRequirements,
      jobLocationType = _ref.jobLocationType,
      title = _ref.title,
      validThrough = _ref.validThrough;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"JobPosting\",\n    " + (baseSalary ? buildBaseSalary(baseSalary) : '') + "\n    \"datePosted\": \"" + datePosted + "\",\n    \"description\": \"" + description + "\",\n    " + (employmentType ? "\"employmentType\": \"" + employmentType + "\"," : '') + "\n    \"hiringOrganization\" : {\n      \"@type\" : \"Organization\",\n      \"name\" : \"" + hiringOrganization.name + "\",\n      \"sameAs\" : \"" + hiringOrganization.sameAs + "\"\n    },\n    \n    \"jobLocation\": {\n      \"@type\": \"Place\",\n      \"address\": {\n        \"@type\": \"PostalAddress\",\n        \"addressLocality\": \"" + jobLocation.addressLocality + "\",\n        \"addressRegion\": \"" + jobLocation.addressRegion + "\",\n        \"postalCode\" : \"" + jobLocation.postalCode + "\",\n        \"streetAddress\" : \"" + jobLocation.streetAddress + "\",\n        \"addressCountry\" : \"" + jobLocation.addressCountry + "\"\n      }\n    },\n    " + (applicantLocationRequirements ? " \"applicantLocationRequirements\": {\n        \"@type\": \"Country\",\n        \"name\": \"" + applicantLocationRequirements + "\"\n    }," : '') + "\n    " + (jobLocationType ? "\"jobLocationType\": \"" + jobLocationType + "\"," : '') + "\n    " + (validThrough ? "\"validThrough\": \"" + validThrough + "\"," : '') + "\n    \"title\": \"" + title + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-jobPosting"
  }));
};

var BlogJsonLd = function BlogJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Blog\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"datePublished\": \"" + datePublished + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"description\": \"" + description + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-blog"
  }));
};

var CourseJsonLd = function CourseJsonLd(_ref) {
  var courseName = _ref.courseName,
      description = _ref.description,
      providerName = _ref.providerName,
      providerUrl = _ref.providerUrl;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Course\",\n    \"name\": \"" + courseName + "\",\n    \"description\": \"" + description + "\",\n    \"provider\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + providerName + "\"" + (providerUrl ? ",\n      \"sameAs\": \"" + providerUrl + "\"" : '') + "\n    }\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-course"
  }));
};

var DatasetJsonLd = function DatasetJsonLd(_ref) {
  var description = _ref.description,
      name = _ref.name,
      license = _ref.license;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Dataset\",\n    \"description\": \"" + description + "\",\n    \"name\": \"" + name + "\"" + (license ? ",\n        \"license\": \"" + license + "\"" : '') + "\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-dataset"
  }));
};

var formatIfArray = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildAddress = (function (address) {
  return "\n  \"address\": {\n    \"@type\": \"PostalAddress\",\n    \"streetAddress\": \"" + address.streetAddress + "\",\n    \"addressLocality\": \"" + address.addressLocality + "\",\n    " + (address.addressRegion ? "\"addressRegion\": \"" + address.addressRegion + "\"," : '') + "\n    \"postalCode\": \"" + address.postalCode + "\",\n    \"addressCountry\": \"" + address.addressCountry + "\"\n  },\n";
});

var buildGeo = function buildGeo(geo) {
  return "\n  \"geo\": {\n    \"@type\": \"GeoCoordinates\",\n    \"latitude\": \"" + geo.latitude + "\",\n    \"longitude\": \"" + geo.longitude + "\"\n  },\n";
};

var buildRating = function buildRating(rating) {
  return "\n  \"aggregateRating\": {\n    \"@type\": \"AggregateRating\",\n    \"ratingValue\": \"" + rating.ratingValue + "\",\n    \"ratingCount\": \"" + rating.ratingCount + "\"\n  },\n";
};

var buildOpeningHours = function buildOpeningHours(openingHours) {
  return "\n  {\n    \"@type\": \"OpeningHoursSpecification\",\n    \"opens\": \"" + openingHours.opens + "\",\n    \"closes\": \"" + openingHours.closes + "\",\n    " + (openingHours.dayOfWeek ? "\"dayOfWeek\": " + formatIfArray(openingHours.dayOfWeek) + "," : '') + "\n    " + (openingHours.validFrom ? "\"validFrom\": \"" + openingHours.validFrom + "\"," : '') + "\n    " + (openingHours.validThrough ? "\"validThrough\": \"" + openingHours.validThrough + "\"" : '') + "\n  }\n";
};

var LocalBusinessJsonLd = function LocalBusinessJsonLd(_ref) {
  var type = _ref.type,
      id = _ref.id,
      name = _ref.name,
      description = _ref.description,
      url = _ref.url,
      telephone = _ref.telephone,
      address = _ref.address,
      geo = _ref.geo,
      images = _ref.images,
      rating = _ref.rating,
      priceRange = _ref.priceRange,
      sameAs = _ref.sameAs,
      openingHours = _ref.openingHours;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"" + type + "\",\n    \"@id\": \"" + id + "\",\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (url ? "\"url\": \"" + url + "\"," : '') + "\n    " + (telephone ? "\"telephone\": \"" + telephone + "\"," : '') + "\n    " + buildAddress(address) + "\n    " + (geo ? "" + buildGeo(geo) : '') + "\n    " + (rating ? "" + buildRating(rating) : '') + "\n    " + (priceRange ? "\"priceRange\": \"" + priceRange + "\"," : '') + "\n    \"image\":" + formatIfArray(images) + ",\n    " + (sameAs ? "\"sameAs\": [" + sameAs.map(function (url) {
    return "\"" + url + "\"";
  }) + "]," : '') + "\n    " + (openingHours ? "\"openingHoursSpecification\": " + (Array.isArray(openingHours) ? "[" + openingHours.map(function (hours) {
    return "" + buildOpeningHours(hours);
  }) + "]" : buildOpeningHours(openingHours)) + "," : '') + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-local-business"
  }));
};

var LogoJsonLd = function LogoJsonLd(_ref) {
  var url = _ref.url,
      logo = _ref.logo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    \"logo\": \"" + logo + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-logo"
  }));
};

var buildBrand = function buildBrand(brand) {
  return "\n  \"brand\": {\n      \"@type\": \"Thing\",\n      \"name\": \"" + brand + "\"\n    },\n";
};

var buildReviewRating = function buildReviewRating(rating) {
  return rating ? "\"reviewRating\": {\n          \"@type\": \"Rating\",\n          " + (rating.bestRating ? "\"bestRating\": \"" + rating.bestRating + "\"," : '') + "\n          " + (rating.worstRating ? "\"worstRating\": \"" + rating.worstRating + "\"," : '') + "\n          \"ratingValue\": \"" + rating.ratingValue + "\"\n        }" : '';
};

var buildAuthor = function buildAuthor(author) {
  return "\n  \"author\": {\n      \"@type\": \"" + author.type + "\",\n      \"name\": \"" + author.name + "\"\n  },\n";
};

var buildPublisher = function buildPublisher(publisher) {
  return "\n  \"publisher\": {\n      \"@type\": \"" + publisher.type + "\",\n      \"name\": \"" + publisher.name + "\"\n  },\n";
};

var buildReviews = function buildReviews(reviews) {
  return "\n\"review\": [\n  " + reviews.map(function (review) {
    return "{\n      \"@type\": \"Review\",\n      " + (review.author ? buildAuthor(review.author) : '') + "\n      " + (review.publisher ? buildPublisher(review.publisher) : '') + "\n      " + (review.datePublished ? "\"datePublished\": \"" + review.datePublished + "\"," : '') + "\n      " + (review.reviewBody ? "\"reviewBody\": \"" + review.reviewBody + "\"," : '') + "\n      " + (review.name ? "\"name\": \"" + review.name + "\"," : '') + "\n      " + buildReviewRating(review.reviewRating) + "\n  }";
  }) + "],";
};

var buildAggregateRating = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\",\n      \"reviewCount\": \"" + aggregateRating.reviewCount + "\"\n    },\n";
}; // TODO: Docs for offers itemCondition & availability
// TODO: Seller type, make dynamic


var buildOffers = function buildOffers(offers) {
  return "\n  {\n    \"@type\": \"Offer\",\n    \"priceCurrency\": \"" + offers.priceCurrency + "\",\n    " + (offers.priceValidUntil ? "\"priceValidUntil\": \"" + offers.priceValidUntil + "\"," : '') + "\n    " + (offers.itemCondition ? "\"itemCondition\": \"" + offers.itemCondition + "\"," : '') + "\n    " + (offers.availability ? "\"availability\": \"" + offers.availability + "\"," : '') + "\n    " + (offers.url ? "\"url\": \"" + offers.url + "\"," : '') + "\n    " + (offers.seller ? "\n      \"seller\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + offers.seller.name + "\"\n    },\n    " : '') + "\n    \"price\": \"" + offers.price + "\"\n  }\n";
};

var ProductJsonLd = function ProductJsonLd(_ref) {
  var productName = _ref.productName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      description = _ref.description,
      sku = _ref.sku,
      gtin8 = _ref.gtin8,
      gtin13 = _ref.gtin13,
      gtin14 = _ref.gtin14,
      mpn = _ref.mpn,
      brand = _ref.brand,
      _ref$reviews = _ref.reviews,
      reviews = _ref$reviews === void 0 ? [] : _ref$reviews,
      aggregateRating = _ref.aggregateRating,
      offers = _ref.offers;
  var jslonld = "{\n    \"@context\": \"http://schema.org/\",\n    \"@type\": \"Product\",\n    \"image\":" + formatIfArray(images) + ",\n    " + (description ? "\"description\": \"" + description + "\"," : '') + "\n    " + (mpn ? "\"mpn\": \"" + mpn + "\"," : '') + "\n    " + (sku ? "\"sku\": \"" + sku + "\"," : '') + "\n    " + (gtin8 ? "\"gtin8\": \"" + gtin8 + "\"," : '') + "\n    " + (gtin13 ? "\"gtin13\": \"" + gtin13 + "\"," : '') + "\n    " + (gtin14 ? "\"gtin14\": \"" + gtin14 + "\"," : '') + "\n    " + (brand ? buildBrand(brand) : '') + "\n    " + (reviews.length ? buildReviews(reviews) : '') + "\n    " + (aggregateRating ? buildAggregateRating(aggregateRating) : '') + "\n    " + (offers ? "\"offers\": " + (Array.isArray(offers) ? "[" + offers.map(function (offer) {
    return "" + buildOffers(offer);
  }) + "]" : buildOffers(offers)) + "," : '') + "\n    \"name\": \"" + productName + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-product"
  }));
};

var SocialProfileJsonLd = function SocialProfileJsonLd(_ref) {
  var type = _ref.type,
      name = _ref.name,
      url = _ref.url,
      _ref$sameAs = _ref.sameAs,
      sameAs = _ref$sameAs === void 0 ? [] : _ref$sameAs;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"" + type + "\",\n    \"name\": \"" + name + "\",\n    \"url\": \"" + url + "\",\n    \"sameAs\": [\n      " + sameAs.map(function (socialUrl) {
    return "\"" + socialUrl + "\"";
  }) + "\n     ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-social"
  }));
};

var formatIfArray$1 = function formatIfArray(value) {
  return Array.isArray(value) ? "[" + value.map(function (val) {
    return "\"" + val + "\"";
  }) + "]" : "\"" + value + "\"";
};

var buildContactPoint = function buildContactPoint(contactPoint) {
  return contactPoint.map(function (contact) {
    return "{\n    \"@type\": \"ContactPoint\",\n    \"telephone\": \"" + contact.telephone + "\",\n    \"contactType\": \"" + contact.contactType + "\"" + (contact.areaServed ? ",\n    \"areaServed\": " + formatIfArray$1(contact.areaServed) : '') + (contact.availableLanguage ? ",\n    \"availableLanguage\": " + formatIfArray$1(contact.availableLanguage) : '') + (contact.contactOption ? ",\n    \"contactOption\": \"" + contact.contactOption + "\"" : '') + "\n    }";
  });
};

var CorporateContactJsonLd = function CorporateContactJsonLd(_ref) {
  var url = _ref.url,
      logo = _ref.logo,
      contactPoint = _ref.contactPoint;
  var jslonld = "{\n    \"@context\": \"https://schema.org\",\n    \"@type\": \"Organization\",\n    \"url\": \"" + url + "\",\n    " + (logo ? "\"logo\": \"" + logo + "\"," : '') + "\n    \"contactPoint\": [" + buildContactPoint(contactPoint) + "]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-corporate-contact"
  }));
};

var NewsArticleJsonLd = function NewsArticleJsonLd(_ref) {
  var url = _ref.url,
      title = _ref.title,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      section = _ref.section,
      keywords = _ref.keywords,
      datePublished = _ref.datePublished,
      _ref$dateCreated = _ref.dateCreated,
      dateCreated = _ref$dateCreated === void 0 ? null : _ref$dateCreated,
      _ref$dateModified = _ref.dateModified,
      dateModified = _ref$dateModified === void 0 ? null : _ref$dateModified,
      authorName = _ref.authorName,
      description = _ref.description,
      body = _ref.body,
      publisherName = _ref.publisherName,
      publisherLogo = _ref.publisherLogo;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"NewsArticle\",\n    \"mainEntityOfPage\": {\n      \"@type\": \"WebPage\",\n      \"@id\": \"" + url + "\"\n    },\n    \"headline\": \"" + title + "\",\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }) + "\n     ],\n    \"articleSection\":\"" + section + "\",\n    \"keywords\": \"" + keywords + "\",    \n    \"datePublished\": \"" + datePublished + "\",\n    \"dateCreated\": \"" + (dateCreated || datePublished) + "\",\n    \"dateModified\": \"" + (dateModified || datePublished) + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"publisher\": {\n      \"@type\": \"Organization\",\n      \"name\": \"" + publisherName + "\",\n      \"logo\": {\n        \"@type\": \"ImageObject\",\n        \"url\": \"" + publisherLogo + "\"\n      }\n    },\n    \"description\": \"" + description + "\",\n    \"articleBody\": \"" + body + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-newsarticle"
  }));
};

var buildLocation = function buildLocation(location) {
  return "\n  \"location\": {\n    \"@type\": \"Place\",\n    " + buildAddress(location.address) + "\n    " + (location.sameAs ? "\"sameAs\": \"" + location.sameAs + "\"," : "") + "\n    \"name\": \"" + location.name + "\"\n  },\n";
};

var EventJsonLd = function EventJsonLd(_ref) {
  var name = _ref.name,
      startDate = _ref.startDate,
      endDate = _ref.endDate,
      location = _ref.location,
      url = _ref.url,
      description = _ref.description,
      images = _ref.images;
  var jslonld = "{\n    \"@context\": \"http://schema.org\",\n    \"@type\": \"Event\",\n    \"startDate\": \"" + startDate + "\",\n    \"endDate\": \"" + endDate + "\",\n    " + buildLocation(location) + "\n    " + (images ? "\"image\":" + formatIfArray(images) + "," : "") + "\n    " + (url ? "\"url\": \"" + url + "\"," : "") + "\n    " + (description ? "\"description\": \"" + description + "\"," : "") + "\n    \"name\": \"" + name + "\"\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-event"
  }));
};

var buildAggregateRating$1 = function buildAggregateRating(aggregateRating) {
  return "\n  \"aggregateRating\": {\n      \"@type\": \"AggregateRating\",\n      \"ratingValue\": \"" + aggregateRating.ratingValue + "\",\n      \"ratingCount\": \"" + aggregateRating.ratingCount + "\"\n    },\n";
};

var buildInstruction = function buildInstruction(instruction) {
  return "{\n  \"@type\": \"HowToStep\",\n  \"name\": \"" + instruction.name + "\",\n  \"text\": \"" + instruction.text + "\",\n  \"url\": \"" + instruction.url + "\",\n  \"image\": \"" + instruction.image + "\"\n}";
};

var buildInteractionStatistic = function buildInteractionStatistic(watchCount) {
  return "\n  \"interactionStatistic\": {\n    \"@type\": \"InteractionCounter\",\n    \"interactionType\": { \"@type\": \"http://schema.org/WatchAction\" },\n    \"userInteractionCount\": " + watchCount + "\n  }\n";
};

var buildVideo = function buildVideo(video) {
  return "\n  \"video\": {\n      \"@type\": \"VideoObject\",\n      \"name\": \"" + video.name + "\",\n      \"thumbnailUrl\": [\n        " + (video.thumbnailUrls || []).map(function (thumbnailUrl) {
    return "\"" + thumbnailUrl + "\"";
  }).join(',') + "\n       ],\n      \"description\": \"" + video.description + "\",\n      \"contentUrl\": \"" + video.contentUrl + "\",\n      \"uploadDate\": \"" + video.uploadDate + "\",\n      \"duration\": \"" + video.duration + "\",\n      " + (video.embedUrl ? "\"embedUrl\": \"" + video.embedUrl + "\"," : "") + "\n      " + (video.expires ? "\"expires\": \"" + video.expires + "\"," : "") + "\n      " + (video.watchCount ? buildInteractionStatistic(video.watchCount) : "") + "\n    },\n";
};

var RecipeJsonLd = function RecipeJsonLd(_ref) {
  var name = _ref.name,
      description = _ref.description,
      authorName = _ref.authorName,
      _ref$images = _ref.images,
      images = _ref$images === void 0 ? [] : _ref$images,
      datePublished = _ref.datePublished,
      prepTime = _ref.prepTime,
      cookTime = _ref.cookTime,
      totalTime = _ref.totalTime,
      keywords = _ref.keywords,
      yields = _ref.yields,
      category = _ref.category,
      cuisine = _ref.cuisine,
      calories = _ref.calories,
      ingredients = _ref.ingredients,
      instructions = _ref.instructions,
      aggregateRating = _ref.aggregateRating,
      video = _ref.video;
  var jslonld = "{\n    \"@context\": \"https://schema.org/\",\n    \"@type\": \"Recipe\",\n    \"name\": \"" + name + "\",\n    \"description\": \"" + description + "\",\n    \"datePublished\": \"" + datePublished + "\",\n    \"author\": {\n      \"@type\": \"Person\",\n      \"name\": \"" + authorName + "\"\n    },\n    \"image\": [\n      " + images.map(function (image) {
    return "\"" + image + "\"";
  }).join(',') + "\n    ],\n    " + (prepTime ? "\"prepTime\": \"" + prepTime + "\"," : "") + "\n    " + (cookTime ? "\"cookTime\": \"" + cookTime + "\"," : "") + "\n    " + (totalTime ? "\"totalTime\": \"" + totalTime + "\"," : "") + "\n    " + (keywords ? "\"keywords\": \"" + keywords + "\"," : "") + "\n    " + (yields ? "\"recipeYield\": \"" + yields + "\"," : "") + "\n    " + (category ? "\"recipeCategory\": \"" + category + "\"," : "") + "\n    " + (cuisine ? "\"recipeCuisine\": \"" + cuisine + "\"," : "") + "\n    " + (calories ? "\"nutrition\": { \"@type\": \"NutritionInformation\", \"calories\": \"" + calories + " calories\" }," : "") + "\n    " + (aggregateRating ? buildAggregateRating$1(aggregateRating) : '') + "\n    " + (video ? buildVideo(video) : '') + "\n    \"recipeIngredient\": [\n      " + ingredients.map(function (ingredient) {
    return "\"" + ingredient + "\"";
  }).join(',') + "\n    ],\n    \"recipeInstructions\": [\n      " + instructions.map(buildInstruction).join(',') + "\n    ]\n  }";
  return react__WEBPACK_IMPORTED_MODULE_1___default().createElement((next_head__WEBPACK_IMPORTED_MODULE_0___default()), null, react__WEBPACK_IMPORTED_MODULE_1___default().createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: markup(jslonld),
    key: "jsonld-recipe"
  }));
};




/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js! ***!
  \**********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/_app",
      function () {
        return __webpack_require__(/*! private-next-pages/_app.js */ "./pages/_app.js");
      }
    ]);
  

/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var api = __webpack_require__(/*! !../node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js */ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = function(element){// These elements should always exist. If they do not,
// this code should fail.
var anchorElement=document.querySelector('#__next_css__DO_NOT_USE__');var parentNode=anchorElement.parentNode;// Normally <head>
// Each style tag should be placed right before our
// anchor. By inserting before and not after, we do not
// need to track the last inserted element.
parentNode.insertBefore(element,anchorElement);};
options.singleton = false;

var update = api(content, options);


if (true) {
  if (!content.locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a,b,isNamedExport){if(!a&&b||a&&!b){return false;}let p;for(p in a){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(a[p]!==b[p]){return false;}}for(p in b){if(isNamedExport&&p==='default'){// eslint-disable-next-line no-continue
continue;}if(!a[p]){return false;}}return true;};
    var oldLocals = content.locals;

    module.hot.accept(
      /*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css",
      function () {
        content = __webpack_require__(/*! !!../node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!../node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./index.css */ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css");

              content = content.__esModule ? content.default : content;

              if (typeof content === 'string') {
                content = [[module.id, content, '']];
              }

              if (!isEqualLocals(oldLocals, content.locals)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = content.locals;

              update(content);
      }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}

module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
/*!************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js ***!
  \************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
const isOldIE=function isOldIE(){let memo;return function memorize(){if(typeof memo==='undefined'){// Test for IE <= 9 as proposed by Browserhacks
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// Tests for existence of standard globals is to allow style-loader
// to operate correctly into non-standard environments
// @see https://github.com/webpack-contrib/style-loader/issues/177
memo=Boolean(window&&document&&document.all&&!window.atob);}return memo;};}();const getTarget=function getTarget(){const memo={};return function memorize(target){if(typeof memo[target]==='undefined'){let styleTarget=document.querySelector(target);// Special case to return head of iframe instead of iframe itself
if(window.HTMLIFrameElement&&styleTarget instanceof window.HTMLIFrameElement){try{// This will throw an exception if access to iframe is blocked
// due to cross-origin restrictions
styleTarget=styleTarget.contentDocument.head;}catch(e){// istanbul ignore next
styleTarget=null;}}memo[target]=styleTarget;}return memo[target];};}();const stylesInDom=[];function getIndexByIdentifier(identifier){let result=-1;for(let i=0;i<stylesInDom.length;i++){if(stylesInDom[i].identifier===identifier){result=i;break;}}return result;}function modulesToDom(list,options){const idCountMap={};const identifiers=[];for(let i=0;i<list.length;i++){const item=list[i];const id=options.base?item[0]+options.base:item[0];const count=idCountMap[id]||0;const identifier=id+' '+count.toString();idCountMap[id]=count+1;const index=getIndexByIdentifier(identifier);const obj={css:item[1],media:item[2],sourceMap:item[3]};if(index!==-1){stylesInDom[index].references++;stylesInDom[index].updater(obj);}else{stylesInDom.push({identifier:identifier,updater:addStyle(obj,options),references:1});}identifiers.push(identifier);}return identifiers;}function insertStyleElement(options){const style=document.createElement('style');const attributes=options.attributes||{};if(typeof attributes.nonce==='undefined'){const nonce=// eslint-disable-next-line no-undef
 true?__webpack_require__.nc:0;if(nonce){attributes.nonce=nonce;}}Object.keys(attributes).forEach(function(key){style.setAttribute(key,attributes[key]);});if(typeof options.insert==='function'){options.insert(style);}else{const target=getTarget(options.insert||'head');if(!target){throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");}target.appendChild(style);}return style;}function removeStyleElement(style){// istanbul ignore if
if(style.parentNode===null){return false;}style.parentNode.removeChild(style);}/* istanbul ignore next  */const replaceText=function replaceText(){const textStore=[];return function replace(index,replacement){textStore[index]=replacement;return textStore.filter(Boolean).join('\n');};}();function applyToSingletonTag(style,index,remove,obj){const css=remove?'':obj.media?'@media '+obj.media+' {'+obj.css+'}':obj.css;// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=replaceText(index,css);}else{const cssNode=document.createTextNode(css);const childNodes=style.childNodes;if(childNodes[index]){style.removeChild(childNodes[index]);}if(childNodes.length){style.insertBefore(cssNode,childNodes[index]);}else{style.appendChild(cssNode);}}}function applyToTag(style,options,obj){let css=obj.css;const media=obj.media;const sourceMap=obj.sourceMap;if(media){style.setAttribute('media',media);}else{style.removeAttribute('media');}if(sourceMap&&typeof btoa!=='undefined'){css+='\n/*# sourceMappingURL=data:application/json;base64,'+btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))))+' */';}// For old IE
/* istanbul ignore if  */if(style.styleSheet){style.styleSheet.cssText=css;}else{while(style.firstChild){style.removeChild(style.firstChild);}style.appendChild(document.createTextNode(css));}}let singleton=null;let singletonCounter=0;function addStyle(obj,options){let style;let update;let remove;if(options.singleton){const styleIndex=singletonCounter++;style=singleton||(singleton=insertStyleElement(options));update=applyToSingletonTag.bind(null,style,styleIndex,false);remove=applyToSingletonTag.bind(null,style,styleIndex,true);}else{style=insertStyleElement(options);update=applyToTag.bind(null,style,options);remove=function(){removeStyleElement(style);};}update(obj);return function updateStyle(newObj){if(newObj){if(newObj.css===obj.css&&newObj.media===obj.media&&newObj.sourceMap===obj.sourceMap){return;}update(obj=newObj);}else{remove();}};}module.exports=function(list,options){options=options||{};// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
if(!options.singleton&&typeof options.singleton!=='boolean'){options.singleton=isOldIE();}list=list||[];let lastIdentifiers=modulesToDom(list,options);return function update(newList){newList=newList||[];if(Object.prototype.toString.call(newList)!=='[object Array]'){return;}for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);stylesInDom[index].references--;}const newLastIdentifiers=modulesToDom(newList,options);for(let i=0;i<lastIdentifiers.length;i++){const identifier=lastIdentifiers[i];const index=getIndexByIdentifier(identifier);if(stylesInDom[index].references===0){stylesInDom[index].updater();stylesInDom.splice(index,1);}}lastIdentifiers=newLastIdentifiers;};};
//# sourceMappingURL=injectStylesIntoStyleTag.js.map

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/api.js ***!
  \***********************************************************/
/***/ (function(module) {

var __dirname = "/";
module.exports=function(){"use strict";var n={762:function(n){n.exports=function(n){var t=[];t.toString=function toString(){return this.map(function(t){var r=cssWithMappingToString(t,n);if(t[2]){return"@media ".concat(t[2]," {").concat(r,"}")}return r}).join("")};t.i=function(n,r,o){if(typeof n==="string"){n=[[null,n,""]]}var e={};if(o){for(var a=0;a<this.length;a++){var c=this[a][0];if(c!=null){e[c]=true}}}for(var i=0;i<n.length;i++){var u=[].concat(n[i]);if(o&&e[u[0]]){continue}if(r){if(!u[2]){u[2]=r}else{u[2]="".concat(r," and ").concat(u[2])}}t.push(u)}};return t};function cssWithMappingToString(n,t){var r=n[1]||"";var o=n[3];if(!o){return r}if(t&&typeof btoa==="function"){var e=toComment(o);var a=o.sources.map(function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")});return[r].concat(a).concat([e]).join("\n")}return[r].join("\n")}function toComment(n){var t=btoa(unescape(encodeURIComponent(JSON.stringify(n))));var r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(t);return"/*# ".concat(r," */")}}};var t={};function __nccwpck_require__(r){if(t[r]){return t[r].exports}var o=t[r]={exports:{}};var e=true;try{n[r](o,o.exports,__nccwpck_require__);e=false}finally{if(e)delete t[r]}return o.exports}__nccwpck_require__.ab=__dirname+"/";return __nccwpck_require__(762)}();

/***/ }),

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/compiled/css-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[1]!./node_modules/next/dist/compiled/postcss-loader/cjs.js??ruleSet[1].rules[2].oneOf[6].use[2]!./styles/index.css ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/compiled/css-loader/api.js */ "./node_modules/next/dist/compiled/css-loader/api.js");
/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*! tailwindcss v2.2.6 | MIT License | https://tailwindcss.com *//*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\t-o-tab-size: 4;\n\t   tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\t-webkit-text-decoration: underline dotted;\n\t        text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n.transform {\n\t--tw-translate-x: 0;\n\t--tw-translate-y: 0;\n\t--tw-rotate: 0;\n\t--tw-skew-x: 0;\n\t--tw-skew-y: 0;\n\t--tw-scale-x: 1;\n\t--tw-scale-y: 1;\n\t--tw-transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n.border-2, .border-b-2 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\n.shadow-lg, .shadow-2xl, .shadow-md, .sm\\:shadow-xl {\n\t--tw-ring-offset-shadow: 0 0 #0000;\n\t--tw-ring-shadow: 0 0 #0000;\n\t--tw-shadow: 0 0 #0000;\n}\n.container {\n\twidth: 100%;\n\tmargin-right: auto;\n\tmargin-left: auto;\n\tpadding-right: 1rem;\n\tpadding-left: 1rem;\n}\n@media (min-width: 640px) {\n\n\t.container {\n\t\tmax-width: 640px;\n\t}\n}\n@media (min-width: 768px) {\n\n\t.container {\n\t\tmax-width: 768px;\n\t\tpadding-right: 2rem;\n\t\tpadding-left: 2rem;\n\t}\n}\n@media (min-width: 1024px) {\n\n\t.container {\n\t\tmax-width: 1024px;\n\t}\n}\n@media (min-width: 1280px) {\n\n\t.container {\n\t\tmax-width: 1280px;\n\t}\n}\n.prose {\n\tcolor: #374151;\n\tmax-width: 65ch;\n}\n.prose [class~=\"lead\"] {\n\tcolor: #4b5563;\n\tfont-size: 1.25em;\n\tline-height: 1.6;\n\tmargin-top: 1.2em;\n\tmargin-bottom: 1.2em;\n}\n.prose a {\n\tcolor: #111827;\n\ttext-decoration: underline;\n\tfont-weight: 500;\n}\n.prose strong {\n\tcolor: #111827;\n\tfont-weight: 600;\n}\n.prose ol[type=\"A\"] {\n\t--list-counter-style: upper-alpha;\n}\n.prose ol[type=\"a\"] {\n\t--list-counter-style: lower-alpha;\n}\n.prose ol[type=\"A\" s] {\n\t--list-counter-style: upper-alpha;\n}\n.prose ol[type=\"a\" s] {\n\t--list-counter-style: lower-alpha;\n}\n.prose ol[type=\"I\"] {\n\t--list-counter-style: upper-roman;\n}\n.prose ol[type=\"i\"] {\n\t--list-counter-style: lower-roman;\n}\n.prose ol[type=\"I\" s] {\n\t--list-counter-style: upper-roman;\n}\n.prose ol[type=\"i\" s] {\n\t--list-counter-style: lower-roman;\n}\n.prose ol[type=\"1\"] {\n\t--list-counter-style: decimal;\n}\n.prose ol > li {\n\tposition: relative;\n\tpadding-left: 1.75em;\n}\n.prose ol > li::before {\n\tcontent: counter(list-item, decimal) \".\";\n\tcontent: counter(list-item, var(--list-counter-style, decimal)) \".\";\n\tposition: absolute;\n\tfont-weight: 400;\n\tcolor: #6b7280;\n\tleft: 0;\n}\n.prose ul > li {\n\tposition: relative;\n\tpadding-left: 1.75em;\n}\n.prose ul > li::before {\n\tcontent: \"\";\n\tposition: absolute;\n\tbackground-color: #d1d5db;\n\tborder-radius: 50%;\n\twidth: 0.375em;\n\theight: 0.375em;\n\ttop: calc(0.875em - 0.1875em);\n\tleft: 0.25em;\n}\n.prose hr {\n\tborder-color: #e5e7eb;\n\tborder-top-width: 1px;\n\tmargin-top: 3em;\n\tmargin-bottom: 3em;\n}\n.prose blockquote {\n\tfont-weight: 500;\n\tfont-style: italic;\n\tcolor: #111827;\n\tborder-left-width: 0.25rem;\n\tborder-left-color: #e5e7eb;\n\tquotes: \"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\";\n\tmargin-top: 1.6em;\n\tmargin-bottom: 1.6em;\n\tpadding-left: 1em;\n}\n.prose blockquote p:first-of-type::before {\n\tcontent: open-quote;\n}\n.prose blockquote p:last-of-type::after {\n\tcontent: close-quote;\n}\n.prose h1 {\n\tcolor: #111827;\n\tfont-weight: 800;\n\tfont-size: 2.25em;\n\tmargin-top: 0;\n\tmargin-bottom: 0.8888889em;\n\tline-height: 1.1111111;\n}\n.prose h2 {\n\tcolor: #111827;\n\tfont-weight: 700;\n\tfont-size: 1.5em;\n\tmargin-top: 2em;\n\tmargin-bottom: 1em;\n\tline-height: 1.3333333;\n}\n.prose h3 {\n\tcolor: #111827;\n\tfont-weight: 600;\n\tfont-size: 1.25em;\n\tmargin-top: 1.6em;\n\tmargin-bottom: 0.6em;\n\tline-height: 1.6;\n}\n.prose h4 {\n\tcolor: #111827;\n\tfont-weight: 600;\n\tmargin-top: 1.5em;\n\tmargin-bottom: 0.5em;\n\tline-height: 1.5;\n}\n.prose figure figcaption {\n\tcolor: #6b7280;\n\tfont-size: 0.875em;\n\tline-height: 1.4285714;\n\tmargin-top: 0.8571429em;\n}\n.prose code {\n\tcolor: #111827;\n\tfont-weight: 600;\n\tfont-size: 0.875em;\n}\n.prose code::before {\n\tcontent: \"`\";\n}\n.prose code::after {\n\tcontent: \"`\";\n}\n.prose a code {\n\tcolor: #111827;\n}\n.prose pre {\n\tcolor: #e5e7eb;\n\tbackground-color: #1f2937;\n\toverflow-x: auto;\n\tfont-size: 0.875em;\n\tline-height: 1.7142857;\n\tmargin-top: 1.7142857em;\n\tmargin-bottom: 1.7142857em;\n\tborder-radius: 0.375rem;\n\tpadding-top: 0.8571429em;\n\tpadding-right: 1.1428571em;\n\tpadding-bottom: 0.8571429em;\n\tpadding-left: 1.1428571em;\n}\n.prose pre code {\n\tbackground-color: transparent;\n\tborder-width: 0;\n\tborder-radius: 0;\n\tpadding: 0;\n\tfont-weight: 400;\n\tcolor: inherit;\n\tfont-size: inherit;\n\tfont-family: inherit;\n\tline-height: inherit;\n}\n.prose pre code::before {\n\tcontent: none;\n}\n.prose pre code::after {\n\tcontent: none;\n}\n.prose table {\n\twidth: 100%;\n\ttable-layout: auto;\n\ttext-align: left;\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n\tfont-size: 0.875em;\n\tline-height: 1.7142857;\n}\n.prose thead {\n\tcolor: #111827;\n\tfont-weight: 600;\n\tborder-bottom-width: 1px;\n\tborder-bottom-color: #d1d5db;\n}\n.prose thead th {\n\tvertical-align: bottom;\n\tpadding-right: 0.5714286em;\n\tpadding-bottom: 0.5714286em;\n\tpadding-left: 0.5714286em;\n}\n.prose tbody tr {\n\tborder-bottom-width: 1px;\n\tborder-bottom-color: #e5e7eb;\n}\n.prose tbody tr:last-child {\n\tborder-bottom-width: 0;\n}\n.prose tbody td {\n\tvertical-align: top;\n\tpadding-top: 0.5714286em;\n\tpadding-right: 0.5714286em;\n\tpadding-bottom: 0.5714286em;\n\tpadding-left: 0.5714286em;\n}\n.prose {\n\tfont-size: 1rem;\n\tline-height: 1.75;\n}\n.prose p {\n\tmargin-top: 1.25em;\n\tmargin-bottom: 1.25em;\n}\n.prose img {\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n}\n.prose video {\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n}\n.prose figure {\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n}\n.prose figure > * {\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n.prose h2 code {\n\tfont-size: 0.875em;\n}\n.prose h3 code {\n\tfont-size: 0.9em;\n}\n.prose ol {\n\tmargin-top: 1.25em;\n\tmargin-bottom: 1.25em;\n}\n.prose ul {\n\tmargin-top: 1.25em;\n\tmargin-bottom: 1.25em;\n}\n.prose li {\n\tmargin-top: 0.5em;\n\tmargin-bottom: 0.5em;\n}\n.prose > ul > li p {\n\tmargin-top: 0.75em;\n\tmargin-bottom: 0.75em;\n}\n.prose > ul > li > *:first-child {\n\tmargin-top: 1.25em;\n}\n.prose > ul > li > *:last-child {\n\tmargin-bottom: 1.25em;\n}\n.prose > ol > li > *:first-child {\n\tmargin-top: 1.25em;\n}\n.prose > ol > li > *:last-child {\n\tmargin-bottom: 1.25em;\n}\n.prose ul ul, .prose ul ol, .prose ol ul, .prose ol ol {\n\tmargin-top: 0.75em;\n\tmargin-bottom: 0.75em;\n}\n.prose hr + * {\n\tmargin-top: 0;\n}\n.prose h2 + * {\n\tmargin-top: 0;\n}\n.prose h3 + * {\n\tmargin-top: 0;\n}\n.prose h4 + * {\n\tmargin-top: 0;\n}\n.prose thead th:first-child {\n\tpadding-left: 0;\n}\n.prose thead th:last-child {\n\tpadding-right: 0;\n}\n.prose tbody td:first-child {\n\tpadding-left: 0;\n}\n.prose tbody td:last-child {\n\tpadding-right: 0;\n}\n.prose > :first-child {\n\tmargin-top: 0;\n}\n.prose > :last-child {\n\tmargin-bottom: 0;\n}\n.prose-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.7777778;\n}\n.prose-lg p {\n\tmargin-top: 1.3333333em;\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg [class~=\"lead\"] {\n\tfont-size: 1.2222222em;\n\tline-height: 1.4545455;\n\tmargin-top: 1.0909091em;\n\tmargin-bottom: 1.0909091em;\n}\n.prose-lg blockquote {\n\tmargin-top: 1.6666667em;\n\tmargin-bottom: 1.6666667em;\n\tpadding-left: 1em;\n}\n.prose-lg h1 {\n\tfont-size: 2.6666667em;\n\tmargin-top: 0;\n\tmargin-bottom: 0.8333333em;\n\tline-height: 1;\n}\n.prose-lg h2 {\n\tfont-size: 1.6666667em;\n\tmargin-top: 1.8666667em;\n\tmargin-bottom: 1.0666667em;\n\tline-height: 1.3333333;\n}\n.prose-lg h3 {\n\tfont-size: 1.3333333em;\n\tmargin-top: 1.6666667em;\n\tmargin-bottom: 0.6666667em;\n\tline-height: 1.5;\n}\n.prose-lg h4 {\n\tmargin-top: 1.7777778em;\n\tmargin-bottom: 0.4444444em;\n\tline-height: 1.5555556;\n}\n.prose-lg img {\n\tmargin-top: 1.7777778em;\n\tmargin-bottom: 1.7777778em;\n}\n.prose-lg video {\n\tmargin-top: 1.7777778em;\n\tmargin-bottom: 1.7777778em;\n}\n.prose-lg figure {\n\tmargin-top: 1.7777778em;\n\tmargin-bottom: 1.7777778em;\n}\n.prose-lg figure > * {\n\tmargin-top: 0;\n\tmargin-bottom: 0;\n}\n.prose-lg figure figcaption {\n\tfont-size: 0.8888889em;\n\tline-height: 1.5;\n\tmargin-top: 1em;\n}\n.prose-lg code {\n\tfont-size: 0.8888889em;\n}\n.prose-lg h2 code {\n\tfont-size: 0.8666667em;\n}\n.prose-lg h3 code {\n\tfont-size: 0.875em;\n}\n.prose-lg pre {\n\tfont-size: 0.8888889em;\n\tline-height: 1.75;\n\tmargin-top: 2em;\n\tmargin-bottom: 2em;\n\tborder-radius: 0.375rem;\n\tpadding-top: 1em;\n\tpadding-right: 1.5em;\n\tpadding-bottom: 1em;\n\tpadding-left: 1.5em;\n}\n.prose-lg ol {\n\tmargin-top: 1.3333333em;\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg ul {\n\tmargin-top: 1.3333333em;\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg li {\n\tmargin-top: 0.6666667em;\n\tmargin-bottom: 0.6666667em;\n}\n.prose-lg ol > li {\n\tpadding-left: 1.6666667em;\n}\n.prose-lg ol > li::before {\n\tleft: 0;\n}\n.prose-lg ul > li {\n\tpadding-left: 1.6666667em;\n}\n.prose-lg ul > li::before {\n\twidth: 0.3333333em;\n\theight: 0.3333333em;\n\ttop: calc(0.8888889em - 0.1666667em);\n\tleft: 0.2222222em;\n}\n.prose-lg > ul > li p {\n\tmargin-top: 0.8888889em;\n\tmargin-bottom: 0.8888889em;\n}\n.prose-lg > ul > li > *:first-child {\n\tmargin-top: 1.3333333em;\n}\n.prose-lg > ul > li > *:last-child {\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg > ol > li > *:first-child {\n\tmargin-top: 1.3333333em;\n}\n.prose-lg > ol > li > *:last-child {\n\tmargin-bottom: 1.3333333em;\n}\n.prose-lg ul ul, .prose-lg ul ol, .prose-lg ol ul, .prose-lg ol ol {\n\tmargin-top: 0.8888889em;\n\tmargin-bottom: 0.8888889em;\n}\n.prose-lg hr {\n\tmargin-top: 3.1111111em;\n\tmargin-bottom: 3.1111111em;\n}\n.prose-lg hr + * {\n\tmargin-top: 0;\n}\n.prose-lg h2 + * {\n\tmargin-top: 0;\n}\n.prose-lg h3 + * {\n\tmargin-top: 0;\n}\n.prose-lg h4 + * {\n\tmargin-top: 0;\n}\n.prose-lg table {\n\tfont-size: 0.8888889em;\n\tline-height: 1.5;\n}\n.prose-lg thead th {\n\tpadding-right: 0.75em;\n\tpadding-bottom: 0.75em;\n\tpadding-left: 0.75em;\n}\n.prose-lg thead th:first-child {\n\tpadding-left: 0;\n}\n.prose-lg thead th:last-child {\n\tpadding-right: 0;\n}\n.prose-lg tbody td {\n\tpadding-top: 0.75em;\n\tpadding-right: 0.75em;\n\tpadding-bottom: 0.75em;\n\tpadding-left: 0.75em;\n}\n.prose-lg tbody td:first-child {\n\tpadding-left: 0;\n}\n.prose-lg tbody td:last-child {\n\tpadding-right: 0;\n}\n.prose-lg > :first-child {\n\tmargin-top: 0;\n}\n.prose-lg > :last-child {\n\tmargin-bottom: 0;\n}\n.static {\n\tposition: static;\n}\n.fixed {\n\tposition: fixed;\n}\n.absolute {\n\tposition: absolute;\n}\n.relative {\n\tposition: relative;\n}\n.top-0 {\n\ttop: 0px;\n}\n.left-0 {\n\tleft: 0px;\n}\n.z-10 {\n\tz-index: 10;\n}\n.-mx-1 {\n\tmargin-left: -0.25rem;\n\tmargin-right: -0.25rem;\n}\n.mx-auto {\n\tmargin-left: auto;\n\tmargin-right: auto;\n}\n.my-6 {\n\tmargin-top: 1.5rem;\n\tmargin-bottom: 1.5rem;\n}\n.ml-4 {\n\tmargin-left: 1rem;\n}\n.ml-1 {\n\tmargin-left: 0.25rem;\n}\n.mt-1 {\n\tmargin-top: 0.25rem;\n}\n.mb-10 {\n\tmargin-bottom: 2.5rem;\n}\n.mt-10 {\n\tmargin-top: 2.5rem;\n}\n.mt-2 {\n\tmargin-top: 0.5rem;\n}\n.mr-2 {\n\tmargin-right: 0.5rem;\n}\n.ml-10 {\n\tmargin-left: 2.5rem;\n}\n.mt-4 {\n\tmargin-top: 1rem;\n}\n.mb-4 {\n\tmargin-bottom: 1rem;\n}\n.mb-6 {\n\tmargin-bottom: 1.5rem;\n}\n.mt-6 {\n\tmargin-top: 1.5rem;\n}\n.mb-2 {\n\tmargin-bottom: 0.5rem;\n}\n.ml-2 {\n\tmargin-left: 0.5rem;\n}\n.block {\n\tdisplay: block;\n}\n.flex {\n\tdisplay: flex;\n}\n.hidden {\n\tdisplay: none;\n}\n.h-full {\n\theight: 100%;\n}\n.h-5 {\n\theight: 1.25rem;\n}\n.h-screen {\n\theight: 100vh;\n}\n.h-8 {\n\theight: 2rem;\n}\n.h-10 {\n\theight: 2.5rem;\n}\n.h-6 {\n\theight: 1.5rem;\n}\n.h-4 {\n\theight: 1rem;\n}\n.h-auto {\n\theight: auto;\n}\n.h-12 {\n\theight: 3rem;\n}\n.h-3 {\n\theight: 0.75rem;\n}\n.max-h-full {\n\tmax-height: 100%;\n}\n.min-h-screen {\n\tmin-height: 100vh;\n}\n.w-20 {\n\twidth: 5rem;\n}\n.w-full {\n\twidth: 100%;\n}\n.w-6\\/12 {\n\twidth: 50%;\n}\n.w-5 {\n\twidth: 1.25rem;\n}\n.w-screen {\n\twidth: 100vw;\n}\n.w-auto {\n\twidth: auto;\n}\n.w-9\\/12 {\n\twidth: 75%;\n}\n.w-4 {\n\twidth: 1rem;\n}\n.w-10 {\n\twidth: 2.5rem;\n}\n.w-8\\/12 {\n\twidth: 66.666667%;\n}\n.w-3 {\n\twidth: 0.75rem;\n}\n.max-w-5xl {\n\tmax-width: 64rem;\n}\n.flex-1 {\n\tflex: 1 1;\n}\n.flex-shrink-0 {\n\tflex-shrink: 0;\n}\n.transform {\n\ttransform: var(--tw-transform);\n}\n@-webkit-keyframes spin {\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n@keyframes spin {\n\n\tto {\n\t\ttransform: rotate(360deg);\n\t}\n}\n.animate-spin {\n\t-webkit-animation: spin 1s linear infinite;\n\t        animation: spin 1s linear infinite;\n}\n.cursor-pointer {\n\tcursor: pointer;\n}\n.list-none {\n\tlist-style-type: none;\n}\n.flex-row {\n\tflex-direction: row;\n}\n.flex-col {\n\tflex-direction: column;\n}\n.flex-wrap {\n\tflex-wrap: wrap;\n}\n.items-start {\n\talign-items: flex-start;\n}\n.items-center {\n\talign-items: center;\n}\n.items-baseline {\n\talign-items: baseline;\n}\n.justify-start {\n\tjustify-content: flex-start;\n}\n.justify-end {\n\tjustify-content: flex-end;\n}\n.justify-center {\n\tjustify-content: center;\n}\n.justify-between {\n\tjustify-content: space-between;\n}\n.gap-6 {\n\tgap: 1.5rem;\n}\n.gap-4 {\n\tgap: 1rem;\n}\n.gap-12 {\n\tgap: 3rem;\n}\n.gap-10 {\n\tgap: 2.5rem;\n}\n.gap-3 {\n\tgap: 0.75rem;\n}\n.overflow-hidden {\n\toverflow: hidden;\n}\n.overflow-y-scroll {\n\toverflow-y: scroll;\n}\n.rounded-md {\n\tborder-radius: 0.375rem;\n}\n.rounded-full {\n\tborder-radius: 9999px;\n}\n.border-2 {\n\tborder-width: 2px;\n}\n.border-b-2 {\n\tborder-bottom-width: 2px;\n}\n.border-primary-600 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(79, 70, 229, var(--tw-border-opacity));\n}\n.border-white {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(255, 255, 255, var(--tw-border-opacity));\n}\n.border-gray-200 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(229, 231, 235, var(--tw-border-opacity));\n}\n.border-gray-300 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(209, 213, 219, var(--tw-border-opacity));\n}\n.border-primary-300 {\n\t--tw-border-opacity: 1;\n\tborder-color: rgba(165, 180, 252, var(--tw-border-opacity));\n}\n.bg-white {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n.bg-red-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(220, 38, 38, var(--tw-bg-opacity));\n}\n.bg-primary-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(79, 70, 229, var(--tw-bg-opacity));\n}\n.bg-gray-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n.bg-gray-200 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(229, 231, 235, var(--tw-bg-opacity));\n}\n.bg-blue-600 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(37, 99, 235, var(--tw-bg-opacity));\n}\n.bg-primary-800 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(55, 48, 163, var(--tw-bg-opacity));\n}\n.bg-primary-100 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(224, 231, 255, var(--tw-bg-opacity));\n}\n.bg-gray-500 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(107, 114, 128, var(--tw-bg-opacity));\n}\n.bg-gray-300 {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(209, 213, 219, var(--tw-bg-opacity));\n}\n.fill-current {\n\tfill: currentColor;\n}\n.stroke-current {\n\tstroke: currentColor;\n}\n.p-1 {\n\tpadding: 0.25rem;\n}\n.p-2 {\n\tpadding: 0.5rem;\n}\n.px-2 {\n\tpadding-left: 0.5rem;\n\tpadding-right: 0.5rem;\n}\n.py-2 {\n\tpadding-top: 0.5rem;\n\tpadding-bottom: 0.5rem;\n}\n.py-4 {\n\tpadding-top: 1rem;\n\tpadding-bottom: 1rem;\n}\n.px-8 {\n\tpadding-left: 2rem;\n\tpadding-right: 2rem;\n}\n.px-6 {\n\tpadding-left: 1.5rem;\n\tpadding-right: 1.5rem;\n}\n.py-1 {\n\tpadding-top: 0.25rem;\n\tpadding-bottom: 0.25rem;\n}\n.px-1 {\n\tpadding-left: 0.25rem;\n\tpadding-right: 0.25rem;\n}\n.py-6 {\n\tpadding-top: 1.5rem;\n\tpadding-bottom: 1.5rem;\n}\n.py-20 {\n\tpadding-top: 5rem;\n\tpadding-bottom: 5rem;\n}\n.py-12 {\n\tpadding-top: 3rem;\n\tpadding-bottom: 3rem;\n}\n.py-10 {\n\tpadding-top: 2.5rem;\n\tpadding-bottom: 2.5rem;\n}\n.px-4 {\n\tpadding-left: 1rem;\n\tpadding-right: 1rem;\n}\n.pt-12 {\n\tpadding-top: 3rem;\n}\n.pb-6 {\n\tpadding-bottom: 1.5rem;\n}\n.pb-16 {\n\tpadding-bottom: 4rem;\n}\n.text-left {\n\ttext-align: left;\n}\n.text-center {\n\ttext-align: center;\n}\n.align-top {\n\tvertical-align: top;\n}\n.align-middle {\n\tvertical-align: middle;\n}\n.text-base {\n\tfont-size: 1rem;\n\tline-height: 1.5rem;\n}\n.text-sm {\n\tfont-size: 0.875rem;\n\tline-height: 1.25rem;\n}\n.text-xl {\n\tfont-size: 1.25rem;\n\tline-height: 1.75rem;\n}\n.text-lg {\n\tfont-size: 1.125rem;\n\tline-height: 1.75rem;\n}\n.text-3xl {\n\tfont-size: 1.875rem;\n\tline-height: 2.25rem;\n}\n.text-4xl {\n\tfont-size: 2.25rem;\n\tline-height: 2.5rem;\n}\n.text-2xl {\n\tfont-size: 1.5rem;\n\tline-height: 2rem;\n}\n.font-semibold {\n\tfont-weight: 600;\n}\n.font-bold {\n\tfont-weight: 700;\n}\n.font-medium {\n\tfont-weight: 500;\n}\n.uppercase {\n\ttext-transform: uppercase;\n}\n.capitalize {\n\ttext-transform: capitalize;\n}\n.italic {\n\tfont-style: italic;\n}\n.tracking-wide {\n\tletter-spacing: 0.025em;\n}\n.text-primary-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(79, 70, 229, 1);\n\tcolor: rgba(79, 70, 229, var(--tw-text-opacity));\n}\n.text-red-100 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(254, 226, 226, 1);\n\tcolor: rgba(254, 226, 226, var(--tw-text-opacity));\n}\n.text-white {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(255, 255, 255, 1);\n\tcolor: rgba(255, 255, 255, var(--tw-text-opacity));\n}\n.text-gray-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(55, 65, 81, 1);\n\tcolor: rgba(55, 65, 81, var(--tw-text-opacity));\n}\n.text-blue-600 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(37, 99, 235, 1);\n\tcolor: rgba(37, 99, 235, var(--tw-text-opacity));\n}\n.text-red-500 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(239, 68, 68, 1);\n\tcolor: rgba(239, 68, 68, var(--tw-text-opacity));\n}\n.text-gray-900 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, 1);\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.text-primary-900 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(49, 46, 129, 1);\n\tcolor: rgba(49, 46, 129, var(--tw-text-opacity));\n}\n.text-primary-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(67, 56, 202, 1);\n\tcolor: rgba(67, 56, 202, var(--tw-text-opacity));\n}\n.text-blue-700 {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(29, 78, 216, 1);\n\tcolor: rgba(29, 78, 216, var(--tw-text-opacity));\n}\n.underline {\n\ttext-decoration: underline;\n}\n.shadow-lg {\n\t--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n\tbox-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-2xl {\n\t--tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);\n\tbox-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-md {\n\t--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n\tbox-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\nhtml {\n  font-size: 13px;\n  --tw-text-opacity: 1;\n  color: rgba(17, 24, 39, 1);\n  color: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n@media screen and (min-width: 640px) {\n  html {\n    font-size: 14px;\n  }\n}\n@media screen and (min-width: 768px) {\n  html {\n    font-size: 15px;\n  }\n}\n.rich-text-hero a {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(37, 99, 235, 1);\n\tcolor: rgba(37, 99, 235, var(--tw-text-opacity));\n\ttext-decoration: underline;\n}\n.rich-text-banner {\n\twhite-space: pre-line;\n  a {\n\t\ttext-decoration: underline;\n\t}\n}\n.title {\n\tfont-size: 2.25rem;\n\tline-height: 2.5rem;\n\tfont-weight: 600;\n\tline-height: 1.375;\n}\n@media (min-width: 768px) {\n  .title {\n\t\tfont-size: 3rem;\n\t\tline-height: 1;\n\t}\n}\n.with-arrow:after {\n  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%206a.5.5%200%200%200%200%201V6zM12.854.646a.5.5%200%200%200-.708.708l.708-.708zM18%206.5l.354.354a.5.5%200%200%200%200-.708L18%206.5zm-5.854%205.146a.5.5%200%200%200%20.708.708l-.708-.708zM1%207h16.5V6H1v1zm16.646-.854l-5.5%205.5.708.708%205.5-5.5-.708-.708zm-5.5-4.792l2.75%202.75.708-.708-2.75-2.75-.708.708zm2.75%202.75l2.75%202.75.708-.708-2.75-2.75-.708.708z%22%20fill%3D%22%231264A3%22%2F%3E%3C%2Fsvg%3E);\n  content: \"\";\n  width: 19px;\n  height: 13px;\n  display: inline-block;\n  margin-left: 0.5em;\n}\n.hover\\:bg-primary-50:hover {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(238, 242, 255, var(--tw-bg-opacity));\n}\n.hover\\:text-primary-600:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(79, 70, 229, 1);\n\tcolor: rgba(79, 70, 229, var(--tw-text-opacity));\n}\n.hover\\:text-gray-900:hover {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(17, 24, 39, 1);\n\tcolor: rgba(17, 24, 39, var(--tw-text-opacity));\n}\n.hover\\:underline:hover {\n\ttext-decoration: underline;\n}\n.focus\\:bg-primary-50:focus {\n\t--tw-bg-opacity: 1;\n\tbackground-color: rgba(238, 242, 255, var(--tw-bg-opacity));\n}\n.focus\\:text-primary-600:focus {\n\t--tw-text-opacity: 1;\n\tcolor: rgba(79, 70, 229, 1);\n\tcolor: rgba(79, 70, 229, var(--tw-text-opacity));\n}\n.focus\\:outline-none:focus {\n\toutline: 2px solid transparent;\n\toutline-offset: 2px;\n}\n@media (min-width: 640px) {\n\n\t.sm\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\n\n\t.sm\\:mb-2 {\n\t\tmargin-bottom: 0.5rem;\n\t}\n\n\t.sm\\:mt-3 {\n\t\tmargin-top: 0.75rem;\n\t}\n\n\t.sm\\:w-8\\/12 {\n\t\twidth: 66.666667%;\n\t}\n\n\t.sm\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.sm\\:gap-20 {\n\t\tgap: 5rem;\n\t}\n\n\t.sm\\:self-end {\n\t\talign-self: flex-end;\n\t}\n\n\t.sm\\:py-2 {\n\t\tpadding-top: 0.5rem;\n\t\tpadding-bottom: 0.5rem;\n\t}\n\n\t.sm\\:px-12 {\n\t\tpadding-left: 3rem;\n\t\tpadding-right: 3rem;\n\t}\n\n\t.sm\\:px-0 {\n\t\tpadding-left: 0px;\n\t\tpadding-right: 0px;\n\t}\n\n\t.sm\\:pr-8 {\n\t\tpadding-right: 2rem;\n\t}\n\n\t.sm\\:pt-12 {\n\t\tpadding-top: 3rem;\n\t}\n\n\t.sm\\:pb-4 {\n\t\tpadding-bottom: 1rem;\n\t}\n\n\t.sm\\:text-sm {\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t}\n\n\t.sm\\:shadow-xl {\n\t\t--tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);\n\t\tbox-shadow: 0 0 #0000, 0 0 #0000, var(--tw-shadow);\n\t\tbox-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n\t}\n}\n@media (min-width: 768px) {\n\n\t.md\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\n\n\t.md\\:block {\n\t\tdisplay: block;\n\t}\n\n\t.md\\:flex {\n\t\tdisplay: flex;\n\t}\n\n\t.md\\:hidden {\n\t\tdisplay: none;\n\t}\n\n\t.md\\:w-6\\/12 {\n\t\twidth: 50%;\n\t}\n\n\t.md\\:w-4\\/12 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.md\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.md\\:items-center {\n\t\talign-items: center;\n\t}\n\n\t.md\\:justify-between {\n\t\tjustify-content: space-between;\n\t}\n\n\t.md\\:py-0 {\n\t\tpadding-top: 0px;\n\t\tpadding-bottom: 0px;\n\t}\n\n\t.md\\:text-sm {\n\t\tfont-size: 0.875rem;\n\t\tline-height: 1.25rem;\n\t}\n}\n@media (min-width: 1024px) {\n\n\t.lg\\:mt-0 {\n\t\tmargin-top: 0px;\n\t}\n\n\t.lg\\:w-auto {\n\t\twidth: auto;\n\t}\n\n\t.lg\\:w-6\\/12 {\n\t\twidth: 50%;\n\t}\n\n\t.lg\\:w-4\\/12 {\n\t\twidth: 33.333333%;\n\t}\n\n\t.lg\\:w-9\\/12 {\n\t\twidth: 75%;\n\t}\n\n\t.lg\\:flex-row {\n\t\tflex-direction: row;\n\t}\n\n\t.lg\\:flex-row-reverse {\n\t\tflex-direction: row-reverse;\n\t}\n\n\t.lg\\:flex-wrap {\n\t\tflex-wrap: wrap;\n\t}\n\n\t.lg\\:justify-end {\n\t\tjustify-content: flex-end;\n\t}\n\n\t.lg\\:justify-center {\n\t\tjustify-content: center;\n\t}\n\n\t.lg\\:justify-between {\n\t\tjustify-content: space-between;\n\t}\n\n\t.lg\\:gap-20 {\n\t\tgap: 5rem;\n\t}\n\n\t.lg\\:pr-6 {\n\t\tpadding-right: 1.5rem;\n\t}\n}\n", "",{"version":3,"sources":["webpack://styles/index.css","webpack://styles/%3Cinput%20css%20pSPR4z%3E","webpack://styles/%3Cinput%20css%20Nf7Z1I%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\nhtml {\n  font-size: 13px;\n  @apply text-gray-900;\n}\n\n@media screen and (min-width: 640px) {\n  html {\n    font-size: 14px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  html {\n    font-size: 15px;\n  }\n}\n\n.rich-text-hero a {\n  @apply text-blue-600 underline;\n}\n\n.rich-text-banner {\n  @apply whitespace-pre-line;\n  a {\n    @apply underline;\n  }\n}\n\n.title {\n  @apply text-4xl leading-snug font-semibold;\n}\n\n@media (min-width: 768px) {\n  .title {\n    @apply text-5xl;\n  }\n}\n\n.with-arrow:after {\n  background-image: url(data:image/svg+xml;charset=utf-8,%3Csvg%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M1%206a.5.5%200%200%200%200%201V6zM12.854.646a.5.5%200%200%200-.708.708l.708-.708zM18%206.5l.354.354a.5.5%200%200%200%200-.708L18%206.5zm-5.854%205.146a.5.5%200%200%200%20.708.708l-.708-.708zM1%207h16.5V6H1v1zm16.646-.854l-5.5%205.5.708.708%205.5-5.5-.708-.708zm-5.5-4.792l2.75%202.75.708-.708-2.75-2.75-.708.708zm2.75%202.75l2.75%202.75.708-.708-2.75-2.75-.708.708z%22%20fill%3D%22%231264A3%22%2F%3E%3C%2Fsvg%3E);\n  content: \"\";\n  width: 19px;\n  height: 13px;\n  display: inline-block;\n  margin-left: 0.5em;\n}\n","/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n\tbox-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n\t-moz-tab-size: 4;\n\ttab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n\tline-height: 1.15; /* 1 */\n\t-webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n\tmargin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n\tfont-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n\theight: 0; /* 1 */\n\tcolor: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n\ttext-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n\tfont-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -0.25em;\n}\n\nsup {\n\ttop: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n\ttext-indent: 0; /* 1 */\n\tborder-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tfont-family: inherit; /* 1 */\n\tfont-size: 100%; /* 1 */\n\tline-height: 1.15; /* 1 */\n\tmargin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n\t-webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n:-moz-ui-invalid {\n\tbox-shadow: none;\n}\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n\tpadding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n\tvertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n\tdisplay: list-item;\n}\n","/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: theme('colors.gray.400', #a1a1aa);\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace);\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/next/error.js":
/*!************************************!*\
  !*** ./node_modules/next/error.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_error */ "./node_modules/next/dist/pages/_error.js")


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*********************************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/object-inspect/index.js":
/*!**********************************************!*\
  !*** ./node_modules/object-inspect/index.js ***!
  \**********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var hasMap = typeof Map === 'function' && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, 'size') : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === 'function' ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === 'function' && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, 'size') : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === 'function' ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === 'function' && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === 'function' && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === 'function' && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var match = String.prototype.match;
var bigIntValueOf = typeof BigInt === 'function' ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? Symbol.prototype.toString : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;

var gPO = (typeof Reflect === 'function' ? Reflect.getPrototypeOf : Object.getPrototypeOf) || (
    [].__proto__ === Array.prototype // eslint-disable-line no-proto
        ? function (O) {
            return O.__proto__; // eslint-disable-line no-proto
        }
        : null
);

var inspectCustom = __webpack_require__(/*! ./util.inspect */ "?4f7e").custom;
var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
var toStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol' ? Symbol.toStringTag : null;

module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};

    if (has(opts, 'quoteStyle') && (opts.quoteStyle !== 'single' && opts.quoteStyle !== 'double')) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (
        has(opts, 'maxStringLength') && (typeof opts.maxStringLength === 'number'
            ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity
            : opts.maxStringLength !== null
        )
    ) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, 'customInspect') ? opts.customInspect : true;
    if (typeof customInspect !== 'boolean') {
        throw new TypeError('option "customInspect", if provided, must be `true` or `false`');
    }

    if (
        has(opts, 'indent')
        && opts.indent !== null
        && opts.indent !== '\t'
        && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)
    ) {
        throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
    }

    if (typeof obj === 'undefined') {
        return 'undefined';
    }
    if (obj === null) {
        return 'null';
    }
    if (typeof obj === 'boolean') {
        return obj ? 'true' : 'false';
    }

    if (typeof obj === 'string') {
        return inspectString(obj, opts);
    }
    if (typeof obj === 'number') {
        if (obj === 0) {
            return Infinity / obj > 0 ? '0' : '-0';
        }
        return String(obj);
    }
    if (typeof obj === 'bigint') {
        return String(obj) + 'n';
    }

    var maxDepth = typeof opts.depth === 'undefined' ? 5 : opts.depth;
    if (typeof depth === 'undefined') { depth = 0; }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === 'object') {
        return isArray(obj) ? '[Array]' : '[Object]';
    }

    var indent = getIndent(opts, depth);

    if (typeof seen === 'undefined') {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return '[Circular]';
    }

    function inspect(value, from, noIndent) {
        if (from) {
            seen = seen.slice();
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, 'quoteStyle')) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }

    if (typeof obj === 'function') {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return '[Function' + (name ? ': ' + name : ' (anonymous)') + ']' + (keys.length > 0 ? ' { ' + keys.join(', ') + ' }' : '');
    }
    if (isSymbol(obj)) {
        var symString = symToString.call(obj);
        return typeof obj === 'object' ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = '<' + String(obj.nodeName).toLowerCase();
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
            s += ' ' + attrs[i].name + '=' + wrapQuotes(quote(attrs[i].value), 'double', opts);
        }
        s += '>';
        if (obj.childNodes && obj.childNodes.length) { s += '...'; }
        s += '</' + String(obj.nodeName).toLowerCase() + '>';
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) { return '[]'; }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return '[' + indentedJoin(xs, indent) + ']';
        }
        return '[ ' + xs.join(', ') + ' ]';
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (parts.length === 0) { return '[' + String(obj) + ']'; }
        return '{ [' + String(obj) + '] ' + parts.join(', ') + ' }';
    }
    if (typeof obj === 'object' && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === 'function') {
            return obj[inspectSymbol]();
        } else if (typeof obj.inspect === 'function') {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function (value, key) {
            mapParts.push(inspect(key, obj, true) + ' => ' + inspect(value, obj));
        });
        return collectionOf('Map', mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function (value) {
            setParts.push(inspect(value, obj));
        });
        return collectionOf('Set', setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf('WeakMap');
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf('WeakSet');
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf('WeakRef');
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? '' : 'null prototype';
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? 'Object' : '';
        var constructorTag = isPlainObject || typeof obj.constructor !== 'function' ? '' : obj.constructor.name ? obj.constructor.name + ' ' : '';
        var tag = constructorTag + (stringTag || protoTag ? '[' + [].concat(stringTag || [], protoTag || []).join(': ') + '] ' : '');
        if (ys.length === 0) { return tag + '{}'; }
        if (indent) {
            return tag + '{' + indentedJoin(ys, indent) + '}';
        }
        return tag + '{ ' + ys.join(', ') + ' }';
    }
    return String(obj);
};

function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === 'double' ? '"' : "'";
    return quoteChar + s + quoteChar;
}

function quote(s) {
    return String(s).replace(/"/g, '&quot;');
}

function isArray(obj) { return toStr(obj) === '[object Array]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isDate(obj) { return toStr(obj) === '[object Date]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isRegExp(obj) { return toStr(obj) === '[object RegExp]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isError(obj) { return toStr(obj) === '[object Error]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isString(obj) { return toStr(obj) === '[object String]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isNumber(obj) { return toStr(obj) === '[object Number]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }
function isBoolean(obj) { return toStr(obj) === '[object Boolean]' && (!toStringTag || !(typeof obj === 'object' && toStringTag in obj)); }

// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (typeof obj === 'symbol') {
        return true;
    }
    if (!obj || typeof obj !== 'object' || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}

function isBigInt(obj) {
    if (!obj || typeof obj !== 'object' || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}

var hasOwn = Object.prototype.hasOwnProperty || function (key) { return key in this; };
function has(obj, key) {
    return hasOwn.call(obj, key);
}

function toStr(obj) {
    return objectToString.call(obj);
}

function nameOf(f) {
    if (f.name) { return f.name; }
    var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) { return m[1]; }
    return null;
}

function indexOf(xs, x) {
    if (xs.indexOf) { return xs.indexOf(x); }
    for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) { return i; }
    }
    return -1;
}

function isMap(x) {
    if (!mapSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}

function isSet(x) {
    if (!setSize || !x || typeof x !== 'object') {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== 'object') {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}

function isElement(x) {
    if (!x || typeof x !== 'object') { return false; }
    if (typeof HTMLElement !== 'undefined' && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === 'string' && typeof x.getAttribute === 'function';
}

function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = '... ' + remaining + ' more character' + (remaining > 1 ? 's' : '');
        return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = str.replace(/(['\\])/g, '\\$1').replace(/[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, 'single', opts);
}

function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: 'b',
        9: 't',
        10: 'n',
        12: 'f',
        13: 'r'
    }[n];
    if (x) { return '\\' + x; }
    return '\\x' + (n < 0x10 ? '0' : '') + n.toString(16).toUpperCase();
}

function markBoxed(str) {
    return 'Object(' + str + ')';
}

function weakCollectionOf(type) {
    return type + ' { ? }';
}

function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(', ');
    return type + ' (' + size + ') {' + joinedEntries + '}';
}

function singleLineValues(xs) {
    for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], '\n') >= 0) {
            return false;
        }
    }
    return true;
}

function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === '\t') {
        baseIndent = '\t';
    } else if (typeof opts.indent === 'number' && opts.indent > 0) {
        baseIndent = Array(opts.indent + 1).join(' ');
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: Array(depth + 1).join(baseIndent)
    };
}

function indentedJoin(xs, indent) {
    if (xs.length === 0) { return ''; }
    var lineJoiner = '\n' + indent.prev + indent.base;
    return lineJoiner + xs.join(',' + lineJoiner) + '\n' + indent.prev;
}

function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : '';
        }
    }
    for (var key in obj) { // eslint-disable-line no-restricted-syntax
        if (!has(obj, key)) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) { continue; } // eslint-disable-line no-restricted-syntax, no-continue
        if ((/[^\w$]/).test(key)) {
            xs.push(inspect(key, obj) + ': ' + inspect(obj[key], obj));
        } else {
            xs.push(key + ': ' + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === 'function') {
        var syms = gOPS(obj);
        for (var j = 0; j < syms.length; j++) {
            if (isEnumerable.call(obj, syms[j])) {
                xs.push('[' + inspect(syms[j]) + ']: ' + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/***/ (function(module) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/qs/lib/formats.js":
/*!****************************************!*\
  !*** ./node_modules/qs/lib/formats.js ***!
  \****************************************/
/***/ (function(module) {

"use strict";


var replace = String.prototype.replace;
var percentTwenties = /%20/g;

var Format = {
    RFC1738: 'RFC1738',
    RFC3986: 'RFC3986'
};

module.exports = {
    'default': Format.RFC3986,
    formatters: {
        RFC1738: function (value) {
            return replace.call(value, percentTwenties, '+');
        },
        RFC3986: function (value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ "./node_modules/qs/lib/index.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/index.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var stringify = __webpack_require__(/*! ./stringify */ "./node_modules/qs/lib/stringify.js");
var parse = __webpack_require__(/*! ./parse */ "./node_modules/qs/lib/parse.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ "./node_modules/qs/lib/parse.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/parse.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};

var interpretNumericEntities = function (str) {
    return str.replace(/&#(\d+);/g, function ($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};

var parseArrayValue = function (val, options) {
    if (val && typeof val === 'string' && options.comma && val.indexOf(',') > -1) {
        return val.split(',');
    }

    return val;
};

// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = 'utf8=%26%2310003%3B'; // encodeURIComponent('&#10003;')

// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = 'utf8=%E2%9C%93'; // encodeURIComponent('✓')

var parseValues = function parseQueryStringValues(str, options) {
    var obj = {};
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, '') : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;

    var charset = options.charset;
    if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
            if (parts[i].indexOf('utf8=') === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = 'utf-8';
                } else if (parts[i] === isoSentinel) {
                    charset = 'iso-8859-1';
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }

    for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];

        var bracketEqualsPos = part.indexOf(']=');
        var pos = bracketEqualsPos === -1 ? part.indexOf('=') : bracketEqualsPos + 1;

        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, 'key');
            val = options.strictNullHandling ? null : '';
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, 'key');
            val = utils.maybeMap(
                parseArrayValue(part.slice(pos + 1), options),
                function (encodedVal) {
                    return options.decoder(encodedVal, defaults.decoder, charset, 'value');
                }
            );
        }

        if (val && options.interpretNumericEntities && charset === 'iso-8859-1') {
            val = interpretNumericEntities(val);
        }

        if (part.indexOf('[]=') > -1) {
            val = isArray(val) ? [val] : val;
        }

        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }

    return obj;
};

var parseObject = function (chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);

    for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];

        if (root === '[]' && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === '[' && root.charAt(root.length - 1) === ']' ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === '') {
                obj = { 0: leaf };
            } else if (
                !isNaN(index)
                && root !== cleanRoot
                && String(index) === cleanRoot
                && index >= 0
                && (options.parseArrays && index <= options.arrayLimit)
            ) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== '__proto__') {
                obj[cleanRoot] = leaf;
            }
        }

        leaf = obj;
    }

    return leaf;
};

var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }

    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, '[$1]') : givenKey;

    // The regex chunks

    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;

    // Get the parent

    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;

    // Stash the parent if it exists

    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }

        keys.push(parent);
    }

    // Loop through children appending to the array until we hit depth

    var i = 0;
    while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }

    // If there's a remainder, just add whatever is left

    if (segment) {
        keys.push('[' + key.slice(segment.index) + ']');
    }

    return parseObject(keys, val, options, valuesParsed);
};

var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== 'function') {
        throw new TypeError('Decoder has to be a function.');
    }

    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }
    var charset = typeof opts.charset === 'undefined' ? defaults.charset : opts.charset;

    return {
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === 'boolean' ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === 'boolean' ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === 'number' ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === 'boolean' ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === 'function' ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === 'string' || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: (typeof opts.depth === 'number' || opts.depth === false) ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === 'boolean' ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === 'number' ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === 'boolean' ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (str, opts) {
    var options = normalizeParseOptions(opts);

    if (str === '' || str === null || typeof str === 'undefined') {
        return options.plainObjects ? Object.create(null) : {};
    }

    var tempObj = typeof str === 'string' ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};

    // Iterate over the keys and setup the new object

    var keys = Object.keys(tempObj);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === 'string');
        obj = utils.merge(obj, newObj, options);
    }

    if (options.allowSparse === true) {
        return obj;
    }

    return utils.compact(obj);
};


/***/ }),

/***/ "./node_modules/qs/lib/stringify.js":
/*!******************************************!*\
  !*** ./node_modules/qs/lib/stringify.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var getSideChannel = __webpack_require__(/*! side-channel */ "./node_modules/side-channel/index.js");
var utils = __webpack_require__(/*! ./utils */ "./node_modules/qs/lib/utils.js");
var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");
var has = Object.prototype.hasOwnProperty;

var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + '[]';
    },
    comma: 'comma',
    indices: function indices(prefix, key) {
        return prefix + '[' + key + ']';
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};

var isArray = Array.isArray;
var split = String.prototype.split;
var push = Array.prototype.push;
var pushToArray = function (arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
};

var toISO = Date.prototype.toISOString;

var defaultFormat = formats['default'];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: 'utf-8',
    charsetSentinel: false,
    delimiter: '&',
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};

var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === 'string'
        || typeof v === 'number'
        || typeof v === 'boolean'
        || typeof v === 'symbol'
        || typeof v === 'bigint';
};

var sentinel = {};

var stringify = function stringify(
    object,
    prefix,
    generateArrayPrefix,
    commaRoundTrip,
    strictNullHandling,
    skipNulls,
    encoder,
    filter,
    sort,
    allowDots,
    serializeDate,
    format,
    formatter,
    encodeValuesOnly,
    charset,
    sideChannel
) {
    var obj = object;

    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while ((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag) {
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== 'undefined') {
            if (pos === step) {
                throw new RangeError('Cyclic object value');
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === 'undefined') {
            step = 0;
        }
    }

    if (typeof filter === 'function') {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === 'comma' && isArray(obj)) {
        obj = utils.maybeMap(obj, function (value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }

    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, 'key', format) : prefix;
        }

        obj = '';
    }

    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, 'key', format);
            if (generateArrayPrefix === 'comma' && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ',');
                var valuesJoined = '';
                for (var i = 0; i < valuesArray.length; ++i) {
                    valuesJoined += (i === 0 ? '' : ',') + formatter(encoder(valuesArray[i], defaults.encoder, charset, 'value', format));
                }
                return [formatter(keyValue) + (commaRoundTrip && isArray(obj) && valuesArray.length === 1 ? '[]' : '') + '=' + valuesJoined];
            }
            return [formatter(keyValue) + '=' + formatter(encoder(obj, defaults.encoder, charset, 'value', format))];
        }
        return [formatter(prefix) + '=' + formatter(String(obj))];
    }

    var values = [];

    if (typeof obj === 'undefined') {
        return values;
    }

    var objKeys;
    if (generateArrayPrefix === 'comma' && isArray(obj)) {
        // we need to join elements in
        objKeys = [{ value: obj.length > 0 ? obj.join(',') || null : void undefined }];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }

    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + '[]' : prefix;

    for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === 'object' && typeof key.value !== 'undefined' ? key.value : obj[key];

        if (skipNulls && value === null) {
            continue;
        }

        var keyPrefix = isArray(obj)
            ? typeof generateArrayPrefix === 'function' ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix
            : adjustedPrefix + (allowDots ? '.' + key : '[' + key + ']');

        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(
            value,
            keyPrefix,
            generateArrayPrefix,
            commaRoundTrip,
            strictNullHandling,
            skipNulls,
            encoder,
            filter,
            sort,
            allowDots,
            serializeDate,
            format,
            formatter,
            encodeValuesOnly,
            charset,
            valueSideChannel
        ));
    }

    return values;
};

var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }

    if (opts.encoder !== null && typeof opts.encoder !== 'undefined' && typeof opts.encoder !== 'function') {
        throw new TypeError('Encoder has to be a function.');
    }

    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== 'undefined' && opts.charset !== 'utf-8' && opts.charset !== 'iso-8859-1') {
        throw new TypeError('The charset option must be either utf-8, iso-8859-1, or undefined');
    }

    var format = formats['default'];
    if (typeof opts.format !== 'undefined') {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError('Unknown format option provided.');
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];

    var filter = defaults.filter;
    if (typeof opts.filter === 'function' || isArray(opts.filter)) {
        filter = opts.filter;
    }

    return {
        addQueryPrefix: typeof opts.addQueryPrefix === 'boolean' ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === 'undefined' ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === 'boolean' ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === 'undefined' ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === 'boolean' ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === 'function' ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === 'boolean' ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === 'function' ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === 'boolean' ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === 'function' ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === 'boolean' ? opts.strictNullHandling : defaults.strictNullHandling
    };
};

module.exports = function (object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);

    var objKeys;
    var filter;

    if (typeof options.filter === 'function') {
        filter = options.filter;
        obj = filter('', obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }

    var keys = [];

    if (typeof obj !== 'object' || obj === null) {
        return '';
    }

    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && 'indices' in opts) {
        arrayFormat = opts.indices ? 'indices' : 'repeat';
    } else {
        arrayFormat = 'indices';
    }

    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && 'commaRoundTrip' in opts && typeof opts.commaRoundTrip !== 'boolean') {
        throw new TypeError('`commaRoundTrip` must be a boolean, or absent');
    }
    var commaRoundTrip = generateArrayPrefix === 'comma' && opts && opts.commaRoundTrip;

    if (!objKeys) {
        objKeys = Object.keys(obj);
    }

    if (options.sort) {
        objKeys.sort(options.sort);
    }

    var sideChannel = getSideChannel();
    for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];

        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(
            obj[key],
            key,
            generateArrayPrefix,
            commaRoundTrip,
            options.strictNullHandling,
            options.skipNulls,
            options.encode ? options.encoder : null,
            options.filter,
            options.sort,
            options.allowDots,
            options.serializeDate,
            options.format,
            options.formatter,
            options.encodeValuesOnly,
            options.charset,
            sideChannel
        ));
    }

    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? '?' : '';

    if (options.charsetSentinel) {
        if (options.charset === 'iso-8859-1') {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += 'utf8=%26%2310003%3B&';
        } else {
            // encodeURIComponent('✓')
            prefix += 'utf8=%E2%9C%93&';
        }
    }

    return joined.length > 0 ? prefix + joined : '';
};


/***/ }),

/***/ "./node_modules/qs/lib/utils.js":
/*!**************************************!*\
  !*** ./node_modules/qs/lib/utils.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var formats = __webpack_require__(/*! ./formats */ "./node_modules/qs/lib/formats.js");

var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;

var hexTable = (function () {
    var array = [];
    for (var i = 0; i < 256; ++i) {
        array.push('%' + ((i < 16 ? '0' : '') + i.toString(16)).toUpperCase());
    }

    return array;
}());

var compactQueue = function compactQueue(queue) {
    while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];

        if (isArray(obj)) {
            var compacted = [];

            for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== 'undefined') {
                    compacted.push(obj[j]);
                }
            }

            item.obj[item.prop] = compacted;
        }
    }
};

var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== 'undefined') {
            obj[i] = source[i];
        }
    }

    return obj;
};

var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */
    if (!source) {
        return target;
    }

    if (typeof source !== 'object') {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === 'object') {
            if ((options && (options.plainObjects || options.allowPrototypes)) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [target, source];
        }

        return target;
    }

    if (!target || typeof target !== 'object') {
        return [target].concat(source);
    }

    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }

    if (isArray(target) && isArray(source)) {
        source.forEach(function (item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === 'object' && item && typeof item === 'object') {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }

    return Object.keys(source).reduce(function (acc, key) {
        var value = source[key];

        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};

var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function (acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};

var decode = function (str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, ' ');
    if (charset === 'iso-8859-1') {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};

var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }

    var string = str;
    if (typeof str === 'symbol') {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== 'string') {
        string = String(str);
    }

    if (charset === 'iso-8859-1') {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function ($0) {
            return '%26%23' + parseInt($0.slice(2), 16) + '%3B';
        });
    }

    var out = '';
    for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);

        if (
            c === 0x2D // -
            || c === 0x2E // .
            || c === 0x5F // _
            || c === 0x7E // ~
            || (c >= 0x30 && c <= 0x39) // 0-9
            || (c >= 0x41 && c <= 0x5A) // a-z
            || (c >= 0x61 && c <= 0x7A) // A-Z
            || (format === formats.RFC1738 && (c === 0x28 || c === 0x29)) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }

        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }

        if (c < 0x800) {
            out = out + (hexTable[0xC0 | (c >> 6)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | (c >> 12)] + hexTable[0x80 | ((c >> 6) & 0x3F)] + hexTable[0x80 | (c & 0x3F)]);
            continue;
        }

        i += 1;
        c = 0x10000 + (((c & 0x3FF) << 10) | (string.charCodeAt(i) & 0x3FF));
        /* eslint operator-linebreak: [2, "before"] */
        out += hexTable[0xF0 | (c >> 18)]
            + hexTable[0x80 | ((c >> 12) & 0x3F)]
            + hexTable[0x80 | ((c >> 6) & 0x3F)]
            + hexTable[0x80 | (c & 0x3F)];
    }

    return out;
};

var compact = function compact(value) {
    var queue = [{ obj: { o: value }, prop: 'o' }];
    var refs = [];

    for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];

        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
            var key = keys[j];
            var val = obj[key];
            if (typeof val === 'object' && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj: obj, prop: key });
                refs.push(val);
            }
        }
    }

    compactQueue(queue);

    return value;
};

var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === '[object RegExp]';
};

var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== 'object') {
        return false;
    }

    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};

var combine = function combine(a, b) {
    return [].concat(a, b);
};

var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};

module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-dev-runtime.development.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React v17.0.2
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
exports.Fragment = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  exports.Fragment = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

var MAYBE_ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
var FAUX_ITERATOR_SYMBOL = '@@iterator';
function getIteratorFn(maybeIterable) {
  if (maybeIterable === null || typeof maybeIterable !== 'object') {
    return null;
  }

  var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];

  if (typeof maybeIterator === 'function') {
    return maybeIterator;
  }

  return null;
}

var ReactSharedInternals = React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;

function error(format) {
  {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    printWarning('error', format, args);
  }
}

function printWarning(level, format, args) {
  // When changing this logic, you might want to also
  // update consoleWithStackDev.www.js as well.
  {
    var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
    var stack = ReactDebugCurrentFrame.getStackAddendum();

    if (stack !== '') {
      format += '%s';
      args = args.concat([stack]);
    }

    var argsWithFormat = args.map(function (item) {
      return '' + item;
    }); // Careful: RN currently depends on this prefix

    argsWithFormat.unshift('Warning: ' + format); // We intentionally don't use spread (or .apply) directly because it
    // breaks IE9: https://github.com/facebook/react/issues/13610
    // eslint-disable-next-line react-internal/no-production-logging

    Function.prototype.apply.call(console[level], console, argsWithFormat);
  }
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = innerType.displayName || innerType.name || '';
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
}

function getContextName(type) {
  return type.displayName || 'Context';
}

function getComponentName(type) {
  if (type == null) {
    // Host root, text node or just invalid type.
    return null;
  }

  {
    if (typeof type.tag === 'number') {
      error('Received an unexpected object in getComponentName(). ' + 'This is likely a bug in React. Please file an issue.');
    }
  }

  if (typeof type === 'function') {
    return type.displayName || type.name || null;
  }

  if (typeof type === 'string') {
    return type;
  }

  switch (type) {
    case exports.Fragment:
      return 'Fragment';

    case REACT_PORTAL_TYPE:
      return 'Portal';

    case REACT_PROFILER_TYPE:
      return 'Profiler';

    case REACT_STRICT_MODE_TYPE:
      return 'StrictMode';

    case REACT_SUSPENSE_TYPE:
      return 'Suspense';

    case REACT_SUSPENSE_LIST_TYPE:
      return 'SuspenseList';
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_CONTEXT_TYPE:
        var context = type;
        return getContextName(context) + '.Consumer';

      case REACT_PROVIDER_TYPE:
        var provider = type;
        return getContextName(provider._context) + '.Provider';

      case REACT_FORWARD_REF_TYPE:
        return getWrappedName(type, type.render, 'ForwardRef');

      case REACT_MEMO_TYPE:
        return getComponentName(type.type);

      case REACT_BLOCK_TYPE:
        return getComponentName(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            return getComponentName(init(payload));
          } catch (x) {
            return null;
          }
        }
    }
  }

  return null;
}

// Helpers to patch console.logs to avoid logging during side-effect free
// replaying on render function. This currently only patches the object
// lazily which won't cover if the log function was extracted eagerly.
// We could also eagerly patch the method.
var disabledDepth = 0;
var prevLog;
var prevInfo;
var prevWarn;
var prevError;
var prevGroup;
var prevGroupCollapsed;
var prevGroupEnd;

function disabledLog() {}

disabledLog.__reactDisabledLog = true;
function disableLogs() {
  {
    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      prevLog = console.log;
      prevInfo = console.info;
      prevWarn = console.warn;
      prevError = console.error;
      prevGroup = console.group;
      prevGroupCollapsed = console.groupCollapsed;
      prevGroupEnd = console.groupEnd; // https://github.com/facebook/react/issues/19099

      var props = {
        configurable: true,
        enumerable: true,
        value: disabledLog,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        info: props,
        log: props,
        warn: props,
        error: props,
        group: props,
        groupCollapsed: props,
        groupEnd: props
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    disabledDepth++;
  }
}
function reenableLogs() {
  {
    disabledDepth--;

    if (disabledDepth === 0) {
      /* eslint-disable react-internal/no-production-logging */
      var props = {
        configurable: true,
        enumerable: true,
        writable: true
      }; // $FlowFixMe Flow thinks console is immutable.

      Object.defineProperties(console, {
        log: _assign({}, props, {
          value: prevLog
        }),
        info: _assign({}, props, {
          value: prevInfo
        }),
        warn: _assign({}, props, {
          value: prevWarn
        }),
        error: _assign({}, props, {
          value: prevError
        }),
        group: _assign({}, props, {
          value: prevGroup
        }),
        groupCollapsed: _assign({}, props, {
          value: prevGroupCollapsed
        }),
        groupEnd: _assign({}, props, {
          value: prevGroupEnd
        })
      });
      /* eslint-enable react-internal/no-production-logging */
    }

    if (disabledDepth < 0) {
      error('disabledDepth fell below zero. ' + 'This is a bug in React. Please file an issue.');
    }
  }
}

var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
var prefix;
function describeBuiltInComponentFrame(name, source, ownerFn) {
  {
    if (prefix === undefined) {
      // Extract the VM specific prefix used by each line.
      try {
        throw Error();
      } catch (x) {
        var match = x.stack.trim().match(/\n( *(at )?)/);
        prefix = match && match[1] || '';
      }
    } // We use the prefix to ensure our stacks line up with native stack frames.


    return '\n' + prefix + name;
  }
}
var reentry = false;
var componentFrameCache;

{
  var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map;
  componentFrameCache = new PossiblyWeakMap();
}

function describeNativeComponentFrame(fn, construct) {
  // If something asked for a stack inside a fake render, it should get ignored.
  if (!fn || reentry) {
    return '';
  }

  {
    var frame = componentFrameCache.get(fn);

    if (frame !== undefined) {
      return frame;
    }
  }

  var control;
  reentry = true;
  var previousPrepareStackTrace = Error.prepareStackTrace; // $FlowFixMe It does accept undefined.

  Error.prepareStackTrace = undefined;
  var previousDispatcher;

  {
    previousDispatcher = ReactCurrentDispatcher.current; // Set the dispatcher in DEV because this might be call in the render function
    // for warnings.

    ReactCurrentDispatcher.current = null;
    disableLogs();
  }

  try {
    // This should throw.
    if (construct) {
      // Something should be setting the props in the constructor.
      var Fake = function () {
        throw Error();
      }; // $FlowFixMe


      Object.defineProperty(Fake.prototype, 'props', {
        set: function () {
          // We use a throwing setter instead of frozen or non-writable props
          // because that won't throw in a non-strict mode function.
          throw Error();
        }
      });

      if (typeof Reflect === 'object' && Reflect.construct) {
        // We construct a different control for this case to include any extra
        // frames added by the construct call.
        try {
          Reflect.construct(Fake, []);
        } catch (x) {
          control = x;
        }

        Reflect.construct(fn, [], Fake);
      } else {
        try {
          Fake.call();
        } catch (x) {
          control = x;
        }

        fn.call(Fake.prototype);
      }
    } else {
      try {
        throw Error();
      } catch (x) {
        control = x;
      }

      fn();
    }
  } catch (sample) {
    // This is inlined manually because closure doesn't do it for us.
    if (sample && control && typeof sample.stack === 'string') {
      // This extracts the first frame from the sample that isn't also in the control.
      // Skipping one frame that we assume is the frame that calls the two.
      var sampleLines = sample.stack.split('\n');
      var controlLines = control.stack.split('\n');
      var s = sampleLines.length - 1;
      var c = controlLines.length - 1;

      while (s >= 1 && c >= 0 && sampleLines[s] !== controlLines[c]) {
        // We expect at least one stack frame to be shared.
        // Typically this will be the root most one. However, stack frames may be
        // cut off due to maximum stack limits. In this case, one maybe cut off
        // earlier than the other. We assume that the sample is longer or the same
        // and there for cut off earlier. So we should find the root most frame in
        // the sample somewhere in the control.
        c--;
      }

      for (; s >= 1 && c >= 0; s--, c--) {
        // Next we find the first one that isn't the same which should be the
        // frame that called our sample function and the control.
        if (sampleLines[s] !== controlLines[c]) {
          // In V8, the first line is describing the message but other VMs don't.
          // If we're about to return the first line, and the control is also on the same
          // line, that's a pretty good indicator that our sample threw at same line as
          // the control. I.e. before we entered the sample frame. So we ignore this result.
          // This can happen if you passed a class to function component, or non-function.
          if (s !== 1 || c !== 1) {
            do {
              s--;
              c--; // We may still have similar intermediate frames from the construct call.
              // The next one that isn't the same should be our match though.

              if (c < 0 || sampleLines[s] !== controlLines[c]) {
                // V8 adds a "new" prefix for native classes. Let's remove it to make it prettier.
                var _frame = '\n' + sampleLines[s].replace(' at new ', ' at ');

                {
                  if (typeof fn === 'function') {
                    componentFrameCache.set(fn, _frame);
                  }
                } // Return the line we found.


                return _frame;
              }
            } while (s >= 1 && c >= 0);
          }

          break;
        }
      }
    }
  } finally {
    reentry = false;

    {
      ReactCurrentDispatcher.current = previousDispatcher;
      reenableLogs();
    }

    Error.prepareStackTrace = previousPrepareStackTrace;
  } // Fallback to just using the name if we couldn't make it throw.


  var name = fn ? fn.displayName || fn.name : '';
  var syntheticFrame = name ? describeBuiltInComponentFrame(name) : '';

  {
    if (typeof fn === 'function') {
      componentFrameCache.set(fn, syntheticFrame);
    }
  }

  return syntheticFrame;
}
function describeFunctionComponentFrame(fn, source, ownerFn) {
  {
    return describeNativeComponentFrame(fn, false);
  }
}

function shouldConstruct(Component) {
  var prototype = Component.prototype;
  return !!(prototype && prototype.isReactComponent);
}

function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {

  if (type == null) {
    return '';
  }

  if (typeof type === 'function') {
    {
      return describeNativeComponentFrame(type, shouldConstruct(type));
    }
  }

  if (typeof type === 'string') {
    return describeBuiltInComponentFrame(type);
  }

  switch (type) {
    case REACT_SUSPENSE_TYPE:
      return describeBuiltInComponentFrame('Suspense');

    case REACT_SUSPENSE_LIST_TYPE:
      return describeBuiltInComponentFrame('SuspenseList');
  }

  if (typeof type === 'object') {
    switch (type.$$typeof) {
      case REACT_FORWARD_REF_TYPE:
        return describeFunctionComponentFrame(type.render);

      case REACT_MEMO_TYPE:
        // Memo may contain any component type so we recursively resolve it.
        return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);

      case REACT_BLOCK_TYPE:
        return describeFunctionComponentFrame(type._render);

      case REACT_LAZY_TYPE:
        {
          var lazyComponent = type;
          var payload = lazyComponent._payload;
          var init = lazyComponent._init;

          try {
            // Lazy may contain any component type so we recursively resolve it.
            return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
          } catch (x) {}
        }
    }
  }

  return '';
}

var loggedTypeFailures = {};
var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame.setExtraStackFrame(null);
    }
  }
}

function checkPropTypes(typeSpecs, values, location, componentName, element) {
  {
    // $FlowFixMe This is okay but Flow doesn't know it.
    var has = Function.call.bind(Object.prototype.hasOwnProperty);

    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error$1 = void 0; // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.

        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error((componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' + 'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.');
            err.name = 'Invariant Violation';
            throw err;
          }

          error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED');
        } catch (ex) {
          error$1 = ex;
        }

        if (error$1 && !(error$1 instanceof Error)) {
          setCurrentlyValidatingElement(element);

          error('%s: type specification of %s' + ' `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error$1);

          setCurrentlyValidatingElement(null);
        }

        if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error$1.message] = true;
          setCurrentlyValidatingElement(element);

          error('Failed %s type: %s', location, error$1.message);

          setCurrentlyValidatingElement(null);
        }
      }
    }
  }
}

var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var RESERVED_PROPS = {
  key: true,
  ref: true,
  __self: true,
  __source: true
};
var specialPropKeyWarningShown;
var specialPropRefWarningShown;
var didWarnAboutStringRefs;

{
  didWarnAboutStringRefs = {};
}

function hasValidRef(config) {
  {
    if (hasOwnProperty.call(config, 'ref')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'ref').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.ref !== undefined;
}

function hasValidKey(config) {
  {
    if (hasOwnProperty.call(config, 'key')) {
      var getter = Object.getOwnPropertyDescriptor(config, 'key').get;

      if (getter && getter.isReactWarning) {
        return false;
      }
    }
  }

  return config.key !== undefined;
}

function warnIfStringRefCannotBeAutoConverted(config, self) {
  {
    if (typeof config.ref === 'string' && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
      var componentName = getComponentName(ReactCurrentOwner.current.type);

      if (!didWarnAboutStringRefs[componentName]) {
        error('Component "%s" contains the string ref "%s". ' + 'Support for string refs will be removed in a future major release. ' + 'This case cannot be automatically converted to an arrow function. ' + 'We ask you to manually fix this case by using useRef() or createRef() instead. ' + 'Learn more about using refs safely here: ' + 'https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config.ref);

        didWarnAboutStringRefs[componentName] = true;
      }
    }
  }
}

function defineKeyPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingKey = function () {
      if (!specialPropKeyWarningShown) {
        specialPropKeyWarningShown = true;

        error('%s: `key` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingKey.isReactWarning = true;
    Object.defineProperty(props, 'key', {
      get: warnAboutAccessingKey,
      configurable: true
    });
  }
}

function defineRefPropWarningGetter(props, displayName) {
  {
    var warnAboutAccessingRef = function () {
      if (!specialPropRefWarningShown) {
        specialPropRefWarningShown = true;

        error('%s: `ref` is not a prop. Trying to access it will result ' + 'in `undefined` being returned. If you need to access the same ' + 'value within the child component, you should pass it as a different ' + 'prop. (https://reactjs.org/link/special-props)', displayName);
      }
    };

    warnAboutAccessingRef.isReactWarning = true;
    Object.defineProperty(props, 'ref', {
      get: warnAboutAccessingRef,
      configurable: true
    });
  }
}
/**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, instanceof check
 * will not work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} props
 * @param {*} key
 * @param {string|object} ref
 * @param {*} owner
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @internal
 */


var ReactElement = function (type, key, ref, self, source, owner, props) {
  var element = {
    // This tag allows us to uniquely identify this as a React Element
    $$typeof: REACT_ELEMENT_TYPE,
    // Built-in properties that belong on the element
    type: type,
    key: key,
    ref: ref,
    props: props,
    // Record the component responsible for creating this element.
    _owner: owner
  };

  {
    // The validation flag is currently mutative. We put it on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    element._store = {}; // To make comparing ReactElements easier for testing purposes, we make
    // the validation flag non-enumerable (where possible, which should
    // include every environment we run tests in), so the test framework
    // ignores it.

    Object.defineProperty(element._store, 'validated', {
      configurable: false,
      enumerable: false,
      writable: true,
      value: false
    }); // self and source are DEV only properties.

    Object.defineProperty(element, '_self', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: self
    }); // Two elements created in two different places should be considered
    // equal for testing purposes and therefore we hide it from enumeration.

    Object.defineProperty(element, '_source', {
      configurable: false,
      enumerable: false,
      writable: false,
      value: source
    });

    if (Object.freeze) {
      Object.freeze(element.props);
      Object.freeze(element);
    }
  }

  return element;
};
/**
 * https://github.com/reactjs/rfcs/pull/107
 * @param {*} type
 * @param {object} props
 * @param {string} key
 */

function jsxDEV(type, config, maybeKey, source, self) {
  {
    var propName; // Reserved names are extracted

    var props = {};
    var key = null;
    var ref = null; // Currently, key can be spread in as a prop. This causes a potential
    // issue if key is also explicitly declared (ie. <div {...props} key="Hi" />
    // or <div key="Hi" {...props} /> ). We want to deprecate key spread,
    // but as an intermediary step, we will use jsxDEV for everything except
    // <div {...props} key="Hi" />, because we aren't currently able to tell if
    // key is explicitly declared to be undefined or not.

    if (maybeKey !== undefined) {
      key = '' + maybeKey;
    }

    if (hasValidKey(config)) {
      key = '' + config.key;
    }

    if (hasValidRef(config)) {
      ref = config.ref;
      warnIfStringRefCannotBeAutoConverted(config, self);
    } // Remaining properties are added to a new props object


    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    } // Resolve default props


    if (type && type.defaultProps) {
      var defaultProps = type.defaultProps;

      for (propName in defaultProps) {
        if (props[propName] === undefined) {
          props[propName] = defaultProps[propName];
        }
      }
    }

    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }

    return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
  }
}

var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;

function setCurrentlyValidatingElement$1(element) {
  {
    if (element) {
      var owner = element._owner;
      var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
      ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
    } else {
      ReactDebugCurrentFrame$1.setExtraStackFrame(null);
    }
  }
}

var propTypesMisspellWarningShown;

{
  propTypesMisspellWarningShown = false;
}
/**
 * Verifies the object is a ReactElement.
 * See https://reactjs.org/docs/react-api.html#isvalidelement
 * @param {?object} object
 * @return {boolean} True if `object` is a ReactElement.
 * @final
 */

function isValidElement(object) {
  {
    return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  }
}

function getDeclarationErrorAddendum() {
  {
    if (ReactCurrentOwner$1.current) {
      var name = getComponentName(ReactCurrentOwner$1.current.type);

      if (name) {
        return '\n\nCheck the render method of `' + name + '`.';
      }
    }

    return '';
  }
}

function getSourceInfoErrorAddendum(source) {
  {
    if (source !== undefined) {
      var fileName = source.fileName.replace(/^.*[\\\/]/, '');
      var lineNumber = source.lineNumber;
      return '\n\nCheck your code at ' + fileName + ':' + lineNumber + '.';
    }

    return '';
  }
}
/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */


var ownerHasKeyUseWarning = {};

function getCurrentComponentErrorInfo(parentType) {
  {
    var info = getDeclarationErrorAddendum();

    if (!info) {
      var parentName = typeof parentType === 'string' ? parentType : parentType.displayName || parentType.name;

      if (parentName) {
        info = "\n\nCheck the top-level render call using <" + parentName + ">.";
      }
    }

    return info;
  }
}
/**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it. Error statuses are cached so a warning
 * will only be shown once.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */


function validateExplicitKey(element, parentType) {
  {
    if (!element._store || element._store.validated || element.key != null) {
      return;
    }

    element._store.validated = true;
    var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);

    if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
      return;
    }

    ownerHasKeyUseWarning[currentComponentErrorInfo] = true; // Usually the current owner is the offender, but if it accepts children as a
    // property, it may be the creator of the child that's responsible for
    // assigning it a key.

    var childOwner = '';

    if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
      // Give the component that originally created this child.
      childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
    }

    setCurrentlyValidatingElement$1(element);

    error('Each child in a list should have a unique "key" prop.' + '%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);

    setCurrentlyValidatingElement$1(null);
  }
}
/**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */


function validateChildKeys(node, parentType) {
  {
    if (typeof node !== 'object') {
      return;
    }

    if (Array.isArray(node)) {
      for (var i = 0; i < node.length; i++) {
        var child = node[i];

        if (isValidElement(child)) {
          validateExplicitKey(child, parentType);
        }
      }
    } else if (isValidElement(node)) {
      // This element was passed in a valid location.
      if (node._store) {
        node._store.validated = true;
      }
    } else if (node) {
      var iteratorFn = getIteratorFn(node);

      if (typeof iteratorFn === 'function') {
        // Entry iterators used to provide implicit keys,
        // but now we print a separate warning for them later.
        if (iteratorFn !== node.entries) {
          var iterator = iteratorFn.call(node);
          var step;

          while (!(step = iterator.next()).done) {
            if (isValidElement(step.value)) {
              validateExplicitKey(step.value, parentType);
            }
          }
        }
      }
    }
  }
}
/**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */


function validatePropTypes(element) {
  {
    var type = element.type;

    if (type === null || type === undefined || typeof type === 'string') {
      return;
    }

    var propTypes;

    if (typeof type === 'function') {
      propTypes = type.propTypes;
    } else if (typeof type === 'object' && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
    // Inner props are checked in the reconciler.
    type.$$typeof === REACT_MEMO_TYPE)) {
      propTypes = type.propTypes;
    } else {
      return;
    }

    if (propTypes) {
      // Intentionally inside to avoid triggering lazy initializers:
      var name = getComponentName(type);
      checkPropTypes(propTypes, element.props, 'prop', name, element);
    } else if (type.PropTypes !== undefined && !propTypesMisspellWarningShown) {
      propTypesMisspellWarningShown = true; // Intentionally inside to avoid triggering lazy initializers:

      var _name = getComponentName(type);

      error('Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?', _name || 'Unknown');
    }

    if (typeof type.getDefaultProps === 'function' && !type.getDefaultProps.isReactClassApproved) {
      error('getDefaultProps is only used on classic React.createClass ' + 'definitions. Use a static property named `defaultProps` instead.');
    }
  }
}
/**
 * Given a fragment, validate that it can only be provided with fragment props
 * @param {ReactElement} fragment
 */


function validateFragmentProps(fragment) {
  {
    var keys = Object.keys(fragment.props);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];

      if (key !== 'children' && key !== 'key') {
        setCurrentlyValidatingElement$1(fragment);

        error('Invalid prop `%s` supplied to `React.Fragment`. ' + 'React.Fragment can only have `key` and `children` props.', key);

        setCurrentlyValidatingElement$1(null);
        break;
      }
    }

    if (fragment.ref !== null) {
      setCurrentlyValidatingElement$1(fragment);

      error('Invalid attribute `ref` supplied to `React.Fragment`.');

      setCurrentlyValidatingElement$1(null);
    }
  }
}

function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
  {
    var validType = isValidElementType(type); // We warn in this case but don't throw. We expect the element creation to
    // succeed and there will likely be errors in render.

    if (!validType) {
      var info = '';

      if (type === undefined || typeof type === 'object' && type !== null && Object.keys(type).length === 0) {
        info += ' You likely forgot to export your component from the file ' + "it's defined in, or you might have mixed up default and named imports.";
      }

      var sourceInfo = getSourceInfoErrorAddendum(source);

      if (sourceInfo) {
        info += sourceInfo;
      } else {
        info += getDeclarationErrorAddendum();
      }

      var typeString;

      if (type === null) {
        typeString = 'null';
      } else if (Array.isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = "<" + (getComponentName(type.type) || 'Unknown') + " />";
        info = ' Did you accidentally export a JSX literal instead of a component?';
      } else {
        typeString = typeof type;
      }

      error('React.jsx: type is invalid -- expected a string (for ' + 'built-in components) or a class/function (for composite ' + 'components) but got: %s.%s', typeString, info);
    }

    var element = jsxDEV(type, props, key, source, self); // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.

    if (element == null) {
      return element;
    } // Skip key warning if the type isn't valid since our key validation logic
    // doesn't expect a non-string/function type and can throw confusing errors.
    // We don't want exception behavior to differ between dev and prod.
    // (Rendering will throw with a helpful message and as soon as the type is
    // fixed, the key warnings will appear.)


    if (validType) {
      var children = props.children;

      if (children !== undefined) {
        if (isStaticChildren) {
          if (Array.isArray(children)) {
            for (var i = 0; i < children.length; i++) {
              validateChildKeys(children[i], type);
            }

            if (Object.freeze) {
              Object.freeze(children);
            }
          } else {
            error('React.jsx: Static children should always be an array. ' + 'You are likely explicitly calling React.jsxs or React.jsxDEV. ' + 'Use the Babel transform instead.');
          }
        } else {
          validateChildKeys(children, type);
        }
      }
    }

    if (type === exports.Fragment) {
      validateFragmentProps(element);
    } else {
      validatePropTypes(element);
    }

    return element;
  }
} // These two functions exist to still get child warnings in dev

var jsxDEV$1 =  jsxWithValidation ;

exports.jsxDEV = jsxDEV$1;
  })();
}


/***/ }),

/***/ "./node_modules/react/jsx-dev-runtime.js":
/*!***********************************************!*\
  !*** ./node_modules/react/jsx-dev-runtime.js ***!
  \***********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-dev-runtime.development.js */ "./node_modules/react/cjs/react-jsx-dev-runtime.development.js");
}


/***/ }),

/***/ "./node_modules/side-channel/index.js":
/*!********************************************!*\
  !*** ./node_modules/side-channel/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var GetIntrinsic = __webpack_require__(/*! get-intrinsic */ "./node_modules/get-intrinsic/index.js");
var callBound = __webpack_require__(/*! call-bind/callBound */ "./node_modules/call-bind/callBound.js");
var inspect = __webpack_require__(/*! object-inspect */ "./node_modules/object-inspect/index.js");

var $TypeError = GetIntrinsic('%TypeError%');
var $WeakMap = GetIntrinsic('%WeakMap%', true);
var $Map = GetIntrinsic('%Map%', true);

var $weakMapGet = callBound('WeakMap.prototype.get', true);
var $weakMapSet = callBound('WeakMap.prototype.set', true);
var $weakMapHas = callBound('WeakMap.prototype.has', true);
var $mapGet = callBound('Map.prototype.get', true);
var $mapSet = callBound('Map.prototype.set', true);
var $mapHas = callBound('Map.prototype.has', true);

/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */
var listGetNode = function (list, key) { // eslint-disable-line consistent-return
	for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
		if (curr.key === key) {
			prev.next = curr.next;
			curr.next = list.next;
			list.next = curr; // eslint-disable-line no-param-reassign
			return curr;
		}
	}
};

var listGet = function (objects, key) {
	var node = listGetNode(objects, key);
	return node && node.value;
};
var listSet = function (objects, key, value) {
	var node = listGetNode(objects, key);
	if (node) {
		node.value = value;
	} else {
		// Prepend the new node to the beginning of the list
		objects.next = { // eslint-disable-line no-param-reassign
			key: key,
			next: objects.next,
			value: value
		};
	}
};
var listHas = function (objects, key) {
	return !!listGetNode(objects, key);
};

module.exports = function getSideChannel() {
	var $wm;
	var $m;
	var $o;
	var channel = {
		assert: function (key) {
			if (!channel.has(key)) {
				throw new $TypeError('Side channel does not contain ' + inspect(key));
			}
		},
		get: function (key) { // eslint-disable-line consistent-return
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapGet($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapGet($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listGet($o, key);
				}
			}
		},
		has: function (key) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if ($wm) {
					return $weakMapHas($wm, key);
				}
			} else if ($Map) {
				if ($m) {
					return $mapHas($m, key);
				}
			} else {
				if ($o) { // eslint-disable-line no-lonely-if
					return listHas($o, key);
				}
			}
			return false;
		},
		set: function (key, value) {
			if ($WeakMap && key && (typeof key === 'object' || typeof key === 'function')) {
				if (!$wm) {
					$wm = new $WeakMap();
				}
				$weakMapSet($wm, key, value);
			} else if ($Map) {
				if (!$m) {
					$m = new $Map();
				}
				$mapSet($m, key, value);
			} else {
				if (!$o) {
					/*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */
					$o = { key: {}, next: null };
				}
				listSet($o, key, value);
			}
		}
	};
	return channel;
};


/***/ }),

/***/ "?4f7e":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (function() {

/* (ignored) */

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ // runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js!"), __webpack_exec__("./node_modules/next/dist/client/router.js"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvYW1wLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2FtcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvc2lkZS1lZmZlY3QuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fZXJyb3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2FwaS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvbWVkaWEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9jYWxsLWJpbmQvY2FsbEJvdW5kLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvY2FsbC1iaW5kL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZnVuY3Rpb24tYmluZC9pbXBsZW1lbnRhdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2Z1bmN0aW9uLWJpbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9nZXQtaW50cmluc2ljL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvaGFzLXN5bWJvbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9oYXMtc3ltYm9scy9zaGFtcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL2hhcy9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0LXNlby9saWIvbmV4dC1zZW8ubW9kdWxlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vX05fRS8iLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9pbmRleC5jc3M/ZDUyMiIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1zdHlsZS1sb2FkZXIvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Vycm9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL29iamVjdC1pbnNwZWN0L2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcHJvY2Vzcy9icm93c2VyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXMvbGliL2Zvcm1hdHMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvcGFyc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9xcy9saWIvc3RyaW5naWZ5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcXMvbGliL3V0aWxzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QvY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3NpZGUtY2hhbm5lbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FL2lnbm9yZWR8QzpcXERldmVsb3BtZW50XFxDb250aW5lbnRhbERpYWdub3N0aWNzXFxzdHJhcGlcXGNvbnRpbmVudGFsLWxhYnNcXGZyb250ZW5kXFxub2RlX21vZHVsZXNcXG9iamVjdC1pbnNwZWN0fC4vdXRpbC5pbnNwZWN0Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIm9iaiIsIl9fZXNNb2R1bGUiLCJBbXBTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJpc0luQW1wTW9kZSIsInVzZUFtcCIsIl9hbXBDb250ZXh0IiwiYW1wRmlyc3QiLCJoeWJyaWQiLCJoYXNRdWVyeSIsInVzZUNvbnRleHQiLCJkZWZhdWx0SGVhZCIsIl9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkIiwiX3NpZGVFZmZlY3QiLCJfaGVhZE1hbmFnZXJDb250ZXh0IiwiX2FtcCIsIl9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSIsIldlYWtNYXAiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsImluQW1wTW9kZSIsImhlYWQiLCJjcmVhdGVFbGVtZW50IiwiY2hhclNldCIsInB1c2giLCJuYW1lIiwiY29udGVudCIsIm9ubHlSZWFjdEVsZW1lbnQiLCJsaXN0IiwiY2hpbGQiLCJ0eXBlIiwiRnJhZ21lbnQiLCJjb25jYXQiLCJDaGlsZHJlbiIsInRvQXJyYXkiLCJwcm9wcyIsImNoaWxkcmVuIiwicmVkdWNlIiwiZnJhZ21lbnRMaXN0IiwiZnJhZ21lbnRDaGlsZCIsIk1FVEFUWVBFUyIsInVuaXF1ZSIsImtleXMiLCJTZXQiLCJ0YWdzIiwibWV0YVR5cGVzIiwibWV0YUNhdGVnb3JpZXMiLCJoIiwiaXNVbmlxdWUiLCJoYXNLZXkiLCJpbmRleE9mIiwic2xpY2UiLCJhZGQiLCJpIiwibGVuIiwibGVuZ3RoIiwibWV0YXR5cGUiLCJjYXRlZ29yeSIsImNhdGVnb3JpZXMiLCJyZWR1Y2VDb21wb25lbnRzIiwiaGVhZEVsZW1lbnRzIiwiaGVhZEVsZW1lbnQiLCJoZWFkRWxlbWVudENoaWxkcmVuIiwicmV2ZXJzZSIsImZpbHRlciIsIm1hcCIsImMiLCJjbG9uZUVsZW1lbnQiLCJIZWFkIiwiYW1wU3RhdGUiLCJoZWFkTWFuYWdlciIsIkhlYWRNYW5hZ2VyQ29udGV4dCIsInJlZHVjZUNvbXBvbmVudHNUb1N0YXRlIiwiX2RlZmF1bHQiLCJpc1NlcnZlciIsIl9oYXNIZWFkTWFuYWdlciIsImVtaXRDaGFuZ2UiLCJ1cGRhdGVIZWFkIiwibW91bnRlZEluc3RhbmNlcyIsIkNvbXBvbmVudCIsIl91dGlscyIsIkFwcEluaXRpYWxQcm9wcyIsIk5leHRXZWJWaXRhbHNNZXRyaWMiLCJhcHBHZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwicGFnZVByb3BzIiwiQXBwIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIl9oZWFkIiwic3RhdHVzQ29kZXMiLCJfZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZXJyIiwic3RhdHVzQ29kZSIsIkVycm9yIiwidGl0bGUiLCJzdHlsZSIsInN0eWxlcyIsImVycm9yIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJoMSIsImgyIiwiaHJlZiIsImNvbG9yIiwiYmFja2dyb3VuZCIsImZvbnRGYW1pbHkiLCJoZWlnaHQiLCJ0ZXh0QWxpZ24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImxpbmVIZWlnaHQiLCJ2ZXJ0aWNhbEFsaWduIiwiYm9yZGVyUmlnaHQiLCJtYXJnaW4iLCJtYXJnaW5SaWdodCIsInBhZGRpbmciLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJNeUFwcCIsImdsb2JhbCIsImF0dHJpYnV0ZXMiLCJtZXRhZGF0YSIsImZhdmljb24iLCJtZXRhVGl0bGVTdWZmaXgiLCJnZXRTdHJhcGlNZWRpYSIsImRhdGEiLCJ1cmwiLCJtZXRhRGVzY3JpcHRpb24iLCJpbWFnZXMiLCJ2YWx1ZXMiLCJzaGFyZUltYWdlIiwiZm9ybWF0cyIsImltYWdlIiwid2lkdGgiLCJjYXJkVHlwZSIsInR3aXR0ZXJDYXJkVHlwZSIsImhhbmRsZSIsInR3aXR0ZXJVc2VybmFtZSIsImFwcENvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiYXBwUHJvcHMiLCJnZXRHbG9iYWxEYXRhIiwicm91dGVyIiwibG9jYWxlIiwiZ2xvYmFsTG9jYWxlIiwiZ2V0U3RyYXBpVVJMIiwicGF0aCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImZldGNoQVBJIiwidXJsUGFyYW1zT2JqZWN0Iiwib3B0aW9ucyIsIm1lcmdlZE9wdGlvbnMiLCJoZWFkZXJzIiwicXVlcnlTdHJpbmciLCJxcyIsInJlcXVlc3RVcmwiLCJmZXRjaCIsInJlc3BvbnNlIiwib2siLCJzdGF0dXNUZXh0IiwianNvbiIsImdldFBhZ2VEYXRhIiwic2x1ZyIsInByZXZpZXciLCJncWxFbmRwb2ludCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJ2YXJpYWJsZXMiLCJwdWJsaWNhdGlvblN0YXRlIiwicGFnZXNSZXMiLCJwYWdlc0RhdGEiLCJwYWdlcyIsImdsb2JhbFJlcyIsInN0YXJ0c1dpdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBYTs7QUFBQUEsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLHVCQUFBLEdBQXdCLEtBQUssQ0FBN0I7O0FBQStCLElBQUlDLE1BQU0sR0FBQ0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsNENBQUQsQ0FBUixDQUFqQzs7QUFBb0QsU0FBU0Qsc0JBQVQsQ0FBZ0NFLEdBQWhDLEVBQW9DO0FBQUMsU0FBT0EsR0FBRyxJQUFFQSxHQUFHLENBQUNDLFVBQVQsR0FBb0JELEdBQXBCLEdBQXdCO0FBQUMsZUFBUUE7QUFBVCxHQUEvQjtBQUE4Qzs7QUFBQSxJQUFNRSxlQUFlLEdBQUMsYUFBYUwsTUFBTSxXQUFOLENBQWVNLGFBQWYsQ0FBNkIsRUFBN0IsQ0FBbkM7O0FBQW9FUCx1QkFBQSxHQUF3Qk0sZUFBeEI7O0FBQXdDLFVBQXVDO0FBQUNBLGlCQUFlLENBQUNFLFdBQWhCLEdBQTRCLGlCQUE1QjtBQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBalk7Ozs7QUFBQVIsa0JBQUEsR0FBbUIsSUFBbkI7QUFBd0JBLG1CQUFBLEdBQW9CUyxXQUFwQjtBQUFnQ1QsY0FBQSxHQUFlVSxNQUFmOztBQUFzQixJQUFJVCxNQUFNLEdBQUNDLHNCQUFzQixDQUFD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TyxNQUFNLE1BQU0sS0FBSyxjQUFjLE9BQU8sT0FBTyxPQUFPLE1BQU0sT0FBTyxNQUFNLEtBQUsscUJBQXFCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxNQUFNLE1BQU0sS0FBSyxhQUFhLGFBQWEsUUFBUSxNQUFNLE1BQU0sTUFBTSxhQUFhLE9BQU8sT0FBTyxNQUFNLFFBQVEsV0FBVyxlQUFlLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxNQUFNLE9BQU8sTUFBTSxLQUFLLHFCQUFxQix1QkFBdUIsUUFBUSxPQUFPLE1BQU0sT0FBTyxNQUFNLFNBQVMsdUJBQXVCLHFCQUFxQix1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLEtBQUssV0FBVyxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsYUFBYSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsUUFBUSxPQUFPLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sT0FBTyxNQUFNLEtBQUssdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyx1QkFBdUIscUJBQXFCLE9BQU8sT0FBTyxNQUFNLE1BQU0sTUFBTSxLQUFLLGFBQWEsY0FBYyxNQUFNLE1BQU0sTUFBTSxpQkFBaUIsV0FBVyxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxNQUFNLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLFNBQVMsTUFBTSxLQUFLLHVCQUF1Qix1QkFBdUIsUUFBUSxPQUFPLE1BQU0sS0FBSyxhQUFhLGFBQWEsT0FBTyw0QkFBNEIsTUFBTSxPQUFPLHVCQUF1QixxQkFBcUIsdUJBQXVCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxZQUFZLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxXQUFXLFdBQVcsUUFBUSxLQUFLLFdBQVcsV0FBVyxRQUFRLE1BQU0sV0FBVyxXQUFXLFFBQVEsTUFBTSxXQUFXLE9BQU8sS0FBSyxhQUFhLE9BQU8sVUFBVSxhQUFhLGFBQWEsT0FBTyxPQUFPLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxVQUFVLE1BQU0sU0FBUyxXQUFXLFlBQVksV0FBVyxPQUFPLFNBQVMsTUFBTSxRQUFRLGFBQWEsUUFBUSxtQkFBbUIsTUFBTSxZQUFZLHFCQUFxQix1QkFBdUIsUUFBUSxTQUFTLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxPQUFPLEtBQUssV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxPQUFPLEtBQUssV0FBVyxPQUFPLFFBQVEsTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsTUFBTSxPQUFPLEtBQUssV0FBVyxPQUFPLFFBQVEsT0FBTyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sT0FBTyxLQUFLLGNBQWMsWUFBWSxVQUFVLFVBQVUsWUFBWSxhQUFhLE1BQU0sTUFBTSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLE9BQU8sUUFBUSxLQUFLLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFVBQVUsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFFBQVEsT0FBTyxXQUFXLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsUUFBUSxPQUFPLFdBQVcsV0FBVyxRQUFRLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxLQUFLLFFBQVEsS0FBSyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEsT0FBTyxVQUFVLFFBQVEs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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3QkFBd0I7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlFQUFpRTtBQUNyRixLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBOztBQUVBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSw4RkFBOEYsZUFBZTtBQUM3RztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUssRUFBRTs7QUFFUCxpREFBaUQ7QUFDakQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMkJBQTJCOztBQUUzQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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RUEsbUVBQW1FOztBQUVuRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsRUFBRTtBQUNiLFdBQVcsY0FBYztBQUN6QixXQUFXLEVBQUU7QUFDYixXQUFXLEVBQUU7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsRUFBRTtBQUNiO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLEVBQUU7O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMzSEEsZSIsImZpbGUiOiJzdGF0aWMvY2h1bmtzL3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkFtcFN0YXRlQ29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBBbXBTdGF0ZUNvbnRleHQ9LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO2V4cG9ydHMuQW1wU3RhdGVDb250ZXh0PUFtcFN0YXRlQ29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7QW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lPSdBbXBTdGF0ZUNvbnRleHQnO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNJbkFtcE1vZGU9aXNJbkFtcE1vZGU7ZXhwb3J0cy51c2VBbXA9dXNlQW1wO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfYW1wQ29udGV4dD1yZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIGlzSW5BbXBNb2RlKHthbXBGaXJzdD1mYWxzZSxoeWJyaWQ9ZmFsc2UsaGFzUXVlcnk9ZmFsc2V9PXt9KXtyZXR1cm4gYW1wRmlyc3R8fGh5YnJpZCYmaGFzUXVlcnk7fWZ1bmN0aW9uIHVzZUFtcCgpey8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbnJldHVybiBpc0luQW1wTW9kZShfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCkpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHRIZWFkPWRlZmF1bHRIZWFkO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVXaWxkY2FyZChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfc2lkZUVmZmVjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL3NpZGUtZWZmZWN0XCIpKTt2YXIgX2FtcENvbnRleHQ9cmVxdWlyZShcIi4vYW1wLWNvbnRleHRcIik7dmFyIF9oZWFkTWFuYWdlckNvbnRleHQ9cmVxdWlyZShcIi4vaGVhZC1tYW5hZ2VyLWNvbnRleHRcIik7dmFyIF9hbXA9cmVxdWlyZShcIi4vYW1wXCIpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9ZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCl7aWYodHlwZW9mIFdlYWtNYXAhPT1cImZ1bmN0aW9uXCIpcmV0dXJuIG51bGw7dmFyIGNhY2hlPW5ldyBXZWFrTWFwKCk7X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlPWZ1bmN0aW9uKCl7cmV0dXJuIGNhY2hlO307cmV0dXJuIGNhY2hlO31mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmope2lmKG9iaiYmb2JqLl9fZXNNb2R1bGUpe3JldHVybiBvYmo7fWlmKG9iaj09PW51bGx8fHR5cGVvZiBvYmohPT1cIm9iamVjdFwiJiZ0eXBlb2Ygb2JqIT09XCJmdW5jdGlvblwiKXtyZXR1cm57ZGVmYXVsdDpvYmp9O312YXIgY2FjaGU9X2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7aWYoY2FjaGUmJmNhY2hlLmhhcyhvYmopKXtyZXR1cm4gY2FjaGUuZ2V0KG9iaik7fXZhciBuZXdPYmo9e307dmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvcj1PYmplY3QuZGVmaW5lUHJvcGVydHkmJk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7Zm9yKHZhciBrZXkgaW4gb2JqKXtpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLGtleSkpe3ZhciBkZXNjPWhhc1Byb3BlcnR5RGVzY3JpcHRvcj9PYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaixrZXkpOm51bGw7aWYoZGVzYyYmKGRlc2MuZ2V0fHxkZXNjLnNldCkpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosa2V5LGRlc2MpO31lbHNle25ld09ialtrZXldPW9ialtrZXldO319fW5ld09iai5kZWZhdWx0PW9iajtpZihjYWNoZSl7Y2FjaGUuc2V0KG9iaixuZXdPYmopO31yZXR1cm4gbmV3T2JqO31mdW5jdGlvbiBkZWZhdWx0SGVhZChpbkFtcE1vZGU9ZmFsc2Upe2NvbnN0IGhlYWQ9Wy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLHtjaGFyU2V0OlwidXRmLThcIn0pXTtpZighaW5BbXBNb2RlKXtoZWFkLnB1c2goLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse25hbWU6XCJ2aWV3cG9ydFwiLGNvbnRlbnQ6XCJ3aWR0aD1kZXZpY2Utd2lkdGhcIn0pKTt9cmV0dXJuIGhlYWQ7fWZ1bmN0aW9uIG9ubHlSZWFjdEVsZW1lbnQobGlzdCxjaGlsZCl7Ly8gUmVhY3QgY2hpbGRyZW4gY2FuIGJlIFwic3RyaW5nXCIgb3IgXCJudW1iZXJcIiBpbiB0aGlzIGNhc2Ugd2UgaWdub3JlIHRoZW0gZm9yIGJhY2t3YXJkcyBjb21wYXRcbmlmKHR5cGVvZiBjaGlsZD09PSdzdHJpbmcnfHx0eXBlb2YgY2hpbGQ9PT0nbnVtYmVyJyl7cmV0dXJuIGxpc3Q7fS8vIEFkZHMgc3VwcG9ydCBmb3IgUmVhY3QuRnJhZ21lbnRcbmlmKGNoaWxkLnR5cGU9PT1fcmVhY3QuZGVmYXVsdC5GcmFnbWVudCl7cmV0dXJuIGxpc3QuY29uY2F0KF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoY2hpbGQucHJvcHMuY2hpbGRyZW4pLnJlZHVjZSgoZnJhZ21lbnRMaXN0LGZyYWdtZW50Q2hpbGQpPT57aWYodHlwZW9mIGZyYWdtZW50Q2hpbGQ9PT0nc3RyaW5nJ3x8dHlwZW9mIGZyYWdtZW50Q2hpbGQ9PT0nbnVtYmVyJyl7cmV0dXJuIGZyYWdtZW50TGlzdDt9cmV0dXJuIGZyYWdtZW50TGlzdC5jb25jYXQoZnJhZ21lbnRDaGlsZCk7fSxbXSkpO31yZXR1cm4gbGlzdC5jb25jYXQoY2hpbGQpO31jb25zdCBNRVRBVFlQRVM9WyduYW1lJywnaHR0cEVxdWl2JywnY2hhclNldCcsJ2l0ZW1Qcm9wJ107LypcbiByZXR1cm5zIGEgZnVuY3Rpb24gZm9yIGZpbHRlcmluZyBoZWFkIGNoaWxkIGVsZW1lbnRzXG4gd2hpY2ggc2hvdWxkbid0IGJlIGR1cGxpY2F0ZWQsIGxpa2UgPHRpdGxlLz5cbiBBbHNvIGFkZHMgc3VwcG9ydCBmb3IgZGVkdXBsaWNhdGVkIGBrZXlgIHByb3BlcnRpZXNcbiovZnVuY3Rpb24gdW5pcXVlKCl7Y29uc3Qga2V5cz1uZXcgU2V0KCk7Y29uc3QgdGFncz1uZXcgU2V0KCk7Y29uc3QgbWV0YVR5cGVzPW5ldyBTZXQoKTtjb25zdCBtZXRhQ2F0ZWdvcmllcz17fTtyZXR1cm4gaD0+e2xldCBpc1VuaXF1ZT10cnVlO2xldCBoYXNLZXk9ZmFsc2U7aWYoaC5rZXkmJnR5cGVvZiBoLmtleSE9PSdudW1iZXInJiZoLmtleS5pbmRleE9mKCckJyk+MCl7aGFzS2V5PXRydWU7Y29uc3Qga2V5PWgua2V5LnNsaWNlKGgua2V5LmluZGV4T2YoJyQnKSsxKTtpZihrZXlzLmhhcyhrZXkpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXtrZXlzLmFkZChrZXkpO319Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxuc3dpdGNoKGgudHlwZSl7Y2FzZSd0aXRsZSc6Y2FzZSdiYXNlJzppZih0YWdzLmhhcyhoLnR5cGUpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXt0YWdzLmFkZChoLnR5cGUpO31icmVhaztjYXNlJ21ldGEnOmZvcihsZXQgaT0wLGxlbj1NRVRBVFlQRVMubGVuZ3RoO2k8bGVuO2krKyl7Y29uc3QgbWV0YXR5cGU9TUVUQVRZUEVTW2ldO2lmKCFoLnByb3BzLmhhc093blByb3BlcnR5KG1ldGF0eXBlKSljb250aW51ZTtpZihtZXRhdHlwZT09PSdjaGFyU2V0Jyl7aWYobWV0YVR5cGVzLmhhcyhtZXRhdHlwZSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle21ldGFUeXBlcy5hZGQobWV0YXR5cGUpO319ZWxzZXtjb25zdCBjYXRlZ29yeT1oLnByb3BzW21ldGF0eXBlXTtjb25zdCBjYXRlZ29yaWVzPW1ldGFDYXRlZ29yaWVzW21ldGF0eXBlXXx8bmV3IFNldCgpO2lmKChtZXRhdHlwZSE9PSduYW1lJ3x8IWhhc0tleSkmJmNhdGVnb3JpZXMuaGFzKGNhdGVnb3J5KSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7Y2F0ZWdvcmllcy5hZGQoY2F0ZWdvcnkpO21ldGFDYXRlZ29yaWVzW21ldGF0eXBlXT1jYXRlZ29yaWVzO319fWJyZWFrO31yZXR1cm4gaXNVbmlxdWU7fTt9LyoqXG4gKlxuICogQHBhcmFtIGhlYWRFbGVtZW50cyBMaXN0IG9mIG11bHRpcGxlIDxIZWFkPiBpbnN0YW5jZXNcbiAqL2Z1bmN0aW9uIHJlZHVjZUNvbXBvbmVudHMoaGVhZEVsZW1lbnRzLHByb3BzKXtyZXR1cm4gaGVhZEVsZW1lbnRzLnJlZHVjZSgobGlzdCxoZWFkRWxlbWVudCk9Pntjb25zdCBoZWFkRWxlbWVudENoaWxkcmVuPV9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLnRvQXJyYXkoaGVhZEVsZW1lbnQucHJvcHMuY2hpbGRyZW4pO3JldHVybiBsaXN0LmNvbmNhdChoZWFkRWxlbWVudENoaWxkcmVuKTt9LFtdKS5yZWR1Y2Uob25seVJlYWN0RWxlbWVudCxbXSkucmV2ZXJzZSgpLmNvbmNhdChkZWZhdWx0SGVhZChwcm9wcy5pbkFtcE1vZGUpKS5maWx0ZXIodW5pcXVlKCkpLnJldmVyc2UoKS5tYXAoKGMsaSk9Pntjb25zdCBrZXk9Yy5rZXl8fGk7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0nZGV2ZWxvcG1lbnQnJiZwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFMmJiFwcm9wcy5pbkFtcE1vZGUpe2lmKGMudHlwZT09PSdsaW5rJyYmYy5wcm9wc1snaHJlZiddJiYvLyBUT0RPKHByYXRlZWtiaEApOiBSZXBsYWNlIHRoaXMgd2l0aCBjb25zdCBmcm9tIGBjb25zdGFudHNgIHdoZW4gdGhlIHRyZWUgc2hha2luZyB3b3Jrcy5cblsnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MnLCdodHRwczovL3VzZS50eXBla2l0Lm5ldC8nXS5zb21lKHVybD0+Yy5wcm9wc1snaHJlZiddLnN0YXJ0c1dpdGgodXJsKSkpe2NvbnN0IG5ld1Byb3BzPXsuLi4oYy5wcm9wc3x8e30pfTtuZXdQcm9wc1snZGF0YS1ocmVmJ109bmV3UHJvcHNbJ2hyZWYnXTtuZXdQcm9wc1snaHJlZiddPXVuZGVmaW5lZDsvLyBBZGQgdGhpcyBhdHRyaWJ1dGUgdG8gbWFrZSBpdCBlYXN5IHRvIGlkZW50aWZ5IG9wdGltaXplZCB0YWdzXG5uZXdQcm9wc1snZGF0YS1vcHRpbWl6ZWQtZm9udHMnXT10cnVlO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYyxuZXdQcm9wcyk7fX1yZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY2xvbmVFbGVtZW50KGMse2tleX0pO30pO30vKipcbiAqIFRoaXMgY29tcG9uZW50IGluamVjdHMgZWxlbWVudHMgdG8gYDxoZWFkPmAgb2YgeW91ciBwYWdlLlxuICogVG8gYXZvaWQgZHVwbGljYXRlZCBgdGFnc2AgaW4gYDxoZWFkPmAgeW91IGNhbiB1c2UgdGhlIGBrZXlgIHByb3BlcnR5LCB3aGljaCB3aWxsIG1ha2Ugc3VyZSBldmVyeSB0YWcgaXMgb25seSByZW5kZXJlZCBvbmNlLlxuICovZnVuY3Rpb24gSGVhZCh7Y2hpbGRyZW59KXtjb25zdCBhbXBTdGF0ZT0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2FtcENvbnRleHQuQW1wU3RhdGVDb250ZXh0KTtjb25zdCBoZWFkTWFuYWdlcj0oMCxfcmVhY3QudXNlQ29udGV4dCkoX2hlYWRNYW5hZ2VyQ29udGV4dC5IZWFkTWFuYWdlckNvbnRleHQpO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9zaWRlRWZmZWN0LmRlZmF1bHQse3JlZHVjZUNvbXBvbmVudHNUb1N0YXRlOnJlZHVjZUNvbXBvbmVudHMsaGVhZE1hbmFnZXI6aGVhZE1hbmFnZXIsaW5BbXBNb2RlOigwLF9hbXAuaXNJbkFtcE1vZGUpKGFtcFN0YXRlKX0sY2hpbGRyZW4pO312YXIgX2RlZmF1bHQ9SGVhZDtleHBvcnRzLmRlZmF1bHQ9X2RlZmF1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1yZXF1aXJlKFwicmVhY3RcIik7Y29uc3QgaXNTZXJ2ZXI9dHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnO2NsYXNzIF9kZWZhdWx0IGV4dGVuZHMgX3JlYWN0LkNvbXBvbmVudHtjb25zdHJ1Y3Rvcihwcm9wcyl7c3VwZXIocHJvcHMpO3RoaXMuX2hhc0hlYWRNYW5hZ2VyPXZvaWQgMDt0aGlzLmVtaXRDaGFuZ2U9KCk9PntpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci51cGRhdGVIZWFkKHRoaXMucHJvcHMucmVkdWNlQ29tcG9uZW50c1RvU3RhdGUoWy4uLnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlc10sdGhpcy5wcm9wcykpO319O3RoaXMuX2hhc0hlYWRNYW5hZ2VyPXRoaXMucHJvcHMuaGVhZE1hbmFnZXImJnRoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcztpZihpc1NlcnZlciYmdGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7dGhpcy5lbWl0Q2hhbmdlKCk7fX1jb21wb25lbnREaWRNb3VudCgpe2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLm1vdW50ZWRJbnN0YW5jZXMuYWRkKHRoaXMpO310aGlzLmVtaXRDaGFuZ2UoKTt9Y29tcG9uZW50RGlkVXBkYXRlKCl7dGhpcy5lbWl0Q2hhbmdlKCk7fWNvbXBvbmVudFdpbGxVbm1vdW50KCl7aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5kZWxldGUodGhpcyk7fXRoaXMuZW1pdENoYW5nZSgpO31yZW5kZXIoKXtyZXR1cm4gbnVsbDt9fWV4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpZGUtZWZmZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO3ZhciBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0PXJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdFwiKTtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzO2V4cG9ydHMuTmV4dFdlYlZpdGFsc01ldHJpYz1fdXRpbHMuTmV4dFdlYlZpdGFsc01ldHJpYzsvKipcbiAqIGBBcHBgIGNvbXBvbmVudCBpcyB1c2VkIGZvciBpbml0aWFsaXplIG9mIHBhZ2VzLiBJdCBhbGxvd3MgZm9yIG92ZXJ3cml0aW5nIGFuZCBmdWxsIGNvbnRyb2wgb2YgdGhlIGBwYWdlYCBpbml0aWFsaXphdGlvbi5cbiAqIFRoaXMgYWxsb3dzIGZvciBrZWVwaW5nIHN0YXRlIGJldHdlZW4gbmF2aWdhdGlvbiwgY3VzdG9tIGVycm9yIGhhbmRsaW5nLCBpbmplY3RpbmcgYWRkaXRpb25hbCBkYXRhLlxuICovYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtDb21wb25lbnQsY3R4fSl7Y29uc3QgcGFnZVByb3BzPWF3YWl0KDAsX3V0aWxzLmxvYWRHZXRJbml0aWFsUHJvcHMpKENvbXBvbmVudCxjdHgpO3JldHVybntwYWdlUHJvcHN9O31jbGFzcyBBcHAgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7Q29tcG9uZW50LHBhZ2VQcm9wc309dGhpcy5wcm9wcztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQscGFnZVByb3BzKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9X2FwcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2hlYWQ9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWRcIikpO2NvbnN0IHN0YXR1c0NvZGVzPXs0MDA6J0JhZCBSZXF1ZXN0Jyw0MDQ6J1RoaXMgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQnLDQwNTonTWV0aG9kIE5vdCBBbGxvd2VkJyw1MDA6J0ludGVybmFsIFNlcnZlciBFcnJvcid9O2Z1bmN0aW9uIF9nZXRJbml0aWFsUHJvcHMoe3JlcyxlcnJ9KXtjb25zdCBzdGF0dXNDb2RlPXJlcyYmcmVzLnN0YXR1c0NvZGU/cmVzLnN0YXR1c0NvZGU6ZXJyP2Vyci5zdGF0dXNDb2RlOjQwNDtyZXR1cm57c3RhdHVzQ29kZX07fS8qKlxuICogYEVycm9yYCBjb21wb25lbnQgdXNlZCBmb3IgaGFuZGxpbmcgZXJyb3JzLlxuICovY2xhc3MgRXJyb3IgZXh0ZW5kcyBfcmVhY3QuZGVmYXVsdC5Db21wb25lbnR7cmVuZGVyKCl7Y29uc3R7c3RhdHVzQ29kZX09dGhpcy5wcm9wcztjb25zdCB0aXRsZT10aGlzLnByb3BzLnRpdGxlfHxzdGF0dXNDb2Rlc1tzdGF0dXNDb2RlXXx8J0FuIHVuZXhwZWN0ZWQgZXJyb3IgaGFzIG9jY3VycmVkJztyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLHtzdHlsZTpzdHlsZXMuZXJyb3J9LC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KF9oZWFkLmRlZmF1bHQsbnVsbCwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsbnVsbCxzdGF0dXNDb2RlP2Ake3N0YXR1c0NvZGV9OiAke3RpdGxlfWA6J0FwcGxpY2F0aW9uIGVycm9yOiBhIGNsaWVudC1zaWRlIGV4Y2VwdGlvbiBoYXMgb2NjdXJyZWQnKSksLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIixudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIix7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDonYm9keSB7IG1hcmdpbjogMCB9J319KSxzdGF0dXNDb2RlPy8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiaDFcIix7c3R5bGU6c3R5bGVzLmgxfSxzdGF0dXNDb2RlKTpudWxsLC8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIse3N0eWxlOnN0eWxlcy5kZXNjfSwvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImgyXCIse3N0eWxlOnN0eWxlcy5oMn0sdGhpcy5wcm9wcy50aXRsZXx8c3RhdHVzQ29kZT90aXRsZTovKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChfcmVhY3QuZGVmYXVsdC5GcmFnbWVudCxudWxsLFwiQXBwbGljYXRpb24gZXJyb3I6IGEgY2xpZW50LXNpZGUgZXhjZXB0aW9uIGhhcyBvY2N1cnJlZCAoXCIsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJhXCIse2hyZWY6XCJodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9jbGllbnQtc2lkZS1leGNlcHRpb24tb2NjdXJyZWRcIn0sXCJkZXZlbG9wZXIgZ3VpZGFuY2VcIiksXCIpXCIpLFwiLlwiKSkpKTt9fWV4cG9ydHMuZGVmYXVsdD1FcnJvcjtFcnJvci5kaXNwbGF5TmFtZT0nRXJyb3JQYWdlJztFcnJvci5nZXRJbml0aWFsUHJvcHM9X2dldEluaXRpYWxQcm9wcztFcnJvci5vcmlnR2V0SW5pdGlhbFByb3BzPV9nZXRJbml0aWFsUHJvcHM7Y29uc3Qgc3R5bGVzPXtlcnJvcjp7Y29sb3I6JyMwMDAnLGJhY2tncm91bmQ6JyNmZmYnLGZvbnRGYW1pbHk6Jy1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgUm9ib3RvLCBcIlNlZ29lIFVJXCIsIFwiRmlyYSBTYW5zXCIsIEF2ZW5pciwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBcIkx1Y2lkYSBHcmFuZGVcIiwgc2Fucy1zZXJpZicsaGVpZ2h0OicxMDB2aCcsdGV4dEFsaWduOidjZW50ZXInLGRpc3BsYXk6J2ZsZXgnLGZsZXhEaXJlY3Rpb246J2NvbHVtbicsYWxpZ25JdGVtczonY2VudGVyJyxqdXN0aWZ5Q29udGVudDonY2VudGVyJ30sZGVzYzp7ZGlzcGxheTonaW5saW5lLWJsb2NrJyx0ZXh0QWxpZ246J2xlZnQnLGxpbmVIZWlnaHQ6JzQ5cHgnLGhlaWdodDonNDlweCcsdmVydGljYWxBbGlnbjonbWlkZGxlJ30saDE6e2Rpc3BsYXk6J2lubGluZS1ibG9jaycsYm9yZGVyUmlnaHQ6JzFweCBzb2xpZCByZ2JhKDAsIDAsIDAsLjMpJyxtYXJnaW46MCxtYXJnaW5SaWdodDonMjBweCcscGFkZGluZzonMTBweCAyM3B4IDEwcHggMCcsZm9udFNpemU6JzI0cHgnLGZvbnRXZWlnaHQ6NTAwLHZlcnRpY2FsQWxpZ246J3RvcCd9LGgyOntmb250U2l6ZTonMTRweCcsZm9udFdlaWdodDonbm9ybWFsJyxsaW5lSGVpZ2h0Oidpbmhlcml0JyxtYXJnaW46MCxwYWRkaW5nOjB9fTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPV9lcnJvci5qcy5tYXAiLCJpbXBvcnQgQXBwIGZyb20gXCJuZXh0L2FwcFwiXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBFcnJvclBhZ2UgZnJvbSBcIm5leHQvZXJyb3JcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IERlZmF1bHRTZW8gfSBmcm9tIFwibmV4dC1zZW9cIlxuaW1wb3J0IHsgZ2V0U3RyYXBpTWVkaWEgfSBmcm9tIFwidXRpbHMvbWVkaWFcIlxuaW1wb3J0IHsgZ2V0R2xvYmFsRGF0YSB9IGZyb20gXCJ1dGlscy9hcGlcIlxuaW1wb3J0IFwiQC9zdHlsZXMvaW5kZXguY3NzXCJcblxuY29uc3QgTXlBcHAgPSAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSA9PiB7XG4gIC8vIEV4dHJhY3QgdGhlIGRhdGEgd2UgbmVlZFxuICBjb25zdCB7IGdsb2JhbCB9ID0gcGFnZVByb3BzXG4gIGlmIChnbG9iYWwgPT0gbnVsbCkge1xuICAgIHJldHVybiA8RXJyb3JQYWdlIHN0YXR1c0NvZGU9ezQwNH0gLz5cbiAgfVxuXG4gIGNvbnN0IHsgbWV0YWRhdGEsIGZhdmljb24sIG1ldGFUaXRsZVN1ZmZpeCB9ID0gZ2xvYmFsLmF0dHJpYnV0ZXNcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7LyogRmF2aWNvbiAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGlua1xuICAgICAgICAgIHJlbD1cInNob3J0Y3V0IGljb25cIlxuICAgICAgICAgIGhyZWY9e2dldFN0cmFwaU1lZGlhKGZhdmljb24uZGF0YS5hdHRyaWJ1dGVzLnVybCl9XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7LyogR2xvYmFsIHNpdGUgbWV0YWRhdGEgKi99XG4gICAgICA8RGVmYXVsdFNlb1xuICAgICAgICB0aXRsZVRlbXBsYXRlPXtgJXMgfCAke21ldGFUaXRsZVN1ZmZpeH1gfVxuICAgICAgICB0aXRsZT1cIlBhZ2VcIlxuICAgICAgICBkZXNjcmlwdGlvbj17bWV0YWRhdGEubWV0YURlc2NyaXB0aW9ufVxuICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICBpbWFnZXM6IE9iamVjdC52YWx1ZXMoXG4gICAgICAgICAgICBtZXRhZGF0YS5zaGFyZUltYWdlLmRhdGEuYXR0cmlidXRlcy5mb3JtYXRzXG4gICAgICAgICAgKS5tYXAoKGltYWdlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICB1cmw6IGdldFN0cmFwaU1lZGlhKGltYWdlLnVybCksXG4gICAgICAgICAgICAgIHdpZHRoOiBpbWFnZS53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBpbWFnZS5oZWlnaHQsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgIH19XG4gICAgICAgIHR3aXR0ZXI9e3tcbiAgICAgICAgICBjYXJkVHlwZTogbWV0YWRhdGEudHdpdHRlckNhcmRUeXBlLFxuICAgICAgICAgIGhhbmRsZTogbWV0YWRhdGEudHdpdHRlclVzZXJuYW1lLFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICAgIHsvKiBEaXNwbGF5IHRoZSBjb250ZW50ICovfVxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGdldEluaXRpYWxQcm9wcyBkaXNhYmxlcyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbiBmb3IgcGFnZXMgdGhhdCBkb24ndFxuLy8gaGF2ZSBnZXRTdGF0aWNQcm9wcy4gU28gW1suLi5zbHVnXV0gcGFnZXMgc3RpbGwgZ2V0IFNTRy5cbi8vIEhvcGVmdWxseSB3ZSBjYW4gcmVwbGFjZSB0aGlzIHdpdGggZ2V0U3RhdGljUHJvcHMgb25jZSB0aGlzIGlzc3VlIGlzIGZpeGVkOlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZlcmNlbC9uZXh0LmpzL2Rpc2N1c3Npb25zLzEwOTQ5XG5NeUFwcC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoYXBwQ29udGV4dCkgPT4ge1xuICBjb25zb2xlLmxvZyhcImFwcENvbnRleHQ6IFwiLCBhcHBDb250ZXh0KVxuICAvLyBDYWxscyBwYWdlJ3MgYGdldEluaXRpYWxQcm9wc2AgYW5kIGZpbGxzIGBhcHBQcm9wcy5wYWdlUHJvcHNgXG4gIGNvbnN0IGFwcFByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhhcHBDb250ZXh0KVxuICBjb25zdCBnbG9iYWxMb2NhbGUgPSBhd2FpdCBnZXRHbG9iYWxEYXRhKGFwcENvbnRleHQucm91dGVyLmxvY2FsZSlcblxuICByZXR1cm4ge1xuICAgIC4uLmFwcFByb3BzLFxuICAgIHBhZ2VQcm9wczoge1xuICAgICAgZ2xvYmFsOiBnbG9iYWxMb2NhbGUsXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHFzIGZyb20gXCJxc1wiXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTdHJhcGlVUkwocGF0aCkge1xuICByZXR1cm4gYCR7XG4gICAgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU1RSQVBJX0FQSV9VUkwgfHwgXCJodHRwOi8vbG9jYWxob3N0OjEzMzdcIlxuICB9JHtwYXRofWBcbn1cblxuLyoqXG4gKiBIZWxwZXIgdG8gbWFrZSBHRVQgcmVxdWVzdHMgdG8gU3RyYXBpIEFQSSBlbmRwb2ludHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFBhdGggb2YgdGhlIEFQSSByb3V0ZVxuICogQHBhcmFtIHtPYmplY3R9IHVybFBhcmFtc09iamVjdCBVUkwgcGFyYW1zIG9iamVjdCwgd2lsbCBiZSBzdHJpbmdpZmllZFxuICogQHBhcmFtIHtSZXF1ZXN0SW5pdH0gb3B0aW9ucyBPcHRpb25zIHBhc3NlZCB0byBmZXRjaFxuICogQHJldHVybnMgUGFyc2VkIEFQSSBjYWxsIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBmZXRjaEFQSShwYXRoLCB1cmxQYXJhbXNPYmplY3QgPSB7fSwgb3B0aW9ucyA9IHt9KSB7XG4gIC8vIE1lcmdlIGRlZmF1bHQgYW5kIHVzZXIgb3B0aW9uc1xuICBjb25zdCBtZXJnZWRPcHRpb25zID0ge1xuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgIH0sXG4gICAgLi4ub3B0aW9ucyxcbiAgfVxuXG4gIC8vIEJ1aWxkIHJlcXVlc3QgVVJMXG4gIGNvbnN0IHF1ZXJ5U3RyaW5nID0gcXMuc3RyaW5naWZ5KHVybFBhcmFtc09iamVjdClcbiAgY29uc3QgcmVxdWVzdFVybCA9IGAke2dldFN0cmFwaVVSTChcbiAgICBgL2FwaSR7cGF0aH0ke3F1ZXJ5U3RyaW5nID8gYD8ke3F1ZXJ5U3RyaW5nfWAgOiBcIlwifWBcbiAgKX1gXG5cbiAgLy8gVHJpZ2dlciBBUEkgY2FsbFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHJlcXVlc3RVcmwsIG1lcmdlZE9wdGlvbnMpXG5cbiAgLy8gSGFuZGxlIHJlc3BvbnNlXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zb2xlLmVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXG4gICAgdGhyb3cgbmV3IEVycm9yKGBBbiBlcnJvciBvY2N1cmVkIHBsZWFzZSB0cnkgYWdhaW5gKVxuICB9XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgcmV0dXJuIGRhdGFcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqIEBwYXJhbSB7c3RyaW5nfSBvcHRpb25zLnNsdWcgVGhlIHBhZ2UncyBzbHVnXG4gKiBAcGFyYW0ge3N0cmluZ30gb3B0aW9ucy5sb2NhbGUgVGhlIGN1cnJlbnQgbG9jYWxlIHNwZWNpZmllZCBpbiByb3V0ZXIubG9jYWxlXG4gKiBAcGFyYW0ge2Jvb2xlYW59IG9wdGlvbnMucHJldmlldyByb3V0ZXIgaXNQcmV2aWV3IHZhbHVlXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQYWdlRGF0YSh7IHNsdWcsIGxvY2FsZSwgcHJldmlldyB9KSB7XG4gIC8vIEZpbmQgdGhlIHBhZ2VzIHRoYXQgbWF0Y2ggdGhpcyBzbHVnXG4gIGNvbnN0IGdxbEVuZHBvaW50ID0gZ2V0U3RyYXBpVVJMKFwiL2dyYXBocWxcIilcbiAgY29uc3QgcGFnZXNSZXMgPSBhd2FpdCBmZXRjaChncWxFbmRwb2ludCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogYFxuICAgICAgICBmcmFnbWVudCBGaWxlUGFydHMgb24gVXBsb2FkRmlsZUVudGl0eVJlc3BvbnNlIHtcbiAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XG4gICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICBtaW1lXG4gICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICBmb3JtYXRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5IEdldFBhZ2VzKFxuICAgICAgICAgICRzbHVnOiBTdHJpbmchXG4gICAgICAgICAgJHB1YmxpY2F0aW9uU3RhdGU6IFB1YmxpY2F0aW9uU3RhdGUhXG4gICAgICAgICAgJGxvY2FsZTogSTE4TkxvY2FsZUNvZGUhXG4gICAgICAgICkgeyAgICAgICAgXG4gICAgICAgICAgcGFnZXMoXG4gICAgICAgICAgICBmaWx0ZXJzOiB7IHNsdWc6IHsgZXE6ICRzbHVnIH0gfVxuICAgICAgICAgICAgcHVibGljYXRpb25TdGF0ZTogJHB1YmxpY2F0aW9uU3RhdGVcbiAgICAgICAgICAgIGxvY2FsZTogJGxvY2FsZVxuICAgICAgICAgICkge1xuICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgIGxvY2FsaXphdGlvbnMge1xuICAgICAgICAgICAgICAgICAgZGF0YSB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMge1xuICAgICAgICAgICAgICAgICAgICAgIGxvY2FsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNsdWdcbiAgICAgICAgICAgICAgICBtZXRhZGF0YSB7XG4gICAgICAgICAgICAgICAgICBtZXRhVGl0bGVcbiAgICAgICAgICAgICAgICAgIG1ldGFEZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgc2hhcmVJbWFnZSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgdHdpdHRlckNhcmRUeXBlXG4gICAgICAgICAgICAgICAgICB0d2l0dGVyVXNlcm5hbWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGVudFNlY3Rpb25zIHtcbiAgICAgICAgICAgICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0JvdHRvbUFjdGlvbnMge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBidXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0hlcm8ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgcGljdHVyZSB7XG4gICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVDb2x1bW5zR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0ZlYXR1cmVSb3dzR3JvdXAge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBmZWF0dXJlcyB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIG1lZGlhIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNUZXN0aW1vbmlhbHNHcm91cCB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIGxpbmsge1xuICAgICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgICAgbmV3VGFiXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxvZ29zIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgICAgbG9nbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGVzdGltb25pYWxzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHBpY3R1cmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgICBhdXRob3JOYW1lXG4gICAgICAgICAgICAgICAgICAgICAgYXV0aG9yVGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICBsaW5rXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC4uLiBvbiBDb21wb25lbnRTZWN0aW9uc0xhcmdlVmlkZW8ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB0aXRsZVxuICAgICAgICAgICAgICAgICAgICBwb3N0ZXIge1xuICAgICAgICAgICAgICAgICAgICAgIC4uLkZpbGVQYXJ0c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZpZGVvIHtcbiAgICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zUmljaFRleHQge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAuLi4gb24gQ29tcG9uZW50U2VjdGlvbnNQcmljaW5nIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVcbiAgICAgICAgICAgICAgICAgICAgcGxhbnMge1xuICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICBpc1JlY29tbWVuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgICAgICAgICAgcHJpY2VQZXJpb2RcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLi4uIG9uIENvbXBvbmVudFNlY3Rpb25zTGVhZEZvcm0ge1xuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICBlbWFpbFBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgICAgdHlwZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9ICAgICAgXG4gICAgICBgLFxuICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgIHNsdWcsXG4gICAgICAgIHB1YmxpY2F0aW9uU3RhdGU6IHByZXZpZXcgPyBcIlBSRVZJRVdcIiA6IFwiTElWRVwiLFxuICAgICAgICBsb2NhbGUsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KVxuXG4gIGNvbnN0IHBhZ2VzRGF0YSA9IGF3YWl0IHBhZ2VzUmVzLmpzb24oKVxuICAvLyBNYWtlIHN1cmUgd2UgZm91bmQgc29tZXRoaW5nLCBvdGhlcndpc2UgcmV0dXJuIG51bGxcbiAgaWYgKHBhZ2VzRGF0YS5kYXRhPy5wYWdlcyA9PSBudWxsIHx8IHBhZ2VzRGF0YS5kYXRhLnBhZ2VzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICAvLyBSZXR1cm4gdGhlIGZpcnN0IGl0ZW0gc2luY2UgdGhlcmUgc2hvdWxkIG9ubHkgYmUgb25lIHJlc3VsdCBwZXIgc2x1Z1xuICByZXR1cm4gcGFnZXNEYXRhLmRhdGEucGFnZXMuZGF0YVswXVxufVxuXG4vLyBHZXQgc2l0ZSBkYXRhIGZyb20gU3RyYXBpIChtZXRhZGF0YSwgbmF2YmFyLCBmb290ZXIuLi4pXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R2xvYmFsRGF0YShsb2NhbGUpIHtcbiAgY29uc3QgZ3FsRW5kcG9pbnQgPSBnZXRTdHJhcGlVUkwoXCIvZ3JhcGhxbFwiKVxuICBjb25zdCBnbG9iYWxSZXMgPSBhd2FpdCBmZXRjaChncWxFbmRwb2ludCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBxdWVyeTogYFxuICAgICAgICBmcmFnbWVudCBGaWxlUGFydHMgb24gVXBsb2FkRmlsZUVudGl0eVJlc3BvbnNlIHtcbiAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgIGlkXG4gICAgICAgICAgICBhdHRyaWJ1dGVzIHtcbiAgICAgICAgICAgICAgYWx0ZXJuYXRpdmVUZXh0XG4gICAgICAgICAgICAgIHdpZHRoXG4gICAgICAgICAgICAgIGhlaWdodFxuICAgICAgICAgICAgICBtaW1lXG4gICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICBmb3JtYXRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXJ5IEdldEdsb2JhbCgkbG9jYWxlOiBJMThOTG9jYWxlQ29kZSEpIHtcbiAgICAgICAgICBnbG9iYWwobG9jYWxlOiAkbG9jYWxlKSB7XG4gICAgICAgICAgICBkYXRhIHtcbiAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgYXR0cmlidXRlcyB7XG4gICAgICAgICAgICAgICAgZmF2aWNvbiB7XG4gICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWV0YWRhdGEge1xuICAgICAgICAgICAgICAgICAgbWV0YVRpdGxlXG4gICAgICAgICAgICAgICAgICBtZXRhRGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgIHNoYXJlSW1hZ2Uge1xuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHR3aXR0ZXJDYXJkVHlwZVxuICAgICAgICAgICAgICAgICAgdHdpdHRlclVzZXJuYW1lXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1ldGFUaXRsZVN1ZmZpeFxuICAgICAgICAgICAgICAgIG5vdGlmaWNhdGlvbkJhbm5lciB7XG4gICAgICAgICAgICAgICAgICB0eXBlXG4gICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG5hdmJhciB7XG4gICAgICAgICAgICAgICAgICBsb2dvIHtcbiAgICAgICAgICAgICAgICAgICAgLi4uRmlsZVBhcnRzXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBsaW5rcyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICBuZXdUYWJcbiAgICAgICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgICAgICAgdXJsXG4gICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIHR5cGVcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9vdGVyIHtcbiAgICAgICAgICAgICAgICAgIGxvZ28ge1xuICAgICAgICAgICAgICAgICAgICAuLi5GaWxlUGFydHNcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHNtYWxsVGV4dFxuICAgICAgICAgICAgICAgICAgY29sdW1ucyB7XG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlXG4gICAgICAgICAgICAgICAgICAgIGxpbmtzIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgICAgICAgIHVybFxuICAgICAgICAgICAgICAgICAgICAgIG5ld1RhYlxuICAgICAgICAgICAgICAgICAgICAgIHRleHRcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgIFxuICAgICAgYCxcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBsb2NhbGUsXG4gICAgICB9LFxuICAgIH0pLFxuICB9KVxuXG4gIGNvbnN0IGdsb2JhbCA9IGF3YWl0IGdsb2JhbFJlcy5qc29uKClcbiAgcmV0dXJuIGdsb2JhbC5kYXRhLmdsb2JhbFxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN0cmFwaU1lZGlhKHVybCkge1xuICBpZiAodXJsID09IG51bGwpIHtcbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSBmdWxsIFVSTCBpZiB0aGUgbWVkaWEgaXMgaG9zdGVkIG9uIGFuIGV4dGVybmFsIHByb3ZpZGVyXG4gIGlmICh1cmwuc3RhcnRzV2l0aChcImh0dHBcIikgfHwgdXJsLnN0YXJ0c1dpdGgoXCIvL1wiKSkge1xuICAgIHJldHVybiB1cmxcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSBwcmVwZW5kIHRoZSBVUkwgcGF0aCB3aXRoIHRoZSBTdHJhcGkgVVJMXG4gIHJldHVybiBgJHtcbiAgICBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCB8fCBcImh0dHA6Ly9sb2NhbGhvc3Q6MTMzN1wiXG4gIH0ke3VybH1gXG59XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBHZXRJbnRyaW5zaWMgPSByZXF1aXJlKCdnZXQtaW50cmluc2ljJyk7XG5cbnZhciBjYWxsQmluZCA9IHJlcXVpcmUoJy4vJyk7XG5cbnZhciAkaW5kZXhPZiA9IGNhbGxCaW5kKEdldEludHJpbnNpYygnU3RyaW5nLnByb3RvdHlwZS5pbmRleE9mJykpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCb3VuZEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0dmFyIGludHJpbnNpYyA9IEdldEludHJpbnNpYyhuYW1lLCAhIWFsbG93TWlzc2luZyk7XG5cdGlmICh0eXBlb2YgaW50cmluc2ljID09PSAnZnVuY3Rpb24nICYmICRpbmRleE9mKG5hbWUsICcucHJvdG90eXBlLicpID4gLTEpIHtcblx0XHRyZXR1cm4gY2FsbEJpbmQoaW50cmluc2ljKTtcblx0fVxuXHRyZXR1cm4gaW50cmluc2ljO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG52YXIgR2V0SW50cmluc2ljID0gcmVxdWlyZSgnZ2V0LWludHJpbnNpYycpO1xuXG52YXIgJGFwcGx5ID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5JScpO1xudmFyICRjYWxsID0gR2V0SW50cmluc2ljKCclRnVuY3Rpb24ucHJvdG90eXBlLmNhbGwlJyk7XG52YXIgJHJlZmxlY3RBcHBseSA9IEdldEludHJpbnNpYygnJVJlZmxlY3QuYXBwbHklJywgdHJ1ZSkgfHwgYmluZC5jYWxsKCRjYWxsLCAkYXBwbHkpO1xuXG52YXIgJGdPUEQgPSBHZXRJbnRyaW5zaWMoJyVPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJScsIHRydWUpO1xudmFyICRkZWZpbmVQcm9wZXJ0eSA9IEdldEludHJpbnNpYygnJU9iamVjdC5kZWZpbmVQcm9wZXJ0eSUnLCB0cnVlKTtcbnZhciAkbWF4ID0gR2V0SW50cmluc2ljKCclTWF0aC5tYXglJyk7XG5cbmlmICgkZGVmaW5lUHJvcGVydHkpIHtcblx0dHJ5IHtcblx0XHQkZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyB2YWx1ZTogMSB9KTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdC8vIElFIDggaGFzIGEgYnJva2VuIGRlZmluZVByb3BlcnR5XG5cdFx0JGRlZmluZVByb3BlcnR5ID0gbnVsbDtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNhbGxCaW5kKG9yaWdpbmFsRnVuY3Rpb24pIHtcblx0dmFyIGZ1bmMgPSAkcmVmbGVjdEFwcGx5KGJpbmQsICRjYWxsLCBhcmd1bWVudHMpO1xuXHRpZiAoJGdPUEQgJiYgJGRlZmluZVByb3BlcnR5KSB7XG5cdFx0dmFyIGRlc2MgPSAkZ09QRChmdW5jLCAnbGVuZ3RoJyk7XG5cdFx0aWYgKGRlc2MuY29uZmlndXJhYmxlKSB7XG5cdFx0XHQvLyBvcmlnaW5hbCBsZW5ndGgsIHBsdXMgdGhlIHJlY2VpdmVyLCBtaW51cyBhbnkgYWRkaXRpb25hbCBhcmd1bWVudHMgKGFmdGVyIHRoZSByZWNlaXZlcilcblx0XHRcdCRkZWZpbmVQcm9wZXJ0eShcblx0XHRcdFx0ZnVuYyxcblx0XHRcdFx0J2xlbmd0aCcsXG5cdFx0XHRcdHsgdmFsdWU6IDEgKyAkbWF4KDAsIG9yaWdpbmFsRnVuY3Rpb24ubGVuZ3RoIC0gKGFyZ3VtZW50cy5sZW5ndGggLSAxKSkgfVxuXHRcdFx0KTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZ1bmM7XG59O1xuXG52YXIgYXBwbHlCaW5kID0gZnVuY3Rpb24gYXBwbHlCaW5kKCkge1xuXHRyZXR1cm4gJHJlZmxlY3RBcHBseShiaW5kLCAkYXBwbHksIGFyZ3VtZW50cyk7XG59O1xuXG5pZiAoJGRlZmluZVByb3BlcnR5KSB7XG5cdCRkZWZpbmVQcm9wZXJ0eShtb2R1bGUuZXhwb3J0cywgJ2FwcGx5JywgeyB2YWx1ZTogYXBwbHlCaW5kIH0pO1xufSBlbHNlIHtcblx0bW9kdWxlLmV4cG9ydHMuYXBwbHkgPSBhcHBseUJpbmQ7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBuby1pbnZhbGlkLXRoaXM6IDEgKi9cblxudmFyIEVSUk9SX01FU1NBR0UgPSAnRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQgY2FsbGVkIG9uIGluY29tcGF0aWJsZSAnO1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIHRvU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcbnZhciBmdW5jVHlwZSA9ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmluZCh0aGF0KSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXM7XG4gICAgaWYgKHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbCh0YXJnZXQpICE9PSBmdW5jVHlwZSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKEVSUk9SX01FU1NBR0UgKyB0YXJnZXQpO1xuICAgIH1cbiAgICB2YXIgYXJncyA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICAgIHZhciBib3VuZDtcbiAgICB2YXIgYmluZGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIGJvdW5kKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0LmFwcGx5KFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgYXJncy5jb25jYXQoc2xpY2UuY2FsbChhcmd1bWVudHMpKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGlmIChPYmplY3QocmVzdWx0KSA9PT0gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5hcHBseShcbiAgICAgICAgICAgICAgICB0aGF0LFxuICAgICAgICAgICAgICAgIGFyZ3MuY29uY2F0KHNsaWNlLmNhbGwoYXJndW1lbnRzKSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJvdW5kTGVuZ3RoID0gTWF0aC5tYXgoMCwgdGFyZ2V0Lmxlbmd0aCAtIGFyZ3MubGVuZ3RoKTtcbiAgICB2YXIgYm91bmRBcmdzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib3VuZExlbmd0aDsgaSsrKSB7XG4gICAgICAgIGJvdW5kQXJncy5wdXNoKCckJyArIGkpO1xuICAgIH1cblxuICAgIGJvdW5kID0gRnVuY3Rpb24oJ2JpbmRlcicsICdyZXR1cm4gZnVuY3Rpb24gKCcgKyBib3VuZEFyZ3Muam9pbignLCcpICsgJyl7IHJldHVybiBiaW5kZXIuYXBwbHkodGhpcyxhcmd1bWVudHMpOyB9JykoYmluZGVyKTtcblxuICAgIGlmICh0YXJnZXQucHJvdG90eXBlKSB7XG4gICAgICAgIHZhciBFbXB0eSA9IGZ1bmN0aW9uIEVtcHR5KCkge307XG4gICAgICAgIEVtcHR5LnByb3RvdHlwZSA9IHRhcmdldC5wcm90b3R5cGU7XG4gICAgICAgIGJvdW5kLnByb3RvdHlwZSA9IG5ldyBFbXB0eSgpO1xuICAgICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBib3VuZDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBpbXBsZW1lbnRhdGlvbiA9IHJlcXVpcmUoJy4vaW1wbGVtZW50YXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCB8fCBpbXBsZW1lbnRhdGlvbjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIHVuZGVmaW5lZDtcblxudmFyICRTeW50YXhFcnJvciA9IFN5bnRheEVycm9yO1xudmFyICRGdW5jdGlvbiA9IEZ1bmN0aW9uO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjb25zaXN0ZW50LXJldHVyblxudmFyIGdldEV2YWxsZWRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uIChleHByZXNzaW9uU3ludGF4KSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuICRGdW5jdGlvbignXCJ1c2Ugc3RyaWN0XCI7IHJldHVybiAoJyArIGV4cHJlc3Npb25TeW50YXggKyAnKS5jb25zdHJ1Y3RvcjsnKSgpO1xuXHR9IGNhdGNoIChlKSB7fVxufTtcblxudmFyICRnT1BEID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbmlmICgkZ09QRCkge1xuXHR0cnkge1xuXHRcdCRnT1BEKHt9LCAnJyk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHQkZ09QRCA9IG51bGw7IC8vIHRoaXMgaXMgSUUgOCwgd2hpY2ggaGFzIGEgYnJva2VuIGdPUERcblx0fVxufVxuXG52YXIgdGhyb3dUeXBlRXJyb3IgPSBmdW5jdGlvbiAoKSB7XG5cdHRocm93IG5ldyAkVHlwZUVycm9yKCk7XG59O1xudmFyIFRocm93VHlwZUVycm9yID0gJGdPUERcblx0PyAoZnVuY3Rpb24gKCkge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zLCBuby1jYWxsZXIsIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuXHRcdFx0YXJndW1lbnRzLmNhbGxlZTsgLy8gSUUgOCBkb2VzIG5vdCB0aHJvdyBoZXJlXG5cdFx0XHRyZXR1cm4gdGhyb3dUeXBlRXJyb3I7XG5cdFx0fSBjYXRjaCAoY2FsbGVlVGhyb3dzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBJRSA4IHRocm93cyBvbiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGFyZ3VtZW50cywgJycpXG5cdFx0XHRcdHJldHVybiAkZ09QRChhcmd1bWVudHMsICdjYWxsZWUnKS5nZXQ7XG5cdFx0XHR9IGNhdGNoIChnT1BEdGhyb3dzKSB7XG5cdFx0XHRcdHJldHVybiB0aHJvd1R5cGVFcnJvcjtcblx0XHRcdH1cblx0XHR9XG5cdH0oKSlcblx0OiB0aHJvd1R5cGVFcnJvcjtcblxudmFyIGhhc1N5bWJvbHMgPSByZXF1aXJlKCdoYXMtc3ltYm9scycpKCk7XG5cbnZhciBnZXRQcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoeCkgeyByZXR1cm4geC5fX3Byb3RvX187IH07IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cblxudmFyIG5lZWRzRXZhbCA9IHt9O1xuXG52YXIgVHlwZWRBcnJheSA9IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IGdldFByb3RvKFVpbnQ4QXJyYXkpO1xuXG52YXIgSU5UUklOU0lDUyA9IHtcblx0JyVBZ2dyZWdhdGVFcnJvciUnOiB0eXBlb2YgQWdncmVnYXRlRXJyb3IgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogQWdncmVnYXRlRXJyb3IsXG5cdCclQXJyYXklJzogQXJyYXksXG5cdCclQXJyYXlCdWZmZXIlJzogdHlwZW9mIEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEFycmF5QnVmZmVyLFxuXHQnJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKFtdW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclQXN5bmNGcm9tU3luY0l0ZXJhdG9yUHJvdG90eXBlJSc6IHVuZGVmaW5lZCxcblx0JyVBc3luY0Z1bmN0aW9uJSc6IG5lZWRzRXZhbCxcblx0JyVBc3luY0dlbmVyYXRvciUnOiBuZWVkc0V2YWwsXG5cdCclQXN5bmNHZW5lcmF0b3JGdW5jdGlvbiUnOiBuZWVkc0V2YWwsXG5cdCclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnOiBuZWVkc0V2YWwsXG5cdCclQXRvbWljcyUnOiB0eXBlb2YgQXRvbWljcyA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBBdG9taWNzLFxuXHQnJUJpZ0ludCUnOiB0eXBlb2YgQmlnSW50ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEJpZ0ludCxcblx0JyVCb29sZWFuJSc6IEJvb2xlYW4sXG5cdCclRGF0YVZpZXclJzogdHlwZW9mIERhdGFWaWV3ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IERhdGFWaWV3LFxuXHQnJURhdGUlJzogRGF0ZSxcblx0JyVkZWNvZGVVUkklJzogZGVjb2RlVVJJLFxuXHQnJWRlY29kZVVSSUNvbXBvbmVudCUnOiBkZWNvZGVVUklDb21wb25lbnQsXG5cdCclZW5jb2RlVVJJJSc6IGVuY29kZVVSSSxcblx0JyVlbmNvZGVVUklDb21wb25lbnQlJzogZW5jb2RlVVJJQ29tcG9uZW50LFxuXHQnJUVycm9yJSc6IEVycm9yLFxuXHQnJWV2YWwlJzogZXZhbCwgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1ldmFsXG5cdCclRXZhbEVycm9yJSc6IEV2YWxFcnJvcixcblx0JyVGbG9hdDMyQXJyYXklJzogdHlwZW9mIEZsb2F0MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGbG9hdDMyQXJyYXksXG5cdCclRmxvYXQ2NEFycmF5JSc6IHR5cGVvZiBGbG9hdDY0QXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogRmxvYXQ2NEFycmF5LFxuXHQnJUZpbmFsaXphdGlvblJlZ2lzdHJ5JSc6IHR5cGVvZiBGaW5hbGl6YXRpb25SZWdpc3RyeSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBGaW5hbGl6YXRpb25SZWdpc3RyeSxcblx0JyVGdW5jdGlvbiUnOiAkRnVuY3Rpb24sXG5cdCclR2VuZXJhdG9yRnVuY3Rpb24lJzogbmVlZHNFdmFsLFxuXHQnJUludDhBcnJheSUnOiB0eXBlb2YgSW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDhBcnJheSxcblx0JyVJbnQxNkFycmF5JSc6IHR5cGVvZiBJbnQxNkFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IEludDE2QXJyYXksXG5cdCclSW50MzJBcnJheSUnOiB0eXBlb2YgSW50MzJBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBJbnQzMkFycmF5LFxuXHQnJWlzRmluaXRlJSc6IGlzRmluaXRlLFxuXHQnJWlzTmFOJSc6IGlzTmFOLFxuXHQnJUl0ZXJhdG9yUHJvdG90eXBlJSc6IGhhc1N5bWJvbHMgPyBnZXRQcm90byhnZXRQcm90byhbXVtTeW1ib2wuaXRlcmF0b3JdKCkpKSA6IHVuZGVmaW5lZCxcblx0JyVKU09OJSc6IHR5cGVvZiBKU09OID09PSAnb2JqZWN0JyA/IEpTT04gOiB1bmRlZmluZWQsXG5cdCclTWFwJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogTWFwLFxuXHQnJU1hcEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBNYXAgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IE1hcCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclTWF0aCUnOiBNYXRoLFxuXHQnJU51bWJlciUnOiBOdW1iZXIsXG5cdCclT2JqZWN0JSc6IE9iamVjdCxcblx0JyVwYXJzZUZsb2F0JSc6IHBhcnNlRmxvYXQsXG5cdCclcGFyc2VJbnQlJzogcGFyc2VJbnQsXG5cdCclUHJvbWlzZSUnOiB0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm9taXNlLFxuXHQnJVByb3h5JSc6IHR5cGVvZiBQcm94eSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBQcm94eSxcblx0JyVSYW5nZUVycm9yJSc6IFJhbmdlRXJyb3IsXG5cdCclUmVmZXJlbmNlRXJyb3IlJzogUmVmZXJlbmNlRXJyb3IsXG5cdCclUmVmbGVjdCUnOiB0eXBlb2YgUmVmbGVjdCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBSZWZsZWN0LFxuXHQnJVJlZ0V4cCUnOiBSZWdFeHAsXG5cdCclU2V0JSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogU2V0LFxuXHQnJVNldEl0ZXJhdG9yUHJvdG90eXBlJSc6IHR5cGVvZiBTZXQgPT09ICd1bmRlZmluZWQnIHx8ICFoYXNTeW1ib2xzID8gdW5kZWZpbmVkIDogZ2V0UHJvdG8obmV3IFNldCgpW1N5bWJvbC5pdGVyYXRvcl0oKSksXG5cdCclU2hhcmVkQXJyYXlCdWZmZXIlJzogdHlwZW9mIFNoYXJlZEFycmF5QnVmZmVyID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFNoYXJlZEFycmF5QnVmZmVyLFxuXHQnJVN0cmluZyUnOiBTdHJpbmcsXG5cdCclU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlJzogaGFzU3ltYm9scyA/IGdldFByb3RvKCcnW1N5bWJvbC5pdGVyYXRvcl0oKSkgOiB1bmRlZmluZWQsXG5cdCclU3ltYm9sJSc6IGhhc1N5bWJvbHMgPyBTeW1ib2wgOiB1bmRlZmluZWQsXG5cdCclU3ludGF4RXJyb3IlJzogJFN5bnRheEVycm9yLFxuXHQnJVRocm93VHlwZUVycm9yJSc6IFRocm93VHlwZUVycm9yLFxuXHQnJVR5cGVkQXJyYXklJzogVHlwZWRBcnJheSxcblx0JyVUeXBlRXJyb3IlJzogJFR5cGVFcnJvcixcblx0JyVVaW50OEFycmF5JSc6IHR5cGVvZiBVaW50OEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4QXJyYXksXG5cdCclVWludDhDbGFtcGVkQXJyYXklJzogdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFVpbnQ4Q2xhbXBlZEFycmF5LFxuXHQnJVVpbnQxNkFycmF5JSc6IHR5cGVvZiBVaW50MTZBcnJheSA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBVaW50MTZBcnJheSxcblx0JyVVaW50MzJBcnJheSUnOiB0eXBlb2YgVWludDMyQXJyYXkgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogVWludDMyQXJyYXksXG5cdCclVVJJRXJyb3IlJzogVVJJRXJyb3IsXG5cdCclV2Vha01hcCUnOiB0eXBlb2YgV2Vha01hcCA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWQgOiBXZWFrTWFwLFxuXHQnJVdlYWtSZWYlJzogdHlwZW9mIFdlYWtSZWYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkIDogV2Vha1JlZixcblx0JyVXZWFrU2V0JSc6IHR5cGVvZiBXZWFrU2V0ID09PSAndW5kZWZpbmVkJyA/IHVuZGVmaW5lZCA6IFdlYWtTZXRcbn07XG5cbnZhciBkb0V2YWwgPSBmdW5jdGlvbiBkb0V2YWwobmFtZSkge1xuXHR2YXIgdmFsdWU7XG5cdGlmIChuYW1lID09PSAnJUFzeW5jRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiAoKSB7fScpO1xuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yRnVuY3Rpb24lJykge1xuXHRcdHZhbHVlID0gZ2V0RXZhbGxlZENvbnN0cnVjdG9yKCdhc3luYyBmdW5jdGlvbiogKCkge30nKTtcblx0fSBlbHNlIGlmIChuYW1lID09PSAnJUFzeW5jR2VuZXJhdG9yJScpIHtcblx0XHR2YXIgZm4gPSBkb0V2YWwoJyVBc3luY0dlbmVyYXRvckZ1bmN0aW9uJScpO1xuXHRcdGlmIChmbikge1xuXHRcdFx0dmFsdWUgPSBmbi5wcm90b3R5cGU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKG5hbWUgPT09ICclQXN5bmNJdGVyYXRvclByb3RvdHlwZSUnKSB7XG5cdFx0dmFyIGdlbiA9IGRvRXZhbCgnJUFzeW5jR2VuZXJhdG9yJScpO1xuXHRcdGlmIChnZW4pIHtcblx0XHRcdHZhbHVlID0gZ2V0UHJvdG8oZ2VuLnByb3RvdHlwZSk7XG5cdFx0fVxuXHR9XG5cblx0SU5UUklOU0lDU1tuYW1lXSA9IHZhbHVlO1xuXG5cdHJldHVybiB2YWx1ZTtcbn07XG5cbnZhciBMRUdBQ1lfQUxJQVNFUyA9IHtcblx0JyVBcnJheUJ1ZmZlclByb3RvdHlwZSUnOiBbJ0FycmF5QnVmZmVyJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFycmF5UHJvdG90eXBlJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclQXJyYXlQcm90b19lbnRyaWVzJSc6IFsnQXJyYXknLCAncHJvdG90eXBlJywgJ2VudHJpZXMnXSxcblx0JyVBcnJheVByb3RvX2ZvckVhY2glJzogWydBcnJheScsICdwcm90b3R5cGUnLCAnZm9yRWFjaCddLFxuXHQnJUFycmF5UHJvdG9fa2V5cyUnOiBbJ0FycmF5JywgJ3Byb3RvdHlwZScsICdrZXlzJ10sXG5cdCclQXJyYXlQcm90b192YWx1ZXMlJzogWydBcnJheScsICdwcm90b3R5cGUnLCAndmFsdWVzJ10sXG5cdCclQXN5bmNGdW5jdGlvblByb3RvdHlwZSUnOiBbJ0FzeW5jRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclQXN5bmNHZW5lcmF0b3IlJzogWydBc3luY0dlbmVyYXRvckZ1bmN0aW9uJywgJ3Byb3RvdHlwZSddLFxuXHQnJUFzeW5jR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnQXN5bmNHZW5lcmF0b3JGdW5jdGlvbicsICdwcm90b3R5cGUnLCAncHJvdG90eXBlJ10sXG5cdCclQm9vbGVhblByb3RvdHlwZSUnOiBbJ0Jvb2xlYW4nLCAncHJvdG90eXBlJ10sXG5cdCclRGF0YVZpZXdQcm90b3R5cGUlJzogWydEYXRhVmlldycsICdwcm90b3R5cGUnXSxcblx0JyVEYXRlUHJvdG90eXBlJSc6IFsnRGF0ZScsICdwcm90b3R5cGUnXSxcblx0JyVFcnJvclByb3RvdHlwZSUnOiBbJ0Vycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJUV2YWxFcnJvclByb3RvdHlwZSUnOiBbJ0V2YWxFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVGbG9hdDMyQXJyYXlQcm90b3R5cGUlJzogWydGbG9hdDMyQXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclRmxvYXQ2NEFycmF5UHJvdG90eXBlJSc6IFsnRmxvYXQ2NEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJUZ1bmN0aW9uUHJvdG90eXBlJSc6IFsnRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJ10sXG5cdCclR2VuZXJhdG9yUHJvdG90eXBlJSc6IFsnR2VuZXJhdG9yRnVuY3Rpb24nLCAncHJvdG90eXBlJywgJ3Byb3RvdHlwZSddLFxuXHQnJUludDhBcnJheVByb3RvdHlwZSUnOiBbJ0ludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnSW50MTZBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVJbnQzMkFycmF5UHJvdG90eXBlJSc6IFsnSW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVKU09OUGFyc2UlJzogWydKU09OJywgJ3BhcnNlJ10sXG5cdCclSlNPTlN0cmluZ2lmeSUnOiBbJ0pTT04nLCAnc3RyaW5naWZ5J10sXG5cdCclTWFwUHJvdG90eXBlJSc6IFsnTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJU51bWJlclByb3RvdHlwZSUnOiBbJ051bWJlcicsICdwcm90b3R5cGUnXSxcblx0JyVPYmplY3RQcm90b3R5cGUlJzogWydPYmplY3QnLCAncHJvdG90eXBlJ10sXG5cdCclT2JqUHJvdG9fdG9TdHJpbmclJzogWydPYmplY3QnLCAncHJvdG90eXBlJywgJ3RvU3RyaW5nJ10sXG5cdCclT2JqUHJvdG9fdmFsdWVPZiUnOiBbJ09iamVjdCcsICdwcm90b3R5cGUnLCAndmFsdWVPZiddLFxuXHQnJVByb21pc2VQcm90b3R5cGUlJzogWydQcm9taXNlJywgJ3Byb3RvdHlwZSddLFxuXHQnJVByb21pc2VQcm90b190aGVuJSc6IFsnUHJvbWlzZScsICdwcm90b3R5cGUnLCAndGhlbiddLFxuXHQnJVByb21pc2VfYWxsJSc6IFsnUHJvbWlzZScsICdhbGwnXSxcblx0JyVQcm9taXNlX3JlamVjdCUnOiBbJ1Byb21pc2UnLCAncmVqZWN0J10sXG5cdCclUHJvbWlzZV9yZXNvbHZlJSc6IFsnUHJvbWlzZScsICdyZXNvbHZlJ10sXG5cdCclUmFuZ2VFcnJvclByb3RvdHlwZSUnOiBbJ1JhbmdlRXJyb3InLCAncHJvdG90eXBlJ10sXG5cdCclUmVmZXJlbmNlRXJyb3JQcm90b3R5cGUlJzogWydSZWZlcmVuY2VFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVSZWdFeHBQcm90b3R5cGUlJzogWydSZWdFeHAnLCAncHJvdG90eXBlJ10sXG5cdCclU2V0UHJvdG90eXBlJSc6IFsnU2V0JywgJ3Byb3RvdHlwZSddLFxuXHQnJVNoYXJlZEFycmF5QnVmZmVyUHJvdG90eXBlJSc6IFsnU2hhcmVkQXJyYXlCdWZmZXInLCAncHJvdG90eXBlJ10sXG5cdCclU3RyaW5nUHJvdG90eXBlJSc6IFsnU3RyaW5nJywgJ3Byb3RvdHlwZSddLFxuXHQnJVN5bWJvbFByb3RvdHlwZSUnOiBbJ1N5bWJvbCcsICdwcm90b3R5cGUnXSxcblx0JyVTeW50YXhFcnJvclByb3RvdHlwZSUnOiBbJ1N5bnRheEVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVkQXJyYXlQcm90b3R5cGUlJzogWydUeXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVR5cGVFcnJvclByb3RvdHlwZSUnOiBbJ1R5cGVFcnJvcicsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OEFycmF5UHJvdG90eXBlJSc6IFsnVWludDhBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVaW50OENsYW1wZWRBcnJheVByb3RvdHlwZSUnOiBbJ1VpbnQ4Q2xhbXBlZEFycmF5JywgJ3Byb3RvdHlwZSddLFxuXHQnJVVpbnQxNkFycmF5UHJvdG90eXBlJSc6IFsnVWludDE2QXJyYXknLCAncHJvdG90eXBlJ10sXG5cdCclVWludDMyQXJyYXlQcm90b3R5cGUlJzogWydVaW50MzJBcnJheScsICdwcm90b3R5cGUnXSxcblx0JyVVUklFcnJvclByb3RvdHlwZSUnOiBbJ1VSSUVycm9yJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtNYXBQcm90b3R5cGUlJzogWydXZWFrTWFwJywgJ3Byb3RvdHlwZSddLFxuXHQnJVdlYWtTZXRQcm90b3R5cGUlJzogWydXZWFrU2V0JywgJ3Byb3RvdHlwZSddXG59O1xuXG52YXIgYmluZCA9IHJlcXVpcmUoJ2Z1bmN0aW9uLWJpbmQnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCdoYXMnKTtcbnZhciAkY29uY2F0ID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIEFycmF5LnByb3RvdHlwZS5jb25jYXQpO1xudmFyICRzcGxpY2VBcHBseSA9IGJpbmQuY2FsbChGdW5jdGlvbi5hcHBseSwgQXJyYXkucHJvdG90eXBlLnNwbGljZSk7XG52YXIgJHJlcGxhY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKTtcbnZhciAkc3RyU2xpY2UgPSBiaW5kLmNhbGwoRnVuY3Rpb24uY2FsbCwgU3RyaW5nLnByb3RvdHlwZS5zbGljZSk7XG5cbi8qIGFkYXB0ZWQgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vbG9kYXNoL2xvZGFzaC9ibG9iLzQuMTcuMTUvZGlzdC9sb2Rhc2guanMjTDY3MzUtTDY3NDQgKi9cbnZhciByZVByb3BOYW1lID0gL1teJS5bXFxdXSt8XFxbKD86KC0/XFxkKyg/OlxcLlxcZCspPyl8KFtcIiddKSgoPzooPyFcXDIpW15cXFxcXXxcXFxcLikqPylcXDIpXFxdfCg/PSg/OlxcLnxcXFtcXF0pKD86XFwufFxcW1xcXXwlJCkpL2c7XG52YXIgcmVFc2NhcGVDaGFyID0gL1xcXFwoXFxcXCk/L2c7IC8qKiBVc2VkIHRvIG1hdGNoIGJhY2tzbGFzaGVzIGluIHByb3BlcnR5IHBhdGhzLiAqL1xudmFyIHN0cmluZ1RvUGF0aCA9IGZ1bmN0aW9uIHN0cmluZ1RvUGF0aChzdHJpbmcpIHtcblx0dmFyIGZpcnN0ID0gJHN0clNsaWNlKHN0cmluZywgMCwgMSk7XG5cdHZhciBsYXN0ID0gJHN0clNsaWNlKHN0cmluZywgLTEpO1xuXHRpZiAoZmlyc3QgPT09ICclJyAmJiBsYXN0ICE9PSAnJScpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdpbnZhbGlkIGludHJpbnNpYyBzeW50YXgsIGV4cGVjdGVkIGNsb3NpbmcgYCVgJyk7XG5cdH0gZWxzZSBpZiAobGFzdCA9PT0gJyUnICYmIGZpcnN0ICE9PSAnJScpIHtcblx0XHR0aHJvdyBuZXcgJFN5bnRheEVycm9yKCdpbnZhbGlkIGludHJpbnNpYyBzeW50YXgsIGV4cGVjdGVkIG9wZW5pbmcgYCVgJyk7XG5cdH1cblx0dmFyIHJlc3VsdCA9IFtdO1xuXHQkcmVwbGFjZShzdHJpbmcsIHJlUHJvcE5hbWUsIGZ1bmN0aW9uIChtYXRjaCwgbnVtYmVyLCBxdW90ZSwgc3ViU3RyaW5nKSB7XG5cdFx0cmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gcXVvdGUgPyAkcmVwbGFjZShzdWJTdHJpbmcsIHJlRXNjYXBlQ2hhciwgJyQxJykgOiBudW1iZXIgfHwgbWF0Y2g7XG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0O1xufTtcbi8qIGVuZCBhZGFwdGF0aW9uICovXG5cbnZhciBnZXRCYXNlSW50cmluc2ljID0gZnVuY3Rpb24gZ2V0QmFzZUludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0dmFyIGludHJpbnNpY05hbWUgPSBuYW1lO1xuXHR2YXIgYWxpYXM7XG5cdGlmIChoYXNPd24oTEVHQUNZX0FMSUFTRVMsIGludHJpbnNpY05hbWUpKSB7XG5cdFx0YWxpYXMgPSBMRUdBQ1lfQUxJQVNFU1tpbnRyaW5zaWNOYW1lXTtcblx0XHRpbnRyaW5zaWNOYW1lID0gJyUnICsgYWxpYXNbMF0gKyAnJSc7XG5cdH1cblxuXHRpZiAoaGFzT3duKElOVFJJTlNJQ1MsIGludHJpbnNpY05hbWUpKSB7XG5cdFx0dmFyIHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNOYW1lXTtcblx0XHRpZiAodmFsdWUgPT09IG5lZWRzRXZhbCkge1xuXHRcdFx0dmFsdWUgPSBkb0V2YWwoaW50cmluc2ljTmFtZSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnICYmICFhbGxvd01pc3NpbmcpIHtcblx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpbnRyaW5zaWMgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IGlzIG5vdCBhdmFpbGFibGUuIFBsZWFzZSBmaWxlIGFuIGlzc3VlIScpO1xuXHRcdH1cblxuXHRcdHJldHVybiB7XG5cdFx0XHRhbGlhczogYWxpYXMsXG5cdFx0XHRuYW1lOiBpbnRyaW5zaWNOYW1lLFxuXHRcdFx0dmFsdWU6IHZhbHVlXG5cdFx0fTtcblx0fVxuXG5cdHRocm93IG5ldyAkU3ludGF4RXJyb3IoJ2ludHJpbnNpYyAnICsgbmFtZSArICcgZG9lcyBub3QgZXhpc3QhJyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIEdldEludHJpbnNpYyhuYW1lLCBhbGxvd01pc3NpbmcpIHtcblx0aWYgKHR5cGVvZiBuYW1lICE9PSAnc3RyaW5nJyB8fCBuYW1lLmxlbmd0aCA9PT0gMCkge1xuXHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdpbnRyaW5zaWMgbmFtZSBtdXN0IGJlIGEgbm9uLWVtcHR5IHN0cmluZycpO1xuXHR9XG5cdGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSAmJiB0eXBlb2YgYWxsb3dNaXNzaW5nICE9PSAnYm9vbGVhbicpIHtcblx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignXCJhbGxvd01pc3NpbmdcIiBhcmd1bWVudCBtdXN0IGJlIGEgYm9vbGVhbicpO1xuXHR9XG5cblx0dmFyIHBhcnRzID0gc3RyaW5nVG9QYXRoKG5hbWUpO1xuXHR2YXIgaW50cmluc2ljQmFzZU5hbWUgPSBwYXJ0cy5sZW5ndGggPiAwID8gcGFydHNbMF0gOiAnJztcblxuXHR2YXIgaW50cmluc2ljID0gZ2V0QmFzZUludHJpbnNpYygnJScgKyBpbnRyaW5zaWNCYXNlTmFtZSArICclJywgYWxsb3dNaXNzaW5nKTtcblx0dmFyIGludHJpbnNpY1JlYWxOYW1lID0gaW50cmluc2ljLm5hbWU7XG5cdHZhciB2YWx1ZSA9IGludHJpbnNpYy52YWx1ZTtcblx0dmFyIHNraXBGdXJ0aGVyQ2FjaGluZyA9IGZhbHNlO1xuXG5cdHZhciBhbGlhcyA9IGludHJpbnNpYy5hbGlhcztcblx0aWYgKGFsaWFzKSB7XG5cdFx0aW50cmluc2ljQmFzZU5hbWUgPSBhbGlhc1swXTtcblx0XHQkc3BsaWNlQXBwbHkocGFydHMsICRjb25jYXQoWzAsIDFdLCBhbGlhcykpO1xuXHR9XG5cblx0Zm9yICh2YXIgaSA9IDEsIGlzT3duID0gdHJ1ZTsgaSA8IHBhcnRzLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0dmFyIHBhcnQgPSBwYXJ0c1tpXTtcblx0XHR2YXIgZmlyc3QgPSAkc3RyU2xpY2UocGFydCwgMCwgMSk7XG5cdFx0dmFyIGxhc3QgPSAkc3RyU2xpY2UocGFydCwgLTEpO1xuXHRcdGlmIChcblx0XHRcdChcblx0XHRcdFx0KGZpcnN0ID09PSAnXCInIHx8IGZpcnN0ID09PSBcIidcIiB8fCBmaXJzdCA9PT0gJ2AnKVxuXHRcdFx0XHR8fCAobGFzdCA9PT0gJ1wiJyB8fCBsYXN0ID09PSBcIidcIiB8fCBsYXN0ID09PSAnYCcpXG5cdFx0XHQpXG5cdFx0XHQmJiBmaXJzdCAhPT0gbGFzdFxuXHRcdCkge1xuXHRcdFx0dGhyb3cgbmV3ICRTeW50YXhFcnJvcigncHJvcGVydHkgbmFtZXMgd2l0aCBxdW90ZXMgbXVzdCBoYXZlIG1hdGNoaW5nIHF1b3RlcycpO1xuXHRcdH1cblx0XHRpZiAocGFydCA9PT0gJ2NvbnN0cnVjdG9yJyB8fCAhaXNPd24pIHtcblx0XHRcdHNraXBGdXJ0aGVyQ2FjaGluZyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aW50cmluc2ljQmFzZU5hbWUgKz0gJy4nICsgcGFydDtcblx0XHRpbnRyaW5zaWNSZWFsTmFtZSA9ICclJyArIGludHJpbnNpY0Jhc2VOYW1lICsgJyUnO1xuXG5cdFx0aWYgKGhhc093bihJTlRSSU5TSUNTLCBpbnRyaW5zaWNSZWFsTmFtZSkpIHtcblx0XHRcdHZhbHVlID0gSU5UUklOU0lDU1tpbnRyaW5zaWNSZWFsTmFtZV07XG5cdFx0fSBlbHNlIGlmICh2YWx1ZSAhPSBudWxsKSB7XG5cdFx0XHRpZiAoIShwYXJ0IGluIHZhbHVlKSkge1xuXHRcdFx0XHRpZiAoIWFsbG93TWlzc2luZykge1xuXHRcdFx0XHRcdHRocm93IG5ldyAkVHlwZUVycm9yKCdiYXNlIGludHJpbnNpYyBmb3IgJyArIG5hbWUgKyAnIGV4aXN0cywgYnV0IHRoZSBwcm9wZXJ0eSBpcyBub3QgYXZhaWxhYmxlLicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2b2lkIHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGlmICgkZ09QRCAmJiAoaSArIDEpID49IHBhcnRzLmxlbmd0aCkge1xuXHRcdFx0XHR2YXIgZGVzYyA9ICRnT1BEKHZhbHVlLCBwYXJ0KTtcblx0XHRcdFx0aXNPd24gPSAhIWRlc2M7XG5cblx0XHRcdFx0Ly8gQnkgY29udmVudGlvbiwgd2hlbiBhIGRhdGEgcHJvcGVydHkgaXMgY29udmVydGVkIHRvIGFuIGFjY2Vzc29yXG5cdFx0XHRcdC8vIHByb3BlcnR5IHRvIGVtdWxhdGUgYSBkYXRhIHByb3BlcnR5IHRoYXQgZG9lcyBub3Qgc3VmZmVyIGZyb21cblx0XHRcdFx0Ly8gdGhlIG92ZXJyaWRlIG1pc3Rha2UsIHRoYXQgYWNjZXNzb3IncyBnZXR0ZXIgaXMgbWFya2VkIHdpdGhcblx0XHRcdFx0Ly8gYW4gYG9yaWdpbmFsVmFsdWVgIHByb3BlcnR5LiBIZXJlLCB3aGVuIHdlIGRldGVjdCB0aGlzLCB3ZVxuXHRcdFx0XHQvLyB1cGhvbGQgdGhlIGlsbHVzaW9uIGJ5IHByZXRlbmRpbmcgdG8gc2VlIHRoYXQgb3JpZ2luYWwgZGF0YVxuXHRcdFx0XHQvLyBwcm9wZXJ0eSwgaS5lLiwgcmV0dXJuaW5nIHRoZSB2YWx1ZSByYXRoZXIgdGhhbiB0aGUgZ2V0dGVyXG5cdFx0XHRcdC8vIGl0c2VsZi5cblx0XHRcdFx0aWYgKGlzT3duICYmICdnZXQnIGluIGRlc2MgJiYgISgnb3JpZ2luYWxWYWx1ZScgaW4gZGVzYy5nZXQpKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBkZXNjLmdldDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlW3BhcnRdO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpc093biA9IGhhc093bih2YWx1ZSwgcGFydCk7XG5cdFx0XHRcdHZhbHVlID0gdmFsdWVbcGFydF07XG5cdFx0XHR9XG5cblx0XHRcdGlmIChpc093biAmJiAhc2tpcEZ1cnRoZXJDYWNoaW5nKSB7XG5cdFx0XHRcdElOVFJJTlNJQ1NbaW50cmluc2ljUmVhbE5hbWVdID0gdmFsdWU7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdHJldHVybiB2YWx1ZTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBvcmlnU3ltYm9sID0gdHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sO1xudmFyIGhhc1N5bWJvbFNoYW0gPSByZXF1aXJlKCcuL3NoYW1zJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaGFzTmF0aXZlU3ltYm9scygpIHtcblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sICE9PSAnZnVuY3Rpb24nKSB7IHJldHVybiBmYWxzZTsgfVxuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBvcmlnU3ltYm9sKCdmb28nKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmICh0eXBlb2YgU3ltYm9sKCdiYXInKSAhPT0gJ3N5bWJvbCcpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0cmV0dXJuIGhhc1N5bWJvbFNoYW0oKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbi8qIGVzbGludCBjb21wbGV4aXR5OiBbMiwgMThdLCBtYXgtc3RhdGVtZW50czogWzIsIDMzXSAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBoYXNTeW1ib2xzKCkge1xuXHRpZiAodHlwZW9mIFN5bWJvbCAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyAhPT0gJ2Z1bmN0aW9uJykgeyByZXR1cm4gZmFsc2U7IH1cblx0aWYgKHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09ICdzeW1ib2wnKSB7IHJldHVybiB0cnVlOyB9XG5cblx0dmFyIG9iaiA9IHt9O1xuXHR2YXIgc3ltID0gU3ltYm9sKCd0ZXN0Jyk7XG5cdHZhciBzeW1PYmogPSBPYmplY3Qoc3ltKTtcblx0aWYgKHR5cGVvZiBzeW0gPT09ICdzdHJpbmcnKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoc3ltT2JqKSAhPT0gJ1tvYmplY3QgU3ltYm9sXScpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0Ly8gdGVtcCBkaXNhYmxlZCBwZXIgaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9vYmplY3QuYXNzaWduL2lzc3Vlcy8xN1xuXHQvLyBpZiAoc3ltIGluc3RhbmNlb2YgU3ltYm9sKSB7IHJldHVybiBmYWxzZTsgfVxuXHQvLyB0ZW1wIGRpc2FibGVkIHBlciBodHRwczovL2dpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi9nZXQtb3duLXByb3BlcnR5LXN5bWJvbHMvaXNzdWVzLzRcblx0Ly8gaWYgKCEoc3ltT2JqIGluc3RhbmNlb2YgU3ltYm9sKSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvLyBpZiAodHlwZW9mIFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcgIT09ICdmdW5jdGlvbicpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdC8vIGlmIChTdHJpbmcoc3ltKSAhPT0gU3ltYm9sLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0dmFyIHN5bVZhbCA9IDQyO1xuXHRvYmpbc3ltXSA9IHN5bVZhbDtcblx0Zm9yIChzeW0gaW4gb2JqKSB7IHJldHVybiBmYWxzZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby11bnJlYWNoYWJsZS1sb29wXG5cdGlmICh0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbicgJiYgT2JqZWN0LmtleXMob2JqKS5sZW5ndGggIT09IDApIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyA9PT0gJ2Z1bmN0aW9uJyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhvYmopLmxlbmd0aCAhPT0gMCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHR2YXIgc3ltcyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqKTtcblx0aWYgKHN5bXMubGVuZ3RoICE9PSAxIHx8IHN5bXNbMF0gIT09IHN5bSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZiAoIU9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvYmosIHN5bSkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYgKHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIGRlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwgc3ltKTtcblx0XHRpZiAoZGVzY3JpcHRvci52YWx1ZSAhPT0gc3ltVmFsIHx8IGRlc2NyaXB0b3IuZW51bWVyYWJsZSAhPT0gdHJ1ZSkgeyByZXR1cm4gZmFsc2U7IH1cblx0fVxuXG5cdHJldHVybiB0cnVlO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGJpbmQgPSByZXF1aXJlKCdmdW5jdGlvbi1iaW5kJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmluZC5jYWxsKEZ1bmN0aW9uLmNhbGwsIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuIiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxudmFyIGRlZmF1bHRzID0ge1xuICB0ZW1wbGF0ZVRpdGxlOiAnJyxcbiAgbm9pbmRleDogZmFsc2UsXG4gIG5vZm9sbG93OiBmYWxzZSxcbiAgZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodDogMCxcbiAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGg6IDAsXG4gIGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodDogMFxufTtcblxudmFyIGJ1aWxkVGFncyA9IGZ1bmN0aW9uIGJ1aWxkVGFncyhjb25maWcpIHtcbiAgdmFyIHRhZ3NUb1JlbmRlciA9IFtdO1xuXG4gIGlmIChjb25maWcudGl0bGVUZW1wbGF0ZSkge1xuICAgIGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUgPSBjb25maWcudGl0bGVUZW1wbGF0ZTtcbiAgfVxuXG4gIHZhciB1cGRhdGVkVGl0bGUgPSAnJztcblxuICBpZiAoY29uZmlnLnRpdGxlKSB7XG4gICAgdXBkYXRlZFRpdGxlID0gY29uZmlnLnRpdGxlO1xuXG4gICAgaWYgKGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUpIHtcbiAgICAgIHVwZGF0ZWRUaXRsZSA9IGRlZmF1bHRzLnRlbXBsYXRlVGl0bGUucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdXBkYXRlZFRpdGxlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcInRpdGxlXCIsIHtcbiAgICAgIGtleTogXCJ0aXRsZVwiXG4gICAgfSwgdXBkYXRlZFRpdGxlKSk7XG4gIH1cblxuICB2YXIgbm9pbmRleCA9IGNvbmZpZy5ub2luZGV4IHx8IGRlZmF1bHRzLm5vaW5kZXggfHwgY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXg7XG4gIHZhciBub2ZvbGxvdyA9IGNvbmZpZy5ub2ZvbGxvdyB8fCBkZWZhdWx0cy5ub2ZvbGxvdyB8fCBjb25maWcuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3c7XG5cbiAgaWYgKG5vaW5kZXggfHwgbm9mb2xsb3cpIHtcbiAgICBpZiAoY29uZmlnLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXgpIHtcbiAgICAgIGRlZmF1bHRzLm5vaW5kZXggPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3cpIHtcbiAgICAgIGRlZmF1bHRzLm5vZm9sbG93ID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwicm9ib3RzXCIsXG4gICAgICBuYW1lOiBcInJvYm90c1wiLFxuICAgICAgY29udGVudDogKG5vaW5kZXggPyAnbm9pbmRleCcgOiAnaW5kZXgnKSArIFwiLFwiICsgKG5vZm9sbG93ID8gJ25vZm9sbG93JyA6ICdmb2xsb3cnKVxuICAgIH0pKTtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZ29vZ2xlYm90XCIsXG4gICAgICBuYW1lOiBcImdvb2dsZWJvdFwiLFxuICAgICAgY29udGVudDogKG5vaW5kZXggPyAnbm9pbmRleCcgOiAnaW5kZXgnKSArIFwiLFwiICsgKG5vZm9sbG93ID8gJ25vZm9sbG93JyA6ICdmb2xsb3cnKVxuICAgIH0pKTtcbiAgfSBlbHNlIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwicm9ib3RzXCIsXG4gICAgICBuYW1lOiBcInJvYm90c1wiLFxuICAgICAgY29udGVudDogXCJpbmRleCxmb2xsb3dcIlxuICAgIH0pKTtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZ29vZ2xlYm90XCIsXG4gICAgICBuYW1lOiBcImdvb2dsZWJvdFwiLFxuICAgICAgY29udGVudDogXCJpbmRleCxmb2xsb3dcIlxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICBrZXk6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgIGNvbnRlbnQ6IGNvbmZpZy5kZXNjcmlwdGlvblxuICAgIH0pKTtcbiAgfVxuXG4gIGlmIChjb25maWcubW9iaWxlQWx0ZXJuYXRlKSB7XG4gICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcImxpbmtcIiwge1xuICAgICAgcmVsOiBcImFsdGVybmF0ZVwiLFxuICAgICAga2V5OiBcIm1vYmlsZUFsdGVybmF0ZVwiLFxuICAgICAgbWVkaWE6IGNvbmZpZy5tb2JpbGVBbHRlcm5hdGUubWVkaWEsXG4gICAgICBocmVmOiBjb25maWcubW9iaWxlQWx0ZXJuYXRlLmhyZWZcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmxhbmd1YWdlQWx0ZXJuYXRlcyAmJiBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcubGFuZ3VhZ2VBbHRlcm5hdGVzLmZvckVhY2goZnVuY3Rpb24gKGxhbmd1YWdlQWx0ZXJuYXRlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibGlua1wiLCB7XG4gICAgICAgIHJlbDogXCJhbHRlcm5hdGVcIixcbiAgICAgICAga2V5OiBcImxhbmd1YWdlQWx0ZXJuYXRlLVwiICsgbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZkxhbmcsXG4gICAgICAgIGhyZWZMYW5nOiBsYW5ndWFnZUFsdGVybmF0ZS5ocmVmTGFuZyxcbiAgICAgICAgaHJlZjogbGFuZ3VhZ2VBbHRlcm5hdGUuaHJlZlxuICAgICAgfSkpO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGNvbmZpZy50d2l0dGVyKSB7XG4gICAgaWYgKGNvbmZpZy50d2l0dGVyLmNhcmRUeXBlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNhcmRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuY2FyZFR5cGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuc2l0ZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIG5hbWU6IFwidHdpdHRlcjpzaXRlXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy50d2l0dGVyLnNpdGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLnR3aXR0ZXIuaGFuZGxlKSB7XG4gICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGtleTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgbmFtZTogXCJ0d2l0dGVyOmNyZWF0b3JcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLnR3aXR0ZXIuaGFuZGxlXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5mYWNlYm9vaykge1xuICAgIGlmIChjb25maWcuZmFjZWJvb2suYXBwSWQpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcImZiOmFwcF9pZFwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJmYjphcHBfaWRcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLmZhY2Vib29rLmFwcElkXG4gICAgICB9KSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKGNvbmZpZy5vcGVuR3JhcGgpIHtcbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC51cmwgfHwgY29uZmlnLmNhbm9uaWNhbCkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6dXJsXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOnVybFwiLFxuICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnVybCB8fCBjb25maWcuY2Fub25pY2FsXG4gICAgICB9KSk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudHlwZSkge1xuICAgICAgdmFyIHR5cGUgPSBjb25maWcub3BlbkdyYXBoLnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnR5cGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dHlwZVwiLFxuICAgICAgICBjb250ZW50OiB0eXBlXG4gICAgICB9KSk7XG5cbiAgICAgIGlmICh0eXBlID09PSAncHJvZmlsZScgJiYgY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZmlyc3ROYW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInByb2ZpbGU6Zmlyc3RfbmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpmaXJzdF9uYW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZmlyc3ROYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5sYXN0TmFtZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJwcm9maWxlOmxhc3RfbmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTpsYXN0X25hbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5sYXN0TmFtZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnByb2ZpbGUudXNlcm5hbWUpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTp1c2VybmFtZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwicHJvZmlsZTp1c2VybmFtZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5wcm9maWxlLnVzZXJuYW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgucHJvZmlsZS5nZW5kZXIpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwicHJvZmlsZTpnZW5kZXJcIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcInByb2ZpbGU6Z2VuZGVyXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnByb2ZpbGUuZ2VuZGVyXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdib29rJyAmJiBjb25maWcub3BlbkdyYXBoLmJvb2spIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYm9vay5hdXRob3JzLmZvckVhY2goZnVuY3Rpb24gKGF1dGhvciwgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImJvb2s6YXV0aG9yOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOmF1dGhvclwiLFxuICAgICAgICAgICAgICBjb250ZW50OiBhdXRob3JcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmJvb2suaXNibikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJib29rOmlzYm5cIixcbiAgICAgICAgICAgIHByb3BlcnR5OiBcImJvb2s6aXNiblwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5ib29rLmlzYm5cbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5ib29rLnJlbGVhc2VEYXRlKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImJvb2s6cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5ib29rLnJlbGVhc2VEYXRlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYm9vay50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImJvb2s6dGFnOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJib29rOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnYXJ0aWNsZScgJiYgY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlKSB7XG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUucHVibGlzaGVkVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnB1Ymxpc2hlZF90aW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUucHVibGlzaGVkVGltZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUubW9kaWZpZWRUaW1lKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcImFydGljbGU6bW9kaWZpZWRfdGltZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTptb2RpZmllZF90aW1lXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLmFydGljbGUubW9kaWZpZWRUaW1lXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5leHBpcmF0aW9uVGltZSkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOmV4cGlyYXRpb25fdGltZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTpleHBpcmF0aW9uX3RpbWVcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5leHBpcmF0aW9uVGltZVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycyAmJiBjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLmFydGljbGUuYXV0aG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChhdXRob3IsIGluZGV4KSB7XG4gICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgIGtleTogXCJhcnRpY2xlOmF1dGhvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwiYXJ0aWNsZTphdXRob3JcIixcbiAgICAgICAgICAgICAgY29udGVudDogYXV0aG9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5hcnRpY2xlLnNlY3Rpb24pIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwiYXJ0aWNsZTpzZWN0aW9uXCIsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnNlY3Rpb25cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS5zZWN0aW9uXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzICYmIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGguYXJ0aWNsZS50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImFydGljbGU6dGFnOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJhcnRpY2xlOnRhZ1wiLFxuICAgICAgICAgICAgICBjb250ZW50OiB0YWdcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgodHlwZSA9PT0gJ3ZpZGVvLm1vdmllJyB8fCB0eXBlID09PSAndmlkZW8uZXBpc29kZScgfHwgdHlwZSA9PT0gJ3ZpZGVvLnR2X3Nob3cnIHx8IHR5cGUgPT09ICd2aWRlby5vdGhlcicpICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8pIHtcbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uYWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGFjdG9yLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGFjdG9yLnByb2ZpbGUpIHtcbiAgICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICAgIGtleTogXCJ2aWRlbzphY3RvcjowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzphY3RvclwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdG9yLnByb2ZpbGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYWN0b3Iucm9sZSkge1xuICAgICAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcInZpZGVvOmFjdG9yOnJvbGU6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86YWN0b3I6cm9sZVwiLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGFjdG9yLnJvbGVcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzLmxlbmd0aCkge1xuICAgICAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZGlyZWN0b3JzLmZvckVhY2goZnVuY3Rpb24gKGRpcmVjdG9yLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86ZGlyZWN0b3I6MFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgIHByb3BlcnR5OiBcInZpZGVvOmRpcmVjdG9yXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IGRpcmVjdG9yXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby53cml0ZXJzICYmIGNvbmZpZy5vcGVuR3JhcGgudmlkZW8ud3JpdGVycy5sZW5ndGgpIHtcbiAgICAgICAgICBjb25maWcub3BlbkdyYXBoLnZpZGVvLndyaXRlcnMuZm9yRWFjaChmdW5jdGlvbiAod3JpdGVyLCBpbmRleCkge1xuICAgICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwidmlkZW86d3JpdGVyOjBcIiArIGluZGV4LFxuICAgICAgICAgICAgICBwcm9wZXJ0eTogXCJ2aWRlbzp3cml0ZXJcIixcbiAgICAgICAgICAgICAgY29udGVudDogd3JpdGVyXG4gICAgICAgICAgICB9KSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC52aWRlby5kdXJhdGlvbikge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ2aWRlbzpkdXJhdGlvblwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86ZHVyYXRpb25cIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uZHVyYXRpb24udG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvLnJlbGVhc2VEYXRlKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOnJlbGVhc2VfZGF0ZVwiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86cmVsZWFzZV9kYXRlXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnJlbGVhc2VEYXRlXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8udGFncyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnRhZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgY29uZmlnLm9wZW5HcmFwaC52aWRlby50YWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZywgaW5kZXgpIHtcbiAgICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcInZpZGVvOnRhZzowXCIgKyBpbmRleCxcbiAgICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86dGFnXCIsXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IHRhZ1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbmZpZy5vcGVuR3JhcGgudmlkZW8uc2VyaWVzKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcInZpZGVvOnNlcmllc1wiLFxuICAgICAgICAgICAgcHJvcGVydHk6IFwidmlkZW86c2VyaWVzXCIsXG4gICAgICAgICAgICBjb250ZW50OiBjb25maWcub3BlbkdyYXBoLnZpZGVvLnNlcmllc1xuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnRpdGxlIHx8IGNvbmZpZy50aXRsZSkge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICBrZXk6IFwib2c6dGl0bGVcIixcbiAgICAgICAgcHJvcGVydHk6IFwib2c6dGl0bGVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC50aXRsZSB8fCB1cGRhdGVkVGl0bGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5kZXNjcmlwdGlvbiB8fCBjb25maWcuZGVzY3JpcHRpb24pIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOmRlc2NyaXB0aW9uXCIsXG4gICAgICAgIHByb3BlcnR5OiBcIm9nOmRlc2NyaXB0aW9uXCIsXG4gICAgICAgIGNvbnRlbnQ6IGNvbmZpZy5vcGVuR3JhcGguZGVzY3JpcHRpb24gfHwgY29uZmlnLmRlc2NyaXB0aW9uXG4gICAgICB9KSk7XG4gICAgfSAvLyBpbWFnZXNcblxuXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aCkge1xuICAgICAgZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGggPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCA9IGNvbmZpZy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQ7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzICYmIGNvbmZpZy5vcGVuR3JhcGguaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgY29uZmlnLm9wZW5HcmFwaC5pbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UsIGluZGV4KSB7XG4gICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6MFwiICsgaW5kZXgsXG4gICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2VcIixcbiAgICAgICAgICBjb250ZW50OiBpbWFnZS51cmxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChpbWFnZS5hbHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6YWx0MFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzppbWFnZTphbHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGltYWdlLmFsdFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbWFnZS53aWR0aCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzppbWFnZTp3aWR0aDBcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2U6d2lkdGhcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGltYWdlLndpZHRoLnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6d2lkdGgwXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlOndpZHRoXCIsXG4gICAgICAgICAgICBjb250ZW50OiBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VXaWR0aC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGltYWdlLmhlaWdodCkge1xuICAgICAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJvZzppbWFnZTpoZWlnaHRcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6aW1hZ2U6aGVpZ2h0XCIsXG4gICAgICAgICAgICBjb250ZW50OiBpbWFnZS5oZWlnaHQudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIGlmIChkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6aW1hZ2U6aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOmltYWdlOmhlaWdodFwiLFxuICAgICAgICAgICAgY29udGVudDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gLy8gdmlkZW9zXG5cblxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgpIHtcbiAgICAgIGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoID0gY29uZmlnLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoO1xuICAgIH1cblxuICAgIGlmIChjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0KSB7XG4gICAgICBkZWZhdWx0cy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQgPSBjb25maWcuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0O1xuICAgIH1cblxuICAgIGlmIChjb25maWcub3BlbkdyYXBoLnZpZGVvcyAmJiBjb25maWcub3BlbkdyYXBoLnZpZGVvcy5sZW5ndGgpIHtcbiAgICAgIGNvbmZpZy5vcGVuR3JhcGgudmlkZW9zLmZvckVhY2goZnVuY3Rpb24gKHZpZGVvLCBpbmRleCkge1xuICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAga2V5OiBcIm9nOnZpZGVvOjBcIiArIGluZGV4LFxuICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvXCIsXG4gICAgICAgICAgY29udGVudDogdmlkZW8udXJsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAodmlkZW8uYWx0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOmFsdDBcIiArIGluZGV4LFxuICAgICAgICAgICAgcHJvcGVydHk6IFwib2c6dmlkZW86YWx0XCIsXG4gICAgICAgICAgICBjb250ZW50OiB2aWRlby5hbHRcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmlkZW8ud2lkdGgpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6dmlkZW86d2lkdGgwXCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvOndpZHRoXCIsXG4gICAgICAgICAgICBjb250ZW50OiB2aWRlby53aWR0aC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb1dpZHRoKSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOndpZHRoMFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzp3aWR0aFwiLFxuICAgICAgICAgICAgY29udGVudDogZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgudG9TdHJpbmcoKVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2aWRlby5oZWlnaHQpIHtcbiAgICAgICAgICB0YWdzVG9SZW5kZXIucHVzaChSZWFjdC5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgICAgICBrZXk6IFwib2c6dmlkZW86aGVpZ2h0XCIgKyBpbmRleCxcbiAgICAgICAgICAgIHByb3BlcnR5OiBcIm9nOnZpZGVvOmhlaWdodFwiLFxuICAgICAgICAgICAgY29udGVudDogdmlkZW8uaGVpZ2h0LnRvU3RyaW5nKClcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0KSB7XG4gICAgICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgICAga2V5OiBcIm9nOnZpZGVvOmhlaWdodFwiICsgaW5kZXgsXG4gICAgICAgICAgICBwcm9wZXJ0eTogXCJvZzp2aWRlbzpoZWlnaHRcIixcbiAgICAgICAgICAgIGNvbnRlbnQ6IGRlZmF1bHRzLmRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodC50b1N0cmluZygpXG4gICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5sb2NhbGUpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOmxvY2FsZVwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpsb2NhbGVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5sb2NhbGVcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBpZiAoY29uZmlnLm9wZW5HcmFwaC5zaXRlX25hbWUpIHtcbiAgICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAga2V5OiBcIm9nOnNpdGVfbmFtZVwiLFxuICAgICAgICBwcm9wZXJ0eTogXCJvZzpzaXRlX25hbWVcIixcbiAgICAgICAgY29udGVudDogY29uZmlnLm9wZW5HcmFwaC5zaXRlX25hbWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH1cblxuICBpZiAoY29uZmlnLmNhbm9uaWNhbCkge1xuICAgIHRhZ3NUb1JlbmRlci5wdXNoKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIsIHtcbiAgICAgIHJlbDogXCJjYW5vbmljYWxcIixcbiAgICAgIGhyZWY6IGNvbmZpZy5jYW5vbmljYWwsXG4gICAgICBrZXk6IFwiY2Fub25pY2FsXCJcbiAgICB9KSk7XG4gIH1cblxuICBpZiAoY29uZmlnLmFkZGl0aW9uYWxNZXRhVGFncyAmJiBjb25maWcuYWRkaXRpb25hbE1ldGFUYWdzLmxlbmd0aCA+IDApIHtcbiAgICBjb25maWcuYWRkaXRpb25hbE1ldGFUYWdzLmZvckVhY2goZnVuY3Rpb24gKHRhZykge1xuICAgICAgdGFnc1RvUmVuZGVyLnB1c2goUmVhY3QuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgIGtleTogdGFnLm5hbWUgPyB0YWcubmFtZSA6IHRhZy5wcm9wZXJ0eVxuICAgICAgfSwgdGFnKSkpO1xuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHRhZ3NUb1JlbmRlcjtcbn07XG5cbnZhciBfZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShfZGVmYXVsdCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IF9kZWZhdWx0LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMudGl0bGUsXG4gICAgICAgIHRpdGxlVGVtcGxhdGUgPSBfdGhpcyRwcm9wcy50aXRsZVRlbXBsYXRlLFxuICAgICAgICBfdGhpcyRwcm9wcyRkYW5nZXJvdXMgPSBfdGhpcyRwcm9wcy5kYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4LFxuICAgICAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0luZGV4ID0gX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzID09PSB2b2lkIDAgPyBmYWxzZSA6IF90aGlzJHByb3BzJGRhbmdlcm91cyxcbiAgICAgICAgX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzMiA9IF90aGlzJHByb3BzLmRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vRm9sbG93LFxuICAgICAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdyA9IF90aGlzJHByb3BzJGRhbmdlcm91czIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3RoaXMkcHJvcHMkZGFuZ2Vyb3VzMixcbiAgICAgICAgZGVzY3JpcHRpb24gPSBfdGhpcyRwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgY2Fub25pY2FsID0gX3RoaXMkcHJvcHMuY2Fub25pY2FsLFxuICAgICAgICBmYWNlYm9vayA9IF90aGlzJHByb3BzLmZhY2Vib29rLFxuICAgICAgICBvcGVuR3JhcGggPSBfdGhpcyRwcm9wcy5vcGVuR3JhcGgsXG4gICAgICAgIGFkZGl0aW9uYWxNZXRhVGFncyA9IF90aGlzJHByb3BzLmFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICAgICAgdHdpdHRlciA9IF90aGlzJHByb3BzLnR3aXR0ZXIsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoID0gX3RoaXMkcHJvcHMuZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGgsXG4gICAgICAgIGRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCA9IF90aGlzJHByb3BzLmRlZmF1bHRPcGVuR3JhcGhJbWFnZUhlaWdodCxcbiAgICAgICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGggPSBfdGhpcyRwcm9wcy5kZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aCxcbiAgICAgICAgZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0ID0gX3RoaXMkcHJvcHMuZGVmYXVsdE9wZW5HcmFwaFZpZGVvSGVpZ2h0LFxuICAgICAgICBtb2JpbGVBbHRlcm5hdGUgPSBfdGhpcyRwcm9wcy5tb2JpbGVBbHRlcm5hdGUsXG4gICAgICAgIGxhbmd1YWdlQWx0ZXJuYXRlcyA9IF90aGlzJHByb3BzLmxhbmd1YWdlQWx0ZXJuYXRlcztcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBidWlsZFRhZ3Moe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgdGl0bGVUZW1wbGF0ZTogdGl0bGVUZW1wbGF0ZSxcbiAgICAgIGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXg6IGRhbmdlcm91c2x5U2V0QWxsUGFnZXNUb05vSW5kZXgsXG4gICAgICBkYW5nZXJvdXNseVNldEFsbFBhZ2VzVG9Ob0ZvbGxvdzogZGFuZ2Vyb3VzbHlTZXRBbGxQYWdlc1RvTm9Gb2xsb3csXG4gICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gICAgICBjYW5vbmljYWw6IGNhbm9uaWNhbCxcbiAgICAgIGZhY2Vib29rOiBmYWNlYm9vayxcbiAgICAgIG9wZW5HcmFwaDogb3BlbkdyYXBoLFxuICAgICAgYWRkaXRpb25hbE1ldGFUYWdzOiBhZGRpdGlvbmFsTWV0YVRhZ3MsXG4gICAgICB0d2l0dGVyOiB0d2l0dGVyLFxuICAgICAgZGVmYXVsdE9wZW5HcmFwaEltYWdlV2lkdGg6IGRlZmF1bHRPcGVuR3JhcGhJbWFnZVdpZHRoLFxuICAgICAgZGVmYXVsdE9wZW5HcmFwaEltYWdlSGVpZ2h0OiBkZWZhdWx0T3BlbkdyYXBoSW1hZ2VIZWlnaHQsXG4gICAgICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9XaWR0aDogZGVmYXVsdE9wZW5HcmFwaFZpZGVvV2lkdGgsXG4gICAgICBkZWZhdWx0T3BlbkdyYXBoVmlkZW9IZWlnaHQ6IGRlZmF1bHRPcGVuR3JhcGhWaWRlb0hlaWdodCxcbiAgICAgIG1vYmlsZUFsdGVybmF0ZTogbW9iaWxlQWx0ZXJuYXRlLFxuICAgICAgbGFuZ3VhZ2VBbHRlcm5hdGVzOiBsYW5ndWFnZUFsdGVybmF0ZXNcbiAgICB9KSk7XG4gIH07XG5cbiAgcmV0dXJuIF9kZWZhdWx0O1xufShDb21wb25lbnQpO1xuXG52YXIgX2RlZmF1bHQkMSA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShfZGVmYXVsdCwgX0NvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgcmV0dXJuIF9Db21wb25lbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKSB8fCB0aGlzO1xuICB9XG5cbiAgdmFyIF9wcm90byA9IF9kZWZhdWx0LnByb3RvdHlwZTtcblxuICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIHRpdGxlID0gX3RoaXMkcHJvcHMudGl0bGUsXG4gICAgICAgIF90aGlzJHByb3BzJG5vaW5kZXggPSBfdGhpcyRwcm9wcy5ub2luZGV4LFxuICAgICAgICBub2luZGV4ID0gX3RoaXMkcHJvcHMkbm9pbmRleCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfdGhpcyRwcm9wcyRub2luZGV4LFxuICAgICAgICBub2ZvbGxvdyA9IF90aGlzJHByb3BzLm5vZm9sbG93LFxuICAgICAgICBkZXNjcmlwdGlvbiA9IF90aGlzJHByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICBjYW5vbmljYWwgPSBfdGhpcyRwcm9wcy5jYW5vbmljYWwsXG4gICAgICAgIG9wZW5HcmFwaCA9IF90aGlzJHByb3BzLm9wZW5HcmFwaCxcbiAgICAgICAgZmFjZWJvb2sgPSBfdGhpcyRwcm9wcy5mYWNlYm9vayxcbiAgICAgICAgdHdpdHRlciA9IF90aGlzJHByb3BzLnR3aXR0ZXIsXG4gICAgICAgIGFkZGl0aW9uYWxNZXRhVGFncyA9IF90aGlzJHByb3BzLmFkZGl0aW9uYWxNZXRhVGFncyxcbiAgICAgICAgdGl0bGVUZW1wbGF0ZSA9IF90aGlzJHByb3BzLnRpdGxlVGVtcGxhdGUsXG4gICAgICAgIG1vYmlsZUFsdGVybmF0ZSA9IF90aGlzJHByb3BzLm1vYmlsZUFsdGVybmF0ZSxcbiAgICAgICAgbGFuZ3VhZ2VBbHRlcm5hdGVzID0gX3RoaXMkcHJvcHMubGFuZ3VhZ2VBbHRlcm5hdGVzO1xuICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIGJ1aWxkVGFncyh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBub2luZGV4OiBub2luZGV4LFxuICAgICAgbm9mb2xsb3c6IG5vZm9sbG93LFxuICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgY2Fub25pY2FsOiBjYW5vbmljYWwsXG4gICAgICBmYWNlYm9vazogZmFjZWJvb2ssXG4gICAgICBvcGVuR3JhcGg6IG9wZW5HcmFwaCxcbiAgICAgIGFkZGl0aW9uYWxNZXRhVGFnczogYWRkaXRpb25hbE1ldGFUYWdzLFxuICAgICAgdHdpdHRlcjogdHdpdHRlcixcbiAgICAgIHRpdGxlVGVtcGxhdGU6IHRpdGxlVGVtcGxhdGUsXG4gICAgICBtb2JpbGVBbHRlcm5hdGU6IG1vYmlsZUFsdGVybmF0ZSxcbiAgICAgIGxhbmd1YWdlQWx0ZXJuYXRlczogbGFuZ3VhZ2VBbHRlcm5hdGVzXG4gICAgfSkpO1xuICB9O1xuXG4gIHJldHVybiBfZGVmYXVsdDtcbn0oQ29tcG9uZW50KTtcblxudmFyIG1hcmt1cCA9IGZ1bmN0aW9uIG1hcmt1cChqc29ubGQpIHtcbiAgcmV0dXJuIHtcbiAgICBfX2h0bWw6IGpzb25sZFxuICB9O1xufTtcblxudmFyIEFydGljbGVKc29uTGQgPSBmdW5jdGlvbiBBcnRpY2xlSnNvbkxkKF9yZWYpIHtcbiAgdmFyIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHB1Ymxpc2hlck5hbWUgPSBfcmVmLnB1Ymxpc2hlck5hbWUsXG4gICAgICBwdWJsaXNoZXJMb2dvID0gX3JlZi5wdWJsaXNoZXJMb2dvO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQXJ0aWNsZVxcXCIsXFxuICAgIFxcXCJtYWluRW50aXR5T2ZQYWdlXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJXZWJQYWdlXFxcIixcXG4gICAgICBcXFwiQGlkXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJoZWFkbGluZVxcXCI6IFxcXCJcIiArIHRpdGxlICsgXCJcXFwiLFxcbiAgICBcXFwiaW1hZ2VcXFwiOiBbXFxuICAgICAgXCIgKyBpbWFnZXMubWFwKGZ1bmN0aW9uIChpbWFnZSkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIGltYWdlICsgXCJcXFwiXCI7XG4gIH0pICsgXCJcXG4gICAgIF0sXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImRhdGVNb2RpZmllZFxcXCI6IFxcXCJcIiArIChkYXRlTW9kaWZpZWQgfHwgZGF0ZVB1Ymxpc2hlZCkgKyBcIlxcXCIsXFxuICAgIFxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBlcnNvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhdXRob3JOYW1lICsgXCJcXFwiXFxuICAgIH0sXFxuICAgIFxcXCJwdWJsaXNoZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXJOYW1lICsgXCJcXFwiLFxcbiAgICAgIFxcXCJsb2dvXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkltYWdlT2JqZWN0XFxcIixcXG4gICAgICAgIFxcXCJ1cmxcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXJMb2dvICsgXCJcXFwiXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtYXJ0aWNsZVwiXG4gIH0pKTtcbn07XG5cbnZhciBCcmVhZENydW1iSnNvbkxkID0gZnVuY3Rpb24gQnJlYWRDcnVtYkpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJGl0ZW1MaXN0RWxlbWVudHMgPSBfcmVmLml0ZW1MaXN0RWxlbWVudHMsXG4gICAgICBpdGVtTGlzdEVsZW1lbnRzID0gX3JlZiRpdGVtTGlzdEVsZW1lbnRzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaXRlbUxpc3RFbGVtZW50cztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkJyZWFkY3J1bWJMaXN0XFxcIixcXG4gICAgXFxcIml0ZW1MaXN0RWxlbWVudFxcXCI6IFtcXG4gICAgICBcIiArIGl0ZW1MaXN0RWxlbWVudHMubWFwKGZ1bmN0aW9uIChpdGVtTGlzdEVsZW1lbnQpIHtcbiAgICByZXR1cm4gXCJ7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiTGlzdEl0ZW1cXFwiLFxcbiAgICAgICAgXFxcInBvc2l0aW9uXFxcIjogXCIgKyBpdGVtTGlzdEVsZW1lbnQucG9zaXRpb24gKyBcIixcXG4gICAgICAgIFxcXCJpdGVtXFxcIjoge1xcbiAgICAgICAgICBcXFwiQGlkXFxcIjogXFxcIlwiICsgaXRlbUxpc3RFbGVtZW50Lml0ZW0gKyBcIlxcXCIsXFxuICAgICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgaXRlbUxpc3RFbGVtZW50Lm5hbWUgKyBcIlxcXCJcXG4gICAgICAgIH1cXG4gICAgICB9XCI7XG4gIH0pICsgXCJcXG4gICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWJyZWFkY3J1bWJcIlxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRRdWVzdGlvbnMgPSBmdW5jdGlvbiBidWlsZFF1ZXN0aW9ucyhtYWluRW50aXR5KSB7XG4gIHJldHVybiBcIlxcbiAgXCIgKyBtYWluRW50aXR5Lm1hcChmdW5jdGlvbiAocXVlc3Rpb24pIHtcbiAgICByZXR1cm4gXCJ7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlF1ZXN0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHF1ZXN0aW9uLnF1ZXN0aW9uTmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwiYWNjZXB0ZWRBbnN3ZXJcXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQW5zd2VyXFxcIixcXG4gICAgICAgIFxcXCJ0ZXh0XFxcIjogXFxcIlwiICsgcXVlc3Rpb24uYWNjZXB0ZWRBbnN3ZXJUZXh0ICsgXCJcXFwiXFxuICAgICAgfVxcbiAgfVwiO1xuICB9KTtcbn07XG5cbnZhciBGQVFQYWdlSnNvbkxkID0gZnVuY3Rpb24gRkFRUGFnZUpzb25MZChfcmVmKSB7XG4gIHZhciBfcmVmJG1haW5FbnRpdHkgPSBfcmVmLm1haW5FbnRpdHksXG4gICAgICBtYWluRW50aXR5ID0gX3JlZiRtYWluRW50aXR5ID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkbWFpbkVudGl0eTtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnL1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJGQVFQYWdlXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlcXFwiOiBbXCIgKyBidWlsZFF1ZXN0aW9ucyhtYWluRW50aXR5KSArIFwiXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtZmFxLXBhZ2VcIlxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRCYXNlU2FsYXJ5ID0gZnVuY3Rpb24gYnVpbGRCYXNlU2FsYXJ5KGJhc2VTYWxhcnkpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYmFzZVNhbGFyeVxcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk1vbmV0YXJ5QW1vdW50XFxcIixcXG4gICAgXCIgKyAoYmFzZVNhbGFyeS5jdXJyZW5jeSA/IFwiXFxcImN1cnJlbmN5XFxcIjogXFxcIlwiICsgYmFzZVNhbGFyeS5jdXJyZW5jeSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJ2YWx1ZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUXVhbnRpdGF0aXZlVmFsdWVcXFwiLFxcbiAgICAgIFwiICsgKGJhc2VTYWxhcnkudmFsdWUgPyBcIlxcXCJ2YWx1ZVxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudmFsdWUgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKGJhc2VTYWxhcnkudW5pdFRleHQgPyBcIlxcXCJ1bml0VGV4dFxcXCI6IFxcXCJcIiArIGJhc2VTYWxhcnkudW5pdFRleHQgKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgSm9iUG9zdGluZ0pzb25MZCA9IGZ1bmN0aW9uIEpvYlBvc3RpbmdKc29uTGQoX3JlZikge1xuICB2YXIgYmFzZVNhbGFyeSA9IF9yZWYuYmFzZVNhbGFyeSxcbiAgICAgIGRhdGVQb3N0ZWQgPSBfcmVmLmRhdGVQb3N0ZWQsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBlbXBsb3ltZW50VHlwZSA9IF9yZWYuZW1wbG95bWVudFR5cGUsXG4gICAgICBoaXJpbmdPcmdhbml6YXRpb24gPSBfcmVmLmhpcmluZ09yZ2FuaXphdGlvbixcbiAgICAgIGpvYkxvY2F0aW9uID0gX3JlZi5qb2JMb2NhdGlvbixcbiAgICAgIGFwcGxpY2FudExvY2F0aW9uUmVxdWlyZW1lbnRzID0gX3JlZi5hcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyxcbiAgICAgIGpvYkxvY2F0aW9uVHlwZSA9IF9yZWYuam9iTG9jYXRpb25UeXBlLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgdmFsaWRUaHJvdWdoID0gX3JlZi52YWxpZFRocm91Z2g7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJKb2JQb3N0aW5nXFxcIixcXG4gICAgXCIgKyAoYmFzZVNhbGFyeSA/IGJ1aWxkQmFzZVNhbGFyeShiYXNlU2FsYXJ5KSA6ICcnKSArIFwiXFxuICAgIFxcXCJkYXRlUG9zdGVkXFxcIjogXFxcIlwiICsgZGF0ZVBvc3RlZCArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFwiICsgKGVtcGxveW1lbnRUeXBlID8gXCJcXFwiZW1wbG95bWVudFR5cGVcXFwiOiBcXFwiXCIgKyBlbXBsb3ltZW50VHlwZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJoaXJpbmdPcmdhbml6YXRpb25cXFwiIDoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCIgOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCIgOiBcXFwiXCIgKyBoaXJpbmdPcmdhbml6YXRpb24ubmFtZSArIFwiXFxcIixcXG4gICAgICBcXFwic2FtZUFzXFxcIiA6IFxcXCJcIiArIGhpcmluZ09yZ2FuaXphdGlvbi5zYW1lQXMgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxuICAgIFxcXCJqb2JMb2NhdGlvblxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGxhY2VcXFwiLFxcbiAgICAgIFxcXCJhZGRyZXNzXFxcIjoge1xcbiAgICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlBvc3RhbEFkZHJlc3NcXFwiLFxcbiAgICAgICAgXFxcImFkZHJlc3NMb2NhbGl0eVxcXCI6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NMb2NhbGl0eSArIFwiXFxcIixcXG4gICAgICAgIFxcXCJhZGRyZXNzUmVnaW9uXFxcIjogXFxcIlwiICsgam9iTG9jYXRpb24uYWRkcmVzc1JlZ2lvbiArIFwiXFxcIixcXG4gICAgICAgIFxcXCJwb3N0YWxDb2RlXFxcIiA6IFxcXCJcIiArIGpvYkxvY2F0aW9uLnBvc3RhbENvZGUgKyBcIlxcXCIsXFxuICAgICAgICBcXFwic3RyZWV0QWRkcmVzc1xcXCIgOiBcXFwiXCIgKyBqb2JMb2NhdGlvbi5zdHJlZXRBZGRyZXNzICsgXCJcXFwiLFxcbiAgICAgICAgXFxcImFkZHJlc3NDb3VudHJ5XFxcIiA6IFxcXCJcIiArIGpvYkxvY2F0aW9uLmFkZHJlc3NDb3VudHJ5ICsgXCJcXFwiXFxuICAgICAgfVxcbiAgICB9LFxcbiAgICBcIiArIChhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50cyA/IFwiIFxcXCJhcHBsaWNhbnRMb2NhdGlvblJlcXVpcmVtZW50c1xcXCI6IHtcXG4gICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJDb3VudHJ5XFxcIixcXG4gICAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYXBwbGljYW50TG9jYXRpb25SZXF1aXJlbWVudHMgKyBcIlxcXCJcXG4gICAgfSxcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKGpvYkxvY2F0aW9uVHlwZSA/IFwiXFxcImpvYkxvY2F0aW9uVHlwZVxcXCI6IFxcXCJcIiArIGpvYkxvY2F0aW9uVHlwZSArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKHZhbGlkVGhyb3VnaCA/IFwiXFxcInZhbGlkVGhyb3VnaFxcXCI6IFxcXCJcIiArIHZhbGlkVGhyb3VnaCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJ0aXRsZVxcXCI6IFxcXCJcIiArIHRpdGxlICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1qb2JQb3N0aW5nXCJcbiAgfSkpO1xufTtcblxudmFyIEJsb2dKc29uTGQgPSBmdW5jdGlvbiBCbG9nSnNvbkxkKF9yZWYpIHtcbiAgdmFyIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGl0bGUgPSBfcmVmLnRpdGxlLFxuICAgICAgX3JlZiRpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIGltYWdlcyA9IF9yZWYkaW1hZ2VzID09PSB2b2lkIDAgPyBbXSA6IF9yZWYkaW1hZ2VzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbjtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkJsb2dcXFwiLFxcbiAgICBcXFwibWFpbkVudGl0eU9mUGFnZVxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiV2ViUGFnZVxcXCIsXFxuICAgICAgXFxcIkBpZFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiaGVhZGxpbmVcXFwiOiBcXFwiXCIgKyB0aXRsZSArIFwiXFxcIixcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KSArIFwiXFxuICAgICBdLFxcbiAgICBcXFwiZGF0ZVB1Ymxpc2hlZFxcXCI6IFxcXCJcIiArIGRhdGVQdWJsaXNoZWQgKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlTW9kaWZpZWRcXFwiOiBcXFwiXCIgKyAoZGF0ZU1vZGlmaWVkIHx8IGRhdGVQdWJsaXNoZWQpICsgXCJcXFwiLFxcbiAgICBcXFwiYXV0aG9yXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQZXJzb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgYXV0aG9yTmFtZSArIFwiXFxcIlxcbiAgICB9LFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtYmxvZ1wiXG4gIH0pKTtcbn07XG5cbnZhciBDb3Vyc2VKc29uTGQgPSBmdW5jdGlvbiBDb3Vyc2VKc29uTGQoX3JlZikge1xuICB2YXIgY291cnNlTmFtZSA9IF9yZWYuY291cnNlTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHByb3ZpZGVyTmFtZSA9IF9yZWYucHJvdmlkZXJOYW1lLFxuICAgICAgcHJvdmlkZXJVcmwgPSBfcmVmLnByb3ZpZGVyVXJsO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQ291cnNlXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBjb3Vyc2VOYW1lICsgXCJcXFwiLFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcXG4gICAgXFxcInByb3ZpZGVyXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcmdhbml6YXRpb25cXFwiLFxcbiAgICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHJvdmlkZXJOYW1lICsgXCJcXFwiXCIgKyAocHJvdmlkZXJVcmwgPyBcIixcXG4gICAgICBcXFwic2FtZUFzXFxcIjogXFxcIlwiICsgcHJvdmlkZXJVcmwgKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWNvdXJzZVwiXG4gIH0pKTtcbn07XG5cbnZhciBEYXRhc2V0SnNvbkxkID0gZnVuY3Rpb24gRGF0YXNldEpzb25MZChfcmVmKSB7XG4gIHZhciBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgbGljZW5zZSA9IF9yZWYubGljZW5zZTtcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkRhdGFzZXRcXFwiLFxcbiAgICBcXFwiZGVzY3JpcHRpb25cXFwiOiBcXFwiXCIgKyBkZXNjcmlwdGlvbiArIFwiXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiXCIgKyAobGljZW5zZSA/IFwiLFxcbiAgICAgICAgXFxcImxpY2Vuc2VcXFwiOiBcXFwiXCIgKyBsaWNlbnNlICsgXCJcXFwiXCIgOiAnJykgKyBcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtZGF0YXNldFwiXG4gIH0pKTtcbn07XG5cbnZhciBmb3JtYXRJZkFycmF5ID0gZnVuY3Rpb24gZm9ybWF0SWZBcnJheSh2YWx1ZSkge1xuICByZXR1cm4gQXJyYXkuaXNBcnJheSh2YWx1ZSkgPyBcIltcIiArIHZhbHVlLm1hcChmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgdmFsICsgXCJcXFwiXCI7XG4gIH0pICsgXCJdXCIgOiBcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCI7XG59O1xuXG52YXIgYnVpbGRBZGRyZXNzID0gKGZ1bmN0aW9uIChhZGRyZXNzKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImFkZHJlc3NcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQb3N0YWxBZGRyZXNzXFxcIixcXG4gICAgXFxcInN0cmVldEFkZHJlc3NcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLnN0cmVldEFkZHJlc3MgKyBcIlxcXCIsXFxuICAgIFxcXCJhZGRyZXNzTG9jYWxpdHlcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLmFkZHJlc3NMb2NhbGl0eSArIFwiXFxcIixcXG4gICAgXCIgKyAoYWRkcmVzcy5hZGRyZXNzUmVnaW9uID8gXCJcXFwiYWRkcmVzc1JlZ2lvblxcXCI6IFxcXCJcIiArIGFkZHJlc3MuYWRkcmVzc1JlZ2lvbiArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJwb3N0YWxDb2RlXFxcIjogXFxcIlwiICsgYWRkcmVzcy5wb3N0YWxDb2RlICsgXCJcXFwiLFxcbiAgICBcXFwiYWRkcmVzc0NvdW50cnlcXFwiOiBcXFwiXCIgKyBhZGRyZXNzLmFkZHJlc3NDb3VudHJ5ICsgXCJcXFwiXFxuICB9LFxcblwiO1xufSk7XG5cbnZhciBidWlsZEdlbyA9IGZ1bmN0aW9uIGJ1aWxkR2VvKGdlbykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJnZW9cXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJHZW9Db29yZGluYXRlc1xcXCIsXFxuICAgIFxcXCJsYXRpdHVkZVxcXCI6IFxcXCJcIiArIGdlby5sYXRpdHVkZSArIFwiXFxcIixcXG4gICAgXFxcImxvbmdpdHVkZVxcXCI6IFxcXCJcIiArIGdlby5sb25naXR1ZGUgKyBcIlxcXCJcXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRSYXRpbmcgPSBmdW5jdGlvbiBidWlsZFJhdGluZyhyYXRpbmcpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYWdncmVnYXRlUmF0aW5nXFxcIjoge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiQWdncmVnYXRlUmF0aW5nXFxcIixcXG4gICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgcmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiLFxcbiAgICBcXFwicmF0aW5nQ291bnRcXFwiOiBcXFwiXCIgKyByYXRpbmcucmF0aW5nQ291bnQgKyBcIlxcXCJcXG4gIH0sXFxuXCI7XG59O1xuXG52YXIgYnVpbGRPcGVuaW5nSG91cnMgPSBmdW5jdGlvbiBidWlsZE9wZW5pbmdIb3VycyhvcGVuaW5nSG91cnMpIHtcbiAgcmV0dXJuIFwiXFxuICB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJPcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXFxcIixcXG4gICAgXFxcIm9wZW5zXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLm9wZW5zICsgXCJcXFwiLFxcbiAgICBcXFwiY2xvc2VzXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLmNsb3NlcyArIFwiXFxcIixcXG4gICAgXCIgKyAob3BlbmluZ0hvdXJzLmRheU9mV2VlayA/IFwiXFxcImRheU9mV2Vla1xcXCI6IFwiICsgZm9ybWF0SWZBcnJheShvcGVuaW5nSG91cnMuZGF5T2ZXZWVrKSArIFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob3BlbmluZ0hvdXJzLnZhbGlkRnJvbSA/IFwiXFxcInZhbGlkRnJvbVxcXCI6IFxcXCJcIiArIG9wZW5pbmdIb3Vycy52YWxpZEZyb20gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvcGVuaW5nSG91cnMudmFsaWRUaHJvdWdoID8gXCJcXFwidmFsaWRUaHJvdWdoXFxcIjogXFxcIlwiICsgb3BlbmluZ0hvdXJzLnZhbGlkVGhyb3VnaCArIFwiXFxcIlwiIDogJycpICsgXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBMb2NhbEJ1c2luZXNzSnNvbkxkID0gZnVuY3Rpb24gTG9jYWxCdXNpbmVzc0pzb25MZChfcmVmKSB7XG4gIHZhciB0eXBlID0gX3JlZi50eXBlLFxuICAgICAgaWQgPSBfcmVmLmlkLFxuICAgICAgbmFtZSA9IF9yZWYubmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIHVybCA9IF9yZWYudXJsLFxuICAgICAgdGVsZXBob25lID0gX3JlZi50ZWxlcGhvbmUsXG4gICAgICBhZGRyZXNzID0gX3JlZi5hZGRyZXNzLFxuICAgICAgZ2VvID0gX3JlZi5nZW8sXG4gICAgICBpbWFnZXMgPSBfcmVmLmltYWdlcyxcbiAgICAgIHJhdGluZyA9IF9yZWYucmF0aW5nLFxuICAgICAgcHJpY2VSYW5nZSA9IF9yZWYucHJpY2VSYW5nZSxcbiAgICAgIHNhbWVBcyA9IF9yZWYuc2FtZUFzLFxuICAgICAgb3BlbmluZ0hvdXJzID0gX3JlZi5vcGVuaW5nSG91cnM7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwOi8vc2NoZW1hLm9yZ1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJcIiArIHR5cGUgKyBcIlxcXCIsXFxuICAgIFxcXCJAaWRcXFwiOiBcXFwiXCIgKyBpZCArIFwiXFxcIixcXG4gICAgXCIgKyAoZGVzY3JpcHRpb24gPyBcIlxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAodGVsZXBob25lID8gXCJcXFwidGVsZXBob25lXFxcIjogXFxcIlwiICsgdGVsZXBob25lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyBidWlsZEFkZHJlc3MoYWRkcmVzcykgKyBcIlxcbiAgICBcIiArIChnZW8gPyBcIlwiICsgYnVpbGRHZW8oZ2VvKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKHJhdGluZyA/IFwiXCIgKyBidWlsZFJhdGluZyhyYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAocHJpY2VSYW5nZSA/IFwiXFxcInByaWNlUmFuZ2VcXFwiOiBcXFwiXCIgKyBwcmljZVJhbmdlICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImltYWdlXFxcIjpcIiArIGZvcm1hdElmQXJyYXkoaW1hZ2VzKSArIFwiLFxcbiAgICBcIiArIChzYW1lQXMgPyBcIlxcXCJzYW1lQXNcXFwiOiBbXCIgKyBzYW1lQXMubWFwKGZ1bmN0aW9uICh1cmwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB1cmwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl0sXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvcGVuaW5nSG91cnMgPyBcIlxcXCJvcGVuaW5nSG91cnNTcGVjaWZpY2F0aW9uXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvcGVuaW5nSG91cnMpID8gXCJbXCIgKyBvcGVuaW5nSG91cnMubWFwKGZ1bmN0aW9uIChob3Vycykge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPcGVuaW5nSG91cnMoaG91cnMpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPcGVuaW5nSG91cnMob3BlbmluZ0hvdXJzKSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtbG9jYWwtYnVzaW5lc3NcIlxuICB9KSk7XG59O1xuXG52YXIgTG9nb0pzb25MZCA9IGZ1bmN0aW9uIExvZ29Kc29uTGQoX3JlZikge1xuICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcXG4gICAgXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBsb2dvICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1sb2dvXCJcbiAgfSkpO1xufTtcblxudmFyIGJ1aWxkQnJhbmQgPSBmdW5jdGlvbiBidWlsZEJyYW5kKGJyYW5kKSB7XG4gIHJldHVybiBcIlxcbiAgXFxcImJyYW5kXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJUaGluZ1xcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBicmFuZCArIFwiXFxcIlxcbiAgICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkUmV2aWV3UmF0aW5nID0gZnVuY3Rpb24gYnVpbGRSZXZpZXdSYXRpbmcocmF0aW5nKSB7XG4gIHJldHVybiByYXRpbmcgPyBcIlxcXCJyZXZpZXdSYXRpbmdcXFwiOiB7XFxuICAgICAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSYXRpbmdcXFwiLFxcbiAgICAgICAgICBcIiArIChyYXRpbmcuYmVzdFJhdGluZyA/IFwiXFxcImJlc3RSYXRpbmdcXFwiOiBcXFwiXCIgKyByYXRpbmcuYmVzdFJhdGluZyArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgICAgIFwiICsgKHJhdGluZy53b3JzdFJhdGluZyA/IFwiXFxcIndvcnN0UmF0aW5nXFxcIjogXFxcIlwiICsgcmF0aW5nLndvcnN0UmF0aW5nICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICAgICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgcmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiXFxuICAgICAgICB9XCIgOiAnJztcbn07XG5cbnZhciBidWlsZEF1dGhvciA9IGZ1bmN0aW9uIGJ1aWxkQXV0aG9yKGF1dGhvcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhdXRob3JcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgYXV0aG9yLnR5cGUgKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBhdXRob3IubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZFB1Ymxpc2hlciA9IGZ1bmN0aW9uIGJ1aWxkUHVibGlzaGVyKHB1Ymxpc2hlcikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJwdWJsaXNoZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgcHVibGlzaGVyLnR5cGUgKyBcIlxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBwdWJsaXNoZXIubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBidWlsZFJldmlld3MgPSBmdW5jdGlvbiBidWlsZFJldmlld3MocmV2aWV3cykge1xuICByZXR1cm4gXCJcXG5cXFwicmV2aWV3XFxcIjogW1xcbiAgXCIgKyByZXZpZXdzLm1hcChmdW5jdGlvbiAocmV2aWV3KSB7XG4gICAgcmV0dXJuIFwie1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJSZXZpZXdcXFwiLFxcbiAgICAgIFwiICsgKHJldmlldy5hdXRob3IgPyBidWlsZEF1dGhvcihyZXZpZXcuYXV0aG9yKSA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAocmV2aWV3LnB1Ymxpc2hlciA/IGJ1aWxkUHVibGlzaGVyKHJldmlldy5wdWJsaXNoZXIpIDogJycpICsgXCJcXG4gICAgICBcIiArIChyZXZpZXcuZGF0ZVB1Ymxpc2hlZCA/IFwiXFxcImRhdGVQdWJsaXNoZWRcXFwiOiBcXFwiXCIgKyByZXZpZXcuZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgICAgXCIgKyAocmV2aWV3LnJldmlld0JvZHkgPyBcIlxcXCJyZXZpZXdCb2R5XFxcIjogXFxcIlwiICsgcmV2aWV3LnJldmlld0JvZHkgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICAgIFwiICsgKHJldmlldy5uYW1lID8gXCJcXFwibmFtZVxcXCI6IFxcXCJcIiArIHJldmlldy5uYW1lICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgICBcIiArIGJ1aWxkUmV2aWV3UmF0aW5nKHJldmlldy5yZXZpZXdSYXRpbmcpICsgXCJcXG4gIH1cIjtcbiAgfSkgKyBcIl0sXCI7XG59O1xuXG52YXIgYnVpbGRBZ2dyZWdhdGVSYXRpbmcgPSBmdW5jdGlvbiBidWlsZEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiYWdncmVnYXRlUmF0aW5nXFxcIjoge1xcbiAgICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJBZ2dyZWdhdGVSYXRpbmdcXFwiLFxcbiAgICAgIFxcXCJyYXRpbmdWYWx1ZVxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdWYWx1ZSArIFwiXFxcIixcXG4gICAgICBcXFwicmV2aWV3Q291bnRcXFwiOiBcXFwiXCIgKyBhZ2dyZWdhdGVSYXRpbmcucmV2aWV3Q291bnQgKyBcIlxcXCJcXG4gICAgfSxcXG5cIjtcbn07IC8vIFRPRE86IERvY3MgZm9yIG9mZmVycyBpdGVtQ29uZGl0aW9uICYgYXZhaWxhYmlsaXR5XG4vLyBUT0RPOiBTZWxsZXIgdHlwZSwgbWFrZSBkeW5hbWljXG5cblxudmFyIGJ1aWxkT2ZmZXJzID0gZnVuY3Rpb24gYnVpbGRPZmZlcnMob2ZmZXJzKSB7XG4gIHJldHVybiBcIlxcbiAge1xcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT2ZmZXJcXFwiLFxcbiAgICBcXFwicHJpY2VDdXJyZW5jeVxcXCI6IFxcXCJcIiArIG9mZmVycy5wcmljZUN1cnJlbmN5ICsgXCJcXFwiLFxcbiAgICBcIiArIChvZmZlcnMucHJpY2VWYWxpZFVudGlsID8gXCJcXFwicHJpY2VWYWxpZFVudGlsXFxcIjogXFxcIlwiICsgb2ZmZXJzLnByaWNlVmFsaWRVbnRpbCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5pdGVtQ29uZGl0aW9uID8gXCJcXFwiaXRlbUNvbmRpdGlvblxcXCI6IFxcXCJcIiArIG9mZmVycy5pdGVtQ29uZGl0aW9uICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzLmF2YWlsYWJpbGl0eSA/IFwiXFxcImF2YWlsYWJpbGl0eVxcXCI6IFxcXCJcIiArIG9mZmVycy5hdmFpbGFiaWxpdHkgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChvZmZlcnMudXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgb2ZmZXJzLnVybCArIFwiXFxcIixcIiA6ICcnKSArIFwiXFxuICAgIFwiICsgKG9mZmVycy5zZWxsZXIgPyBcIlxcbiAgICAgIFxcXCJzZWxsZXJcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIk9yZ2FuaXphdGlvblxcXCIsXFxuICAgICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBvZmZlcnMuc2VsbGVyLm5hbWUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXCIgOiAnJykgKyBcIlxcbiAgICBcXFwicHJpY2VcXFwiOiBcXFwiXCIgKyBvZmZlcnMucHJpY2UgKyBcIlxcXCJcXG4gIH1cXG5cIjtcbn07XG5cbnZhciBQcm9kdWN0SnNvbkxkID0gZnVuY3Rpb24gUHJvZHVjdEpzb25MZChfcmVmKSB7XG4gIHZhciBwcm9kdWN0TmFtZSA9IF9yZWYucHJvZHVjdE5hbWUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBkZXNjcmlwdGlvbiA9IF9yZWYuZGVzY3JpcHRpb24sXG4gICAgICBza3UgPSBfcmVmLnNrdSxcbiAgICAgIGd0aW44ID0gX3JlZi5ndGluOCxcbiAgICAgIGd0aW4xMyA9IF9yZWYuZ3RpbjEzLFxuICAgICAgZ3RpbjE0ID0gX3JlZi5ndGluMTQsXG4gICAgICBtcG4gPSBfcmVmLm1wbixcbiAgICAgIGJyYW5kID0gX3JlZi5icmFuZCxcbiAgICAgIF9yZWYkcmV2aWV3cyA9IF9yZWYucmV2aWV3cyxcbiAgICAgIHJldmlld3MgPSBfcmVmJHJldmlld3MgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRyZXZpZXdzLFxuICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICBvZmZlcnMgPSBfcmVmLm9mZmVycztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnL1xcXCIsXFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJQcm9kdWN0XFxcIixcXG4gICAgXFxcImltYWdlXFxcIjpcIiArIGZvcm1hdElmQXJyYXkoaW1hZ2VzKSArIFwiLFxcbiAgICBcIiArIChkZXNjcmlwdGlvbiA/IFwiXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChtcG4gPyBcIlxcXCJtcG5cXFwiOiBcXFwiXCIgKyBtcG4gKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChza3UgPyBcIlxcXCJza3VcXFwiOiBcXFwiXCIgKyBza3UgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluOCA/IFwiXFxcImd0aW44XFxcIjogXFxcIlwiICsgZ3RpbjggKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluMTMgPyBcIlxcXCJndGluMTNcXFwiOiBcXFwiXCIgKyBndGluMTMgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChndGluMTQgPyBcIlxcXCJndGluMTRcXFwiOiBcXFwiXCIgKyBndGluMTQgKyBcIlxcXCIsXCIgOiAnJykgKyBcIlxcbiAgICBcIiArIChicmFuZCA/IGJ1aWxkQnJhbmQoYnJhbmQpIDogJycpICsgXCJcXG4gICAgXCIgKyAocmV2aWV3cy5sZW5ndGggPyBidWlsZFJldmlld3MocmV2aWV3cykgOiAnJykgKyBcIlxcbiAgICBcIiArIChhZ2dyZWdhdGVSYXRpbmcgPyBidWlsZEFnZ3JlZ2F0ZVJhdGluZyhhZ2dyZWdhdGVSYXRpbmcpIDogJycpICsgXCJcXG4gICAgXCIgKyAob2ZmZXJzID8gXCJcXFwib2ZmZXJzXFxcIjogXCIgKyAoQXJyYXkuaXNBcnJheShvZmZlcnMpID8gXCJbXCIgKyBvZmZlcnMubWFwKGZ1bmN0aW9uIChvZmZlcikge1xuICAgIHJldHVybiBcIlwiICsgYnVpbGRPZmZlcnMob2ZmZXIpO1xuICB9KSArIFwiXVwiIDogYnVpbGRPZmZlcnMob2ZmZXJzKSkgKyBcIixcIiA6ICcnKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgcHJvZHVjdE5hbWUgKyBcIlxcXCJcXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXByb2R1Y3RcIlxuICB9KSk7XG59O1xuXG52YXIgU29jaWFsUHJvZmlsZUpzb25MZCA9IGZ1bmN0aW9uIFNvY2lhbFByb2ZpbGVKc29uTGQoX3JlZikge1xuICB2YXIgdHlwZSA9IF9yZWYudHlwZSxcbiAgICAgIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIF9yZWYkc2FtZUFzID0gX3JlZi5zYW1lQXMsXG4gICAgICBzYW1lQXMgPSBfcmVmJHNhbWVBcyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJHNhbWVBcztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlwiICsgdHlwZSArIFwiXFxcIixcXG4gICAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBuYW1lICsgXCJcXFwiLFxcbiAgICBcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFxcbiAgICBcXFwic2FtZUFzXFxcIjogW1xcbiAgICAgIFwiICsgc2FtZUFzLm1hcChmdW5jdGlvbiAoc29jaWFsVXJsKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgc29jaWFsVXJsICsgXCJcXFwiXCI7XG4gIH0pICsgXCJcXG4gICAgIF1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLXNvY2lhbFwiXG4gIH0pKTtcbn07XG5cbnZhciBmb3JtYXRJZkFycmF5JDEgPSBmdW5jdGlvbiBmb3JtYXRJZkFycmF5KHZhbHVlKSB7XG4gIHJldHVybiBBcnJheS5pc0FycmF5KHZhbHVlKSA/IFwiW1wiICsgdmFsdWUubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyB2YWwgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIl1cIiA6IFwiXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcIjtcbn07XG5cbnZhciBidWlsZENvbnRhY3RQb2ludCA9IGZ1bmN0aW9uIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkge1xuICByZXR1cm4gY29udGFjdFBvaW50Lm1hcChmdW5jdGlvbiAoY29udGFjdCkge1xuICAgIHJldHVybiBcIntcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIkNvbnRhY3RQb2ludFxcXCIsXFxuICAgIFxcXCJ0ZWxlcGhvbmVcXFwiOiBcXFwiXCIgKyBjb250YWN0LnRlbGVwaG9uZSArIFwiXFxcIixcXG4gICAgXFxcImNvbnRhY3RUeXBlXFxcIjogXFxcIlwiICsgY29udGFjdC5jb250YWN0VHlwZSArIFwiXFxcIlwiICsgKGNvbnRhY3QuYXJlYVNlcnZlZCA/IFwiLFxcbiAgICBcXFwiYXJlYVNlcnZlZFxcXCI6IFwiICsgZm9ybWF0SWZBcnJheSQxKGNvbnRhY3QuYXJlYVNlcnZlZCkgOiAnJykgKyAoY29udGFjdC5hdmFpbGFibGVMYW5ndWFnZSA/IFwiLFxcbiAgICBcXFwiYXZhaWxhYmxlTGFuZ3VhZ2VcXFwiOiBcIiArIGZvcm1hdElmQXJyYXkkMShjb250YWN0LmF2YWlsYWJsZUxhbmd1YWdlKSA6ICcnKSArIChjb250YWN0LmNvbnRhY3RPcHRpb24gPyBcIixcXG4gICAgXFxcImNvbnRhY3RPcHRpb25cXFwiOiBcXFwiXCIgKyBjb250YWN0LmNvbnRhY3RPcHRpb24gKyBcIlxcXCJcIiA6ICcnKSArIFwiXFxuICAgIH1cIjtcbiAgfSk7XG59O1xuXG52YXIgQ29ycG9yYXRlQ29udGFjdEpzb25MZCA9IGZ1bmN0aW9uIENvcnBvcmF0ZUNvbnRhY3RKc29uTGQoX3JlZikge1xuICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICBsb2dvID0gX3JlZi5sb2dvLFxuICAgICAgY29udGFjdFBvaW50ID0gX3JlZi5jb250YWN0UG9pbnQ7XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHVybCArIFwiXFxcIixcXG4gICAgXCIgKyAobG9nbyA/IFwiXFxcImxvZ29cXFwiOiBcXFwiXCIgKyBsb2dvICsgXCJcXFwiLFwiIDogJycpICsgXCJcXG4gICAgXFxcImNvbnRhY3RQb2ludFxcXCI6IFtcIiArIGJ1aWxkQ29udGFjdFBvaW50KGNvbnRhY3RQb2ludCkgKyBcIl1cXG4gIH1cIjtcbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoSGVhZCwgbnVsbCwgUmVhY3QuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiLCB7XG4gICAgdHlwZTogXCJhcHBsaWNhdGlvbi9sZCtqc29uXCIsXG4gICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IG1hcmt1cChqc2xvbmxkKSxcbiAgICBrZXk6IFwianNvbmxkLWNvcnBvcmF0ZS1jb250YWN0XCJcbiAgfSkpO1xufTtcblxudmFyIE5ld3NBcnRpY2xlSnNvbkxkID0gZnVuY3Rpb24gTmV3c0FydGljbGVKc29uTGQoX3JlZikge1xuICB2YXIgdXJsID0gX3JlZi51cmwsXG4gICAgICB0aXRsZSA9IF9yZWYudGl0bGUsXG4gICAgICBfcmVmJGltYWdlcyA9IF9yZWYuaW1hZ2VzLFxuICAgICAgaW1hZ2VzID0gX3JlZiRpbWFnZXMgPT09IHZvaWQgMCA/IFtdIDogX3JlZiRpbWFnZXMsXG4gICAgICBzZWN0aW9uID0gX3JlZi5zZWN0aW9uLFxuICAgICAga2V5d29yZHMgPSBfcmVmLmtleXdvcmRzLFxuICAgICAgZGF0ZVB1Ymxpc2hlZCA9IF9yZWYuZGF0ZVB1Ymxpc2hlZCxcbiAgICAgIF9yZWYkZGF0ZUNyZWF0ZWQgPSBfcmVmLmRhdGVDcmVhdGVkLFxuICAgICAgZGF0ZUNyZWF0ZWQgPSBfcmVmJGRhdGVDcmVhdGVkID09PSB2b2lkIDAgPyBudWxsIDogX3JlZiRkYXRlQ3JlYXRlZCxcbiAgICAgIF9yZWYkZGF0ZU1vZGlmaWVkID0gX3JlZi5kYXRlTW9kaWZpZWQsXG4gICAgICBkYXRlTW9kaWZpZWQgPSBfcmVmJGRhdGVNb2RpZmllZCA9PT0gdm9pZCAwID8gbnVsbCA6IF9yZWYkZGF0ZU1vZGlmaWVkLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIGJvZHkgPSBfcmVmLmJvZHksXG4gICAgICBwdWJsaXNoZXJOYW1lID0gX3JlZi5wdWJsaXNoZXJOYW1lLFxuICAgICAgcHVibGlzaGVyTG9nbyA9IF9yZWYucHVibGlzaGVyTG9nbztcbiAgdmFyIGpzbG9ubGQgPSBcIntcXG4gICAgXFxcIkBjb250ZXh0XFxcIjogXFxcImh0dHA6Ly9zY2hlbWEub3JnXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIk5ld3NBcnRpY2xlXFxcIixcXG4gICAgXFxcIm1haW5FbnRpdHlPZlBhZ2VcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIldlYlBhZ2VcXFwiLFxcbiAgICAgIFxcXCJAaWRcXFwiOiBcXFwiXCIgKyB1cmwgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcImhlYWRsaW5lXFxcIjogXFxcIlwiICsgdGl0bGUgKyBcIlxcXCIsXFxuICAgIFxcXCJpbWFnZVxcXCI6IFtcXG4gICAgICBcIiArIGltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgaW1hZ2UgKyBcIlxcXCJcIjtcbiAgfSkgKyBcIlxcbiAgICAgXSxcXG4gICAgXFxcImFydGljbGVTZWN0aW9uXFxcIjpcXFwiXCIgKyBzZWN0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwia2V5d29yZHNcXFwiOiBcXFwiXCIgKyBrZXl3b3JkcyArIFwiXFxcIiwgICAgXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImRhdGVDcmVhdGVkXFxcIjogXFxcIlwiICsgKGRhdGVDcmVhdGVkIHx8IGRhdGVQdWJsaXNoZWQpICsgXCJcXFwiLFxcbiAgICBcXFwiZGF0ZU1vZGlmaWVkXFxcIjogXFxcIlwiICsgKGRhdGVNb2RpZmllZCB8fCBkYXRlUHVibGlzaGVkKSArIFwiXFxcIixcXG4gICAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGF1dGhvck5hbWUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcInB1Ymxpc2hlclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiT3JnYW5pemF0aW9uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlck5hbWUgKyBcIlxcXCIsXFxuICAgICAgXFxcImxvZ29cXFwiOiB7XFxuICAgICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiSW1hZ2VPYmplY3RcXFwiLFxcbiAgICAgICAgXFxcInVybFxcXCI6IFxcXCJcIiArIHB1Ymxpc2hlckxvZ28gKyBcIlxcXCJcXG4gICAgICB9XFxuICAgIH0sXFxuICAgIFxcXCJkZXNjcmlwdGlvblxcXCI6IFxcXCJcIiArIGRlc2NyaXB0aW9uICsgXCJcXFwiLFxcbiAgICBcXFwiYXJ0aWNsZUJvZHlcXFwiOiBcXFwiXCIgKyBib2R5ICsgXCJcXFwiXFxuICB9XCI7XG4gIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KEhlYWQsIG51bGwsIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIiwge1xuICAgIHR5cGU6IFwiYXBwbGljYXRpb24vbGQranNvblwiLFxuICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiBtYXJrdXAoanNsb25sZCksXG4gICAga2V5OiBcImpzb25sZC1uZXdzYXJ0aWNsZVwiXG4gIH0pKTtcbn07XG5cbnZhciBidWlsZExvY2F0aW9uID0gZnVuY3Rpb24gYnVpbGRMb2NhdGlvbihsb2NhdGlvbikge1xuICByZXR1cm4gXCJcXG4gIFxcXCJsb2NhdGlvblxcXCI6IHtcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlBsYWNlXFxcIixcXG4gICAgXCIgKyBidWlsZEFkZHJlc3MobG9jYXRpb24uYWRkcmVzcykgKyBcIlxcbiAgICBcIiArIChsb2NhdGlvbi5zYW1lQXMgPyBcIlxcXCJzYW1lQXNcXFwiOiBcXFwiXCIgKyBsb2NhdGlvbi5zYW1lQXMgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbG9jYXRpb24ubmFtZSArIFwiXFxcIlxcbiAgfSxcXG5cIjtcbn07XG5cbnZhciBFdmVudEpzb25MZCA9IGZ1bmN0aW9uIEV2ZW50SnNvbkxkKF9yZWYpIHtcbiAgdmFyIG5hbWUgPSBfcmVmLm5hbWUsXG4gICAgICBzdGFydERhdGUgPSBfcmVmLnN0YXJ0RGF0ZSxcbiAgICAgIGVuZERhdGUgPSBfcmVmLmVuZERhdGUsXG4gICAgICBsb2NhdGlvbiA9IF9yZWYubG9jYXRpb24sXG4gICAgICB1cmwgPSBfcmVmLnVybCxcbiAgICAgIGRlc2NyaXB0aW9uID0gX3JlZi5kZXNjcmlwdGlvbixcbiAgICAgIGltYWdlcyA9IF9yZWYuaW1hZ2VzO1xuICB2YXIganNsb25sZCA9IFwie1xcbiAgICBcXFwiQGNvbnRleHRcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmdcXFwiLFxcbiAgICBcXFwiQHR5cGVcXFwiOiBcXFwiRXZlbnRcXFwiLFxcbiAgICBcXFwic3RhcnREYXRlXFxcIjogXFxcIlwiICsgc3RhcnREYXRlICsgXCJcXFwiLFxcbiAgICBcXFwiZW5kRGF0ZVxcXCI6IFxcXCJcIiArIGVuZERhdGUgKyBcIlxcXCIsXFxuICAgIFwiICsgYnVpbGRMb2NhdGlvbihsb2NhdGlvbikgKyBcIlxcbiAgICBcIiArIChpbWFnZXMgPyBcIlxcXCJpbWFnZVxcXCI6XCIgKyBmb3JtYXRJZkFycmF5KGltYWdlcykgKyBcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAodXJsID8gXCJcXFwidXJsXFxcIjogXFxcIlwiICsgdXJsICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChkZXNjcmlwdGlvbiA/IFwiXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIlxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtZXZlbnRcIlxuICB9KSk7XG59O1xuXG52YXIgYnVpbGRBZ2dyZWdhdGVSYXRpbmckMSA9IGZ1bmN0aW9uIGJ1aWxkQWdncmVnYXRlUmF0aW5nKGFnZ3JlZ2F0ZVJhdGluZykge1xuICByZXR1cm4gXCJcXG4gIFxcXCJhZ2dyZWdhdGVSYXRpbmdcXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIkFnZ3JlZ2F0ZVJhdGluZ1xcXCIsXFxuICAgICAgXFxcInJhdGluZ1ZhbHVlXFxcIjogXFxcIlwiICsgYWdncmVnYXRlUmF0aW5nLnJhdGluZ1ZhbHVlICsgXCJcXFwiLFxcbiAgICAgIFxcXCJyYXRpbmdDb3VudFxcXCI6IFxcXCJcIiArIGFnZ3JlZ2F0ZVJhdGluZy5yYXRpbmdDb3VudCArIFwiXFxcIlxcbiAgICB9LFxcblwiO1xufTtcblxudmFyIGJ1aWxkSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbiBidWlsZEluc3RydWN0aW9uKGluc3RydWN0aW9uKSB7XG4gIHJldHVybiBcIntcXG4gIFxcXCJAdHlwZVxcXCI6IFxcXCJIb3dUb1N0ZXBcXFwiLFxcbiAgXFxcIm5hbWVcXFwiOiBcXFwiXCIgKyBpbnN0cnVjdGlvbi5uYW1lICsgXCJcXFwiLFxcbiAgXFxcInRleHRcXFwiOiBcXFwiXCIgKyBpbnN0cnVjdGlvbi50ZXh0ICsgXCJcXFwiLFxcbiAgXFxcInVybFxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLnVybCArIFwiXFxcIixcXG4gIFxcXCJpbWFnZVxcXCI6IFxcXCJcIiArIGluc3RydWN0aW9uLmltYWdlICsgXCJcXFwiXFxufVwiO1xufTtcblxudmFyIGJ1aWxkSW50ZXJhY3Rpb25TdGF0aXN0aWMgPSBmdW5jdGlvbiBidWlsZEludGVyYWN0aW9uU3RhdGlzdGljKHdhdGNoQ291bnQpIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwiaW50ZXJhY3Rpb25TdGF0aXN0aWNcXFwiOiB7XFxuICAgIFxcXCJAdHlwZVxcXCI6IFxcXCJJbnRlcmFjdGlvbkNvdW50ZXJcXFwiLFxcbiAgICBcXFwiaW50ZXJhY3Rpb25UeXBlXFxcIjogeyBcXFwiQHR5cGVcXFwiOiBcXFwiaHR0cDovL3NjaGVtYS5vcmcvV2F0Y2hBY3Rpb25cXFwiIH0sXFxuICAgIFxcXCJ1c2VySW50ZXJhY3Rpb25Db3VudFxcXCI6IFwiICsgd2F0Y2hDb3VudCArIFwiXFxuICB9XFxuXCI7XG59O1xuXG52YXIgYnVpbGRWaWRlbyA9IGZ1bmN0aW9uIGJ1aWxkVmlkZW8odmlkZW8pIHtcbiAgcmV0dXJuIFwiXFxuICBcXFwidmlkZW9cXFwiOiB7XFxuICAgICAgXFxcIkB0eXBlXFxcIjogXFxcIlZpZGVvT2JqZWN0XFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIHZpZGVvLm5hbWUgKyBcIlxcXCIsXFxuICAgICAgXFxcInRodW1ibmFpbFVybFxcXCI6IFtcXG4gICAgICAgIFwiICsgKHZpZGVvLnRodW1ibmFpbFVybHMgfHwgW10pLm1hcChmdW5jdGlvbiAodGh1bWJuYWlsVXJsKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiICsgdGh1bWJuYWlsVXJsICsgXCJcXFwiXCI7XG4gIH0pLmpvaW4oJywnKSArIFwiXFxuICAgICAgIF0sXFxuICAgICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgdmlkZW8uZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgICAgXFxcImNvbnRlbnRVcmxcXFwiOiBcXFwiXCIgKyB2aWRlby5jb250ZW50VXJsICsgXCJcXFwiLFxcbiAgICAgIFxcXCJ1cGxvYWREYXRlXFxcIjogXFxcIlwiICsgdmlkZW8udXBsb2FkRGF0ZSArIFwiXFxcIixcXG4gICAgICBcXFwiZHVyYXRpb25cXFwiOiBcXFwiXCIgKyB2aWRlby5kdXJhdGlvbiArIFwiXFxcIixcXG4gICAgICBcIiArICh2aWRlby5lbWJlZFVybCA/IFwiXFxcImVtYmVkVXJsXFxcIjogXFxcIlwiICsgdmlkZW8uZW1iZWRVcmwgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgICAgXCIgKyAodmlkZW8uZXhwaXJlcyA/IFwiXFxcImV4cGlyZXNcXFwiOiBcXFwiXCIgKyB2aWRlby5leHBpcmVzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICAgIFwiICsgKHZpZGVvLndhdGNoQ291bnQgPyBidWlsZEludGVyYWN0aW9uU3RhdGlzdGljKHZpZGVvLndhdGNoQ291bnQpIDogXCJcIikgKyBcIlxcbiAgICB9LFxcblwiO1xufTtcblxudmFyIFJlY2lwZUpzb25MZCA9IGZ1bmN0aW9uIFJlY2lwZUpzb25MZChfcmVmKSB7XG4gIHZhciBuYW1lID0gX3JlZi5uYW1lLFxuICAgICAgZGVzY3JpcHRpb24gPSBfcmVmLmRlc2NyaXB0aW9uLFxuICAgICAgYXV0aG9yTmFtZSA9IF9yZWYuYXV0aG9yTmFtZSxcbiAgICAgIF9yZWYkaW1hZ2VzID0gX3JlZi5pbWFnZXMsXG4gICAgICBpbWFnZXMgPSBfcmVmJGltYWdlcyA9PT0gdm9pZCAwID8gW10gOiBfcmVmJGltYWdlcyxcbiAgICAgIGRhdGVQdWJsaXNoZWQgPSBfcmVmLmRhdGVQdWJsaXNoZWQsXG4gICAgICBwcmVwVGltZSA9IF9yZWYucHJlcFRpbWUsXG4gICAgICBjb29rVGltZSA9IF9yZWYuY29va1RpbWUsXG4gICAgICB0b3RhbFRpbWUgPSBfcmVmLnRvdGFsVGltZSxcbiAgICAgIGtleXdvcmRzID0gX3JlZi5rZXl3b3JkcyxcbiAgICAgIHlpZWxkcyA9IF9yZWYueWllbGRzLFxuICAgICAgY2F0ZWdvcnkgPSBfcmVmLmNhdGVnb3J5LFxuICAgICAgY3Vpc2luZSA9IF9yZWYuY3Vpc2luZSxcbiAgICAgIGNhbG9yaWVzID0gX3JlZi5jYWxvcmllcyxcbiAgICAgIGluZ3JlZGllbnRzID0gX3JlZi5pbmdyZWRpZW50cyxcbiAgICAgIGluc3RydWN0aW9ucyA9IF9yZWYuaW5zdHJ1Y3Rpb25zLFxuICAgICAgYWdncmVnYXRlUmF0aW5nID0gX3JlZi5hZ2dyZWdhdGVSYXRpbmcsXG4gICAgICB2aWRlbyA9IF9yZWYudmlkZW87XG4gIHZhciBqc2xvbmxkID0gXCJ7XFxuICAgIFxcXCJAY29udGV4dFxcXCI6IFxcXCJodHRwczovL3NjaGVtYS5vcmcvXFxcIixcXG4gICAgXFxcIkB0eXBlXFxcIjogXFxcIlJlY2lwZVxcXCIsXFxuICAgIFxcXCJuYW1lXFxcIjogXFxcIlwiICsgbmFtZSArIFwiXFxcIixcXG4gICAgXFxcImRlc2NyaXB0aW9uXFxcIjogXFxcIlwiICsgZGVzY3JpcHRpb24gKyBcIlxcXCIsXFxuICAgIFxcXCJkYXRlUHVibGlzaGVkXFxcIjogXFxcIlwiICsgZGF0ZVB1Ymxpc2hlZCArIFwiXFxcIixcXG4gICAgXFxcImF1dGhvclxcXCI6IHtcXG4gICAgICBcXFwiQHR5cGVcXFwiOiBcXFwiUGVyc29uXFxcIixcXG4gICAgICBcXFwibmFtZVxcXCI6IFxcXCJcIiArIGF1dGhvck5hbWUgKyBcIlxcXCJcXG4gICAgfSxcXG4gICAgXFxcImltYWdlXFxcIjogW1xcbiAgICAgIFwiICsgaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIgKyBpbWFnZSArIFwiXFxcIlwiO1xuICB9KS5qb2luKCcsJykgKyBcIlxcbiAgICBdLFxcbiAgICBcIiArIChwcmVwVGltZSA/IFwiXFxcInByZXBUaW1lXFxcIjogXFxcIlwiICsgcHJlcFRpbWUgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGNvb2tUaW1lID8gXCJcXFwiY29va1RpbWVcXFwiOiBcXFwiXCIgKyBjb29rVGltZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAodG90YWxUaW1lID8gXCJcXFwidG90YWxUaW1lXFxcIjogXFxcIlwiICsgdG90YWxUaW1lICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChrZXl3b3JkcyA/IFwiXFxcImtleXdvcmRzXFxcIjogXFxcIlwiICsga2V5d29yZHMgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKHlpZWxkcyA/IFwiXFxcInJlY2lwZVlpZWxkXFxcIjogXFxcIlwiICsgeWllbGRzICsgXCJcXFwiLFwiIDogXCJcIikgKyBcIlxcbiAgICBcIiArIChjYXRlZ29yeSA/IFwiXFxcInJlY2lwZUNhdGVnb3J5XFxcIjogXFxcIlwiICsgY2F0ZWdvcnkgKyBcIlxcXCIsXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGN1aXNpbmUgPyBcIlxcXCJyZWNpcGVDdWlzaW5lXFxcIjogXFxcIlwiICsgY3Vpc2luZSArIFwiXFxcIixcIiA6IFwiXCIpICsgXCJcXG4gICAgXCIgKyAoY2Fsb3JpZXMgPyBcIlxcXCJudXRyaXRpb25cXFwiOiB7IFxcXCJAdHlwZVxcXCI6IFxcXCJOdXRyaXRpb25JbmZvcm1hdGlvblxcXCIsIFxcXCJjYWxvcmllc1xcXCI6IFxcXCJcIiArIGNhbG9yaWVzICsgXCIgY2Fsb3JpZXNcXFwiIH0sXCIgOiBcIlwiKSArIFwiXFxuICAgIFwiICsgKGFnZ3JlZ2F0ZVJhdGluZyA/IGJ1aWxkQWdncmVnYXRlUmF0aW5nJDEoYWdncmVnYXRlUmF0aW5nKSA6ICcnKSArIFwiXFxuICAgIFwiICsgKHZpZGVvID8gYnVpbGRWaWRlbyh2aWRlbykgOiAnJykgKyBcIlxcbiAgICBcXFwicmVjaXBlSW5ncmVkaWVudFxcXCI6IFtcXG4gICAgICBcIiArIGluZ3JlZGllbnRzLm1hcChmdW5jdGlvbiAoaW5ncmVkaWVudCkge1xuICAgIHJldHVybiBcIlxcXCJcIiArIGluZ3JlZGllbnQgKyBcIlxcXCJcIjtcbiAgfSkuam9pbignLCcpICsgXCJcXG4gICAgXSxcXG4gICAgXFxcInJlY2lwZUluc3RydWN0aW9uc1xcXCI6IFtcXG4gICAgICBcIiArIGluc3RydWN0aW9ucy5tYXAoYnVpbGRJbnN0cnVjdGlvbikuam9pbignLCcpICsgXCJcXG4gICAgXVxcbiAgfVwiO1xuICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChIZWFkLCBudWxsLCBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIsIHtcbiAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2xkK2pzb25cIixcbiAgICBkYW5nZXJvdXNseVNldElubmVySFRNTDogbWFya3VwKGpzbG9ubGQpLFxuICAgIGtleTogXCJqc29ubGQtcmVjaXBlXCJcbiAgfSkpO1xufTtcblxuZXhwb3J0IHsgQXJ0aWNsZUpzb25MZCwgQmxvZ0pzb25MZCwgQnJlYWRDcnVtYkpzb25MZCBhcyBCcmVhZGNydW1iSnNvbkxkLCBDb3Jwb3JhdGVDb250YWN0SnNvbkxkLCBDb3Vyc2VKc29uTGQsIERhdGFzZXRKc29uTGQsIF9kZWZhdWx0IGFzIERlZmF1bHRTZW8sIEV2ZW50SnNvbkxkLCBGQVFQYWdlSnNvbkxkLCBKb2JQb3N0aW5nSnNvbkxkLCBMb2NhbEJ1c2luZXNzSnNvbkxkLCBMb2dvSnNvbkxkLCBOZXdzQXJ0aWNsZUpzb25MZCwgX2RlZmF1bHQkMSBhcyBOZXh0U2VvLCBQcm9kdWN0SnNvbkxkLCBSZWNpcGVKc29uTGQsIFNvY2lhbFByb2ZpbGVKc29uTGQgfTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19hcHAnKVxuIiwiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9fYXBwXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwicHJpdmF0ZS1uZXh0LXBhZ2VzL19hcHAuanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtc3R5bGUtbG9hZGVyL3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBmdW5jdGlvbihlbGVtZW50KXsvLyBUaGVzZSBlbGVtZW50cyBzaG91bGQgYWx3YXlzIGV4aXN0LiBJZiB0aGV5IGRvIG5vdCxcbi8vIHRoaXMgY29kZSBzaG91bGQgZmFpbC5cbnZhciBhbmNob3JFbGVtZW50PWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNfX25leHRfY3NzX19ET19OT1RfVVNFX18nKTt2YXIgcGFyZW50Tm9kZT1hbmNob3JFbGVtZW50LnBhcmVudE5vZGU7Ly8gTm9ybWFsbHkgPGhlYWQ+XG4vLyBFYWNoIHN0eWxlIHRhZyBzaG91bGQgYmUgcGxhY2VkIHJpZ2h0IGJlZm9yZSBvdXJcbi8vIGFuY2hvci4gQnkgaW5zZXJ0aW5nIGJlZm9yZSBhbmQgbm90IGFmdGVyLCB3ZSBkbyBub3Rcbi8vIG5lZWQgdG8gdHJhY2sgdGhlIGxhc3QgaW5zZXJ0ZWQgZWxlbWVudC5cbnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGVsZW1lbnQsYW5jaG9yRWxlbWVudCk7fTtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSxiLGlzTmFtZWRFeHBvcnQpe2lmKCFhJiZifHxhJiYhYil7cmV0dXJuIGZhbHNlO31sZXQgcDtmb3IocCBpbiBhKXtpZihpc05hbWVkRXhwb3J0JiZwPT09J2RlZmF1bHQnKXsvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbmNvbnRpbnVlO31pZihhW3BdIT09YltwXSl7cmV0dXJuIGZhbHNlO319Zm9yKHAgaW4gYil7aWYoaXNOYW1lZEV4cG9ydCYmcD09PSdkZWZhdWx0Jyl7Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG5jb250aW51ZTt9aWYoIWFbcF0pe3JldHVybiBmYWxzZTt9fXJldHVybiB0cnVlO307XG4gICAgdmFyIG9sZExvY2FscyA9IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMV0hLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wb3N0Y3NzLWxvYWRlci9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbNl0udXNlWzJdIS4vaW5kZXguY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL2Nzcy1sb2FkZXIvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzJdLm9uZU9mWzZdLnVzZVsxXSEuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls2XS51c2VbMl0hLi9pbmRleC5jc3NcIik7XG5cbiAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGNvbnRlbnQubG9jYWxzKSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7Y29uc3QgaXNPbGRJRT1mdW5jdGlvbiBpc09sZElFKCl7bGV0IG1lbW87cmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCl7aWYodHlwZW9mIG1lbW89PT0ndW5kZWZpbmVkJyl7Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncbi8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbi8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbi8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5tZW1vPUJvb2xlYW4od2luZG93JiZkb2N1bWVudCYmZG9jdW1lbnQuYWxsJiYhd2luZG93LmF0b2IpO31yZXR1cm4gbWVtbzt9O30oKTtjb25zdCBnZXRUYXJnZXQ9ZnVuY3Rpb24gZ2V0VGFyZ2V0KCl7Y29uc3QgbWVtbz17fTtyZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KXtpZih0eXBlb2YgbWVtb1t0YXJnZXRdPT09J3VuZGVmaW5lZCcpe2xldCBzdHlsZVRhcmdldD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbmlmKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCYmc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpe3RyeXsvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbnN0eWxlVGFyZ2V0PXN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO31jYXRjaChlKXsvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuc3R5bGVUYXJnZXQ9bnVsbDt9fW1lbW9bdGFyZ2V0XT1zdHlsZVRhcmdldDt9cmV0dXJuIG1lbW9bdGFyZ2V0XTt9O30oKTtjb25zdCBzdHlsZXNJbkRvbT1bXTtmdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKXtsZXQgcmVzdWx0PS0xO2ZvcihsZXQgaT0wO2k8c3R5bGVzSW5Eb20ubGVuZ3RoO2krKyl7aWYoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllcj09PWlkZW50aWZpZXIpe3Jlc3VsdD1pO2JyZWFrO319cmV0dXJuIHJlc3VsdDt9ZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3Qsb3B0aW9ucyl7Y29uc3QgaWRDb3VudE1hcD17fTtjb25zdCBpZGVudGlmaWVycz1bXTtmb3IobGV0IGk9MDtpPGxpc3QubGVuZ3RoO2krKyl7Y29uc3QgaXRlbT1saXN0W2ldO2NvbnN0IGlkPW9wdGlvbnMuYmFzZT9pdGVtWzBdK29wdGlvbnMuYmFzZTppdGVtWzBdO2NvbnN0IGNvdW50PWlkQ291bnRNYXBbaWRdfHwwO2NvbnN0IGlkZW50aWZpZXI9aWQrJyAnK2NvdW50LnRvU3RyaW5nKCk7aWRDb3VudE1hcFtpZF09Y291bnQrMTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtjb25zdCBvYmo9e2NzczppdGVtWzFdLG1lZGlhOml0ZW1bMl0sc291cmNlTWFwOml0ZW1bM119O2lmKGluZGV4IT09LTEpe3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7c3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTt9ZWxzZXtzdHlsZXNJbkRvbS5wdXNoKHtpZGVudGlmaWVyOmlkZW50aWZpZXIsdXBkYXRlcjphZGRTdHlsZShvYmosb3B0aW9ucykscmVmZXJlbmNlczoxfSk7fWlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7fXJldHVybiBpZGVudGlmaWVyczt9ZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpe2NvbnN0IHN0eWxlPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7Y29uc3QgYXR0cmlidXRlcz1vcHRpb25zLmF0dHJpYnV0ZXN8fHt9O2lmKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlPT09J3VuZGVmaW5lZCcpe2NvbnN0IG5vbmNlPS8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxudHlwZW9mIF9fd2VicGFja19ub25jZV9fIT09J3VuZGVmaW5lZCc/X193ZWJwYWNrX25vbmNlX186bnVsbDtpZihub25jZSl7YXR0cmlidXRlcy5ub25jZT1ub25jZTt9fU9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24oa2V5KXtzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LGF0dHJpYnV0ZXNba2V5XSk7fSk7aWYodHlwZW9mIG9wdGlvbnMuaW5zZXJ0PT09J2Z1bmN0aW9uJyl7b3B0aW9ucy5pbnNlcnQoc3R5bGUpO31lbHNle2NvbnN0IHRhcmdldD1nZXRUYXJnZXQob3B0aW9ucy5pbnNlcnR8fCdoZWFkJyk7aWYoIXRhcmdldCl7dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTt9dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTt9cmV0dXJuIHN0eWxlO31mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpey8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuaWYoc3R5bGUucGFyZW50Tm9kZT09PW51bGwpe3JldHVybiBmYWxzZTt9c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7fS8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL2NvbnN0IHJlcGxhY2VUZXh0PWZ1bmN0aW9uIHJlcGxhY2VUZXh0KCl7Y29uc3QgdGV4dFN0b3JlPVtdO3JldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LHJlcGxhY2VtZW50KXt0ZXh0U3RvcmVbaW5kZXhdPXJlcGxhY2VtZW50O3JldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO307fSgpO2Z1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsaW5kZXgscmVtb3ZlLG9iail7Y29uc3QgY3NzPXJlbW92ZT8nJzpvYmoubWVkaWE/J0BtZWRpYSAnK29iai5tZWRpYSsnIHsnK29iai5jc3MrJ30nOm9iai5jc3M7Ly8gRm9yIG9sZCBJRVxuLyogaXN0YW5idWwgaWdub3JlIGlmICAqL2lmKHN0eWxlLnN0eWxlU2hlZXQpe3N0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dD1yZXBsYWNlVGV4dChpbmRleCxjc3MpO31lbHNle2NvbnN0IGNzc05vZGU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtjb25zdCBjaGlsZE5vZGVzPXN0eWxlLmNoaWxkTm9kZXM7aWYoY2hpbGROb2Rlc1tpbmRleF0pe3N0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTt9aWYoY2hpbGROb2Rlcy5sZW5ndGgpe3N0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLGNoaWxkTm9kZXNbaW5kZXhdKTt9ZWxzZXtzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTt9fX1mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLG9wdGlvbnMsb2JqKXtsZXQgY3NzPW9iai5jc3M7Y29uc3QgbWVkaWE9b2JqLm1lZGlhO2NvbnN0IHNvdXJjZU1hcD1vYmouc291cmNlTWFwO2lmKG1lZGlhKXtzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJyxtZWRpYSk7fWVsc2V7c3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO31pZihzb3VyY2VNYXAmJnR5cGVvZiBidG9hIT09J3VuZGVmaW5lZCcpe2Nzcys9J1xcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsJytidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpKycgKi8nO30vLyBGb3Igb2xkIElFXG4vKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovaWYoc3R5bGUuc3R5bGVTaGVldCl7c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0PWNzczt9ZWxzZXt3aGlsZShzdHlsZS5maXJzdENoaWxkKXtzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTt9c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7fX1sZXQgc2luZ2xldG9uPW51bGw7bGV0IHNpbmdsZXRvbkNvdW50ZXI9MDtmdW5jdGlvbiBhZGRTdHlsZShvYmosb3B0aW9ucyl7bGV0IHN0eWxlO2xldCB1cGRhdGU7bGV0IHJlbW92ZTtpZihvcHRpb25zLnNpbmdsZXRvbil7Y29uc3Qgc3R5bGVJbmRleD1zaW5nbGV0b25Db3VudGVyKys7c3R5bGU9c2luZ2xldG9ufHwoc2luZ2xldG9uPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7dXBkYXRlPWFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLHN0eWxlLHN0eWxlSW5kZXgsZmFsc2UpO3JlbW92ZT1hcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCxzdHlsZSxzdHlsZUluZGV4LHRydWUpO31lbHNle3N0eWxlPWluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTt1cGRhdGU9YXBwbHlUb1RhZy5iaW5kKG51bGwsc3R5bGUsb3B0aW9ucyk7cmVtb3ZlPWZ1bmN0aW9uKCl7cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTt9O311cGRhdGUob2JqKTtyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKXtpZihuZXdPYmope2lmKG5ld09iai5jc3M9PT1vYmouY3NzJiZuZXdPYmoubWVkaWE9PT1vYmoubWVkaWEmJm5ld09iai5zb3VyY2VNYXA9PT1vYmouc291cmNlTWFwKXtyZXR1cm47fXVwZGF0ZShvYmo9bmV3T2JqKTt9ZWxzZXtyZW1vdmUoKTt9fTt9bW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24obGlzdCxvcHRpb25zKXtvcHRpb25zPW9wdGlvbnN8fHt9Oy8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuaWYoIW9wdGlvbnMuc2luZ2xldG9uJiZ0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24hPT0nYm9vbGVhbicpe29wdGlvbnMuc2luZ2xldG9uPWlzT2xkSUUoKTt9bGlzdD1saXN0fHxbXTtsZXQgbGFzdElkZW50aWZpZXJzPW1vZHVsZXNUb0RvbShsaXN0LG9wdGlvbnMpO3JldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCl7bmV3TGlzdD1uZXdMaXN0fHxbXTtpZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkhPT0nW29iamVjdCBBcnJheV0nKXtyZXR1cm47fWZvcihsZXQgaT0wO2k8bGFzdElkZW50aWZpZXJzLmxlbmd0aDtpKyspe2NvbnN0IGlkZW50aWZpZXI9bGFzdElkZW50aWZpZXJzW2ldO2NvbnN0IGluZGV4PWdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO3N0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07fWNvbnN0IG5ld0xhc3RJZGVudGlmaWVycz1tb2R1bGVzVG9Eb20obmV3TGlzdCxvcHRpb25zKTtmb3IobGV0IGk9MDtpPGxhc3RJZGVudGlmaWVycy5sZW5ndGg7aSsrKXtjb25zdCBpZGVudGlmaWVyPWxhc3RJZGVudGlmaWVyc1tpXTtjb25zdCBpbmRleD1nZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtpZihzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcz09PTApe3N0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKCk7c3R5bGVzSW5Eb20uc3BsaWNlKGluZGV4LDEpO319bGFzdElkZW50aWZpZXJzPW5ld0xhc3RJZGVudGlmaWVyczt9O307XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMubWFwIiwibW9kdWxlLmV4cG9ydHM9ZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbj17NzYyOmZ1bmN0aW9uKG4pe24uZXhwb3J0cz1mdW5jdGlvbihuKXt2YXIgdD1bXTt0LnRvU3RyaW5nPWZ1bmN0aW9uIHRvU3RyaW5nKCl7cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKHQpe3ZhciByPWNzc1dpdGhNYXBwaW5nVG9TdHJpbmcodCxuKTtpZih0WzJdKXtyZXR1cm5cIkBtZWRpYSBcIi5jb25jYXQodFsyXSxcIiB7XCIpLmNvbmNhdChyLFwifVwiKX1yZXR1cm4gcn0pLmpvaW4oXCJcIil9O3QuaT1mdW5jdGlvbihuLHIsbyl7aWYodHlwZW9mIG49PT1cInN0cmluZ1wiKXtuPVtbbnVsbCxuLFwiXCJdXX12YXIgZT17fTtpZihvKXtmb3IodmFyIGE9MDthPHRoaXMubGVuZ3RoO2ErKyl7dmFyIGM9dGhpc1thXVswXTtpZihjIT1udWxsKXtlW2NdPXRydWV9fX1mb3IodmFyIGk9MDtpPG4ubGVuZ3RoO2krKyl7dmFyIHU9W10uY29uY2F0KG5baV0pO2lmKG8mJmVbdVswXV0pe2NvbnRpbnVlfWlmKHIpe2lmKCF1WzJdKXt1WzJdPXJ9ZWxzZXt1WzJdPVwiXCIuY29uY2F0KHIsXCIgYW5kIFwiKS5jb25jYXQodVsyXSl9fXQucHVzaCh1KX19O3JldHVybiB0fTtmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKG4sdCl7dmFyIHI9blsxXXx8XCJcIjt2YXIgbz1uWzNdO2lmKCFvKXtyZXR1cm4gcn1pZih0JiZ0eXBlb2YgYnRvYT09PVwiZnVuY3Rpb25cIil7dmFyIGU9dG9Db21tZW50KG8pO3ZhciBhPW8uc291cmNlcy5tYXAoZnVuY3Rpb24obil7cmV0dXJuXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChvLnNvdXJjZVJvb3R8fFwiXCIpLmNvbmNhdChuLFwiICovXCIpfSk7cmV0dXJuW3JdLmNvbmNhdChhKS5jb25jYXQoW2VdKS5qb2luKFwiXFxuXCIpfXJldHVybltyXS5qb2luKFwiXFxuXCIpfWZ1bmN0aW9uIHRvQ29tbWVudChuKXt2YXIgdD1idG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShuKSkpKTt2YXIgcj1cInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdCh0KTtyZXR1cm5cIi8qIyBcIi5jb25jYXQocixcIiAqL1wiKX19fTt2YXIgdD17fTtmdW5jdGlvbiBfX25jY3dwY2tfcmVxdWlyZV9fKHIpe2lmKHRbcl0pe3JldHVybiB0W3JdLmV4cG9ydHN9dmFyIG89dFtyXT17ZXhwb3J0czp7fX07dmFyIGU9dHJ1ZTt0cnl7bltyXShvLG8uZXhwb3J0cyxfX25jY3dwY2tfcmVxdWlyZV9fKTtlPWZhbHNlfWZpbmFsbHl7aWYoZSlkZWxldGUgdFtyXX1yZXR1cm4gby5leHBvcnRzfV9fbmNjd3Bja19yZXF1aXJlX18uYWI9X19kaXJuYW1lK1wiL1wiO3JldHVybiBfX25jY3dwY2tfcmVxdWlyZV9fKDc2Mil9KCk7IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyohIHRhaWx3aW5kY3NzIHYyLjIuNiB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb20gKi8vKiEgbW9kZXJuLW5vcm1hbGl6ZSB2MS4xLjAgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZSAqL1xcblxcbi8qXFxuRG9jdW1lbnRcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuVXNlIGEgYmV0dGVyIGJveCBtb2RlbCAob3BpbmlvbmF0ZWQpLlxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4vKipcXG5Vc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHQtbW96LXRhYi1zaXplOiA0O1xcblxcdC1vLXRhYi1zaXplOiA0O1xcblxcdCAgIHRhYi1zaXplOiA0O1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuKi9cXG5cXG5odG1sIHtcXG5cXHRsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNlY3Rpb25zXFxuPT09PT09PT1cXG4qL1xcblxcbi8qKlxcblJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJvZHkge1xcblxcdG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuSW1wcm92ZSBjb25zaXN0ZW5jeSBvZiBkZWZhdWx0IGZvbnRzIGluIGFsbCBicm93c2Vycy4gKGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvbW9kZXJuLW5vcm1hbGl6ZS9pc3N1ZXMvMylcXG4qL1xcblxcbmJvZHkge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHN5c3RlbS11aSxcXG5cXHRcXHQtYXBwbGUtc3lzdGVtLCAvKiBGaXJlZm94IHN1cHBvcnRzIHRoaXMgYnV0IG5vdCB5ZXQgYHN5c3RlbS11aWAgKi9cXG5cXHRcXHQnU2Vnb2UgVUknLFxcblxcdFxcdFJvYm90byxcXG5cXHRcXHRIZWx2ZXRpY2EsXFxuXFx0XFx0QXJpYWwsXFxuXFx0XFx0c2Fucy1zZXJpZixcXG5cXHRcXHQnQXBwbGUgQ29sb3IgRW1vamknLFxcblxcdFxcdCdTZWdvZSBVSSBFbW9qaSc7XFxufVxcblxcbi8qXFxuR3JvdXBpbmcgY29udGVudFxcbj09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4qL1xcblxcbmhyIHtcXG5cXHRoZWlnaHQ6IDA7IC8qIDEgKi9cXG5cXHRjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblRleHQtbGV2ZWwgc2VtYW50aWNzXFxuPT09PT09PT09PT09PT09PT09PT1cXG4qL1xcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcblxcdCAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn0vKipcXG4gKiBNYW51YWxseSBmb3JrZWQgZnJvbSBTVUlUIENTUyBCYXNlOiBodHRwczovL2dpdGh1Yi5jb20vc3VpdGNzcy9iYXNlXFxuICogQSB0aGluIGxheWVyIG9uIHRvcCBvZiBub3JtYWxpemUuY3NzIHRoYXQgcHJvdmlkZXMgYSBzdGFydGluZyBwb2ludCBtb3JlXFxuICogc3VpdGFibGUgZm9yIHdlYiBhcHBsaWNhdGlvbnMuXFxuICovXFxuXFxuLyoqXFxuICogUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiAqL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFRhaWx3aW5kIGN1c3RvbSByZXNldCBzdHlsZXNcXG4gKi9cXG5cXG4vKipcXG4gKiAxLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSAod2l0aCBUYWlsd2luZCdzIGRlZmF1bHRcXG4gKiAgICBzYW5zLXNlcmlmIGZvbnQgc3RhY2sgYXMgYSBmYWxsYmFjaykgYXMgYSBzYW5lIGRlZmF1bHQuXFxuICogMi4gVXNlIFRhaWx3aW5kJ3MgZGVmYXVsdCBcXFwibm9ybWFsXFxcIiBsaW5lLWhlaWdodCBzbyB0aGUgdXNlciBpc24ndCBmb3JjZWRcXG4gKiAgICB0byBvdmVycmlkZSBpdCB0byBlbnN1cmUgY29uc2lzdGVuY3kgZXZlbiB3aGVuIHVzaW5nIHRoZSBkZWZhdWx0IHRoZW1lLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMiAqL1xcbn1cXG5cXG5cXG4vKipcXG4gKiBJbmhlcml0IGZvbnQtZmFtaWx5IGFuZCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXNcXG4gKiBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguXFxuICpcXG4gKiAgICBXZSB1c2VkIHRvIHNldCB0aGlzIGluIHRoZSBodG1sIGVsZW1lbnQgYW5kIGluaGVyaXQgZnJvbVxcbiAqICAgIHRoZSBwYXJlbnQgZWxlbWVudCBmb3IgZXZlcnl0aGluZyBlbHNlLiBUaGlzIGNhdXNlZCBpc3N1ZXNcXG4gKiAgICBpbiBzaGFkb3ctZG9tLWVuaGFuY2VkIGVsZW1lbnRzIGxpa2UgPGRldGFpbHM+IHdoZXJlIHRoZSBjb250ZW50XFxuICogICAgaXMgd3JhcHBlZCBieSBhIGRpdiB3aXRoIGJveC1zaXppbmcgc2V0IHRvIGBjb250ZW50LWJveGAuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzRcXG4gKlxcbiAqXFxuICogMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguXFxuICpcXG4gKiAgICBCeSBkZWZhdWx0LCB0aGUgd2F5IHRoZSBicm93c2VyIHNwZWNpZmllcyB0aGF0IGFuIGVsZW1lbnQgc2hvdWxkIGhhdmUgbm9cXG4gKiAgICBib3JkZXIgaXMgYnkgc2V0dGluZyBpdCdzIGJvcmRlci1zdHlsZSB0byBgbm9uZWAgaW4gdGhlIHVzZXItYWdlbnRcXG4gKiAgICBzdHlsZXNoZWV0LlxcbiAqXFxuICogICAgSW4gb3JkZXIgdG8gZWFzaWx5IGFkZCBib3JkZXJzIHRvIGVsZW1lbnRzIGJ5IGp1c3Qgc2V0dGluZyB0aGUgYGJvcmRlci13aWR0aGBcXG4gKiAgICBwcm9wZXJ0eSwgd2UgY2hhbmdlIHRoZSBkZWZhdWx0IGJvcmRlci1zdHlsZSBmb3IgYWxsIGVsZW1lbnRzIHRvIGBzb2xpZGAsIGFuZFxcbiAqICAgIHVzZSBib3JkZXItd2lkdGggdG8gaGlkZSB0aGVtIGluc3RlYWQuIFRoaXMgd2F5IG91ciBgYm9yZGVyYCB1dGlsaXRpZXMgb25seVxcbiAqICAgIG5lZWQgdG8gc2V0IHRoZSBgYm9yZGVyLXdpZHRoYCBwcm9wZXJ0eSBpbnN0ZWFkIG9mIHRoZSBlbnRpcmUgYGJvcmRlcmBcXG4gKiAgICBzaG9ydGhhbmQsIG1ha2luZyBvdXIgYm9yZGVyIHV0aWxpdGllcyBtdWNoIG1vcmUgc3RyYWlnaHRmb3J3YXJkIHRvIGNvbXBvc2UuXFxuICpcXG4gKiAgICBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTZcXG4gKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbiAqIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHRcXG4gKi9cXG5cXG5ociB7XFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7XFxufVxcblxcbi8qKlxcbiAqIFVuZG8gdGhlIGBib3JkZXItc3R5bGU6IG5vbmVgIHJlc2V0IHRoYXQgTm9ybWFsaXplIGFwcGxpZXMgdG8gaW1hZ2VzIHNvIHRoYXRcXG4gKiBvdXIgYGJvcmRlci17d2lkdGh9YCB1dGlsaXRpZXMgaGF2ZSB0aGUgZXhwZWN0ZWQgZWZmZWN0LlxcbiAqXFxuICogVGhlIE5vcm1hbGl6ZSByZXNldCBpcyB1bm5lY2Vzc2FyeSBmb3IgdXMgc2luY2Ugd2UgZGVmYXVsdCB0aGUgYm9yZGVyLXdpZHRoXFxuICogdG8gMCBvbiBhbGwgZWxlbWVudHMuXFxuICpcXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvaXNzdWVzLzM2MlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5pbnB1dDotbXMtaW5wdXQtcGxhY2Vob2xkZXIsIHRleHRhcmVhOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6ICM5Y2EzYWY7XFxufVxcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTtcXG4gIGNvbG9yOiAjOWNhM2FmO1xcbn1cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mXFxuICogb3B0LW91dC5cXG4gKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBmb3JtIGVsZW1lbnQgcHJvcGVydGllcyB0aGF0IGFyZSBlYXN5IHRvIGZvcmdldCB0b1xcbiAqIHN0eWxlIGV4cGxpY2l0bHkgc28geW91IGRvbid0IGluYWR2ZXJ0ZW50bHkgaW50cm9kdWNlXFxuICogc3R5bGVzIHRoYXQgZGV2aWF0ZSBmcm9tIHlvdXIgZGVzaWduIHN5c3RlbS4gVGhlc2Ugc3R5bGVzXFxuICogc3VwcGxlbWVudCBhIHBhcnRpYWwgcmVzZXQgdGhhdCBpcyBhbHJlYWR5IGFwcGxpZWQgYnlcXG4gKiBub3JtYWxpemUuY3NzLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgcGFkZGluZzogMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIFVzZSB0aGUgY29uZmlndXJlZCAnbW9ubycgZm9udCBmYW1pbHkgZm9yIGVsZW1lbnRzIHRoYXRcXG4gKiBhcmUgZXhwZWN0ZWQgdG8gYmUgcmVuZGVyZWQgd2l0aCBhIG1vbm9zcGFjZSBmb250LCBmYWxsaW5nXFxuICogYmFjayB0byB0aGUgc3lzdGVtIG1vbm9zcGFjZSBzdGFjayBpZiB0aGVyZSBpcyBubyBjb25maWd1cmVkXFxuICogJ21vbm8nIGZvbnQgZmFtaWx5LlxcbiAqL1xcblxcbnByZSxcXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTtcXG59XFxuXFxuLyoqXFxuICogMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQgYXMgdGhhdCdzXFxuICogICAgdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XFxuICogICAgQ1NTIFJlbWVkeSwgd2l0aCBgc3ZnYCBhZGRlZCBhcyB3ZWxsLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqIFxcbiAqIDIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZVxcbiAqICAgIHNlbnNpYmx5IGJ5IGRlZmF1bHQgd2hlbiBvdmVycmlkaW5nIGBkaXNwbGF5YCBieSBhZGRpbmcgYVxcbiAqICAgIHV0aWxpdHkgbGlrZSBgaW5saW5lYC5cXG4gKlxcbiAqICAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50aW5nIGVycm9yIGluIHNvbWVcXG4gKiAgICB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiAqIFxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMFxcbiAqL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlXFxuICogdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBFbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi50cmFuc2Zvcm0ge1xcblxcdC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuXFx0LS10dy10cmFuc2xhdGUteTogMDtcXG5cXHQtLXR3LXJvdGF0ZTogMDtcXG5cXHQtLXR3LXNrZXcteDogMDtcXG5cXHQtLXR3LXNrZXcteTogMDtcXG5cXHQtLXR3LXNjYWxlLXg6IDE7XFxuXFx0LS10dy1zY2FsZS15OiAxO1xcblxcdC0tdHctdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLXR3LXRyYW5zbGF0ZS14KSkgdHJhbnNsYXRlWSh2YXIoLS10dy10cmFuc2xhdGUteSkpIHJvdGF0ZSh2YXIoLS10dy1yb3RhdGUpKSBza2V3WCh2YXIoLS10dy1za2V3LXgpKSBza2V3WSh2YXIoLS10dy1za2V3LXkpKSBzY2FsZVgodmFyKC0tdHctc2NhbGUteCkpIHNjYWxlWSh2YXIoLS10dy1zY2FsZS15KSk7XFxufVxcblxcbi5ib3JkZXItMiwgLmJvcmRlci1iLTIge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDIyOSwgMjMxLCAyMzUsIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcblxcbi5zaGFkb3ctbGcsIC5zaGFkb3ctMnhsLCAuc2hhZG93LW1kLCAuc21cXFxcOnNoYWRvdy14bCB7XFxuXFx0LS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG5cXHQtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuXFx0LS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG59XFxuLmNvbnRhaW5lciB7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0bWFyZ2luLXJpZ2h0OiBhdXRvO1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdHBhZGRpbmctcmlnaHQ6IDFyZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxcmVtO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDY0MHB4O1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0LmNvbnRhaW5lciB7XFxuXFx0XFx0bWF4LXdpZHRoOiA3NjhweDtcXG5cXHRcXHRwYWRkaW5nLXJpZ2h0OiAycmVtO1xcblxcdFxcdHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDEwMjRweDtcXG5cXHR9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG5cXG5cXHQuY29udGFpbmVyIHtcXG5cXHRcXHRtYXgtd2lkdGg6IDEyODBweDtcXG5cXHR9XFxufVxcbi5wcm9zZSB7XFxuXFx0Y29sb3I6ICMzNzQxNTE7XFxuXFx0bWF4LXdpZHRoOiA2NWNoO1xcbn1cXG4ucHJvc2UgW2NsYXNzfj1cXFwibGVhZFxcXCJdIHtcXG5cXHRjb2xvcjogIzRiNTU2MztcXG5cXHRmb250LXNpemU6IDEuMjVlbTtcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcblxcdG1hcmdpbi10b3A6IDEuMmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuMmVtO1xcbn1cXG4ucHJvc2UgYSB7XFxuXFx0Y29sb3I6ICMxMTE4Mjc7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuXFx0Zm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLnByb3NlIHN0cm9uZyB7XFxuXFx0Y29sb3I6ICMxMTE4Mjc7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLnByb3NlIG9sW3R5cGU9XFxcIkFcXFwiXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IHVwcGVyLWFscGhhO1xcbn1cXG4ucHJvc2Ugb2xbdHlwZT1cXFwiYVxcXCJdIHtcXG5cXHQtLWxpc3QtY291bnRlci1zdHlsZTogbG93ZXItYWxwaGE7XFxufVxcbi5wcm9zZSBvbFt0eXBlPVxcXCJBXFxcIiBzXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IHVwcGVyLWFscGhhO1xcbn1cXG4ucHJvc2Ugb2xbdHlwZT1cXFwiYVxcXCIgc10ge1xcblxcdC0tbGlzdC1jb3VudGVyLXN0eWxlOiBsb3dlci1hbHBoYTtcXG59XFxuLnByb3NlIG9sW3R5cGU9XFxcIklcXFwiXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IHVwcGVyLXJvbWFuO1xcbn1cXG4ucHJvc2Ugb2xbdHlwZT1cXFwiaVxcXCJdIHtcXG5cXHQtLWxpc3QtY291bnRlci1zdHlsZTogbG93ZXItcm9tYW47XFxufVxcbi5wcm9zZSBvbFt0eXBlPVxcXCJJXFxcIiBzXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IHVwcGVyLXJvbWFuO1xcbn1cXG4ucHJvc2Ugb2xbdHlwZT1cXFwiaVxcXCIgc10ge1xcblxcdC0tbGlzdC1jb3VudGVyLXN0eWxlOiBsb3dlci1yb21hbjtcXG59XFxuLnByb3NlIG9sW3R5cGU9XFxcIjFcXFwiXSB7XFxuXFx0LS1saXN0LWNvdW50ZXItc3R5bGU6IGRlY2ltYWw7XFxufVxcbi5wcm9zZSBvbCA+IGxpIHtcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjc1ZW07XFxufVxcbi5wcm9zZSBvbCA+IGxpOjpiZWZvcmUge1xcblxcdGNvbnRlbnQ6IGNvdW50ZXIobGlzdC1pdGVtLCBkZWNpbWFsKSBcXFwiLlxcXCI7XFxuXFx0Y29udGVudDogY291bnRlcihsaXN0LWl0ZW0sIHZhcigtLWxpc3QtY291bnRlci1zdHlsZSwgZGVjaW1hbCkpIFxcXCIuXFxcIjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0Zm9udC13ZWlnaHQ6IDQwMDtcXG5cXHRjb2xvcjogIzZiNzI4MDtcXG5cXHRsZWZ0OiAwO1xcbn1cXG4ucHJvc2UgdWwgPiBsaSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcblxcdHBhZGRpbmctbGVmdDogMS43NWVtO1xcbn1cXG4ucHJvc2UgdWwgPiBsaTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiXFxcIjtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2QxZDVkYjtcXG5cXHRib3JkZXItcmFkaXVzOiA1MCU7XFxuXFx0d2lkdGg6IDAuMzc1ZW07XFxuXFx0aGVpZ2h0OiAwLjM3NWVtO1xcblxcdHRvcDogY2FsYygwLjg3NWVtIC0gMC4xODc1ZW0pO1xcblxcdGxlZnQ6IDAuMjVlbTtcXG59XFxuLnByb3NlIGhyIHtcXG5cXHRib3JkZXItY29sb3I6ICNlNWU3ZWI7XFxuXFx0Ym9yZGVyLXRvcC13aWR0aDogMXB4O1xcblxcdG1hcmdpbi10b3A6IDNlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAzZW07XFxufVxcbi5wcm9zZSBibG9ja3F1b3RlIHtcXG5cXHRmb250LXdlaWdodDogNTAwO1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG5cXHRjb2xvcjogIzExMTgyNztcXG5cXHRib3JkZXItbGVmdC13aWR0aDogMC4yNXJlbTtcXG5cXHRib3JkZXItbGVmdC1jb2xvcjogI2U1ZTdlYjtcXG5cXHRxdW90ZXM6IFxcXCJcXFxcMjAxQ1xcXCJcXFwiXFxcXDIwMURcXFwiXFxcIlxcXFwyMDE4XFxcIlxcXCJcXFxcMjAxOVxcXCI7XFxuXFx0bWFyZ2luLXRvcDogMS42ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMS42ZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxZW07XFxufVxcbi5wcm9zZSBibG9ja3F1b3RlIHA6Zmlyc3Qtb2YtdHlwZTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBvcGVuLXF1b3RlO1xcbn1cXG4ucHJvc2UgYmxvY2txdW90ZSBwOmxhc3Qtb2YtdHlwZTo6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6IGNsb3NlLXF1b3RlO1xcbn1cXG4ucHJvc2UgaDEge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA4MDA7XFxuXFx0Zm9udC1zaXplOiAyLjI1ZW07XFxuXFx0bWFyZ2luLXRvcDogMDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjg4ODg4ODllbTtcXG5cXHRsaW5lLWhlaWdodDogMS4xMTExMTExO1xcbn1cXG4ucHJvc2UgaDIge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFx0Zm9udC1zaXplOiAxLjVlbTtcXG5cXHRtYXJnaW4tdG9wOiAyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMWVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XFxufVxcbi5wcm9zZSBoMyB7XFxuXFx0Y29sb3I6ICMxMTE4Mjc7XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRmb250LXNpemU6IDEuMjVlbTtcXG5cXHRtYXJnaW4tdG9wOiAxLjZlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjZlbTtcXG5cXHRsaW5lLWhlaWdodDogMS42O1xcbn1cXG4ucHJvc2UgaDQge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0bWFyZ2luLXRvcDogMS41ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuLnByb3NlIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG5cXHRjb2xvcjogIzZiNzI4MDtcXG5cXHRmb250LXNpemU6IDAuODc1ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDI4NTcxNDtcXG5cXHRtYXJnaW4tdG9wOiAwLjg1NzE0MjllbTtcXG59XFxuLnByb3NlIGNvZGUge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Zm9udC1zaXplOiAwLjg3NWVtO1xcbn1cXG4ucHJvc2UgY29kZTo6YmVmb3JlIHtcXG5cXHRjb250ZW50OiBcXFwiYFxcXCI7XFxufVxcbi5wcm9zZSBjb2RlOjphZnRlciB7XFxuXFx0Y29udGVudDogXFxcImBcXFwiO1xcbn1cXG4ucHJvc2UgYSBjb2RlIHtcXG5cXHRjb2xvcjogIzExMTgyNztcXG59XFxuLnByb3NlIHByZSB7XFxuXFx0Y29sb3I6ICNlNWU3ZWI7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogIzFmMjkzNztcXG5cXHRvdmVyZmxvdy14OiBhdXRvO1xcblxcdGZvbnQtc2l6ZTogMC44NzVlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43MTQyODU3O1xcblxcdG1hcmdpbi10b3A6IDEuNzE0Mjg1N2VtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuNzE0Mjg1N2VtO1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcblxcdHBhZGRpbmctdG9wOiAwLjg1NzE0MjllbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAxLjE0Mjg1NzFlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC44NTcxNDI5ZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjE0Mjg1NzFlbTtcXG59XFxuLnByb3NlIHByZSBjb2RlIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG5cXHRib3JkZXItd2lkdGg6IDA7XFxuXFx0Ym9yZGVyLXJhZGl1czogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcblxcdGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG4ucHJvc2UgcHJlIGNvZGU6OmJlZm9yZSB7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxuLnByb3NlIHByZSBjb2RlOjphZnRlciB7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxuLnByb3NlIHRhYmxlIHtcXG5cXHR3aWR0aDogMTAwJTtcXG5cXHR0YWJsZS1sYXlvdXQ6IGF1dG87XFxuXFx0dGV4dC1hbGlnbjogbGVmdDtcXG5cXHRtYXJnaW4tdG9wOiAyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMmVtO1xcblxcdGZvbnQtc2l6ZTogMC44NzVlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43MTQyODU3O1xcbn1cXG4ucHJvc2UgdGhlYWQge1xcblxcdGNvbG9yOiAjMTExODI3O1xcblxcdGZvbnQtd2VpZ2h0OiA2MDA7XFxuXFx0Ym9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcblxcdGJvcmRlci1ib3R0b20tY29sb3I6ICNkMWQ1ZGI7XFxufVxcbi5wcm9zZSB0aGVhZCB0aCB7XFxuXFx0dmVydGljYWwtYWxpZ246IGJvdHRvbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjU3MTQyODZlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC41NzE0Mjg2ZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAwLjU3MTQyODZlbTtcXG59XFxuLnByb3NlIHRib2R5IHRyIHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAxcHg7XFxuXFx0Ym9yZGVyLWJvdHRvbS1jb2xvcjogI2U1ZTdlYjtcXG59XFxuLnByb3NlIHRib2R5IHRyOmxhc3QtY2hpbGQge1xcblxcdGJvcmRlci1ib3R0b20td2lkdGg6IDA7XFxufVxcbi5wcm9zZSB0Ym9keSB0ZCB7XFxuXFx0dmVydGljYWwtYWxpZ246IHRvcDtcXG5cXHRwYWRkaW5nLXRvcDogMC41NzE0Mjg2ZW07XFxuXFx0cGFkZGluZy1yaWdodDogMC41NzE0Mjg2ZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDAuNTcxNDI4NmVtO1xcblxcdHBhZGRpbmctbGVmdDogMC41NzE0Mjg2ZW07XFxufVxcbi5wcm9zZSB7XFxuXFx0Zm9udC1zaXplOiAxcmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1O1xcbn1cXG4ucHJvc2UgcCB7XFxuXFx0bWFyZ2luLXRvcDogMS4yNWVtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuMjVlbTtcXG59XFxuLnByb3NlIGltZyB7XFxuXFx0bWFyZ2luLXRvcDogMmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDJlbTtcXG59XFxuLnByb3NlIHZpZGVvIHtcXG5cXHRtYXJnaW4tdG9wOiAyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG4ucHJvc2UgZmlndXJlIHtcXG5cXHRtYXJnaW4tdG9wOiAyZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMmVtO1xcbn1cXG4ucHJvc2UgZmlndXJlID4gKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4ucHJvc2UgaDIgY29kZSB7XFxuXFx0Zm9udC1zaXplOiAwLjg3NWVtO1xcbn1cXG4ucHJvc2UgaDMgY29kZSB7XFxuXFx0Zm9udC1zaXplOiAwLjllbTtcXG59XFxuLnByb3NlIG9sIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjI1ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcbn1cXG4ucHJvc2UgdWwge1xcblxcdG1hcmdpbi10b3A6IDEuMjVlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcbi5wcm9zZSBsaSB7XFxuXFx0bWFyZ2luLXRvcDogMC41ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41ZW07XFxufVxcbi5wcm9zZSA+IHVsID4gbGkgcCB7XFxuXFx0bWFyZ2luLXRvcDogMC43NWVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNzVlbTtcXG59XFxuLnByb3NlID4gdWwgPiBsaSA+ICo6Zmlyc3QtY2hpbGQge1xcblxcdG1hcmdpbi10b3A6IDEuMjVlbTtcXG59XFxuLnByb3NlID4gdWwgPiBsaSA+ICo6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcbn1cXG4ucHJvc2UgPiBvbCA+IGxpID4gKjpmaXJzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLXRvcDogMS4yNWVtO1xcbn1cXG4ucHJvc2UgPiBvbCA+IGxpID4gKjpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxufVxcbi5wcm9zZSB1bCB1bCwgLnByb3NlIHVsIG9sLCAucHJvc2Ugb2wgdWwsIC5wcm9zZSBvbCBvbCB7XFxuXFx0bWFyZ2luLXRvcDogMC43NWVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNzVlbTtcXG59XFxuLnByb3NlIGhyICsgKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlIGgyICsgKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlIGgzICsgKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlIGg0ICsgKiB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5wcm9zZSB0aGVhZCB0aDpsYXN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG4ucHJvc2UgdGJvZHkgdGQ6Zmlyc3QtY2hpbGQge1xcblxcdHBhZGRpbmctbGVmdDogMDtcXG59XFxuLnByb3NlIHRib2R5IHRkOmxhc3QtY2hpbGQge1xcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5wcm9zZSA+IDpmaXJzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLXRvcDogMDtcXG59XFxuLnByb3NlID4gOmxhc3QtY2hpbGQge1xcblxcdG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi5wcm9zZS1sZyB7XFxuXFx0Zm9udC1zaXplOiAxLjEyNXJlbTtcXG5cXHRsaW5lLWhlaWdodDogMS43Nzc3Nzc4O1xcbn1cXG4ucHJvc2UtbGcgcCB7XFxuXFx0bWFyZ2luLXRvcDogMS4zMzMzMzMzZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4zMzMzMzMzZW07XFxufVxcbi5wcm9zZS1sZyBbY2xhc3N+PVxcXCJsZWFkXFxcIl0ge1xcblxcdGZvbnQtc2l6ZTogMS4yMjIyMjIyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNDU0NTQ1NTtcXG5cXHRtYXJnaW4tdG9wOiAxLjA5MDkwOTFlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjA5MDkwOTFlbTtcXG59XFxuLnByb3NlLWxnIGJsb2NrcXVvdGUge1xcblxcdG1hcmdpbi10b3A6IDEuNjY2NjY2N2VtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuNjY2NjY2N2VtO1xcblxcdHBhZGRpbmctbGVmdDogMWVtO1xcbn1cXG4ucHJvc2UtbGcgaDEge1xcblxcdGZvbnQtc2l6ZTogMi42NjY2NjY3ZW07XFxuXFx0bWFyZ2luLXRvcDogMDtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjgzMzMzMzNlbTtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxuLnByb3NlLWxnIGgyIHtcXG5cXHRmb250LXNpemU6IDEuNjY2NjY2N2VtO1xcblxcdG1hcmdpbi10b3A6IDEuODY2NjY2N2VtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuMDY2NjY2N2VtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjMzMzMzMzM7XFxufVxcbi5wcm9zZS1sZyBoMyB7XFxuXFx0Zm9udC1zaXplOiAxLjMzMzMzMzNlbTtcXG5cXHRtYXJnaW4tdG9wOiAxLjY2NjY2NjdlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjY2NjY2NjdlbTtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcbn1cXG4ucHJvc2UtbGcgaDQge1xcblxcdG1hcmdpbi10b3A6IDEuNzc3Nzc3OGVtO1xcblxcdG1hcmdpbi1ib3R0b206IDAuNDQ0NDQ0NGVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU1NTU1NTY7XFxufVxcbi5wcm9zZS1sZyBpbWcge1xcblxcdG1hcmdpbi10b3A6IDEuNzc3Nzc3OGVtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuNzc3Nzc3OGVtO1xcbn1cXG4ucHJvc2UtbGcgdmlkZW8ge1xcblxcdG1hcmdpbi10b3A6IDEuNzc3Nzc3OGVtO1xcblxcdG1hcmdpbi1ib3R0b206IDEuNzc3Nzc3OGVtO1xcbn1cXG4ucHJvc2UtbGcgZmlndXJlIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjc3Nzc3NzhlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjc3Nzc3NzhlbTtcXG59XFxuLnByb3NlLWxnIGZpZ3VyZSA+ICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxuXFx0bWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnByb3NlLWxnIGZpZ3VyZSBmaWdjYXB0aW9uIHtcXG5cXHRmb250LXNpemU6IDAuODg4ODg4OWVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjU7XFxuXFx0bWFyZ2luLXRvcDogMWVtO1xcbn1cXG4ucHJvc2UtbGcgY29kZSB7XFxuXFx0Zm9udC1zaXplOiAwLjg4ODg4ODllbTtcXG59XFxuLnByb3NlLWxnIGgyIGNvZGUge1xcblxcdGZvbnQtc2l6ZTogMC44NjY2NjY3ZW07XFxufVxcbi5wcm9zZS1sZyBoMyBjb2RlIHtcXG5cXHRmb250LXNpemU6IDAuODc1ZW07XFxufVxcbi5wcm9zZS1sZyBwcmUge1xcblxcdGZvbnQtc2l6ZTogMC44ODg4ODg5ZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzU7XFxuXFx0bWFyZ2luLXRvcDogMmVtO1xcblxcdG1hcmdpbi1ib3R0b206IDJlbTtcXG5cXHRib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG5cXHRwYWRkaW5nLXRvcDogMWVtO1xcblxcdHBhZGRpbmctcmlnaHQ6IDEuNWVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAxZW07XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjVlbTtcXG59XFxuLnByb3NlLWxnIG9sIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjMzMzMzMzNlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjMzMzMzMzNlbTtcXG59XFxuLnByb3NlLWxnIHVsIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjMzMzMzMzNlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjMzMzMzMzNlbTtcXG59XFxuLnByb3NlLWxnIGxpIHtcXG5cXHRtYXJnaW4tdG9wOiAwLjY2NjY2NjdlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAwLjY2NjY2NjdlbTtcXG59XFxuLnByb3NlLWxnIG9sID4gbGkge1xcblxcdHBhZGRpbmctbGVmdDogMS42NjY2NjY3ZW07XFxufVxcbi5wcm9zZS1sZyBvbCA+IGxpOjpiZWZvcmUge1xcblxcdGxlZnQ6IDA7XFxufVxcbi5wcm9zZS1sZyB1bCA+IGxpIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDEuNjY2NjY2N2VtO1xcbn1cXG4ucHJvc2UtbGcgdWwgPiBsaTo6YmVmb3JlIHtcXG5cXHR3aWR0aDogMC4zMzMzMzMzZW07XFxuXFx0aGVpZ2h0OiAwLjMzMzMzMzNlbTtcXG5cXHR0b3A6IGNhbGMoMC44ODg4ODg5ZW0gLSAwLjE2NjY2NjdlbSk7XFxuXFx0bGVmdDogMC4yMjIyMjIyZW07XFxufVxcbi5wcm9zZS1sZyA+IHVsID4gbGkgcCB7XFxuXFx0bWFyZ2luLXRvcDogMC44ODg4ODg5ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC44ODg4ODg5ZW07XFxufVxcbi5wcm9zZS1sZyA+IHVsID4gbGkgPiAqOmZpcnN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjMzMzMzMzNlbTtcXG59XFxuLnByb3NlLWxnID4gdWwgPiBsaSA+ICo6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4zMzMzMzMzZW07XFxufVxcbi5wcm9zZS1sZyA+IG9sID4gbGkgPiAqOmZpcnN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tdG9wOiAxLjMzMzMzMzNlbTtcXG59XFxuLnByb3NlLWxnID4gb2wgPiBsaSA+ICo6bGFzdC1jaGlsZCB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS4zMzMzMzMzZW07XFxufVxcbi5wcm9zZS1sZyB1bCB1bCwgLnByb3NlLWxnIHVsIG9sLCAucHJvc2UtbGcgb2wgdWwsIC5wcm9zZS1sZyBvbCBvbCB7XFxuXFx0bWFyZ2luLXRvcDogMC44ODg4ODg5ZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMC44ODg4ODg5ZW07XFxufVxcbi5wcm9zZS1sZyBociB7XFxuXFx0bWFyZ2luLXRvcDogMy4xMTExMTExZW07XFxuXFx0bWFyZ2luLWJvdHRvbTogMy4xMTExMTExZW07XFxufVxcbi5wcm9zZS1sZyBociArICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyBoMiArICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyBoMyArICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyBoNCArICoge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyB0YWJsZSB7XFxuXFx0Zm9udC1zaXplOiAwLjg4ODg4ODllbTtcXG5cXHRsaW5lLWhlaWdodDogMS41O1xcbn1cXG4ucHJvc2UtbGcgdGhlYWQgdGgge1xcblxcdHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMC43NWVtO1xcblxcdHBhZGRpbmctbGVmdDogMC43NWVtO1xcbn1cXG4ucHJvc2UtbGcgdGhlYWQgdGg6Zmlyc3QtY2hpbGQge1xcblxcdHBhZGRpbmctbGVmdDogMDtcXG59XFxuLnByb3NlLWxnIHRoZWFkIHRoOmxhc3QtY2hpbGQge1xcblxcdHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5wcm9zZS1sZyB0Ym9keSB0ZCB7XFxuXFx0cGFkZGluZy10b3A6IDAuNzVlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjc1ZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDAuNzVlbTtcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuNzVlbTtcXG59XFxuLnByb3NlLWxnIHRib2R5IHRkOmZpcnN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDA7XFxufVxcbi5wcm9zZS1sZyB0Ym9keSB0ZDpsYXN0LWNoaWxkIHtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwO1xcbn1cXG4ucHJvc2UtbGcgPiA6Zmlyc3QtY2hpbGQge1xcblxcdG1hcmdpbi10b3A6IDA7XFxufVxcbi5wcm9zZS1sZyA+IDpsYXN0LWNoaWxkIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4uc3RhdGljIHtcXG5cXHRwb3NpdGlvbjogc3RhdGljO1xcbn1cXG4uZml4ZWQge1xcblxcdHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLmFic29sdXRlIHtcXG5cXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi5yZWxhdGl2ZSB7XFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udG9wLTAge1xcblxcdHRvcDogMHB4O1xcbn1cXG4ubGVmdC0wIHtcXG5cXHRsZWZ0OiAwcHg7XFxufVxcbi56LTEwIHtcXG5cXHR6LWluZGV4OiAxMDtcXG59XFxuLi1teC0xIHtcXG5cXHRtYXJnaW4tbGVmdDogLTAuMjVyZW07XFxuXFx0bWFyZ2luLXJpZ2h0OiAtMC4yNXJlbTtcXG59XFxuLm14LWF1dG8ge1xcblxcdG1hcmdpbi1sZWZ0OiBhdXRvO1xcblxcdG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm15LTYge1xcblxcdG1hcmdpbi10b3A6IDEuNXJlbTtcXG5cXHRtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbi5tbC00IHtcXG5cXHRtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuLm1sLTEge1xcblxcdG1hcmdpbi1sZWZ0OiAwLjI1cmVtO1xcbn1cXG4ubXQtMSB7XFxuXFx0bWFyZ2luLXRvcDogMC4yNXJlbTtcXG59XFxuLm1iLTEwIHtcXG5cXHRtYXJnaW4tYm90dG9tOiAyLjVyZW07XFxufVxcbi5tdC0xMCB7XFxuXFx0bWFyZ2luLXRvcDogMi41cmVtO1xcbn1cXG4ubXQtMiB7XFxuXFx0bWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG4ubXItMiB7XFxuXFx0bWFyZ2luLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5tbC0xMCB7XFxuXFx0bWFyZ2luLWxlZnQ6IDIuNXJlbTtcXG59XFxuLm10LTQge1xcblxcdG1hcmdpbi10b3A6IDFyZW07XFxufVxcbi5tYi00IHtcXG5cXHRtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubWItNiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMS41cmVtO1xcbn1cXG4ubXQtNiB7XFxuXFx0bWFyZ2luLXRvcDogMS41cmVtO1xcbn1cXG4ubWItMiB7XFxuXFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG4ubWwtMiB7XFxuXFx0bWFyZ2luLWxlZnQ6IDAuNXJlbTtcXG59XFxuLmJsb2NrIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsZXgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxufVxcbi5oaWRkZW4ge1xcblxcdGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oLWZ1bGwge1xcblxcdGhlaWdodDogMTAwJTtcXG59XFxuLmgtNSB7XFxuXFx0aGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4uaC1zY3JlZW4ge1xcblxcdGhlaWdodDogMTAwdmg7XFxufVxcbi5oLTgge1xcblxcdGhlaWdodDogMnJlbTtcXG59XFxuLmgtMTAge1xcblxcdGhlaWdodDogMi41cmVtO1xcbn1cXG4uaC02IHtcXG5cXHRoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmgtNCB7XFxuXFx0aGVpZ2h0OiAxcmVtO1xcbn1cXG4uaC1hdXRvIHtcXG5cXHRoZWlnaHQ6IGF1dG87XFxufVxcbi5oLTEyIHtcXG5cXHRoZWlnaHQ6IDNyZW07XFxufVxcbi5oLTMge1xcblxcdGhlaWdodDogMC43NXJlbTtcXG59XFxuLm1heC1oLWZ1bGwge1xcblxcdG1heC1oZWlnaHQ6IDEwMCU7XFxufVxcbi5taW4taC1zY3JlZW4ge1xcblxcdG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4udy0yMCB7XFxuXFx0d2lkdGg6IDVyZW07XFxufVxcbi53LWZ1bGwge1xcblxcdHdpZHRoOiAxMDAlO1xcbn1cXG4udy02XFxcXC8xMiB7XFxuXFx0d2lkdGg6IDUwJTtcXG59XFxuLnctNSB7XFxuXFx0d2lkdGg6IDEuMjVyZW07XFxufVxcbi53LXNjcmVlbiB7XFxuXFx0d2lkdGg6IDEwMHZ3O1xcbn1cXG4udy1hdXRvIHtcXG5cXHR3aWR0aDogYXV0bztcXG59XFxuLnctOVxcXFwvMTIge1xcblxcdHdpZHRoOiA3NSU7XFxufVxcbi53LTQge1xcblxcdHdpZHRoOiAxcmVtO1xcbn1cXG4udy0xMCB7XFxuXFx0d2lkdGg6IDIuNXJlbTtcXG59XFxuLnctOFxcXFwvMTIge1xcblxcdHdpZHRoOiA2Ni42NjY2NjclO1xcbn1cXG4udy0zIHtcXG5cXHR3aWR0aDogMC43NXJlbTtcXG59XFxuLm1heC13LTV4bCB7XFxuXFx0bWF4LXdpZHRoOiA2NHJlbTtcXG59XFxuLmZsZXgtMSB7XFxuXFx0ZmxleDogMSAxO1xcbn1cXG4uZmxleC1zaHJpbmstMCB7XFxuXFx0ZmxleC1zaHJpbms6IDA7XFxufVxcbi50cmFuc2Zvcm0ge1xcblxcdHRyYW5zZm9ybTogdmFyKC0tdHctdHJhbnNmb3JtKTtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIHNwaW4ge1xcblxcblxcdHRvIHtcXG5cXHRcXHR0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xcblxcdH1cXG59XFxuQGtleWZyYW1lcyBzcGluIHtcXG5cXG5cXHR0byB7XFxuXFx0XFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXG5cXHR9XFxufVxcbi5hbmltYXRlLXNwaW4ge1xcblxcdC13ZWJraXQtYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcXG5cXHQgICAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbi5jdXJzb3ItcG9pbnRlciB7XFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcbn1cXG4ubGlzdC1ub25lIHtcXG5cXHRsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcbi5mbGV4LXJvdyB7XFxuXFx0ZmxleC1kaXJlY3Rpb246IHJvdztcXG59XFxuLmZsZXgtY29sIHtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uZmxleC13cmFwIHtcXG5cXHRmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5pdGVtcy1zdGFydCB7XFxuXFx0YWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5pdGVtcy1iYXNlbGluZSB7XFxuXFx0YWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG4uanVzdGlmeS1zdGFydCB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uanVzdGlmeS1lbmQge1xcblxcdGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuXFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi5qdXN0aWZ5LWJldHdlZW4ge1xcblxcdGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmdhcC02IHtcXG5cXHRnYXA6IDEuNXJlbTtcXG59XFxuLmdhcC00IHtcXG5cXHRnYXA6IDFyZW07XFxufVxcbi5nYXAtMTIge1xcblxcdGdhcDogM3JlbTtcXG59XFxuLmdhcC0xMCB7XFxuXFx0Z2FwOiAyLjVyZW07XFxufVxcbi5nYXAtMyB7XFxuXFx0Z2FwOiAwLjc1cmVtO1xcbn1cXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG5cXHRvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ub3ZlcmZsb3cteS1zY3JvbGwge1xcblxcdG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuLnJvdW5kZWQtbWQge1xcblxcdGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXG4ucm91bmRlZC1mdWxsIHtcXG5cXHRib3JkZXItcmFkaXVzOiA5OTk5cHg7XFxufVxcbi5ib3JkZXItMiB7XFxuXFx0Ym9yZGVyLXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItYi0yIHtcXG5cXHRib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XFxufVxcbi5ib3JkZXItcHJpbWFyeS02MDAge1xcblxcdC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuXFx0Ym9yZGVyLWNvbG9yOiByZ2JhKDc5LCA3MCwgMjI5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLXdoaXRlIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLWdyYXktMjAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMjksIDIzMSwgMjM1LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLWdyYXktMzAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgyMDksIDIxMywgMjE5LCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLXByaW1hcnktMzAwIHtcXG5cXHQtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcblxcdGJvcmRlci1jb2xvcjogcmdiYSgxNjUsIDE4MCwgMjUyLCB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYmctd2hpdGUge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXJlZC02MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMCwgMzgsIDM4LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1wcmltYXJ5LTYwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzksIDcwLCAyMjksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWdyYXktMTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDMsIDI0NCwgMjQ2LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTIwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCAyMzEsIDIzNSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctYmx1ZS02MDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1wcmltYXJ5LTgwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTUsIDQ4LCAxNjMsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXByaW1hcnktMTAwIHtcXG5cXHQtLXR3LWJnLW9wYWNpdHk6IDE7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjQsIDIzMSwgMjU1LCB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ncmF5LTUwMCB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA3LCAxMTQsIDEyOCwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYmctZ3JheS0zMDAge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIwOSwgMjEzLCAyMTksIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmZpbGwtY3VycmVudCB7XFxuXFx0ZmlsbDogY3VycmVudENvbG9yO1xcbn1cXG4uc3Ryb2tlLWN1cnJlbnQge1xcblxcdHN0cm9rZTogY3VycmVudENvbG9yO1xcbn1cXG4ucC0xIHtcXG5cXHRwYWRkaW5nOiAwLjI1cmVtO1xcbn1cXG4ucC0yIHtcXG5cXHRwYWRkaW5nOiAwLjVyZW07XFxufVxcbi5weC0yIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAwLjVyZW07XFxufVxcbi5weS0yIHtcXG5cXHRwYWRkaW5nLXRvcDogMC41cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weS00IHtcXG5cXHRwYWRkaW5nLXRvcDogMXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuLnB4LTgge1xcblxcdHBhZGRpbmctbGVmdDogMnJlbTtcXG5cXHRwYWRkaW5nLXJpZ2h0OiAycmVtO1xcbn1cXG4ucHgtNiB7XFxuXFx0cGFkZGluZy1sZWZ0OiAxLjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMS41cmVtO1xcbn1cXG4ucHktMSB7XFxuXFx0cGFkZGluZy10b3A6IDAuMjVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDAuMjVyZW07XFxufVxcbi5weC0xIHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDAuMjVyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMC4yNXJlbTtcXG59XFxuLnB5LTYge1xcblxcdHBhZGRpbmctdG9wOiAxLjVyZW07XFxuXFx0cGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuLnB5LTIwIHtcXG5cXHRwYWRkaW5nLXRvcDogNXJlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogNXJlbTtcXG59XFxuLnB5LTEyIHtcXG5cXHRwYWRkaW5nLXRvcDogM3JlbTtcXG5cXHRwYWRkaW5nLWJvdHRvbTogM3JlbTtcXG59XFxuLnB5LTEwIHtcXG5cXHRwYWRkaW5nLXRvcDogMi41cmVtO1xcblxcdHBhZGRpbmctYm90dG9tOiAyLjVyZW07XFxufVxcbi5weC00IHtcXG5cXHRwYWRkaW5nLWxlZnQ6IDFyZW07XFxuXFx0cGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnB0LTEyIHtcXG5cXHRwYWRkaW5nLXRvcDogM3JlbTtcXG59XFxuLnBiLTYge1xcblxcdHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxufVxcbi5wYi0xNiB7XFxuXFx0cGFkZGluZy1ib3R0b206IDRyZW07XFxufVxcbi50ZXh0LWxlZnQge1xcblxcdHRleHQtYWxpZ246IGxlZnQ7XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuXFx0dGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWxpZ24tdG9wIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbn1cXG4uYWxpZ24tbWlkZGxlIHtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbn1cXG4udGV4dC1iYXNlIHtcXG5cXHRmb250LXNpemU6IDFyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLnRleHQtc20ge1xcblxcdGZvbnQtc2l6ZTogMC44NzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi50ZXh0LXhsIHtcXG5cXHRmb250LXNpemU6IDEuMjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi50ZXh0LWxnIHtcXG5cXHRmb250LXNpemU6IDEuMTI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC0zeGwge1xcblxcdGZvbnQtc2l6ZTogMS44NzVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcbi50ZXh0LTR4bCB7XFxuXFx0Zm9udC1zaXplOiAyLjI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxufVxcbi50ZXh0LTJ4bCB7XFxuXFx0Zm9udC1zaXplOiAxLjVyZW07XFxuXFx0bGluZS1oZWlnaHQ6IDJyZW07XFxufVxcbi5mb250LXNlbWlib2xkIHtcXG5cXHRmb250LXdlaWdodDogNjAwO1xcbn1cXG4uZm9udC1ib2xkIHtcXG5cXHRmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZm9udC1tZWRpdW0ge1xcblxcdGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi51cHBlcmNhc2Uge1xcblxcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxufVxcbi5jYXBpdGFsaXplIHtcXG5cXHR0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcXG59XFxuLml0YWxpYyB7XFxuXFx0Zm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udHJhY2tpbmctd2lkZSB7XFxuXFx0bGV0dGVyLXNwYWNpbmc6IDAuMDI1ZW07XFxufVxcbi50ZXh0LXByaW1hcnktNjAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg3OSwgNzAsIDIyOSwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoNzksIDcwLCAyMjksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1yZWQtMTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyNTQsIDIyNiwgMjI2LCAxKTtcXG5cXHRjb2xvcjogcmdiYSgyNTQsIDIyNiwgMjI2LCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtd2hpdGUge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xcblxcdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTcwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNTUsIDY1LCA4MSwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoNTUsIDY1LCA4MSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LWJsdWUtNjAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgzNywgOTksIDIzNSwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoMzcsIDk5LCAyMzUsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1yZWQtNTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1ncmF5LTkwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoMTcsIDI0LCAzOSwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoMTcsIDI0LCAzOSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXByaW1hcnktOTAwIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg0OSwgNDYsIDEyOSwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoNDksIDQ2LCAxMjksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1wcmltYXJ5LTcwMCB7XFxuXFx0LS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuXFx0Y29sb3I6IHJnYmEoNjcsIDU2LCAyMDIsIDEpO1xcblxcdGNvbG9yOiByZ2JhKDY3LCA1NiwgMjAyLCB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtYmx1ZS03MDAge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDI5LCA3OCwgMjE2LCAxKTtcXG5cXHRjb2xvcjogcmdiYSgyOSwgNzgsIDIxNiwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi51bmRlcmxpbmUge1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uc2hhZG93LWxnIHtcXG5cXHQtLXR3LXNoYWRvdzogMCAxMHB4IDE1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgNHB4IDZweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuXFx0Ym94LXNoYWRvdzogMCAwICMwMDAwLCAwIDAgIzAwMDAsIHZhcigtLXR3LXNoYWRvdyk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuLnNoYWRvdy0yeGwge1xcblxcdC0tdHctc2hhZG93OiAwIDI1cHggNTBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xcblxcdGJveC1zaGFkb3c6IDAgMCAjMDAwMCwgMCAwICMwMDAwLCB2YXIoLS10dy1zaGFkb3cpO1xcblxcdGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctbWQge1xcblxcdC0tdHctc2hhZG93OiAwIDRweCA2cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMnB4IDRweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4wNik7XFxuXFx0Ym94LXNoYWRvdzogMCAwICMwMDAwLCAwIDAgIzAwMDAsIHZhcigtLXR3LXNoYWRvdyk7XFxuXFx0Ym94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1yaW5nLXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctc2hhZG93KTtcXG59XFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIDEpO1xcbiAgY29sb3I6IHJnYmEoMTcsIDI0LCAzOSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gIH1cXG59XFxuLnJpY2gtdGV4dC1oZXJvIGEge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDM3LCA5OSwgMjM1LCAxKTtcXG5cXHRjb2xvcjogcmdiYSgzNywgOTksIDIzNSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5yaWNoLXRleHQtYmFubmVyIHtcXG5cXHR3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XFxuICBhIHtcXG5cXHRcXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG5cXHR9XFxufVxcbi50aXRsZSB7XFxuXFx0Zm9udC1zaXplOiAyLjI1cmVtO1xcblxcdGxpbmUtaGVpZ2h0OiAyLjVyZW07XFxuXFx0Zm9udC13ZWlnaHQ6IDYwMDtcXG5cXHRsaW5lLWhlaWdodDogMS4zNzU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnRpdGxlIHtcXG5cXHRcXHRmb250LXNpemU6IDNyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDE7XFxuXFx0fVxcbn1cXG4ud2l0aC1hcnJvdzphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUzRSUzQ3BhdGglMjBkJTNEJTIyTTElMjA2YS41LjUlMjAwJTIwMCUyMDAlMjAwJTIwMVY2ek0xMi44NTQuNjQ2YS41LjUlMjAwJTIwMCUyMDAtLjcwOC43MDhsLjcwOC0uNzA4ek0xOCUyMDYuNWwuMzU0LjM1NGEuNS41JTIwMCUyMDAlMjAwJTIwMC0uNzA4TDE4JTIwNi41em0tNS44NTQlMjA1LjE0NmEuNS41JTIwMCUyMDAlMjAwJTIwLjcwOC43MDhsLS43MDgtLjcwOHpNMSUyMDdoMTYuNVY2SDF2MXptMTYuNjQ2LS44NTRsLTUuNSUyMDUuNS43MDguNzA4JTIwNS41LTUuNS0uNzA4LS43MDh6bS01LjUtNC43OTJsMi43NSUyMDIuNzUuNzA4LS43MDgtMi43NS0yLjc1LS43MDguNzA4em0yLjc1JTIwMi43NWwyLjc1JTIwMi43NS43MDgtLjcwOC0yLjc1LTIuNzUtLjcwOC43MDh6JTIyJTIwZmlsbCUzRCUyMiUyMzEyNjRBMyUyMiUyRiUzRSUzQyUyRnN2ZyUzRSk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxM3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbn1cXG4uaG92ZXJcXFxcOmJnLXByaW1hcnktNTA6aG92ZXIge1xcblxcdC0tdHctYmctb3BhY2l0eTogMTtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzOCwgMjQyLCAyNTUsIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LXByaW1hcnktNjAwOmhvdmVyIHtcXG5cXHQtLXR3LXRleHQtb3BhY2l0eTogMTtcXG5cXHRjb2xvcjogcmdiYSg3OSwgNzAsIDIyOSwgMSk7XFxuXFx0Y29sb3I6IHJnYmEoNzksIDcwLCAyMjksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtZ3JheS05MDA6aG92ZXIge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIDEpO1xcblxcdGNvbG9yOiByZ2JhKDE3LCAyNCwgMzksIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnVuZGVybGluZTpob3ZlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5mb2N1c1xcXFw6YmctcHJpbWFyeS01MDpmb2N1cyB7XFxuXFx0LS10dy1iZy1vcGFjaXR5OiAxO1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM4LCAyNDIsIDI1NSwgdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOnRleHQtcHJpbWFyeS02MDA6Zm9jdXMge1xcblxcdC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcblxcdGNvbG9yOiByZ2JhKDc5LCA3MCwgMjI5LCAxKTtcXG5cXHRjb2xvcjogcmdiYSg3OSwgNzAsIDIyOSwgdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcXG5cXHRvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuXFx0b3V0bGluZS1vZmZzZXQ6IDJweDtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuXFx0LnNtXFxcXDptdC0wIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6bWItMiB7XFxuXFx0XFx0bWFyZ2luLWJvdHRvbTogMC41cmVtO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOm10LTMge1xcblxcdFxcdG1hcmdpbi10b3A6IDAuNzVyZW07XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6dy04XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDY2LjY2NjY2NyU7XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6ZmxleC1yb3cge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6Z2FwLTIwIHtcXG5cXHRcXHRnYXA6IDVyZW07XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6c2VsZi1lbmQge1xcblxcdFxcdGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnB5LTIge1xcblxcdFxcdHBhZGRpbmctdG9wOiAwLjVyZW07XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG5cXHR9XFxuXFxuXFx0LnNtXFxcXDpweC0xMiB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAzcmVtO1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDNyZW07XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6cHgtMCB7XFxuXFx0XFx0cGFkZGluZy1sZWZ0OiAwcHg7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMHB4O1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnByLTgge1xcblxcdFxcdHBhZGRpbmctcmlnaHQ6IDJyZW07XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6cHQtMTIge1xcblxcdFxcdHBhZGRpbmctdG9wOiAzcmVtO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnBiLTQge1xcblxcdFxcdHBhZGRpbmctYm90dG9tOiAxcmVtO1xcblxcdH1cXG5cXG5cXHQuc21cXFxcOnRleHQtc20ge1xcblxcdFxcdGZvbnQtc2l6ZTogMC44NzVyZW07XFxuXFx0XFx0bGluZS1oZWlnaHQ6IDEuMjVyZW07XFxuXFx0fVxcblxcblxcdC5zbVxcXFw6c2hhZG93LXhsIHtcXG5cXHRcXHQtLXR3LXNoYWRvdzogMCAyMHB4IDI1cHggLTVweCByZ2JhKDAsIDAsIDAsIDAuMSksIDAgMTBweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcXG5cXHRcXHRib3gtc2hhZG93OiAwIDAgIzAwMDAsIDAgMCAjMDAwMCwgdmFyKC0tdHctc2hhZG93KTtcXG5cXHRcXHRib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuXFx0Lm1kXFxcXDptdC0wIHtcXG5cXHRcXHRtYXJnaW4tdG9wOiAwcHg7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6YmxvY2sge1xcblxcdFxcdGRpc3BsYXk6IGJsb2NrO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmZsZXgge1xcblxcdFxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6aGlkZGVuIHtcXG5cXHRcXHRkaXNwbGF5OiBub25lO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnctNlxcXFwvMTIge1xcblxcdFxcdHdpZHRoOiA1MCU7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6dy00XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDMzLjMzMzMzMyU7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6ZmxleC1yb3cge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFx0fVxcblxcblxcdC5tZFxcXFw6aXRlbXMtY2VudGVyIHtcXG5cXHRcXHRhbGlnbi1pdGVtczogY2VudGVyO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOmp1c3RpZnktYmV0d2VlbiB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcblxcdH1cXG5cXG5cXHQubWRcXFxcOnB5LTAge1xcblxcdFxcdHBhZGRpbmctdG9wOiAwcHg7XFxuXFx0XFx0cGFkZGluZy1ib3R0b206IDBweDtcXG5cXHR9XFxuXFxuXFx0Lm1kXFxcXDp0ZXh0LXNtIHtcXG5cXHRcXHRmb250LXNpemU6IDAuODc1cmVtO1xcblxcdFxcdGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xcblxcdH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcblxcdC5sZ1xcXFw6bXQtMCB7XFxuXFx0XFx0bWFyZ2luLXRvcDogMHB4O1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOnctYXV0byB7XFxuXFx0XFx0d2lkdGg6IGF1dG87XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6dy02XFxcXC8xMiB7XFxuXFx0XFx0d2lkdGg6IDUwJTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDp3LTRcXFxcLzEyIHtcXG5cXHRcXHR3aWR0aDogMzMuMzMzMzMzJTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDp3LTlcXFxcLzEyIHtcXG5cXHRcXHR3aWR0aDogNzUlO1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOmZsZXgtcm93IHtcXG5cXHRcXHRmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcdH1cXG5cXG5cXHQubGdcXFxcOmZsZXgtcm93LXJldmVyc2Uge1xcblxcdFxcdGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpmbGV4LXdyYXAge1xcblxcdFxcdGZsZXgtd3JhcDogd3JhcDtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpqdXN0aWZ5LWVuZCB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG5cXHR9XFxuXFxuXFx0LmxnXFxcXDpqdXN0aWZ5LWNlbnRlciB7XFxuXFx0XFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6anVzdGlmeS1iZXR3ZWVuIHtcXG5cXHRcXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6Z2FwLTIwIHtcXG5cXHRcXHRnYXA6IDVyZW07XFxuXFx0fVxcblxcblxcdC5sZ1xcXFw6cHItNiB7XFxuXFx0XFx0cGFkZGluZy1yaWdodDogMS41cmVtO1xcblxcdH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9pbmRleC5jc3NcIixcIndlYnBhY2s6Ly9zdHlsZXMvJTNDaW5wdXQlMjBjc3MlMjBwU1BSNHolM0VcIixcIndlYnBhY2s6Ly9zdHlsZXMvJTNDaW5wdXQlMjBjc3MlMjBOZjdaMUklM0VcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdFQUFjLENBQWQsOEZBQWM7O0FBQWQ7OztDQUFjOztBQUFkOztDQUFjOztBQUFkOzs7Q0NjQyxzQkFBc0I7QURkVDs7QUFBZDs7Q0FBYzs7QUFBZDtDQ3NCQyxnQkFBZ0I7Q0FDaEIsY0FBVztJQUFYLFdBQVc7QUR2QkU7O0FBQWQ7OztDQUFjOztBQUFkO0NDZ0NDLGlCQUFpQixFQUFFLE1BQU07Q0FDekIsOEJBQThCLEVBQUUsTUFBTTtBRGpDekI7O0FBQWQ7OztDQUFjOztBQUFkOztDQUFjOztBQUFkO0NDOENDLFNBQVM7QUQ5Q0k7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0NzREM7Ozs7Ozs7OztrQkFTaUI7QUQvREo7O0FBQWQ7OztDQUFjOztBQUFkOzs7Q0FBYzs7QUFBZDtDQzZFQyxTQUFTLEVBQUUsTUFBTTtDQUNqQixjQUFjLEVBQUUsTUFBTTtBRDlFVDs7QUFBZDs7O0NBQWM7O0FBQWQ7O0NBQWM7O0FBQWQ7Q0MyRkMseUNBQWlDO1NBQWpDLGlDQUFpQztBRDNGcEI7O0FBQWQ7O0NBQWM7O0FBQWQ7O0NDb0dDLG1CQUFtQjtBRHBHTjs7QUFBZDs7O0NBQWM7O0FBQWQ7Ozs7Q0NnSEM7Ozs7OztXQU1VLEVBQUUsTUFBTTtDQUNsQixjQUFjLEVBQUUsTUFBTTtBRHZIVDs7QUFBZDs7Q0FBYzs7QUFBZDtDQytIQyxjQUFjO0FEL0hEOztBQUFkOztDQUFjOztBQUFkOztDQ3dJQyxjQUFjO0NBQ2QsY0FBYztDQUNkLGtCQUFrQjtDQUNsQix3QkFBd0I7QUQzSVg7O0FBQWQ7Q0MrSUMsZUFBZTtBRC9JRjs7QUFBZDtDQ21KQyxXQUFXO0FEbkpFOztBQUFkOzs7Q0FBYzs7QUFBZDs7O0NBQWM7O0FBQWQ7Q0NpS0MsY0FBYyxFQUFFLE1BQU07Q0FDdEIscUJBQXFCLEVBQUUsTUFBTTtBRGxLaEI7O0FBQWQ7OztDQUFjOztBQUFkOzs7Q0FBYzs7QUFB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O0VBQUEsbUJBQUE7Q0hxdkRDOztDR3J2REQ7RUFBQSw4QkFBQTtDSHl2REM7O0NHenZERDtFQUFBLGdCQUFBO0VBQUEsbUJBQUE7Q0g4dkRDOztDRzl2REQ7RUFBQSxtQkFBQTtFQUFBLG9CQUFBO0NIbXdEQztBQUNEO0FBcHdEQTs7Q0dBQTtFQUFBLGVBQUE7Q0h5d0RDOztDR3p3REQ7RUFBQSxXQUFBO0NINndEQzs7Q0c3d0REO0VBQUEsVUFBQTtDSGl4REM7O0NHanhERDtFQUFBLGlCQUFBO0NIcXhEQzs7Q0dyeEREO0VBQUEsVUFBQTtDSHl4REM7O0NHenhERDtFQUFBLG1CQUFBO0NINnhEQzs7Q0c3eEREO0VBQUEsMkJBQUE7Q0hpeURDOztDR2p5REQ7RUFBQSxlQUFBO0NIcXlEQzs7Q0dyeUREO0VBQUEseUJBQUE7Q0h5eURDOztDR3p5REQ7RUFBQSx1QkFBQTtDSDZ5REM7O0NHN3lERDtFQUFBLDhCQUFBO0NIaXpEQzs7Q0dqekREO0VBQUEsU0FBQTtDSHF6REM7O0NHcnpERDtFQUFBLHFCQUFBO0NIeXpEQztBQUNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB0YWlsd2luZCBiYXNlO1xcbkB0YWlsd2luZCBjb21wb25lbnRzO1xcbkB0YWlsd2luZCB1dGlsaXRpZXM7XFxuXFxuaHRtbCB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBAYXBwbHkgdGV4dC1ncmF5LTkwMDtcXG59XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuICBodG1sIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbiAgfVxcbn1cXG5cXG4ucmljaC10ZXh0LWhlcm8gYSB7XFxuICBAYXBwbHkgdGV4dC1ibHVlLTYwMCB1bmRlcmxpbmU7XFxufVxcblxcbi5yaWNoLXRleHQtYmFubmVyIHtcXG4gIEBhcHBseSB3aGl0ZXNwYWNlLXByZS1saW5lO1xcbiAgYSB7XFxuICAgIEBhcHBseSB1bmRlcmxpbmU7XFxuICB9XFxufVxcblxcbi50aXRsZSB7XFxuICBAYXBwbHkgdGV4dC00eGwgbGVhZGluZy1zbnVnIGZvbnQtc2VtaWJvbGQ7XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcbiAgLnRpdGxlIHtcXG4gICAgQGFwcGx5IHRleHQtNXhsO1xcbiAgfVxcbn1cXG5cXG4ud2l0aC1hcnJvdzphZnRlciB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmLTgsJTNDc3ZnJTIwZmlsbCUzRCUyMm5vbmUlMjIlMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUzRSUzQ3BhdGglMjBkJTNEJTIyTTElMjA2YS41LjUlMjAwJTIwMCUyMDAlMjAwJTIwMVY2ek0xMi44NTQuNjQ2YS41LjUlMjAwJTIwMCUyMDAtLjcwOC43MDhsLjcwOC0uNzA4ek0xOCUyMDYuNWwuMzU0LjM1NGEuNS41JTIwMCUyMDAlMjAwJTIwMC0uNzA4TDE4JTIwNi41em0tNS44NTQlMjA1LjE0NmEuNS41JTIwMCUyMDAlMjAwJTIwLjcwOC43MDhsLS43MDgtLjcwOHpNMSUyMDdoMTYuNVY2SDF2MXptMTYuNjQ2LS44NTRsLTUuNSUyMDUuNS43MDguNzA4JTIwNS41LTUuNS0uNzA4LS43MDh6bS01LjUtNC43OTJsMi43NSUyMDIuNzUuNzA4LS43MDgtMi43NS0yLjc1LS43MDguNzA4em0yLjc1JTIwMi43NWwyLjc1JTIwMi43NS43MDgtLjcwOC0yLjc1LTIuNzUtLjcwOC43MDh6JTIyJTIwZmlsbCUzRCUyMiUyMzEyNjRBMyUyMiUyRiUzRSUzQyUyRnN2ZyUzRSk7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAxOXB4O1xcbiAgaGVpZ2h0OiAxM3B4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xcbn1cXG5cIixcIi8qISBtb2Rlcm4tbm9ybWFsaXplIHYxLjEuMCB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplICovXFxuXFxuLypcXG5Eb2N1bWVudFxcbj09PT09PT09XFxuKi9cXG5cXG4vKipcXG5Vc2UgYSBiZXR0ZXIgYm94IG1vZGVsIChvcGluaW9uYXRlZCkuXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi8qKlxcblVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUgKG9waW5pb25hdGVkKS5cXG4qL1xcblxcbmh0bWwge1xcblxcdC1tb3otdGFiLXNpemU6IDQ7XFxuXFx0dGFiLXNpemU6IDQ7XFxufVxcblxcbi8qKlxcbjEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4qL1xcblxcbmh0bWwge1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2VjdGlvbnNcXG49PT09PT09PVxcbiovXFxuXFxuLyoqXFxuUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYm9keSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG5JbXByb3ZlIGNvbnNpc3RlbmN5IG9mIGRlZmF1bHQgZm9udHMgaW4gYWxsIGJyb3dzZXJzLiAoaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9tb2Rlcm4tbm9ybWFsaXplL2lzc3Vlcy8zKVxcbiovXFxuXFxuYm9keSB7XFxuXFx0Zm9udC1mYW1pbHk6XFxuXFx0XFx0c3lzdGVtLXVpLFxcblxcdFxcdC1hcHBsZS1zeXN0ZW0sIC8qIEZpcmVmb3ggc3VwcG9ydHMgdGhpcyBidXQgbm90IHlldCBgc3lzdGVtLXVpYCAqL1xcblxcdFxcdCdTZWdvZSBVSScsXFxuXFx0XFx0Um9ib3RvLFxcblxcdFxcdEhlbHZldGljYSxcXG5cXHRcXHRBcmlhbCxcXG5cXHRcXHRzYW5zLXNlcmlmLFxcblxcdFxcdCdBcHBsZSBDb2xvciBFbW9qaScsXFxuXFx0XFx0J1NlZ29lIFVJIEVtb2ppJztcXG59XFxuXFxuLypcXG5Hcm91cGluZyBjb250ZW50XFxuPT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbiovXFxuXFxuaHIge1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG49PT09PT09PT09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbjEuIEltcHJvdmUgY29uc2lzdGVuY3kgb2YgZGVmYXVsdCBmb250cyBpbiBhbGwgYnJvd3NlcnMuIChodHRwczovL2dpdGh1Yi5jb20vc2luZHJlc29yaHVzL21vZGVybi1ub3JtYWxpemUvaXNzdWVzLzMpXFxuMi4gQ29ycmVjdCB0aGUgb2RkICdlbScgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcblxcdGZvbnQtZmFtaWx5OlxcblxcdFxcdHVpLW1vbm9zcGFjZSxcXG5cXHRcXHRTRk1vbm8tUmVndWxhcixcXG5cXHRcXHRDb25zb2xhcyxcXG5cXHRcXHQnTGliZXJhdGlvbiBNb25vJyxcXG5cXHRcXHRNZW5sbyxcXG5cXHRcXHRtb25vc3BhY2U7IC8qIDEgKi9cXG5cXHRmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuUHJldmVudCAnc3ViJyBhbmQgJ3N1cCcgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcblxcdHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcblRhYnVsYXIgZGF0YVxcbj09PT09PT09PT09PVxcbiovXFxuXFxuLyoqXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuKi9cXG5cXG50YWJsZSB7XFxuXFx0dGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG5cXHRib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Gb3Jtc1xcbj09PT09XFxuKi9cXG5cXG4vKipcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG5cXHRmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcblxcdGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuXFx0bWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4xLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcblxcdHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG5Db3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiovXFxuXFxuOjotbW96LWZvY3VzLWlubmVyIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxuXFx0cGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG5cXHRvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCAnOmludmFsaWQnIHN0eWxlcyBpbiBGaXJlZm94LlxcblNlZTogaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzdcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcblxcdGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qKlxcblJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXQgJ2ZpZWxkc2V0JyBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5sZWdlbmQge1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuXFx0aGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG5cXHRvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcblxcdC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvICdpbmhlcml0JyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5JbnRlcmFjdGl2ZVxcbj09PT09PT09PT09XFxuKi9cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuXFx0ZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cIixcIi8qKlxcbiAqIE1hbnVhbGx5IGZvcmtlZCBmcm9tIFNVSVQgQ1NTIEJhc2U6IGh0dHBzOi8vZ2l0aHViLmNvbS9zdWl0Y3NzL2Jhc2VcXG4gKiBBIHRoaW4gbGF5ZXIgb24gdG9wIG9mIG5vcm1hbGl6ZS5jc3MgdGhhdCBwcm92aWRlcyBhIHN0YXJ0aW5nIHBvaW50IG1vcmVcXG4gKiBzdWl0YWJsZSBmb3Igd2ViIGFwcGxpY2F0aW9ucy5cXG4gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuICovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogVGFpbHdpbmQgY3VzdG9tIHJlc2V0IHN0eWxlc1xcbiAqL1xcblxcbi8qKlxcbiAqIDEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5ICh3aXRoIFRhaWx3aW5kJ3MgZGVmYXVsdFxcbiAqICAgIHNhbnMtc2VyaWYgZm9udCBzdGFjayBhcyBhIGZhbGxiYWNrKSBhcyBhIHNhbmUgZGVmYXVsdC5cXG4gKiAyLiBVc2UgVGFpbHdpbmQncyBkZWZhdWx0IFxcXCJub3JtYWxcXFwiIGxpbmUtaGVpZ2h0IHNvIHRoZSB1c2VyIGlzbid0IGZvcmNlZFxcbiAqICAgIHRvIG92ZXJyaWRlIGl0IHRvIGVuc3VyZSBjb25zaXN0ZW5jeSBldmVuIHdoZW4gdXNpbmcgdGhlIGRlZmF1bHQgdGhlbWUuXFxuICovXFxuXFxuaHRtbCB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkuc2FucycsIHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIik7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDIgKi9cXG59XFxuXFxuXFxuLyoqXFxuICogSW5oZXJpdCBmb250LWZhbWlseSBhbmQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzXFxuICogYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuICovXFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLlxcbiAqXFxuICogICAgV2UgdXNlZCB0byBzZXQgdGhpcyBpbiB0aGUgaHRtbCBlbGVtZW50IGFuZCBpbmhlcml0IGZyb21cXG4gKiAgICB0aGUgcGFyZW50IGVsZW1lbnQgZm9yIGV2ZXJ5dGhpbmcgZWxzZS4gVGhpcyBjYXVzZWQgaXNzdWVzXFxuICogICAgaW4gc2hhZG93LWRvbS1lbmhhbmNlZCBlbGVtZW50cyBsaWtlIDxkZXRhaWxzPiB3aGVyZSB0aGUgY29udGVudFxcbiAqICAgIGlzIHdyYXBwZWQgYnkgYSBkaXYgd2l0aCBib3gtc2l6aW5nIHNldCB0byBgY29udGVudC1ib3hgLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80XFxuICpcXG4gKlxcbiAqIDIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLlxcbiAqXFxuICogICAgQnkgZGVmYXVsdCwgdGhlIHdheSB0aGUgYnJvd3NlciBzcGVjaWZpZXMgdGhhdCBhbiBlbGVtZW50IHNob3VsZCBoYXZlIG5vXFxuICogICAgYm9yZGVyIGlzIGJ5IHNldHRpbmcgaXQncyBib3JkZXItc3R5bGUgdG8gYG5vbmVgIGluIHRoZSB1c2VyLWFnZW50XFxuICogICAgc3R5bGVzaGVldC5cXG4gKlxcbiAqICAgIEluIG9yZGVyIHRvIGVhc2lseSBhZGQgYm9yZGVycyB0byBlbGVtZW50cyBieSBqdXN0IHNldHRpbmcgdGhlIGBib3JkZXItd2lkdGhgXFxuICogICAgcHJvcGVydHksIHdlIGNoYW5nZSB0aGUgZGVmYXVsdCBib3JkZXItc3R5bGUgZm9yIGFsbCBlbGVtZW50cyB0byBgc29saWRgLCBhbmRcXG4gKiAgICB1c2UgYm9yZGVyLXdpZHRoIHRvIGhpZGUgdGhlbSBpbnN0ZWFkLiBUaGlzIHdheSBvdXIgYGJvcmRlcmAgdXRpbGl0aWVzIG9ubHlcXG4gKiAgICBuZWVkIHRvIHNldCB0aGUgYGJvcmRlci13aWR0aGAgcHJvcGVydHkgaW5zdGVhZCBvZiB0aGUgZW50aXJlIGBib3JkZXJgXFxuICogICAgc2hvcnRoYW5kLCBtYWtpbmcgb3VyIGJvcmRlciB1dGlsaXRpZXMgbXVjaCBtb3JlIHN0cmFpZ2h0Zm9yd2FyZCB0byBjb21wb3NlLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2XFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4gKiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0XFxuICovXFxuXFxuaHIge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG5cXG4vKipcXG4gKiBVbmRvIHRoZSBgYm9yZGVyLXN0eWxlOiBub25lYCByZXNldCB0aGF0IE5vcm1hbGl6ZSBhcHBsaWVzIHRvIGltYWdlcyBzbyB0aGF0XFxuICogb3VyIGBib3JkZXIte3dpZHRofWAgdXRpbGl0aWVzIGhhdmUgdGhlIGV4cGVjdGVkIGVmZmVjdC5cXG4gKlxcbiAqIFRoZSBOb3JtYWxpemUgcmVzZXQgaXMgdW5uZWNlc3NhcnkgZm9yIHVzIHNpbmNlIHdlIGRlZmF1bHQgdGhlIGJvcmRlci13aWR0aFxcbiAqIHRvIDAgb24gYWxsIGVsZW1lbnRzLlxcbiAqXFxuICogaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zNjJcXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxO1xcbiAgY29sb3I6IHRoZW1lKCdjb2xvcnMuZ3JheS40MDAnLCAjYTFhMWFhKTtcXG59XFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxufVxcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBSZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZlxcbiAqIG9wdC1vdXQuXFxuICovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLyoqXFxuICogUmVzZXQgZm9ybSBlbGVtZW50IHByb3BlcnRpZXMgdGhhdCBhcmUgZWFzeSB0byBmb3JnZXQgdG9cXG4gKiBzdHlsZSBleHBsaWNpdGx5IHNvIHlvdSBkb24ndCBpbmFkdmVydGVudGx5IGludHJvZHVjZVxcbiAqIHN0eWxlcyB0aGF0IGRldmlhdGUgZnJvbSB5b3VyIGRlc2lnbiBzeXN0ZW0uIFRoZXNlIHN0eWxlc1xcbiAqIHN1cHBsZW1lbnQgYSBwYXJ0aWFsIHJlc2V0IHRoYXQgaXMgYWxyZWFkeSBhcHBsaWVkIGJ5XFxuICogbm9ybWFsaXplLmNzcy5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBVc2UgdGhlIGNvbmZpZ3VyZWQgJ21vbm8nIGZvbnQgZmFtaWx5IGZvciBlbGVtZW50cyB0aGF0XFxuICogYXJlIGV4cGVjdGVkIHRvIGJlIHJlbmRlcmVkIHdpdGggYSBtb25vc3BhY2UgZm9udCwgZmFsbGluZ1xcbiAqIGJhY2sgdG8gdGhlIHN5c3RlbSBtb25vc3BhY2Ugc3RhY2sgaWYgdGhlcmUgaXMgbm8gY29uZmlndXJlZFxcbiAqICdtb25vJyBmb250IGZhbWlseS5cXG4gKi9cXG5cXG5wcmUsXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkubW9ubycsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlKTtcXG59XFxuXFxuLyoqXFxuICogMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQgYXMgdGhhdCdzXFxuICogICAgdGhlIGJlaGF2aW9yIHlvdSB3YW50IGFsbW9zdCBhbGwgb2YgdGhlIHRpbWUuIEluc3BpcmVkIGJ5XFxuICogICAgQ1NTIFJlbWVkeSwgd2l0aCBgc3ZnYCBhZGRlZCBhcyB3ZWxsLlxcbiAqXFxuICogICAgaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNFxcbiAqIFxcbiAqIDIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZVxcbiAqICAgIHNlbnNpYmx5IGJ5IGRlZmF1bHQgd2hlbiBvdmVycmlkaW5nIGBkaXNwbGF5YCBieSBhZGRpbmcgYVxcbiAqICAgIHV0aWxpdHkgbGlrZSBgaW5saW5lYC5cXG4gKlxcbiAqICAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50aW5nIGVycm9yIGluIHNvbWVcXG4gKiAgICB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiAqIFxcbiAqICAgIGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMFxcbiAqL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlXFxuICogdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby5cXG4gKlxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTRcXG4gKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiBFbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLG51bGxdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19lcnJvcicpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZCcpXG4iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkge1xuICBpZiAoa2V5IGluIG9iaikge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgb2JqW2tleV0gPSB2YWx1ZTtcbiAgfVxuXG4gIHJldHVybiBvYmo7XG59IiwidmFyIGhhc01hcCA9IHR5cGVvZiBNYXAgPT09ICdmdW5jdGlvbicgJiYgTWFwLnByb3RvdHlwZTtcbnZhciBtYXBTaXplRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgaGFzTWFwID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihNYXAucHJvdG90eXBlLCAnc2l6ZScpIDogbnVsbDtcbnZhciBtYXBTaXplID0gaGFzTWFwICYmIG1hcFNpemVEZXNjcmlwdG9yICYmIHR5cGVvZiBtYXBTaXplRGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicgPyBtYXBTaXplRGVzY3JpcHRvci5nZXQgOiBudWxsO1xudmFyIG1hcEZvckVhY2ggPSBoYXNNYXAgJiYgTWFwLnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIGhhc1NldCA9IHR5cGVvZiBTZXQgPT09ICdmdW5jdGlvbicgJiYgU2V0LnByb3RvdHlwZTtcbnZhciBzZXRTaXplRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgJiYgaGFzU2V0ID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihTZXQucHJvdG90eXBlLCAnc2l6ZScpIDogbnVsbDtcbnZhciBzZXRTaXplID0gaGFzU2V0ICYmIHNldFNpemVEZXNjcmlwdG9yICYmIHR5cGVvZiBzZXRTaXplRGVzY3JpcHRvci5nZXQgPT09ICdmdW5jdGlvbicgPyBzZXRTaXplRGVzY3JpcHRvci5nZXQgOiBudWxsO1xudmFyIHNldEZvckVhY2ggPSBoYXNTZXQgJiYgU2V0LnByb3RvdHlwZS5mb3JFYWNoO1xudmFyIGhhc1dlYWtNYXAgPSB0eXBlb2YgV2Vha01hcCA9PT0gJ2Z1bmN0aW9uJyAmJiBXZWFrTWFwLnByb3RvdHlwZTtcbnZhciB3ZWFrTWFwSGFzID0gaGFzV2Vha01hcCA/IFdlYWtNYXAucHJvdG90eXBlLmhhcyA6IG51bGw7XG52YXIgaGFzV2Vha1NldCA9IHR5cGVvZiBXZWFrU2V0ID09PSAnZnVuY3Rpb24nICYmIFdlYWtTZXQucHJvdG90eXBlO1xudmFyIHdlYWtTZXRIYXMgPSBoYXNXZWFrU2V0ID8gV2Vha1NldC5wcm90b3R5cGUuaGFzIDogbnVsbDtcbnZhciBoYXNXZWFrUmVmID0gdHlwZW9mIFdlYWtSZWYgPT09ICdmdW5jdGlvbicgJiYgV2Vha1JlZi5wcm90b3R5cGU7XG52YXIgd2Vha1JlZkRlcmVmID0gaGFzV2Vha1JlZiA/IFdlYWtSZWYucHJvdG90eXBlLmRlcmVmIDogbnVsbDtcbnZhciBib29sZWFuVmFsdWVPZiA9IEJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2Y7XG52YXIgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xudmFyIGZ1bmN0aW9uVG9TdHJpbmcgPSBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIgbWF0Y2ggPSBTdHJpbmcucHJvdG90eXBlLm1hdGNoO1xudmFyIGJpZ0ludFZhbHVlT2YgPSB0eXBlb2YgQmlnSW50ID09PSAnZnVuY3Rpb24nID8gQmlnSW50LnByb3RvdHlwZS52YWx1ZU9mIDogbnVsbDtcbnZhciBnT1BTID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBzeW1Ub1N0cmluZyA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gJ3N5bWJvbCcgPyBTeW1ib2wucHJvdG90eXBlLnRvU3RyaW5nIDogbnVsbDtcbnZhciBpc0VudW1lcmFibGUgPSBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlO1xuXG52YXIgZ1BPID0gKHR5cGVvZiBSZWZsZWN0ID09PSAnZnVuY3Rpb24nID8gUmVmbGVjdC5nZXRQcm90b3R5cGVPZiA6IE9iamVjdC5nZXRQcm90b3R5cGVPZikgfHwgKFxuICAgIFtdLl9fcHJvdG9fXyA9PT0gQXJyYXkucHJvdG90eXBlIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tcHJvdG9cbiAgICAgICAgPyBmdW5jdGlvbiAoTykge1xuICAgICAgICAgICAgcmV0dXJuIE8uX19wcm90b19fOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXByb3RvXG4gICAgICAgIH1cbiAgICAgICAgOiBudWxsXG4pO1xuXG52YXIgaW5zcGVjdEN1c3RvbSA9IHJlcXVpcmUoJy4vdXRpbC5pbnNwZWN0JykuY3VzdG9tO1xudmFyIGluc3BlY3RTeW1ib2wgPSBpbnNwZWN0Q3VzdG9tICYmIGlzU3ltYm9sKGluc3BlY3RDdXN0b20pID8gaW5zcGVjdEN1c3RvbSA6IG51bGw7XG52YXIgdG9TdHJpbmdUYWcgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBTeW1ib2wudG9TdHJpbmdUYWcgPT09ICdzeW1ib2wnID8gU3ltYm9sLnRvU3RyaW5nVGFnIDogbnVsbDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpbnNwZWN0XyhvYmosIG9wdGlvbnMsIGRlcHRoLCBzZWVuKSB7XG4gICAgdmFyIG9wdHMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgaWYgKGhhcyhvcHRzLCAncXVvdGVTdHlsZScpICYmIChvcHRzLnF1b3RlU3R5bGUgIT09ICdzaW5nbGUnICYmIG9wdHMucXVvdGVTdHlsZSAhPT0gJ2RvdWJsZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBcInF1b3RlU3R5bGVcIiBtdXN0IGJlIFwic2luZ2xlXCIgb3IgXCJkb3VibGVcIicpO1xuICAgIH1cbiAgICBpZiAoXG4gICAgICAgIGhhcyhvcHRzLCAnbWF4U3RyaW5nTGVuZ3RoJykgJiYgKHR5cGVvZiBvcHRzLm1heFN0cmluZ0xlbmd0aCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgID8gb3B0cy5tYXhTdHJpbmdMZW5ndGggPCAwICYmIG9wdHMubWF4U3RyaW5nTGVuZ3RoICE9PSBJbmZpbml0eVxuICAgICAgICAgICAgOiBvcHRzLm1heFN0cmluZ0xlbmd0aCAhPT0gbnVsbFxuICAgICAgICApXG4gICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbiBcIm1heFN0cmluZ0xlbmd0aFwiLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBhIHBvc2l0aXZlIGludGVnZXIsIEluZmluaXR5LCBvciBgbnVsbGAnKTtcbiAgICB9XG4gICAgdmFyIGN1c3RvbUluc3BlY3QgPSBoYXMob3B0cywgJ2N1c3RvbUluc3BlY3QnKSA/IG9wdHMuY3VzdG9tSW5zcGVjdCA6IHRydWU7XG4gICAgaWYgKHR5cGVvZiBjdXN0b21JbnNwZWN0ICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignb3B0aW9uIFwiY3VzdG9tSW5zcGVjdFwiLCBpZiBwcm92aWRlZCwgbXVzdCBiZSBgdHJ1ZWAgb3IgYGZhbHNlYCcpO1xuICAgIH1cblxuICAgIGlmIChcbiAgICAgICAgaGFzKG9wdHMsICdpbmRlbnQnKVxuICAgICAgICAmJiBvcHRzLmluZGVudCAhPT0gbnVsbFxuICAgICAgICAmJiBvcHRzLmluZGVudCAhPT0gJ1xcdCdcbiAgICAgICAgJiYgIShwYXJzZUludChvcHRzLmluZGVudCwgMTApID09PSBvcHRzLmluZGVudCAmJiBvcHRzLmluZGVudCA+IDApXG4gICAgKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ29wdGlvbnMgXCJpbmRlbnRcIiBtdXN0IGJlIFwiXFxcXHRcIiwgYW4gaW50ZWdlciA+IDAsIG9yIGBudWxsYCcpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gJ3VuZGVmaW5lZCc7XG4gICAgfVxuICAgIGlmIChvYmogPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICdudWxsJztcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdib29sZWFuJykge1xuICAgICAgICByZXR1cm4gb2JqID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGluc3BlY3RTdHJpbmcob2JqLCBvcHRzKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdudW1iZXInKSB7XG4gICAgICAgIGlmIChvYmogPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBJbmZpbml0eSAvIG9iaiA+IDAgPyAnMCcgOiAnLTAnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcob2JqKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdiaWdpbnQnKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcob2JqKSArICduJztcbiAgICB9XG5cbiAgICB2YXIgbWF4RGVwdGggPSB0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ3VuZGVmaW5lZCcgPyA1IDogb3B0cy5kZXB0aDtcbiAgICBpZiAodHlwZW9mIGRlcHRoID09PSAndW5kZWZpbmVkJykgeyBkZXB0aCA9IDA7IH1cbiAgICBpZiAoZGVwdGggPj0gbWF4RGVwdGggJiYgbWF4RGVwdGggPiAwICYmIHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBpc0FycmF5KG9iaikgPyAnW0FycmF5XScgOiAnW09iamVjdF0nO1xuICAgIH1cblxuICAgIHZhciBpbmRlbnQgPSBnZXRJbmRlbnQob3B0cywgZGVwdGgpO1xuXG4gICAgaWYgKHR5cGVvZiBzZWVuID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBzZWVuID0gW107XG4gICAgfSBlbHNlIGlmIChpbmRleE9mKHNlZW4sIG9iaikgPj0gMCkge1xuICAgICAgICByZXR1cm4gJ1tDaXJjdWxhcl0nO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluc3BlY3QodmFsdWUsIGZyb20sIG5vSW5kZW50KSB7XG4gICAgICAgIGlmIChmcm9tKSB7XG4gICAgICAgICAgICBzZWVuID0gc2Vlbi5zbGljZSgpO1xuICAgICAgICAgICAgc2Vlbi5wdXNoKGZyb20pO1xuICAgICAgICB9XG4gICAgICAgIGlmIChub0luZGVudCkge1xuICAgICAgICAgICAgdmFyIG5ld09wdHMgPSB7XG4gICAgICAgICAgICAgICAgZGVwdGg6IG9wdHMuZGVwdGhcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoaGFzKG9wdHMsICdxdW90ZVN0eWxlJykpIHtcbiAgICAgICAgICAgICAgICBuZXdPcHRzLnF1b3RlU3R5bGUgPSBvcHRzLnF1b3RlU3R5bGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaW5zcGVjdF8odmFsdWUsIG5ld09wdHMsIGRlcHRoICsgMSwgc2Vlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3BlY3RfKHZhbHVlLCBvcHRzLCBkZXB0aCArIDEsIHNlZW4pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHZhciBuYW1lID0gbmFtZU9mKG9iaik7XG4gICAgICAgIHZhciBrZXlzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICByZXR1cm4gJ1tGdW5jdGlvbicgKyAobmFtZSA/ICc6ICcgKyBuYW1lIDogJyAoYW5vbnltb3VzKScpICsgJ10nICsgKGtleXMubGVuZ3RoID4gMCA/ICcgeyAnICsga2V5cy5qb2luKCcsICcpICsgJyB9JyA6ICcnKTtcbiAgICB9XG4gICAgaWYgKGlzU3ltYm9sKG9iaikpIHtcbiAgICAgICAgdmFyIHN5bVN0cmluZyA9IHN5bVRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnID8gbWFya0JveGVkKHN5bVN0cmluZykgOiBzeW1TdHJpbmc7XG4gICAgfVxuICAgIGlmIChpc0VsZW1lbnQob2JqKSkge1xuICAgICAgICB2YXIgcyA9ICc8JyArIFN0cmluZyhvYmoubm9kZU5hbWUpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBhdHRycyA9IG9iai5hdHRyaWJ1dGVzIHx8IFtdO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGF0dHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBzICs9ICcgJyArIGF0dHJzW2ldLm5hbWUgKyAnPScgKyB3cmFwUXVvdGVzKHF1b3RlKGF0dHJzW2ldLnZhbHVlKSwgJ2RvdWJsZScsIG9wdHMpO1xuICAgICAgICB9XG4gICAgICAgIHMgKz0gJz4nO1xuICAgICAgICBpZiAob2JqLmNoaWxkTm9kZXMgJiYgb2JqLmNoaWxkTm9kZXMubGVuZ3RoKSB7IHMgKz0gJy4uLic7IH1cbiAgICAgICAgcyArPSAnPC8nICsgU3RyaW5nKG9iai5ub2RlTmFtZSkudG9Mb3dlckNhc2UoKSArICc+JztcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgaWYgKG9iai5sZW5ndGggPT09IDApIHsgcmV0dXJuICdbXSc7IH1cbiAgICAgICAgdmFyIHhzID0gYXJyT2JqS2V5cyhvYmosIGluc3BlY3QpO1xuICAgICAgICBpZiAoaW5kZW50ICYmICFzaW5nbGVMaW5lVmFsdWVzKHhzKSkge1xuICAgICAgICAgICAgcmV0dXJuICdbJyArIGluZGVudGVkSm9pbih4cywgaW5kZW50KSArICddJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJ1sgJyArIHhzLmpvaW4oJywgJykgKyAnIF0nO1xuICAgIH1cbiAgICBpZiAoaXNFcnJvcihvYmopKSB7XG4gICAgICAgIHZhciBwYXJ0cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMCkgeyByZXR1cm4gJ1snICsgU3RyaW5nKG9iaikgKyAnXSc7IH1cbiAgICAgICAgcmV0dXJuICd7IFsnICsgU3RyaW5nKG9iaikgKyAnXSAnICsgcGFydHMuam9pbignLCAnKSArICcgfSc7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBjdXN0b21JbnNwZWN0KSB7XG4gICAgICAgIGlmIChpbnNwZWN0U3ltYm9sICYmIHR5cGVvZiBvYmpbaW5zcGVjdFN5bWJvbF0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmpbaW5zcGVjdFN5bWJvbF0oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqLmluc3BlY3QgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiBvYmouaW5zcGVjdCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc01hcChvYmopKSB7XG4gICAgICAgIHZhciBtYXBQYXJ0cyA9IFtdO1xuICAgICAgICBtYXBGb3JFYWNoLmNhbGwob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgbWFwUGFydHMucHVzaChpbnNwZWN0KGtleSwgb2JqLCB0cnVlKSArICcgPT4gJyArIGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25PZignTWFwJywgbWFwU2l6ZS5jYWxsKG9iaiksIG1hcFBhcnRzLCBpbmRlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNTZXQob2JqKSkge1xuICAgICAgICB2YXIgc2V0UGFydHMgPSBbXTtcbiAgICAgICAgc2V0Rm9yRWFjaC5jYWxsKG9iaiwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICBzZXRQYXJ0cy5wdXNoKGluc3BlY3QodmFsdWUsIG9iaikpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb25PZignU2V0Jywgc2V0U2l6ZS5jYWxsKG9iaiksIHNldFBhcnRzLCBpbmRlbnQpO1xuICAgIH1cbiAgICBpZiAoaXNXZWFrTWFwKG9iaikpIHtcbiAgICAgICAgcmV0dXJuIHdlYWtDb2xsZWN0aW9uT2YoJ1dlYWtNYXAnKTtcbiAgICB9XG4gICAgaWYgKGlzV2Vha1NldChvYmopKSB7XG4gICAgICAgIHJldHVybiB3ZWFrQ29sbGVjdGlvbk9mKCdXZWFrU2V0Jyk7XG4gICAgfVxuICAgIGlmIChpc1dlYWtSZWYob2JqKSkge1xuICAgICAgICByZXR1cm4gd2Vha0NvbGxlY3Rpb25PZignV2Vha1JlZicpO1xuICAgIH1cbiAgICBpZiAoaXNOdW1iZXIob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGluc3BlY3QoTnVtYmVyKG9iaikpKTtcbiAgICB9XG4gICAgaWYgKGlzQmlnSW50KG9iaikpIHtcbiAgICAgICAgcmV0dXJuIG1hcmtCb3hlZChpbnNwZWN0KGJpZ0ludFZhbHVlT2YuY2FsbChvYmopKSk7XG4gICAgfVxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICByZXR1cm4gbWFya0JveGVkKGJvb2xlYW5WYWx1ZU9mLmNhbGwob2JqKSk7XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhvYmopKSB7XG4gICAgICAgIHJldHVybiBtYXJrQm94ZWQoaW5zcGVjdChTdHJpbmcob2JqKSkpO1xuICAgIH1cbiAgICBpZiAoIWlzRGF0ZShvYmopICYmICFpc1JlZ0V4cChvYmopKSB7XG4gICAgICAgIHZhciB5cyA9IGFyck9iaktleXMob2JqLCBpbnNwZWN0KTtcbiAgICAgICAgdmFyIGlzUGxhaW5PYmplY3QgPSBnUE8gPyBnUE8ob2JqKSA9PT0gT2JqZWN0LnByb3RvdHlwZSA6IG9iaiBpbnN0YW5jZW9mIE9iamVjdCB8fCBvYmouY29uc3RydWN0b3IgPT09IE9iamVjdDtcbiAgICAgICAgdmFyIHByb3RvVGFnID0gb2JqIGluc3RhbmNlb2YgT2JqZWN0ID8gJycgOiAnbnVsbCBwcm90b3R5cGUnO1xuICAgICAgICB2YXIgc3RyaW5nVGFnID0gIWlzUGxhaW5PYmplY3QgJiYgdG9TdHJpbmdUYWcgJiYgT2JqZWN0KG9iaikgPT09IG9iaiAmJiB0b1N0cmluZ1RhZyBpbiBvYmogPyB0b1N0cihvYmopLnNsaWNlKDgsIC0xKSA6IHByb3RvVGFnID8gJ09iamVjdCcgOiAnJztcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yVGFnID0gaXNQbGFpbk9iamVjdCB8fCB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yICE9PSAnZnVuY3Rpb24nID8gJycgOiBvYmouY29uc3RydWN0b3IubmFtZSA/IG9iai5jb25zdHJ1Y3Rvci5uYW1lICsgJyAnIDogJyc7XG4gICAgICAgIHZhciB0YWcgPSBjb25zdHJ1Y3RvclRhZyArIChzdHJpbmdUYWcgfHwgcHJvdG9UYWcgPyAnWycgKyBbXS5jb25jYXQoc3RyaW5nVGFnIHx8IFtdLCBwcm90b1RhZyB8fCBbXSkuam9pbignOiAnKSArICddICcgOiAnJyk7XG4gICAgICAgIGlmICh5cy5sZW5ndGggPT09IDApIHsgcmV0dXJuIHRhZyArICd7fSc7IH1cbiAgICAgICAgaWYgKGluZGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIHRhZyArICd7JyArIGluZGVudGVkSm9pbih5cywgaW5kZW50KSArICd9JztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFnICsgJ3sgJyArIHlzLmpvaW4oJywgJykgKyAnIH0nO1xuICAgIH1cbiAgICByZXR1cm4gU3RyaW5nKG9iaik7XG59O1xuXG5mdW5jdGlvbiB3cmFwUXVvdGVzKHMsIGRlZmF1bHRTdHlsZSwgb3B0cykge1xuICAgIHZhciBxdW90ZUNoYXIgPSAob3B0cy5xdW90ZVN0eWxlIHx8IGRlZmF1bHRTdHlsZSkgPT09ICdkb3VibGUnID8gJ1wiJyA6IFwiJ1wiO1xuICAgIHJldHVybiBxdW90ZUNoYXIgKyBzICsgcXVvdGVDaGFyO1xufVxuXG5mdW5jdGlvbiBxdW90ZShzKSB7XG4gICAgcmV0dXJuIFN0cmluZyhzKS5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBBcnJheV0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNEYXRlKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgRGF0ZV0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNSZWdFeHAob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBSZWdFeHBdJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzRXJyb3Iob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBFcnJvcl0nICYmICghdG9TdHJpbmdUYWcgfHwgISh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiB0b1N0cmluZ1RhZyBpbiBvYmopKTsgfVxuZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBTdHJpbmddJyAmJiAoIXRvU3RyaW5nVGFnIHx8ICEodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgdG9TdHJpbmdUYWcgaW4gb2JqKSk7IH1cbmZ1bmN0aW9uIGlzTnVtYmVyKG9iaikgeyByZXR1cm4gdG9TdHIob2JqKSA9PT0gJ1tvYmplY3QgTnVtYmVyXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5mdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSB7IHJldHVybiB0b1N0cihvYmopID09PSAnW29iamVjdCBCb29sZWFuXScgJiYgKCF0b1N0cmluZ1RhZyB8fCAhKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIHRvU3RyaW5nVGFnIGluIG9iaikpOyB9XG5cbi8vIFN5bWJvbCBhbmQgQmlnSW50IGRvIGhhdmUgU3ltYm9sLnRvU3RyaW5nVGFnIGJ5IHNwZWMsIHNvIHRoYXQgY2FuJ3QgYmUgdXNlZCB0byBlbGltaW5hdGUgZmFsc2UgcG9zaXRpdmVzXG5mdW5jdGlvbiBpc1N5bWJvbChvYmopIHtcbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8ICFzeW1Ub1N0cmluZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHN5bVRvU3RyaW5nLmNhbGwob2JqKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzQmlnSW50KG9iaikge1xuICAgIGlmICghb2JqIHx8IHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8ICFiaWdJbnRWYWx1ZU9mKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgYmlnSW50VmFsdWVPZi5jYWxsKG9iaik7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG52YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSB8fCBmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBrZXkgaW4gdGhpczsgfTtcbmZ1bmN0aW9uIGhhcyhvYmosIGtleSkge1xuICAgIHJldHVybiBoYXNPd24uY2FsbChvYmosIGtleSk7XG59XG5cbmZ1bmN0aW9uIHRvU3RyKG9iaikge1xuICAgIHJldHVybiBvYmplY3RUb1N0cmluZy5jYWxsKG9iaik7XG59XG5cbmZ1bmN0aW9uIG5hbWVPZihmKSB7XG4gICAgaWYgKGYubmFtZSkgeyByZXR1cm4gZi5uYW1lOyB9XG4gICAgdmFyIG0gPSBtYXRjaC5jYWxsKGZ1bmN0aW9uVG9TdHJpbmcuY2FsbChmKSwgL15mdW5jdGlvblxccyooW1xcdyRdKykvKTtcbiAgICBpZiAobSkgeyByZXR1cm4gbVsxXTsgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBpbmRleE9mKHhzLCB4KSB7XG4gICAgaWYgKHhzLmluZGV4T2YpIHsgcmV0dXJuIHhzLmluZGV4T2YoeCk7IH1cbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHhzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpZiAoeHNbaV0gPT09IHgpIHsgcmV0dXJuIGk7IH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBpc01hcCh4KSB7XG4gICAgaWYgKCFtYXBTaXplIHx8ICF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIG1hcFNpemUuY2FsbCh4KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldFNpemUuY2FsbCh4KTtcbiAgICAgICAgfSBjYXRjaCAocykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBNYXA7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1dlYWtNYXAoeCkge1xuICAgIGlmICghd2Vha01hcEhhcyB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB3ZWFrTWFwSGFzLmNhbGwoeCwgd2Vha01hcEhhcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3ZWFrU2V0SGFzLmNhbGwoeCwgd2Vha1NldEhhcyk7XG4gICAgICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgV2Vha01hcDsgLy8gY29yZS1qcyB3b3JrYXJvdW5kLCBwcmUtdjIuNS4wXG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzV2Vha1JlZih4KSB7XG4gICAgaWYgKCF3ZWFrUmVmRGVyZWYgfHwgIXggfHwgdHlwZW9mIHggIT09ICdvYmplY3QnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgd2Vha1JlZkRlcmVmLmNhbGwoeCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1NldCh4KSB7XG4gICAgaWYgKCFzZXRTaXplIHx8ICF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0Jykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIHNldFNpemUuY2FsbCh4KTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG1hcFNpemUuY2FsbCh4KTtcbiAgICAgICAgfSBjYXRjaCAobSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHggaW5zdGFuY2VvZiBTZXQ7IC8vIGNvcmUtanMgd29ya2Fyb3VuZCwgcHJlLXYyLjUuMFxuICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBpc1dlYWtTZXQoeCkge1xuICAgIGlmICghd2Vha1NldEhhcyB8fCAheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICB3ZWFrU2V0SGFzLmNhbGwoeCwgd2Vha1NldEhhcyk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3ZWFrTWFwSGFzLmNhbGwoeCwgd2Vha01hcEhhcyk7XG4gICAgICAgIH0gY2F0Y2ggKHMpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB4IGluc3RhbmNlb2YgV2Vha1NldDsgLy8gY29yZS1qcyB3b3JrYXJvdW5kLCBwcmUtdjIuNS4wXG4gICAgfSBjYXRjaCAoZSkge31cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudCh4KSB7XG4gICAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cbiAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB4IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0eXBlb2YgeC5ub2RlTmFtZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHguZ2V0QXR0cmlidXRlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpbnNwZWN0U3RyaW5nKHN0ciwgb3B0cykge1xuICAgIGlmIChzdHIubGVuZ3RoID4gb3B0cy5tYXhTdHJpbmdMZW5ndGgpIHtcbiAgICAgICAgdmFyIHJlbWFpbmluZyA9IHN0ci5sZW5ndGggLSBvcHRzLm1heFN0cmluZ0xlbmd0aDtcbiAgICAgICAgdmFyIHRyYWlsZXIgPSAnLi4uICcgKyByZW1haW5pbmcgKyAnIG1vcmUgY2hhcmFjdGVyJyArIChyZW1haW5pbmcgPiAxID8gJ3MnIDogJycpO1xuICAgICAgICByZXR1cm4gaW5zcGVjdFN0cmluZyhzdHIuc2xpY2UoMCwgb3B0cy5tYXhTdHJpbmdMZW5ndGgpLCBvcHRzKSArIHRyYWlsZXI7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250cm9sLXJlZ2V4XG4gICAgdmFyIHMgPSBzdHIucmVwbGFjZSgvKFsnXFxcXF0pL2csICdcXFxcJDEnKS5yZXBsYWNlKC9bXFx4MDAtXFx4MWZdL2csIGxvd2J5dGUpO1xuICAgIHJldHVybiB3cmFwUXVvdGVzKHMsICdzaW5nbGUnLCBvcHRzKTtcbn1cblxuZnVuY3Rpb24gbG93Ynl0ZShjKSB7XG4gICAgdmFyIG4gPSBjLmNoYXJDb2RlQXQoMCk7XG4gICAgdmFyIHggPSB7XG4gICAgICAgIDg6ICdiJyxcbiAgICAgICAgOTogJ3QnLFxuICAgICAgICAxMDogJ24nLFxuICAgICAgICAxMjogJ2YnLFxuICAgICAgICAxMzogJ3InXG4gICAgfVtuXTtcbiAgICBpZiAoeCkgeyByZXR1cm4gJ1xcXFwnICsgeDsgfVxuICAgIHJldHVybiAnXFxcXHgnICsgKG4gPCAweDEwID8gJzAnIDogJycpICsgbi50b1N0cmluZygxNikudG9VcHBlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gbWFya0JveGVkKHN0cikge1xuICAgIHJldHVybiAnT2JqZWN0KCcgKyBzdHIgKyAnKSc7XG59XG5cbmZ1bmN0aW9uIHdlYWtDb2xsZWN0aW9uT2YodHlwZSkge1xuICAgIHJldHVybiB0eXBlICsgJyB7ID8gfSc7XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3Rpb25PZih0eXBlLCBzaXplLCBlbnRyaWVzLCBpbmRlbnQpIHtcbiAgICB2YXIgam9pbmVkRW50cmllcyA9IGluZGVudCA/IGluZGVudGVkSm9pbihlbnRyaWVzLCBpbmRlbnQpIDogZW50cmllcy5qb2luKCcsICcpO1xuICAgIHJldHVybiB0eXBlICsgJyAoJyArIHNpemUgKyAnKSB7JyArIGpvaW5lZEVudHJpZXMgKyAnfSc7XG59XG5cbmZ1bmN0aW9uIHNpbmdsZUxpbmVWYWx1ZXMoeHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHhzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChpbmRleE9mKHhzW2ldLCAnXFxuJykgPj0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBnZXRJbmRlbnQob3B0cywgZGVwdGgpIHtcbiAgICB2YXIgYmFzZUluZGVudDtcbiAgICBpZiAob3B0cy5pbmRlbnQgPT09ICdcXHQnKSB7XG4gICAgICAgIGJhc2VJbmRlbnQgPSAnXFx0JztcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLmluZGVudCA9PT0gJ251bWJlcicgJiYgb3B0cy5pbmRlbnQgPiAwKSB7XG4gICAgICAgIGJhc2VJbmRlbnQgPSBBcnJheShvcHRzLmluZGVudCArIDEpLmpvaW4oJyAnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYmFzZTogYmFzZUluZGVudCxcbiAgICAgICAgcHJldjogQXJyYXkoZGVwdGggKyAxKS5qb2luKGJhc2VJbmRlbnQpXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gaW5kZW50ZWRKb2luKHhzLCBpbmRlbnQpIHtcbiAgICBpZiAoeHMubGVuZ3RoID09PSAwKSB7IHJldHVybiAnJzsgfVxuICAgIHZhciBsaW5lSm9pbmVyID0gJ1xcbicgKyBpbmRlbnQucHJldiArIGluZGVudC5iYXNlO1xuICAgIHJldHVybiBsaW5lSm9pbmVyICsgeHMuam9pbignLCcgKyBsaW5lSm9pbmVyKSArICdcXG4nICsgaW5kZW50LnByZXY7XG59XG5cbmZ1bmN0aW9uIGFyck9iaktleXMob2JqLCBpbnNwZWN0KSB7XG4gICAgdmFyIGlzQXJyID0gaXNBcnJheShvYmopO1xuICAgIHZhciB4cyA9IFtdO1xuICAgIGlmIChpc0Fycikge1xuICAgICAgICB4cy5sZW5ndGggPSBvYmoubGVuZ3RoO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgeHNbaV0gPSBoYXMob2JqLCBpKSA/IGluc3BlY3Qob2JqW2ldLCBvYmopIDogJyc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIga2V5IGluIG9iaikgeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICAgIGlmICghaGFzKG9iaiwga2V5KSkgeyBjb250aW51ZTsgfSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4LCBuby1jb250aW51ZVxuICAgICAgICBpZiAoaXNBcnIgJiYgU3RyaW5nKE51bWJlcihrZXkpKSA9PT0ga2V5ICYmIGtleSA8IG9iai5sZW5ndGgpIHsgY29udGludWU7IH0gLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheCwgbm8tY29udGludWVcbiAgICAgICAgaWYgKCgvW15cXHckXS8pLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgeHMucHVzaChpbnNwZWN0KGtleSwgb2JqKSArICc6ICcgKyBpbnNwZWN0KG9ialtrZXldLCBvYmopKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHhzLnB1c2goa2V5ICsgJzogJyArIGluc3BlY3Qob2JqW2tleV0sIG9iaikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgZ09QUyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB2YXIgc3ltcyA9IGdPUFMob2JqKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBzeW1zLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoaXNFbnVtZXJhYmxlLmNhbGwob2JqLCBzeW1zW2pdKSkge1xuICAgICAgICAgICAgICAgIHhzLnB1c2goJ1snICsgaW5zcGVjdChzeW1zW2pdKSArICddOiAnICsgaW5zcGVjdChvYmpbc3ltc1tqXV0sIG9iaikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB4cztcbn1cbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciByZXBsYWNlID0gU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlO1xudmFyIHBlcmNlbnRUd2VudGllcyA9IC8lMjAvZztcblxudmFyIEZvcm1hdCA9IHtcbiAgICBSRkMxNzM4OiAnUkZDMTczOCcsXG4gICAgUkZDMzk4NjogJ1JGQzM5ODYnXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnZGVmYXVsdCc6IEZvcm1hdC5SRkMzOTg2LFxuICAgIGZvcm1hdHRlcnM6IHtcbiAgICAgICAgUkZDMTczODogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwbGFjZS5jYWxsKHZhbHVlLCBwZXJjZW50VHdlbnRpZXMsICcrJyk7XG4gICAgICAgIH0sXG4gICAgICAgIFJGQzM5ODY6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFJGQzE3Mzg6IEZvcm1hdC5SRkMxNzM4LFxuICAgIFJGQzM5ODY6IEZvcm1hdC5SRkMzOTg2XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9zdHJpbmdpZnknKTtcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4vcGFyc2UnKTtcbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGZvcm1hdHM6IGZvcm1hdHMsXG4gICAgcGFyc2U6IHBhcnNlLFxuICAgIHN0cmluZ2lmeTogc3RyaW5naWZ5XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKCcuL3V0aWxzJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWxsb3dEb3RzOiBmYWxzZSxcbiAgICBhbGxvd1Byb3RvdHlwZXM6IGZhbHNlLFxuICAgIGFsbG93U3BhcnNlOiBmYWxzZSxcbiAgICBhcnJheUxpbWl0OiAyMCxcbiAgICBjaGFyc2V0OiAndXRmLTgnLFxuICAgIGNoYXJzZXRTZW50aW5lbDogZmFsc2UsXG4gICAgY29tbWE6IGZhbHNlLFxuICAgIGRlY29kZXI6IHV0aWxzLmRlY29kZSxcbiAgICBkZWxpbWl0ZXI6ICcmJyxcbiAgICBkZXB0aDogNSxcbiAgICBpZ25vcmVRdWVyeVByZWZpeDogZmFsc2UsXG4gICAgaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzOiBmYWxzZSxcbiAgICBwYXJhbWV0ZXJMaW1pdDogMTAwMCxcbiAgICBwYXJzZUFycmF5czogdHJ1ZSxcbiAgICBwbGFpbk9iamVjdHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpbnRlcnByZXROdW1lcmljRW50aXRpZXMgPSBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8mIyhcXGQrKTsvZywgZnVuY3Rpb24gKCQwLCBudW1iZXJTdHIpIHtcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQobnVtYmVyU3RyLCAxMCkpO1xuICAgIH0pO1xufTtcblxudmFyIHBhcnNlQXJyYXlWYWx1ZSA9IGZ1bmN0aW9uICh2YWwsIG9wdGlvbnMpIHtcbiAgICBpZiAodmFsICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIG9wdGlvbnMuY29tbWEgJiYgdmFsLmluZGV4T2YoJywnKSA+IC0xKSB7XG4gICAgICAgIHJldHVybiB2YWwuc3BsaXQoJywnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsO1xufTtcblxuLy8gVGhpcyBpcyB3aGF0IGJyb3dzZXJzIHdpbGwgc3VibWl0IHdoZW4gdGhlIOKckyBjaGFyYWN0ZXIgb2NjdXJzIGluIGFuXG4vLyBhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQgYm9keSBhbmQgdGhlIGVuY29kaW5nIG9mIHRoZSBwYWdlIGNvbnRhaW5pbmdcbi8vIHRoZSBmb3JtIGlzIGlzby04ODU5LTEsIG9yIHdoZW4gdGhlIHN1Ym1pdHRlZCBmb3JtIGhhcyBhbiBhY2NlcHQtY2hhcnNldFxuLy8gYXR0cmlidXRlIG9mIGlzby04ODU5LTEuIFByZXN1bWFibHkgYWxzbyB3aXRoIG90aGVyIGNoYXJzZXRzIHRoYXQgZG8gbm90IGNvbnRhaW5cbi8vIHRoZSDinJMgY2hhcmFjdGVyLCBzdWNoIGFzIHVzLWFzY2lpLlxudmFyIGlzb1NlbnRpbmVsID0gJ3V0Zjg9JTI2JTIzMTAwMDMlM0InOyAvLyBlbmNvZGVVUklDb21wb25lbnQoJyYjMTAwMDM7JylcblxuLy8gVGhlc2UgYXJlIHRoZSBwZXJjZW50LWVuY29kZWQgdXRmLTggb2N0ZXRzIHJlcHJlc2VudGluZyBhIGNoZWNrbWFyaywgaW5kaWNhdGluZyB0aGF0IHRoZSByZXF1ZXN0IGFjdHVhbGx5IGlzIHV0Zi04IGVuY29kZWQuXG52YXIgY2hhcnNldFNlbnRpbmVsID0gJ3V0Zjg9JUUyJTlDJTkzJzsgLy8gZW5jb2RlVVJJQ29tcG9uZW50KCfinJMnKVxuXG52YXIgcGFyc2VWYWx1ZXMgPSBmdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nVmFsdWVzKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgY2xlYW5TdHIgPSBvcHRpb25zLmlnbm9yZVF1ZXJ5UHJlZml4ID8gc3RyLnJlcGxhY2UoL15cXD8vLCAnJykgOiBzdHI7XG4gICAgdmFyIGxpbWl0ID0gb3B0aW9ucy5wYXJhbWV0ZXJMaW1pdCA9PT0gSW5maW5pdHkgPyB1bmRlZmluZWQgOiBvcHRpb25zLnBhcmFtZXRlckxpbWl0O1xuICAgIHZhciBwYXJ0cyA9IGNsZWFuU3RyLnNwbGl0KG9wdGlvbnMuZGVsaW1pdGVyLCBsaW1pdCk7XG4gICAgdmFyIHNraXBJbmRleCA9IC0xOyAvLyBLZWVwIHRyYWNrIG9mIHdoZXJlIHRoZSB1dGY4IHNlbnRpbmVsIHdhcyBmb3VuZFxuICAgIHZhciBpO1xuXG4gICAgdmFyIGNoYXJzZXQgPSBvcHRpb25zLmNoYXJzZXQ7XG4gICAgaWYgKG9wdGlvbnMuY2hhcnNldFNlbnRpbmVsKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHBhcnRzW2ldLmluZGV4T2YoJ3V0Zjg9JykgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAocGFydHNbaV0gPT09IGNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ3V0Zi04JztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhcnRzW2ldID09PSBpc29TZW50aW5lbCkge1xuICAgICAgICAgICAgICAgICAgICBjaGFyc2V0ID0gJ2lzby04ODU5LTEnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBza2lwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGkgPSBwYXJ0cy5sZW5ndGg7IC8vIFRoZSBlc2xpbnQgc2V0dGluZ3MgZG8gbm90IGFsbG93IGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmIChpID09PSBza2lwSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciBwYXJ0ID0gcGFydHNbaV07XG5cbiAgICAgICAgdmFyIGJyYWNrZXRFcXVhbHNQb3MgPSBwYXJ0LmluZGV4T2YoJ109Jyk7XG4gICAgICAgIHZhciBwb3MgPSBicmFja2V0RXF1YWxzUG9zID09PSAtMSA/IHBhcnQuaW5kZXhPZignPScpIDogYnJhY2tldEVxdWFsc1BvcyArIDE7XG5cbiAgICAgICAgdmFyIGtleSwgdmFsO1xuICAgICAgICBpZiAocG9zID09PSAtMSkge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQsIGRlZmF1bHRzLmRlY29kZXIsIGNoYXJzZXQsICdrZXknKTtcbiAgICAgICAgICAgIHZhbCA9IG9wdGlvbnMuc3RyaWN0TnVsbEhhbmRsaW5nID8gbnVsbCA6ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAga2V5ID0gb3B0aW9ucy5kZWNvZGVyKHBhcnQuc2xpY2UoMCwgcG9zKSwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCwgJ2tleScpO1xuICAgICAgICAgICAgdmFsID0gdXRpbHMubWF5YmVNYXAoXG4gICAgICAgICAgICAgICAgcGFyc2VBcnJheVZhbHVlKHBhcnQuc2xpY2UocG9zICsgMSksIG9wdGlvbnMpLFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChlbmNvZGVkVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRlY29kZXIoZW5jb2RlZFZhbCwgZGVmYXVsdHMuZGVjb2RlciwgY2hhcnNldCwgJ3ZhbHVlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWwgJiYgb3B0aW9ucy5pbnRlcnByZXROdW1lcmljRW50aXRpZXMgJiYgY2hhcnNldCA9PT0gJ2lzby04ODU5LTEnKSB7XG4gICAgICAgICAgICB2YWwgPSBpbnRlcnByZXROdW1lcmljRW50aXRpZXModmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJ0LmluZGV4T2YoJ1tdPScpID4gLTEpIHtcbiAgICAgICAgICAgIHZhbCA9IGlzQXJyYXkodmFsKSA/IFt2YWxdIDogdmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhcy5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB1dGlscy5jb21iaW5lKG9ialtrZXldLCB2YWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB2YWw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufTtcblxudmFyIHBhcnNlT2JqZWN0ID0gZnVuY3Rpb24gKGNoYWluLCB2YWwsIG9wdGlvbnMsIHZhbHVlc1BhcnNlZCkge1xuICAgIHZhciBsZWFmID0gdmFsdWVzUGFyc2VkID8gdmFsIDogcGFyc2VBcnJheVZhbHVlKHZhbCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBpID0gY2hhaW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgdmFyIHJvb3QgPSBjaGFpbltpXTtcblxuICAgICAgICBpZiAocm9vdCA9PT0gJ1tdJyAmJiBvcHRpb25zLnBhcnNlQXJyYXlzKSB7XG4gICAgICAgICAgICBvYmogPSBbXS5jb25jYXQobGVhZik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvYmogPSBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICAgICAgICAgIHZhciBjbGVhblJvb3QgPSByb290LmNoYXJBdCgwKSA9PT0gJ1snICYmIHJvb3QuY2hhckF0KHJvb3QubGVuZ3RoIC0gMSkgPT09ICddJyA/IHJvb3Quc2xpY2UoMSwgLTEpIDogcm9vdDtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcnNlSW50KGNsZWFuUm9vdCwgMTApO1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLnBhcnNlQXJyYXlzICYmIGNsZWFuUm9vdCA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBvYmogPSB7IDA6IGxlYWYgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICAgICAgIWlzTmFOKGluZGV4KVxuICAgICAgICAgICAgICAgICYmIHJvb3QgIT09IGNsZWFuUm9vdFxuICAgICAgICAgICAgICAgICYmIFN0cmluZyhpbmRleCkgPT09IGNsZWFuUm9vdFxuICAgICAgICAgICAgICAgICYmIGluZGV4ID49IDBcbiAgICAgICAgICAgICAgICAmJiAob3B0aW9ucy5wYXJzZUFycmF5cyAmJiBpbmRleCA8PSBvcHRpb25zLmFycmF5TGltaXQpXG4gICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBvYmogPSBbXTtcbiAgICAgICAgICAgICAgICBvYmpbaW5kZXhdID0gbGVhZjtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2xlYW5Sb290ICE9PSAnX19wcm90b19fJykge1xuICAgICAgICAgICAgICAgIG9ialtjbGVhblJvb3RdID0gbGVhZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxlYWYgPSBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxlYWY7XG59O1xuXG52YXIgcGFyc2VLZXlzID0gZnVuY3Rpb24gcGFyc2VRdWVyeVN0cmluZ0tleXMoZ2l2ZW5LZXksIHZhbCwgb3B0aW9ucywgdmFsdWVzUGFyc2VkKSB7XG4gICAgaWYgKCFnaXZlbktleSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVHJhbnNmb3JtIGRvdCBub3RhdGlvbiB0byBicmFja2V0IG5vdGF0aW9uXG4gICAgdmFyIGtleSA9IG9wdGlvbnMuYWxsb3dEb3RzID8gZ2l2ZW5LZXkucmVwbGFjZSgvXFwuKFteLltdKykvZywgJ1skMV0nKSA6IGdpdmVuS2V5O1xuXG4gICAgLy8gVGhlIHJlZ2V4IGNodW5rc1xuXG4gICAgdmFyIGJyYWNrZXRzID0gLyhcXFtbXltcXF1dKl0pLztcbiAgICB2YXIgY2hpbGQgPSAvKFxcW1teW1xcXV0qXSkvZztcblxuICAgIC8vIEdldCB0aGUgcGFyZW50XG5cbiAgICB2YXIgc2VnbWVudCA9IG9wdGlvbnMuZGVwdGggPiAwICYmIGJyYWNrZXRzLmV4ZWMoa2V5KTtcbiAgICB2YXIgcGFyZW50ID0gc2VnbWVudCA/IGtleS5zbGljZSgwLCBzZWdtZW50LmluZGV4KSA6IGtleTtcblxuICAgIC8vIFN0YXNoIHRoZSBwYXJlbnQgaWYgaXQgZXhpc3RzXG5cbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgLy8gSWYgd2UgYXJlbid0IHVzaW5nIHBsYWluIG9iamVjdHMsIG9wdGlvbmFsbHkgcHJlZml4IGtleXMgdGhhdCB3b3VsZCBvdmVyd3JpdGUgb2JqZWN0IHByb3RvdHlwZSBwcm9wZXJ0aWVzXG4gICAgICAgIGlmICghb3B0aW9ucy5wbGFpbk9iamVjdHMgJiYgaGFzLmNhbGwoT2JqZWN0LnByb3RvdHlwZSwgcGFyZW50KSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFsbG93UHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGtleXMucHVzaChwYXJlbnQpO1xuICAgIH1cblxuICAgIC8vIExvb3AgdGhyb3VnaCBjaGlsZHJlbiBhcHBlbmRpbmcgdG8gdGhlIGFycmF5IHVudGlsIHdlIGhpdCBkZXB0aFxuXG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChvcHRpb25zLmRlcHRoID4gMCAmJiAoc2VnbWVudCA9IGNoaWxkLmV4ZWMoa2V5KSkgIT09IG51bGwgJiYgaSA8IG9wdGlvbnMuZGVwdGgpIHtcbiAgICAgICAgaSArPSAxO1xuICAgICAgICBpZiAoIW9wdGlvbnMucGxhaW5PYmplY3RzICYmIGhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNlZ21lbnRbMV0uc2xpY2UoMSwgLTEpKSkge1xuICAgICAgICAgICAgaWYgKCFvcHRpb25zLmFsbG93UHJvdG90eXBlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBrZXlzLnB1c2goc2VnbWVudFsxXSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlcmUncyBhIHJlbWFpbmRlciwganVzdCBhZGQgd2hhdGV2ZXIgaXMgbGVmdFxuXG4gICAgaWYgKHNlZ21lbnQpIHtcbiAgICAgICAga2V5cy5wdXNoKCdbJyArIGtleS5zbGljZShzZWdtZW50LmluZGV4KSArICddJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlT2JqZWN0KGtleXMsIHZhbCwgb3B0aW9ucywgdmFsdWVzUGFyc2VkKTtcbn07XG5cbnZhciBub3JtYWxpemVQYXJzZU9wdGlvbnMgPSBmdW5jdGlvbiBub3JtYWxpemVQYXJzZU9wdGlvbnMob3B0cykge1xuICAgIGlmICghb3B0cykge1xuICAgICAgICByZXR1cm4gZGVmYXVsdHM7XG4gICAgfVxuXG4gICAgaWYgKG9wdHMuZGVjb2RlciAhPT0gbnVsbCAmJiBvcHRzLmRlY29kZXIgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0cy5kZWNvZGVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0RlY29kZXIgaGFzIHRvIGJlIGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHRzLmNoYXJzZXQgIT09ICd1bmRlZmluZWQnICYmIG9wdHMuY2hhcnNldCAhPT0gJ3V0Zi04JyAmJiBvcHRzLmNoYXJzZXQgIT09ICdpc28tODg1OS0xJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgY2hhcnNldCBvcHRpb24gbXVzdCBiZSBlaXRoZXIgdXRmLTgsIGlzby04ODU5LTEsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICB2YXIgY2hhcnNldCA9IHR5cGVvZiBvcHRzLmNoYXJzZXQgPT09ICd1bmRlZmluZWQnID8gZGVmYXVsdHMuY2hhcnNldCA6IG9wdHMuY2hhcnNldDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGFsbG93RG90czogdHlwZW9mIG9wdHMuYWxsb3dEb3RzID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmFsbG93RG90cyA6ICEhb3B0cy5hbGxvd0RvdHMsXG4gICAgICAgIGFsbG93UHJvdG90eXBlczogdHlwZW9mIG9wdHMuYWxsb3dQcm90b3R5cGVzID09PSAnYm9vbGVhbicgPyBvcHRzLmFsbG93UHJvdG90eXBlcyA6IGRlZmF1bHRzLmFsbG93UHJvdG90eXBlcyxcbiAgICAgICAgYWxsb3dTcGFyc2U6IHR5cGVvZiBvcHRzLmFsbG93U3BhcnNlID09PSAnYm9vbGVhbicgPyBvcHRzLmFsbG93U3BhcnNlIDogZGVmYXVsdHMuYWxsb3dTcGFyc2UsXG4gICAgICAgIGFycmF5TGltaXQ6IHR5cGVvZiBvcHRzLmFycmF5TGltaXQgPT09ICdudW1iZXInID8gb3B0cy5hcnJheUxpbWl0IDogZGVmYXVsdHMuYXJyYXlMaW1pdCxcbiAgICAgICAgY2hhcnNldDogY2hhcnNldCxcbiAgICAgICAgY2hhcnNldFNlbnRpbmVsOiB0eXBlb2Ygb3B0cy5jaGFyc2V0U2VudGluZWwgPT09ICdib29sZWFuJyA/IG9wdHMuY2hhcnNldFNlbnRpbmVsIDogZGVmYXVsdHMuY2hhcnNldFNlbnRpbmVsLFxuICAgICAgICBjb21tYTogdHlwZW9mIG9wdHMuY29tbWEgPT09ICdib29sZWFuJyA/IG9wdHMuY29tbWEgOiBkZWZhdWx0cy5jb21tYSxcbiAgICAgICAgZGVjb2RlcjogdHlwZW9mIG9wdHMuZGVjb2RlciA9PT0gJ2Z1bmN0aW9uJyA/IG9wdHMuZGVjb2RlciA6IGRlZmF1bHRzLmRlY29kZXIsXG4gICAgICAgIGRlbGltaXRlcjogdHlwZW9mIG9wdHMuZGVsaW1pdGVyID09PSAnc3RyaW5nJyB8fCB1dGlscy5pc1JlZ0V4cChvcHRzLmRlbGltaXRlcikgPyBvcHRzLmRlbGltaXRlciA6IGRlZmF1bHRzLmRlbGltaXRlcixcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWltcGxpY2l0LWNvZXJjaW9uLCBuby1leHRyYS1wYXJlbnNcbiAgICAgICAgZGVwdGg6ICh0eXBlb2Ygb3B0cy5kZXB0aCA9PT0gJ251bWJlcicgfHwgb3B0cy5kZXB0aCA9PT0gZmFsc2UpID8gK29wdHMuZGVwdGggOiBkZWZhdWx0cy5kZXB0aCxcbiAgICAgICAgaWdub3JlUXVlcnlQcmVmaXg6IG9wdHMuaWdub3JlUXVlcnlQcmVmaXggPT09IHRydWUsXG4gICAgICAgIGludGVycHJldE51bWVyaWNFbnRpdGllczogdHlwZW9mIG9wdHMuaW50ZXJwcmV0TnVtZXJpY0VudGl0aWVzID09PSAnYm9vbGVhbicgPyBvcHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyA6IGRlZmF1bHRzLmludGVycHJldE51bWVyaWNFbnRpdGllcyxcbiAgICAgICAgcGFyYW1ldGVyTGltaXQ6IHR5cGVvZiBvcHRzLnBhcmFtZXRlckxpbWl0ID09PSAnbnVtYmVyJyA/IG9wdHMucGFyYW1ldGVyTGltaXQgOiBkZWZhdWx0cy5wYXJhbWV0ZXJMaW1pdCxcbiAgICAgICAgcGFyc2VBcnJheXM6IG9wdHMucGFyc2VBcnJheXMgIT09IGZhbHNlLFxuICAgICAgICBwbGFpbk9iamVjdHM6IHR5cGVvZiBvcHRzLnBsYWluT2JqZWN0cyA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5wbGFpbk9iamVjdHMgOiBkZWZhdWx0cy5wbGFpbk9iamVjdHMsXG4gICAgICAgIHN0cmljdE51bGxIYW5kbGluZzogdHlwZW9mIG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nID09PSAnYm9vbGVhbicgPyBvcHRzLnN0cmljdE51bGxIYW5kbGluZyA6IGRlZmF1bHRzLnN0cmljdE51bGxIYW5kbGluZ1xuICAgIH07XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChzdHIsIG9wdHMpIHtcbiAgICB2YXIgb3B0aW9ucyA9IG5vcm1hbGl6ZVBhcnNlT3B0aW9ucyhvcHRzKTtcblxuICAgIGlmIChzdHIgPT09ICcnIHx8IHN0ciA9PT0gbnVsbCB8fCB0eXBlb2Ygc3RyID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gb3B0aW9ucy5wbGFpbk9iamVjdHMgPyBPYmplY3QuY3JlYXRlKG51bGwpIDoge307XG4gICAgfVxuXG4gICAgdmFyIHRlbXBPYmogPSB0eXBlb2Ygc3RyID09PSAnc3RyaW5nJyA/IHBhcnNlVmFsdWVzKHN0ciwgb3B0aW9ucykgOiBzdHI7XG4gICAgdmFyIG9iaiA9IG9wdGlvbnMucGxhaW5PYmplY3RzID8gT2JqZWN0LmNyZWF0ZShudWxsKSA6IHt9O1xuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSBrZXlzIGFuZCBzZXR1cCB0aGUgbmV3IG9iamVjdFxuXG4gICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyh0ZW1wT2JqKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciBuZXdPYmogPSBwYXJzZUtleXMoa2V5LCB0ZW1wT2JqW2tleV0sIG9wdGlvbnMsIHR5cGVvZiBzdHIgPT09ICdzdHJpbmcnKTtcbiAgICAgICAgb2JqID0gdXRpbHMubWVyZ2Uob2JqLCBuZXdPYmosIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLmFsbG93U3BhcnNlID09PSB0cnVlKSB7XG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIHV0aWxzLmNvbXBhY3Qob2JqKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBnZXRTaWRlQ2hhbm5lbCA9IHJlcXVpcmUoJ3NpZGUtY2hhbm5lbCcpO1xudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscycpO1xudmFyIGZvcm1hdHMgPSByZXF1aXJlKCcuL2Zvcm1hdHMnKTtcbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgYXJyYXlQcmVmaXhHZW5lcmF0b3JzID0ge1xuICAgIGJyYWNrZXRzOiBmdW5jdGlvbiBicmFja2V0cyhwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeCArICdbXSc7XG4gICAgfSxcbiAgICBjb21tYTogJ2NvbW1hJyxcbiAgICBpbmRpY2VzOiBmdW5jdGlvbiBpbmRpY2VzKHByZWZpeCwga2V5KSB7XG4gICAgICAgIHJldHVybiBwcmVmaXggKyAnWycgKyBrZXkgKyAnXSc7XG4gICAgfSxcbiAgICByZXBlYXQ6IGZ1bmN0aW9uIHJlcGVhdChwcmVmaXgpIHtcbiAgICAgICAgcmV0dXJuIHByZWZpeDtcbiAgICB9XG59O1xuXG52YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXk7XG52YXIgc3BsaXQgPSBTdHJpbmcucHJvdG90eXBlLnNwbGl0O1xudmFyIHB1c2ggPSBBcnJheS5wcm90b3R5cGUucHVzaDtcbnZhciBwdXNoVG9BcnJheSA9IGZ1bmN0aW9uIChhcnIsIHZhbHVlT3JBcnJheSkge1xuICAgIHB1c2guYXBwbHkoYXJyLCBpc0FycmF5KHZhbHVlT3JBcnJheSkgPyB2YWx1ZU9yQXJyYXkgOiBbdmFsdWVPckFycmF5XSk7XG59O1xuXG52YXIgdG9JU08gPSBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZztcblxudmFyIGRlZmF1bHRGb3JtYXQgPSBmb3JtYXRzWydkZWZhdWx0J107XG52YXIgZGVmYXVsdHMgPSB7XG4gICAgYWRkUXVlcnlQcmVmaXg6IGZhbHNlLFxuICAgIGFsbG93RG90czogZmFsc2UsXG4gICAgY2hhcnNldDogJ3V0Zi04JyxcbiAgICBjaGFyc2V0U2VudGluZWw6IGZhbHNlLFxuICAgIGRlbGltaXRlcjogJyYnLFxuICAgIGVuY29kZTogdHJ1ZSxcbiAgICBlbmNvZGVyOiB1dGlscy5lbmNvZGUsXG4gICAgZW5jb2RlVmFsdWVzT25seTogZmFsc2UsXG4gICAgZm9ybWF0OiBkZWZhdWx0Rm9ybWF0LFxuICAgIGZvcm1hdHRlcjogZm9ybWF0cy5mb3JtYXR0ZXJzW2RlZmF1bHRGb3JtYXRdLFxuICAgIC8vIGRlcHJlY2F0ZWRcbiAgICBpbmRpY2VzOiBmYWxzZSxcbiAgICBzZXJpYWxpemVEYXRlOiBmdW5jdGlvbiBzZXJpYWxpemVEYXRlKGRhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRvSVNPLmNhbGwoZGF0ZSk7XG4gICAgfSxcbiAgICBza2lwTnVsbHM6IGZhbHNlLFxuICAgIHN0cmljdE51bGxIYW5kbGluZzogZmFsc2Vcbn07XG5cbnZhciBpc05vbk51bGxpc2hQcmltaXRpdmUgPSBmdW5jdGlvbiBpc05vbk51bGxpc2hQcmltaXRpdmUodikge1xuICAgIHJldHVybiB0eXBlb2YgdiA9PT0gJ3N0cmluZydcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdudW1iZXInXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnYm9vbGVhbidcbiAgICAgICAgfHwgdHlwZW9mIHYgPT09ICdzeW1ib2wnXG4gICAgICAgIHx8IHR5cGVvZiB2ID09PSAnYmlnaW50Jztcbn07XG5cbnZhciBzZW50aW5lbCA9IHt9O1xuXG52YXIgc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KFxuICAgIG9iamVjdCxcbiAgICBwcmVmaXgsXG4gICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICBjb21tYVJvdW5kVHJpcCxcbiAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgc2tpcE51bGxzLFxuICAgIGVuY29kZXIsXG4gICAgZmlsdGVyLFxuICAgIHNvcnQsXG4gICAgYWxsb3dEb3RzLFxuICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgZm9ybWF0LFxuICAgIGZvcm1hdHRlcixcbiAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgIGNoYXJzZXQsXG4gICAgc2lkZUNoYW5uZWxcbikge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG5cbiAgICB2YXIgdG1wU2MgPSBzaWRlQ2hhbm5lbDtcbiAgICB2YXIgc3RlcCA9IDA7XG4gICAgdmFyIGZpbmRGbGFnID0gZmFsc2U7XG4gICAgd2hpbGUgKCh0bXBTYyA9IHRtcFNjLmdldChzZW50aW5lbCkpICE9PSB2b2lkIHVuZGVmaW5lZCAmJiAhZmluZEZsYWcpIHtcbiAgICAgICAgLy8gV2hlcmUgb2JqZWN0IGxhc3QgYXBwZWFyZWQgaW4gdGhlIHJlZiB0cmVlXG4gICAgICAgIHZhciBwb3MgPSB0bXBTYy5nZXQob2JqZWN0KTtcbiAgICAgICAgc3RlcCArPSAxO1xuICAgICAgICBpZiAodHlwZW9mIHBvcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGlmIChwb3MgPT09IHN0ZXApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignQ3ljbGljIG9iamVjdCB2YWx1ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmaW5kRmxhZyA9IHRydWU7IC8vIEJyZWFrIHdoaWxlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0bXBTYy5nZXQoc2VudGluZWwpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgc3RlcCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGZpbHRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBvYmogPSBmaWx0ZXIocHJlZml4LCBvYmopO1xuICAgIH0gZWxzZSBpZiAob2JqIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBvYmogPSBzZXJpYWxpemVEYXRlKG9iaik7XG4gICAgfSBlbHNlIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGlzQXJyYXkob2JqKSkge1xuICAgICAgICBvYmogPSB1dGlscy5tYXliZU1hcChvYmosIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZXJpYWxpemVEYXRlKHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoc3RyaWN0TnVsbEhhbmRsaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlciAmJiAhZW5jb2RlVmFsdWVzT25seSA/IGVuY29kZXIocHJlZml4LCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAna2V5JywgZm9ybWF0KSA6IHByZWZpeDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iaiA9ICcnO1xuICAgIH1cblxuICAgIGlmIChpc05vbk51bGxpc2hQcmltaXRpdmUob2JqKSB8fCB1dGlscy5pc0J1ZmZlcihvYmopKSB7XG4gICAgICAgIGlmIChlbmNvZGVyKSB7XG4gICAgICAgICAgICB2YXIga2V5VmFsdWUgPSBlbmNvZGVWYWx1ZXNPbmx5ID8gcHJlZml4IDogZW5jb2RlcihwcmVmaXgsIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICdrZXknLCBmb3JtYXQpO1xuICAgICAgICAgICAgaWYgKGdlbmVyYXRlQXJyYXlQcmVmaXggPT09ICdjb21tYScgJiYgZW5jb2RlVmFsdWVzT25seSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXNBcnJheSA9IHNwbGl0LmNhbGwoU3RyaW5nKG9iaiksICcsJyk7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlc0pvaW5lZCA9ICcnO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWVzQXJyYXkubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzSm9pbmVkICs9IChpID09PSAwID8gJycgOiAnLCcpICsgZm9ybWF0dGVyKGVuY29kZXIodmFsdWVzQXJyYXlbaV0sIGRlZmF1bHRzLmVuY29kZXIsIGNoYXJzZXQsICd2YWx1ZScsIGZvcm1hdCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gW2Zvcm1hdHRlcihrZXlWYWx1ZSkgKyAoY29tbWFSb3VuZFRyaXAgJiYgaXNBcnJheShvYmopICYmIHZhbHVlc0FycmF5Lmxlbmd0aCA9PT0gMSA/ICdbXScgOiAnJykgKyAnPScgKyB2YWx1ZXNKb2luZWRdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIoa2V5VmFsdWUpICsgJz0nICsgZm9ybWF0dGVyKGVuY29kZXIob2JqLCBkZWZhdWx0cy5lbmNvZGVyLCBjaGFyc2V0LCAndmFsdWUnLCBmb3JtYXQpKV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZXIocHJlZml4KSArICc9JyArIGZvcm1hdHRlcihTdHJpbmcob2JqKSldO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZXMgPSBbXTtcblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH1cblxuICAgIHZhciBvYmpLZXlzO1xuICAgIGlmIChnZW5lcmF0ZUFycmF5UHJlZml4ID09PSAnY29tbWEnICYmIGlzQXJyYXkob2JqKSkge1xuICAgICAgICAvLyB3ZSBuZWVkIHRvIGpvaW4gZWxlbWVudHMgaW5cbiAgICAgICAgb2JqS2V5cyA9IFt7IHZhbHVlOiBvYmoubGVuZ3RoID4gMCA/IG9iai5qb2luKCcsJykgfHwgbnVsbCA6IHZvaWQgdW5kZWZpbmVkIH1dO1xuICAgIH0gZWxzZSBpZiAoaXNBcnJheShmaWx0ZXIpKSB7XG4gICAgICAgIG9iaktleXMgPSBmaWx0ZXI7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBvYmpLZXlzID0gc29ydCA/IGtleXMuc29ydChzb3J0KSA6IGtleXM7XG4gICAgfVxuXG4gICAgdmFyIGFkanVzdGVkUHJlZml4ID0gY29tbWFSb3VuZFRyaXAgJiYgaXNBcnJheShvYmopICYmIG9iai5sZW5ndGggPT09IDEgPyBwcmVmaXggKyAnW10nIDogcHJlZml4O1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBvYmpLZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIHZhciBrZXkgPSBvYmpLZXlzW2pdO1xuICAgICAgICB2YXIgdmFsdWUgPSB0eXBlb2Yga2V5ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Yga2V5LnZhbHVlICE9PSAndW5kZWZpbmVkJyA/IGtleS52YWx1ZSA6IG9ialtrZXldO1xuXG4gICAgICAgIGlmIChza2lwTnVsbHMgJiYgdmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGtleVByZWZpeCA9IGlzQXJyYXkob2JqKVxuICAgICAgICAgICAgPyB0eXBlb2YgZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2Z1bmN0aW9uJyA/IGdlbmVyYXRlQXJyYXlQcmVmaXgoYWRqdXN0ZWRQcmVmaXgsIGtleSkgOiBhZGp1c3RlZFByZWZpeFxuICAgICAgICAgICAgOiBhZGp1c3RlZFByZWZpeCArIChhbGxvd0RvdHMgPyAnLicgKyBrZXkgOiAnWycgKyBrZXkgKyAnXScpO1xuXG4gICAgICAgIHNpZGVDaGFubmVsLnNldChvYmplY3QsIHN0ZXApO1xuICAgICAgICB2YXIgdmFsdWVTaWRlQ2hhbm5lbCA9IGdldFNpZGVDaGFubmVsKCk7XG4gICAgICAgIHZhbHVlU2lkZUNoYW5uZWwuc2V0KHNlbnRpbmVsLCBzaWRlQ2hhbm5lbCk7XG4gICAgICAgIHB1c2hUb0FycmF5KHZhbHVlcywgc3RyaW5naWZ5KFxuICAgICAgICAgICAgdmFsdWUsXG4gICAgICAgICAgICBrZXlQcmVmaXgsXG4gICAgICAgICAgICBnZW5lcmF0ZUFycmF5UHJlZml4LFxuICAgICAgICAgICAgY29tbWFSb3VuZFRyaXAsXG4gICAgICAgICAgICBzdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICBza2lwTnVsbHMsXG4gICAgICAgICAgICBlbmNvZGVyLFxuICAgICAgICAgICAgZmlsdGVyLFxuICAgICAgICAgICAgc29ydCxcbiAgICAgICAgICAgIGFsbG93RG90cyxcbiAgICAgICAgICAgIHNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICBmb3JtYXQsXG4gICAgICAgICAgICBmb3JtYXR0ZXIsXG4gICAgICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgY2hhcnNldCxcbiAgICAgICAgICAgIHZhbHVlU2lkZUNoYW5uZWxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlcztcbn07XG5cbnZhciBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zID0gZnVuY3Rpb24gbm9ybWFsaXplU3RyaW5naWZ5T3B0aW9ucyhvcHRzKSB7XG4gICAgaWYgKCFvcHRzKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0cztcbiAgICB9XG5cbiAgICBpZiAob3B0cy5lbmNvZGVyICE9PSBudWxsICYmIHR5cGVvZiBvcHRzLmVuY29kZXIgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBvcHRzLmVuY29kZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignRW5jb2RlciBoYXMgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICB2YXIgY2hhcnNldCA9IG9wdHMuY2hhcnNldCB8fCBkZWZhdWx0cy5jaGFyc2V0O1xuICAgIGlmICh0eXBlb2Ygb3B0cy5jaGFyc2V0ICE9PSAndW5kZWZpbmVkJyAmJiBvcHRzLmNoYXJzZXQgIT09ICd1dGYtOCcgJiYgb3B0cy5jaGFyc2V0ICE9PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIGNoYXJzZXQgb3B0aW9uIG11c3QgYmUgZWl0aGVyIHV0Zi04LCBpc28tODg1OS0xLCBvciB1bmRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0ID0gZm9ybWF0c1snZGVmYXVsdCddO1xuICAgIGlmICh0eXBlb2Ygb3B0cy5mb3JtYXQgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGlmICghaGFzLmNhbGwoZm9ybWF0cy5mb3JtYXR0ZXJzLCBvcHRzLmZvcm1hdCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1Vua25vd24gZm9ybWF0IG9wdGlvbiBwcm92aWRlZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JtYXQgPSBvcHRzLmZvcm1hdDtcbiAgICB9XG4gICAgdmFyIGZvcm1hdHRlciA9IGZvcm1hdHMuZm9ybWF0dGVyc1tmb3JtYXRdO1xuXG4gICAgdmFyIGZpbHRlciA9IGRlZmF1bHRzLmZpbHRlcjtcbiAgICBpZiAodHlwZW9mIG9wdHMuZmlsdGVyID09PSAnZnVuY3Rpb24nIHx8IGlzQXJyYXkob3B0cy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdHMuZmlsdGVyO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZFF1ZXJ5UHJlZml4OiB0eXBlb2Ygb3B0cy5hZGRRdWVyeVByZWZpeCA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5hZGRRdWVyeVByZWZpeCA6IGRlZmF1bHRzLmFkZFF1ZXJ5UHJlZml4LFxuICAgICAgICBhbGxvd0RvdHM6IHR5cGVvZiBvcHRzLmFsbG93RG90cyA9PT0gJ3VuZGVmaW5lZCcgPyBkZWZhdWx0cy5hbGxvd0RvdHMgOiAhIW9wdHMuYWxsb3dEb3RzLFxuICAgICAgICBjaGFyc2V0OiBjaGFyc2V0LFxuICAgICAgICBjaGFyc2V0U2VudGluZWw6IHR5cGVvZiBvcHRzLmNoYXJzZXRTZW50aW5lbCA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5jaGFyc2V0U2VudGluZWwgOiBkZWZhdWx0cy5jaGFyc2V0U2VudGluZWwsXG4gICAgICAgIGRlbGltaXRlcjogdHlwZW9mIG9wdHMuZGVsaW1pdGVyID09PSAndW5kZWZpbmVkJyA/IGRlZmF1bHRzLmRlbGltaXRlciA6IG9wdHMuZGVsaW1pdGVyLFxuICAgICAgICBlbmNvZGU6IHR5cGVvZiBvcHRzLmVuY29kZSA9PT0gJ2Jvb2xlYW4nID8gb3B0cy5lbmNvZGUgOiBkZWZhdWx0cy5lbmNvZGUsXG4gICAgICAgIGVuY29kZXI6IHR5cGVvZiBvcHRzLmVuY29kZXIgPT09ICdmdW5jdGlvbicgPyBvcHRzLmVuY29kZXIgOiBkZWZhdWx0cy5lbmNvZGVyLFxuICAgICAgICBlbmNvZGVWYWx1ZXNPbmx5OiB0eXBlb2Ygb3B0cy5lbmNvZGVWYWx1ZXNPbmx5ID09PSAnYm9vbGVhbicgPyBvcHRzLmVuY29kZVZhbHVlc09ubHkgOiBkZWZhdWx0cy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICBmaWx0ZXI6IGZpbHRlcixcbiAgICAgICAgZm9ybWF0OiBmb3JtYXQsXG4gICAgICAgIGZvcm1hdHRlcjogZm9ybWF0dGVyLFxuICAgICAgICBzZXJpYWxpemVEYXRlOiB0eXBlb2Ygb3B0cy5zZXJpYWxpemVEYXRlID09PSAnZnVuY3Rpb24nID8gb3B0cy5zZXJpYWxpemVEYXRlIDogZGVmYXVsdHMuc2VyaWFsaXplRGF0ZSxcbiAgICAgICAgc2tpcE51bGxzOiB0eXBlb2Ygb3B0cy5za2lwTnVsbHMgPT09ICdib29sZWFuJyA/IG9wdHMuc2tpcE51bGxzIDogZGVmYXVsdHMuc2tpcE51bGxzLFxuICAgICAgICBzb3J0OiB0eXBlb2Ygb3B0cy5zb3J0ID09PSAnZnVuY3Rpb24nID8gb3B0cy5zb3J0IDogbnVsbCxcbiAgICAgICAgc3RyaWN0TnVsbEhhbmRsaW5nOiB0eXBlb2Ygb3B0cy5zdHJpY3ROdWxsSGFuZGxpbmcgPT09ICdib29sZWFuJyA/IG9wdHMuc3RyaWN0TnVsbEhhbmRsaW5nIDogZGVmYXVsdHMuc3RyaWN0TnVsbEhhbmRsaW5nXG4gICAgfTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgb3B0cykge1xuICAgIHZhciBvYmogPSBvYmplY3Q7XG4gICAgdmFyIG9wdGlvbnMgPSBub3JtYWxpemVTdHJpbmdpZnlPcHRpb25zKG9wdHMpO1xuXG4gICAgdmFyIG9iaktleXM7XG4gICAgdmFyIGZpbHRlcjtcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5maWx0ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZmlsdGVyID0gb3B0aW9ucy5maWx0ZXI7XG4gICAgICAgIG9iaiA9IGZpbHRlcignJywgb2JqKTtcbiAgICB9IGVsc2UgaWYgKGlzQXJyYXkob3B0aW9ucy5maWx0ZXIpKSB7XG4gICAgICAgIGZpbHRlciA9IG9wdGlvbnMuZmlsdGVyO1xuICAgICAgICBvYmpLZXlzID0gZmlsdGVyO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gW107XG5cbiAgICBpZiAodHlwZW9mIG9iaiAhPT0gJ29iamVjdCcgfHwgb2JqID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJyYXlGb3JtYXQ7XG4gICAgaWYgKG9wdHMgJiYgb3B0cy5hcnJheUZvcm1hdCBpbiBhcnJheVByZWZpeEdlbmVyYXRvcnMpIHtcbiAgICAgICAgYXJyYXlGb3JtYXQgPSBvcHRzLmFycmF5Rm9ybWF0O1xuICAgIH0gZWxzZSBpZiAob3B0cyAmJiAnaW5kaWNlcycgaW4gb3B0cykge1xuICAgICAgICBhcnJheUZvcm1hdCA9IG9wdHMuaW5kaWNlcyA/ICdpbmRpY2VzJyA6ICdyZXBlYXQnO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGFycmF5Rm9ybWF0ID0gJ2luZGljZXMnO1xuICAgIH1cblxuICAgIHZhciBnZW5lcmF0ZUFycmF5UHJlZml4ID0gYXJyYXlQcmVmaXhHZW5lcmF0b3JzW2FycmF5Rm9ybWF0XTtcbiAgICBpZiAob3B0cyAmJiAnY29tbWFSb3VuZFRyaXAnIGluIG9wdHMgJiYgdHlwZW9mIG9wdHMuY29tbWFSb3VuZFRyaXAgIT09ICdib29sZWFuJykge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdgY29tbWFSb3VuZFRyaXBgIG11c3QgYmUgYSBib29sZWFuLCBvciBhYnNlbnQnKTtcbiAgICB9XG4gICAgdmFyIGNvbW1hUm91bmRUcmlwID0gZ2VuZXJhdGVBcnJheVByZWZpeCA9PT0gJ2NvbW1hJyAmJiBvcHRzICYmIG9wdHMuY29tbWFSb3VuZFRyaXA7XG5cbiAgICBpZiAoIW9iaktleXMpIHtcbiAgICAgICAgb2JqS2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMuc29ydCkge1xuICAgICAgICBvYmpLZXlzLnNvcnQob3B0aW9ucy5zb3J0KTtcbiAgICB9XG5cbiAgICB2YXIgc2lkZUNoYW5uZWwgPSBnZXRTaWRlQ2hhbm5lbCgpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqS2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIga2V5ID0gb2JqS2V5c1tpXTtcblxuICAgICAgICBpZiAob3B0aW9ucy5za2lwTnVsbHMgJiYgb2JqW2tleV0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHB1c2hUb0FycmF5KGtleXMsIHN0cmluZ2lmeShcbiAgICAgICAgICAgIG9ialtrZXldLFxuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZ2VuZXJhdGVBcnJheVByZWZpeCxcbiAgICAgICAgICAgIGNvbW1hUm91bmRUcmlwLFxuICAgICAgICAgICAgb3B0aW9ucy5zdHJpY3ROdWxsSGFuZGxpbmcsXG4gICAgICAgICAgICBvcHRpb25zLnNraXBOdWxscyxcbiAgICAgICAgICAgIG9wdGlvbnMuZW5jb2RlID8gb3B0aW9ucy5lbmNvZGVyIDogbnVsbCxcbiAgICAgICAgICAgIG9wdGlvbnMuZmlsdGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5zb3J0LFxuICAgICAgICAgICAgb3B0aW9ucy5hbGxvd0RvdHMsXG4gICAgICAgICAgICBvcHRpb25zLnNlcmlhbGl6ZURhdGUsXG4gICAgICAgICAgICBvcHRpb25zLmZvcm1hdCxcbiAgICAgICAgICAgIG9wdGlvbnMuZm9ybWF0dGVyLFxuICAgICAgICAgICAgb3B0aW9ucy5lbmNvZGVWYWx1ZXNPbmx5LFxuICAgICAgICAgICAgb3B0aW9ucy5jaGFyc2V0LFxuICAgICAgICAgICAgc2lkZUNoYW5uZWxcbiAgICAgICAgKSk7XG4gICAgfVxuXG4gICAgdmFyIGpvaW5lZCA9IGtleXMuam9pbihvcHRpb25zLmRlbGltaXRlcik7XG4gICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuYWRkUXVlcnlQcmVmaXggPT09IHRydWUgPyAnPycgOiAnJztcblxuICAgIGlmIChvcHRpb25zLmNoYXJzZXRTZW50aW5lbCkge1xuICAgICAgICBpZiAob3B0aW9ucy5jaGFyc2V0ID09PSAnaXNvLTg4NTktMScpIHtcbiAgICAgICAgICAgIC8vIGVuY29kZVVSSUNvbXBvbmVudCgnJiMxMDAwMzsnKSwgdGhlIFwibnVtZXJpYyBlbnRpdHlcIiByZXByZXNlbnRhdGlvbiBvZiBhIGNoZWNrbWFya1xuICAgICAgICAgICAgcHJlZml4ICs9ICd1dGY4PSUyNiUyMzEwMDAzJTNCJic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBlbmNvZGVVUklDb21wb25lbnQoJ+KckycpXG4gICAgICAgICAgICBwcmVmaXggKz0gJ3V0Zjg9JUUyJTlDJTkzJic7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gam9pbmVkLmxlbmd0aCA+IDAgPyBwcmVmaXggKyBqb2luZWQgOiAnJztcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciBmb3JtYXRzID0gcmVxdWlyZSgnLi9mb3JtYXRzJyk7XG5cbnZhciBoYXMgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xudmFyIGlzQXJyYXkgPSBBcnJheS5pc0FycmF5O1xuXG52YXIgaGV4VGFibGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBhcnJheSA9IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICAgICAgYXJyYXkucHVzaCgnJScgKyAoKGkgPCAxNiA/ICcwJyA6ICcnKSArIGkudG9TdHJpbmcoMTYpKS50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyYXk7XG59KCkpO1xuXG52YXIgY29tcGFjdFF1ZXVlID0gZnVuY3Rpb24gY29tcGFjdFF1ZXVlKHF1ZXVlKSB7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZS5wb3AoKTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICAgICAgdmFyIGNvbXBhY3RlZCA9IFtdO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IG9iai5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygb2JqW2pdICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wYWN0ZWQucHVzaChvYmpbal0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaXRlbS5vYmpbaXRlbS5wcm9wXSA9IGNvbXBhY3RlZDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbnZhciBhcnJheVRvT2JqZWN0ID0gZnVuY3Rpb24gYXJyYXlUb09iamVjdChzb3VyY2UsIG9wdGlvbnMpIHtcbiAgICB2YXIgb2JqID0gb3B0aW9ucyAmJiBvcHRpb25zLnBsYWluT2JqZWN0cyA/IE9iamVjdC5jcmVhdGUobnVsbCkgOiB7fTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNvdXJjZS5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIG9ialtpXSA9IHNvdXJjZVtpXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59O1xuXG52YXIgbWVyZ2UgPSBmdW5jdGlvbiBtZXJnZSh0YXJnZXQsIHNvdXJjZSwgb3B0aW9ucykge1xuICAgIC8qIGVzbGludCBuby1wYXJhbS1yZWFzc2lnbjogMCAqL1xuICAgIGlmICghc291cmNlKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBzb3VyY2UgIT09ICdvYmplY3QnKSB7XG4gICAgICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKHNvdXJjZSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ICYmIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpZiAoKG9wdGlvbnMgJiYgKG9wdGlvbnMucGxhaW5PYmplY3RzIHx8IG9wdGlvbnMuYWxsb3dQcm90b3R5cGVzKSkgfHwgIWhhcy5jYWxsKE9iamVjdC5wcm90b3R5cGUsIHNvdXJjZSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRbc291cmNlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gW3RhcmdldCwgc291cmNlXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgaWYgKCF0YXJnZXQgfHwgdHlwZW9mIHRhcmdldCAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIFt0YXJnZXRdLmNvbmNhdChzb3VyY2UpO1xuICAgIH1cblxuICAgIHZhciBtZXJnZVRhcmdldCA9IHRhcmdldDtcbiAgICBpZiAoaXNBcnJheSh0YXJnZXQpICYmICFpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgbWVyZ2VUYXJnZXQgPSBhcnJheVRvT2JqZWN0KHRhcmdldCwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSAmJiBpc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgICAgc291cmNlLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbCh0YXJnZXQsIGkpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRhcmdldEl0ZW0gPSB0YXJnZXRbaV07XG4gICAgICAgICAgICAgICAgaWYgKHRhcmdldEl0ZW0gJiYgdHlwZW9mIHRhcmdldEl0ZW0gPT09ICdvYmplY3QnICYmIGl0ZW0gJiYgdHlwZW9mIGl0ZW0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldFtpXSA9IG1lcmdlKHRhcmdldEl0ZW0sIGl0ZW0sIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2ldID0gaXRlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNvdXJjZSkucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSBzb3VyY2Vba2V5XTtcblxuICAgICAgICBpZiAoaGFzLmNhbGwoYWNjLCBrZXkpKSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IG1lcmdlKGFjY1trZXldLCB2YWx1ZSwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgbWVyZ2VUYXJnZXQpO1xufTtcblxudmFyIGFzc2lnbiA9IGZ1bmN0aW9uIGFzc2lnblNpbmdsZVNvdXJjZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhzb3VyY2UpLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICAgICAgYWNjW2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB0YXJnZXQpO1xufTtcblxudmFyIGRlY29kZSA9IGZ1bmN0aW9uIChzdHIsIGRlY29kZXIsIGNoYXJzZXQpIHtcbiAgICB2YXIgc3RyV2l0aG91dFBsdXMgPSBzdHIucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICAvLyB1bmVzY2FwZSBuZXZlciB0aHJvd3MsIG5vIHRyeS4uLmNhdGNoIG5lZWRlZDpcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzLnJlcGxhY2UoLyVbMC05YS1mXXsyfS9naSwgdW5lc2NhcGUpO1xuICAgIH1cbiAgICAvLyB1dGYtOFxuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoc3RyV2l0aG91dFBsdXMpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRQbHVzO1xuICAgIH1cbn07XG5cbnZhciBlbmNvZGUgPSBmdW5jdGlvbiBlbmNvZGUoc3RyLCBkZWZhdWx0RW5jb2RlciwgY2hhcnNldCwga2luZCwgZm9ybWF0KSB7XG4gICAgLy8gVGhpcyBjb2RlIHdhcyBvcmlnaW5hbGx5IHdyaXR0ZW4gYnkgQnJpYW4gV2hpdGUgKG1zY2RleCkgZm9yIHRoZSBpby5qcyBjb3JlIHF1ZXJ5c3RyaW5nIGxpYnJhcnkuXG4gICAgLy8gSXQgaGFzIGJlZW4gYWRhcHRlZCBoZXJlIGZvciBzdHJpY3RlciBhZGhlcmVuY2UgdG8gUkZDIDM5ODZcbiAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH1cblxuICAgIHZhciBzdHJpbmcgPSBzdHI7XG4gICAgaWYgKHR5cGVvZiBzdHIgPT09ICdzeW1ib2wnKSB7XG4gICAgICAgIHN0cmluZyA9IFN5bWJvbC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChzdHIpO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIHN0ciAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3RyaW5nID0gU3RyaW5nKHN0cik7XG4gICAgfVxuXG4gICAgaWYgKGNoYXJzZXQgPT09ICdpc28tODg1OS0xJykge1xuICAgICAgICByZXR1cm4gZXNjYXBlKHN0cmluZykucmVwbGFjZSgvJXVbMC05YS1mXXs0fS9naSwgZnVuY3Rpb24gKCQwKSB7XG4gICAgICAgICAgICByZXR1cm4gJyUyNiUyMycgKyBwYXJzZUludCgkMC5zbGljZSgyKSwgMTYpICsgJyUzQic7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0cmluZy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGMgPT09IDB4MkQgLy8gLVxuICAgICAgICAgICAgfHwgYyA9PT0gMHgyRSAvLyAuXG4gICAgICAgICAgICB8fCBjID09PSAweDVGIC8vIF9cbiAgICAgICAgICAgIHx8IGMgPT09IDB4N0UgLy8gflxuICAgICAgICAgICAgfHwgKGMgPj0gMHgzMCAmJiBjIDw9IDB4MzkpIC8vIDAtOVxuICAgICAgICAgICAgfHwgKGMgPj0gMHg0MSAmJiBjIDw9IDB4NUEpIC8vIGEtelxuICAgICAgICAgICAgfHwgKGMgPj0gMHg2MSAmJiBjIDw9IDB4N0EpIC8vIEEtWlxuICAgICAgICAgICAgfHwgKGZvcm1hdCA9PT0gZm9ybWF0cy5SRkMxNzM4ICYmIChjID09PSAweDI4IHx8IGMgPT09IDB4MjkpKSAvLyAoIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBvdXQgKz0gc3RyaW5nLmNoYXJBdChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwKSB7XG4gICAgICAgICAgICBvdXQgPSBvdXQgKyBoZXhUYWJsZVtjXTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGMgPCAweDgwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4QzAgfCAoYyA+PiA2KV0gKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYyA8IDB4RDgwMCB8fCBjID49IDB4RTAwMCkge1xuICAgICAgICAgICAgb3V0ID0gb3V0ICsgKGhleFRhYmxlWzB4RTAgfCAoYyA+PiAxMildICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXSArIGhleFRhYmxlWzB4ODAgfCAoYyAmIDB4M0YpXSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGkgKz0gMTtcbiAgICAgICAgYyA9IDB4MTAwMDAgKyAoKChjICYgMHgzRkYpIDw8IDEwKSB8IChzdHJpbmcuY2hhckNvZGVBdChpKSAmIDB4M0ZGKSk7XG4gICAgICAgIC8qIGVzbGludCBvcGVyYXRvci1saW5lYnJlYWs6IFsyLCBcImJlZm9yZVwiXSAqL1xuICAgICAgICBvdXQgKz0gaGV4VGFibGVbMHhGMCB8IChjID4+IDE4KV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiAxMikgJiAweDNGKV1cbiAgICAgICAgICAgICsgaGV4VGFibGVbMHg4MCB8ICgoYyA+PiA2KSAmIDB4M0YpXVxuICAgICAgICAgICAgKyBoZXhUYWJsZVsweDgwIHwgKGMgJiAweDNGKV07XG4gICAgfVxuXG4gICAgcmV0dXJuIG91dDtcbn07XG5cbnZhciBjb21wYWN0ID0gZnVuY3Rpb24gY29tcGFjdCh2YWx1ZSkge1xuICAgIHZhciBxdWV1ZSA9IFt7IG9iajogeyBvOiB2YWx1ZSB9LCBwcm9wOiAnbycgfV07XG4gICAgdmFyIHJlZnMgPSBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcXVldWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGl0ZW0gPSBxdWV1ZVtpXTtcbiAgICAgICAgdmFyIG9iaiA9IGl0ZW0ub2JqW2l0ZW0ucHJvcF07XG5cbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGtleXMubGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbCAmJiByZWZzLmluZGV4T2YodmFsKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHsgb2JqOiBvYmosIHByb3A6IGtleSB9KTtcbiAgICAgICAgICAgICAgICByZWZzLnB1c2godmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBhY3RRdWV1ZShxdWV1ZSk7XG5cbiAgICByZXR1cm4gdmFsdWU7XG59O1xuXG52YXIgaXNSZWdFeHAgPSBmdW5jdGlvbiBpc1JlZ0V4cChvYmopIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcblxudmFyIGlzQnVmZmVyID0gZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gICAgaWYgKCFvYmogfHwgdHlwZW9mIG9iaiAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhIShvYmouY29uc3RydWN0b3IgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopKTtcbn07XG5cbnZhciBjb21iaW5lID0gZnVuY3Rpb24gY29tYmluZShhLCBiKSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChhLCBiKTtcbn07XG5cbnZhciBtYXliZU1hcCA9IGZ1bmN0aW9uIG1heWJlTWFwKHZhbCwgZm4pIHtcbiAgICBpZiAoaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIHZhciBtYXBwZWQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG1hcHBlZC5wdXNoKGZuKHZhbFtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXBwZWQ7XG4gICAgfVxuICAgIHJldHVybiBmbih2YWwpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgYXJyYXlUb09iamVjdDogYXJyYXlUb09iamVjdCxcbiAgICBhc3NpZ246IGFzc2lnbixcbiAgICBjb21iaW5lOiBjb21iaW5lLFxuICAgIGNvbXBhY3Q6IGNvbXBhY3QsXG4gICAgZGVjb2RlOiBkZWNvZGUsXG4gICAgZW5jb2RlOiBlbmNvZGUsXG4gICAgaXNCdWZmZXI6IGlzQnVmZmVyLFxuICAgIGlzUmVnRXhwOiBpc1JlZ0V4cCxcbiAgICBtYXliZU1hcDogbWF5YmVNYXAsXG4gICAgbWVyZ2U6IG1lcmdlXG59O1xuIiwiLyoqIEBsaWNlbnNlIFJlYWN0IHYxNy4wLjJcbiAqIHJlYWN0LWpzeC1kZXYtcnVudGltZS5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJ29iamVjdC1hc3NpZ24nKTtcblxuLy8gQVRURU5USU9OXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXG4vLyBQbGVhc2UgY29uc2lkZXIgYWxzbyBhZGRpbmcgdG8gJ3JlYWN0LWRldnRvb2xzLXNoYXJlZC9zcmMvYmFja2VuZC9SZWFjdFN5bWJvbHMnXG4vLyBUaGUgU3ltYm9sIHVzZWQgdG8gdGFnIHRoZSBSZWFjdEVsZW1lbnQtbGlrZSB0eXBlcy4gSWYgdGhlcmUgaXMgbm8gbmF0aXZlIFN5bWJvbFxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxudmFyIFJFQUNUX0VMRU1FTlRfVFlQRSA9IDB4ZWFjNztcbnZhciBSRUFDVF9QT1JUQUxfVFlQRSA9IDB4ZWFjYTtcbmV4cG9ydHMuRnJhZ21lbnQgPSAweGVhY2I7XG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcbnZhciBSRUFDVF9QUk9GSUxFUl9UWVBFID0gMHhlYWQyO1xudmFyIFJFQUNUX1BST1ZJREVSX1RZUEUgPSAweGVhY2Q7XG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xudmFyIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSAweGVhZDA7XG52YXIgUkVBQ1RfU1VTUEVOU0VfVFlQRSA9IDB4ZWFkMTtcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XG52YXIgUkVBQ1RfTUVNT19UWVBFID0gMHhlYWQzO1xudmFyIFJFQUNUX0xBWllfVFlQRSA9IDB4ZWFkNDtcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xudmFyIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gMHhlYWRhO1xudmFyIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSAweGVhZDU7XG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcbnZhciBSRUFDVF9PUEFRVUVfSURfVFlQRSA9IDB4ZWFlMDtcbnZhciBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IDB4ZWFlMTtcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcbnZhciBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSAweGVhZTM7XG5cbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcbiAgdmFyIHN5bWJvbEZvciA9IFN5bWJvbC5mb3I7XG4gIFJFQUNUX0VMRU1FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZWxlbWVudCcpO1xuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XG4gIGV4cG9ydHMuRnJhZ21lbnQgPSBzeW1ib2xGb3IoJ3JlYWN0LmZyYWdtZW50Jyk7XG4gIFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN0cmljdF9tb2RlJyk7XG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XG4gIFJFQUNUX1BST1ZJREVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb3ZpZGVyJyk7XG4gIFJFQUNUX0NPTlRFWFRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuY29udGV4dCcpO1xuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xuICBSRUFDVF9TVVNQRU5TRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZScpO1xuICBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlX2xpc3QnKTtcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XG4gIFJFQUNUX0xBWllfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGF6eScpO1xuICBSRUFDVF9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5ibG9jaycpO1xuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XG4gIFJFQUNUX0ZVTkRBTUVOVEFMX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZ1bmRhbWVudGFsJyk7XG4gIFJFQUNUX1NDT1BFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnNjb3BlJyk7XG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcbiAgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmRlYnVnX3RyYWNlX21vZGUnKTtcbiAgUkVBQ1RfT0ZGU0NSRUVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9mZnNjcmVlbicpO1xuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcbn1cblxudmFyIE1BWUJFX0lURVJBVE9SX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLml0ZXJhdG9yO1xudmFyIEZBVVhfSVRFUkFUT1JfU1lNQk9MID0gJ0BAaXRlcmF0b3InO1xuZnVuY3Rpb24gZ2V0SXRlcmF0b3JGbihtYXliZUl0ZXJhYmxlKSB7XG4gIGlmIChtYXliZUl0ZXJhYmxlID09PSBudWxsIHx8IHR5cGVvZiBtYXliZUl0ZXJhYmxlICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgdmFyIG1heWJlSXRlcmF0b3IgPSBNQVlCRV9JVEVSQVRPUl9TWU1CT0wgJiYgbWF5YmVJdGVyYWJsZVtNQVlCRV9JVEVSQVRPUl9TWU1CT0xdIHx8IG1heWJlSXRlcmFibGVbRkFVWF9JVEVSQVRPUl9TWU1CT0xdO1xuXG4gIGlmICh0eXBlb2YgbWF5YmVJdGVyYXRvciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBtYXliZUl0ZXJhdG9yO1xuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBSZWFjdFNoYXJlZEludGVybmFscyA9IFJlYWN0Ll9fU0VDUkVUX0lOVEVSTkFMU19ET19OT1RfVVNFX09SX1lPVV9XSUxMX0JFX0ZJUkVEO1xuXG5mdW5jdGlvbiBlcnJvcihmb3JtYXQpIHtcbiAge1xuICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiA+IDEgPyBfbGVuMiAtIDEgOiAwKSwgX2tleTIgPSAxOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICBhcmdzW19rZXkyIC0gMV0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgIH1cblxuICAgIHByaW50V2FybmluZygnZXJyb3InLCBmb3JtYXQsIGFyZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHByaW50V2FybmluZyhsZXZlbCwgZm9ybWF0LCBhcmdzKSB7XG4gIC8vIFdoZW4gY2hhbmdpbmcgdGhpcyBsb2dpYywgeW91IG1pZ2h0IHdhbnQgdG8gYWxzb1xuICAvLyB1cGRhdGUgY29uc29sZVdpdGhTdGFja0Rldi53d3cuanMgYXMgd2VsbC5cbiAge1xuICAgIHZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lID0gUmVhY3RTaGFyZWRJbnRlcm5hbHMuUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZTtcbiAgICB2YXIgc3RhY2sgPSBSZWFjdERlYnVnQ3VycmVudEZyYW1lLmdldFN0YWNrQWRkZW5kdW0oKTtcblxuICAgIGlmIChzdGFjayAhPT0gJycpIHtcbiAgICAgIGZvcm1hdCArPSAnJXMnO1xuICAgICAgYXJncyA9IGFyZ3MuY29uY2F0KFtzdGFja10pO1xuICAgIH1cblxuICAgIHZhciBhcmdzV2l0aEZvcm1hdCA9IGFyZ3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gJycgKyBpdGVtO1xuICAgIH0pOyAvLyBDYXJlZnVsOiBSTiBjdXJyZW50bHkgZGVwZW5kcyBvbiB0aGlzIHByZWZpeFxuXG4gICAgYXJnc1dpdGhGb3JtYXQudW5zaGlmdCgnV2FybmluZzogJyArIGZvcm1hdCk7IC8vIFdlIGludGVudGlvbmFsbHkgZG9uJ3QgdXNlIHNwcmVhZCAob3IgLmFwcGx5KSBkaXJlY3RseSBiZWNhdXNlIGl0XG4gICAgLy8gYnJlYWtzIElFOTogaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlYWN0L2lzc3Vlcy8xMzYxMFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmdcblxuICAgIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKGNvbnNvbGVbbGV2ZWxdLCBjb25zb2xlLCBhcmdzV2l0aEZvcm1hdCk7XG4gIH1cbn1cblxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXG5cbnZhciBlbmFibGVTY29wZUFQSSA9IGZhbHNlOyAvLyBFeHBlcmltZW50YWwgQ3JlYXRlIEV2ZW50IEhhbmRsZSBBUEkuXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50VHlwZSh0eXBlKSB7XG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSAvLyBOb3RlOiB0eXBlb2YgbWlnaHQgYmUgb3RoZXIgdGhhbiAnc3ltYm9sJyBvciAnbnVtYmVyJyAoZS5nLiBpZiBpdCdzIGEgcG9seWZpbGwpLlxuXG5cbiAgaWYgKHR5cGUgPT09IGV4cG9ydHMuRnJhZ21lbnQgfHwgdHlwZSA9PT0gUkVBQ1RfUFJPRklMRVJfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NVU1BFTlNFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSB8fCBlbmFibGVTY29wZUFQSSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgdHlwZSAhPT0gbnVsbCkge1xuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGdldFdyYXBwZWROYW1lKG91dGVyVHlwZSwgaW5uZXJUeXBlLCB3cmFwcGVyTmFtZSkge1xuICB2YXIgZnVuY3Rpb25OYW1lID0gaW5uZXJUeXBlLmRpc3BsYXlOYW1lIHx8IGlubmVyVHlwZS5uYW1lIHx8ICcnO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufVxuXG5mdW5jdGlvbiBnZXRDb250ZXh0TmFtZSh0eXBlKSB7XG4gIHJldHVybiB0eXBlLmRpc3BsYXlOYW1lIHx8ICdDb250ZXh0Jztcbn1cblxuZnVuY3Rpb24gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKSB7XG4gIGlmICh0eXBlID09IG51bGwpIHtcbiAgICAvLyBIb3N0IHJvb3QsIHRleHQgbm9kZSBvciBqdXN0IGludmFsaWQgdHlwZS5cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHtcbiAgICBpZiAodHlwZW9mIHR5cGUudGFnID09PSAnbnVtYmVyJykge1xuICAgICAgZXJyb3IoJ1JlY2VpdmVkIGFuIHVuZXhwZWN0ZWQgb2JqZWN0IGluIGdldENvbXBvbmVudE5hbWUoKS4gJyArICdUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiBSZWFjdC4gUGxlYXNlIGZpbGUgYW4gaXNzdWUuJyk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGUuZGlzcGxheU5hbWUgfHwgdHlwZS5uYW1lIHx8IG51bGw7XG4gIH1cblxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHR5cGU7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlIGV4cG9ydHMuRnJhZ21lbnQ6XG4gICAgICByZXR1cm4gJ0ZyYWdtZW50JztcblxuICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICByZXR1cm4gJ1BvcnRhbCc7XG5cbiAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XG4gICAgICByZXR1cm4gJ1Byb2ZpbGVyJztcblxuICAgIGNhc2UgUkVBQ1RfU1RSSUNUX01PREVfVFlQRTpcbiAgICAgIHJldHVybiAnU3RyaWN0TW9kZSc7XG5cbiAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XG4gICAgICByZXR1cm4gJ1N1c3BlbnNlJztcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuICdTdXNwZW5zZUxpc3QnO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0Jykge1xuICAgIHN3aXRjaCAodHlwZS4kJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgIHZhciBjb250ZXh0ID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKGNvbnRleHQpICsgJy5Db25zdW1lcic7XG5cbiAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcbiAgICAgICAgdmFyIHByb3ZpZGVyID0gdHlwZTtcbiAgICAgICAgcmV0dXJuIGdldENvbnRleHROYW1lKHByb3ZpZGVyLl9jb250ZXh0KSArICcuUHJvdmlkZXInO1xuXG4gICAgICBjYXNlIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZSh0eXBlLCB0eXBlLnJlbmRlciwgJ0ZvcndhcmRSZWYnKTtcblxuICAgICAgY2FzZSBSRUFDVF9NRU1PX1RZUEU6XG4gICAgICAgIHJldHVybiBnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSk7XG5cbiAgICAgIGNhc2UgUkVBQ1RfQkxPQ0tfVFlQRTpcbiAgICAgICAgcmV0dXJuIGdldENvbXBvbmVudE5hbWUodHlwZS5fcmVuZGVyKTtcblxuICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgbGF6eUNvbXBvbmVudCA9IHR5cGU7XG4gICAgICAgICAgdmFyIHBheWxvYWQgPSBsYXp5Q29tcG9uZW50Ll9wYXlsb2FkO1xuICAgICAgICAgIHZhciBpbml0ID0gbGF6eUNvbXBvbmVudC5faW5pdDtcblxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0Q29tcG9uZW50TmFtZShpbml0KHBheWxvYWQpKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuLy8gSGVscGVycyB0byBwYXRjaCBjb25zb2xlLmxvZ3MgdG8gYXZvaWQgbG9nZ2luZyBkdXJpbmcgc2lkZS1lZmZlY3QgZnJlZVxuLy8gcmVwbGF5aW5nIG9uIHJlbmRlciBmdW5jdGlvbi4gVGhpcyBjdXJyZW50bHkgb25seSBwYXRjaGVzIHRoZSBvYmplY3Rcbi8vIGxhemlseSB3aGljaCB3b24ndCBjb3ZlciBpZiB0aGUgbG9nIGZ1bmN0aW9uIHdhcyBleHRyYWN0ZWQgZWFnZXJseS5cbi8vIFdlIGNvdWxkIGFsc28gZWFnZXJseSBwYXRjaCB0aGUgbWV0aG9kLlxudmFyIGRpc2FibGVkRGVwdGggPSAwO1xudmFyIHByZXZMb2c7XG52YXIgcHJldkluZm87XG52YXIgcHJldldhcm47XG52YXIgcHJldkVycm9yO1xudmFyIHByZXZHcm91cDtcbnZhciBwcmV2R3JvdXBDb2xsYXBzZWQ7XG52YXIgcHJldkdyb3VwRW5kO1xuXG5mdW5jdGlvbiBkaXNhYmxlZExvZygpIHt9XG5cbmRpc2FibGVkTG9nLl9fcmVhY3REaXNhYmxlZExvZyA9IHRydWU7XG5mdW5jdGlvbiBkaXNhYmxlTG9ncygpIHtcbiAge1xuICAgIGlmIChkaXNhYmxlZERlcHRoID09PSAwKSB7XG4gICAgICAvKiBlc2xpbnQtZGlzYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICAgIHByZXZMb2cgPSBjb25zb2xlLmxvZztcbiAgICAgIHByZXZJbmZvID0gY29uc29sZS5pbmZvO1xuICAgICAgcHJldldhcm4gPSBjb25zb2xlLndhcm47XG4gICAgICBwcmV2RXJyb3IgPSBjb25zb2xlLmVycm9yO1xuICAgICAgcHJldkdyb3VwID0gY29uc29sZS5ncm91cDtcbiAgICAgIHByZXZHcm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQ7XG4gICAgICBwcmV2R3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kOyAvLyBodHRwczovL2dpdGh1Yi5jb20vZmFjZWJvb2svcmVhY3QvaXNzdWVzLzE5MDk5XG5cbiAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZGlzYWJsZWRMb2csXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICB9OyAvLyAkRmxvd0ZpeE1lIEZsb3cgdGhpbmtzIGNvbnNvbGUgaXMgaW1tdXRhYmxlLlxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhjb25zb2xlLCB7XG4gICAgICAgIGluZm86IHByb3BzLFxuICAgICAgICBsb2c6IHByb3BzLFxuICAgICAgICB3YXJuOiBwcm9wcyxcbiAgICAgICAgZXJyb3I6IHByb3BzLFxuICAgICAgICBncm91cDogcHJvcHMsXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBwcm9wcyxcbiAgICAgICAgZ3JvdXBFbmQ6IHByb3BzXG4gICAgICB9KTtcbiAgICAgIC8qIGVzbGludC1lbmFibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgfVxuXG4gICAgZGlzYWJsZWREZXB0aCsrO1xuICB9XG59XG5mdW5jdGlvbiByZWVuYWJsZUxvZ3MoKSB7XG4gIHtcbiAgICBkaXNhYmxlZERlcHRoLS07XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA9PT0gMCkge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUgcmVhY3QtaW50ZXJuYWwvbm8tcHJvZHVjdGlvbi1sb2dnaW5nICovXG4gICAgICB2YXIgcHJvcHMgPSB7XG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgIH07IC8vICRGbG93Rml4TWUgRmxvdyB0aGlua3MgY29uc29sZSBpcyBpbW11dGFibGUuXG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGNvbnNvbGUsIHtcbiAgICAgICAgbG9nOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2TG9nXG4gICAgICAgIH0pLFxuICAgICAgICBpbmZvOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2SW5mb1xuICAgICAgICB9KSxcbiAgICAgICAgd2FybjogX2Fzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICB2YWx1ZTogcHJldldhcm5cbiAgICAgICAgfSksXG4gICAgICAgIGVycm9yOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2RXJyb3JcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwQ29sbGFwc2VkOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBDb2xsYXBzZWRcbiAgICAgICAgfSksXG4gICAgICAgIGdyb3VwRW5kOiBfYXNzaWduKHt9LCBwcm9wcywge1xuICAgICAgICAgIHZhbHVlOiBwcmV2R3JvdXBFbmRcbiAgICAgICAgfSlcbiAgICAgIH0pO1xuICAgICAgLyogZXNsaW50LWVuYWJsZSByZWFjdC1pbnRlcm5hbC9uby1wcm9kdWN0aW9uLWxvZ2dpbmcgKi9cbiAgICB9XG5cbiAgICBpZiAoZGlzYWJsZWREZXB0aCA8IDApIHtcbiAgICAgIGVycm9yKCdkaXNhYmxlZERlcHRoIGZlbGwgYmVsb3cgemVyby4gJyArICdUaGlzIGlzIGEgYnVnIGluIFJlYWN0LiBQbGVhc2UgZmlsZSBhbiBpc3N1ZS4nKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudERpc3BhdGNoZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnREaXNwYXRjaGVyO1xudmFyIHByZWZpeDtcbmZ1bmN0aW9uIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKG5hbWUsIHNvdXJjZSwgb3duZXJGbikge1xuICB7XG4gICAgaWYgKHByZWZpeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBFeHRyYWN0IHRoZSBWTSBzcGVjaWZpYyBwcmVmaXggdXNlZCBieSBlYWNoIGxpbmUuXG4gICAgICB0cnkge1xuICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICB2YXIgbWF0Y2ggPSB4LnN0YWNrLnRyaW0oKS5tYXRjaCgvXFxuKCAqKGF0ICk/KS8pO1xuICAgICAgICBwcmVmaXggPSBtYXRjaCAmJiBtYXRjaFsxXSB8fCAnJztcbiAgICAgIH1cbiAgICB9IC8vIFdlIHVzZSB0aGUgcHJlZml4IHRvIGVuc3VyZSBvdXIgc3RhY2tzIGxpbmUgdXAgd2l0aCBuYXRpdmUgc3RhY2sgZnJhbWVzLlxuXG5cbiAgICByZXR1cm4gJ1xcbicgKyBwcmVmaXggKyBuYW1lO1xuICB9XG59XG52YXIgcmVlbnRyeSA9IGZhbHNlO1xudmFyIGNvbXBvbmVudEZyYW1lQ2FjaGU7XG5cbntcbiAgdmFyIFBvc3NpYmx5V2Vha01hcCA9IHR5cGVvZiBXZWFrTWFwID09PSAnZnVuY3Rpb24nID8gV2Vha01hcCA6IE1hcDtcbiAgY29tcG9uZW50RnJhbWVDYWNoZSA9IG5ldyBQb3NzaWJseVdlYWtNYXAoKTtcbn1cblxuZnVuY3Rpb24gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgY29uc3RydWN0KSB7XG4gIC8vIElmIHNvbWV0aGluZyBhc2tlZCBmb3IgYSBzdGFjayBpbnNpZGUgYSBmYWtlIHJlbmRlciwgaXQgc2hvdWxkIGdldCBpZ25vcmVkLlxuICBpZiAoIWZuIHx8IHJlZW50cnkpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICB7XG4gICAgdmFyIGZyYW1lID0gY29tcG9uZW50RnJhbWVDYWNoZS5nZXQoZm4pO1xuXG4gICAgaWYgKGZyYW1lICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmcmFtZTtcbiAgICB9XG4gIH1cblxuICB2YXIgY29udHJvbDtcbiAgcmVlbnRyeSA9IHRydWU7XG4gIHZhciBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlID0gRXJyb3IucHJlcGFyZVN0YWNrVHJhY2U7IC8vICRGbG93Rml4TWUgSXQgZG9lcyBhY2NlcHQgdW5kZWZpbmVkLlxuXG4gIEVycm9yLnByZXBhcmVTdGFja1RyYWNlID0gdW5kZWZpbmVkO1xuICB2YXIgcHJldmlvdXNEaXNwYXRjaGVyO1xuXG4gIHtcbiAgICBwcmV2aW91c0Rpc3BhdGNoZXIgPSBSZWFjdEN1cnJlbnREaXNwYXRjaGVyLmN1cnJlbnQ7IC8vIFNldCB0aGUgZGlzcGF0Y2hlciBpbiBERVYgYmVjYXVzZSB0aGlzIG1pZ2h0IGJlIGNhbGwgaW4gdGhlIHJlbmRlciBmdW5jdGlvblxuICAgIC8vIGZvciB3YXJuaW5ncy5cblxuICAgIFJlYWN0Q3VycmVudERpc3BhdGNoZXIuY3VycmVudCA9IG51bGw7XG4gICAgZGlzYWJsZUxvZ3MoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgLy8gVGhpcyBzaG91bGQgdGhyb3cuXG4gICAgaWYgKGNvbnN0cnVjdCkge1xuICAgICAgLy8gU29tZXRoaW5nIHNob3VsZCBiZSBzZXR0aW5nIHRoZSBwcm9wcyBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICB2YXIgRmFrZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhyb3cgRXJyb3IoKTtcbiAgICAgIH07IC8vICRGbG93Rml4TWVcblxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoRmFrZS5wcm90b3R5cGUsICdwcm9wcycsIHtcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gV2UgdXNlIGEgdGhyb3dpbmcgc2V0dGVyIGluc3RlYWQgb2YgZnJvemVuIG9yIG5vbi13cml0YWJsZSBwcm9wc1xuICAgICAgICAgIC8vIGJlY2F1c2UgdGhhdCB3b24ndCB0aHJvdyBpbiBhIG5vbi1zdHJpY3QgbW9kZSBmdW5jdGlvbi5cbiAgICAgICAgICB0aHJvdyBFcnJvcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSAnb2JqZWN0JyAmJiBSZWZsZWN0LmNvbnN0cnVjdCkge1xuICAgICAgICAvLyBXZSBjb25zdHJ1Y3QgYSBkaWZmZXJlbnQgY29udHJvbCBmb3IgdGhpcyBjYXNlIHRvIGluY2x1ZGUgYW55IGV4dHJhXG4gICAgICAgIC8vIGZyYW1lcyBhZGRlZCBieSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgUmVmbGVjdC5jb25zdHJ1Y3QoRmFrZSwgW10pO1xuICAgICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgICAgY29udHJvbCA9IHg7XG4gICAgICAgIH1cblxuICAgICAgICBSZWZsZWN0LmNvbnN0cnVjdChmbiwgW10sIEZha2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBGYWtlLmNhbGwoKTtcbiAgICAgICAgfSBjYXRjaCAoeCkge1xuICAgICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgICB9XG5cbiAgICAgICAgZm4uY2FsbChGYWtlLnByb3RvdHlwZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRocm93IEVycm9yKCk7XG4gICAgICB9IGNhdGNoICh4KSB7XG4gICAgICAgIGNvbnRyb2wgPSB4O1xuICAgICAgfVxuXG4gICAgICBmbigpO1xuICAgIH1cbiAgfSBjYXRjaCAoc2FtcGxlKSB7XG4gICAgLy8gVGhpcyBpcyBpbmxpbmVkIG1hbnVhbGx5IGJlY2F1c2UgY2xvc3VyZSBkb2Vzbid0IGRvIGl0IGZvciB1cy5cbiAgICBpZiAoc2FtcGxlICYmIGNvbnRyb2wgJiYgdHlwZW9mIHNhbXBsZS5zdGFjayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIFRoaXMgZXh0cmFjdHMgdGhlIGZpcnN0IGZyYW1lIGZyb20gdGhlIHNhbXBsZSB0aGF0IGlzbid0IGFsc28gaW4gdGhlIGNvbnRyb2wuXG4gICAgICAvLyBTa2lwcGluZyBvbmUgZnJhbWUgdGhhdCB3ZSBhc3N1bWUgaXMgdGhlIGZyYW1lIHRoYXQgY2FsbHMgdGhlIHR3by5cbiAgICAgIHZhciBzYW1wbGVMaW5lcyA9IHNhbXBsZS5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgY29udHJvbExpbmVzID0gY29udHJvbC5zdGFjay5zcGxpdCgnXFxuJyk7XG4gICAgICB2YXIgcyA9IHNhbXBsZUxpbmVzLmxlbmd0aCAtIDE7XG4gICAgICB2YXIgYyA9IGNvbnRyb2xMaW5lcy5sZW5ndGggLSAxO1xuXG4gICAgICB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCAmJiBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgIC8vIFdlIGV4cGVjdCBhdCBsZWFzdCBvbmUgc3RhY2sgZnJhbWUgdG8gYmUgc2hhcmVkLlxuICAgICAgICAvLyBUeXBpY2FsbHkgdGhpcyB3aWxsIGJlIHRoZSByb290IG1vc3Qgb25lLiBIb3dldmVyLCBzdGFjayBmcmFtZXMgbWF5IGJlXG4gICAgICAgIC8vIGN1dCBvZmYgZHVlIHRvIG1heGltdW0gc3RhY2sgbGltaXRzLiBJbiB0aGlzIGNhc2UsIG9uZSBtYXliZSBjdXQgb2ZmXG4gICAgICAgIC8vIGVhcmxpZXIgdGhhbiB0aGUgb3RoZXIuIFdlIGFzc3VtZSB0aGF0IHRoZSBzYW1wbGUgaXMgbG9uZ2VyIG9yIHRoZSBzYW1lXG4gICAgICAgIC8vIGFuZCB0aGVyZSBmb3IgY3V0IG9mZiBlYXJsaWVyLiBTbyB3ZSBzaG91bGQgZmluZCB0aGUgcm9vdCBtb3N0IGZyYW1lIGluXG4gICAgICAgIC8vIHRoZSBzYW1wbGUgc29tZXdoZXJlIGluIHRoZSBjb250cm9sLlxuICAgICAgICBjLS07XG4gICAgICB9XG5cbiAgICAgIGZvciAoOyBzID49IDEgJiYgYyA+PSAwOyBzLS0sIGMtLSkge1xuICAgICAgICAvLyBOZXh0IHdlIGZpbmQgdGhlIGZpcnN0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHdoaWNoIHNob3VsZCBiZSB0aGVcbiAgICAgICAgLy8gZnJhbWUgdGhhdCBjYWxsZWQgb3VyIHNhbXBsZSBmdW5jdGlvbiBhbmQgdGhlIGNvbnRyb2wuXG4gICAgICAgIGlmIChzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgLy8gSW4gVjgsIHRoZSBmaXJzdCBsaW5lIGlzIGRlc2NyaWJpbmcgdGhlIG1lc3NhZ2UgYnV0IG90aGVyIFZNcyBkb24ndC5cbiAgICAgICAgICAvLyBJZiB3ZSdyZSBhYm91dCB0byByZXR1cm4gdGhlIGZpcnN0IGxpbmUsIGFuZCB0aGUgY29udHJvbCBpcyBhbHNvIG9uIHRoZSBzYW1lXG4gICAgICAgICAgLy8gbGluZSwgdGhhdCdzIGEgcHJldHR5IGdvb2QgaW5kaWNhdG9yIHRoYXQgb3VyIHNhbXBsZSB0aHJldyBhdCBzYW1lIGxpbmUgYXNcbiAgICAgICAgICAvLyB0aGUgY29udHJvbC4gSS5lLiBiZWZvcmUgd2UgZW50ZXJlZCB0aGUgc2FtcGxlIGZyYW1lLiBTbyB3ZSBpZ25vcmUgdGhpcyByZXN1bHQuXG4gICAgICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIGlmIHlvdSBwYXNzZWQgYSBjbGFzcyB0byBmdW5jdGlvbiBjb21wb25lbnQsIG9yIG5vbi1mdW5jdGlvbi5cbiAgICAgICAgICBpZiAocyAhPT0gMSB8fCBjICE9PSAxKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgIHMtLTtcbiAgICAgICAgICAgICAgYy0tOyAvLyBXZSBtYXkgc3RpbGwgaGF2ZSBzaW1pbGFyIGludGVybWVkaWF0ZSBmcmFtZXMgZnJvbSB0aGUgY29uc3RydWN0IGNhbGwuXG4gICAgICAgICAgICAgIC8vIFRoZSBuZXh0IG9uZSB0aGF0IGlzbid0IHRoZSBzYW1lIHNob3VsZCBiZSBvdXIgbWF0Y2ggdGhvdWdoLlxuXG4gICAgICAgICAgICAgIGlmIChjIDwgMCB8fCBzYW1wbGVMaW5lc1tzXSAhPT0gY29udHJvbExpbmVzW2NdKSB7XG4gICAgICAgICAgICAgICAgLy8gVjggYWRkcyBhIFwibmV3XCIgcHJlZml4IGZvciBuYXRpdmUgY2xhc3Nlcy4gTGV0J3MgcmVtb3ZlIGl0IHRvIG1ha2UgaXQgcHJldHRpZXIuXG4gICAgICAgICAgICAgICAgdmFyIF9mcmFtZSA9ICdcXG4nICsgc2FtcGxlTGluZXNbc10ucmVwbGFjZSgnIGF0IG5ldyAnLCAnIGF0ICcpO1xuXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgX2ZyYW1lKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IC8vIFJldHVybiB0aGUgbGluZSB3ZSBmb3VuZC5cblxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIF9mcmFtZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSB3aGlsZSAocyA+PSAxICYmIGMgPj0gMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gZmluYWxseSB7XG4gICAgcmVlbnRyeSA9IGZhbHNlO1xuXG4gICAge1xuICAgICAgUmVhY3RDdXJyZW50RGlzcGF0Y2hlci5jdXJyZW50ID0gcHJldmlvdXNEaXNwYXRjaGVyO1xuICAgICAgcmVlbmFibGVMb2dzKCk7XG4gICAgfVxuXG4gICAgRXJyb3IucHJlcGFyZVN0YWNrVHJhY2UgPSBwcmV2aW91c1ByZXBhcmVTdGFja1RyYWNlO1xuICB9IC8vIEZhbGxiYWNrIHRvIGp1c3QgdXNpbmcgdGhlIG5hbWUgaWYgd2UgY291bGRuJ3QgbWFrZSBpdCB0aHJvdy5cblxuXG4gIHZhciBuYW1lID0gZm4gPyBmbi5kaXNwbGF5TmFtZSB8fCBmbi5uYW1lIDogJyc7XG4gIHZhciBzeW50aGV0aWNGcmFtZSA9IG5hbWUgPyBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZShuYW1lKSA6ICcnO1xuXG4gIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb21wb25lbnRGcmFtZUNhY2hlLnNldChmbiwgc3ludGhldGljRnJhbWUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzeW50aGV0aWNGcmFtZTtcbn1cbmZ1bmN0aW9uIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZShmbiwgc291cmNlLCBvd25lckZuKSB7XG4gIHtcbiAgICByZXR1cm4gZGVzY3JpYmVOYXRpdmVDb21wb25lbnRGcmFtZShmbiwgZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3VsZENvbnN0cnVjdChDb21wb25lbnQpIHtcbiAgdmFyIHByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG4gIHJldHVybiAhIShwcm90b3R5cGUgJiYgcHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQpO1xufVxuXG5mdW5jdGlvbiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYodHlwZSwgc291cmNlLCBvd25lckZuKSB7XG5cbiAgaWYgKHR5cGUgPT0gbnVsbCkge1xuICAgIHJldHVybiAnJztcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHtcbiAgICAgIHJldHVybiBkZXNjcmliZU5hdGl2ZUNvbXBvbmVudEZyYW1lKHR5cGUsIHNob3VsZENvbnN0cnVjdCh0eXBlKSk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSh0eXBlKTtcbiAgfVxuXG4gIHN3aXRjaCAodHlwZSkge1xuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfVFlQRTpcbiAgICAgIHJldHVybiBkZXNjcmliZUJ1aWx0SW5Db21wb25lbnRGcmFtZSgnU3VzcGVuc2UnKTtcblxuICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgcmV0dXJuIGRlc2NyaWJlQnVpbHRJbkNvbXBvbmVudEZyYW1lKCdTdXNwZW5zZUxpc3QnKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKHR5cGUuJCR0eXBlb2YpIHtcbiAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgcmV0dXJuIGRlc2NyaWJlRnVuY3Rpb25Db21wb25lbnRGcmFtZSh0eXBlLnJlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAvLyBNZW1vIG1heSBjb250YWluIGFueSBjb21wb25lbnQgdHlwZSBzbyB3ZSByZWN1cnNpdmVseSByZXNvbHZlIGl0LlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVVbmtub3duRWxlbWVudFR5cGVGcmFtZUluREVWKHR5cGUudHlwZSwgc291cmNlLCBvd25lckZuKTtcblxuICAgICAgY2FzZSBSRUFDVF9CTE9DS19UWVBFOlxuICAgICAgICByZXR1cm4gZGVzY3JpYmVGdW5jdGlvbkNvbXBvbmVudEZyYW1lKHR5cGUuX3JlbmRlcik7XG5cbiAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGxhenlDb21wb25lbnQgPSB0eXBlO1xuICAgICAgICAgIHZhciBwYXlsb2FkID0gbGF6eUNvbXBvbmVudC5fcGF5bG9hZDtcbiAgICAgICAgICB2YXIgaW5pdCA9IGxhenlDb21wb25lbnQuX2luaXQ7XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gTGF6eSBtYXkgY29udGFpbiBhbnkgY29tcG9uZW50IHR5cGUgc28gd2UgcmVjdXJzaXZlbHkgcmVzb2x2ZSBpdC5cbiAgICAgICAgICAgIHJldHVybiBkZXNjcmliZVVua25vd25FbGVtZW50VHlwZUZyYW1lSW5ERVYoaW5pdChwYXlsb2FkKSwgc291cmNlLCBvd25lckZuKTtcbiAgICAgICAgICB9IGNhdGNoICh4KSB7fVxuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuICcnO1xufVxuXG52YXIgbG9nZ2VkVHlwZUZhaWx1cmVzID0ge307XG52YXIgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSA9IFJlYWN0U2hhcmVkSW50ZXJuYWxzLlJlYWN0RGVidWdDdXJyZW50RnJhbWU7XG5cbmZ1bmN0aW9uIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lLnNldEV4dHJhU3RhY2tGcmFtZShzdGFjayk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFJlYWN0RGVidWdDdXJyZW50RnJhbWUuc2V0RXh0cmFTdGFja0ZyYW1lKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja1Byb3BUeXBlcyh0eXBlU3BlY3MsIHZhbHVlcywgbG9jYXRpb24sIGNvbXBvbmVudE5hbWUsIGVsZW1lbnQpIHtcbiAge1xuICAgIC8vICRGbG93Rml4TWUgVGhpcyBpcyBva2F5IGJ1dCBGbG93IGRvZXNuJ3Qga25vdyBpdC5cbiAgICB2YXIgaGFzID0gRnVuY3Rpb24uY2FsbC5iaW5kKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkpO1xuXG4gICAgZm9yICh2YXIgdHlwZVNwZWNOYW1lIGluIHR5cGVTcGVjcykge1xuICAgICAgaWYgKGhhcyh0eXBlU3BlY3MsIHR5cGVTcGVjTmFtZSkpIHtcbiAgICAgICAgdmFyIGVycm9yJDEgPSB2b2lkIDA7IC8vIFByb3AgdHlwZSB2YWxpZGF0aW9uIG1heSB0aHJvdy4gSW4gY2FzZSB0aGV5IGRvLCB3ZSBkb24ndCB3YW50IHRvXG4gICAgICAgIC8vIGZhaWwgdGhlIHJlbmRlciBwaGFzZSB3aGVyZSBpdCBkaWRuJ3QgZmFpbCBiZWZvcmUuIFNvIHdlIGxvZyBpdC5cbiAgICAgICAgLy8gQWZ0ZXIgdGhlc2UgaGF2ZSBiZWVuIGNsZWFuZWQgdXAsIHdlJ2xsIGxldCB0aGVtIHRocm93LlxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyBpcyBpbnRlbnRpb25hbGx5IGFuIGludmFyaWFudCB0aGF0IGdldHMgY2F1Z2h0LiBJdCdzIHRoZSBzYW1lXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYXMgd2l0aG91dCB0aGlzIHN0YXRlbWVudCBleGNlcHQgd2l0aCBhIGJldHRlciBtZXNzYWdlLlxuICAgICAgICAgIGlmICh0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHZhciBlcnIgPSBFcnJvcigoY29tcG9uZW50TmFtZSB8fCAnUmVhY3QgY2xhc3MnKSArICc6ICcgKyBsb2NhdGlvbiArICcgdHlwZSBgJyArIHR5cGVTcGVjTmFtZSArICdgIGlzIGludmFsaWQ7ICcgKyAnaXQgbXVzdCBiZSBhIGZ1bmN0aW9uLCB1c3VhbGx5IGZyb20gdGhlIGBwcm9wLXR5cGVzYCBwYWNrYWdlLCBidXQgcmVjZWl2ZWQgYCcgKyB0eXBlb2YgdHlwZVNwZWNzW3R5cGVTcGVjTmFtZV0gKyAnYC4nICsgJ1RoaXMgb2Z0ZW4gaGFwcGVucyBiZWNhdXNlIG9mIHR5cG9zIHN1Y2ggYXMgYFByb3BUeXBlcy5mdW5jdGlvbmAgaW5zdGVhZCBvZiBgUHJvcFR5cGVzLmZ1bmNgLicpO1xuICAgICAgICAgICAgZXJyLm5hbWUgPSAnSW52YXJpYW50IFZpb2xhdGlvbic7XG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZXJyb3IkMSA9IHR5cGVTcGVjc1t0eXBlU3BlY05hbWVdKHZhbHVlcywgdHlwZVNwZWNOYW1lLCBjb21wb25lbnROYW1lLCBsb2NhdGlvbiwgbnVsbCwgJ1NFQ1JFVF9ET19OT1RfUEFTU19USElTX09SX1lPVV9XSUxMX0JFX0ZJUkVEJyk7XG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgZXJyb3IkMSA9IGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgJiYgIShlcnJvciQxIGluc3RhbmNlb2YgRXJyb3IpKSB7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignJXM6IHR5cGUgc3BlY2lmaWNhdGlvbiBvZiAlcycgKyAnIGAlc2AgaXMgaW52YWxpZDsgdGhlIHR5cGUgY2hlY2tlciAnICsgJ2Z1bmN0aW9uIG11c3QgcmV0dXJuIGBudWxsYCBvciBhbiBgRXJyb3JgIGJ1dCByZXR1cm5lZCBhICVzLiAnICsgJ1lvdSBtYXkgaGF2ZSBmb3Jnb3R0ZW4gdG8gcGFzcyBhbiBhcmd1bWVudCB0byB0aGUgdHlwZSBjaGVja2VyICcgKyAnY3JlYXRvciAoYXJyYXlPZiwgaW5zdGFuY2VPZiwgb2JqZWN0T2YsIG9uZU9mLCBvbmVPZlR5cGUsIGFuZCAnICsgJ3NoYXBlIGFsbCByZXF1aXJlIGFuIGFyZ3VtZW50KS4nLCBjb21wb25lbnROYW1lIHx8ICdSZWFjdCBjbGFzcycsIGxvY2F0aW9uLCB0eXBlU3BlY05hbWUsIHR5cGVvZiBlcnJvciQxKTtcblxuICAgICAgICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50KG51bGwpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVycm9yJDEgaW5zdGFuY2VvZiBFcnJvciAmJiAhKGVycm9yJDEubWVzc2FnZSBpbiBsb2dnZWRUeXBlRmFpbHVyZXMpKSB7XG4gICAgICAgICAgLy8gT25seSBtb25pdG9yIHRoaXMgZmFpbHVyZSBvbmNlIGJlY2F1c2UgdGhlcmUgdGVuZHMgdG8gYmUgYSBsb3Qgb2YgdGhlXG4gICAgICAgICAgLy8gc2FtZSBlcnJvci5cbiAgICAgICAgICBsb2dnZWRUeXBlRmFpbHVyZXNbZXJyb3IkMS5tZXNzYWdlXSA9IHRydWU7XG4gICAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQoZWxlbWVudCk7XG5cbiAgICAgICAgICBlcnJvcignRmFpbGVkICVzIHR5cGU6ICVzJywgbG9jYXRpb24sIGVycm9yJDEubWVzc2FnZSk7XG5cbiAgICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudChudWxsKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG52YXIgUmVhY3RDdXJyZW50T3duZXIgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgUkVTRVJWRURfUFJPUFMgPSB7XG4gIGtleTogdHJ1ZSxcbiAgcmVmOiB0cnVlLFxuICBfX3NlbGY6IHRydWUsXG4gIF9fc291cmNlOiB0cnVlXG59O1xudmFyIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duO1xudmFyIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duO1xudmFyIGRpZFdhcm5BYm91dFN0cmluZ1JlZnM7XG5cbntcbiAgZGlkV2FybkFib3V0U3RyaW5nUmVmcyA9IHt9O1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZFJlZihjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ3JlZicpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdyZWYnKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLnJlZiAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBoYXNWYWxpZEtleShjb25maWcpIHtcbiAge1xuICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgJ2tleScpKSB7XG4gICAgICB2YXIgZ2V0dGVyID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihjb25maWcsICdrZXknKS5nZXQ7XG5cbiAgICAgIGlmIChnZXR0ZXIgJiYgZ2V0dGVyLmlzUmVhY3RXYXJuaW5nKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gY29uZmlnLmtleSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKSB7XG4gIHtcbiAgICBpZiAodHlwZW9mIGNvbmZpZy5yZWYgPT09ICdzdHJpbmcnICYmIFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQgJiYgc2VsZiAmJiBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LnN0YXRlTm9kZSAhPT0gc2VsZikge1xuICAgICAgdmFyIGNvbXBvbmVudE5hbWUgPSBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSk7XG5cbiAgICAgIGlmICghZGlkV2FybkFib3V0U3RyaW5nUmVmc1tjb21wb25lbnROYW1lXSkge1xuICAgICAgICBlcnJvcignQ29tcG9uZW50IFwiJXNcIiBjb250YWlucyB0aGUgc3RyaW5nIHJlZiBcIiVzXCIuICcgKyAnU3VwcG9ydCBmb3Igc3RyaW5nIHJlZnMgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIG1ham9yIHJlbGVhc2UuICcgKyAnVGhpcyBjYXNlIGNhbm5vdCBiZSBhdXRvbWF0aWNhbGx5IGNvbnZlcnRlZCB0byBhbiBhcnJvdyBmdW5jdGlvbi4gJyArICdXZSBhc2sgeW91IHRvIG1hbnVhbGx5IGZpeCB0aGlzIGNhc2UgYnkgdXNpbmcgdXNlUmVmKCkgb3IgY3JlYXRlUmVmKCkgaW5zdGVhZC4gJyArICdMZWFybiBtb3JlIGFib3V0IHVzaW5nIHJlZnMgc2FmZWx5IGhlcmU6ICcgKyAnaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3N0cmljdC1tb2RlLXN0cmluZy1yZWYnLCBnZXRDb21wb25lbnROYW1lKFJlYWN0Q3VycmVudE93bmVyLmN1cnJlbnQudHlwZSksIGNvbmZpZy5yZWYpO1xuXG4gICAgICAgIGRpZFdhcm5BYm91dFN0cmluZ1JlZnNbY29tcG9uZW50TmFtZV0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdLZXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wS2V5V2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGBrZXlgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ0tleS5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAna2V5Jywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdLZXksXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkZWZpbmVSZWZQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpIHtcbiAge1xuICAgIHZhciB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoIXNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duKSB7XG4gICAgICAgIHNwZWNpYWxQcm9wUmVmV2FybmluZ1Nob3duID0gdHJ1ZTtcblxuICAgICAgICBlcnJvcignJXM6IGByZWZgIGlzIG5vdCBhIHByb3AuIFRyeWluZyB0byBhY2Nlc3MgaXQgd2lsbCByZXN1bHQgJyArICdpbiBgdW5kZWZpbmVkYCBiZWluZyByZXR1cm5lZC4gSWYgeW91IG5lZWQgdG8gYWNjZXNzIHRoZSBzYW1lICcgKyAndmFsdWUgd2l0aGluIHRoZSBjaGlsZCBjb21wb25lbnQsIHlvdSBzaG91bGQgcGFzcyBpdCBhcyBhIGRpZmZlcmVudCAnICsgJ3Byb3AuIChodHRwczovL3JlYWN0anMub3JnL2xpbmsvc3BlY2lhbC1wcm9wcyknLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdhcm5BYm91dEFjY2Vzc2luZ1JlZi5pc1JlYWN0V2FybmluZyA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHByb3BzLCAncmVmJywge1xuICAgICAgZ2V0OiB3YXJuQWJvdXRBY2Nlc3NpbmdSZWYsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuLyoqXG4gKiBGYWN0b3J5IG1ldGhvZCB0byBjcmVhdGUgYSBuZXcgUmVhY3QgZWxlbWVudC4gVGhpcyBubyBsb25nZXIgYWRoZXJlcyB0b1xuICogdGhlIGNsYXNzIHBhdHRlcm4sIHNvIGRvIG5vdCB1c2UgbmV3IHRvIGNhbGwgaXQuIEFsc28sIGluc3RhbmNlb2YgY2hlY2tcbiAqIHdpbGwgbm90IHdvcmsuIEluc3RlYWQgdGVzdCAkJHR5cGVvZiBmaWVsZCBhZ2FpbnN0IFN5bWJvbC5mb3IoJ3JlYWN0LmVsZW1lbnQnKSB0byBjaGVja1xuICogaWYgc29tZXRoaW5nIGlzIGEgUmVhY3QgRWxlbWVudC5cbiAqXG4gKiBAcGFyYW0geyp9IHR5cGVcbiAqIEBwYXJhbSB7Kn0gcHJvcHNcbiAqIEBwYXJhbSB7Kn0ga2V5XG4gKiBAcGFyYW0ge3N0cmluZ3xvYmplY3R9IHJlZlxuICogQHBhcmFtIHsqfSBvd25lclxuICogQHBhcmFtIHsqfSBzZWxmIEEgKnRlbXBvcmFyeSogaGVscGVyIHRvIGRldGVjdCBwbGFjZXMgd2hlcmUgYHRoaXNgIGlzXG4gKiBkaWZmZXJlbnQgZnJvbSB0aGUgYG93bmVyYCB3aGVuIFJlYWN0LmNyZWF0ZUVsZW1lbnQgaXMgY2FsbGVkLCBzbyB0aGF0IHdlXG4gKiBjYW4gd2Fybi4gV2Ugd2FudCB0byBnZXQgcmlkIG9mIG93bmVyIGFuZCByZXBsYWNlIHN0cmluZyBgcmVmYHMgd2l0aCBhcnJvd1xuICogZnVuY3Rpb25zLCBhbmQgYXMgbG9uZyBhcyBgdGhpc2AgYW5kIG93bmVyIGFyZSB0aGUgc2FtZSwgdGhlcmUgd2lsbCBiZSBub1xuICogY2hhbmdlIGluIGJlaGF2aW9yLlxuICogQHBhcmFtIHsqfSBzb3VyY2UgQW4gYW5ub3RhdGlvbiBvYmplY3QgKGFkZGVkIGJ5IGEgdHJhbnNwaWxlciBvciBvdGhlcndpc2UpXG4gKiBpbmRpY2F0aW5nIGZpbGVuYW1lLCBsaW5lIG51bWJlciwgYW5kL29yIG90aGVyIGluZm9ybWF0aW9uLlxuICogQGludGVybmFsXG4gKi9cblxuXG52YXIgUmVhY3RFbGVtZW50ID0gZnVuY3Rpb24gKHR5cGUsIGtleSwgcmVmLCBzZWxmLCBzb3VyY2UsIG93bmVyLCBwcm9wcykge1xuICB2YXIgZWxlbWVudCA9IHtcbiAgICAvLyBUaGlzIHRhZyBhbGxvd3MgdXMgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyBhcyBhIFJlYWN0IEVsZW1lbnRcbiAgICAkJHR5cGVvZjogUkVBQ1RfRUxFTUVOVF9UWVBFLFxuICAgIC8vIEJ1aWx0LWluIHByb3BlcnRpZXMgdGhhdCBiZWxvbmcgb24gdGhlIGVsZW1lbnRcbiAgICB0eXBlOiB0eXBlLFxuICAgIGtleToga2V5LFxuICAgIHJlZjogcmVmLFxuICAgIHByb3BzOiBwcm9wcyxcbiAgICAvLyBSZWNvcmQgdGhlIGNvbXBvbmVudCByZXNwb25zaWJsZSBmb3IgY3JlYXRpbmcgdGhpcyBlbGVtZW50LlxuICAgIF9vd25lcjogb3duZXJcbiAgfTtcblxuICB7XG4gICAgLy8gVGhlIHZhbGlkYXRpb24gZmxhZyBpcyBjdXJyZW50bHkgbXV0YXRpdmUuIFdlIHB1dCBpdCBvblxuICAgIC8vIGFuIGV4dGVybmFsIGJhY2tpbmcgc3RvcmUgc28gdGhhdCB3ZSBjYW4gZnJlZXplIHRoZSB3aG9sZSBvYmplY3QuXG4gICAgLy8gVGhpcyBjYW4gYmUgcmVwbGFjZWQgd2l0aCBhIFdlYWtNYXAgb25jZSB0aGV5IGFyZSBpbXBsZW1lbnRlZCBpblxuICAgIC8vIGNvbW1vbmx5IHVzZWQgZGV2ZWxvcG1lbnQgZW52aXJvbm1lbnRzLlxuICAgIGVsZW1lbnQuX3N0b3JlID0ge307IC8vIFRvIG1ha2UgY29tcGFyaW5nIFJlYWN0RWxlbWVudHMgZWFzaWVyIGZvciB0ZXN0aW5nIHB1cnBvc2VzLCB3ZSBtYWtlXG4gICAgLy8gdGhlIHZhbGlkYXRpb24gZmxhZyBub24tZW51bWVyYWJsZSAod2hlcmUgcG9zc2libGUsIHdoaWNoIHNob3VsZFxuICAgIC8vIGluY2x1ZGUgZXZlcnkgZW52aXJvbm1lbnQgd2UgcnVuIHRlc3RzIGluKSwgc28gdGhlIHRlc3QgZnJhbWV3b3JrXG4gICAgLy8gaWdub3JlcyBpdC5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50Ll9zdG9yZSwgJ3ZhbGlkYXRlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IGZhbHNlXG4gICAgfSk7IC8vIHNlbGYgYW5kIHNvdXJjZSBhcmUgREVWIG9ubHkgcHJvcGVydGllcy5cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlbGVtZW50LCAnX3NlbGYnLCB7XG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICB2YWx1ZTogc2VsZlxuICAgIH0pOyAvLyBUd28gZWxlbWVudHMgY3JlYXRlZCBpbiB0d28gZGlmZmVyZW50IHBsYWNlcyBzaG91bGQgYmUgY29uc2lkZXJlZFxuICAgIC8vIGVxdWFsIGZvciB0ZXN0aW5nIHB1cnBvc2VzIGFuZCB0aGVyZWZvcmUgd2UgaGlkZSBpdCBmcm9tIGVudW1lcmF0aW9uLlxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGVsZW1lbnQsICdfc291cmNlJywge1xuICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHNvdXJjZVxuICAgIH0pO1xuXG4gICAgaWYgKE9iamVjdC5mcmVlemUpIHtcbiAgICAgIE9iamVjdC5mcmVlemUoZWxlbWVudC5wcm9wcyk7XG4gICAgICBPYmplY3QuZnJlZXplKGVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufTtcbi8qKlxuICogaHR0cHM6Ly9naXRodWIuY29tL3JlYWN0anMvcmZjcy9wdWxsLzEwN1xuICogQHBhcmFtIHsqfSB0eXBlXG4gKiBAcGFyYW0ge29iamVjdH0gcHJvcHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcbiAqL1xuXG5mdW5jdGlvbiBqc3hERVYodHlwZSwgY29uZmlnLCBtYXliZUtleSwgc291cmNlLCBzZWxmKSB7XG4gIHtcbiAgICB2YXIgcHJvcE5hbWU7IC8vIFJlc2VydmVkIG5hbWVzIGFyZSBleHRyYWN0ZWRcblxuICAgIHZhciBwcm9wcyA9IHt9O1xuICAgIHZhciBrZXkgPSBudWxsO1xuICAgIHZhciByZWYgPSBudWxsOyAvLyBDdXJyZW50bHksIGtleSBjYW4gYmUgc3ByZWFkIGluIGFzIGEgcHJvcC4gVGhpcyBjYXVzZXMgYSBwb3RlbnRpYWxcbiAgICAvLyBpc3N1ZSBpZiBrZXkgaXMgYWxzbyBleHBsaWNpdGx5IGRlY2xhcmVkIChpZS4gPGRpdiB7Li4ucHJvcHN9IGtleT1cIkhpXCIgLz5cbiAgICAvLyBvciA8ZGl2IGtleT1cIkhpXCIgey4uLnByb3BzfSAvPiApLiBXZSB3YW50IHRvIGRlcHJlY2F0ZSBrZXkgc3ByZWFkLFxuICAgIC8vIGJ1dCBhcyBhbiBpbnRlcm1lZGlhcnkgc3RlcCwgd2Ugd2lsbCB1c2UganN4REVWIGZvciBldmVyeXRoaW5nIGV4Y2VwdFxuICAgIC8vIDxkaXYgey4uLnByb3BzfSBrZXk9XCJIaVwiIC8+LCBiZWNhdXNlIHdlIGFyZW4ndCBjdXJyZW50bHkgYWJsZSB0byB0ZWxsIGlmXG4gICAgLy8ga2V5IGlzIGV4cGxpY2l0bHkgZGVjbGFyZWQgdG8gYmUgdW5kZWZpbmVkIG9yIG5vdC5cblxuICAgIGlmIChtYXliZUtleSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBrZXkgPSAnJyArIG1heWJlS2V5O1xuICAgIH1cblxuICAgIGlmIChoYXNWYWxpZEtleShjb25maWcpKSB7XG4gICAgICBrZXkgPSAnJyArIGNvbmZpZy5rZXk7XG4gICAgfVxuXG4gICAgaWYgKGhhc1ZhbGlkUmVmKGNvbmZpZykpIHtcbiAgICAgIHJlZiA9IGNvbmZpZy5yZWY7XG4gICAgICB3YXJuSWZTdHJpbmdSZWZDYW5ub3RCZUF1dG9Db252ZXJ0ZWQoY29uZmlnLCBzZWxmKTtcbiAgICB9IC8vIFJlbWFpbmluZyBwcm9wZXJ0aWVzIGFyZSBhZGRlZCB0byBhIG5ldyBwcm9wcyBvYmplY3RcblxuXG4gICAgZm9yIChwcm9wTmFtZSBpbiBjb25maWcpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKGNvbmZpZywgcHJvcE5hbWUpICYmICFSRVNFUlZFRF9QUk9QUy5oYXNPd25Qcm9wZXJ0eShwcm9wTmFtZSkpIHtcbiAgICAgICAgcHJvcHNbcHJvcE5hbWVdID0gY29uZmlnW3Byb3BOYW1lXTtcbiAgICAgIH1cbiAgICB9IC8vIFJlc29sdmUgZGVmYXVsdCBwcm9wc1xuXG5cbiAgICBpZiAodHlwZSAmJiB0eXBlLmRlZmF1bHRQcm9wcykge1xuICAgICAgdmFyIGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuXG4gICAgICBmb3IgKHByb3BOYW1lIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAocHJvcHNbcHJvcE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBwcm9wc1twcm9wTmFtZV0gPSBkZWZhdWx0UHJvcHNbcHJvcE5hbWVdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGtleSB8fCByZWYpIHtcbiAgICAgIHZhciBkaXNwbGF5TmFtZSA9IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nID8gdHlwZS5kaXNwbGF5TmFtZSB8fCB0eXBlLm5hbWUgfHwgJ1Vua25vd24nIDogdHlwZTtcblxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBkZWZpbmVLZXlQcm9wV2FybmluZ0dldHRlcihwcm9wcywgZGlzcGxheU5hbWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVmKSB7XG4gICAgICAgIGRlZmluZVJlZlByb3BXYXJuaW5nR2V0dGVyKHByb3BzLCBkaXNwbGF5TmFtZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0RWxlbWVudCh0eXBlLCBrZXksIHJlZiwgc2VsZiwgc291cmNlLCBSZWFjdEN1cnJlbnRPd25lci5jdXJyZW50LCBwcm9wcyk7XG4gIH1cbn1cblxudmFyIFJlYWN0Q3VycmVudE93bmVyJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdEN1cnJlbnRPd25lcjtcbnZhciBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEgPSBSZWFjdFNoYXJlZEludGVybmFscy5SZWFjdERlYnVnQ3VycmVudEZyYW1lO1xuXG5mdW5jdGlvbiBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGVsZW1lbnQpIHtcbiAge1xuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICB2YXIgb3duZXIgPSBlbGVtZW50Ll9vd25lcjtcbiAgICAgIHZhciBzdGFjayA9IGRlc2NyaWJlVW5rbm93bkVsZW1lbnRUeXBlRnJhbWVJbkRFVihlbGVtZW50LnR5cGUsIGVsZW1lbnQuX3NvdXJjZSwgb3duZXIgPyBvd25lci50eXBlIDogbnVsbCk7XG4gICAgICBSZWFjdERlYnVnQ3VycmVudEZyYW1lJDEuc2V0RXh0cmFTdGFja0ZyYW1lKHN0YWNrKTtcbiAgICB9IGVsc2Uge1xuICAgICAgUmVhY3REZWJ1Z0N1cnJlbnRGcmFtZSQxLnNldEV4dHJhU3RhY2tGcmFtZShudWxsKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duO1xuXG57XG4gIHByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duID0gZmFsc2U7XG59XG4vKipcbiAqIFZlcmlmaWVzIHRoZSBvYmplY3QgaXMgYSBSZWFjdEVsZW1lbnQuXG4gKiBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9kb2NzL3JlYWN0LWFwaS5odG1sI2lzdmFsaWRlbGVtZW50XG4gKiBAcGFyYW0gez9vYmplY3R9IG9iamVjdFxuICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiBgb2JqZWN0YCBpcyBhIFJlYWN0RWxlbWVudC5cbiAqIEBmaW5hbFxuICovXG5cbmZ1bmN0aW9uIGlzVmFsaWRFbGVtZW50KG9iamVjdCkge1xuICB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCAmJiBvYmplY3QuJCR0eXBlb2YgPT09IFJFQUNUX0VMRU1FTlRfVFlQRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXREZWNsYXJhdGlvbkVycm9yQWRkZW5kdW0oKSB7XG4gIHtcbiAgICBpZiAoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50KSB7XG4gICAgICB2YXIgbmFtZSA9IGdldENvbXBvbmVudE5hbWUoUmVhY3RDdXJyZW50T3duZXIkMS5jdXJyZW50LnR5cGUpO1xuXG4gICAgICBpZiAobmFtZSkge1xuICAgICAgICByZXR1cm4gJ1xcblxcbkNoZWNrIHRoZSByZW5kZXIgbWV0aG9kIG9mIGAnICsgbmFtZSArICdgLic7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSkge1xuICB7XG4gICAgaWYgKHNvdXJjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgZmlsZU5hbWUgPSBzb3VyY2UuZmlsZU5hbWUucmVwbGFjZSgvXi4qW1xcXFxcXC9dLywgJycpO1xuICAgICAgdmFyIGxpbmVOdW1iZXIgPSBzb3VyY2UubGluZU51bWJlcjtcbiAgICAgIHJldHVybiAnXFxuXFxuQ2hlY2sgeW91ciBjb2RlIGF0ICcgKyBmaWxlTmFtZSArICc6JyArIGxpbmVOdW1iZXIgKyAnLic7XG4gICAgfVxuXG4gICAgcmV0dXJuICcnO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlcmUncyBubyBrZXkgZXhwbGljaXRseSBzZXQgb24gZHluYW1pYyBhcnJheXMgb2YgY2hpbGRyZW4gb3JcbiAqIG9iamVjdCBrZXlzIGFyZSBub3QgdmFsaWQuIFRoaXMgYWxsb3dzIHVzIHRvIGtlZXAgdHJhY2sgb2YgY2hpbGRyZW4gYmV0d2VlblxuICogdXBkYXRlcy5cbiAqL1xuXG5cbnZhciBvd25lckhhc0tleVVzZVdhcm5pbmcgPSB7fTtcblxuZnVuY3Rpb24gZ2V0Q3VycmVudENvbXBvbmVudEVycm9ySW5mbyhwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICB2YXIgaW5mbyA9IGdldERlY2xhcmF0aW9uRXJyb3JBZGRlbmR1bSgpO1xuXG4gICAgaWYgKCFpbmZvKSB7XG4gICAgICB2YXIgcGFyZW50TmFtZSA9IHR5cGVvZiBwYXJlbnRUeXBlID09PSAnc3RyaW5nJyA/IHBhcmVudFR5cGUgOiBwYXJlbnRUeXBlLmRpc3BsYXlOYW1lIHx8IHBhcmVudFR5cGUubmFtZTtcblxuICAgICAgaWYgKHBhcmVudE5hbWUpIHtcbiAgICAgICAgaW5mbyA9IFwiXFxuXFxuQ2hlY2sgdGhlIHRvcC1sZXZlbCByZW5kZXIgY2FsbCB1c2luZyA8XCIgKyBwYXJlbnROYW1lICsgXCI+LlwiO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmZvO1xuICB9XG59XG4vKipcbiAqIFdhcm4gaWYgdGhlIGVsZW1lbnQgZG9lc24ndCBoYXZlIGFuIGV4cGxpY2l0IGtleSBhc3NpZ25lZCB0byBpdC5cbiAqIFRoaXMgZWxlbWVudCBpcyBpbiBhbiBhcnJheS4gVGhlIGFycmF5IGNvdWxkIGdyb3cgYW5kIHNocmluayBvciBiZVxuICogcmVvcmRlcmVkLiBBbGwgY2hpbGRyZW4gdGhhdCBoYXZlbid0IGFscmVhZHkgYmVlbiB2YWxpZGF0ZWQgYXJlIHJlcXVpcmVkIHRvXG4gKiBoYXZlIGEgXCJrZXlcIiBwcm9wZXJ0eSBhc3NpZ25lZCB0byBpdC4gRXJyb3Igc3RhdHVzZXMgYXJlIGNhY2hlZCBzbyBhIHdhcm5pbmdcbiAqIHdpbGwgb25seSBiZSBzaG93biBvbmNlLlxuICpcbiAqIEBpbnRlcm5hbFxuICogQHBhcmFtIHtSZWFjdEVsZW1lbnR9IGVsZW1lbnQgRWxlbWVudCB0aGF0IHJlcXVpcmVzIGEga2V5LlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIGVsZW1lbnQncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVFeHBsaWNpdEtleShlbGVtZW50LCBwYXJlbnRUeXBlKSB7XG4gIHtcbiAgICBpZiAoIWVsZW1lbnQuX3N0b3JlIHx8IGVsZW1lbnQuX3N0b3JlLnZhbGlkYXRlZCB8fCBlbGVtZW50LmtleSAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZWxlbWVudC5fc3RvcmUudmFsaWRhdGVkID0gdHJ1ZTtcbiAgICB2YXIgY3VycmVudENvbXBvbmVudEVycm9ySW5mbyA9IGdldEN1cnJlbnRDb21wb25lbnRFcnJvckluZm8ocGFyZW50VHlwZSk7XG5cbiAgICBpZiAob3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgb3duZXJIYXNLZXlVc2VXYXJuaW5nW2N1cnJlbnRDb21wb25lbnRFcnJvckluZm9dID0gdHJ1ZTsgLy8gVXN1YWxseSB0aGUgY3VycmVudCBvd25lciBpcyB0aGUgb2ZmZW5kZXIsIGJ1dCBpZiBpdCBhY2NlcHRzIGNoaWxkcmVuIGFzIGFcbiAgICAvLyBwcm9wZXJ0eSwgaXQgbWF5IGJlIHRoZSBjcmVhdG9yIG9mIHRoZSBjaGlsZCB0aGF0J3MgcmVzcG9uc2libGUgZm9yXG4gICAgLy8gYXNzaWduaW5nIGl0IGEga2V5LlxuXG4gICAgdmFyIGNoaWxkT3duZXIgPSAnJztcblxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuX293bmVyICYmIGVsZW1lbnQuX293bmVyICE9PSBSZWFjdEN1cnJlbnRPd25lciQxLmN1cnJlbnQpIHtcbiAgICAgIC8vIEdpdmUgdGhlIGNvbXBvbmVudCB0aGF0IG9yaWdpbmFsbHkgY3JlYXRlZCB0aGlzIGNoaWxkLlxuICAgICAgY2hpbGRPd25lciA9IFwiIEl0IHdhcyBwYXNzZWQgYSBjaGlsZCBmcm9tIFwiICsgZ2V0Q29tcG9uZW50TmFtZShlbGVtZW50Ll9vd25lci50eXBlKSArIFwiLlwiO1xuICAgIH1cblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEoZWxlbWVudCk7XG5cbiAgICBlcnJvcignRWFjaCBjaGlsZCBpbiBhIGxpc3Qgc2hvdWxkIGhhdmUgYSB1bmlxdWUgXCJrZXlcIiBwcm9wLicgKyAnJXMlcyBTZWUgaHR0cHM6Ly9yZWFjdGpzLm9yZy9saW5rL3dhcm5pbmcta2V5cyBmb3IgbW9yZSBpbmZvcm1hdGlvbi4nLCBjdXJyZW50Q29tcG9uZW50RXJyb3JJbmZvLCBjaGlsZE93bmVyKTtcblxuICAgIHNldEN1cnJlbnRseVZhbGlkYXRpbmdFbGVtZW50JDEobnVsbCk7XG4gIH1cbn1cbi8qKlxuICogRW5zdXJlIHRoYXQgZXZlcnkgZWxlbWVudCBlaXRoZXIgaXMgcGFzc2VkIGluIGEgc3RhdGljIGxvY2F0aW9uLCBpbiBhblxuICogYXJyYXkgd2l0aCBhbiBleHBsaWNpdCBrZXlzIHByb3BlcnR5IGRlZmluZWQsIG9yIGluIGFuIG9iamVjdCBsaXRlcmFsXG4gKiB3aXRoIHZhbGlkIGtleSBwcm9wZXJ0eS5cbiAqXG4gKiBAaW50ZXJuYWxcbiAqIEBwYXJhbSB7UmVhY3ROb2RlfSBub2RlIFN0YXRpY2FsbHkgcGFzc2VkIGNoaWxkIG9mIGFueSB0eXBlLlxuICogQHBhcmFtIHsqfSBwYXJlbnRUeXBlIG5vZGUncyBwYXJlbnQncyB0eXBlLlxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVDaGlsZEtleXMobm9kZSwgcGFyZW50VHlwZSkge1xuICB7XG4gICAgaWYgKHR5cGVvZiBub2RlICE9PSAnb2JqZWN0Jykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChBcnJheS5pc0FycmF5KG5vZGUpKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkID0gbm9kZVtpXTtcblxuICAgICAgICBpZiAoaXNWYWxpZEVsZW1lbnQoY2hpbGQpKSB7XG4gICAgICAgICAgdmFsaWRhdGVFeHBsaWNpdEtleShjaGlsZCwgcGFyZW50VHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGlzVmFsaWRFbGVtZW50KG5vZGUpKSB7XG4gICAgICAvLyBUaGlzIGVsZW1lbnQgd2FzIHBhc3NlZCBpbiBhIHZhbGlkIGxvY2F0aW9uLlxuICAgICAgaWYgKG5vZGUuX3N0b3JlKSB7XG4gICAgICAgIG5vZGUuX3N0b3JlLnZhbGlkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChub2RlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JGbiA9IGdldEl0ZXJhdG9yRm4obm9kZSk7XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmF0b3JGbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAvLyBFbnRyeSBpdGVyYXRvcnMgdXNlZCB0byBwcm92aWRlIGltcGxpY2l0IGtleXMsXG4gICAgICAgIC8vIGJ1dCBub3cgd2UgcHJpbnQgYSBzZXBhcmF0ZSB3YXJuaW5nIGZvciB0aGVtIGxhdGVyLlxuICAgICAgICBpZiAoaXRlcmF0b3JGbiAhPT0gbm9kZS5lbnRyaWVzKSB7XG4gICAgICAgICAgdmFyIGl0ZXJhdG9yID0gaXRlcmF0b3JGbi5jYWxsKG5vZGUpO1xuICAgICAgICAgIHZhciBzdGVwO1xuXG4gICAgICAgICAgd2hpbGUgKCEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZSkge1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRFbGVtZW50KHN0ZXAudmFsdWUpKSB7XG4gICAgICAgICAgICAgIHZhbGlkYXRlRXhwbGljaXRLZXkoc3RlcC52YWx1ZSwgcGFyZW50VHlwZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4vKipcbiAqIEdpdmVuIGFuIGVsZW1lbnQsIHZhbGlkYXRlIHRoYXQgaXRzIHByb3BzIGZvbGxvdyB0aGUgcHJvcFR5cGVzIGRlZmluaXRpb24sXG4gKiBwcm92aWRlZCBieSB0aGUgdHlwZS5cbiAqXG4gKiBAcGFyYW0ge1JlYWN0RWxlbWVudH0gZWxlbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVQcm9wVHlwZXMoZWxlbWVudCkge1xuICB7XG4gICAgdmFyIHR5cGUgPSBlbGVtZW50LnR5cGU7XG5cbiAgICBpZiAodHlwZSA9PT0gbnVsbCB8fCB0eXBlID09PSB1bmRlZmluZWQgfHwgdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHByb3BUeXBlcztcblxuICAgIGlmICh0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcHJvcFR5cGVzID0gdHlwZS5wcm9wVHlwZXM7XG4gICAgfSBlbHNlIGlmICh0eXBlb2YgdHlwZSA9PT0gJ29iamVjdCcgJiYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgLy8gTm90ZTogTWVtbyBvbmx5IGNoZWNrcyBvdXRlciBwcm9wcyBoZXJlLlxuICAgIC8vIElubmVyIHByb3BzIGFyZSBjaGVja2VkIGluIHRoZSByZWNvbmNpbGVyLlxuICAgIHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX01FTU9fVFlQRSkpIHtcbiAgICAgIHByb3BUeXBlcyA9IHR5cGUucHJvcFR5cGVzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHByb3BUeXBlcykge1xuICAgICAgLy8gSW50ZW50aW9uYWxseSBpbnNpZGUgdG8gYXZvaWQgdHJpZ2dlcmluZyBsYXp5IGluaXRpYWxpemVyczpcbiAgICAgIHZhciBuYW1lID0gZ2V0Q29tcG9uZW50TmFtZSh0eXBlKTtcbiAgICAgIGNoZWNrUHJvcFR5cGVzKHByb3BUeXBlcywgZWxlbWVudC5wcm9wcywgJ3Byb3AnLCBuYW1lLCBlbGVtZW50KTtcbiAgICB9IGVsc2UgaWYgKHR5cGUuUHJvcFR5cGVzICE9PSB1bmRlZmluZWQgJiYgIXByb3BUeXBlc01pc3NwZWxsV2FybmluZ1Nob3duKSB7XG4gICAgICBwcm9wVHlwZXNNaXNzcGVsbFdhcm5pbmdTaG93biA9IHRydWU7IC8vIEludGVudGlvbmFsbHkgaW5zaWRlIHRvIGF2b2lkIHRyaWdnZXJpbmcgbGF6eSBpbml0aWFsaXplcnM6XG5cbiAgICAgIHZhciBfbmFtZSA9IGdldENvbXBvbmVudE5hbWUodHlwZSk7XG5cbiAgICAgIGVycm9yKCdDb21wb25lbnQgJXMgZGVjbGFyZWQgYFByb3BUeXBlc2AgaW5zdGVhZCBvZiBgcHJvcFR5cGVzYC4gRGlkIHlvdSBtaXNzcGVsbCB0aGUgcHJvcGVydHkgYXNzaWdubWVudD8nLCBfbmFtZSB8fCAnVW5rbm93bicpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgdHlwZS5nZXREZWZhdWx0UHJvcHMgPT09ICdmdW5jdGlvbicgJiYgIXR5cGUuZ2V0RGVmYXVsdFByb3BzLmlzUmVhY3RDbGFzc0FwcHJvdmVkKSB7XG4gICAgICBlcnJvcignZ2V0RGVmYXVsdFByb3BzIGlzIG9ubHkgdXNlZCBvbiBjbGFzc2ljIFJlYWN0LmNyZWF0ZUNsYXNzICcgKyAnZGVmaW5pdGlvbnMuIFVzZSBhIHN0YXRpYyBwcm9wZXJ0eSBuYW1lZCBgZGVmYXVsdFByb3BzYCBpbnN0ZWFkLicpO1xuICAgIH1cbiAgfVxufVxuLyoqXG4gKiBHaXZlbiBhIGZyYWdtZW50LCB2YWxpZGF0ZSB0aGF0IGl0IGNhbiBvbmx5IGJlIHByb3ZpZGVkIHdpdGggZnJhZ21lbnQgcHJvcHNcbiAqIEBwYXJhbSB7UmVhY3RFbGVtZW50fSBmcmFnbWVudFxuICovXG5cblxuZnVuY3Rpb24gdmFsaWRhdGVGcmFnbWVudFByb3BzKGZyYWdtZW50KSB7XG4gIHtcbiAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGZyYWdtZW50LnByb3BzKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGtleSA9IGtleXNbaV07XG5cbiAgICAgIGlmIChrZXkgIT09ICdjaGlsZHJlbicgJiYga2V5ICE9PSAna2V5Jykge1xuICAgICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKGZyYWdtZW50KTtcblxuICAgICAgICBlcnJvcignSW52YWxpZCBwcm9wIGAlc2Agc3VwcGxpZWQgdG8gYFJlYWN0LkZyYWdtZW50YC4gJyArICdSZWFjdC5GcmFnbWVudCBjYW4gb25seSBoYXZlIGBrZXlgIGFuZCBgY2hpbGRyZW5gIHByb3BzLicsIGtleSk7XG5cbiAgICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShudWxsKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGZyYWdtZW50LnJlZiAhPT0gbnVsbCkge1xuICAgICAgc2V0Q3VycmVudGx5VmFsaWRhdGluZ0VsZW1lbnQkMShmcmFnbWVudCk7XG5cbiAgICAgIGVycm9yKCdJbnZhbGlkIGF0dHJpYnV0ZSBgcmVmYCBzdXBwbGllZCB0byBgUmVhY3QuRnJhZ21lbnRgLicpO1xuXG4gICAgICBzZXRDdXJyZW50bHlWYWxpZGF0aW5nRWxlbWVudCQxKG51bGwpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBqc3hXaXRoVmFsaWRhdGlvbih0eXBlLCBwcm9wcywga2V5LCBpc1N0YXRpY0NoaWxkcmVuLCBzb3VyY2UsIHNlbGYpIHtcbiAge1xuICAgIHZhciB2YWxpZFR5cGUgPSBpc1ZhbGlkRWxlbWVudFR5cGUodHlwZSk7IC8vIFdlIHdhcm4gaW4gdGhpcyBjYXNlIGJ1dCBkb24ndCB0aHJvdy4gV2UgZXhwZWN0IHRoZSBlbGVtZW50IGNyZWF0aW9uIHRvXG4gICAgLy8gc3VjY2VlZCBhbmQgdGhlcmUgd2lsbCBsaWtlbHkgYmUgZXJyb3JzIGluIHJlbmRlci5cblxuICAgIGlmICghdmFsaWRUeXBlKSB7XG4gICAgICB2YXIgaW5mbyA9ICcnO1xuXG4gICAgICBpZiAodHlwZSA9PT0gdW5kZWZpbmVkIHx8IHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsICYmIE9iamVjdC5rZXlzKHR5cGUpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpbmZvICs9ICcgWW91IGxpa2VseSBmb3Jnb3QgdG8gZXhwb3J0IHlvdXIgY29tcG9uZW50IGZyb20gdGhlIGZpbGUgJyArIFwiaXQncyBkZWZpbmVkIGluLCBvciB5b3UgbWlnaHQgaGF2ZSBtaXhlZCB1cCBkZWZhdWx0IGFuZCBuYW1lZCBpbXBvcnRzLlwiO1xuICAgICAgfVxuXG4gICAgICB2YXIgc291cmNlSW5mbyA9IGdldFNvdXJjZUluZm9FcnJvckFkZGVuZHVtKHNvdXJjZSk7XG5cbiAgICAgIGlmIChzb3VyY2VJbmZvKSB7XG4gICAgICAgIGluZm8gKz0gc291cmNlSW5mbztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGluZm8gKz0gZ2V0RGVjbGFyYXRpb25FcnJvckFkZGVuZHVtKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0eXBlU3RyaW5nO1xuXG4gICAgICBpZiAodHlwZSA9PT0gbnVsbCkge1xuICAgICAgICB0eXBlU3RyaW5nID0gJ251bGwnO1xuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSAnYXJyYXknO1xuICAgICAgfSBlbHNlIGlmICh0eXBlICE9PSB1bmRlZmluZWQgJiYgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRUxFTUVOVF9UWVBFKSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSBcIjxcIiArIChnZXRDb21wb25lbnROYW1lKHR5cGUudHlwZSkgfHwgJ1Vua25vd24nKSArIFwiIC8+XCI7XG4gICAgICAgIGluZm8gPSAnIERpZCB5b3UgYWNjaWRlbnRhbGx5IGV4cG9ydCBhIEpTWCBsaXRlcmFsIGluc3RlYWQgb2YgYSBjb21wb25lbnQ/JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGVTdHJpbmcgPSB0eXBlb2YgdHlwZTtcbiAgICAgIH1cblxuICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogdHlwZSBpcyBpbnZhbGlkIC0tIGV4cGVjdGVkIGEgc3RyaW5nIChmb3IgJyArICdidWlsdC1pbiBjb21wb25lbnRzKSBvciBhIGNsYXNzL2Z1bmN0aW9uIChmb3IgY29tcG9zaXRlICcgKyAnY29tcG9uZW50cykgYnV0IGdvdDogJXMuJXMnLCB0eXBlU3RyaW5nLCBpbmZvKTtcbiAgICB9XG5cbiAgICB2YXIgZWxlbWVudCA9IGpzeERFVih0eXBlLCBwcm9wcywga2V5LCBzb3VyY2UsIHNlbGYpOyAvLyBUaGUgcmVzdWx0IGNhbiBiZSBudWxsaXNoIGlmIGEgbW9jayBvciBhIGN1c3RvbSBmdW5jdGlvbiBpcyB1c2VkLlxuICAgIC8vIFRPRE86IERyb3AgdGhpcyB3aGVuIHRoZXNlIGFyZSBubyBsb25nZXIgYWxsb3dlZCBhcyB0aGUgdHlwZSBhcmd1bWVudC5cblxuICAgIGlmIChlbGVtZW50ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH0gLy8gU2tpcCBrZXkgd2FybmluZyBpZiB0aGUgdHlwZSBpc24ndCB2YWxpZCBzaW5jZSBvdXIga2V5IHZhbGlkYXRpb24gbG9naWNcbiAgICAvLyBkb2Vzbid0IGV4cGVjdCBhIG5vbi1zdHJpbmcvZnVuY3Rpb24gdHlwZSBhbmQgY2FuIHRocm93IGNvbmZ1c2luZyBlcnJvcnMuXG4gICAgLy8gV2UgZG9uJ3Qgd2FudCBleGNlcHRpb24gYmVoYXZpb3IgdG8gZGlmZmVyIGJldHdlZW4gZGV2IGFuZCBwcm9kLlxuICAgIC8vIChSZW5kZXJpbmcgd2lsbCB0aHJvdyB3aXRoIGEgaGVscGZ1bCBtZXNzYWdlIGFuZCBhcyBzb29uIGFzIHRoZSB0eXBlIGlzXG4gICAgLy8gZml4ZWQsIHRoZSBrZXkgd2FybmluZ3Mgd2lsbCBhcHBlYXIuKVxuXG5cbiAgICBpZiAodmFsaWRUeXBlKSB7XG4gICAgICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcblxuICAgICAgaWYgKGNoaWxkcmVuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzU3RhdGljQ2hpbGRyZW4pIHtcbiAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgdmFsaWRhdGVDaGlsZEtleXMoY2hpbGRyZW5baV0sIHR5cGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmZyZWV6ZSkge1xuICAgICAgICAgICAgICBPYmplY3QuZnJlZXplKGNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXJyb3IoJ1JlYWN0LmpzeDogU3RhdGljIGNoaWxkcmVuIHNob3VsZCBhbHdheXMgYmUgYW4gYXJyYXkuICcgKyAnWW91IGFyZSBsaWtlbHkgZXhwbGljaXRseSBjYWxsaW5nIFJlYWN0LmpzeHMgb3IgUmVhY3QuanN4REVWLiAnICsgJ1VzZSB0aGUgQmFiZWwgdHJhbnNmb3JtIGluc3RlYWQuJyk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbGlkYXRlQ2hpbGRLZXlzKGNoaWxkcmVuLCB0eXBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09PSBleHBvcnRzLkZyYWdtZW50KSB7XG4gICAgICB2YWxpZGF0ZUZyYWdtZW50UHJvcHMoZWxlbWVudCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRlUHJvcFR5cGVzKGVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9XG59IC8vIFRoZXNlIHR3byBmdW5jdGlvbnMgZXhpc3QgdG8gc3RpbGwgZ2V0IGNoaWxkIHdhcm5pbmdzIGluIGRldlxuXG52YXIganN4REVWJDEgPSAganN4V2l0aFZhbGlkYXRpb24gO1xuXG5leHBvcnRzLmpzeERFViA9IGpzeERFViQxO1xuICB9KSgpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3JlYWN0LWpzeC1kZXYtcnVudGltZS5wcm9kdWN0aW9uLm1pbi5qcycpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1qc3gtZGV2LXJ1bnRpbWUuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcbnZhciBjYWxsQm91bmQgPSByZXF1aXJlKCdjYWxsLWJpbmQvY2FsbEJvdW5kJyk7XG52YXIgaW5zcGVjdCA9IHJlcXVpcmUoJ29iamVjdC1pbnNwZWN0Jyk7XG5cbnZhciAkVHlwZUVycm9yID0gR2V0SW50cmluc2ljKCclVHlwZUVycm9yJScpO1xudmFyICRXZWFrTWFwID0gR2V0SW50cmluc2ljKCclV2Vha01hcCUnLCB0cnVlKTtcbnZhciAkTWFwID0gR2V0SW50cmluc2ljKCclTWFwJScsIHRydWUpO1xuXG52YXIgJHdlYWtNYXBHZXQgPSBjYWxsQm91bmQoJ1dlYWtNYXAucHJvdG90eXBlLmdldCcsIHRydWUpO1xudmFyICR3ZWFrTWFwU2V0ID0gY2FsbEJvdW5kKCdXZWFrTWFwLnByb3RvdHlwZS5zZXQnLCB0cnVlKTtcbnZhciAkd2Vha01hcEhhcyA9IGNhbGxCb3VuZCgnV2Vha01hcC5wcm90b3R5cGUuaGFzJywgdHJ1ZSk7XG52YXIgJG1hcEdldCA9IGNhbGxCb3VuZCgnTWFwLnByb3RvdHlwZS5nZXQnLCB0cnVlKTtcbnZhciAkbWFwU2V0ID0gY2FsbEJvdW5kKCdNYXAucHJvdG90eXBlLnNldCcsIHRydWUpO1xudmFyICRtYXBIYXMgPSBjYWxsQm91bmQoJ01hcC5wcm90b3R5cGUuaGFzJywgdHJ1ZSk7XG5cbi8qXG4gKiBUaGlzIGZ1bmN0aW9uIHRyYXZlcnNlcyB0aGUgbGlzdCByZXR1cm5pbmcgdGhlIG5vZGUgY29ycmVzcG9uZGluZyB0byB0aGVcbiAqIGdpdmVuIGtleS5cbiAqXG4gKiBUaGF0IG5vZGUgaXMgYWxzbyBtb3ZlZCB0byB0aGUgaGVhZCBvZiB0aGUgbGlzdCwgc28gdGhhdCBpZiBpdCdzIGFjY2Vzc2VkXG4gKiBhZ2FpbiB3ZSBkb24ndCBuZWVkIHRvIHRyYXZlcnNlIHRoZSB3aG9sZSBsaXN0LiBCeSBkb2luZyBzbywgYWxsIHRoZSByZWNlbnRseVxuICogdXNlZCBub2RlcyBjYW4gYmUgYWNjZXNzZWQgcmVsYXRpdmVseSBxdWlja2x5LlxuICovXG52YXIgbGlzdEdldE5vZGUgPSBmdW5jdGlvbiAobGlzdCwga2V5KSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgY29uc2lzdGVudC1yZXR1cm5cblx0Zm9yICh2YXIgcHJldiA9IGxpc3QsIGN1cnI7IChjdXJyID0gcHJldi5uZXh0KSAhPT0gbnVsbDsgcHJldiA9IGN1cnIpIHtcblx0XHRpZiAoY3Vyci5rZXkgPT09IGtleSkge1xuXHRcdFx0cHJldi5uZXh0ID0gY3Vyci5uZXh0O1xuXHRcdFx0Y3Vyci5uZXh0ID0gbGlzdC5uZXh0O1xuXHRcdFx0bGlzdC5uZXh0ID0gY3VycjsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuXHRcdFx0cmV0dXJuIGN1cnI7XG5cdFx0fVxuXHR9XG59O1xuXG52YXIgbGlzdEdldCA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXkpIHtcblx0dmFyIG5vZGUgPSBsaXN0R2V0Tm9kZShvYmplY3RzLCBrZXkpO1xuXHRyZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlO1xufTtcbnZhciBsaXN0U2V0ID0gZnVuY3Rpb24gKG9iamVjdHMsIGtleSwgdmFsdWUpIHtcblx0dmFyIG5vZGUgPSBsaXN0R2V0Tm9kZShvYmplY3RzLCBrZXkpO1xuXHRpZiAobm9kZSkge1xuXHRcdG5vZGUudmFsdWUgPSB2YWx1ZTtcblx0fSBlbHNlIHtcblx0XHQvLyBQcmVwZW5kIHRoZSBuZXcgbm9kZSB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBsaXN0XG5cdFx0b2JqZWN0cy5uZXh0ID0geyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG5cdFx0XHRrZXk6IGtleSxcblx0XHRcdG5leHQ6IG9iamVjdHMubmV4dCxcblx0XHRcdHZhbHVlOiB2YWx1ZVxuXHRcdH07XG5cdH1cbn07XG52YXIgbGlzdEhhcyA9IGZ1bmN0aW9uIChvYmplY3RzLCBrZXkpIHtcblx0cmV0dXJuICEhbGlzdEdldE5vZGUob2JqZWN0cywga2V5KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZ2V0U2lkZUNoYW5uZWwoKSB7XG5cdHZhciAkd207XG5cdHZhciAkbTtcblx0dmFyICRvO1xuXHR2YXIgY2hhbm5lbCA9IHtcblx0XHRhc3NlcnQ6IGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdGlmICghY2hhbm5lbC5oYXMoa2V5KSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgJFR5cGVFcnJvcignU2lkZSBjaGFubmVsIGRvZXMgbm90IGNvbnRhaW4gJyArIGluc3BlY3Qoa2V5KSk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRnZXQ6IGZ1bmN0aW9uIChrZXkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBjb25zaXN0ZW50LXJldHVyblxuXHRcdFx0aWYgKCRXZWFrTWFwICYmIGtleSAmJiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYgKCR3bSkge1xuXHRcdFx0XHRcdHJldHVybiAkd2Vha01hcEdldCgkd20sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoJG0pIHtcblx0XHRcdFx0XHRyZXR1cm4gJG1hcEdldCgkbSwga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCRvKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZWx5LWlmXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RHZXQoJG8sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdGhhczogZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0aWYgKCRXZWFrTWFwICYmIGtleSAmJiAodHlwZW9mIGtleSA9PT0gJ29iamVjdCcgfHwgdHlwZW9mIGtleSA9PT0gJ2Z1bmN0aW9uJykpIHtcblx0XHRcdFx0aWYgKCR3bSkge1xuXHRcdFx0XHRcdHJldHVybiAkd2Vha01hcEhhcygkd20sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoJG0pIHtcblx0XHRcdFx0XHRyZXR1cm4gJG1hcEhhcygkbSwga2V5KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCRvKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbG9uZWx5LWlmXG5cdFx0XHRcdFx0cmV0dXJuIGxpc3RIYXMoJG8sIGtleSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcblx0XHRcdGlmICgkV2Vha01hcCAmJiBrZXkgJiYgKHR5cGVvZiBrZXkgPT09ICdvYmplY3QnIHx8IHR5cGVvZiBrZXkgPT09ICdmdW5jdGlvbicpKSB7XG5cdFx0XHRcdGlmICghJHdtKSB7XG5cdFx0XHRcdFx0JHdtID0gbmV3ICRXZWFrTWFwKCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0JHdlYWtNYXBTZXQoJHdtLCBrZXksIHZhbHVlKTtcblx0XHRcdH0gZWxzZSBpZiAoJE1hcCkge1xuXHRcdFx0XHRpZiAoISRtKSB7XG5cdFx0XHRcdFx0JG0gPSBuZXcgJE1hcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdCRtYXBTZXQoJG0sIGtleSwgdmFsdWUpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCEkbykge1xuXHRcdFx0XHRcdC8qXG5cdFx0XHRcdFx0ICogSW5pdGlhbGl6ZSB0aGUgbGlua2VkIGxpc3QgYXMgYW4gZW1wdHkgbm9kZSwgc28gdGhhdCB3ZSBkb24ndCBoYXZlXG5cdFx0XHRcdFx0ICogdG8gc3BlY2lhbC1jYXNlIGhhbmRsaW5nIG9mIHRoZSBmaXJzdCBub2RlOiB3ZSBjYW4gYWx3YXlzIHJlZmVyIHRvXG5cdFx0XHRcdFx0ICogaXQgYXMgKHByZXZpb3VzIG5vZGUpLm5leHQsIGluc3RlYWQgb2Ygc29tZXRoaW5nIGxpa2UgKGxpc3QpLmhlYWRcblx0XHRcdFx0XHQgKi9cblx0XHRcdFx0XHQkbyA9IHsga2V5OiB7fSwgbmV4dDogbnVsbCB9O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxpc3RTZXQoJG8sIGtleSwgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGNoYW5uZWw7XG59O1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==