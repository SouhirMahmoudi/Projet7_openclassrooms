"use strict";

var _CardRecipe = _interopRequireDefault(require("../components/CardRecipe.js"));

var _recipes = _interopRequireDefault(require("../data/recipes.js"));

var _Searchbar = _interopRequireDefault(require("../components/Searchbar.js"));

var _Ingredients = _interopRequireDefault(require("../components/Ingredients.js"));

var _Appareils = _interopRequireDefault(require("../components/Appareils.js"));

var _Ustensiles = _interopRequireDefault(require("../components/Ustensiles.js"));

var _Tag = _interopRequireDefault(require("../components/Tag.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var tagList = [];
var Target2 = document.getElementById("tag");
var bar = document.getElementById("search");
new _Searchbar["default"](bar);
var ingredientFilter = new _Ingredients["default"](Target2, _recipes["default"]);
var appareilFilter = new _Appareils["default"](Target2, _recipes["default"]);
var ustensilFilter = new _Ustensiles["default"](Target2, _recipes["default"]);
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
}
/**************************search bar**********************************/


var searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function (e) {
  if (searchBar.value.length >= 3) {
    Filter(searchBar.value);
  } else if (searchBar.value.length == 0) {
    ingredientFilter.props = _recipes["default"];
    ingredientFilter.GetIngredientslist();
    ustensilFilter.props = _recipes["default"];
    ustensilFilter.GetUstensilsList();
    appareilFilter.props = _recipes["default"];
    appareilFilter.GetApplianceList();
    DisplayRecipes(_recipes["default"]);
  }
});
var btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", Filter(searchBar.value));
/****************************search by tag****************************/
//search by tag ----- ingredients

var btn = document.querySelector("#btnGroup .toggle");
btn.addEventListener("click", function (e) {
  var TagIngredients = document.querySelector("#searchIngredients");
  var TargetTag = document.getElementById("iconTag");
  var items = document.querySelectorAll("#menuIngredients .dropdown-item");
  items.forEach(function (item) {
    return item.addEventListener("click", function (e) {
      new _Tag["default"](TargetTag, "ingredients", e.target.innerHTML);
      var tag = {
        text: e.target.textContent,
        type: "ingredient"
      };
      tagList.push(tag);
      FilterTag();
      removeTag();
    });
  });
  TagIngredients.addEventListener("keyup", function (e) {
    FilterIngredientByTag(TagIngredients.value);
    var NewItems = document.querySelectorAll("#menuIngredients .dropdown-item");
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = NewItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var item = _step2.value;
        item.addEventListener("click", function (e) {
          new _Tag["default"](TargetTag, "ingredients", e.target.innerHTML);
          var tag = {
            text: e.target.textContent,
            type: "ingredient"
          };
          tagList.push(tag);
          FilterTag();
          removeTag();
        });
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
  });
}); //search by tag ----- ustensils

var btn1 = document.querySelector("#btnGroup1 .toggle1");
btn1.addEventListener("click", function (e) {
  var TagUstensils = document.getElementById("searchUstensils");
  var TargetTag = document.getElementById("iconTag");
  var items = document.querySelectorAll("#menuUstensiles .dropdown-item");
  var tagResult = [];
  items.forEach(function (item) {
    return item.addEventListener("click", function (e) {
      new _Tag["default"](TargetTag, "ustensils", e.target.innerHTML);
      var tag = {
        text: e.target.textContent,
        type: "ustensils"
      };
      tagList.push(tag);
      FilterTag();
      removeTag();
    });
  });
  TagUstensils.addEventListener("keyup", function (e) {
    FilterUstensilsByTag(TagUstensils.value);
    var NewItems = document.querySelectorAll("#menuUstensiles .dropdown-item");
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = NewItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var item = _step3.value;
        item.addEventListener("click", function (e) {
          new _Tag["default"](TargetTag, "ustensils", e.target.innerHTML);
          var tag = {
            text: e.target.textContent,
            type: "ustensils"
          };
          tagList.push(tag);
          FilterTag();
          removeTag();
        });
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
  });
}); //search by tag ----- Appliance

var btn2 = document.querySelector("#btnGroup2 .toggle2");
btn2.addEventListener("click", function (e) {
  var TagAppliance = document.getElementById("searchAppareils");
  var TargetTag = document.getElementById("iconTag");
  var items = document.querySelectorAll("#menuAppareils .dropdown-item");
  var tagResult = [];
  items.forEach(function (item) {
    return item.addEventListener("click", function (e) {
      new _Tag["default"](TargetTag, "appareils", e.target.innerHTML, e.target.innerHTML);
      var tag = {
        text: e.target.textContent,
        type: "appareils"
      };
      tagList.push(tag);
      FilterTag();
      removeTag();
    });
  });
  TagAppliance.addEventListener("keyup", function (e) {
    FilterApplianceByTag(TagAppliance.value);
    var NewItems = document.querySelectorAll("#menuAppareils .dropdown-item");
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = NewItems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var item = _step4.value;
        item.addEventListener("click", function (e) {
          new _Tag["default"](TargetTag, "ustensils", e.target.innerHTML, e.target.innerHTML);
          var tag = {
            text: e.target.textContent,
            type: "appareils"
          };
          tagList.push(tag);
          FilterTag();
          removeTag();
        });
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
  });
});
/******display recipes and filters when home page loads********/

ingredientFilter.props = _recipes["default"];
ingredientFilter.GetIngredientslist();
ustensilFilter.props = _recipes["default"];
ustensilFilter.GetUstensilsList();
appareilFilter.props = _recipes["default"];
appareilFilter.GetApplianceList();
DisplayRecipes(_recipes["default"]);
/************************UTILS*******************************/
//function filter recipes by input value

