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

/**
 * @param {object} [props]
 */
var Ingredients =
/*#__PURE__*/
function (_Component) {
  _inherits(Ingredients, _Component);

  function Ingredients(DOMtarget, props) {
    var _this;

    _classCallCheck(this, Ingredients);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ingredients).call(this, DOMtarget, "ingredientsTag", "div"));
    _this.DOM.className = "ingredientsTag";
    _this.props = props;
    _this.ingredients = [];

    _this.GetIngredientslist();

    return _this;
  }

  _createClass(Ingredients, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.DOM.innerHTML = "\n        <div class=\"btn-group\">\n        <button type=\"text\" id=\"btnOpen\" name=\"ingredients\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        Ingredients </button>\n        <div id=\"recherche\"></div>\n        <div class=\"dropdown-menu\" id=\"menuIngredients\">\n        <p> </p>\n        </div> \n        \n        </div>\n";
      var btn = document.querySelector("#btnOpen");
      btn.addEventListener("click", function (e) {
        _this2.AfficherIngredients();

        btn.innerHTML = "<input type='text' placeholder ='Rechercher un ingrédient' id='searchIngredients' />";
        btn.classList.toggle("dropdown-rotate");
      });
    }
    /* AfficherInput(){
         const target1 = document.getElementById("recherche");
         this.DOM.innerHTML = `
         <div class="btn-group">
         <input type="text" id="btnOpen" name="ingredients" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"/>
         <div id="recherche"></div>
         <div class="dropdown-menu" id="menuIngredients">
         <p> </p>
         </div> 
         
         </div> `
     }*/

  }, {
    key: "AfficherIngredients",
    value: function AfficherIngredients() {
      var target = document.getElementById("menuIngredients");
      target.innerHTML = "";
      this.ingredients.forEach(function (elm) {
        target.insertAdjacentHTML('beforeend', "<a class=\"dropdown-item\">".concat(elm, "</a>"));
      });
    }
  }, {
    key: "GetIngredientslist",
    value: function GetIngredientslist() {
      var _this3 = this;

      this.ingredients = [];
      this.props.forEach(function (recipe) {
        recipe.ingredients.forEach(function (elm) {
          _this3.ingredients.push(elm.ingredient);
        });
      });
      this.ingredients = _toConsumableArray(new Set(this.ingredients));
      console.log(this.ingredients);
    }
  }]);

  return Ingredients;
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


exports["default"] = Ingredients;