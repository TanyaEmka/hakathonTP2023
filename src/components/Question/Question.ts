import template from './Question.hbs';

import { QuestionProps } from '../../types/question';
import { AnswerProps } from '../../types/question';

import { Answer } from '../Answer/Answer';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

export class Question extends Component {
    questionProps: QuestionProps;
    context: ContextType;

    constructor(questionProps: QuestionProps, props?: Props) {
        super(template, props);
        this.questionProps = structuredClone(questionProps);
        this.context = {...questionProps};
        this.domElement = stringToElement(this.tmpl(this.context));
    }

    render(): HTMLElement {
        if (!this.domElement) {
            throw new Error('Survey is undefined');
        }

        const answersContainer = this.domElement.querySelector('#answers');
        if (!answersContainer) {
            throw new Error('Answers container is undefined');
        }

        answersContainer.innerHTML = '';
        this.questionProps.answers.map((answer: AnswerProps) => {
            const answerBox = new Answer(answer);
            answersContainer.appendChild(answerBox.render());
        });

        return this.domElement;
    }
}