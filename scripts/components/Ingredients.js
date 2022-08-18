
import Component from "../factories/Component.js";
/**
 * @param {object} [props]
 */
export default class Ingredients extends Component {
    constructor(DOMtarget, props) {
        super(DOMtarget, "ingredientsTag", "div");
        this.DOM.className = "ingredientsTag";
        this.props = props;
        this.ingredients = [];
        this.GetIngredientslist();


    }

    render() {
        this.DOM.innerHTML = `
        <div class="btn-group">
        <button type="text" id="btnOpen" name="ingredients" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Ingredients </button>
        <div id="recherche"></div>
        <div class="dropdown-menu" id="menuIngredients">
        <p> </p>
        </div> 
        
        </div>
`
        const btn = document.querySelector("#btnOpen");

        btn.addEventListener("click", (e) => {
            this.AfficherIngredients();
            btn.innerHTML="<input type='text' placeholder ='Rechercher un ingrédient' id='searchIngredients' />"
            btn.classList.toggle("dropdown-rotate");
        })

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

    AfficherIngredients() {
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
        console.log(this.ingredients)
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





