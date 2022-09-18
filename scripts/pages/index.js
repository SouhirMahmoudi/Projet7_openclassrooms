import CardRecipe from "../components/CardRecipe.js";
import recipes from "../data/recipes.js";
import SearchBar from "../components/Searchbar.js";
import Ingredients from "../components/Ingredients.js";
import Appareils from "../components/Appareils.js";
import Ustensils from "../components/Ustensiles.js";
import Tag from "../components/Tag.js"
import MsgNoRecipes from "../components/msgNoRecipe.js";

let tagList = [];
const Target2 = document.getElementById("tag");
const bar = document.getElementById("search");
new SearchBar(bar);
let ingredientFilter = new Ingredients(Target2, recipes);
let appareilFilter = new Appareils(Target2, recipes);
let ustensilFilter = new Ustensils(Target2, recipes);
const target = document.getElementById("listCard");
const btn = document.querySelector("#btnGroup .toggle");
const btn1 = document.querySelector("#btnGroup1 .toggle1");
const btn2 = document.querySelector("#btnGroup2 .toggle2");

/**************************search bar**********************************/
const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keyup", function (e) {
    if (searchBar.value.length >= 3) {
        Filter(searchBar.value)
    }

    else if (searchBar.value.length == 0) {
        ingredientFilter.props = recipes;
        ingredientFilter.GetIngredientslist();
        ustensilFilter.props = recipes;
        ustensilFilter.GetUstensilsList();
        appareilFilter.props = recipes;
        appareilFilter.GetApplianceList();
        DisplayRecipes(recipes)
    }
})
const btnSearch = document.getElementById("btnSearch");
btnSearch.addEventListener("click", Filter(searchBar.value))

/****************************search by tag****************************/

//search by tag ----- ingredients

btn.addEventListener("click", (e) => {
    const TargetTag = document.getElementById("iconTag");
    const items = document.querySelectorAll("#menuIngredients .dropdown-item");
    items.forEach(item => item.addEventListener("click", (e) => {
        new Tag(TargetTag, "ingredients", e.target.innerHTML);
        const tag = { text: e.target.textContent, type: "ingredient" };
        tagList.push(tag);
        FilterTag();
        btn.click();
        removeTag();

    }))
    const TagIngredients = document.querySelector("#searchIngredients");
    TagIngredients.addEventListener("keyup", (e) => {
        FilterIngredientByTag(TagIngredients.value);
        const NewItems = document.querySelectorAll("#menuIngredients .dropdown-item");
        NewItems.forEach(item => item.addEventListener("click", (e) => {
            new Tag(TargetTag, "ingredients", e.target.innerHTML);
            const tag = { text: e.target.textContent, type: "ingredient" };
            tagList.push(tag);
            FilterTag();
            btn.click();
            removeTag();

        }))

    })
})


//search by tag ----- ustensils



btn1.addEventListener("click", (e) => {
    const TagUstensils = document.getElementById("searchUstensils");
    const TargetTag = document.getElementById("iconTag");
    const items = document.querySelectorAll("#menuUstensiles .dropdown-item");

    items.forEach(item => item.addEventListener("click", (e) => {
        new Tag(TargetTag, "ustensils", e.target.innerHTML);
        const tag = { text: e.target.textContent, type: "ustensils" };
        tagList.push(tag);
        FilterTag();
        btn1.click();
        removeTag();


    }))

    TagUstensils.addEventListener("keyup", (e) => {
        FilterUstensilsByTag(TagUstensils.value);
        const NewItems = document.querySelectorAll("#menuUstensiles .dropdown-item");
        NewItems.forEach(item => item.addEventListener("click", (e) => {
            new Tag(TargetTag, "ustensils", e.target.innerHTML);
            const tag = { text: e.target.textContent, type: "ustensils" };
            tagList.push(tag);
            FilterTag();
            btn1.click();
            removeTag();
        }))
    })

})


//search by tag ----- Appliance

btn2.addEventListener("click", (e) => {
    const TagAppliance = document.getElementById("searchAppareils");
    const TargetTag = document.getElementById("iconTag");
    const items = document.querySelectorAll("#menuAppareils .dropdown-item");
    items.forEach(item => item.addEventListener("click", (e) => {
        new Tag(TargetTag, "appareils", e.target.innerHTML, e.target.innerHTML);
        const tag = { text: e.target.textContent, type: "appareils" };
        tagList.push(tag);
        FilterTag();
        btn2.click();
        removeTag()
    }))



    TagAppliance.addEventListener("keyup", (e) => {
        FilterApplianceByTag(TagAppliance.value);
        const NewItems = document.querySelectorAll("#menuAppareils .dropdown-item");
        NewItems.forEach(item => item.addEventListener("click", (e) => {
            new Tag(TargetTag, "ustensils", e.target.innerHTML, e.target.innerHTML);
            const tag = { text: e.target.textContent, type: "appareils" };
            tagList.push(tag);
            FilterTag();
            btn2.click();
            removeTag();
        }))

    })
})

/******display recipes and filters when home page loads********/

