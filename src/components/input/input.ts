import template from './input.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

interface InputPropsType {
    value: string,
    type: string,
    placeholder: string,
    onChangeFunction?: Function
}

export class Input extends Component {
    inputProps: InputPropsType;
    context: ContextType;

    constructor(inputProps: InputPropsType, props?: Props) {
        super(template, props);
        this.inputProps = inputProps;
        this.context = {
            value: this.inputProps.value,
            type: this.inputProps.type,
            placeholder: this.inputProps.placeholder
        };
    }

    render(): HTMLElement {
        this.domElement = stringToElement(this.tmpl(this.context));

        return this.domElement;
    }
}