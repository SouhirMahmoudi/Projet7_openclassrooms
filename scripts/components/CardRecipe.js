import Component from "../factories/Component.js";
export default class CardRecipe extends Component {

    /**
     * 
     * @param {HTMLElment} DOMtarget 
     * @param {Object} props 
     * @param {String} props.name
     * @param {number} props.id
     * @param {Number} props.time
     * @param {Array} props.ingredients
     * @param {string} props.ingredient
     * @param {string} props.quantity
     * @param {number} props.unit
     * @param {String} props.description
     */
    constructor(DOMtarget, props) {
        super(DOMtarget, props.name, "div", props);
        this.DOM.className = "card";

    }


    render() {
        this.DOM.innerHTML = `
      <img class="card-img-top" src="/Projet7_openclassrooms/assets/images/recette.png" alt="Card image cap">
      <div class="card-body">
     <div class="card-title"> 
     <h2> ${this.name} </h2>
     <aside> <i class="far fa-clock"></i> ${this.time} min</aside>
     </div>
        <div class="card-text">
            <p class="listIngredients"> ${this.showIngredients()} </p>
             <p class="recette"> ${this.description} </p>
        </div>
  </div> ` ;
    }

    showIngredients() {

        let result= "";
        for (let ingredient of this.ingredients){

            if (ingredient.quantity == undefined) {
                result +=`<span class="ingredients"><strong>${ingredient.ingredient}</strong></span>`
            }
            else if (ingredient.unit == undefined) {
                result +=`<span class="ingredients"><strong>${ingredient.ingredient}</strong> : ${ingredient.quantity}</span>`;
            }
            else if (ingredient.unit == "grammes") {
                result +=`<span class="ingredients"><strong>${ingredient.ingredient}</strong> :  ${ingredient.quantity} g</span>`;
            }
            else {
                result +=`<span class="ingredients"><strong>${ingredient.ingredient}</strong> :  ${ingredient.quantity} ${ingredient.unit}</span> `;
            }
    
        }
       return result;

    }
}