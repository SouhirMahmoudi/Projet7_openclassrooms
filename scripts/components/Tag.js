import Component from "../factories/Component.js";
export default class Tag extends Component {
    constructor(DOMtarget, type, value) {
        super(DOMtarget, "tag", "div");
        this.DOM.className = "Tag";
        this.type = type;
        this.value = value;
    }
    render() {
        this.DOM.innerHTML = `
        <button type="text" id="tagIngredient" name="ingredients" class="${this.type}">
        <p> ${this.value} </p>
        <i class="fa-solid fa-circle-xmark"></i>
        </button>
` 
    }
}

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