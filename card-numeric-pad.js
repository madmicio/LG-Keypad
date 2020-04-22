import {
    LitElement,
    html,
    css
} from "https://unpkg.com/lit-element@2.0.1/lit-element.js?module";

class CardNumericPad extends LitElement {

    static get properties() {
        return {
            hass: {},
            config: {},
            active: {}
        };
    }

    constructor() {
        super();
    }

    render() {
        var coverWidth = this.config.coverWidth ? this.config.coverWidth : "80px";
        var coverHeight = this.config.coverHeight ? this.config.coverHeight : "670px";
        var sliderdistance = this.config.sliderdistance ? this.config.sliderdistance : "150px";

        var entityCounter = 0;


        var background = this.config.background ? this.config.background : "transparent";


        return html`
      ${this.config.entities.map(ent => {
            entityCounter++;
            var switchValue = 0;
            const stateObj = this.hass.states[ent.entity];
            return stateObj ? html`
                <div class="grid-container">
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._1(stateObj)}>1</button>
                  </div>
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._2(stateObj)}>2</button>
                  </div>
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._3(stateObj)}>3</button>
                  </div> 
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._4(stateObj)}>4</button>
                  </div>
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._5(stateObj)}>5</button>
                  </div>
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._6(stateObj)}>6</button>
                  </div> 
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._7(stateObj)}>7</button>
                  </div>
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._8(stateObj)}>8</button>
                  </div>
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._9(stateObj)}>9</button>
                  </div>
                  <div class="grid-item">
                    <button class="btn"></button>
                  </div>
                  <div class="grid-item">
                    <button class="btn ripple" @click=${e => this._0(stateObj)}>0</button>
                  </div>
                  <div class="grid-item">
                    <button class="btn"></button>
                  </div> 
                </div>
          ` : html``;
        })}
    `;
    }

    updated() {
    }

    _1(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "1"
        });
    }

    _2(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "2"
        });
    }

    _3(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "3"
        });
    }

    _4(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "4"
        });
    }

    _5(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "5"
        });
    }

    _6(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "6"
        });
    }

    _7(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "7"
        });
    }

    _8(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "8"
        });
    }

    _9(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "9"
        });
    }

    _0(state, value) {
        this.hass.callService("webostv", "button", {
            entity_id: state.entity_id,
            button: "0"
        });
    }


    setConfig(config) {
        if (!config.entities) {
            throw new Error("You need to define entities");
        }
        this.config = config;
    }

    getCardSize() {
        return this.config.entities.length + 1;
    }

    static get styles() {
        return css`
    .grid-container {
      display: grid;
      grid-template-columns: auto auto auto;
      grid-template-rows: 115px 115px 115px 115px;
      background-color: transparent;
      padding: 10px;
      overflow: hidden;
    }
    
    .grid-item {
      background-color: transparent;
      // border: 1px solid rgba(0, 0, 0, 0.8);
      font-size: 30px;
      text-align: center;
      overflow: hidden;
    }

    .btn {
      background-color: var(--primary-background-color);
      color: var(--primary-text-color);
      font-size: 26px;
      width: 100%;
      height: 100%;
      border-width: 0px;
     border-radius: 80
    }
    
    /*Create ripple effec*/
    
    .ripple {
      position: relative;
      overflow: hidden;
      transform: translate3d(0, 0, 0);
    }
    
    .ripple:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      pointer-events: none;
      background-image: radial-gradient(circle, #7a7f87 3%, transparent 7.01%);
      background-repeat: no-repeat;
      background-position: 50%;
      transform: scale(10, 10);
      opacity: 0;
      transition: transform .5s, opacity 1s;
    }
    
    .ripple:active:after {
      transform: scale(0, 0);
      opacity: .3;
      transition: 0s;
    }
    button:focus {outline:0;}
    `;
    }

}

customElements.define('card-numeric-pad', CardNumericPad);
