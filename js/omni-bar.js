class OmniBar extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.options = [];
      this.visible = false;
      this.selectedOptionIndex = -1; // New property to keep track of the selected option via keyboard
      this.initKeySequenceListener();
      this.initOutsideClickListener();
      this.initEscapeListener();
    }

    connectedCallback() {
        console.log("Passei");
        if (this.hasAttribute('data-options')) {
            console.log(this.getAttribute('data-options'));
            this.options = JSON.parse(this.getAttribute('data-options'));
        }
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: ${this.visible ? 'block' : 'none'};
          z-index: 1000; /* Ensure it's on top of other elements */
          /* Default styles, override with attributes or properties */
          --font-color: black;
          --border-color: #ccc;
          --background-color: white;
          --width: 300px;
          --height: 50px;
        }
        input, ul {
          width: var(--width, 300px);
          box-sizing: border-box;
        }
        input {
          height: var(--height, 50px);
          border: 1px solid var(--border-color, #ccc);
          color: var(--font-color, black);
          background-color: var(--background-color, white);
          padding: 10px;
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          background-color: var(--background-color, white);
          border: 1px solid var(--border-color, #ccc);
          border-top: none;
        }
        li {
          padding: 10px;
          cursor: pointer;
        }
        li:hover {
          background-color: #eee;
        }
      </style>
      <input type="text" id="search" placeholder="Search...">
      <ul id="suggestions"></ul>
    `;
        this.initSearchListener();
        this.initSelectListener();
    }


    initKeySequenceListener() {
        let keysPressed = {};
        window.addEventListener('keydown', (event) => {
            keysPressed[event.key] = true;
            // Check if the trigger sequence (,s) is pressed
            if (keysPressed[','] && keysPressed['s']) {
                event.preventDefault(); // Prevent the 's' from being inputted
                this.toggleVisibility(true);
                this.shadowRoot.querySelector('#search').focus(); // Auto-focus on activation
                // Reset any input or selection states if necessary
                this.shadowRoot.querySelector('#search').value = '';
                this.selectedOptionIndex = -1;
                this.updateSuggestions([]);
            }
        });

        window.addEventListener('keyup', (event) => {
            delete keysPressed[event.key];
        });
    }

    initOutsideClickListener() {
        window.addEventListener('click', (event) => {
            if (!this.contains(event.target) && this.visible) {
                this.toggleVisibility(false);
            }
        });
    }

    initEscapeListener() {
        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' || event.key === 'Tab') {
                this.toggleVisibility(false);
            } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                this.navigateOptions(event.key);
            }
        });
    }

    initSearchListener() {
        const input = this.shadowRoot.querySelector('#search');
        input.addEventListener('input', () => {
            const searchTerm = input.value.toLowerCase();
            const suggestions = this.options.filter(option =>
                option.toLowerCase().includes(searchTerm)
            );
            this.updateSuggestions(suggestions);
        });
        this.selectedOptionIndex = -1;
    }

    navigateOptions(key) {
        const suggestions = this.shadowRoot.querySelectorAll('li');
        if (!suggestions.length) return;

        // Unselect the current option
        if (this.selectedOptionIndex >= 0) {
            suggestions[this.selectedOptionIndex].classList.remove('selected');
        }

        // Update selectedOptionIndex based on the key pressed
        if (key === 'ArrowDown') {
            this.selectedOptionIndex = (this.selectedOptionIndex + 1) % suggestions.length;
        } else if (key === 'ArrowUp') {
            this.selectedOptionIndex = (this.selectedOptionIndex - 1 + suggestions.length) % suggestions.length;
        }

        // Select the new option
        suggestions[this.selectedOptionIndex].classList.add('selected');
        suggestions[this.selectedOptionIndex].scrollIntoView({ block: 'nearest' });
    }

    initSelectListener() {
        const ul = this.shadowRoot.querySelector('#suggestions');
        ul.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                this.selectOption(event.target.textContent);
            }
        });

        const input = this.shadowRoot.querySelector('#search');
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.toggleVisibility(false);
            }
        });
    }

    updateSuggestions(suggestions) {
        const ul = this.shadowRoot.querySelector('#suggestions');
        ul.innerHTML = '';
        suggestions.forEach(option => {
            const li = document.createElement('li');
            li.textContent = option;
            ul.appendChild(li);
        });
    }

    selectOption(option) {
        this.dispatchEvent(new CustomEvent('option-selected', { detail: option }));
        this.toggleVisibility(false);
    }

    toggleVisibility(makeVisible) {
        this.visible = makeVisible;
        if (!this.visible) {
            this.shadowRoot.querySelector('#search').value = ''; // Clear input
            this.shadowRoot.querySelector('#suggestions').innerHTML = ''; // Clear suggestions
        }
        this.render();
    }
}

customElements.define('omni-bar', OmniBar);
