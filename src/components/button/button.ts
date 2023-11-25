import { Component } from '../../snail/component';
import template from './button.hbs';
import { stringToElement } from '../../utility/stringToElem';

export class Button extends Component {

    constructor(context?: Props, props?: Props) {
        super(template, context, props);
    }

    render(): HTMLElement {
        this.domElement = stringToElement(this.tmpl(this.context));
        this.domElement.addEventListener("click", (e) => {
            (this.context.count as number) += 1;
            this.updateInnerElement(this.domElement, this.context.count);
        });

        return this.domElement;
    }
}