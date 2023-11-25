import template from './Survey.hbs';

import { Component } from '../../snail/component';
import { stringToElement } from '../../utility/stringToElem';

import { Question } from '../Question/Question';
import { Button } from '../button/button';

import { SurveyAjax } from "../../shared/api/survey";

import { AnswerProps, QuestionProps, initData1 } from '../../types/question';

interface BodyType {
    answers: Array<number>;
}

export class Survey extends Component {
    questions: Array<QuestionProps>;
    title: string;
    context: ContextType;

    constructor(props?: Props) {
        super(template, props);
        this.context = {}
        this.domElement = stringToElement(this.tmpl(this.context));
        this.questions = [];
        this.title = '';
    }

    async getQuestions() {
        const resp = await SurveyAjax.getSurveyParams();
        const body = resp.body;
        if (resp.status != 200) {
            throw body.error;
        }
        console.log(body);
        this.questions = body.questions;
        this.title = body.title;
    }

    async getAnswers() {
        if (!this.domElement) {
            throw new Error('Survey is undefined');
        }

        const result: BodyType = { answers: [] };

        this.questions.map((question: QuestionProps) => {
            question.answers.map((answer: AnswerProps) => {
                const answerBox = document.querySelector('#answer-' + answer.id.toString()) as HTMLInputElement;
                if (answerBox.checked) {
                    result.answers.push(answer.id);
                }
            });
        });

        const resp = await SurveyAjax.addAnswers(1, result);
        const body = resp.body;
        if (resp.status != 200) {
            throw body.error;
        }
        console.log(result);
        this.domElement.remove();
    }

    render(): HTMLElement {
        if (!this.domElement) {
            throw new Error('Survey is undefined');
        }

        this.getQuestions();

        const questionBox = this.domElement.querySelector('#questions-box');
        if (!questionBox) {
            throw new Error('Question box is undefined');
        }

        questionBox.innerHTML = '';
        this.questions.map((question: QuestionProps) => {
            const q = new Question(question);
            questionBox.appendChild(q.render());
        });

        const sendBtn = new Button({ name: 'Отправить', clickFunction: this.getAnswers.bind(this) });

        this.domElement.querySelector('#send-btn')?.replaceWith(sendBtn.render());

        const titleBox = this.domElement.querySelector('#survey-title');
        if (!titleBox) {
            throw new Error('Title box is undefined');
        }

        titleBox.innerHTML = this.title;

        return this.domElement;
    }
}