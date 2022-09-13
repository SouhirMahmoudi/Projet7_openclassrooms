
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
        //this.GetIngredientslist();
       // this.GetIngredientslistByInputTag();
    }

    render() {
        this.DOM.innerHTML = `
        <div class="btn-group" id="btnGroup">
        <div class="container">
        <button type="text" id="btnOpen" name="ingredients" class="btn btn-primary" >
        Ingredients </button>
        <span class="toggle">  <i id="fas" class="fas fa-chevron-down"></i> </span>
        </div>
        <div class="dropdown-menu" id="menuIngredients">
        <p> </p>
        </div> 
        
        </div>
`

        this.input = document.createElement("input");
        this.input.setAttribute("type", "text")
        this.input.setAttribute("placeholder", "Rechercher un ingrédient")
        this.input.setAttribute("id", "searchIngredients")
        this.btn = document.createElement("button");
        this.btn.setAttribute("id", "btnOpen");
        this.btn.className = "btn btn-primary";
        this.btn.setAttribute("name", "ingredients");
        this.btn.innerHTML = "Ingredients";

        const btn = document.querySelector("#btnGroup .toggle");
        btn.addEventListener("click", (e) => {
            if (document.querySelector("#btnGroup .btn") != null) {
                document.querySelector("#btnGroup .btn").replaceWith(this.input);
                const target = document.getElementById("menuIngredients");
                target.innerHTML = "";
                this.ingredients.forEach(elm => {
                    target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)
                })
               // const TargetTag = document.getElementById("iconTag");
                //const items = document.querySelectorAll("#menuIngredients .dropdown-item");
             //   for (let item of items) {
                  //  item.addEventListener("click", function (e) {
                     //   new Tag(TargetTag, "ingredients", e.target.innerHTML, e.target.innerHTML);
                        /*let Close = e.target.getElementById('close');
                        Close.addEventListener("click", (e)=>{
                            e.target.innerHTML= '';
                        } )*/
                       // const CloseIcons = document.querySelectorAll(".fa-times-circle")
                       // for (let icon of CloseIcons) {
                         //   icon.addEventListener("click", function (e) {
                               
                             //   e.target.parentNode.parentNode.removeChild(e.target.parentNode);
                          //  });
                       // }
                    
                
                var element2 = document.querySelector(".toggle .fa-chevron-down");
                element2.classList.toggle("fa-chevron-up");
                target.classList.remove("invisible");
                target.classList.toggle("show");
                /*const inputTag = document.getElementById("searchIngredients");
                inputTag.addEventListener("keyup", (e) => {
                    const target = document.getElementById("menuIngredients");
                    target.innerHTML = "";
                    this.ingredients.forEach(elm => {
                        target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)
                    })
                    // setTimeout(this.AfficherTag(inputTag.value, 1000));

                })*/
            }

            else {
                document.querySelector("#btnGroup input").replaceWith(this.btn);
                const target = document.getElementById("menuIngredients");
                target.classList.toggle("invisible");
                var element2 = document.querySelector(".toggle .fa-chevron-down");
                element2.classList.remove("fa-chevron-up");
                target.classList.remove("show");

            }
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

    }

  GetIngredientslistByInputTag(liste) {
        this.ingredients = liste;
        /*this.props.forEach(recipe => {
            recipe.ingredients.forEach(elm => {
                if (elm.ingredient.toLowerCase().includes(inputValue)) {
                    this.ingredients.push(elm.ingredient.toLowerCase())
                }
            })
        })*/
        this.ingredients = [...new Set(this.ingredients)]
        const target = document.getElementById("menuIngredients");
                target.innerHTML = "";
                this.ingredients.forEach(elm => {
                    target.insertAdjacentHTML('beforeend', `<a class="dropdown-item">${elm}</a>`)
                })

    }
    /* AfficherTag(valeur) {
         const TargetTag = document.getElementById("iconTag");
         TargetTag.innerHTML="";
         new Tag(TargetTag, "ingredients", valeur);
        
     }*/


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

/*AfficherIngredients() {
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





