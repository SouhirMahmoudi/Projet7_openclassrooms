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

var CardRecipe =
/*#__PURE__*/
function (_Component) {
  _inherits(CardRecipe, _Component);

  /**
   * 
   * @param {HTMLElment} DOMtarget 
   * @param {Object} props 
   * @param {String} props.name
   * @param {number} props.id
   * @param {Number} props.time
   * @param {Array} props.ingredients
   * @param {string} props.ingredient
   * @param {string} props.quantity
   * @param {number} props.unit
   * @param {String} props.description
   */
  function CardRecipe(DOMtarget, props) {
    var _this;

    _classCallCheck(this, CardRecipe);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CardRecipe).call(this, DOMtarget, props.name, "div", props));
    _this.DOM.className = "card";
    return _this;
  }

  _createClass(CardRecipe, [{
    key: "render",
    value: function render() {
      this.DOM.innerHTML = "\n      <img class=\"card-img-top\" src=\"/Projet7_openclassrooms/assets/images/recette.png\" alt=\"Card image cap\">\n      <div class=\"card-body\">\n     <div class=\"card-title\"> \n     <h2> ".concat(this.name, " </h2>\n     <aside> <i class=\"far fa-clock\"></i> ").concat(this.time, " min</aside>\n     </div>\n        <div class=\"card-text\">\n            <p class=\"listIngredients\"> ").concat(this.showIngredients(), " </p>\n             <p class=\"recette\"> ").concat(this.description, " </p>\n        </div>\n  </div> ");
    }
  }, {
    key: "showIngredients",
    value: function showIngredients() {
      var result = "";
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.ingredients[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var ingredient = _step.value;

          if (ingredient.quantity == undefined) {
            result += "<span class=\"ingredients\"><strong>".concat(ingredient.ingredient, "</strong></span>");
          } else if (ingredient.unit == undefined) {
            result += "<span class=\"ingredients\"><strong>".concat(ingredient.ingredient, "</strong> : ").concat(ingredient.quantity, "</span>");
          } else if (ingredient.unit == "grammes") {
            result += "<span class=\"ingredients\"><strong>".concat(ingredient.ingredient, "</strong> :  ").concat(ingredient.quantity, " g</span>");
          } else {
            result += "<span class=\"ingredients\"><strong>".concat(ingredient.ingredient, "</strong> :  ").concat(ingredient.quantity, " ").concat(ingredient.unit, "</span> ");
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return result;
    }
  }]);

  return CardRecipe;
}(_Component2["default"]);

exports["default"] = CardRecipe;