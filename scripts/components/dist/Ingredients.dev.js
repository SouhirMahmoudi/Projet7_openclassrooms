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
    _this.ingredients = []; //this.GetIngredientslist();
    // this.GetIngredientslistByInputTag();

    return _this;
  }

  _createClass(Ingredients, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      this.DOM.innerHTML = "\n        <div class=\"btn-group\" id=\"btnGroup\">\n        <div class=\"container\">\n        <button type=\"text\" id=\"btnOpen\" name=\"ingredients\" class=\"btn btn-primary\" >\n        Ingredients </button>\n        <span class=\"toggle\">  <i id=\"fas\" class=\"fas fa-chevron-down\"></i> </span>\n        </div>\n        <div class=\"dropdown-menu\" id=\"menuIngredients\">\n        <p> </p>\n        </div> \n        \n        </div>\n";
      this.input = document.createElement("input");
      this.input.setAttribute("type", "text");
      this.input.setAttribute("placeholder", "Rechercher un ingrédient");
      this.input.setAttribute("id", "searchIngredients");
      this.btn = document.createElement("button");
      this.btn.setAttribute("id", "btnOpen");
      this.btn.className = "btn btn-primary";
      this.btn.setAttribute("name", "ingredients");
      this.btn.innerHTML = "Ingredients";
      var btn = document.querySelector("#btnGroup .toggle");
      btn.addEventListener("click", function (e) {
        if (document.querySelector("#btnGroup .btn") != null) {
          document.querySelector("#btnGroup .btn").replaceWith(_this2.input);
          var target = document.getElementById("menuIngredients");
          target.innerHTML = "";

          _this2.ingredients.forEach(function (elm) {
            target.insertAdjacentHTML('beforeend', "<a class=\"dropdown-item\">".concat(elm, "</a>"));
          }); // const TargetTag = document.getElementById("iconTag");
          //const items = document.querySelectorAll("#menuIngredients .dropdown-item");
          //   for (let item of items) {
          //  item.addEventListener("click", function (e) {
          //   new Tag(TargetTag, "ingredients", e.target.innerHTML, e.target.innerHTML);

          /*let Close = e.target.getElementById('close');
          Close.addEventListener("click", (e)=>{
              e.target.innerHTML= '';
          } )*/
          // const CloseIcons = document.querySelectorAll(".fa-times-circle")
          // for (let icon of CloseIcons) {
          //   icon.addEventListener("click", function (e) {
          //   e.target.parentNode.parentNode.removeChild(e.target.parentNode);
          //  });
          // }


          var element2 = document.querySelector(".toggle .fa-chevron-down");
          element2.classList.toggle("fa-chevron-up");
          target.classList.remove("invisible");
          target.classList.toggle("show");
          /*const inputTag = document.getElementById("searchIngredients");
          inputTag.addEventListener("keyup", (e) => {
              const target = document.getElementById("menuIngredients");
              target.innerHTML = "";
              this.ingredients.forEach(elm => {
                  target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)
              })
              // setTimeout(this.AfficherTag(inputTag.value, 1000));
            })*/
        } else {
          document.querySelector("#btnGroup input").replaceWith(_this2.btn);

          var _target = document.getElementById("menuIngredients");

          _target.classList.toggle("invisible");

          var element2 = document.querySelector(".toggle .fa-chevron-down");
          element2.classList.remove("fa-chevron-up");

          _target.classList.remove("show");
        }
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
    }
  }, {
    key: "GetIngredientslistByInputTag",
    value: function GetIngredientslistByInputTag(liste) {
      this.ingredients = liste;
      /*this.props.forEach(recipe => {
          recipe.ingredients.forEach(elm => {
              if (elm.ingredient.toLowerCase().includes(inputValue)) {
                  this.ingredients.push(elm.ingredient.toLowerCase())
              }
          })
      })*/

      this.ingredients = _toConsumableArray(new Set(this.ingredients));
      var target = document.getElementById("menuIngredients");
      target.innerHTML = "";
      this.ingredients.forEach(function (elm) {
        target.insertAdjacentHTML('beforeend', "<a class=\"dropdown-item\">".concat(elm, "</a>"));
      });
    }
    /* AfficherTag(valeur) {
         const TargetTag = document.getElementById("iconTag");
         TargetTag.innerHTML="";
         new Tag(TargetTag, "ingredients", valeur);
        
     }*/

  }]);

  return Ingredients;
}(_Component2["default"]);
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

/*AfficherIngredients() {
    const target = document.getElementById("menuIngredients");
    target.innerHTML = "";
    this.ingredients.forEach(elm => {
        target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

    })

}

GetIngredientslist() {
    this.ingredients = [];
    this.props.forEach(recipe => {
        recipe.ingredients.forEach(elm => {
            this.ingredients.push(elm.ingredient)
        })
    })
    this.ingredients = [...new Set(this.ingredients)]

}
}


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