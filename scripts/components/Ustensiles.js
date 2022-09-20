
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
        <div class="btn-group" id="btnGroup1">
        <div class="container1">
        <button  id="btnOpen1" class="btn btn-danger ">Ustensiles</button>
        <span class="toggle1">  <i class="fas fa-chevron-down"></i> </span>
        </div>
        <div class="dropdown-menu" id="menuUstensiles">
        <p> </p>
        </div> 
`

        this.input = document.createElement("input");
        this.input.setAttribute("type", "text")
        this.input.setAttribute("placeholder", "Rechercher un ustensil")
        this.input.setAttribute("id", "searchUstensils")
        this.btn = document.createElement("button");
        this.btn.setAttribute("id", "btnOpen1");
        this.btn.className = "btn btn-danger";
        this.btn.setAttribute("name", "ustensils");
        this.btn.innerHTML = "Ustensils";
        const btn = document.querySelector("#btnGroup1 .toggle1");
        btn.addEventListener("click", (e) => {
            if (document.querySelector("#btnGroup1 .btn") != null) {
                document.querySelector("#btnGroup1 .btn").replaceWith(this.input);
                const target = document.getElementById("menuUstensiles");
                target.innerHTML = "";
                this.ustensils.forEach(elm => {
                    target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

                })
                var element2 = document.querySelector(".toggle1 .fa-chevron-down");
                element2.classList.toggle("fa-chevron-up");
                target.classList.remove("invisible");
                target.classList.toggle("show1");
                var element3 = document.querySelector(".container1");
                element3.classList.remove("vue");
               


            }
            else {
                document.querySelector("#btnGroup1 input").replaceWith(this.btn);
                const target = document.getElementById("menuUstensiles");
                target.innerHTML = "";
                var element2 = document.querySelector(".toggle1 .fa-chevron-down");
                element2.classList.remove("fa-chevron-up");
                target.classList.remove("show1");
                var element3 = document.querySelector(".container1");
                element3.classList.toggle("vue");
    
               


            }


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

    GetAppliancelistByInputTag(liste) {
        this.ustensils = liste;
        const target = document.getElementById("menuUstensiles");
        target.innerHTML = "";
        this.ustensils.forEach(elm => {
            target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

        })
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





