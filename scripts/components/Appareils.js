
import Component from "../factories/Component.js";

export default class Appareils extends Component {

    constructor(DOMtarget, props) {
        super(DOMtarget, "appareilsTag", "div", props);
        this.DOM.className = "appareilsTag";
        this.props = props;
        this.appareils = [];
        this.GetApplianceList();


    }

    render() {
        this.DOM.innerHTML = `
        <div class="btn-group">
        <button  type="text" id="btnOpen2" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
        " > Appareils </button>
        <div class="dropdown-menu" id="menuAppareils">
        </div> 
`
        const btn2 = document.querySelector("#btnOpen2");
        btn2.addEventListener("click", (e) => {
            this.AfficherAppareils()
            btn2.innerHTML="<input type='text' placeholder ='Rechercher un appareil' id='searchAppareils' />"
            btn2.classList.toggle("dropdown-rotate");
        })

    }

    AfficherAppareils() {
        const target = document.getElementById("menuAppareils");
        target.innerHTML = "";
        this.appareils.forEach(elm => {
            target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

        })

    }


    GetApplianceList() {
        this.appareils = [];
        this.props.forEach(recipe => {
            this.appareils.push(recipe.appliance)
        })
        this.appareils = [...new Set(this.appareils)]
    }

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





