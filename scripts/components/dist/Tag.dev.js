"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Component2 = _interopRequireDefault(require("../factories/Component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Tag =
/*#__PURE__*/
function (_Component) {
  _inherits(Tag, _Component);

  function Tag(DOMtarget, type, value) {
    var _this;

    _classCallCheck(this, Tag);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Tag).call(this, DOMtarget, "tag", "div"));
    _this.DOM.className = "Tag";
    _this.type = type;
    _this.value = value;
    return _this;
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      this.DOM.innerHTML = "\n        <button type=\"text\" id=\"tagIngredient\" name=\"ingredients\" class=\"".concat(this.type, "\">\n        <p> ").concat(this.value, " </p>\n        <i class=\"fa-solid fa-circle-xmark\"></i>\n        </button>\n");
    }
  }]);

  return Tag;
}(_Component2["default"]);
/* render() {
     switch (this.type) {
           case "ingredients":
             this.DOM.innerHTML = `
     <button type="text" id="tagIngredient" name="ingredients" class="btn btn-primary" >
     <p> ${this.value} </p>
     <i class="fa-solid fa-circle-xmark"></i>
     </button>
`  ; break;
         case "appareils": this.DOM.innerHTML = `
    button  type="text" id="TagAppareils" class="btn btn-success"> 
     <p>${this.value} </p>
     <i class="fa-solid fa-circle-xmark"></i>
     </button>`
             ; break;
         case "ustensils": this.DOM.innerHTML = `
     button  type="text" id="TagUstensils" class="btn btn-danger"> 
      <p>${this.value} </p>
      <i class="fa-solid fa-circle-xmark"></i>
      </button>`
             ; break;
     }
   }
}*/


exports["default"] = Tag;