function Filter(valeur) {
  var value = valeur.toLowerCase();
  var result = [];
  var _iteratorNormalCompletion5 = true;
  var _didIteratorError5 = false;
  var _iteratorError5 = undefined;

  try {
    for (var _iterator5 = _recipes["default"][Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
      var recipe = _step5.value;

      //recipes.forEach(recipe=>)
      if (recipe.name.toLowerCase().includes(value) || recipe.description.toLowerCase().includes(value) || recipe.ingredients.some(function (ingredient) {
        ingredient.ingredient.toLowerCase().includes(value);
      })) {
        result.push(recipe);
      }
    }
  } catch (err) {
    _didIteratorError5 = true;
    _iteratorError5 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
        _iterator5["return"]();
      }
    } finally {
      if (_didIteratorError5) {
        throw _iteratorError5;
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
} // function filter recipes by tag


function FilterTag() {
  var result = _toConsumableArray(_recipes["default"]);

  tagList.forEach(function (elm) {
    switch (elm.type) {
      case "ingredient":
        result = result.filter(function (recipe) {
          return recipe.ingredients.some(function (ingredient) {
            return ingredient.ingredient == elm.text;
          });
        });
        break;

      case "ustensils":
        result = result.filter(function (recipe) {
          return recipe.ustensils.includes(elm.text);
        });
        break;

      case "appareils":
        result = result.filter(function (recipe) {
          return recipe.appliance == elm.text;
        });
        break;
    }
  }); //FilterByIngredients(e.target.innerHTML);

  appareilFilter.props = Array.from(result);
  appareilFilter.GetApplianceList();
  ingredientFilter.props = Array.from(result);
  ingredientFilter.GetIngredientslist();
  ustensilFilter.props = Array.from(result);
  ustensilFilter.GetUstensilsList();
  DisplayRecipes(Array.from(result));
} // remove tag


function removeTag() {
  var CloseIcons = document.querySelectorAll(".fa-times-circle");
  var _iteratorNormalCompletion6 = true;
  var _didIteratorError6 = false;
  var _iteratorError6 = undefined;

  try {
    for (var _iterator6 = CloseIcons[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
      var icon = _step6.value;
      icon.addEventListener("click", function (e) {
        var tag = e.target.parentNode;
        tag.remove();
        tagList = tagList.filter(function (elm) {
          return elm.text != tag.dataset.text;
        });
        FilterTag();
      });
    }
  } catch (err) {
    _didIteratorError6 = true;
    _iteratorError6 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
        _iterator6["return"]();
      }
    } finally {
      if (_didIteratorError6) {
        throw _iteratorError6;
      }
    }
  }
} // function filter ingredients by tag 


function FilterIngredientByTag(inputValue) {
  var value = inputValue.toLowerCase();
  var ingredientsTag = new Set();
  var _iteratorNormalCompletion7 = true;
  var _didIteratorError7 = false;
  var _iteratorError7 = undefined;

  try {
    for (var _iterator7 = _recipes["default"][Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
      var recipe = _step7.value;
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = recipe.ingredients[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var ingredient = _step8.value;

          if (ingredient.ingredient.toLowerCase().includes(value)) {
            ingredientsTag.add(ingredient.ingredient.toLowerCase());
          }
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
            _iterator8["return"]();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError7 = true;
    _iteratorError7 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
        _iterator7["return"]();
      }
    } finally {
      if (_didIteratorError7) {
        throw _iteratorError7;
      }
    }
  }

  ingredientFilter.GetIngredientslistByInputTag(Array.from(ingredientsTag));
} // function filter ustensils by tag


function FilterUstensilsByTag(inputValue) {
  var value = inputValue.toLowerCase();
  var UstensilsTag = new Set();
  var _iteratorNormalCompletion9 = true;
  var _didIteratorError9 = false;
  var _iteratorError9 = undefined;

  try {
    for (var _iterator9 = _recipes["default"][Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
      var recipe = _step9.value;
      var _iteratorNormalCompletion10 = true;
      var _didIteratorError10 = false;
      var _iteratorError10 = undefined;

      try {
        for (var _iterator10 = recipe.ustensils[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
          var ustensil = _step10.value;

          if (ustensil.toLowerCase().includes(value)) {
            UstensilsTag.add(ustensil.toLowerCase());
          }
        }
      } catch (err) {
        _didIteratorError10 = true;
        _iteratorError10 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion10 && _iterator10["return"] != null) {
            _iterator10["return"]();
          }
        } finally {
          if (_didIteratorError10) {
            throw _iteratorError10;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError9 = true;
    _iteratorError9 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion9 && _iterator9["return"] != null) {
        _iterator9["return"]();
      }
    } finally {
      if (_didIteratorError9) {
        throw _iteratorError9;
      }
    }
  }

  ustensilFilter.GetAppliancelistByInputTag(Array.from(UstensilsTag));
} // function filter Appliance by tag


function FilterApplianceByTag(inputValue) {
  var value = inputValue.toLowerCase();
  var ApplianceTag = new Set();
  var _iteratorNormalCompletion11 = true;
  var _didIteratorError11 = false;
  var _iteratorError11 = undefined;

  try {
    for (var _iterator11 = _recipes["default"][Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
      var recipe = _step11.value;

      if (recipe.appliance.toLowerCase().includes(value)) {
        ApplianceTag.add(recipe.appliance.toLowerCase());
      }
    }
  } catch (err) {
    _didIteratorError11 = true;
    _iteratorError11 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion11 && _iterator11["return"] != null) {
        _iterator11["return"]();
      }
    } finally {
      if (_didIteratorError11) {
        throw _iteratorError11;
      }
    }
  }

  appareilFilter.GetAppliancelistByInputTag(Array.from(ApplianceTag));
}