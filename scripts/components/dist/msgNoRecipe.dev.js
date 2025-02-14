"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MsgNoRecipes =
/*#__PURE__*/
function () {
  function MsgNoRecipes(DOMtarget) {
    _classCallCheck(this, MsgNoRecipes);

    this.DOM = DOMtarget;
    this.render();
  }

  _createClass(MsgNoRecipes, [{
    key: "render",
    value: function render() {
      this.DOM.innerHTML += "\n       \n        <p id=\"msg\"> <br>\n        \xAB Aucune recette ne correspond \xE0 votre crit\xE8re\u2026 vous pouvez\n        chercher \xAB tarte aux pommes \xBB, \xAB poisson \xBB, etc. \n        <br>\n        </p>\n       \n        ";
    }
  }]);

  return MsgNoRecipes;
}();

exports["default"] = MsgNoRecipes;