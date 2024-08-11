class HighlightCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/custom.css">
        <div class="card">
          <a href="">
            <img src="" alt="" />
            <div class="card-container">
              <h3></h3>
              <p></p>
            </div>
          </a>
        </div>
      `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector("a").href = this.getAttribute("link");
    this.shadowRoot.querySelector("img").src = this.getAttribute("image-src");
    this.shadowRoot.querySelector("img").alt = this.getAttribute("alt");
    this.shadowRoot.querySelector(".card-container h3").textContent =
      this.getAttribute("heading");
    this.shadowRoot.querySelector(".card-container p").textContent =
      this.getAttribute("text");
  }
}

customElements.define("highlight-card", HighlightCard);
