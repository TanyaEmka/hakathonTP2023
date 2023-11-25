import template from './Answer.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

import { Input } from '../input/input';

import { AnswerProps } from '../../types/question';

export class Answer extends Component {
    answerProps: AnswerProps;
    context: ContextType;

    constructor(answerProps: AnswerProps, props?: Props) {
        super(template, props);
        this.answerProps = answerProps;
        this.context = {
            id: 'answer-' + this.answerProps.id.toString(),
            title: this.answerProps.title
        }
        this.domElement = stringToElement(this.tmpl(this.context));
    }

    render(): HTMLElement {
        if (!this.domElement) {
            throw new Error('Answer is undefined');
        }

        const checkbox = new Input({ type: 'checkbox', id: this.context.id });

        this.domElement.querySelector('#' + this.context.id)?.replaceWith(checkbox.render());

        return this.domElement;
    }
}