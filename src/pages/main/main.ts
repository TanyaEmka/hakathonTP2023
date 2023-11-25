import template from './main.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

import { Button } from '../../components/button/button';

import App from '../../App';

export class Main extends Component {
    context: ContextType;
    surveyVisible: boolean;

    constructor(props?: Props) {
        super(template, props);

        this.context = {};
        this.domElement = stringToElement(this.tmpl(this.context));
        this.surveyVisible = false;
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

        this.surveyVisible = true;
    }

    closeSurvey() {
        if (!this.domElement) {
            throw new Error("Main is undefined");
        }

        const surveyBlock = this.domElement.querySelector('#survey-block');
        if (surveyBlock) {
            surveyBlock.innerHTML = '';
        }

        this.surveyVisible = false;
    }

    updateSurvey() {
        if (!this.surveyVisible) {
            this.openSurvey();
        } else {
            this.closeSurvey();
        }
    }

    render(): HTMLElement {
        if (!this.domElement) {
            throw new Error("Main is undefined");
        }

        this.closeSurvey();

        const contentContainer = this.domElement.querySelector('#main-content') as HTMLElement;
        if (!contentContainer) {
            throw new Error("Main content is undefined");
        }

        contentContainer.innerHTML = '';

        const openSurveyBtn = new Button({ name: "Оценить", clickFunction: this.updateSurvey.bind(this) });
        openSurveyBtn.appendTo(contentContainer);

        const signinBtn = new Button({ name: "Войти", clickFunction: () => { App.router.navigateTo('/signin'); } });
        signinBtn.appendTo(contentContainer);


        return this.domElement;
    }
}