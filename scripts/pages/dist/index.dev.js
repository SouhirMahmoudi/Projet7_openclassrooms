"use strict";

var _CardRecipe = _interopRequireDefault(require("../components/CardRecipe.js"));

var _recipes = _interopRequireDefault(require("../data/recipes.js"));

var _Searchbar = _interopRequireDefault(require("../components/Searchbar.js"));

var _Ingredients = _interopRequireDefault(require("../components/Ingredients.js"));

var _Appareils = _interopRequireDefault(require("../components/Appareils.js"));

var _Ustensiles = _interopRequireDefault(require("../components/Ustensiles.js"));

var _Tag = _interopRequireDefault(require("../components/Tag.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Target2 = document.getElementById("tag"); // Création instances 

/*searchbar */

var bar = document.getElementById("search");
new _Searchbar["default"](bar);
/* tags : ingredients, ustensils, appareils*/

var ingredientFilter = new _Ingredients["default"](Target2, _recipes["default"]);
var appareilFilter = new _Appareils["default"](Target2, _recipes["default"]);
var ustensilFilter = new _Ustensiles["default"](Target2, _recipes["default"]);
/* recipeCard*/

var target = document.getElementById("listCard");

function DisplayRecipes(liste) {
  target.innerHTML = "";
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = liste[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var data = _step.value;
      new _CardRecipe["default"](target, data);
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
} //fonction recherche barre principale


var searchBar = document.getElementById("searchBar");

function Filter(valeur) {
  var value = valeur.toLowerCase();
  var result = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = _recipes["default"][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var recipe = _step2.value;

      if (recipe.name.toLowerCase().includes(value) || recipe.description.toLowerCase().includes(value) || recipe.ingredients.some(function (ingredient) {
        ingredient.ingredient.toLowerCase().includes(value);
      })) {
        result.push(recipe);
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  appareilFilter.props = result;
  appareilFilter.GetApplianceList();
  ingredientFilter.props = result;
  ingredientFilter.GetIngredientslist();
  ustensilFilter.props = result;
  ustensilFilter.GetUstensilsList();
  DisplayRecipes(result);
} // evenement recherche principale

/*keyboard*/


searchBar.addEventListener("keyup", function (e) {
  Filter(searchBar.value);
});
/*click*/

var btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", Filter(searchBar.value)); //rechercher par tag ingredients

var btn = document.querySelector("#btnGroup .toggle");
btn.addEventListener("click", function (e) {
  var TagIngredients = document.getElementById("searchIngredients");
  TagIngredients.addEventListener("keyup", function (e) {
    FilterByIngredients(TagIngredients.value);
  });
});

function FilterByIngredients(tag) {
  var value = tag.toLowerCase();
  var recipesTag = new Set();
  var ingredientsTag = new Set();
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = _recipes["default"][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var recipe = _step3.value;
      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = recipe.ingredients[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var ingredient = _step4.value;

          if (ingredient.ingredient.toLowerCase().includes(value)) {
            recipesTag.add(recipe);
            ingredientsTag.add(ingredient.ingredient);
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
            _iterator4["return"]();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  appareilFilter.props = Array.from(recipesTag);
  appareilFilter.GetApplianceList();
  ingredientFilter.props = Array.from(recipesTag);
  ingredientFilter.GetIngredientslistByTag(tag);
  ustensilFilter.props = Array.from(recipesTag);
  ustensilFilter.GetUstensilsList();
  DisplayRecipes(Array.from(recipesTag));
}
/*const TargetTag= document.getElementById("tag");
const item = document.querySelector("#menuIngredients .dropdown-item");
item.addEventListener("click", Afficher(TargetTag, "ingredients"))
const item1 = document.querySelector("#menuUstensils .dropdown-item");
const item2 = document.querySelector("#menuAppareils .dropdown-item");*/

/*function Afficher(target, type){
   return new Tag (target, type)
}*/


DisplayRecipes(_recipes["default"]);
/*const searchTagIngredients =document.getElementById("searchIngredients");
searchTagIngredients.addEventListener("keyup", function (e) {
    let value = searchTagIngredients.value.toLowerCase();
    const target =document.getElementById("tagName");
    target.innerHTML=`<p> ${value} </p> `
    let result = [];
    for (let recipe of recipes) {
    
        (recipe.ingredients.some((ingredient => {
            ingredient.ingredient.toLowerCase().includes(value)
        }))); {
            result.push(recipe)
        }
        
    }
    appareilFilter.props = result;
    appareilFilter.GetApplianceList();
    ustensilFilter.props = result;
    ustensilFilter.GetUstensilsList();
    

    DisplayRecipes(result)
    
})*/