import CardRecipe from "../components/CardRecipe.js";
import recipes from "../data/recipes.js"


const target = document.getElementById("listCard");
function DisplayRecipes(liste){
    target.innerHTML="";
    for (const data of liste){
        new CardRecipe(target,data)
    }
}


const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function(e){ 
    let value= searchBar.value.toLowerCase();
    let result=[];
    for (let recipe of recipes){
    
        if(recipe.name.toLowerCase().includes(value)){
            result.push(recipe)
    
        }
        
    }
    DisplayRecipes(result)
})

DisplayRecipes(recipes);