ingredientFilter.props = recipes;
ingredientFilter.GetIngredientslist();
ustensilFilter.props = recipes;
ustensilFilter.GetUstensilsList();
appareilFilter.props = recipes;
appareilFilter.GetApplianceList();
DisplayRecipes(recipes);










/************************UTILS*******************************/
//function display recipes
function DisplayRecipes(liste) {
    target.innerHTML = "";
    for (const data of liste) {
        new CardRecipe(target, data)
    }
}
//function filter recipes by input value
function Filter(valeur) {
    let value = valeur.toLowerCase();
    let result = [];
 recipes.forEach(recipe=> {
    if ((recipe.name.toLowerCase().includes(value)) || (recipe.description.toLowerCase().includes(value))
            || (recipe.ingredients.some((ingredient => {
                ingredient.ingredient.toLowerCase().includes(value)
            })))) {

            result.push(recipe)
            }
       
        })
    

    appareilFilter.props = result;
    appareilFilter.GetApplianceList();
    ingredientFilter.props = result;
    ingredientFilter.GetIngredientslist();
    ustensilFilter.props = result;
    ustensilFilter.GetUstensilsList();
    DisplayRecipes(result);

    if (result == 0) {
        let target = document.querySelector("#listCard");
        new MsgNoRecipes(target);
    }
}


// function filter recipes by tag

function FilterTag() {

    if (searchBar.value.length >= 3) {
        let result = Filter(searchBar.value);
        tagList.forEach(elm => {
            switch (elm.type) {
                case "ingredient":
                    result = result.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() == elm.text.toLowerCase()))
                    break;
                case "ustensils":
                    result = result.filter(recipe => recipe.ustensils.some(ustensil => ustensil.toLowerCase() == elm.text.toLowerCase()))
                    break;
                case "appareils":
                    result = result.filter(recipe => recipe.appliance.toLowerCase() == elm.text.toLowerCase())
                    break;

            }

        })
        ingredientFilter.props = Array.from(result);
        ingredientFilter.GetIngredientslist();
        appareilFilter.props = Array.from(result);
        appareilFilter.GetApplianceList();
        ustensilFilter.props = Array.from(result);
        ustensilFilter.GetUstensilsList();
        DisplayRecipes(Array.from(result));
    }
    else if (searchBar.value.length == 0) {
        let result2 = [...recipes];
        tagList.forEach(elm => {
            switch (elm.type) {
                case "ingredient":
                    result2 = result2.filter(recipe => recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase() == elm.text.toLowerCase()))
                    break;
                case "ustensils":
                    result2 = result2.filter(recipe => recipe.ustensils.some(ustensil => ustensil.toLowerCase() == elm.text.toLowerCase()))
                    break;
                case "appareils":
                    result2 = result2.filter(recipe => recipe.appliance.toLowerCase() == elm.text.toLowerCase())
                    break;

            }
        })
        ingredientFilter.props = Array.from(result2);
        ingredientFilter.GetIngredientslist();
        appareilFilter.props = Array.from(result2);
        appareilFilter.GetApplianceList();
        ustensilFilter.props = Array.from(result2);
        ustensilFilter.GetUstensilsList();
        DisplayRecipes(Array.from(result2));
    }

}
//FilterByIngredients(e.target.innerHTML);


// remove tag
function removeTag() {
    const CloseIcons = document.querySelectorAll(".fa-times-circle");
    for (let icon of CloseIcons) {
        icon.addEventListener("click", function (e) {
            let tag = e.target.parentNode;
            tag.remove();
            tagList = tagList.filter(elm => elm.text != tag.dataset.text);
            FilterTag();
        })
    }
}


// function filter ingredients by tag 
function FilterIngredientByTag(inputValue) {
    let value = inputValue.toLowerCase();
    let ingredientsTag = new Set;
    for (let recipe of recipes) {
        for (let ingredient of recipe.ingredients) {
            if (ingredient.ingredient.toLowerCase().includes(value)) {
                ingredientsTag.add(ingredient.ingredient.toLowerCase());
            }
        }
    }
    ingredientFilter.GetIngredientslistByInputTag(Array.from(ingredientsTag));
}
// function filter ustensils by tag
function FilterUstensilsByTag(inputValue) {
    let value = inputValue.toLowerCase();

    let UstensilsTag = new Set;

    for (let recipe of recipes) {
        for (let ustensil of recipe.ustensils) {

            if (ustensil.toLowerCase().includes(value)) {
                UstensilsTag.add(ustensil.toLowerCase());

            }
        }
    }
    ustensilFilter.GetAppliancelistByInputTag(Array.from(UstensilsTag));
}
// function filter Appliance by tag

function FilterApplianceByTag(inputValue) {
    let value = inputValue.toLowerCase();
    let ApplianceTag = new Set;

    for (let recipe of recipes) {

        if (recipe.appliance.toLowerCase().includes(value)) {
            ApplianceTag.add(recipe.appliance.toLowerCase());
        }

    }

    appareilFilter.GetAppliancelistByInputTag(Array.from(ApplianceTag));
}













