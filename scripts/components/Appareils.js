
import Component from "../factories/Component.js";

export default class Appareils extends Component{
    constructor(DOMtarget, props) {
        super(DOMtarget, "appareilsTag", "div", props);
        this.DOM.className = "appareilsTag";
        this.props=props;


    }

    render(){
        this.DOM.innerHTML = `
        <div class="btn-group">
        <input  type="text" id ="btnOpen2" class="btn btn-success dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
        "
        placeholder= "Appareils" />
        <div class="dropdown-menu" id="menuAppareils">
        </div> 
`

    }
}
    /*AfficherIngredients(props){
       const target=document.getElementById("menuIngredients");
       let liste= this.ShowIngredients(props);

      liste.forEach(elm=>{
        target.insertAdjacentText(target, `<a class="dropdown-item">${elm}</a>`)

      })

    }
}

   /* ShowIngredients(props){
        let result =[];
        props.forEach(recipe => {
            
                    result.push(recipe.appliance)
                 })
                 
        let ingredientsList = new Set(result).sort()     
        
        return ingredientsList;  
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





