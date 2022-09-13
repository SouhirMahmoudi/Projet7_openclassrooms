
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
        <div class="btn-group" id="btnGroup2">
        <div class="container2">
        <button  type="text" id="btnOpen2" class="btn btn-success"> Appareils </button>
        <span class="toggle2">  <i id="fas" class="fas fa-chevron-down"></i> </span>
        </div>
        <div class="dropdown-menu" id="menuAppareils">
        </div> 
`

        this.input = document.createElement("input");
        this.input.setAttribute("type", "text")
        this.input.setAttribute("placeholder", "Rechercher un appareil")
        this.input.setAttribute("id", "searchAppareils")
        this.btn = document.createElement("button");
        this.btn.setAttribute("id", "btnOpen2");
        this.btn.className = "btn btn-success";
        this.btn.setAttribute("name", "appareils");
        this.btn.innerHTML = "Ustensils";
        const btn = document.querySelector("#btnGroup2 .toggle2");
        btn.addEventListener("click", (e) => {
            if (document.querySelector("#btnGroup2 .btn") != null) {
                document.querySelector("#btnGroup2 .btn").replaceWith(this.input);
                const target = document.getElementById("menuAppareils");
                target.innerHTML = "";
                this.appareils.forEach(elm => {
                    target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

                })
                var element2 = document.querySelector(".toggle2 .fa-chevron-down");
                element2.classList.toggle("fa-chevron-up");
                target.classList.remove("invisible");
                target.classList.toggle("show2");


            }
            else {
                document.querySelector("#btnGroup2 input").replaceWith(this.btn);
                const target = document.getElementById("menuAppareils");
                target.innerHTML = "";
                var element2 = document.querySelector(".toggle2 .fa-chevron-down");
                element2.classList.remove("fa-chevron-up");
                target.classList.remove("show2");

            }


        })

    }

    GetApplianceList() {
        this.appareils = [];
        this.props.forEach(recipe => {
            this.appareils.push(recipe.appliance)
        })
        this.appareils = [...new Set(this.appareils)]
    }

    GetAppliancelistByInputTag(liste) {
        this.appareils = liste;
        const target = document.getElementById("menuAppareils");
        target.innerHTML = "";
        this.appareils.forEach(elm => {
            target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

        })
    }

}








/*  AfficherAppareils() {
        const target = document.getElementById("menuAppareils");
        target.innerHTML = "";
        this.appareils.forEach(elm => {
            target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)

        })

    }

${  for (let recipe of this.props){

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





