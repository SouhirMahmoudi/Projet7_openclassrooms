
import Component from "../factories/Component.js";

export default class Ustensils extends Component {
    constructor(DOMtarget, props) {
        super(DOMtarget, "UstensilesTag", "div");
        this.DOM.className = "UstensilesTag";
        this.props = props;
        this.ustensils = [];
        this.GetUstensilsList();



    }

    render() {
        this.DOM.innerHTML = `
        <div class="btn-group">
        <button type="text" id="btnOpen1" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Ustensiles</button>
        <div class="dropdown-menu" id="menuUstensiles">
        <p> </p>
        </div> 
`
        const btn1 = document.querySelector("#btnOpen1");
        btn1.addEventListener("click", (e) => {
            this.AfficherUstensils()
            btn1.innerHTML="<input type='text' placeholder ='Rechercher un ustensil' id='searchUstensils' />"
            btn1.classList.toggle("dropdown-rotate");
        })

    }


    AfficherUstensils() {
        const target = document.getElementById("menuUstensiles");
        target.innerHTML = "";


        this.ustensils.forEach(elm => {
            target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

        })

    }

    GetUstensilsList() {
        this.ustensils = [];
        this.props.forEach(recipe => {
            recipe.ustensils.forEach(elm => {
                this.ustensils.push(elm)
            })
        })
        this.ustensils = [...new Set(this.ustensils)]
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





