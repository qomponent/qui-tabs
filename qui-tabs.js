import { LitElement, html, css } from 'lit';

class QuiTabs extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: var(--qui-tabs-font-family, sans-serif);
    }
    .tabs {
      display: flex;
      border-bottom: var(--qui-tabs-border-width, 2px) solid var(--qui-tabs-border-color, #ddd);
      overflow-x: auto;
      white-space: nowrap;
    }
    .tab {
      padding: var(--qui-tabs-padding, 10px 20px);
      cursor: pointer;
      border: none;
      background: transparent;
      margin-right: var(--qui-tabs-tab-margin, 5px);
      display: flex;
      align-items: center;
      font-size: var(--qui-tabs-font-size, 14px);
      font-weight: var(--qui-tabs-font-weight, 500);
      position: relative;
      color: var(--qui-tabs-text-color, #555);
      transition: color 0.3s ease-in-out;
    }
    .tab::after {
      content: "";
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: var(--qui-tabs-underline-height, 2px);
      background-color: transparent;
      transition: background-color 0.3s ease-in-out;
    }
    .tab.active {
      color: var(--qui-tabs-active-text-color, #007bff);
    }
    .tab.active::after {
      background-color: var(--qui-tabs-active-underline-color, #007bff);
    }
    .tab[title] {
      position: relative;
    }
    .close-btn {
      margin-left: var(--qui-tabs-close-margin, 10px);
      cursor: pointer;
      font-weight: bold;
      color: var(--qui-tabs-close-color, gray);
      transition: color 0.2s;
      font-size: var(--qui-tabs-close-font-size, 14px);
    }
    .close-btn:hover {
      color: var(--qui-tabs-close-hover-color, red);
    }
    .content {
      padding: var(--qui-tabs-content-padding, 20px);
      min-height: var(--qui-tabs-content-min-height, 100px);
      background: var(--qui-tabs-content-background, #fff);
    }
    ::slotted([slot="tab-content"]) {
      display: none;
    }
    ::slotted([slot="tab-content"].active) {
      display: block;
    }
  `;

  static properties = {
    activeTab: { type: String },
  };

  constructor() {
    super();
    this.activeTab = '';
  }

  firstUpdated() {
    this.updateTabs();
  }

  updateTabs() {
    const tabs = [...this.querySelectorAll('[slot="tab-content"]')];
    if (tabs.length && !tabs.some(tab => tab.getAttribute('key') === this.activeTab)) {
      this.activeTab = tabs[0].getAttribute('key');
    }
    this.requestUpdate();
    this.updateSlotVisibility();
  }

  selectTab(tabKey) {
    this.activeTab = tabKey;
    this.dispatchEvent(new CustomEvent('tab-selected', {
      detail: { key: tabKey },
      bubbles: true,
      composed: true
    }));
    this.updateSlotVisibility();
  }

  updateSlotVisibility() {
    this.querySelectorAll('[slot="tab-content"]').forEach(el => {
      el.classList.toggle('active', el.getAttribute('key') === this.activeTab);
    });
  }

  connectedCallback() {
    super.connectedCallback();
    this.observer = new MutationObserver(() => this.updateTabs());
    this.observer.observe(this, { childList: true });
  }

  disconnectedCallback() {
    this.observer.disconnect();
    super.disconnectedCallback();
  }

  render() {
    const tabs = [...this.querySelectorAll('[slot="tab-content"]')];
    return html`
      <div class="tabs">
        ${tabs.map(
          (tab) => html`
            <div class="tab ${this.activeTab === tab.getAttribute('key') ? 'active' : ''}" 
                 title="${tab.getAttribute('key')}" 
                 @click="${() => this.selectTab(tab.getAttribute('key'))}">
              ${tab.getAttribute('name')}
              <span class="close-btn" @click="${(e) => { e.stopPropagation(); tab.remove(); this.updateTabs(); }}">&times;</span>
            </div>
          `
        )}
      </div>
      <slot name="tab-content"></slot>
    `;
  }
}

customElements.define('qui-tabs', QuiTabs);
