"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Component2 = _interopRequireDefault(require("../factories/Component.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Ustensils =
/*#__PURE__*/
function (_Component) {
  _inherits(Ustensils, _Component);

  function Ustensils(DOMtarget, props) {
    var _this;

    _classCallCheck(this, Ustensils);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ustensils).call(this, DOMtarget, "UstensilesTag", "div"));
    _this.DOM.className = "UstensilesTag";
    _this.props = props;
    _this.ustensils = [];

    _this.GetUstensilsList();

    return _this;
  }

  _createClass(Ustensils, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.DOM.innerHTML = "\n        <div class=\"btn-group\">\n        <button type=\"text\" id=\"btnOpen1\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Ustensiles</button>\n        <div class=\"dropdown-menu\" id=\"menuUstensiles\">\n        <p> </p>\n        </div> \n";
      var btn1 = document.querySelector("#btnOpen1");
      btn1.addEventListener("click", function (e) {
        _this2.AfficherUstensils();

        btn1.innerHTML = "<input type='text' placeholder ='Rechercher un ustensil' id='searchUstensils' />";
        btn1.classList.toggle("dropdown-rotate");
      });
    }
  }, {
    key: "AfficherUstensils",
    value: function AfficherUstensils() {
      var target = document.getElementById("menuUstensiles");
      target.innerHTML = "";
      this.ustensils.forEach(function (elm) {
        target.insertAdjacentHTML('beforeend', "<a class=\"dropdown-item\">".concat(elm, "</a>"));
      });
    }
  }, {
    key: "GetUstensilsList",
    value: function GetUstensilsList() {
      var _this3 = this;

      this.ustensils = [];
      this.props.forEach(function (recipe) {
        recipe.ustensils.forEach(function (elm) {
          _this3.ustensils.push(elm);
        });
      });
      this.ustensils = _toConsumableArray(new Set(this.ustensils));
    }
  }]);

  return Ustensils;
}(_Component2["default"]);
/*
constructor(props) {
const Target = document.getElementById("tag");
this.DOM = document.createElement("div");
Target.appendChild(this.DOM);
this.DOM.innerHTML = `
<div class="btn-group">
<button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
Ingredients </button>
<div class="dropdown-menu" id="menuIngredients">
</div> 
`
const Target2 = document.getElementById("menuIngredients");

}


/* ${  for (let recipe of this.props){
this.ingredients.forEach(ingredient => {
new ingredient(ingredient.ingredient)
})
   }
}
}
<div class="dropdown-menu" id="menuIngredients">
${new ingredient(this.appliance)} 
</div>
<div class="dropdown-menu" id="menuIngredients">
${this.ustensils.forEach(ustensil => {
new ingredient(ustensil)
})
}
</div>
*/


exports["default"] = Ustensils;