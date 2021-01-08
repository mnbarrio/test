import { LitElement } from 'lit-element';
class MyVista extends LitElement {
    createRenderRoot() {
        const contentWrapper = document.createElement('div');
        this.appendChild(contentWrapper);
        return contentWrapper;
    }
}
//# sourceMappingURL=MyVista.js.map