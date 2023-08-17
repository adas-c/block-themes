/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@wordpress/icons/build-module/library/link.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/link.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);

/**
 * WordPress dependencies
 */

const link = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M10 17.389H8.444A5.194 5.194 0 1 1 8.444 7H10v1.5H8.444a3.694 3.694 0 0 0 0 7.389H10v1.5ZM14 7h1.556a5.194 5.194 0 0 1 0 10.39H14v-1.5h1.556a3.694 3.694 0 0 0 0-7.39H14V7Zm-4.5 6h5v-1.5h-5V13Z"
}));
/* harmony default export */ __webpack_exports__["default"] = (link);
//# sourceMappingURL=link.js.map

/***/ }),

/***/ "./inc/ourColor.js":
/*!*************************!*\
  !*** ./inc/ourColor.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const ourColors = [{
  name: "blue",
  color: "#0d3b66"
}, {
  name: "orange",
  color: "#ee964b"
}];
/* harmony default export */ __webpack_exports__["default"] = (ourColors);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["primitives"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*************************************!*\
  !*** ./our-blocks/genericbutton.js ***!
  \*************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _inc_ourColor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../inc/ourColor */ "./inc/ourColor.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/link.js");






wp.blocks.registerBlockType("ourblocktheme/genericbutton", {
  title: "Generic Button",
  attributes: {
    text: {
      type: "string"
    },
    size: {
      type: "string",
      default: "large"
    },
    linkObject: {
      type: "object",
      default: {
        url: ""
      }
    },
    colorName: {
      type: "string",
      default: "blue"
    }
  },
  edit: EditComponent,
  save: SaveComponent
});
function EditComponent(props) {
  const [isOpenLink, setIsOpenLink] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  function buttonHandler() {
    setIsOpenLink(prev => !prev);
  }
  function handleLinkChange(newLink) {
    props.setAttributes({
      linkObject: newLink
    });
  }
  const currentColorValue = _inc_ourColor__WEBPACK_IMPORTED_MODULE_1__["default"].filter(color => {
    return color.name === props.attributes.colorName;
  })[0].color;
  function handleColorPicker(colorCode) {
    const {
      name
    } = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.getColorObjectByColorValue)(_inc_ourColor__WEBPACK_IMPORTED_MODULE_1__["default"], colorCode);
    props.setAttributes({
      colorName: name
    });
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.BlockControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    onClick: buttonHandler,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarGroup, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    isPressed: props.attributes.size === "large",
    onClick: () => props.setAttributes({
      size: "large"
    })
  }, "Large"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    isPressed: props.attributes.size === "medium",
    onClick: () => props.setAttributes({
      size: "medium"
    })
  }, "Medium"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToolbarButton, {
    isPressed: props.attributes.size === "small",
    onClick: () => props.setAttributes({
      size: "small"
    })
  }, "Small"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Color",
    initialOpen: true
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelRow, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPalette, {
    disableCustomColors: true,
    clearable: false,
    colors: _inc_ourColor__WEBPACK_IMPORTED_MODULE_1__["default"],
    value: currentColorValue,
    onChange: handleColorPicker
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    allowedFormats: [],
    tagName: "a",
    className: `btn btn--${props.attributes.size} btn--${props.attributes.colorName}`,
    value: props.attributes.text,
    onChange: e => props.setAttributes({
      text: e
    })
  }), isOpenLink && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
    position: "middle center",
    onFocusOutside: () => setIsOpenLink(false)
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.__experimentalLinkControl, {
    settings: [],
    value: props.attributes.linkObject,
    onChange: handleLinkChange
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: () => setIsOpenLink(false),
    style: {
      display: "block",
      width: "100%"
    }
  }, "Confirm link")));
}
function SaveComponent(props) {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: props.attributes.linkObject.url,
    className: `btn btn--${props.attributes.size} btn--${props.attributes.colorName}`
  }, props.attributes.text);
}
}();
/******/ })()
;
//# sourceMappingURL=genericbutton.js.map