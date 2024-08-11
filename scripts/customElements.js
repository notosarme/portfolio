class HighlightCard extends HTMLElement {
  constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="/styles/custom.css">
          <div class="card">
              <img src="" alt="" />
              <div class="card-container">
                <p></p>
              </div>
          </div>
      `;
  }

  connectedCallback() {
      this.shadowRoot.querySelector('img').src = this.getAttribute('image-src');
      this.shadowRoot.querySelector('img').alt = this.getAttribute('alt');
      this.shadowRoot.querySelector('.card-container p').textContent = this.getAttribute('text');
  }
}

customElements.define('highlight-card', HighlightCard);
