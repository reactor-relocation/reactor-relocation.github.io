class FaqQuestionElement extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            let newContent = `
            <div class="row justify-content-start faq faq-question">
                <div class="alert alert-danger col-10">
                    <i class="fas fa-question-circle"></i>
                    ${this.innerHTML}
                </div>
            </div>`;
            
            this.innerHTML = newContent;
        }, 50);
    }
}

class FaqAnswerElement extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            let newContent = `
            <div class="row justify-content-end faq faq-answer">
                <div class="alert alert-secondary col-10">
                    ${this.innerHTML}
                    <i class="fas fa-exclamation-circle"></i>
                </div>
            </div>`;
            
            this.innerHTML = newContent;
        }, 50);
    }
}

class FaqRemarkElement extends HTMLElement {
    connectedCallback() {
        setTimeout(() => {
            let newContent = `
            <div class="row justify-content-end faq faq-answer">
                <div class="alert alert-warning col-10">
                    ${this.innerHTML}
                    <i class="fas fa-exclamation-triangle"></i>
                </div>
            </div>`;
            
            this.innerHTML = newContent;
        }, 50);
    }
}

customElements.define("faq-question", FaqQuestionElement);
customElements.define("faq-answer", FaqAnswerElement);
customElements.define("faq-remark", FaqRemarkElement);
