import Component from "../factories/Component.js";
export default class SearchBar extends Component {
    constructor(DOMtarget) {
        super(DOMtarget, "searchbar", "div");
        this.DOM.className = "bar";

    }

    render() {
        this.DOM.innerHTML = `
<input type="text" placeholder="" id="searchBar" />
<button id="btnSearch"><i class="fa fa-search" aria-hidden="true"></i></span> </button>
<div id="tagName"></div>
`
    }
    

}