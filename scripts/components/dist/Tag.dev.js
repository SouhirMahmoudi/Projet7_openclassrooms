"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Tag =
/*#__PURE__*/
function () {
  function Tag(DOMtarget, type, value) {
    _classCallCheck(this, Tag);

    //  super(DOMtarget, "tag", "div");
    this.DOM = DOMtarget;
    this.type = type;
    this.value = value;
    this.render(); // isClicked = false;
  }

  _createClass(Tag, [{
    key: "render",
    value: function render() {
      this.DOM.innerHTML += "\n        <button type=\"text\" class=\"tag ".concat(this.type, "\" data-type=\"").concat(this.type, "\" data-text=\"").concat(this.value, "\">\n        <p> ").concat(this.value, " </p>\n        <i class=\"far fa-times-circle\" id=\"close\" ></i>       \n         </button>\n");
    }
  }]);

  return Tag;
}();
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