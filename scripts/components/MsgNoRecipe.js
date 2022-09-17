export default class MsgNoRecipes
 {
    constructor(DOMtarget) {
        this.DOM= DOMtarget;
        this.render();
    }
    render() {
        this.DOM.innerHTML += `
       
        <p id="msg"> <br>
        « Aucune recette ne correspond à votre critère… vous pouvez
        chercher « tarte aux pommes », « poisson », etc. 
        <br>
        </p>
       
        `

   

    }
}