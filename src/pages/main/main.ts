import template from './main.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

import { Button } from '../../components/button/button';

export class Main extends Component {
    context: ContextType;

    constructor(props?: Props) {
        super(template, props);

        this.context = {};
        this.domElement = stringToElement(this.tmpl(this.context));
    }

    openSurvey() {
        if (!this.domElement) {
            throw new Error("Main is undefined");
        }

        const surveyBlock = this.domElement.querySelector('#survey-block');
        const survey = document.createElement('iframe');
        survey.src = 'http://localhost:9000/survey';
        survey.width = '300px';
        survey.height = '300px';
        surveyBlock?.appendChild(survey);
    }

    closeSurvey() {
        if (!this.domElement) {
            throw new Error("Main is undefined");
        }

        const surveyBlock = this.domElement.querySelector('#survey-block');
        if (surveyBlock) {
            surveyBlock.innerHTML = '';
        }
    }

    render(): HTMLElement {
        if (!this.domElement) {
            throw new Error("Main is undefined");
        }

        const openSurveyBtn = new Button({ name: "Оценить", clickFunction: this.openSurvey.bind(this) });
        openSurveyBtn.appendTo(this.domElement);

        return this.domElement;
    }
}