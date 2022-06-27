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
      <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
     <div class="card-title"> 
     <h2> ${this.name} </h2>
     <aside> ${this.time}</aside>
     
     </div>
        <div class="card-text">
            <p class="ingredients"> ${this.showIngredients} </p>
             <p class="recette"> </p>
        </div>
  </div> ` ;
    }

    showIngredients() {
        if (this.ingredients.quantity == undefined) {
            return `${this.ingredients.ingredient}`
        }
        else if (this.ingredients.unit == undefined) {
            return `${this.ingredients.ingredient} + ": " + ${this.ingredients.quantity}`;
        } 
        else if (ingredients.unit == "grammes") {
            return `${this.ingredients.ingredient} + ": " + ${this.ingredients.quantity} + "g"`;
        } 
        else {
            return `${this.ingredients.ingredient} + ": " + ${this.ingredients.quantity} + ${this.ingredients.unit} `;
        }
    

    }
}