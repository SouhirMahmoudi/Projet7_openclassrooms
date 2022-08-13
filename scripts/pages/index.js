import CardRecipe from "../components/CardRecipe.js";
import recipes from "../data/recipes.js";
import SearchBar from "../components/Searchbar.js";
import Ingredients from "../components/Ingredients.js";
import Appareils from "../components/Appareils.js";
import Ustensils from "../components/Ustensiles.js";



//tags ingredients au click afficher tous les ingredients et changer le placeholder

let result = [];
recipes.forEach(recipe => {
    recipe.ingredients.forEach(elm => {
        result.push(elm.ingredient)
    })
})

let ingredientsList = new Set(result);

const Target2 = document.getElementById("tag");
new Ingredients(Target2);
const Target3 = document.getElementById("menuIngredients");
const btnOpen =document.getElementById("btnOpen");
btnOpen.addEventListener("click", DisplayIngredients(ingredientsList));
btnOpen.value="Ingredients";
function DisplayIngredients(liste) {
    Target3.innerHTML="";
    liste.forEach(elm =>
        Target3.insertAdjacentHTML('afterbegin', `<a class="dropdown-item">${elm}</a>`));;
        btnOpen.value="";
        btnOpen.value="Rechercher un ingredient";
       
}

//tags ustensiles, au click afficher tous les ustensiles et changer le placeholder
let result1 =[];
         recipes.forEach(recipe => {
             recipe.ustensils.forEach(elm => {
                     result1.push(elm)
                  })
                  })
let ustensilesList = new Set (result1);    
new Ustensils(Target2);
const target4 = document.getElementById("menuUstensiles");
document.getElementById("btnOpen1").addEventListener("click", DisplayUstensiles(ustensilesList));

function DisplayUstensiles(liste) {
    liste.forEach(elm=>
        target4.insertAdjacentHTML('afterbegin', `<a class="dropdown-item">${elm}</a>`))

}

//tags appareils,au click afficher tous les appareils et changer le placeholder

let result2 =[];
recipes.forEach(recipe => {
            result2.push(recipe.appliance)
         })
         
let appareilsList = new Set(result2);     
new Appareils(Target2);
const target5 = document.getElementById("menuAppareils");
document.getElementById("btnOpen2").addEventListener("click",DisplayAppareils(appareilsList));
function DisplayAppareils(liste){
    liste.forEach(elm=>{
        target5.insertAdjacentHTML('afterbegin', `<a class="dropdown-item">${elm}</a>`)

      })

}


const target = document.getElementById("listCard");
function DisplayRecipes(liste) {
    target.innerHTML = "";
    for (const data of liste) {
        new CardRecipe(target, data)
    }
}
const bar = document.getElementById("search");
new SearchBar(bar);

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function (e) {
    let value = searchBar.value.toLowerCase();
    let result = [];
    let result2=[];
    let result3=[];
    let result4=[];
    result2 = Array.from(ingredientsList).filter(ingredient => ingredient.toLowerCase().includes(value));
    DisplayIngredients(result2);
    for (let recipe of recipes) {
    
        if ((recipe.name.toLowerCase().includes(value)) || (recipe.description.toLowerCase().includes(value))
            || (recipe.ingredients.forEach((ingredient) => {
                ingredient.ingredient.toLowerCase().includes(value)
            }))) {
            result.push(recipe)
        }
        
    }
    DisplayRecipes(result)
    for (let recipe of result){
        result3.push(recipe.appliance)
    }
    let newAppareils = new Set(result3);
    console.log(result3, newAppareils)
    DisplayAppareils(newAppareils);
    for (let recipe of result){
        result4.push(recipe.ustensils)
    }
    let newUstensiles = new Set(result4);
    DisplayUstensiles(newUstensiles);
    
})


const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", function () {
    let value = searchBar.value.toLowerCase();
    let result = [];
    for (let recipe of recipes) {

        if ((recipe.name.toLowerCase().includes(value)) || (recipe.description.toLowerCase().includes(value))
            || (recipe.ingredients.some((ingredient => {
                ingredient.ingredient.toLowerCase().includes(value)
            })))) {

            result.push(recipe)
        }

    }

    DisplayRecipes(result)
})

DisplayRecipes(recipes);

