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

var Appareils =
/*#__PURE__*/
function (_Component) {
  _inherits(Appareils, _Component);

  function Appareils(DOMtarget, props) {
    var _this;

    _classCallCheck(this, Appareils);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Appareils).call(this, DOMtarget, "appareilsTag", "div", props));
    _this.DOM.className = "appareilsTag";
    _this.props = props;
    _this.appareils = [];

    _this.GetApplianceList();

    return _this;
  }

  _createClass(Appareils, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.DOM.innerHTML = "\n        <div class=\"btn-group\" id=\"btnGroup2\">\n        <div class=\"container2\">\n        <button  id=\"btnOpen2\" class=\"btn btn-success\"> Appareils </button>\n        <span class=\"toggle2\">  <i class=\"fas fa-chevron-down\"></i> </span>\n        </div>\n        <div class=\"dropdown-menu\" id=\"menuAppareils\">\n        </div> \n";
      this.input = document.createElement("input");
      this.input.setAttribute("type", "text");
      this.input.setAttribute("placeholder", "Rechercher un appareil");
      this.input.setAttribute("id", "searchAppareils");
      this.btn = document.createElement("button");
      this.btn.setAttribute("id", "btnOpen2");
      this.btn.className = "btn btn-success";
      this.btn.setAttribute("name", "appareils");
      this.btn.innerHTML = "Appareils";
      var btn = document.querySelector("#btnGroup2 .toggle2");
      btn.addEventListener("click", function (e) {
        if (document.querySelector("#btnGroup2 .btn") != null) {
          document.querySelector("#btnGroup2 .btn").replaceWith(_this2.input);
          var target = document.getElementById("menuAppareils");
          target.innerHTML = "";

          _this2.appareils.forEach(function (elm) {
            target.insertAdjacentHTML('beforeend', "<a class=\"dropdown-item\">".concat(elm, "</a>"));
          });

          var element2 = document.querySelector(".toggle2 .fa-chevron-down");
          element2.classList.toggle("fa-chevron-up");
          target.classList.remove("invisible");
          target.classList.toggle("show2");
          var element3 = document.querySelector(".container2");
          element3.classList.remove("vue");
        } else {
          document.querySelector("#btnGroup2 input").replaceWith(_this2.btn);

          var _target = document.getElementById("menuAppareils");

          _target.innerHTML = "";
          var element2 = document.querySelector(".toggle2 .fa-chevron-down");
          element2.classList.remove("fa-chevron-up");

          _target.classList.remove("show2");

          var element3 = document.querySelector(".container2");
          element3.classList.toggle("vue");
        }
      });
    }
  }, {
    key: "GetApplianceList",
    value: function GetApplianceList() {
      var _this3 = this;

      this.appareils = [];
      this.props.forEach(function (recipe) {
        _this3.appareils.push(recipe.appliance);
      });
      this.appareils = _toConsumableArray(new Set(this.appareils));
    }
  }, {
    key: "GetAppliancelistByInputTag",
    value: function GetAppliancelistByInputTag(liste) {
      this.appareils = liste;
      var target = document.getElementById("menuAppareils");
      target.innerHTML = "";
      this.appareils.forEach(function (elm) {
        target.insertAdjacentHTML('beforeend', "<a class=\"dropdown-item\">".concat(elm, "</a>"));
      });
    }
  }]);

  return Appareils;
}(_Component2["default"]);
/*  AfficherAppareils() {
        const target = document.getElementById("menuAppareils");
        target.innerHTML = "";
        this.appareils.forEach(elm => {
            target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

        })

    }

${  for (let recipe of this.props){

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


exports["default"] = Appareils;