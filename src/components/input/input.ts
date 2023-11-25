import template from './input.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

interface InputPropsType {
    id?: string,
    value?: string,
    type: string,
    placeholder?: string,
    onChangeFunction?: Function
}

export class Input extends Component {
    inputProps: InputPropsType;
    context: ContextType;

    constructor(inputProps: InputPropsType, props?: Props) {
        super(template, props);
        this.inputProps = inputProps;
        this.context = {...this.inputProps};
        if (!this.inputProps.placeholder) {
            this.context.placeholder = '';
        }
    }

    render(): HTMLElement {
        this.domElement = stringToElement(this.tmpl(this.context));

        return this.domElement;
    }
}