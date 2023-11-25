import template from './button.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

interface ButtonPropsType {
    name: string,
    clickFunction?: Function
}

export class Button extends Component {
    buttonProps: ButtonPropsType;
    context: ContextType;

    constructor(buttonProps: ButtonPropsType, props?: Props) {
        super(template, props);
        this.buttonProps = buttonProps;
        this.context = {
            name: this.buttonProps.name
        }
    }

    render(): HTMLElement {
        this.domElement = stringToElement(this.tmpl(this.context));
        this.domElement.addEventListener("click", (e) => {
            if (this.buttonProps.clickFunction) {
                this.buttonProps.clickFunction();
            }
        });

        return this.domElement;
    }
}