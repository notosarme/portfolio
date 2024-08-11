const template = document.createElement("template");
template.innerHTML = `
    <h1>TJ.</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/works.html">Works</a></li>
        <li><a href="/contact.html">Contact</a></li>
        <li><a href="https://www.techsculpt.blog/">Blog</a></li>
      </ul>
    </nav>
`;

class AppHeader extends HTMLElement {
    constructor(){
        super();

        const clone = template.content.cloneNode(true);
        this.appendChild(clone);
    }
}

window.customElements.define("app-header", AppHeader);
