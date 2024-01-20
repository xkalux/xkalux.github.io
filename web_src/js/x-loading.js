const x_loading_template = document.createElement('template')
x_loading_template.innerHTML = `
<style>
div {
    text-transform: uppercase;
    letter-spacing: .1em;
    font-size: 1rem;
    border: 3px solid #ffffff;
    color: #ffffff;
    -webkit-text-fill-color : #ffffff;
    border-radius: .6em;
    display:flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
}

small{
    padding-top:0.5rem;
    font-size: 0.7rem;
    font-weight:600;
    display:block;
    min-width: fit-content;
    max-width: fit-content;
    white-space: nowrap;
}
span {
    padding-top: 20px;
    display: inline-block;
    width: .7em;
    height: .6em;
    margin: .19em;
    background: #075275;
    border-radius: .1em;
    animation: x-loading-animation 1s infinite alternate;
}

@keyframes x-loading-animation {
    0% {
        opacity: 0
    }

    to {
        opacity: 1
    }
}

span:nth-of-type(2) {
    background: #008fb2;
    animation-delay: .2s
}

span:nth-of-type(3) {
    background: #009b9e;
    animation-delay: .4s
}

span:nth-of-type(4) {
    background: #00a77d;
    animation-delay: .6s
}

span:nth-of-type(5) {
    background: #00b247;
    animation-delay: .8s
}

span:nth-of-type(6) {
    background: #5ab027;
    animation-delay: 1s
}

span:nth-of-type(7) {
    background: #a0b61e;
    animation-delay: 1.2s
}
</style>
<div><strong class="xloading-title">Launching your site</strong>
<small><span></span><span></span><span></span><span></span><span></span><span></span><span></span></small>
<small>It might take a while. Thank you for holding strong.</small>
</div>`

window.customElements.define('x-loading', class extends HTMLElement {
    constructor() {
        super()
        let shadowRoot = this.attachShadow({ mode: 'closed' })
        shadowRoot.appendChild(x_loading_template.content.cloneNode(true))
        this.titleElement = shadowRoot.querySelector('.xloading-title')
    }

    static observedAttributes = ['title']
    attributeChangedCallback(name, oldValue, newValue) {

        if (name === 'title') {
            if (!this.titleElement) return
            if (newValue !== '')
                this.titleElement.textContent = newValue
        }
    }
})