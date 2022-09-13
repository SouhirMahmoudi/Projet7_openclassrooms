export default class Tag 
 {
    constructor(DOMtarget, type, value) {
      //  super(DOMtarget, "tag", "div");
        this.DOM= DOMtarget;
        this.type = type;
        this.value = value;
        this.render();
        
       // isClicked = false;
    }
    render() {
        this.DOM.innerHTML += `
        <button type="text" class="tag ${this.type}" data-type="${this.type}" data-text="${this.value}">
        <p> ${this.value} </p>
        <i class="far fa-times-circle" id="close" ></i>       
         </button>
` 
   

   

    }
}

   /* render() {
        switch (this.type) {

            case "ingredients":
                this.DOM.innerHTML = `
        <button type="text" id="tagIngredient" name="ingredients" class="btn btn-primary" >
        <p> ${this.value} </p>
        <i class="fa-solid fa-circle-xmark"></i>
        </button>
`  ; break;
            case "appareils": this.DOM.innerHTML = `
       button  type="text" id="TagAppareils" class="btn btn-success"> 
        <p>${this.value} </p>
        <i class="fa-solid fa-circle-xmark"></i>
        </button>`
                ; break;
            case "ustensils": this.DOM.innerHTML = `
        button  type="text" id="TagUstensils" class="btn btn-danger"> 
         <p>${this.value} </p>
         <i class="fa-solid fa-circle-xmark"></i>
         </button>`
                ; break;
        }

    }

}*/